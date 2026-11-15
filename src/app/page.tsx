'use client';

import { useState } from 'react';

export default function MyLinkPage() {
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="min-h-screen bg-[#F9FAFB] flex flex-col items-center justify-start py-12 px-4 selection:bg-[#E8F3FF] selection:text-[#3182F6]">
      {/* Toast Notification */}
      {copied && (
        <div className="fixed top-6 bg-[#191F28] text-white px-5 py-3 rounded-2xl shadow-lg text-sm font-medium z-55 transition-all animate-bounce">
          링크가 클립보드에 복사되었습니다!
        </div>
      )}

      {/* Profile Container */}
      <div className="w-full max-w-md mx-auto flex flex-col items-center">
        
        {/* Avatar / Profile Image */}
        <div className="relative mb-4">
          <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#3182F6] to-[#60A5FA] p-1 shadow-md">
            <div className="w-full h-full bg-[#E5E8EB] rounded-full flex items-center justify-center text-3xl overflow-hidden">
              👨‍💻
            </div>
          </div>
          <span className="absolute bottom-0 right-0 w-6 h-6 bg-[#3182F6] border-2 border-white rounded-full flex items-center justify-center text-white text-xs">
            ✓
          </span>
        </div>

        {/* Name & Bio */}
        <h1 className="text-2xl font-bold text-[#191F28] tracking-tight mb-1">
          배찬혁
        </h1>
        <p className="text-sm text-[#6B7684] text-center mb-6">
          끊임없이 성장하는 프론트엔드 개발자 &amp; 크리에이터
        </p>

        {/* Share Button */}
        <button
          onClick={handleShare}
          className="mb-8 px-4 py-2 bg-white border border-[#D1D6DB] rounded-full text-xs font-semibold text-[#4E5968] shadow-sm hover:bg-[#F2F4F6] transition-colors flex items-center gap-1.5"
        >
          <span>🔗</span> 프로필 공유하기
        </button>

        {/* Links Stack */}
        <div className="w-full flex flex-col gap-3.5">
          <a
            href="https://github.com/00702a-dotcom"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full p-4 bg-white rounded-2xl shadow-sm border border-[rgba(0,0,0,0.04)] hover:bg-[#F9FAFB] hover:border-[#3182F6] transition-all flex items-center justify-between group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#E8F3FF] text-[#3182F6] flex items-center justify-center text-lg font-bold">
                GH
              </div>
              <div>
                <h2 className="text-sm font-bold text-[#191F28] group-hover:text-[#3182F6] transition-colors">
                  GitHub Repository
                </h2>
                <p className="text-xs text-[#8B95A1]">소스 코드와 프로젝트 저장소</p>
              </div>
            </div>
            <span className="text-[#B0B8C1] group-hover:translate-x-1 transition-transform">→</span>
          </a>

          <a
            href="https://github.com/00702a-dotcom/mylink"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full p-4 bg-white rounded-2xl shadow-sm border border-[rgba(0,0,0,0.04)] hover:bg-[#F9FAFB] hover:border-[#3182F6] transition-all flex items-center justify-between group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#E8F3FF] text-[#3182F6] flex items-center justify-center text-lg font-bold">
                🔗
              </div>
              <div>
                <h2 className="text-sm font-bold text-[#191F28] group-hover:text-[#3182F6] transition-colors">
                  MyLink Project
                </h2>
                <p className="text-xs text-[#8B95A1]">현재 보고 계신 토스 스타일 프로필</p>
              </div>
            </div>
            <span className="text-[#B0B8C1] group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center text-xs text-[#B0B8C1]">
          © 2026 Bae Chanhyuk. All rights reserved.
        </footer>
      </div>
    </main>
  );
}
