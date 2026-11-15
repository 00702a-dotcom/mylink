import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp,
  Timestamp,
} from "firebase/firestore";
import { db } from "./firebase";

export interface LinkItem {
  id: string;
  title: string;
  url: string;
  description?: string;
  createdAt?: Timestamp | null;
}

const COLLECTION_PATH = ["users", "anonymous", "links"] as const;

export const getLinksCollection = () => {
  return collection(db, COLLECTION_PATH[0], COLLECTION_PATH[1], COLLECTION_PATH[2]);
};

export async function addLink(data: {
  title: string;
  url: string;
  description?: string;
}) {
  let normalizedUrl = data.url.trim();
  if (!/^https?:\/\//i.test(normalizedUrl)) {
    normalizedUrl = `https://${normalizedUrl}`;
  }

  const colRef = getLinksCollection();
  const docRef = await addDoc(colRef, {
    title: data.title.trim(),
    url: normalizedUrl,
    description: data.description?.trim() || "",
    createdAt: serverTimestamp(),
  });

  return docRef.id;
}

export async function deleteLink(id: string) {
  const docRef = doc(db, COLLECTION_PATH[0], COLLECTION_PATH[1], COLLECTION_PATH[2], id);
  await deleteDoc(docRef);
}

export function subscribeLinks(
  onUpdate: (links: LinkItem[]) => void,
  onError?: (err: Error) => void
) {
  const colRef = getLinksCollection();
  const q = query(colRef, orderBy("createdAt", "desc"));

  return onSnapshot(
    q,
    (snapshot) => {
      const items: LinkItem[] = snapshot.docs.map((docSnap) => {
        const data = docSnap.data();
        return {
          id: docSnap.id,
          title: data.title ?? "",
          url: data.url ?? "",
          description: data.description ?? "",
          createdAt: data.createdAt ?? null,
        };
      });
      onUpdate(items);
    },
    (error) => {
      // If ordering fails (e.g., missing index or empty timestamp during write), fallback to unordered snapshot
      console.warn("Ordered subscription failed, falling back to unordered listener:", error);
      return onSnapshot(
        colRef,
        (fallbackSnapshot) => {
          const items: LinkItem[] = fallbackSnapshot.docs.map((docSnap) => {
            const data = docSnap.data();
            return {
              id: docSnap.id,
              title: data.title ?? "",
              url: data.url ?? "",
              description: data.description ?? "",
              createdAt: data.createdAt ?? null,
            };
          });
          // Sort client-side
          items.sort((a, b) => {
            const timeA = a.createdAt?.toMillis ? a.createdAt.toMillis() : 0;
            const timeB = b.createdAt?.toMillis ? b.createdAt.toMillis() : 0;
            return timeB - timeA;
          });
          onUpdate(items);
        },
        onError
      );
    }
  );
}
