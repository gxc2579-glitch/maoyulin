<img src="./images/maoyulin.png" width="350" height="500" alt="猫羽霖" align=right />

<div align="center">

# 猫羽霖
> 푸른 별빛 속에 사는 고양이 귀 소녀 · Astro 개인 블로그
>
> ![Node.js >= 22](https://img.shields.io/badge/node.js-%3E%3D22-brightgreen)
![pnpm >= 11](https://img.shields.io/badge/pnpm-%3E%3D11-blue)
![Astro](https://img.shields.io/badge/Astro-7-orange)
![TypeScript](https://img.shields.io/badge/TypeScript-6-blue)
![License](https://img.shields.io/badge/license-MIT-blue)

</div>

---

📖 README:
**[简体中文](../README.md)** | **[繁體中文](README.zh-TW.md)** | **[English](../README.en.md)** | **[日本語](README.ja.md)** | **[한국어](README.ko.md)**

⚡ 정적 사이트 생성: Astro 기반의 매우 빠른 로딩 속도와 SEO 최적화

🎨 현대적인 디자인: 은빛 파란색과 별빛이 어우러진 산뜻한 인터페이스, 테마 색상 사용자 지정 지원

📱 모바일 친화적: 모바일에 최적화된 완벽한 반응형 환경

🔧 높은 구성 자유도: 대부분의 기능을 구성 파일에서 사용자 지정 가능

사이트는 "은빛 파란색, 고양이 귀, 별빛"을 테마로 합니다. 은빛 파란색을 주조색으로 삼고 고양이 귀 소녀의 이미지와 부드러운 빛의 강조를 더해, 차분하고 맑은 인상 속에 밤의 생기를 남겼습니다. 홈은 배너, 전체 화면 배경화면, 투명 오버레이, 단색의 네 가지 표시 모드를 지원하며 설정 패널에서 언제든 전환할 수 있습니다.

>[!TIP]
>
>猫羽霖은 Astro 프레임워크와 Fuwari 템플릿을 기반으로 2차 개발된 현대적인 개인 블로그 사이트입니다. 기술 애호가와 콘텐츠 제작자를 위해 설계되었으며, 현대적인 웹 기술 스택과 다양한 기능 모듈, 높은 사용자 지정성을 갖춘 인터페이스로 전문적이고 보기 좋은 개인 블로그를 손쉽게 만들 수 있습니다.
>
>Fuwari 원본 레이아웃 방침도 유지하고 있어 구성 파일에서 취향에 맞게 자유롭게 전환할 수 있습니다.
>
>UI는 i18n을 지원하지만 중국어 간체를 제외한 언어는 AI 번역입니다. 오류가 있으면 Pull Request로 수정에 참여해 주세요.

## ✨ 기능

### 핵심 기능

- [x] **Astro + Tailwind CSS** - 현대적인 기술 스택 기반의 초고속 정적 사이트 생성
- [x] **부드러운 애니메이션** - Swup 페이지 전환 애니메이션으로 매끄러운 탐색 환경
- [x] **반응형 디자인** - 데스크톱, 태블릿, 모바일 기기에 완벽하게 대응
- [x] **다국어 지원** - i18n UI로 중국어 간체, 중국어 번체, 영어, 일본어, 러시아어, 한국어 지원
- [x] **전문 검색** - Pagefind 기반 클라이언트 검색과 게시물 본문 색인 지원

### 개인화
- [x] **동적 사이드바** - 단일 및 이중 사이드바 구성 지원
- [x] **게시물 레이아웃** - 목록(단일 열) 및 그리드(다중 열/메이슨리) 레이아웃 지원
- [x] **글꼴 관리** - 사용자 지정 글꼴과 다양한 글꼴 선택기 지원
- [x] **푸터 구성** - HTML 콘텐츠 삽입을 통한 완전한 사용자 지정
- [x] **라이트/다크 모드** - 라이트, 다크, 시스템 설정 따르기 모드 지원
- [x] **내비게이션 바 사용자 지정** - 로고, 제목, 링크를 자유롭게 사용자 지정
- [x] **배경화면 모드 전환** - 배너, 전체 화면, 전체 화면 투명 배경화면 및 단색 배경 지원
- [x] **테마 색상 사용자 지정** - 360° 색조 조절

유용한 기능이나 개선 사항이 있다면 Pull Request를 보내 주세요.

## 🚀 빠른 시작

### 요구 사항

- Node.js ≥ 22
- pnpm ≥ 11

### 로컬 개발

1. **저장소 복제:**
   ```bash
   git clone <저장소 URL>
   cd maoyulin
   ```

2. **의존성 설치:**
   ```bash
   # pnpm이 설치되어 있지 않은 경우
   npm install -g pnpm

   # 프로젝트 의존성 설치
   pnpm install
   ```

3. **블로그 구성:**
   - `src/config/` 디렉터리의 구성 파일을 편집하여 블로그 설정을 사용자 지정합니다

4. **개발 서버 시작:**
   ```bash
   pnpm dev
   ```
   블로그는 `http://localhost:4321`에서 이용할 수 있습니다

### 호스팅 플랫폼에 배포

- **[공식 가이드](https://docs.astro.build/en/guides/deploy/)를 참고하여 Vercel, Netlify, Cloudflare Pages, EdgeOne Pages 등에 배포하세요.**
- **Vercel**, **Netlify** 등 주요 플랫폼에서는 환경에 맞는 어댑터를 자동으로 선택하여 배포합니다.

   프레임워크 프리셋: `Astro`

   루트 디렉터리: `./`

   출력 디렉터리: `dist`

   빌드 명령: `pnpm run build`

   설치 명령: `pnpm install`

## 📖 구성 안내

> 📚 **구성 문서**: 각 구성 파일의 역할은 [`src/config/README.md`](../src/config/README.md)를 확인하세요

### 웹사이트 언어 설정

블로그의 기본 언어를 설정하려면 `src/config/siteConfig.ts` 파일을 편집하세요.

```typescript
// 사이트 언어 정의
const SITE_LANG = "zh_CN";
```

**지원하는 언어 코드:**
- `zh_CN` - 중국어 간체
- `zh_TW` - 중국어 번체
- `en` - 영어
- `ja` - 일본어
- `ru` - 러시아어
- `ko` - 한국어

### 구성 파일 구조

```
src/
├── config/
│   ├── index.ts                  # 구성 인덱스 파일
│   ├── siteConfig.ts             # 사이트 기본 구성
│   ├── analyticsConfig.ts        # 분석 구성
│   ├── announcementConfig.ts     # 공지 구성
│   ├── backgroundWallpaper.ts    # 배경화면 구성
│   ├── commentConfig.ts          # 댓글 시스템 구성
│   ├── coverImageConfig.ts       # 커버 이미지 구성
│   ├── displaySettingsConfig.ts  # 설정 패널 구성
│   ├── dynamicConfig.ts          # 일상 페이지 구성
│   ├── effectsConfig.ts          # 애니메이션 효과 구성(벚꽃 등)
│   ├── expressiveCodeConfig.ts   # 코드 하이라이트 구성
│   ├── fontConfig.ts             # 글꼴 구성
│   ├── FooterConfig.html         # 푸터 구성
│   ├── friendsConfig.ts          # 친구 링크 구성
│   ├── galleryConfig.ts          # 갤러리 구성
│   ├── licenseConfig.ts          # 라이선스 구성
│   ├── musicConfig.ts            # 음악 플레이어 구성
│   ├── navBarConfig.ts           # 내비게이션 바 구성
│   ├── pioConfig.ts              # 마스코트 구성
│   ├── mermaidConfig.ts          # Mermaid 다이어그램 구성
│   ├── plantumlConfig.ts         # PlantUML 다이어그램 구성
│   ├── profileConfig.ts          # 프로필 구성
│   ├── sidebarConfig.ts          # 사이드바 레이아웃 구성
```

## ⚙️ 게시물 Frontmatter

```yaml
---
title: My First Blog Post
published: 2023-09-09
description: This is the first post of my new Astro blog.
image: ./cover.jpg  # 또는 "api"로 무작위 커버 이미지 사용
tags: [Foo, Bar]
category: Front-end
draft: false
lang: zh-CN      # `siteConfig.ts`의 사이트 언어와 다를 때만 설정
pinned: false    # 게시물 고정
comment: true    # 댓글 허용
---
```

## 일상

일상 파일은 `src/content/dynamic/`에 저장되며, 하나의 Markdown 파일이 하나의 일상에 해당합니다. 다음 명령으로 만들 수 있습니다.

```bash
pnpm new-d 오늘 날씨가 정말 좋네요
```

`pnpm new-dynamic <content>`는 같은 기능을 하는 전체 명령입니다.

```yaml
---
published: 2026-07-15 16:15:29
pinned: true  # 게시물 고정
location: China # 위치
---

일상 내용은 Markdown을 지원합니다.
```

[Memos](https://www.usememos.com/)를 데이터 소스로 사용할 수도 있습니다. `src/config/dynamicConfig.ts`의 `memos` 옵션을 구성하면 고정 항목 동기화와 이미지 첨부 표시를 지원하면서 실시간으로 Memos 일상을 가져옵니다.

## 🧩 Markdown 확장 문법

Astro가 기본으로 지원하는 [GitHub Flavored Markdown](https://github.github.com/gfm/) 외에도 다음과 같은 기능을 제공합니다.

- 알림 블록(Admonitions) - GitHub, Obsidian, VitePress, Docusaurus 테마 구성 지원
- GitHub 저장소 카드
- Expressive Code 기반의 향상된 코드 블록 ([문서](https://expressive-code.com/))

## 🧞 명령

모든 명령은 프로젝트 루트 디렉터리에서 실행해야 합니다.

| Command                    | Action                                              |
|:---------------------------|:----------------------------------------------------|
| `pnpm install`             | 의존성 설치                                         |
| `pnpm dev`                 | `localhost:4321`에서 로컬 개발 서버 시작            |
| `pnpm build`               | 사이트를 `./dist/`에 빌드                           |
| `pnpm preview`             | 빌드된 사이트를 로컬에서 미리 보기                  |
| `pnpm check`               | 코드 오류 검사                                      |
| `pnpm format`              | Biome으로 코드 서식 정리                            |
| `pnpm new-post <filename>` | 새 게시물 생성                                      |
| `pnpm new-d <content>`     | 새 일상 생성                                        |
| `pnpm new-dynamic <content>` | 새 일상 생성(전체 명령)                           |
| `pnpm astro ...`           | `astro add`, `astro check` 및 기타 명령 실행         |
| `pnpm astro --help`        | Astro CLI 도움말 표시                               |

## 🙏 감사의 말

[fuwari](https://github.com/saicaca/fuwari) 템플릿을 개발한 [saicaca](https://github.com/saicaca) 님께 특별히 감사드립니다. 본 사이트는 이 템플릿을 기반으로 2차 개발되었습니다.

### 기술 스택

- [Astro](https://astro.build)
- [Tailwind CSS](https://tailwindcss.com)
- [Iconify](https://iconify.design)

### 영감을 받은 프로젝트

- [fuwari](https://github.com/saicaca/fuwari)
- [hexo-theme-shoka](https://github.com/amehime/hexo-theme-shoka)
- [astro-koharu](https://github.com/cosZone/astro-koharu)
- [Mizuki](https://github.com/matsuzaka-yuki/Mizuki)

### 기타 참고 자료
- 블로거 `霞葉`의 [Bangumi Collection](https://kasuha.com/posts/fuwari-enhance-ep2/) 페이지 컴포넌트

## 🎀 캐릭터 및 에셋 크레딧

- 캐릭터 원형: **猫羽雫** (네코아메 시즈쿠)
- 캐릭터 디자인 / 원안: **甘城なつき**
- 참고: [萌娘百科 · 猫羽雫](https://zh.moegirl.org.cn/猫羽雫), [B 站 갤러리 검색](https://search.bilibili.com/all?keyword=猫羽雫), [Pixiv 태그 · 猫羽雫](https://www.pixiv.net/tags/猫羽雫), [Pixiv 태그 · 甘城なつき](https://www.pixiv.net/tags/甘城なつき)
- 전체 소재 출처 및 이미지별 크레딧 목록: [MAOYULIN-CREDITS.md](../MAOYULIN-CREDITS.md)
- 본 사이트는 **비영리 동인 사이트**이며 권리자와 아무런 소속 관계가 없습니다. 캐릭터 이미지, 일러스트, 소재의 저작권은 원작자에게 있으며, 문제가 있을 경우 연락해 주시면 삭제하겠습니다.

## 📝 라이선스

이 프로젝트는 [MIT 라이선스](https://mit-license.org/)에 따라 배포됩니다. 자세한 내용은 [LICENSE](../LICENSE) 파일을 확인하세요.

원래 [saicaca/fuwari](https://github.com/saicaca/fuwari)에서 fork되었습니다. 기여해 주신 원작자에게 감사드립니다.

**저작권 고지:**
- Copyright (c) 2024 [saicaca](https://github.com/saicaca) - [fuwari](https://github.com/saicaca/fuwari)

MIT 라이선스에 따라 코드를 자유롭게 사용, 수정 및 배포할 수 있지만 위 저작권 고지와 [LICENSE](../LICENSE)의 모든 고지를 유지해야 합니다.

## 🍀 기여자

이 프로젝트의 기반을 마련한 원본 프로젝트 [fuwari](https://github.com/saicaca/fuwari)에 기여해 주신 모든 분께 감사드립니다.

><a href="https://github.com/saicaca/fuwari/graphs/contributors">
>  <img src="https://contrib.rocks/image?repo=saicaca/fuwari" />
></a>
