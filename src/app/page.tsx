"use client";

import { useState } from "react";
import Image from "next/image";

interface ChatMessage {
  id: string;
  sender: string;
  badge?: string;
  badgeColor?: string;
  color: string;
  text: string;
  time: string;
}

export default function ChzzkProfilePage() {
  const [isFollowing, setIsFollowing] = useState(false);
  const [followerCount, setFollowerCount] = useState(1280);
  const [activeTab, setActiveTab] = useState<"home" | "videos" | "about">("home");
  const [copied, setCopied] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [chatInput, setChatInput] = useState("");

  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      id: "1",
      sender: "코드조아",
      badge: "구독 3개월",
      badgeColor: "bg-[#3E34AF] text-white",
      color: "#00FFA3",
      text: "오 배찬혁님 라이브 켜졌네요! 반가워요 🔥",
      time: "15:40",
    },
    {
      id: "2",
      sender: "바이브코더",
      badge: "서포터",
      badgeColor: "bg-[#4E41DB] text-white",
      color: "#3B8FD8",
      text: "Next.js 16 화면 완전 빠릿빠릿하네요 대박",
      time: "15:41",
    },
    {
      id: "3",
      sender: "프론트뉴비",
      color: "#CF9A12",
      text: "치지직 스타일로 만드신 건가요? 싱크로율 100% ㄷㄷ",
      time: "15:42",
    },
    {
      id: "4",
      sender: "매니저_봇",
      badge: "매니저",
      badgeColor: "bg-[#009962] text-white",
      color: "#00FFA3",
      text: "💡 [공지] 개발자 배찬혁의 포트폴리오 채널입니다. 편하게 채팅 남겨주세요!",
      time: "15:43",
    },
  ]);

  const handleFollowToggle = () => {
    if (isFollowing) {
      setIsFollowing(false);
      setFollowerCount((prev) => prev - 1);
      showToast("팔로우가 취소되었습니다.");
    } else {
      setIsFollowing(true);
      setFollowerCount((prev) => prev + 1);
      showToast("🎉 채널을 팔로우했습니다!");
    }
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      showToast("채널 링크가 클립보드에 복사되었습니다!");
      setTimeout(() => setCopied(false), 2400);
    } catch {
      alert("링크 복사에 실패했습니다.");
    }
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage("");
    }, 2500);
  };

  const handleSendChat = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const newMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: "나 (방문자)",
      badge: "NEW",
      badgeColor: "bg-[#2E3033] text-[#00FFA3]",
      color: "#00FFA3",
      text: chatInput.trim(),
      time: "방금",
    };

    setChatMessages((prev) => [...prev, newMsg]);
    setChatInput("");
  };

  const techChips = [
    "Next.js 16",
    "React 19",
    "TypeScript",
    "Tailwind CSS v4",
    "Firebase Firestore",
    "AI 바이브 코딩",
    "경찰행정학",
    "풀스택 엔지니어링",
  ];

  const videos = [
    {
      id: "v1",
      title: "⚡ [LIVE] Next.js 16 + AI 도구로 풀스택 프로덕트 개발 중",
      category: "개발 & 프로그래밍",
      badge: "LIVE",
      badgeType: "live",
      viewers: "2,026명 시청 중",
      duration: "실시간",
      date: "방금 시작됨",
      thumb: "/dev-banner.jpg",
    },
    {
      id: "v2",
      title: "🤖 자연어 바이브 코딩으로 1시간 만에 상용 웹사이트 MVP 런칭하기",
      category: "개발 & 프로그래밍",
      badge: "다시보기",
      badgeType: "replay",
      viewers: "조회수 1.4만회",
      duration: "01:24:30",
      date: "3일 전",
      thumb: "/dev-banner.jpg",
    },
    {
      id: "v3",
      title: "🎯 경찰행정학 전공생이 소프트웨어 개발자가 되기까지의 회고와 로드맵",
      category: "토크 & 기획",
      badge: "다시보기",
      badgeType: "replay",
      viewers: "조회수 3.8만회",
      duration: "48:15",
      date: "1주 전",
      thumb: "/dev-banner.jpg",
    },
    {
      id: "v4",
      title: "🛠️ 네이버 치지직(CHZZK) 디자인 시스템 토큰 완벽 분석 및 클론 코딩",
      category: "웹 개발",
      badge: "다시보기",
      badgeType: "replay",
      viewers: "조회수 2.1만회",
      duration: "02:05:12",
      date: "2주 전",
      thumb: "/dev-banner.jpg",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-[#141517] text-[#FFFFFF] flex flex-col font-sans selection:bg-[#00FFA3] selection:text-[#0E0F10]">
      
      {/* 1. 치지직 글로벌 헤더 (header: height 60px, bg #141517, border-b #2E3033) */}
      <header className="sticky top-0 z-50 w-full h-[60px] bg-[#141517] border-b border-[#2E3033] px-4 sm:px-6 flex items-center justify-between">
        
        {/* 좌측 로고 & 주요 메뉴 */}
        <div className="flex items-center gap-6 sm:gap-8">
          {/* 치지직 Z 로고 */}
          <div className="flex items-center gap-2 cursor-pointer select-none">
            <div className="w-7 h-7 bg-[#00FFA3] rounded-[6px] flex items-center justify-center shadow-[0_0_12px_rgba(0,255,163,0.4)]">
              <span className="text-[#0E0F10] font-black text-sm tracking-tighter">Z</span>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="font-extrabold text-base tracking-tight text-white">CHZZK</span>
              <span className="text-[10px] font-bold text-[#00FFA3] tracking-widest uppercase">DEV</span>
            </div>
          </div>

          {/* 헤더 메뉴 링크 */}
          <nav className="hidden md:flex items-center gap-5 text-sm font-semibold text-[#DFE2EA]">
            <span className="text-[#00FFA3] cursor-pointer">라이브</span>
            <span className="hover:text-white cursor-pointer transition">카테고리</span>
            <span className="hover:text-white cursor-pointer transition">동영상</span>
            <span className="hover:text-white cursor-pointer transition">MY</span>
          </nav>
        </div>

        {/* 우측 검색창 & 프로필 컨트롤 */}
        <div className="flex items-center gap-3">
          {/* 알약 검색창 (search-field: height 38px, radius 19px) */}
          <div className="hidden sm:flex items-center w-56 lg:w-72 h-[38px] px-3.5 rounded-[19px] border border-[#2E3033] bg-transparent text-xs text-[#FFFFFF] focus-within:border-[#009962] transition">
            <input
              type="text"
              placeholder="스트리머, 게임, 태그 검색"
              className="w-full bg-transparent outline-none placeholder-[#697183] text-xs text-white"
            />
            <svg className="w-4 h-4 text-[#9DA5B6] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          {/* 공유 버튼 */}
          <button
            type="button"
            onClick={handleCopyLink}
            title="채널 링크 복사"
            className="w-9 h-9 rounded-full bg-[#202224] hover:bg-[#2E3033] border border-[#2E3033] flex items-center justify-center text-[#DFE2EA] transition active:scale-95"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </button>

          {/* 프로필 아바타 썸네일 */}
          <div className="w-9 h-9 rounded-full overflow-hidden border border-[#00FFA3] relative cursor-pointer">
            <Image
              src="/profile-avatar.jpg"
              alt="프로필 미니 아바타"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </header>

      {/* 2. 채널 상단 와이드 배너 */}
      <div className="relative w-full h-36 sm:h-52 bg-[#0E0F10] overflow-hidden border-b border-[#2E3033]">
        <Image
          src="/dev-banner.jpg"
          alt="채널 커버 배너"
          fill
          priority
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141517] via-transparent to-transparent pointer-events-none" />
        
        {/* 우측 상단 상태 뱃지 */}
        <div className="absolute top-4 right-4 flex items-center gap-2">
          <span className="bg-[#E02020] text-white text-[12px] font-bold h-[20px] px-2 rounded-[4px] flex items-center shadow-md">
            ● LIVE
          </span>
          <span className="bg-[rgba(0,0,0,0.75)] text-[#00FFA3] text-[12px] font-bold h-[20px] px-2 rounded-[4px] border border-[#00FFA3]/30 flex items-center">
            2,026명 시청 중
          </span>
        </div>
      </div>

      {/* 3. 스트리머 프로필 헤더 바 (Channel Master Header) */}
      <div className="w-full bg-[#141517] border-b border-[#2E3033]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          {/* 좌측 아바타 및 채널 메타 */}
          <div className="flex items-center gap-4">
            {/* 아바타 (치지직 네온 링 장식) */}
            <div className="relative -mt-10 sm:-mt-14 shrink-0">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-[3px] border-[#00FFA3] shadow-[0_0_20px_rgba(0,255,163,0.4)] relative bg-[#0E0F10]">
                <Image
                  src="/profile-avatar.jpg"
                  alt="배찬혁 채널 프로필 아바타"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
              {/* LIVE 빨간 뱃지 핀 */}
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-[#E02020] text-white text-[10px] font-extrabold px-1.5 py-0.5 rounded-[4px] border border-black shadow">
                LIVE
              </div>
            </div>

            {/* 채널 정보 */}
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                  배찬혁
                </h1>
                <span className="w-4 h-4 rounded-full bg-[#00FFA3] text-[#0E0F10] flex items-center justify-center text-[10px] font-black" title="공식 파트너 스트리머">
                  ✓
                </span>
                <span className="text-xs font-medium text-[#9DA5B6]">
                  @chanhyeok
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-2 mt-1 text-xs text-[#9DA5B6]">
                <span className="text-[#00FFA3] font-semibold">💻 개발 & 프로그래밍</span>
                <span>·</span>
                <span>팔로워 <strong className="text-white font-semibold">{followerCount.toLocaleString()}명</strong></span>
                <span>·</span>
                <span>경찰행정학 · 바이브 코딩</span>
              </div>
            </div>
          </div>

          {/* 우측 액션 버튼 군 (팔로우, 구독, 공유) */}
          <div className="flex items-center gap-2.5 self-start md:self-center">
            {/* 1차 팔로우 버튼 (button-primary-dark: bg #00FFA3, text #0E0F10, height 34px, radius 17px) */}
            <button
              type="button"
              onClick={handleFollowToggle}
              className={`h-[34px] px-4 rounded-[17px] text-xs font-bold transition flex items-center gap-1.5 active:scale-95 ${
                isFollowing
                  ? "bg-[#2E3033] text-white border border-[#4D4D4D]"
                  : "bg-[#00FFA3] text-[#0E0F10] hover:opacity-90 shadow-[0_0_12px_rgba(0,255,163,0.3)]"
              }`}
            >
              {isFollowing ? (
                <>
                  <svg className="w-3.5 h-3.5 text-[#00FFA3]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>팔로잉 중</span>
                </>
              ) : (
                <>
                  <span>+</span>
                  <span>팔로우</span>
                </>
              )}
            </button>

            {/* 3차 구독 버튼 (button-tertiary: bg #DFE2EA, text #0E0F10, height 34px, radius 17px) */}
            <a
              href="mailto:contact@example.com"
              className="h-[34px] px-4 rounded-[17px] bg-[#DFE2EA] hover:bg-white text-[#0E0F10] text-xs font-bold transition flex items-center gap-1.5 active:scale-95"
            >
              <svg className="w-3.5 h-3.5 text-[#4E41DB]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
              </svg>
              <span>협업 문의</span>
            </a>

            {/* 2차 채널 공유 버튼 (button-secondary: bg #2E3033, text #DFE2EA, height 34px, radius 17px) */}
            <button
              type="button"
              onClick={handleCopyLink}
              className="h-[34px] px-3.5 rounded-[17px] bg-[#2E3033] hover:bg-[#3D4044] text-[#DFE2EA] text-xs font-semibold transition flex items-center gap-1.5 active:scale-95"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
              <span>공유</span>
            </button>
          </div>
        </div>

        {/* 채널 탭 스트립 (Home, Videos, About) */}
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 flex gap-6 text-sm font-semibold border-t border-[#202224]">
          <button
            type="button"
            onClick={() => setActiveTab("home")}
            className={`py-3.5 transition relative ${
              activeTab === "home" ? "text-white" : "text-[#697183] hover:text-[#DFE2EA]"
            }`}
          >
            <span>홈</span>
            {activeTab === "home" && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#00FFA3]" />
            )}
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("videos")}
            className={`py-3.5 transition relative ${
              activeTab === "videos" ? "text-white" : "text-[#697183] hover:text-[#DFE2EA]"
            }`}
          >
            <span>동영상 & 프로젝트</span>
            {activeTab === "videos" && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#00FFA3]" />
            )}
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("about")}
            className={`py-3.5 transition relative ${
              activeTab === "about" ? "text-white" : "text-[#697183] hover:text-[#DFE2EA]"
            }`}
          >
            <span>채널 소개 (Bio)</span>
            {activeTab === "about" && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#00FFA3]" />
            )}
          </button>
        </div>
      </div>

      {/* 4. 메인 컨텐츠 영역 (2단 컬럼: 메인 플레이어/피드 + 우측 라이브 채팅) */}
      <main className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 py-6 flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* 좌측 메인 영역 (8단 또는 전체) */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          
          {/* A. 현재 라이브 방송 플레이어 카드 */}
          <div className="w-full bg-[#0E0F10] border border-[#2E3033] rounded-[12px] overflow-hidden shadow-xl">
            {/* 16:9 비디오 뷰어 */}
            <div className="relative aspect-[16/9] w-full bg-[#0E0F10] overflow-hidden group">
              <Image
                src="/dev-banner.jpg"
                alt="라이브 방송 데모 뷰"
                fill
                priority
                className="object-cover group-hover:scale-102 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

              {/* 플레이어 상단 뱃지들 */}
              <div className="absolute top-3 left-3 flex items-center gap-2">
                <span className="bg-[#E02020] text-white text-[12px] font-bold h-[20px] px-2 rounded-[4px] flex items-center shadow">
                  ● LIVE
                </span>
                <span className="bg-[rgba(0,0,0,0.8)] text-white text-[12px] font-medium h-[20px] px-2 rounded-[4px] flex items-center">
                  2,026명 시청 중
                </span>
              </div>

              {/* 화질 뱃지 (우측 상단) */}
              <div className="absolute top-3 right-3 bg-[rgba(0,0,0,0.8)] text-[#00FFA3] text-[11px] font-bold h-[20px] px-2 rounded-[4px] border border-[#00FFA3]/30 flex items-center">
                1080p60 FHD
              </div>

              {/* 비디오 하단 자막 / 상태 오버레이 */}
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <div>
                  <span className="text-xs text-[#00FFA3] font-semibold block mb-1">
                    ⚡ REALTIME DEV STREAM
                  </span>
                  <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight drop-shadow">
                    [실시간 코딩] Next.js 16 + AI 도구로 풀스택 프로덕트 개발 중
                  </h2>
                </div>
                <div className="hidden sm:flex items-center gap-2">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 rounded-[17px] bg-[#2E3033]/90 hover:bg-[#3D4044] text-xs font-semibold text-white border border-[#4D4D4D] flex items-center gap-1.5 backdrop-blur transition"
                  >
                    <span>GitHub 저장소 보기</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            </div>

            {/* 플레이어 하단 타이틀 & 태그 바 */}
            <div className="p-4 sm:p-5 bg-[#1C1D1F] border-t border-[#2E3033]">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-[#00FFA3] bg-[#003321] border border-[#009962] px-2 py-0.5 rounded-[4px]">
                    방송 중
                  </span>
                  <span className="text-xs text-[#9DA5B6]">
                    스트리밍 시작: 오늘 15:30 (런타임 32분)
                  </span>
                </div>
                <div className="flex items-center gap-3 text-xs text-[#9DA5B6]">
                  <span className="hover:text-white cursor-pointer">좋아요 342</span>
                  <span>·</span>
                  <span className="hover:text-white cursor-pointer">다시보기 생성 켜짐</span>
                </div>
              </div>

              {/* 태그 칩 모음 (Chzzk badge style) */}
              <div className="flex flex-wrap gap-1.5">
                {techChips.map((chip) => (
                  <span
                    key={chip}
                    className="text-xs font-medium text-[#DFE2EA] bg-[#202224] hover:bg-[#2E3033] hover:text-[#00FFA3] border border-[#2E3033] hover:border-[#009962] px-2.5 py-1 rounded-[4px] cursor-pointer transition select-none"
                  >
                    #{chip}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* B. 채널 소개 박스 (Streamer Bio / modal surface style) */}
          <div className="bg-[#1C1D1F] border border-[#2E3033] rounded-[12px] p-5 sm:p-6 shadow-md">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#00FFA3]" />
              <h3 className="text-sm font-bold text-white tracking-wide uppercase">
                개발자 배찬혁 소개 // STREAMER PROFILE
              </h3>
            </div>

            <p className="text-sm sm:text-base text-[#DFE2EA] leading-relaxed font-normal mb-4">
              &ldquo;새로운 기술을 탐구하고 문제를 해결하며, 사용자에게 가치를 전달하는 개발자 배찬혁입니다.
              경찰행정학의 원칙과 분석적 사고를 바탕으로 단단하고 신뢰할 수 있는 웹 서비스를 구축합니다.
              최신 AI 도구와 모던 웹 생태계를 적극 활용한 바이브 코딩으로 아이디어를 가장 빠르게 실현합니다.&rdquo;
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-[#2E3033]">
              <div className="bg-[#202224] p-3 rounded-[8px] border border-[#2E3033]">
                <div className="text-[11px] text-[#9DA5B6] mb-0.5">전공 분야</div>
                <div className="text-xs sm:text-sm font-bold text-white">경찰행정학</div>
              </div>
              <div className="bg-[#202224] p-3 rounded-[8px] border border-[#2E3033]">
                <div className="text-[11px] text-[#9DA5B6] mb-0.5">핵심 스택</div>
                <div className="text-xs sm:text-sm font-bold text-[#00FFA3]">Next.js / React 19</div>
              </div>
              <div className="bg-[#202224] p-3 rounded-[8px] border border-[#2E3033]">
                <div className="text-[11px] text-[#9DA5B6] mb-0.5">개발 방식</div>
                <div className="text-xs sm:text-sm font-bold text-white">AI 바이브 코딩</div>
              </div>
              <div className="bg-[#202224] p-3 rounded-[8px] border border-[#2E3033]">
                <div className="text-[11px] text-[#9DA5B6] mb-0.5">상태</div>
                <div className="text-xs sm:text-sm font-bold text-[#00FFA3]">협업 & 프로젝트 가능</div>
              </div>
            </div>
          </div>

          {/* C. 프로젝트 & 다시보기 목록 (live-card grid) */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-bold text-white tracking-tight flex items-center gap-2">
                <span>프로젝트 영상 & 다시보기</span>
                <span className="text-xs text-[#00FFA3] font-semibold">{videos.length}개</span>
              </h3>
              <span className="text-xs text-[#9DA5B6] hover:text-white cursor-pointer">
                인기순 · 최신순
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {videos.map((vid) => (
                <div
                  key={vid.id}
                  className="bg-[#1C1D1F] border border-[#2E3033] hover:border-[#009962] rounded-[12px] overflow-hidden group transition duration-200 cursor-pointer flex flex-col"
                >
                  {/* 16:9 썸네일 */}
                  <div className="relative aspect-[16/9] w-full bg-[#0E0F10] overflow-hidden">
                    <Image
                      src={vid.thumb}
                      alt={vid.title}
                      fill
                      className="object-cover group-hover:scale-105 transition duration-300"
                    />
                    
                    {/* 치지직 hover 오버레이 (0.2s 50% 암전) */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-[#00FFA3] text-[#0E0F10] flex items-center justify-center pl-0.5 shadow-lg">
                        ▶
                      </div>
                    </div>

                    {/* 배지 (좌측 상단) */}
                    <div className="absolute top-2.5 left-2.5">
                      {vid.badgeType === "live" ? (
                        <span className="bg-[#E02020] text-white text-[11px] font-bold h-[20px] px-1.5 rounded-[4px] flex items-center shadow">
                          LIVE
                        </span>
                      ) : (
                        <span className="bg-[#4E41DB] text-white text-[11px] font-bold h-[20px] px-1.5 rounded-[4px] flex items-center shadow">
                          다시보기
                        </span>
                      )}
                    </div>

                    {/* 재생 시간 (우측 하단) */}
                    <div className="absolute bottom-2 right-2 bg-[rgba(0,0,0,0.8)] text-white text-[11px] font-medium px-1.5 py-0.5 rounded-[4px]">
                      {vid.duration}
                    </div>
                  </div>

                  {/* 카드 텍스트 정보 */}
                  <div className="p-3.5 flex flex-col flex-1 justify-between">
                    <h4 className="text-xs sm:text-sm font-semibold text-[#DFE2EA] group-hover:text-[#00FFA3] line-clamp-2 leading-snug transition mb-2">
                      {vid.title}
                    </h4>
                    <div className="flex items-center justify-between text-[11px] text-[#9DA5B6] mt-auto">
                      <span>배찬혁 · {vid.category}</span>
                      <span>{vid.viewers}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 우측 사이드바: 실시간 개발 채팅창 (Chzzk Live Chat Widget) */}
        <aside className="lg:col-span-4 flex flex-col h-full min-h-[500px]">
          <div className="sticky top-[76px] bg-[#1C1D1F] border border-[#2E3033] rounded-[12px] flex flex-col h-[640px] shadow-xl overflow-hidden">
            
            {/* 채팅창 헤더 */}
            <div className="h-12 bg-[#202224] border-b border-[#2E3033] px-4 flex items-center justify-between select-none">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00FFA3] animate-pulse" />
                <span className="text-xs font-bold text-white tracking-wide">
                  실시간 채팅
                </span>
                <span className="text-[11px] font-medium text-[#9DA5B6]">
                  (2,026명 참여 중)
                </span>
              </div>
              <div className="text-[11px] text-[#00FFA3] font-semibold cursor-pointer hover:underline">
                규칙
              </div>
            </div>

            {/* 채팅 메시지 목록 (스크롤) */}
            <div className="flex-1 p-3.5 overflow-y-auto space-y-3 text-xs leading-relaxed">
              {chatMessages.map((msg) => (
                <div key={msg.id} className="flex flex-col gap-0.5">
                  <div className="flex items-center gap-1.5">
                    {msg.badge && (
                      <span className={`text-[9px] font-bold px-1.5 py-0.2 rounded-[3px] ${msg.badgeColor}`}>
                        {msg.badge}
                      </span>
                    )}
                    <span style={{ color: msg.color }} className="font-bold cursor-pointer hover:underline">
                      {msg.sender}
                    </span>
                    <span className="text-[10px] text-[#697183] ml-auto">{msg.time}</span>
                  </div>
                  <div className="text-[#DFE2EA] pl-0.5 break-words">
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* 채팅 입력 박스 (chat-input: height 42px, radius 8px, bg #2E3033) */}
            <form onSubmit={handleSendChat} className="p-3 bg-[#202224] border-t border-[#2E3033]">
              <div className="flex items-center gap-2 bg-[#2E3033] rounded-[8px] h-[42px] px-3 border border-[#2E3033] focus-within:border-[#009962] transition">
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="응원의 메시지나 질문을 남겨보세요"
                  className="w-full bg-transparent outline-none text-xs text-white placeholder-[#697183]"
                />
                <button
                  type="submit"
                  disabled={!chatInput.trim()}
                  className={`w-7 h-7 rounded-[6px] flex items-center justify-center transition ${
                    chatInput.trim()
                      ? "bg-[#00FFA3] text-[#0E0F10] hover:opacity-90"
                      : "bg-[#1C1D1F] text-[#697183] cursor-not-allowed"
                  }`}
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                  </svg>
                </button>
              </div>
              <div className="mt-1.5 flex items-center justify-between text-[10px] text-[#697183]">
                <span>치지직 채널 가이드라인 준수</span>
                <span>최대 200자</span>
              </div>
            </form>
          </div>
        </aside>
      </main>

      {/* 5. 치지직 하단 푸터 */}
      <footer className="w-full border-t border-[#2E3033] bg-[#0E0F10] py-8 px-4 sm:px-6 mt-12">
        <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row items-center justify-between text-xs text-[#697183] gap-4">
          <div className="flex items-center gap-3">
            <span className="font-extrabold text-[#00FFA3] text-sm">CHZZK</span>
            <span>·</span>
            <span>배찬혁 (Bae Chan-hyeok) 공식 채널</span>
            <span>·</span>
            <span>© 2026 NAVER Corp. & Bae Chan-hyeok</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white transition">
              GitHub
            </a>
            <a href="https://velog.io" target="_blank" rel="noreferrer" className="hover:text-white transition">
              Velog
            </a>
            <a href="mailto:contact@example.com" className="hover:text-white transition">
              이메일 문의
            </a>
            <span className="hover:text-white cursor-pointer" onClick={handleCopyLink}>
              링크 복사
            </span>
          </div>
        </div>
      </footer>

      {/* 치지직 네온 토스트 팝업 */}
      {toastMessage && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 px-5 py-2.5 rounded-[17px] bg-[#0E0F10] text-[#00FFA3] border border-[#00FFA3] text-xs font-bold shadow-[0_0_20px_rgba(0,255,163,0.3)] transition-all flex items-center gap-2 z-50 animate-bounce">
          <span className="w-2 h-2 rounded-full bg-[#00FFA3] animate-ping" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
