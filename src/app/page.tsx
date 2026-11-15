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
      setToastMessage("프로필 링크가 클립보드에 복사되었습니다!");
      setTimeout(() => {
        setCopied(false);
        setToastMessage("");
      }, 2500);
    } catch {
      alert("링크 복사에 실패했습니다.");
    }
  };

  const techStacks = [
    { name: "Next.js", color: "bg-black text-white dark:bg-white dark:text-black" },
    { name: "React", color: "bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-200 dark:border-sky-800" },
    { name: "TypeScript", color: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800" },
    { name: "Tailwind CSS", color: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-800" },
    { name: "Firebase", color: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-800" },
    { name: "Git & GitHub", color: "bg-slate-500/10 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700" },
    { name: "Vibe Coding", color: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-200 dark:border-purple-800 font-semibold" },
  ];

  const highlights = [
    {
      title: "빠른 실행력",
      desc: "아이디어를 즉시 코드로 구현하는 프로토타이핑",
      icon: (
        <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: "모던 웹 개발",
      desc: "Next.js · React 기반의 빠르고 유려한 사용자 경험",
      icon: (
        <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      title: "지속적인 성장",
      desc: "새로운 기술과 AI 도구를 적극 학습하고 탐구",
      icon: (
        <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com",
      desc: "코드 저장소 & 기여 활동",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      ),
    },
    {
      name: "Blog / Velog",
      href: "https://velog.io",
      desc: "개발 일지 & 배운 점 기록",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        </svg>
      ),
    },
    {
      name: "Contact Email",
      href: "mailto:contact@example.com",
      desc: "프로젝트 및 협업 문의",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  return (
    <main className="relative min-h-screen w-full flex items-center justify-center p-4 sm:p-6 md:p-10 bg-slate-50 dark:bg-zinc-950 text-slate-800 dark:text-zinc-100 overflow-x-hidden selection:bg-blue-500 selection:text-white">
      {/* 백그라운드 장식용 발광 오라 */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-gradient-to-tr from-blue-500/20 via-indigo-500/15 to-purple-500/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* 메인 반응형 프로필 카드 */}
      <div className="w-full max-w-lg sm:max-w-xl bg-white/95 dark:bg-zinc-900/95 rounded-3xl shadow-2xl shadow-slate-200/60 dark:shadow-black/60 border border-slate-200/80 dark:border-zinc-800 overflow-hidden backdrop-blur-xl transition-all duration-300">
        
        {/* 상단 커버 배너 이미지 */}
        <div className="relative w-full h-36 sm:h-48 overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
          <Image
            src="/dev-banner.jpg"
            alt="Developer Banner"
            fill
            priority
            className="object-cover opacity-90 transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
          
          {/* 상태 배지 (배너 우측 상단) */}
          <div className="absolute top-3 right-3 sm:top-4 sm:right-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-black/40 backdrop-blur-md text-white border border-white/20 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            협업 & 프로젝트 가능
          </div>
        </div>

        {/* 프로필 본문 영역 */}
        <div className="px-5 sm:px-8 pb-8 pt-0">
          {/* 아바타 이미지 (배너와 겹치는 구조) */}
          <div className="relative flex justify-center sm:justify-start -mt-16 sm:-mt-20 mb-4">
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1 bg-gradient-to-tr from-blue-500 via-indigo-500 to-purple-500 shadow-xl shadow-blue-500/20 group">
              <div className="relative w-full h-full rounded-full overflow-hidden bg-slate-100 dark:bg-zinc-800 border-2 border-white dark:border-zinc-900">
                <Image
                  src="/profile-avatar.jpg"
                  alt="배찬혁 프로필 아바타"
                  fill
                  priority
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute bottom-1 right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-white dark:border-zinc-900 flex items-center justify-center shadow-md" title="현재 온라인">
                <span className="w-2 h-2 rounded-full bg-white animate-ping opacity-75" />
              </div>
            </div>
          </div>

          {/* 이름 & 타이틀 */}
          <div className="text-center sm:text-left">
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                배찬혁
              </h1>
              <span className="text-sm font-medium text-slate-500 dark:text-zinc-400">
                @chanhyeok · Junior Developer
              </span>
            </div>

            <p className="mt-1 text-sm sm:text-base font-semibold text-blue-600 dark:text-blue-400">
              💡 아이디어를 코드로 실현하는 주니어 개발자 & 바이브 코더
            </p>
          </div>

          {/* 소개글 카드 */}
          <div className="mt-5 p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50/30 dark:from-zinc-800/60 dark:to-zinc-800/20 border border-slate-200/70 dark:border-zinc-800 relative">
            <div className="text-slate-400 dark:text-zinc-500 text-2xl font-serif leading-none absolute top-3 left-3 select-none">
              &ldquo;
            </div>
            <p className="pl-4 text-slate-700 dark:text-zinc-200 text-sm sm:text-base leading-relaxed font-normal">
              새로운 기술을 탐구하고 문제를 해결하며, 사용자에게 가치를 전달하는 개발자 배찬혁입니다.
              기초에 충실하면서도 최신 AI 도구와 모던 웹 생태계를 적극 활용해 빠르고 단단한 프로덕트를 만들어갑니다.
            </p>
          </div>

          {/* 핵심 역량 하이라이트 그리드 */}
          <div className="mt-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500 mb-3 text-center sm:text-left">
              Key Strengths
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="p-3 rounded-xl bg-slate-50 dark:bg-zinc-800/40 border border-slate-100 dark:border-zinc-800 hover:border-blue-200 dark:hover:border-zinc-700 transition"
                >
                  <div className="flex items-center gap-2 mb-1">
                    {item.icon}
                    <span className="text-xs font-bold text-slate-800 dark:text-zinc-200">
                      {item.title}
                    </span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-slate-500 dark:text-zinc-400 leading-snug">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 기술 스택 영역 */}
          <div className="mt-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500 mb-3 text-center sm:text-left">
              Tech & Tools
            </h2>
            <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
              {techStacks.map((tech) => (
                <span
                  key={tech.name}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition hover:scale-105 select-none ${tech.color}`}
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </div>

          {/* 링크 및 소셜 카드 목록 */}
          <div className="mt-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500 mb-3 text-center sm:text-left">
              Connect & Links
            </h2>
            <div className="space-y-2">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 dark:bg-zinc-800/50 border border-slate-200/60 dark:border-zinc-800 hover:bg-blue-50/60 dark:hover:bg-zinc-800 hover:border-blue-300 dark:hover:border-zinc-700 transition-all duration-200 active:scale-[0.99]"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-white dark:bg-zinc-700 text-slate-700 dark:text-zinc-200 flex items-center justify-center shadow-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:scale-105 transition">
                      {link.icon}
                    </div>
                    <div className="text-left">
                      <div className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
                        {link.name}
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-zinc-400">
                        {link.desc}
                      </div>
                    </div>
                  </div>
                  <svg
                    className="w-4 h-4 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:translate-x-1 transition"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* 하단 액션 버튼 */}
          <div className="mt-7 flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={handleCopyLink}
              className="flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 active:scale-[0.98] transition shadow-md shadow-blue-500/25 flex items-center justify-center gap-2 cursor-pointer"
            >
              {copied ? (
                <>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>복사 완료!</span>
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <span>프로필 링크 복사하기</span>
                </>
              )}
            </button>

            <a
              href="mailto:contact@example.com"
              className="py-3 px-5 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 dark:text-zinc-200 bg-slate-100 hover:bg-slate-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 active:scale-[0.98] transition flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>이메일 문의</span>
            </a>
          </div>

          {/* 푸터 카피라이트 */}
          <div className="mt-8 pt-4 border-t border-slate-100 dark:border-zinc-800/80 text-center text-[11px] text-slate-400 dark:text-zinc-500">
            © 2026 배찬혁. Crafted with Next.js & Tailwind CSS.
          </div>
        </div>
      </div>

      {/* 토스트 알림 */}
      {toastMessage && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 px-4 py-2.5 rounded-full bg-slate-900/90 dark:bg-white/95 text-white dark:text-slate-900 text-xs sm:text-sm font-medium shadow-xl backdrop-blur-md transition-all animate-bounce flex items-center gap-2 z-50">
          <svg className="w-4 h-4 text-emerald-400 dark:text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
          <span>{toastMessage}</span>
        </div>
      )}
    </main>
  );
}
