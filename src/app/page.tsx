"use client";

import { useState } from "react";

export default function ProfilePage() {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      alert("링크 복사에 실패했습니다.");
    }
  };

  return (
    <main className="min-h-screen w-full flex items-center justify-center p-6 bg-gradient-to-b from-slate-50 via-white to-slate-100 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 text-slate-800 dark:text-zinc-100">
      <div className="w-full max-w-sm sm:max-w-md bg-white dark:bg-zinc-900 rounded-3xl p-8 border border-slate-200/80 dark:border-zinc-800 shadow-xl shadow-slate-200/50 dark:shadow-none text-center transition-all">
        {/* 아바타 영역 */}
        <div className="mx-auto w-24 h-24 mb-5 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-500 p-1 shadow-lg shadow-blue-500/20 flex items-center justify-center">
          <div className="w-full h-full rounded-full bg-white dark:bg-zinc-900 flex items-center justify-center">
            <span className="text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              배
            </span>
          </div>
        </div>

        {/* 이름 */}
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
          배찬혁
        </h1>

        {/* 상태 배지 */}
        <div className="mt-2.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 border border-blue-200 dark:border-blue-800/60">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
          경찰행정학 · 운동 & 바이브 코딩
        </div>

        {/* 소개글 */}
        <div className="mt-6 p-4 rounded-2xl bg-slate-50 dark:bg-zinc-800/50 border border-slate-100 dark:border-zinc-800">
          <p className="text-slate-700 dark:text-zinc-200 text-sm sm:text-base leading-relaxed font-medium">
            &ldquo;경찰행정학과에 재학 중이고 운동을 좋아하는 대학생입니다&rdquo;
          </p>
        </div>

        {/* 키워드 태그 */}
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {["경찰행정학", "운동", "대학생", "바이브 코딩"].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-400 font-medium"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* 심플 액션 버튼 */}
        <div className="mt-8 flex gap-3">
          <button
            type="button"
            onClick={handleCopyLink}
            className="w-full py-3 px-4 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 active:scale-[0.98] transition shadow-md shadow-blue-500/20"
          >
            {copied ? "✓ 링크가 복사되었습니다!" : "프로필 링크 공유하기"}
          </button>
        </div>
      </div>
    </main>
  );
}
