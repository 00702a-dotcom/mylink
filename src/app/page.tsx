"use client";

import { useState } from "react";
import Image from "next/image";

export default function ProfilePage() {
  const [copied, setCopied] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setToastMessage("🎉 프로필 링크 복사 완료!");
      setTimeout(() => {
        setCopied(false);
        setToastMessage("");
      }, 2500);
    } catch {
      alert("링크 복사에 실패했습니다.");
    }
  };

  const techStacks = [
    { name: "Next.js", bg: "bg-black text-white dark:bg-white dark:text-black" },
    { name: "React", bg: "bg-[#61DAFB] text-black" },
    { name: "TypeScript", bg: "bg-[#3178C6] text-white" },
    { name: "Tailwind CSS", bg: "bg-[#38BDF8] text-black" },
    { name: "Firebase", bg: "bg-[#FFCA28] text-black" },
    { name: "Git / GitHub", bg: "bg-[#F05032] text-white" },
    { name: "Vibe Coding", bg: "bg-[#E879F9] text-black font-black" },
    { name: "Full-Stack", bg: "bg-[#4ADE80] text-black" },
  ];

  const highlights = [
    {
      badge: "SPEED",
      title: "빠른 실행력",
      desc: "아이디어를 즉각 코드로 구현하는 신속한 프로토타이핑",
      color: "bg-[#FEF08A] dark:bg-[#713f12]/40", // Yellow
      icon: "⚡",
    },
    {
      badge: "MODERN",
      title: "모던 웹 개발",
      desc: "Next.js · React 기반의 유려하고 인터랙티브한 사용자 경험",
      color: "bg-[#BAE6FD] dark:bg-[#0c4a6e]/40", // Blue
      icon: "💻",
    },
    {
      badge: "GROWTH",
      title: "끝없는 탐구",
      desc: "최신 AI 도구와 새로운 기술을 끊임없이 학습하고 적용",
      color: "bg-[#BBF7D0] dark:bg-[#14532d]/40", // Green
      icon: "🚀",
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com",
      desc: "오픈소스 및 프로젝트 저장소 둘러보기",
      tag: "REPO",
      tagColor: "bg-[#E0E7FF] text-indigo-800",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      ),
    },
    {
      name: "Tech Blog",
      href: "https://velog.io",
      desc: "배운 점과 트러블슈팅 과정을 기록하는 블로그",
      tag: "POSTS",
      tagColor: "bg-[#FEF08A] text-amber-900",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        </svg>
      ),
    },
    {
      name: "Portfolio & Works",
      href: "#projects",
      desc: "제작한 웹 애플리케이션 및 사이드 프로젝트",
      tag: "WORKS",
      tagColor: "bg-[#FBCFE8] text-pink-900",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      ),
    },
  ];

  return (
    <main className="neo-dots min-h-screen w-full flex items-center justify-center p-4 sm:p-8 md:p-12 text-slate-900 dark:text-zinc-100 selection:bg-yellow-300 selection:text-black">
      
      {/* 바깥쪽 장식용 스티커 (데스크톱 전용) */}
      <div className="hidden lg:block fixed top-10 left-10 rotate-[-8deg] pointer-events-none z-10">
        <div className="bg-[#FFE600] text-black font-black text-xs px-3.5 py-1.5 border-3 border-black shadow-[4px_4px_0px_0px_#000] rounded-lg tracking-wider">
          ★ 100% VIBE CODED
        </div>
      </div>
      <div className="hidden lg:block fixed bottom-10 right-10 rotate-[6deg] pointer-events-none z-10">
        <div className="bg-[#67E8F9] text-black font-black text-xs px-3.5 py-1.5 border-3 border-black shadow-[4px_4px_0px_0px_#000] rounded-lg tracking-wider">
          ⚡ BUILD IN PUBLIC
        </div>
      </div>

      {/* 메인 네오브루탈리즘 카드 */}
      <div className="w-full max-w-xl bg-white dark:bg-[#18181b] border-4 border-black dark:border-white shadow-[8px_8px_0px_0px_#000] dark:shadow-[8px_8px_0px_0px_#fff] rounded-3xl overflow-hidden transition-all">
        
        {/* 상단 배너 영역 */}
        <div className="relative w-full h-40 sm:h-52 border-b-4 border-black dark:border-white overflow-hidden bg-[#FFE600]">
          <Image
            src="/dev-banner.jpg"
            alt="Developer Banner"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/15 pointer-events-none" />

          {/* 네오브루탈 스티커 배지 (우측 상단) */}
          <div className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 flex flex-col items-end gap-1.5">
            <div className="inline-flex items-center gap-1.5 bg-[#4ADE80] text-black font-black text-[11px] sm:text-xs px-3 py-1 border-2 border-black shadow-[3px_3px_0px_0px_#000] rounded-lg">
              <span className="w-2.5 h-2.5 rounded-full bg-black animate-pulse" />
              AVAILABLE FOR WORK
            </div>
            <div className="hidden sm:inline-block bg-[#F472B6] text-black font-black text-[10px] px-2.5 py-0.5 border-2 border-black shadow-[2px_2px_0px_0px_#000] rounded-md">
              📍 SEOUL, KR
            </div>
          </div>
        </div>

        {/* 본문 콘텐츠 패딩 영역 */}
        <div className="p-5 sm:p-8 pt-0">
          
          {/* 아바타 & 퀵 태그 영역 (배너 위로 겹침) */}
          <div className="flex flex-col sm:flex-row items-center sm:items-end justify-between -mt-16 sm:-mt-20 mb-5 gap-3">
            {/* 아바타 박스 */}
            <div className="relative">
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-4 border-black dark:border-white shadow-[6px_6px_0px_0px_#000] dark:shadow-[6px_6px_0px_0px_#fff] bg-[#FEF08A] relative group">
                <Image
                  src="/profile-avatar.jpg"
                  alt="배찬혁 프로필 아바타"
                  fill
                  priority
                  className="object-cover transition-transform duration-200 group-hover:scale-105"
                />
              </div>
              {/* 온라인 상태 핀 */}
              <div className="absolute -bottom-2 -right-2 bg-[#22C55E] text-black font-black text-[10px] px-2 py-0.5 border-2 border-black shadow-[2px_2px_0px_0px_#000] rounded-md flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                ONLINE
              </div>
            </div>

            {/* 역할 스티커 */}
            <div className="flex flex-wrap gap-2 justify-center sm:justify-end">
              <span className="bg-[#E879F9] text-black font-extrabold text-xs px-3 py-1 border-2 border-black shadow-[2px_2px_0px_0px_#000] rounded-lg">
                ⚡ 바이브 코더
              </span>
              <span className="bg-[#67E8F9] text-black font-extrabold text-xs px-3 py-1 border-2 border-black shadow-[2px_2px_0px_0px_#000] rounded-lg">
                🚀 주니어 개발자
              </span>
            </div>
          </div>

          {/* 이름 & 소개 헤더 */}
          <div className="text-center sm:text-left">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 justify-center sm:justify-start">
              <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-black dark:text-white">
                배찬혁
              </h1>
              <span className="inline-block bg-[#FDE047] text-black font-mono font-bold text-xs px-2.5 py-1 border-2 border-black shadow-[2px_2px_0px_0px_#000] rounded-md self-center sm:self-auto">
                @chanhyeok.dev
              </span>
            </div>
            <p className="mt-2 text-sm sm:text-base font-bold text-slate-800 dark:text-zinc-200">
              💡 코드와 아이디어로 가치를 만드는 소프트웨어 개발자
            </p>
          </div>

          {/* 개발자 소개글 박스 (네오브루탈 시그니처) */}
          <div className="mt-5 p-4 sm:p-5 rounded-2xl bg-[#FFFBEB] dark:bg-[#27272a] border-3 border-black dark:border-white shadow-[5px_5px_0px_0px_#000] dark:shadow-[5px_5px_0px_0px_#fff] relative">
            <div className="absolute -top-3 left-4 bg-black text-white dark:bg-white dark:text-black font-black text-[10px] px-2.5 py-0.5 uppercase tracking-wider rounded border border-black">
              DEV BIO // 소개
            </div>
            <p className="mt-1 text-slate-900 dark:text-zinc-100 text-sm sm:text-[15px] leading-relaxed font-semibold">
              &ldquo;새로운 기술을 탐구하고 문제를 해결하며, 사용자에게 가치를 전달하는 개발자 배찬혁입니다.
              기초적인 웹 표준부터 최신 프레임워크와 AI 바이브 코딩까지, 끝없는 호기심으로 매일 더 나은 프로덕트를 실천합니다.&rdquo;
            </p>
          </div>

          {/* 핵심 역량 3분할 네오 카드 */}
          <div className="mt-7">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 bg-black dark:bg-white inline-block" />
              <h2 className="text-xs sm:text-sm font-black uppercase tracking-wider text-black dark:text-white">
                KEY HIGHLIGHTS // 핵심 강점
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className={`p-3.5 rounded-xl border-2 border-black dark:border-white shadow-[3px_3px_0px_0px_#000] dark:shadow-[3px_3px_0px_0px_#fff] ${item.color} text-black dark:text-zinc-100 transition-transform hover:-translate-y-1`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-lg">{item.icon}</span>
                    <span className="text-[9px] font-black font-mono px-1.5 py-0.5 bg-black text-white dark:bg-white dark:text-black rounded">
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="text-xs font-black mb-1">{item.title}</h3>
                  <p className="text-[11px] leading-tight font-medium opacity-90">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 기술 스택 스티커 모음 */}
          <div className="mt-7">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 bg-black dark:bg-white inline-block" />
              <h2 className="text-xs sm:text-sm font-black uppercase tracking-wider text-black dark:text-white">
                TECH STACK // 사용 기술
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {techStacks.map((tech) => (
                <span
                  key={tech.name}
                  className={`px-3 py-1 rounded-lg text-xs font-bold border-2 border-black shadow-[2px_2px_0px_0px_#000] transition-all hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_#000] cursor-default ${tech.bg}`}
                >
                  #{tech.name}
                </span>
              ))}
            </div>
          </div>

          {/* 소셜 및 링크 섹션 */}
          <div className="mt-7">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 bg-black dark:bg-white inline-block" />
              <h2 className="text-xs sm:text-sm font-black uppercase tracking-wider text-black dark:text-white">
                CONNECT // 링크 & 소셜
              </h2>
            </div>
            <div className="space-y-2.5">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-3.5 rounded-xl bg-white dark:bg-zinc-800 border-3 border-black dark:border-white shadow-[4px_4px_0px_0px_#000] dark:shadow-[4px_4px_0px_0px_#fff] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#000] dark:hover:shadow-[2px_2px_0px_0px_#fff] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#FFE600] text-black border-2 border-black flex items-center justify-center font-bold shadow-[2px_2px_0px_0px_#000] group-hover:rotate-6 transition-transform">
                      {link.icon}
                    </div>
                    <div className="text-left">
                      <div className="flex items-center gap-2">
                        <span className="text-xs sm:text-sm font-black text-black dark:text-white">
                          {link.name}
                        </span>
                        <span className={`text-[9px] font-black px-1.5 py-0.2 rounded border border-black ${link.tagColor}`}>
                          {link.tag}
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-600 dark:text-zinc-400 font-medium">
                        {link.desc}
                      </div>
                    </div>
                  </div>
                  <div className="w-7 h-7 rounded-lg bg-black text-white dark:bg-white dark:text-black flex items-center justify-center font-black text-xs group-hover:translate-x-1 transition-transform">
                    →
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* 메인 액션 버튼 듀오 */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            {/* 프로필 링크 복사 버튼 */}
            <button
              type="button"
              onClick={handleCopyLink}
              className="flex-1 py-3.5 px-5 rounded-xl font-black text-xs sm:text-sm text-black bg-[#FFE600] hover:bg-[#FACC15] border-3 border-black shadow-[4px_4px_0px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#000] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              {copied ? (
                <>
                  <span className="text-base">✓</span>
                  <span>링크 복사 완료!</span>
                </>
              ) : (
                <>
                  <span className="text-base">📋</span>
                  <span>프로필 링크 복사하기</span>
                </>
              )}
            </button>

            {/* 문의 메일 버튼 */}
            <a
              href="mailto:contact@example.com"
              className="py-3.5 px-6 rounded-xl font-black text-xs sm:text-sm text-black bg-[#67E8F9] hover:bg-[#22D3EE] border-3 border-black shadow-[4px_4px_0px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#000] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all flex items-center justify-center gap-2"
            >
              <span className="text-base">✉️</span>
              <span>이메일 문의하기</span>
            </a>
          </div>

          {/* 푸터 카피라이트 */}
          <div className="mt-8 pt-4 border-t-2 border-black/15 dark:border-white/15 text-center text-xs font-bold font-mono text-slate-500 dark:text-zinc-400">
            [ NEO-BRUTALISM LINK PROFILE ] © 2026 배찬혁
          </div>
        </div>
      </div>

      {/* 네오브루탈리즘 토스트 알림 */}
      {toastMessage && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 px-5 py-3 rounded-xl bg-[#00F0FF] text-black font-black text-xs sm:text-sm border-3 border-black shadow-[5px_5px_0px_0px_#000] transition-all animate-bounce flex items-center gap-2 z-50">
          <span>{toastMessage}</span>
        </div>
      )}
    </main>
  );
}
