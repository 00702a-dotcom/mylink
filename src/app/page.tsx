"use client";

import { useState } from "react";
import Image from "next/image";

// ─────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────
const techChips = [
  { label: "Next.js 16", active: true },
  { label: "React 19", active: false },
  { label: "TypeScript", active: false },
  { label: "Tailwind CSS v4", active: false },
  { label: "Firebase", active: false },
  { label: "AI 바이브 코딩", active: false },
  { label: "풀스택", active: false },
];

interface Project {
  id: string;
  emoji: string;
  title: string;
  desc: string;
  status: "진행 중" | "완료" | "준비 중";
  statusColor: string;
  link?: string;
}

const projects: Project[] = [
  {
    id: "p1",
    emoji: "🔗",
    title: "MyLink 프로필 페이지",
    desc: "토스 디자인 시스템으로 만든 개발자 링크 프로필",
    status: "진행 중",
    statusColor: "bg-[#E8F3FF] text-[#3182F6]",
    link: "#",
  },
  {
    id: "p2",
    emoji: "🤖",
    title: "AI 바이브 코딩 플랫폼",
    desc: "자연어로 웹 서비스 MVP를 1시간 안에 런칭하는 도구",
    status: "완료",
    statusColor: "bg-[#EFFBF6] text-[#12805C]",
    link: "#",
  },
  {
    id: "p3",
    emoji: "📊",
    title: "법무 행정 대시보드",
    desc: "경찰행정학 지식을 바탕으로 한 행정 데이터 시각화",
    status: "준비 중",
    statusColor: "bg-[#F2F4F6] text-[#6B7684]",
  },
];

interface ContactLink {
  id: string;
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}

// ─────────────────────────────────────────────
// Icon helpers
// ─────────────────────────────────────────────
function IconGitHub() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.09.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.455-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.091-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  );
}

function IconVelog() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M3 0C1.338 0 0 1.338 0 3v18c0 1.662 1.338 3 3 3h18c1.662 0 3-1.338 3-3V3c0-1.662-1.338-3-3-3H3zm6.883 6.75h7.868c.414 0 .638.46.388.787L12.483 17.03a.5.5 0 01-.793-.01L6.398 9.49a.5.5 0 01.397-.79h1.5a.5.5 0 01.397.195l3.012 3.941 3.636-5.086H9.883a.5.5 0 010-1z" />
    </svg>
  );
}

function IconMail() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function IconChevronRight() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4 text-[#B0B8C1]">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
    </svg>
  );
}

function IconShare() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
    </svg>
  );
}

function IconCheck() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-4 h-4">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

// ─────────────────────────────────────────────
// Main Page Component
// ─────────────────────────────────────────────
export default function TossProfilePage() {
  const [copied, setCopied] = useState(false);
  const [toast, setToast] = useState("");

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(""), 2800);
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      showToast("프로필 링크가 복사되었어요!");
      setTimeout(() => setCopied(false), 2400);
    } catch {
      showToast("복사에 실패했어요. 직접 주소창에서 복사해 주세요.");
    }
  };

  const contactLinks: ContactLink[] = [
    {
      id: "github",
      icon: <IconGitHub />,
      label: "GitHub",
      value: "github.com/chanhyeok",
      href: "https://github.com",
    },
    {
      id: "velog",
      icon: <IconVelog />,
      label: "Velog",
      value: "velog.io/@chanhyeok",
      href: "https://velog.io",
    },
    {
      id: "email",
      icon: <IconMail />,
      label: "이메일",
      value: "contact@example.com",
      href: "mailto:contact@example.com",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F9FAFB] text-[#191F28] font-sans selection:bg-[#E8F3FF] selection:text-[#3182F6]">

      {/* ── Top App Bar ── */}
      <header className="sticky top-0 z-40 w-full h-[52px] bg-white/90 backdrop-blur border-b border-[#E5E8EB] flex items-center justify-between px-5">
        <span className="text-[15px] font-bold tracking-tight text-[#191F28]">
          배찬혁
        </span>
        <button
          type="button"
          onClick={handleCopyLink}
          aria-label="프로필 공유"
          className="w-9 h-9 rounded-full bg-[#F2F4F6] hover:bg-[#E5E8EB] flex items-center justify-center text-[#4E5968] transition active:opacity-70"
        >
          <IconShare />
        </button>
      </header>

      {/* ── Main scroll area ── */}
      <main className="max-w-[640px] mx-auto px-5 pb-[120px]">

        {/* ── 1. Hero Card ── */}
        <section className="bg-white rounded-2xl overflow-hidden mt-4 shadow-[0_1px_2px_rgba(20,25,34,0.04),0_1px_1px_rgba(20,25,34,0.04)]">
          {/* Banner */}
          <div className="relative w-full h-[120px] bg-[#F2F4F6] overflow-hidden">
            <Image
              src="/dev-banner.jpg"
              alt="프로필 배너"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
          </div>

          {/* Profile info */}
          <div className="px-5 pb-5">
            {/* Avatar (overlaps banner) */}
            <div className="relative -mt-9 mb-3 w-16 h-16 rounded-2xl overflow-hidden border-[3px] border-white bg-[#F2F4F6] shadow-[0_4px_12px_rgba(20,25,34,0.12)]">
              <Image
                src="/profile-avatar.jpg"
                alt="배찬혁 프로필 사진"
                fill
                priority
                className="object-cover"
              />
            </div>

            <div className="flex items-start justify-between gap-3">
              <div>
                <h1 className="text-[22px] font-bold tracking-tight text-[#191F28] leading-tight">
                  배찬혁
                </h1>
                <p className="text-[14px] text-[#4E5968] font-medium mt-0.5">
                  Bae Chan-hyeok · 주니어 개발자
                </p>
              </div>
              {/* Available badge */}
              <span className="mt-1 shrink-0 flex items-center gap-1.5 h-[26px] px-3 rounded-full bg-[#EFFBF6] text-[#12805C] text-[12px] font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#12805C]" />
                협업 가능해요
              </span>
            </div>

            <p className="mt-3 text-[14px] text-[#4E5968] leading-[1.65]">
              경찰행정학 전공에서 소프트웨어 개발자로 전향한 바이브 코더예요.
              최신 AI 도구와 모던 웹 생태계를 활용해 아이디어를 가장 빠르게
              실현하고, 사용자에게 가치를 전달하는 서비스를 만들어요.
            </p>

            {/* Stat row */}
            <div className="mt-4 flex items-center gap-5 text-[13px]">
              <div className="flex flex-col">
                <span className="font-bold text-[#191F28] text-[16px] tabular-nums">3+</span>
                <span className="text-[#8B95A1] text-[11px] mt-0.5">프로젝트</span>
              </div>
              <div className="w-px h-8 bg-[#E5E8EB]" />
              <div className="flex flex-col">
                <span className="font-bold text-[#191F28] text-[16px] tabular-nums">1년+</span>
                <span className="text-[#8B95A1] text-[11px] mt-0.5">개발 경력</span>
              </div>
              <div className="w-px h-8 bg-[#E5E8EB]" />
              <div className="flex flex-col">
                <span className="font-bold text-[#191F28] text-[16px]">경찰행정학</span>
                <span className="text-[#8B95A1] text-[11px] mt-0.5">전공</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. Tech Stack ── */}
        <section className="mt-3 bg-white rounded-2xl px-5 py-4 shadow-[0_1px_2px_rgba(20,25,34,0.04)]">
          <h2 className="text-[13px] font-semibold text-[#8B95A1] mb-3 tracking-wide uppercase">
            기술 스택
          </h2>
          <div className="flex flex-wrap gap-2">
            {techChips.map((chip) => (
              <span
                key={chip.label}
                className={`h-[34px] px-4 rounded-full text-[13px] font-semibold flex items-center transition select-none ${
                  chip.active
                    ? "bg-[#191F28] text-white"
                    : "bg-[#F2F4F6] text-[#4E5968] border border-[#E5E8EB]"
                }`}
              >
                {chip.label}
              </span>
            ))}
          </div>
        </section>

        {/* ── 3. Projects ── */}
        <section className="mt-3 bg-white rounded-2xl overflow-hidden shadow-[0_1px_2px_rgba(20,25,34,0.04)]">
          <div className="px-5 pt-4 pb-2">
            <h2 className="text-[13px] font-semibold text-[#8B95A1] tracking-wide uppercase">
              프로젝트
            </h2>
          </div>

          {projects.map((proj, i) => (
            <a
              key={proj.id}
              href={proj.link ?? "#"}
              className={`flex items-center gap-4 px-5 py-4 hover:bg-[#F9FAFB] active:bg-[#F2F4F6] transition group ${
                i < projects.length - 1 ? "border-b border-[#F2F4F6]" : ""
              }`}
            >
              {/* Project icon */}
              <div className="w-11 h-11 rounded-xl bg-[#F2F4F6] flex items-center justify-center text-[22px] shrink-0">
                {proj.emoji}
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[15px] font-semibold text-[#191F28] leading-tight">
                    {proj.title}
                  </span>
                  <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${proj.statusColor}`}>
                    {proj.status}
                  </span>
                </div>
                <p className="text-[13px] text-[#6B7684] mt-0.5 leading-snug line-clamp-1">
                  {proj.desc}
                </p>
              </div>

              <IconChevronRight />
            </a>
          ))}
        </section>

        {/* ── 4. Contact & Links ── */}
        <section className="mt-3 bg-white rounded-2xl overflow-hidden shadow-[0_1px_2px_rgba(20,25,34,0.04)]">
          <div className="px-5 pt-4 pb-2">
            <h2 className="text-[13px] font-semibold text-[#8B95A1] tracking-wide uppercase">
              연락하기
            </h2>
          </div>

          {contactLinks.map((link, i) => (
            <a
              key={link.id}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              className={`flex items-center gap-4 px-5 py-4 hover:bg-[#F9FAFB] active:bg-[#F2F4F6] transition ${
                i < contactLinks.length - 1 ? "border-b border-[#F2F4F6]" : ""
              }`}
            >
              <div className="w-11 h-11 rounded-xl bg-[#F2F4F6] flex items-center justify-center text-[#4E5968] shrink-0">
                {link.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[15px] font-semibold text-[#191F28]">
                  {link.label}
                </div>
                <div className="text-[13px] text-[#8B95A1] mt-0.5 truncate">
                  {link.value}
                </div>
              </div>
              <IconChevronRight />
            </a>
          ))}
        </section>

        {/* ── 5. Fun facts / quote card ── */}
        <section className="mt-3 bg-[#191F28] rounded-2xl px-5 py-5">
          <p className="text-[15px] text-white leading-[1.7] font-medium">
            &ldquo;법과 질서의 언어를 배웠고,<br />
            이제 코드의 언어로 세상을 만들어가요.&rdquo;
          </p>
          <p className="mt-3 text-[13px] text-[#6B7684] font-medium">
            — 배찬혁, 경찰행정학 → 개발자
          </p>
        </section>

        {/* ── Footer ── */}
        <footer className="mt-6 text-center text-[12px] text-[#B0B8C1]">
          © 2026 배찬혁 · Made with Next.js &amp; Toss Design System
        </footer>
      </main>

      {/* ── Bottom CTA ── */}
      <div className="fixed bottom-0 left-0 right-0 z-30 pointer-events-none">
        {/* Fade gradient */}
        <div className="h-8 bg-gradient-to-t from-[#F9FAFB] to-transparent" />
        <div className="bg-[#F9FAFB] px-5 pb-6 pt-0 pointer-events-auto max-w-[640px] mx-auto">
          <button
            type="button"
            onClick={handleCopyLink}
            className="w-full h-[56px] rounded-[14px] font-bold text-[16px] flex items-center justify-center gap-2 transition active:opacity-70"
            style={{ backgroundColor: copied ? "#12805C" : "#3182F6", color: "#fff" }}
          >
            {copied ? (
              <>
                <IconCheck />
                <span>복사되었어요!</span>
              </>
            ) : (
              <span>프로필 링크 복사하기</span>
            )}
          </button>
        </div>
      </div>

      {/* ── Toast ── */}
      {toast && (
        <div className="fixed bottom-[96px] left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 px-5 py-3 rounded-2xl bg-[#191F28] text-white text-[13px] font-semibold shadow-[0_8px_24px_rgba(20,25,34,0.16)] whitespace-nowrap">
          <span className="w-4 h-4 rounded-full bg-[#12805C] flex items-center justify-center shrink-0">
            <IconCheck />
          </span>
          {toast}
        </div>
      )}
    </div>
  );
}
