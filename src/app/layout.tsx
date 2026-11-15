import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "배찬혁 — 개발자 프로필",
  description: "새로운 기술을 탐구하고 문제를 해결하며, 사용자에게 가치를 전달하는 개발자 배찬혁입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full bg-[#F9FAFB] text-[#191F28] font-sans">
        {children}
      </body>
    </html>
  );
}
