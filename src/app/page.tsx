"use client";

import { useState } from "react";
import Image from "next/image";

interface ProjectItem {
  id: string;
  name: string;
  category: string;
  badge?: string;
  tagline: string;
  swatches: string[];
  techs: string;
  link: string;
  isSale?: boolean;
  statusText: string;
  originalStatus?: string;
  discountText?: string;
}

export default function NikeProfilePage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [copied, setCopied] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [activeDisclosure, setActiveDisclosure] = useState<number | null>(0);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setToastMessage("Link copied to clipboard");
      setTimeout(() => {
        setCopied(false);
        setToastMessage("");
      }, 2400);
    } catch {
      alert("Failed to copy link.");
    }
  };

  const toggleDisclosure = (index: number) => {
    setActiveDisclosure(activeDisclosure === index ? null : index);
  };

  const projects: ProjectItem[] = [
    {
      id: "mylink",
      name: "MyLink Bio Commerce",
      category: "Full-Stack Web Application",
      badge: "Just In",
      tagline: "Ultra-responsive link portal built on Nike's design grammar.",
      swatches: ["#111111", "#3178C6", "#007D48"],
      techs: "Next.js · TypeScript · Tailwind CSS",
      link: "https://github.com",
      statusText: "Production Ready",
      isSale: false,
    },
    {
      id: "vibe-ai",
      name: "Vibe Engine AI",
      category: "Autonomous Prototyping Tool",
      badge: "Member Exclusive",
      tagline: "Natural-language workflow accelerator for zero-latency prototyping.",
      swatches: ["#111111", "#D30005", "#38BDF8"],
      techs: "Python · React · Gemini API",
      link: "https://github.com",
      statusText: "v2.0 Beta",
      originalStatus: "v1.0",
      discountText: "Major Upgrade",
      isSale: true,
    },
    {
      id: "police-civic",
      name: "Civic Security Platform",
      category: "Public Safety & Administrative Analytics",
      badge: "Featured",
      tagline: "Data-driven administrative analytics dashboard and resource dispatcher.",
      swatches: ["#111111", "#707072", "#1151FF"],
      techs: "Firebase · TypeScript · Next.js",
      link: "https://github.com",
      statusText: "Open Source",
      isSale: false,
    },
  ];

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "web") return p.category.includes("Web");
    if (activeFilter === "ai") return p.category.includes("AI");
    if (activeFilter === "admin") return p.category.includes("Safety") || p.category.includes("Public");
    return true;
  });

  const disclosures = [
    {
      title: "Technical Competencies & Core Stack",
      content:
        "Front-End Engineering with Next.js 16 (Turbopack, App Router, RSC) and React 19. Strict TypeScript typing, zero-redundancy Tailwind CSS architecture, responsive touch systems compliant with WCAG AAA standards. Backend integration with Firebase Firestore, Edge APIs, and modular component design systems.",
    },
    {
      title: "Engineering Philosophy & Vibe Coding",
      content:
        "Rooted in the principle that 'Photography speaks, the chrome doesn't.' We prioritize mechanical restraint in the user interface—neutral typography, mathematical 8px vertical spacing, and pill geometry—allowing functionality and content to command full focus. Zero decorative gradients, zero arbitrary shadows, 100% intentional execution.",
    },
    {
      title: "Collaboration & Work Inquiries",
      content:
        "Open for select software engineering roles, technical advisory, and high-velocity prototyping contracts. Direct communication via email (contact@example.com) or GitHub repositories.",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-[#ffffff] text-[#111111] antialiased flex flex-col font-sans selection:bg-[#111111] selection:text-[#ffffff]">
      
      {/* 1. UTILITY BAR ({component.utility-bar}) */}
      <div className="w-full bg-[#f5f5f5] text-[#111111] h-9 px-4 sm:px-8 md:px-12 flex items-center justify-between text-xs font-medium border-none select-none">
        <div className="flex items-center gap-4 text-[#707072]">
          <span className="font-semibold text-[#111111] tracking-wider uppercase text-[11px]">
            BCH // ATELIER
          </span>
          <span className="hidden sm:inline">·</span>
          <span className="hidden sm:inline text-[#707072]">
            Engineering & Athletic Minimal UI
          </span>
        </div>
        <div className="flex items-center gap-4 sm:gap-6 text-xs text-[#111111]">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-[#707072] transition">
            GitHub
          </a>
          <span>·</span>
          <a href="https://velog.io" target="_blank" rel="noreferrer" className="hover:text-[#707072] transition">
            Tech Blog
          </a>
          <span>·</span>
          <a href="mailto:contact@example.com" className="hover:text-[#707072] transition">
            Contact
          </a>
          <span>·</span>
          <span className="text-[#707072]">KR</span>
        </div>
      </div>

      {/* 2. PRIMARY NAVIGATION ({component.primary-nav}) */}
      <header className="sticky top-0 z-40 w-full bg-[#ffffff] shadow-hairline-inset">
        <div className="max-w-[1440px] mx-auto h-14 sm:h-16 px-4 sm:px-8 md:px-12 flex items-center justify-between">
          
          {/* Logo / Brand Mark */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#111111] text-[#ffffff] flex items-center justify-center font-bold text-xs tracking-tighter">
              BCH
            </div>
            <span className="font-bold tracking-tight text-sm sm:text-base hidden sm:inline uppercase">
              Bae Chan-hyeok
            </span>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#overview" className="text-[#111111] border-b-2 border-[#111111] pb-1 font-semibold">
              Overview
            </a>
            <a href="#works" className="text-[#707072] hover:text-[#111111] transition">
              Works & Catalog
            </a>
            <a href="#stack" className="text-[#707072] hover:text-[#111111] transition">
              Specifications
            </a>
            <a href="#philosophy" className="text-[#707072] hover:text-[#111111] transition">
              Philosophy
            </a>
            <a href="mailto:contact@example.com" className="text-[#707072] hover:text-[#111111] transition">
              Connect
            </a>
          </nav>

          {/* Right Action Cluster */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search Pill */}
            <div className="hidden lg:flex items-center h-10 px-4 bg-[#f5f5f5] rounded-full text-xs text-[#707072] w-56">
              <svg className="w-4 h-4 text-[#111111] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span>Search portfolio...</span>
            </div>

            {/* Circular Action Buttons */}
            <button
              type="button"
              onClick={handleCopyLink}
              title="Copy Profile Link"
              className="w-10 h-10 rounded-full bg-[#f5f5f5] hover:bg-[#e5e5e5] active:scale-95 text-[#111111] flex items-center justify-center transition"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </button>

            <a
              href="mailto:contact@example.com"
              className="h-10 px-5 rounded-full bg-[#111111] text-[#ffffff] text-xs font-semibold flex items-center justify-center active:scale-95 transition"
            >
              Contact
            </a>
          </div>
        </div>
      </header>

      {/* 3. EDITORIAL CAMPAIGN HERO TILE ({component.campaign-tile}) */}
      <section id="overview" className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 pt-6 sm:pt-8">
        <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] min-h-[360px] sm:min-h-[460px] overflow-hidden bg-[#111111] rounded-none">
          {/* Campaign Photography */}
          <Image
            src="/dev-banner.jpg"
            alt="Editorial Campaign Hero"
            fill
            priority
            className="object-cover object-center opacity-85"
          />
          
          {/* Subtle Dark Gradient Overlay for Typography Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none" />

          {/* Campaign Typography Burned Into Photography */}
          <div className="absolute bottom-6 sm:bottom-12 left-6 sm:left-12 right-6 sm:right-12 flex flex-col items-start select-none">
            
            {/* Category / Collection Tag */}
            <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#cacacb] uppercase mb-2">
              Spring 2026 // Developer Collection
            </span>

            {/* Display Campaign Headline (96px scale, 0.9 line-height) */}
            <h1 className="font-campaign text-white text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tight mb-4">
              MAKE YOUR MARK.
            </h1>

            {/* Secondary Subtitle */}
            <p className="text-white/90 text-sm sm:text-base md:text-lg font-normal max-w-xl mb-6">
              Full-stack engineering & AI vibe coding built with mathematical precision, zero decorative chrome, and relentless execution.
            </p>

            {/* Bottom-left Pill Actions */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#works"
                className="h-12 px-8 rounded-full bg-[#ffffff] text-[#111111] text-sm font-semibold flex items-center justify-center hover:bg-[#f5f5f5] active:scale-95 transition"
              >
                Explore Works
              </a>
              <button
                type="button"
                onClick={handleCopyLink}
                className="h-12 px-8 rounded-full bg-transparent border border-white text-white text-sm font-semibold flex items-center justify-center hover:bg-white/10 active:scale-95 transition"
              >
                {copied ? "Link Copied ✓" : "Share Profile"}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. EDITORIAL PROFILE CARD & BIOGRAPHY ({spacing.section} = 48px rhythm) */}
      <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: 1:1 Square Product Portrait on {colors.soft-cloud} */}
          <div className="lg:col-span-5 w-full">
            <div className="relative aspect-square w-full max-w-md mx-auto bg-[#f5f5f5] overflow-hidden rounded-none">
              <Image
                src="/profile-avatar.jpg"
                alt="배찬혁 아바타 포트레이트"
                fill
                priority
                className="object-cover object-center"
              />
              {/* Promo Badge anchored top-left */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-[#ffffff] text-[#111111] text-xs font-semibold border border-[#cacacb] shadow-none">
                  Core Engineer
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Mechanical Restraint Editorial Text */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold tracking-widest text-[#707072] uppercase">
                ATHLETIC EDITORIAL // PROFILE
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#007d48]" />
              <span className="text-xs font-semibold text-[#007d48]">Available for Collaboration</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#111111] leading-tight mb-4">
              BAE CHAN-HYEOK
            </h2>

            <div className="text-sm font-medium text-[#707072] uppercase tracking-wider mb-6">
              Police Administration · Software Engineering · Vibe Coding
            </div>

            {/* Editorial Bio Block */}
            <div className="border-t border-[#cacacb] pt-6 mb-8 w-full">
              <p className="text-base sm:text-lg text-[#39393b] leading-relaxed mb-4">
                새로운 기술을 탐구하고 문제를 해결하며, 사용자에게 가치를 전달하는 개발자 배찬혁입니다.
                경찰행정학의 원칙과 분석적 사고를 바탕으로, 타협 없는 사용자 중심의 웹 애플리케이션을 구축합니다.
              </p>
              <p className="text-sm sm:text-base text-[#707072] leading-relaxed">
                디자인 시스템의 절제와 엔지니어링의 정밀함으로 복잡함을 걷어내고, 제품의 본질과 직관적인 속도를 극대화합니다.
              </p>
            </div>

            {/* Spec Row: Quick Specs */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 py-4 border-y border-[#cacacb] w-full mb-8">
              <div>
                <div className="text-xs text-[#707072] font-medium uppercase mb-1">Discipline</div>
                <div className="text-sm font-semibold text-[#111111]">Full-Stack Web</div>
              </div>
              <div>
                <div className="text-xs text-[#707072] font-medium uppercase mb-1">Framework</div>
                <div className="text-sm font-semibold text-[#111111]">Next.js / React 19</div>
              </div>
              <div>
                <div className="text-xs text-[#707072] font-medium uppercase mb-1">Location</div>
                <div className="text-sm font-semibold text-[#111111]">Seoul, Republic of Korea</div>
              </div>
            </div>

            {/* Primary & Secondary Pill CTA Pair */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="mailto:contact@example.com"
                className="h-12 px-8 rounded-full bg-[#111111] text-[#ffffff] text-sm font-semibold flex items-center justify-center hover:bg-[#39393b] active:scale-95 transition"
              >
                Inquire Project
              </a>
              <button
                type="button"
                onClick={handleCopyLink}
                className="h-12 px-8 rounded-full bg-[#f5f5f5] text-[#111111] text-sm font-semibold flex items-center justify-center hover:bg-[#e5e5e5] active:scale-95 transition"
              >
                {copied ? "Link Copied ✓" : "Copy Profile Link"}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FILTER CHIPS & CATALOG LISTING ({spacing.section} = 48px rhythm) */}
      <section id="works" className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 py-12 border-t border-[#cacacb]">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-bold text-[#707072] tracking-widest uppercase block mb-1">
              PORTFOLIO CATALOG
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111111]">
              FEATURED WORKS & EXPERIMENTS
            </h2>
          </div>

          {/* Filter Chips Bar ({component.filter-chip}) */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: "all", label: "All Works" },
              { id: "web", label: "Web Applications" },
              { id: "ai", label: "AI & Vibe Tools" },
              { id: "admin", label: "Civic & Safety" },
            ].map((chip) => {
              const isActive = activeFilter === chip.id;
              return (
                <button
                  key={chip.id}
                  type="button"
                  onClick={() => setActiveFilter(chip.id)}
                  className={`h-10 px-5 rounded-full text-xs font-semibold transition active:scale-95 ${
                    isActive
                      ? "bg-[#111111] text-[#ffffff]"
                      : "bg-[#ffffff] text-[#111111] border border-[#cacacb] hover:border-[#111111]"
                  }`}
                >
                  {chip.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Product Grid (3-up desktop, 2-up tablet, 1-up mobile per spec) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="bg-[#ffffff] rounded-none p-0 flex flex-col group"
            >
              {/* Product Photo on {colors.soft-cloud} */}
              <div className="relative aspect-square w-full bg-[#f5f5f5] overflow-hidden rounded-none mb-3">
                <Image
                  src="/dev-banner.jpg"
                  alt={project.name}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Promo Badge (top-left) */}
                {project.badge && (
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full bg-[#ffffff] text-[#111111] text-[11px] font-semibold border border-[#cacacb]">
                      {project.badge}
                    </span>
                  </div>
                )}
              </div>

              {/* Swatch Dot Row (12px circular colorways per spec) */}
              <div className="flex items-center gap-1.5 mb-2">
                {project.swatches.map((color, idx) => (
                  <span
                    key={idx}
                    style={{ backgroundColor: color }}
                    className="w-3 h-3 rounded-full border border-[#cacacb] inline-block"
                  />
                ))}
                <span className="text-[11px] text-[#707072] ml-1 font-medium">
                  {project.techs}
                </span>
              </div>

              {/* Product Name */}
              <h3 className="text-base font-semibold text-[#111111] tracking-tight group-hover:underline">
                <a href={project.link} target="_blank" rel="noreferrer">
                  {project.name}
                </a>
              </h3>

              {/* Category Subtitle */}
              <div className="text-sm font-medium text-[#707072] mt-0.5 mb-2">
                {project.category}
              </div>

              {/* Description */}
              <p className="text-xs text-[#39393b] leading-relaxed mb-3">
                {project.tagline}
              </p>

              {/* Price / Status Row */}
              <div className="flex items-center gap-2 text-sm font-medium mt-auto pt-2">
                {project.isSale ? (
                  <>
                    <span className="text-[#d30005] font-semibold">{project.statusText}</span>
                    {project.originalStatus && (
                      <span className="text-[#707072] line-through text-xs">
                        {project.originalStatus}
                      </span>
                    )}
                    {project.discountText && (
                      <span className="text-[#d30005] text-xs font-semibold">
                        ({project.discountText})
                      </span>
                    )}
                  </>
                ) : (
                  <span className="text-[#111111] font-semibold">{project.statusText}</span>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 6. TECHNICAL STACK CATALOG STRIP ({spacing.section} = 48px rhythm) */}
      <section id="stack" className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 py-12 border-t border-[#cacacb]">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-xs font-bold text-[#707072] tracking-widest uppercase block mb-1">
              SPECIFICATIONS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111111]">
              TECHNICAL STACK & CAPABILITIES
            </h2>
          </div>
        </div>

        {/* 4-up Technology Tile Rail */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {[
            {
              category: "Core Engine",
              name: "Next.js 16 & React 19",
              detail: "App Router · Turbopack · RSC",
            },
            {
              category: "Type Safety",
              name: "TypeScript 5+",
              detail: "Strict Typing · Robust Schemas",
            },
            {
              category: "Design System",
              name: "Tailwind CSS v4",
              detail: "Token Hierarchy · Zero Chrome Bloat",
            },
            {
              category: "Cloud & Backend",
              name: "Firebase & Edge APIs",
              detail: "Firestore · Auth · Serverless",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-6 bg-[#f5f5f5] rounded-none flex flex-col justify-between min-h-[140px] hover:bg-[#e5e5e5] transition"
            >
              <span className="text-xs font-bold text-[#707072] uppercase tracking-wider">
                {item.category}
              </span>
              <div>
                <h4 className="text-base font-bold text-[#111111] mb-1">
                  {item.name}
                </h4>
                <p className="text-xs text-[#39393b]">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. PDP DISCLOSURE ACCORDIONS ({component.pdp-disclosure-row}) */}
      <section id="philosophy" className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 py-12 border-t border-[#cacacb]">
        <div className="max-w-3xl">
          <span className="text-xs font-bold text-[#707072] tracking-widest uppercase block mb-2">
            DETAILED SPECIFICATIONS & ACCORDION
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111111] mb-8">
            PRODUCT & ARCHITECTURAL DISCLOSURE
          </h2>

          <div className="w-full">
            {disclosures.map((item, index) => {
              const isOpen = activeDisclosure === index;
              return (
                <div key={index} className="border-b border-[#cacacb]">
                  <button
                    type="button"
                    onClick={() => toggleDisclosure(index)}
                    className="w-full py-6 flex items-center justify-between text-left group"
                  >
                    <span className="text-base sm:text-lg font-medium text-[#111111] group-hover:text-[#707072] transition">
                      {item.title}
                    </span>
                    <span className="text-xl font-light text-[#111111] transform transition-transform duration-200">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="pb-6 text-sm sm:text-base text-[#39393b] leading-relaxed">
                      {item.content}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. FOOTER ({component.footer}) */}
      <footer className="mt-auto w-full border-t border-[#cacacb] bg-[#ffffff] pt-12 pb-8">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12">
          
          {/* 4-column classic Nike catalog layout */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="text-sm font-bold text-[#111111] uppercase tracking-wider mb-4">
                Resources
              </h4>
              <ul className="space-y-2.5 text-xs font-medium text-[#707072]">
                <li><a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-[#111111]">GitHub Repository</a></li>
                <li><a href="https://velog.io" target="_blank" rel="noreferrer" className="hover:text-[#111111]">Engineering Blog</a></li>
                <li><a href="#works" className="hover:text-[#111111]">Project Documentation</a></li>
                <li><a href="#stack" className="hover:text-[#111111]">Design Tokens</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold text-[#111111] uppercase tracking-wider mb-4">
                Developer
              </h4>
              <ul className="space-y-2.5 text-xs font-medium text-[#707072]">
                <li><span className="text-[#111111]">Bae Chan-hyeok</span></li>
                <li><span>Police Administration Major</span></li>
                <li><span>Full-Stack Web Engineering</span></li>
                <li><span>Vibe Coding & AI Workflows</span></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold text-[#111111] uppercase tracking-wider mb-4">
                Catalog
              </h4>
              <ul className="space-y-2.5 text-xs font-medium text-[#707072]">
                <li><a href="#works" className="hover:text-[#111111]">MyLink Bio Portal</a></li>
                <li><a href="#works" className="hover:text-[#111111]">Vibe Engine AI</a></li>
                <li><a href="#works" className="hover:text-[#111111]">Civic Safety Analytics</a></li>
                <li><a href="#works" className="hover:text-[#111111]">Open Source Packages</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold text-[#111111] uppercase tracking-wider mb-4">
                Connect
              </h4>
              <ul className="space-y-2.5 text-xs font-medium text-[#707072]">
                <li><a href="mailto:contact@example.com" className="hover:text-[#111111]">contact@example.com</a></li>
                <li><a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-[#111111]">GitHub Profile</a></li>
                <li><a href="https://velog.io" target="_blank" rel="noreferrer" className="hover:text-[#111111]">Velog Tech Log</a></li>
                <li><button type="button" onClick={handleCopyLink} className="hover:text-[#111111] text-left">Copy Profile Link</button></li>
              </ul>
            </div>
          </div>

          {/* Legal Fine-Print Row ({typography.utility-xs} ~9px-11px) */}
          <div className="border-t border-[#cacacb] pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#707072] gap-4">
            <div className="flex items-center gap-4">
              <span className="text-[#111111] font-semibold">South Korea</span>
              <span>© 2026 Bae Chan-hyeok. All Rights Reserved.</span>
            </div>
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <span className="hover:text-[#111111] cursor-pointer">Engineering Standards</span>
              <span className="hover:text-[#111111] cursor-pointer">Terms of Use</span>
              <span className="hover:text-[#111111] cursor-pointer">Privacy Policy</span>
              <span className="hover:text-[#111111] cursor-pointer">Nike Design Grammar</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Nike Black Pill Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 px-6 py-3 rounded-full bg-[#111111] text-[#ffffff] text-xs font-semibold shadow-none border border-[#e5e5e5] transition-all flex items-center gap-2 z-50">
          <span className="w-2 h-2 rounded-full bg-[#007d48]" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
