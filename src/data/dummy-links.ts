export type LinkCategory = "개발" | "블로그" | "소셜" | "포트폴리오" | "커뮤니티";

export interface DummyLink {
  id: string;
  title: string;
  description: string;
  url: string;
  category: LinkCategory;
  icon: string; // emoji
  isNew?: boolean;
  isPinned?: boolean;
}

export const DUMMY_LINKS: DummyLink[] = [
  {
    id: "1",
    title: "GitHub",
    description: "오픈소스 프로젝트와 코드 저장소를 확인해요",
    url: "https://github.com",
    category: "개발",
    icon: "🐙",
    isPinned: true,
  },
  {
    id: "2",
    title: "Velog",
    description: "개발 공부 과정과 트러블슈팅 기록을 남겨요",
    url: "https://velog.io",
    category: "블로그",
    icon: "📝",
    isPinned: true,
  },
  {
    id: "3",
    title: "포트폴리오 사이트",
    description: "지금까지 만든 프로젝트를 한눈에 볼 수 있어요",
    url: "https://example.com/portfolio",
    category: "포트폴리오",
    icon: "🎨",
    isNew: true,
  },
  {
    id: "4",
    title: "LinkedIn",
    description: "커리어 이력과 협업 제안은 여기서 해주세요",
    url: "https://linkedin.com",
    category: "소셜",
    icon: "💼",
  },
  {
    id: "5",
    title: "Next.js 16 AI 바이브 코딩 강의",
    description: "자연어로 풀스택 MVP를 1시간 만에 만드는 방법을 공유해요",
    url: "https://youtube.com",
    category: "개발",
    icon: "🎥",
    isNew: true,
  },
  {
    id: "6",
    title: "오픈카카오 채팅방",
    description: "바이브 코딩 & AI 개발 이야기를 나눠요",
    url: "https://open.kakao.com",
    category: "커뮤니티",
    icon: "💬",
  },
  {
    id: "7",
    title: "Notion 개발 노트",
    description: "공부한 내용, 아이디어, 프로젝트 로드맵을 정리해요",
    url: "https://notion.so",
    category: "블로그",
    icon: "📓",
  },
  {
    id: "8",
    title: "Instagram",
    description: "일상과 개발 과정 비하인드를 공유해요",
    url: "https://instagram.com",
    category: "소셜",
    icon: "📸",
  },
];

export const CATEGORY_COLORS: Record<LinkCategory, string> = {
  개발: "bg-blue-50 text-blue-600 border-blue-200",
  블로그: "bg-purple-50 text-purple-600 border-purple-200",
  소셜: "bg-pink-50 text-pink-600 border-pink-200",
  포트폴리오: "bg-orange-50 text-orange-600 border-orange-200",
  커뮤니티: "bg-green-50 text-green-600 border-green-200",
};
