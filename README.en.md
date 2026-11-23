<img src="./docs/images/maoyulin.png" width="350" height="500" alt="Maoyulin" align=right />

<div align="center">

# Maoyulin (猫羽霖)
> A cat-eared girl living among blue starlight · Astro personal blog
>
> ![Node.js >= 22](https://img.shields.io/badge/node.js-%3E%3D22-brightgreen)
![pnpm >= 11](https://img.shields.io/badge/pnpm-%3E%3D11-blue)
![Astro](https://img.shields.io/badge/Astro-7-orange)
![TypeScript](https://img.shields.io/badge/TypeScript-6-blue)
![License](https://img.shields.io/badge/license-MIT-blue)

</div>

---

📖 README:
**[简体中文](README.md)** | **[繁體中文](docs/README.zh-TW.md)** | **[English](README.en.md)** | **[日本語](docs/README.ja.md)** | **[한국어](docs/README.ko.md)**

⚡ Static Site Generation: Ultra-fast loading speed and SEO optimization based on Astro

🎨 Modern Design: A clean silver-blue interface with starlight accents and customizable theme colors

📱 Mobile-Friendly: Perfect responsive experience with mobile-specific optimizations

🔧 Highly Configurable: Most features can be customized through configuration files

The site is built around "silver blue, cat ears, and starlight": a silver-blue palette, a cat-eared girl mascot, and soft glowing highlights create a calm, clear look with a touch of liveliness in the night. The home page supports banner, fullscreen wallpaper, transparent overlay, and solid color modes, switchable at any time from the settings panel.


>[!TIP]
>
>Maoyulin is a modern personal blog site built with Astro and based on the Fuwari template, designed for tech enthusiasts and content creators. It integrates a modern web tech stack and offers rich feature modules and a highly customizable interface, so you can easily build a professional, good-looking personal blog that loads fast.
>
>The site keeps Fuwari's original layout approach, which can be freely switched in the configuration file according to your preferences.
>
>The UI supports i18n, but except for Simplified Chinese, other languages are AI-translated. If you find any errors, feel free to submit a Pull Request to help improve them.

## ✨ Features

### Core Features

- [x] **Astro + Tailwind CSS** - Ultra-fast static site generation based on a modern tech stack
- [x] **Smooth Animations** - Swup page transition animations for a silky browsing experience
- [x] **Responsive Design** - Perfect adaptation for desktop, tablet and mobile devices
- [x] **Multi-language Support** - i18n UI supports Simplified Chinese, Traditional Chinese, English, Japanese, Russian, Korean
- [x] **Full-text Search** - Client-side search based on Pagefind, supports article content indexing

### Personalization
- [x] **Dynamic Sidebar** - Supports single sidebar and dual sidebar configuration
- [x] **Article Layout** - Supports list (single column) and grid (multi-column/masonry) layouts
- [x] **Font Management** - Custom font support with a rich font selector
- [x] **Footer Configuration** - HTML content injection, fully customizable
- [x] **Light/Dark Mode** - Supports light, dark, and system-follow modes
- [x] **Navbar Customization** - Logo, title, and links fully customizable
- [x] **Wallpaper Mode Switching** - Banner wallpaper, fullscreen wallpaper, fullscreen transparent wallpaper, solid background
- [x] **Theme Color Customization** - 360° hue adjustment

If you have useful features and optimizations, feel free to submit a Pull Request.

## 🚀 Quick Start

### Requirements

- Node.js ≥ 22
- pnpm ≥ 11

### Local Development

1. **Clone the repository:**
   ```bash
   git clone <your-repository-url>
   cd maoyulin
   ```

2. **Install dependencies:**
   ```bash
   # Install pnpm if not installed
   npm install -g pnpm

   # Install project dependencies
   pnpm install
   ```

3. **Configure blog:**
   - Edit configuration files in the `src/config/` directory to customize blog settings

4. **Start development server:**
   ```bash
   pnpm dev
   ```
   The blog will be available at `http://localhost:4321`

### Platform Hosting Deployment

- **Refer to the [official guide](https://docs.astro.build/en/guides/deploy/) to deploy your blog to Vercel, Netlify, Cloudflare Pages, EdgeOne Pages, etc.**
- **Vercel**, **Netlify** and other major platforms auto-deploy, automatically selecting the appropriate adapter based on the environment.

   Framework Preset: `Astro`

   Root Directory: `./`

   Output Directory: `dist`

   Build Command: `pnpm run build`

   Install Command: `pnpm install`

## 📖 Configuration

> 📚 **Configuration docs**: see [`src/config/README.md`](src/config/README.md) for the role of each configuration file

### Setting Website Language

To set the default language for your blog, edit the `src/config/siteConfig.ts` file:

```typescript
// Define site language
const SITE_LANG = "zh_CN";
```

**Supported language codes:**
- `zh_CN` - Simplified Chinese
- `zh_TW` - Traditional Chinese
- `en` - English
- `ja` - Japanese
- `ru` - Russian
- `ko` - Korean

### Configuration File Structure

```
src/
├── config/
│   ├── index.ts                  # Configuration index file
│   ├── siteConfig.ts             # Site basic configuration
│   ├── analyticsConfig.ts        # Analytics configuration
│   ├── announcementConfig.ts     # Announcement configuration
│   ├── backgroundWallpaper.ts    # Background wallpaper configuration
│   ├── commentConfig.ts          # Comment system configuration
│   ├── coverImageConfig.ts       # Cover image configuration
│   ├── displaySettingsConfig.ts  # Settings panel configuration
│   ├── dynamicConfig.ts          # Moments page configuration
│   ├── effectsConfig.ts          # Animation effects config (sakura, etc.)
│   ├── expressiveCodeConfig.ts   # Code highlighting configuration
│   ├── fontConfig.ts             # Font configuration
│   ├── FooterConfig.html         # Footer configuration
│   ├── friendsConfig.ts          # Friend links configuration
│   ├── galleryConfig.ts          # Gallery configuration
│   ├── licenseConfig.ts          # License configuration
│   ├── musicConfig.ts            # Music player configuration
│   ├── navBarConfig.ts           # Navbar configuration
│   ├── pioConfig.ts              # Mascot configuration
│   ├── mermaidConfig.ts          # Mermaid diagram configuration
│   ├── plantumlConfig.ts         # PlantUML diagram configuration
│   ├── profileConfig.ts          # User profile configuration
│   ├── sidebarConfig.ts          # Sidebar layout configuration
```

## ⚙️ Article Frontmatter

```yaml
---
title: My First Blog Post
published: 2023-09-09
description: This is the first post of my new Astro blog.
image: ./cover.jpg  # Or use "api" to enable random cover images
tags: [Foo, Bar]
category: Front-end
draft: false
lang: zh-CN      # Only set when article language differs from site language in `siteConfig.ts`
pinned: false    # Pin article
comment: true    # Enable comments
---
```

## Moments

Moment files are stored in `src/content/dynamic/`, with one Markdown file per moment. Create one with:

```bash
pnpm new-d The weather is lovely today
```

`pnpm new-dynamic <content>` is the equivalent full command.

```yaml
---
published: 2026-07-15 16:15:29
pinned: true  # Pin article
location: China # Location
---

Moment content supports Markdown.
```

Also supports [Memos](https://www.usememos.com/) as a data source. Configure the `memos` option in `src/config/dynamicConfig.ts` to fetch Memos moments in real-time, with pinned sync and image attachment support.

## 🧩 Markdown Extensions

In addition to the default [GitHub Flavored Markdown](https://github.github.com/gfm/) support in Astro, there are some additional Markdown features:

- Admonitions - Supports GitHub, Obsidian, VitePress, and Docusaurus theme configurations
- GitHub Repository Cards
- Enhanced Code Blocks based on Expressive Code ([Documentation](https://expressive-code.com/))

## 🧞 Commands

All commands need to be executed in the project root directory:

| Command                    | Action                                              |
|:---------------------------|:----------------------------------------------------|
| `pnpm install`             | Install dependencies                                |
| `pnpm dev`                 | Start local development server at `localhost:4321`  |
| `pnpm build`               | Build site to `./dist/`                             |
| `pnpm preview`             | Preview built site locally                          |
| `pnpm check`               | Check for errors in code                            |
| `pnpm format`              | Format your code using Biome                        |
| `pnpm new-post <filename>` | Create new article                                  |
| `pnpm new-d <content>`     | Create a new moment                                 |
| `pnpm new-dynamic <content>` | Create a new moment (full command)                |
| `pnpm astro ...`           | Execute `astro add`, `astro check` and other commands |
| `pnpm astro --help`        | Display Astro CLI help                              |

## 🙏 Acknowledgments

Special thanks to [saicaca](https://github.com/saicaca) for developing the [fuwari](https://github.com/saicaca/fuwari) template, on which this site is based.

### Tech Stack

- [Astro](https://astro.build)
- [Tailwind CSS](https://tailwindcss.com)
- [Iconify](https://iconify.design)

### Inspiration Projects

- [fuwari](https://github.com/saicaca/fuwari)
- [hexo-theme-shoka](https://github.com/amehime/hexo-theme-shoka)
- [astro-koharu](https://github.com/cosZone/astro-koharu)
- [Mizuki](https://github.com/matsuzaka-yuki/Mizuki)

### Other References
- Blogger `霞葉` [Bangumi Collection](https://kasuha.com/posts/fuwari-enhance-ep2/) page component

## 🎀 Character & Asset Credits

- Character origin: **Nekome Shizuku (猫羽雫)**
- Character design / original concept: **Amashiro Natsuki (甘城なつき)**
- References: [Moegirlpedia · 猫羽雫](https://zh.moegirl.org.cn/猫羽雫), [Bilibili gallery search](https://search.bilibili.com/all?keyword=猫羽雫), [Pixiv tag · 猫羽雫](https://www.pixiv.net/tags/猫羽雫), [Pixiv tag · 甘城なつき](https://www.pixiv.net/tags/甘城なつき)
- Full asset sources and per-image credits: [MAOYULIN-CREDITS.md](./MAOYULIN-CREDITS.md)
- This is a **non-commercial fan site** with no affiliation to the rights holders. All character designs, illustrations, and assets belong to their original authors; please contact us for removal if anything infringes.

## 📝 License

This project is licensed under the [MIT license](https://mit-license.org/). See the [LICENSE](./LICENSE) file for details.

Originally forked from [saicaca/fuwari](https://github.com/saicaca/fuwari). Thanks to the original author for their contributions.

**Copyright Notice:**
- Copyright (c) 2024 [saicaca](https://github.com/saicaca) - [fuwari](https://github.com/saicaca/fuwari)

Under the MIT license, you are free to use, modify, and distribute the code, but you must retain the above copyright notice and all notices in [LICENSE](./LICENSE).

## 🍀 Contributors

Thanks to the following contributors for their contributions to the original project [fuwari](https://github.com/saicaca/fuwari), which laid the foundation for this project.

><a href="https://github.com/saicaca/fuwari/graphs/contributors">
>  <img src="https://contrib.rocks/image?repo=saicaca/fuwari" />
></a>
