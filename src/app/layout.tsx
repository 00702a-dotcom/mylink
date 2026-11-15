import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "배찬혁 (Bae Chan-hyeok) - 치지직 CHZZK DEV",
  description: "새로운 기술을 탐구하고 문제를 해결하며, 사용자에게 가치를 전달하는 개발자 배찬혁의 치지직 채널입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${inter.variable} theme_dark dark h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#141517] text-[#FFFFFF]">
        {children}
      </body>
    </html>
  );
}
