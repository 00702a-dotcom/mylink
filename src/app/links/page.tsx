"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Pin,
  Sparkles,
  Link2,
  Search,
  Copy,
  Check,
} from "lucide-react";
import {
  DUMMY_LINKS,
  CATEGORY_COLORS,
  type DummyLink,
  type LinkCategory,
} from "@/data/dummy-links";

const ALL_CATEGORIES: LinkCategory[] = [
  "개발",
  "블로그",
  "소셜",
  "포트폴리오",
  "커뮤니티",
];

export default function LinksPage() {
  const [selectedCategory, setSelectedCategory] = useState<LinkCategory | "전체">("전체");
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // 필터링
  const filtered = DUMMY_LINKS.filter((link) => {
    const matchCategory =
      selectedCategory === "전체" || link.category === selectedCategory;
    const matchSearch =
      link.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      link.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  // 핀 고정 → 상단으로
  const sorted = [...filtered].sort((a, b) => {
    if (a.isPinned && !b.isPinned) return -1;
    if (!a.isPinned && b.isPinned) return 1;
    return 0;
  });

  const handleCopy = async (link: DummyLink) => {
    await navigator.clipboard.writeText(link.url);
    setCopiedId(link.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="min-h-screen bg-muted/40">
      {/* ── 헤더 ── */}
      <header className="border-b bg-background/80 backdrop-blur sticky top-0 z-10">
        <div className="max-w-2xl mx-auto px-4 h-14 flex items-center gap-3">
          <Link2 className="w-5 h-5 text-primary shrink-0" />
          <span className="font-semibold text-sm">배찬혁의 링크 모음</span>
          <Badge variant="secondary" className="ml-auto text-xs">
            {DUMMY_LINKS.length}개
          </Badge>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-6 space-y-5">
        {/* ── 프로필 카드 ── */}
        <Card>
          <CardHeader className="flex flex-row items-center gap-4 pb-3">
            <Avatar className="w-14 h-14">
              <AvatarImage src="/profile-avatar.jpg" alt="배찬혁" />
              <AvatarFallback className="text-lg font-bold">배</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <CardTitle className="text-lg">배찬혁</CardTitle>
              <CardDescription className="text-sm mt-0.5">
                경찰행정학 → 주니어 개발자 · AI 바이브 코더
              </CardDescription>
            </div>
          </CardHeader>
          <Separator />
          <CardContent className="pt-3 pb-3">
            <p className="text-sm text-muted-foreground leading-relaxed">
              최신 AI 도구와 모던 웹 생태계로 아이디어를 빠르게 실현해요. 아래 링크에서 더 많은 이야기를 만나보세요 👇
            </p>
          </CardContent>
        </Card>

        {/* ── 검색창 ── */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="링크 검색하기..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-10 pl-9 pr-4 rounded-lg border bg-background text-sm outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition placeholder:text-muted-foreground"
          />
        </div>

        {/* ── 카테고리 필터 ── */}
        <div className="flex gap-2 flex-wrap">
          <Button
            variant={selectedCategory === "전체" ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory("전체")}
            className="rounded-full h-8 text-xs"
          >
            전체
          </Button>
          {ALL_CATEGORIES.map((cat) => (
            <Button
              key={cat}
              variant={selectedCategory === cat ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(cat)}
              className="rounded-full h-8 text-xs"
            >
              {cat}
            </Button>
          ))}
        </div>

        {/* ── 링크 목록 ── */}
        {sorted.length === 0 ? (
          <Card>
            <CardContent className="py-16 text-center text-muted-foreground">
              <Link2 className="w-8 h-8 mx-auto mb-3 opacity-30" />
              <p className="text-sm">해당하는 링크가 없어요</p>
            </CardContent>
          </Card>
        ) : (
          <Card>
            <CardContent className="p-0">
              {sorted.map((link, i) => (
                <div key={link.id}>
                  {/* 핀 그룹 구분선 */}
                  {i > 0 &&
                    sorted[i - 1].isPinned &&
                    !link.isPinned && (
                      <div className="px-4">
                        <Separator />
                      </div>
                    )}

                  <div className="flex items-center gap-4 px-4 py-4 hover:bg-muted/50 transition group">
                    {/* 아이콘 */}
                    <div className="w-11 h-11 rounded-xl bg-muted flex items-center justify-center text-2xl shrink-0">
                      {link.icon}
                    </div>

                    {/* 텍스트 */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="font-semibold text-[15px] text-foreground leading-tight">
                          {link.title}
                        </span>
                        {link.isPinned && (
                          <Pin className="w-3 h-3 text-muted-foreground shrink-0" />
                        )}
                        {link.isNew && (
                          <Badge className="h-4 px-1.5 text-[10px] gap-0.5 bg-primary/10 text-primary hover:bg-primary/10 border-0">
                            <Sparkles className="w-2.5 h-2.5" />
                            NEW
                          </Badge>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">
                        {link.description}
                      </p>
                      <Badge
                        variant="outline"
                        className={`mt-1.5 h-5 px-2 text-[10px] font-medium border ${CATEGORY_COLORS[link.category]}`}
                      >
                        {link.category}
                      </Badge>
                    </div>

                    {/* 액션 버튼들 */}
                    <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition shrink-0">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="w-8 h-8"
                        onClick={() => handleCopy(link)}
                        title="URL 복사"
                      >
                        {copiedId === link.id ? (
                          <Check className="w-3.5 h-3.5 text-green-500" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </Button>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        title="링크 열기"
                        className="inline-flex w-8 h-8 items-center justify-center rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        )}

        {/* ── 결과 카운트 ── */}
        <p className="text-center text-xs text-muted-foreground">
          {sorted.length}개의 링크
          {selectedCategory !== "전체" && ` · ${selectedCategory}`}
          {searchQuery && ` · "${searchQuery}"`}
        </p>
      </main>
    </div>
  );
}
