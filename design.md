---
name: 토스
slug: toss
category: finance
last_updated: "2026-11-15"
created_at: "2026-05-11"
lang: ko
logo: https://getdesign.kr/logos/toss.png
colors:
  ## TDS adaptive role
  greyBackground: "{colors.grey-100}"   # TDS Mobile Colors 문서가 lightThemeGrey100 으로 가리키는 회색 바탕
  ## Brand
  primary: "{colors.blue-500}"
  blue-500: oklch(0.620 0.191 258)   # #3182F6 — TDS 발행값 blue500, 카노니컬 Toss Blue
  blue-600: oklch(0.522 0.176 257)   # pressed-blue 단계 — 번들 고유값
  blue-700: oklch(0.476 0.174 259)   # pressed gradient stop — 번들 고유값
  blue-50: oklch(0.959 0.020 250)   # #E8F3FF — TDS 발행값 blue50, brand-weak background
  ## Greyscale
  grey-900: oklch(0.237 0.020 258)   # #191F28 — TDS 발행값 grey900, primary text
  grey-800: oklch(0.357 0.028 257)   # #333D4B — TDS 발행값 grey800
  grey-700: oklch(0.460 0.028 256)   # #4E5968 — TDS 발행값 grey700, secondary text
  grey-600: oklch(0.562 0.025 254)   # #6B7684 — TDS 발행값 grey600
  grey-500: oklch(0.666 0.021 253)   # #8B95A1 — TDS 발행값 grey500
  grey-400: oklch(0.779 0.016 251)   # #B0B8C1 — TDS 발행값 grey400, disabled text
  grey-300: oklch(0.874 0.009 248)   # #D1D6DB — TDS 발행값 grey300
  grey-200: oklch(0.930 0.005 248)   # #E5E8EB — TDS 발행값 grey200, default divider/border
  grey-150: oklch(0.918 0.007 247)   # 번들 고유 step
  grey-100: oklch(0.966 0.003 248)   # #F2F4F6 — TDS 발행값 grey100, secondary surface
  grey-50: oklch(0.985 0.002 248)   # #F9FAFB — TDS 발행값 grey50
  white: oklch(1.000 0.000 0)
  ## Semantic palette
  red-500: oklch(0.641 0.208 21)   # #F04452 — TDS 발행값 red500, error / danger
  green-500: oklch(0.493 0.143 154)   # success — 번들 고유값
  ## Illustration warms
  yellow-500: oklch(0.850 0.154 82)   # #FFC342 — TDS 발행값 yellow500
  ## Semantic alpha tokens
  fg-tertiary: oklch(0.155 0.060 261 / 0.58)   # 흐린 본문 텍스트
  fg-quaternary: oklch(0.155 0.060 261 / 0.28)   # placeholder
  line-subtle: oklch(0.000 0.000 0 / 0.08)   # 그레이 배경 위 카드 보더
  bg-overlay: oklch(0.000 0.000 0 / 0.56)   # bottom-sheet scrim
  press-overlay: oklch(0.000 0.000 0 / 0.26)   # pressed-state tint
fonts:
  font-family-emoji: "Tossface"
typography:
  display-1:
    fontSize: 56px
    fontWeight: 700
    lineHeight: 1.30
    letterSpacing: -0.005em
  display-2:
    fontSize: 40px
    fontWeight: 700
    lineHeight: 1.20
    letterSpacing: -0.020em
  h1:
    fontSize: 28px
    fontWeight: 700
    lineHeight: 1.30
    letterSpacing: -0.020em
  h2:
    fontSize: 24px
    fontWeight: 700
    lineHeight: 1.30
    letterSpacing: -0.020em
  h3:
    fontSize: 22px
    fontWeight: 700
    lineHeight: 1.30
    letterSpacing: -0.015em
  h4:
    fontSize: 20px
    fontWeight: 700
    lineHeight: 1.35
    letterSpacing: -0.015em
  title-1:
    fontSize: 18px
    fontWeight: 600
    lineHeight: 1.45
    letterSpacing: -0.010em
  title-2:
    fontSize: 17px
    fontWeight: 600
    lineHeight: 1.45
    letterSpacing: -0.010em
  body-1:
    fontSize: 17px
    fontWeight: 400
    lineHeight: 1.50
    letterSpacing: -0.005em
  body-2:
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.50
    letterSpacing: -0.005em
  body-3:
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.50
    letterSpacing: 0em
  label-l:
    fontSize: 17px
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: -0.005em
  label-m:
    fontSize: 15px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: -0.005em
  label-s:
    fontSize: 13px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: 0em
  caption:
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.40
    letterSpacing: 0em
spacing:
  space-1: 4px
  space-2: 8px
  space-3: 12px
  space-4: 16px
  space-5: 20px
  space-6: 24px
  space-7: 28px
  space-8: 32px
  space-10: 40px
  space-12: 48px
  space-16: 64px
  space-20: 80px
rounded:
  radius-xs: 4px
  radius-s: 8px
  radius-m: 12px
  radius-l: 14px
  radius-xl: 16px
  radius-2xl: 20px
  radius-3xl: 24px
  radius-4xl: 32px
  radius-full: 999px
elevation:
  shadow-1: 0 1px 2px oklch(0.155 0.060 261 / 0.04), 0 1px 1px oklch(0.155 0.060 261 / 0.04)
  shadow-2: 0 4px 12px oklch(0.155 0.060 261 / 0.06), 0 1px 2px oklch(0.155 0.060 261 / 0.04)
  shadow-3: 0 12px 32px oklch(0.155 0.060 261 / 0.10), 0 2px 6px oklch(0.155 0.060 261 / 0.06)
  shadow-toast: 0 8px 24px oklch(0.155 0.060 261 / 0.16)
opacity:
  disabled-opacity: 0.30
---

# 토스 (Toss) — design.md

토스는 송금과 자산 확인, 금융 상품을 한 앱에 담은 금융 앱이고, 거의 무채색인 흰 캔버스 위에서 토스 블루로 채운 버튼은 주요 액션에 쓴다.

## Brand & Style

토스는 자신을 **"은행에 다니는 유능한 친구"** 로 포지셔닝한다. 조용히 일을 처리하고, 사용자의 시간을 낭비시키지 않는다는 어조다. 전체 무드는 **차갑고 절제된, 거의 무채색에 가까운 화이트 캔버스 + 선명한 토스 블루 단일 강조색**으로 요약된다.

모서리는 **공격적으로 둥글지만 결코 귀엽지 않다** — 버튼·카드·hero 블록에 16~32px 라운드, chips·primary CTA에 999px full pill을 쓴다. 배경은 평면이 기본이며, 그라디언트는 세 가지 문서화된 예외(bottom CTA 보호 그라디언트, 로딩 버튼 radial glow, yellow→orange 일러스트)만 허용된다.

Voice는 **해요체(대화형 존댓말) + 위임형 + 일상어**로 요약된다. 종결어미 `-요`로 통일되며 격식체도, 단정형 `-다`도 사용하지 않는다.

## Colors

TDS 컬러 시스템은 4계층 구조(Target → Role → Variant → Level)로 운영된다. 카노니컬 앵커 `blue-500`(`#3182F6`)과 brand-weak 배경 `blue-50`(`#E8F3FF`)가 TDS 발행 핵심값이다. `grey-900`(`#191F28`)은 순수 검정이 아닌 미세하게 차가운 navy 톤이며, `grey-100`(`#F2F4F6`)은 화면 보조 표면으로 사용된다.

| 역할 | 토큰 | 값 |
|---|---|---|
| 배경 base | `{colors.white}` | #FFFFFF |
| 보조 표면 | `{colors.grey-100}` | #F2F4F6 |
| Primary 텍스트 | `{colors.grey-900}` | #191F28 |
| Secondary 텍스트 | `{colors.grey-700}` | #4E5968 |
| Primary CTA 배경 | `{colors.blue-500}` | #3182F6 |
| Brand-weak 배경 | `{colors.blue-50}` | #E8F3FF |
| 디바이더/보더 | `{colors.grey-200}` | #E5E8EB |
| Danger | `{colors.red-500}` | #F04452 |
| Success | `{colors.green-500}` | — |

## Typography

본문/UI 서체는 **Toss Product Sans (TPS)**이며, 외부 대체 서체로는 **Pretendard**를 명시한다. display 웨이트는 Bold 700에 tight -1.5%~-2% 트래킹으로 무게감을 잡고, 본문은 15px Regular + 1.5 line-height가 표준이다. 버튼은 XL/L에서 Bold 700 17px, M/S에서 Semibold 15~13px을 쓴다.

## Spacing

베이스 단위는 4px이며, 토큰 사다리는 4~80px 12단계로 정의된다. 시스템 룰: **24px** 화면 outer padding, **16px** list-row 간 간격, **8px** 밀접 결합 요소 사이.

## Rounded

라운드 토큰은 4~32px 8단계 + `full`(999px) 한 단계로 정의된다. 버튼 라운드는 사이즈에 따라 스케일된다 — XL 16 / L 14 / M 12 / S 10.

## Elevation & Depth

토스는 평면이 기본이며 그림자는 floating/modal 표면에서만 등장한다. pressed state는 `{colors.press-overlay}`(검정 26% overlay)를 resting fill 위에 얹는 방식으로 구현된다.

## Components

### button

| 사이즈 | height | radius | label |
|---|---|---|---|
| XL | 56px | 16px | 17px Bold |
| L  | 48px | 14px | 17px Bold |
| M  | 40px | 12px | 15px Semibold |
| S  | 32px | 10px | 13px Semibold |

### chip

34px 높이의 full pill. resting은 1px `{colors.grey-200}` 보더 + 흰 배경, active 변형은 `{colors.grey-900}` 배경 + 흰 텍스트로 flip된다.

### list-row

44px 높이, 좌우 24px padding. 아바타 + 타이틀/서브 스택 + 우측 amount/arrow 슬롯. 양수 금액은 `{colors.blue-500}`, 음수는 `{colors.grey-900}`.

### text-field

48px height, 12px radius. `{colors.grey-100}` resting 배경, 1px `{colors.grey-200}` 보더. focus 시 흰 배경 + 1.5px `{colors.blue-500}` 보더.

### bottom-cta

화면 최하단 고정 56px 버튼. 위쪽에 `white → transparent` 보호 그라디언트 적용.

## Do's and Don'ts

**Do**
- 화면당 단일 강조색 정책 — primary CTA는 화면당 하나만
- 버튼 라운드는 사이즈와 페어로 운영
- product 카피는 해요체로 작성
- 에러 메시지는 "Navigating error" 원칙 — 사용자를 다음으로 안내

**Don't**
- 한 화면에 강조 hue를 둘 이상 사용하지 않음
- 그라디언트를 chrome에 사용하지 않음 (3가지 예외만)
- skeleton shimmer 사용하지 않음 — 3-dot loader 사용
- 320ms 초과 fade·바운스 오버슈트·parallax 사용하지 않음
- `button-primary`와 `bottom-cta`를 같은 화면에 동시에 두지 않음

## References

1. https://toss.tech/article/toss-design-system — TDS 디자인 시스템 개요
2. https://toss.tech/article/tds-color-system-update — TDS 컬러 시스템 OKLCH 마이그레이션
3. https://toss.tech/article/tds-component-making — 컴포넌트 설계 방법론
4. https://www.npmjs.com/package/@toss/tds-colors — TDS 색 토큰 npm 패키지
5. https://toss.im/tossfeed/article/beginning-of-tps — Toss Product Sans 개발기
