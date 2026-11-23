<img src="./images/maoyulin.png" width="350" height="500" alt="貓羽霖" align=right />

<div align="center">

# 貓羽霖
> 一隻住在藍色星光裡的貓耳少女 · Astro 個人部落格
>
> ![Node.js >= 22](https://img.shields.io/badge/node.js-%3E%3D22-brightgreen)
![pnpm >= 11](https://img.shields.io/badge/pnpm-%3E%3D11-blue)
![Astro](https://img.shields.io/badge/Astro-7-orange)
![TypeScript](https://img.shields.io/badge/TypeScript-6-blue)
![License](https://img.shields.io/badge/license-MIT-blue)

</div>

---

📖 README：
**[简体中文](../README.md)** | **[繁體中文](README.zh-TW.md)** | **[English](../README.en.md)** | **[日本語](README.ja.md)** | **[한국어](README.ko.md)**

⚡ 靜態站點生成：基於 Astro 的超快載入速度和 SEO 優化

🎨 現代化設計：銀藍與星光交織的清爽介面，支援自訂主題色

📱 行動裝置友善：完美的響應式體驗，行動端專項優化

🔧 高度可配置：大部分功能模組均可透過配置檔案自訂

站點圍繞「銀藍、貓耳、星光」展開：以銀藍色作為主色，搭配貓耳少女的形象與柔和光暈點綴，整體觀感安靜清透，又保留了一點夜色裡的靈動。首頁支援橫幅、全螢幕桌布、透明覆蓋與純色四種展示模式，可在設定面板中隨時切換。

>[!TIP]
>
>貓羽霖是一個基於 Astro 框架與 Fuwari 範本二次開發的現代化個人部落格站點，面向技術愛好者與內容創作者。它整合了現代 Web 技術堆疊，提供豐富的功能模組與高度可自訂的介面，方便你搭建專業、耐看且載入迅速的個人部落格。
>
>站點保留了 Fuwari 原版的版面思路，可根據自己的喜好在配置檔案中自由切換。
>
>UI 支援 i18n 多語言，但除簡體中文外，其他語言均為 AI 翻譯，如有錯誤，歡迎提交 Pull Request 修正。

## ✨ 功能特性

### 核心功能

- [x] **Astro + Tailwind CSS** - 基於現代技術堆疊的超快靜態站點生成
- [x] **流暢動畫** - Swup 頁面過渡動畫，提供絲滑的瀏覽體驗
- [x] **響應式設計** - 完美適配桌面端、平板和行動裝置
- [x] **多語言支援** - i18n 國際化 UI，支援簡體中文、繁體中文、英文、日文、俄語、韓文
- [x] **全文搜尋** - 基於 Pagefind 的客戶端搜尋，支援文章內容索引

### 個性化
- [x] **動態側邊欄** - 支援配置單側邊欄、雙側邊欄
- [x] **文章版面配置** - 支援配置（單列）列表、網格（多列/瀑布流）版面配置
- [x] **字型管理** - 支援自訂字型，豐富的字型選擇器
- [x] **頁尾配置** - HTML 內容注入，完全自訂
- [x] **亮暗色模式** - 支援亮色/暗色/跟隨系統三種模式
- [x] **導覽列自訂** - Logo、標題、連結全面自訂
- [x] **桌布模式切換** - 橫幅桌布、全螢幕桌布、全螢幕透明桌布、純色背景
- [x] **主題色自訂** - 360° 色相調節

如果你有好用的功能和優化，歡迎提交 Pull Request。

## 🚀 快速開始

### 環境要求

- Node.js ≥ 22
- pnpm ≥ 11

### 本地開發部署

1. **克隆儲存庫：**
   ```bash
   git clone <你的儲存庫位址>
   cd maoyulin
   ```

2. **安裝依賴：**
   ```bash
   # 如果沒有安裝 pnpm，先安裝
   npm install -g pnpm

   # 安裝專案依賴
   pnpm install
   ```

3. **配置部落格：**
   - 編輯 `src/config/` 目錄下的配置檔案自訂部落格設定

4. **啟動開發伺服器：**
   ```bash
   pnpm dev
   ```
   部落格將在 `http://localhost:4321` 可用

### 平台託管部署

- **參考[官方指南](https://docs.astro.build/zh-cn/guides/deploy/)將部落格部署至 Vercel、Netlify、Cloudflare Pages、EdgeOne Pages 等。**
- **Vercel**、**Netlify** 等主流平台自動部署，會根據環境自動選擇適配器。

   框架預設： `Astro`

   根目錄： `./`

   輸出目錄： `dist`

   建置命令： `pnpm run build`

   安裝命令： `pnpm install`

## 📖 配置說明

> 📚 **配置文檔**：查看 [`src/config/README.md`](../src/config/README.md) 了解各配置檔案的作用

### 設定網站語言

要設定部落格的預設語言，請編輯 `src/config/siteConfig.ts` 檔案：

```typescript
// 定義站點語言
const SITE_LANG = "zh_CN";
```

**支援的語言代碼：**
- `zh_CN` - 簡體中文
- `zh_TW` - 繁體中文
- `en` - 英文
- `ja` - 日文
- `ru` - 俄文
- `ko` - 韓文

### 配置檔案結構

```
src/
├── config/
│   ├── index.ts                  # 配置索引檔案
│   ├── siteConfig.ts             # 站點基礎配置
│   ├── analyticsConfig.ts        # 統計分析配置
│   ├── announcementConfig.ts     # 公告配置
│   ├── backgroundWallpaper.ts    # 背景桌布配置
│   ├── commentConfig.ts          # 留言系統配置
│   ├── coverImageConfig.ts       # 封面圖配置
│   ├── displaySettingsConfig.ts  # 設定面板配置
│   ├── dynamicConfig.ts          # 動態頁面配置
│   ├── effectsConfig.ts          # 動畫特效配置（櫻花等）
│   ├── expressiveCodeConfig.ts   # 程式碼高亮配置
│   ├── fontConfig.ts             # 字型配置
│   ├── FooterConfig.html         # 頁尾配置
│   ├── friendsConfig.ts          # 友鏈配置
│   ├── galleryConfig.ts          # 相簿配置
│   ├── licenseConfig.ts          # 授權配置
│   ├── musicConfig.ts            # 音樂播放器配置
│   ├── navBarConfig.ts           # 導覽列配置
│   ├── pioConfig.ts              # 看板娘配置
│   ├── mermaidConfig.ts          # Mermaid 圖表配置
│   ├── plantumlConfig.ts         # PlantUML 圖表配置
│   ├── profileConfig.ts          # 使用者資料配置
│   ├── sidebarConfig.ts          # 側邊欄版面配置
```

## ⚙️ 文章 Frontmatter

```yaml
---
title: My First Blog Post
published: 2023-09-09
description: This is the first post of my new Astro blog.
image: ./cover.jpg  # 或使用 "api" 來啟用隨機封面圖
tags: [Foo, Bar]
category: Front-end
draft: false
lang: zh-CN      # 僅當文章語言與 `siteConfig.ts` 中的網站語言不同時需要設定
pinned: false    # 置頂
comment: true    # 是否允許留言
---
```

## 動態

動態檔案存放於 `src/content/dynamic/`，每個 Markdown 檔案代表一則動態。可使用快捷命令建立：

```bash
pnpm new-d 今天天氣真不錯
```

`pnpm new-dynamic <content>` 是功能相同的完整命令。

```yaml
---
published: 2026-07-15 16:15:29
pinned: true  # 置頂
location: China # 位置
---

動態內容支援 Markdown 語法。
```

也支援對接 [Memos](https://www.usememos.com/) 作為資料來源，在 `src/config/dynamicConfig.ts` 中設定 `memos` 選項即可即時取得 Memos 動態，支援置頂同步和圖片附件展示。

## 🧩 Markdown 擴充語法

除了 Astro 預設支援的 [GitHub Flavored Markdown](https://github.github.com/gfm/) 之外，還包含了一些額外的 Markdown 功能：

- 提醒塊（Admonitions） - 支援 GitHub、Obsidian、VitePress、Docusaurus 四種風格主題配置
- GitHub 儲存庫卡片
- 基於 Expressive Code 的增強程式碼區塊（[文檔](https://expressive-code.com/)）

## 🧞 指令

下列指令均需要在專案根目錄執行：

| Command                    | Action                                 |
| :------------------------- | :------------------------------------- |
| `pnpm install`             | 安裝依賴                               |
| `pnpm dev`                 | 在 `localhost:4321` 啟動本地開發伺服器 |
| `pnpm build`               | 建置網站至 `./dist/`                   |
| `pnpm preview`             | 本地預覽已建置的網站                   |
| `pnpm check`               | 檢查程式碼中的錯誤                     |
| `pnpm format`              | 使用 Biome 格式化您的程式碼            |
| `pnpm new-post <filename>` | 建立新文章                             |
| `pnpm new-d <content>`     | 建立一則動態                           |
| `pnpm new-dynamic <content>` | 建立一則動態（完整命令）             |
| `pnpm astro ...`           | 執行 `astro add`, `astro check` 等指令 |
| `pnpm astro --help`        | 顯示 Astro CLI 說明                    |

## 🙏 致謝

非常感謝 [saicaca](https://github.com/saicaca) 開發的 [fuwari](https://github.com/saicaca/fuwari) 範本，本站點在其基礎上二次開發。

### 技術棧

- [Astro](https://astro.build)
- [Tailwind CSS](https://tailwindcss.com)
- [Iconify](https://iconify.design)

### 靈感專案

- [fuwari](https://github.com/saicaca/fuwari)
- [hexo-theme-shoka](https://github.com/amehime/hexo-theme-shoka)
- [astro-koharu](https://github.com/cosZone/astro-koharu)
- [Mizuki](https://github.com/matsuzaka-yuki/Mizuki)

### 其他參考
- 部落客`霞葉`的 [Bangumi 收藏](https://kasuha.com/posts/fuwari-enhance-ep2/) 頁面元件

## 🎀 形象與素材署名

- 形象原型：**貓羽雫**（ねこあめ しずく）
- 角色設計 / 原案：**甘城なつき**
- 參考資料：[萌娘百科 · 貓羽雫](https://zh.moegirl.org.cn/猫羽雫)、[B 站圖集檢索](https://search.bilibili.com/all?keyword=猫羽雫)、[Pixiv 標籤 · 貓羽雫](https://www.pixiv.net/tags/猫羽雫)、[Pixiv 標籤 · 甘城なつき](https://www.pixiv.net/tags/甘城なつき)
- 完整素材出處與逐圖版權清單：[MAOYULIN-CREDITS.md](../MAOYULIN-CREDITS.md)
- 本站為**非商業同人站點**，與角色版權方無隸屬關係；相關角色形象、插畫與素材版權歸原作者所有，如有侵權請聯繫刪除。

## 📝 許可協議

本專案遵循 [MIT license](https://mit-license.org/) 開源協議，詳細查看 [LICENSE](../LICENSE) 文件。

最初 Fork 自 [saicaca/fuwari](https://github.com/saicaca/fuwari)，感謝原作者的貢獻。

**版權聲明：**
- Copyright (c) 2024 [saicaca](https://github.com/saicaca) - [fuwari](https://github.com/saicaca/fuwari)

根據 MIT 開源協議，你可以自由使用、修改、分發程式碼，但需保留上述版權聲明及 [LICENSE](../LICENSE) 中的全部聲明。

## 🍀 貢獻者

感謝以下貢獻者對原專案 [fuwari](https://github.com/saicaca/fuwari) 做出的貢獻，為本專案奠定了基礎。

><a href="https://github.com/saicaca/fuwari/graphs/contributors">
>  <img src="https://contrib.rocks/image?repo=saicaca/fuwari" />
></a>
