<img src="./docs/images/maoyulin.png" width="350" height="500" alt="猫羽霖" align=right />

<div align="center">

# 猫羽霖
> 一只住在蓝色星光里的猫耳少女 · Astro 个人博客
>
> ![Node.js >= 22](https://img.shields.io/badge/node.js-%3E%3D22-brightgreen)
![pnpm >= 11](https://img.shields.io/badge/pnpm-%3E%3D11-blue)
![Astro](https://img.shields.io/badge/Astro-7-orange)
![TypeScript](https://img.shields.io/badge/TypeScript-6-blue)
![License](https://img.shields.io/badge/license-MIT-blue)

</div>

---

📖 README：
**[简体中文](README.md)** | **[繁體中文](docs/README.zh-TW.md)** | **[English](README.en.md)** | **[日本語](docs/README.ja.md)** | **[한국어](docs/README.ko.md)**

⚡ 静态站点生成: 基于 Astro 的超快加载速度和 SEO 优化

🎨 现代化设计: 银蓝与星光交织的清爽界面，支持自定义主题色

📱 移动友好: 完美的响应式体验，移动端专项优化

🔧 高度可配置: 大部分功能模块均可通过配置文件自定义

站点围绕「银蓝、猫耳、星光」展开：以银蓝色作为主色，配合猫耳少女的形象与柔和的光晕点缀，整体观感安静、清透，又保留了一点夜色里的灵动。首页支持横幅、全屏壁纸、透明覆盖与纯色四种展示模式，可在设置面板中随时切换。


>[!TIP]
>
>猫羽霖是一个基于 Astro 框架与 Fuwari 模板二次开发的现代化个人博客站点，面向技术爱好者与内容创作者。它整合了现代 Web 技术栈，提供丰富的功能模块与高度可定制的界面，方便你搭建专业、耐看且加载迅速的个人博客。
>
>站点保留了 Fuwari 原版的布局思路，可根据自己的喜好在配置文件中自由切换。
>
>UI 支持 i18n 多语言，但除简体中文外，其他语言均为 AI 翻译，如有错误，欢迎提交 Pull Request 修正。

## ✨ 功能特性

### 核心功能

- [x] **Astro + Tailwind CSS** - 基于现代技术栈的超快静态站点生成
- [x] **流畅动画** - Swup 页面过渡动画，提供丝滑的浏览体验
- [x] **响应式设计** - 完美适配桌面端、平板和移动设备
- [x] **多语言支持** - i18n 国际化，UI 支持简体中文、繁体中文、英文、日文、俄语、韩文
- [x] **全文搜索** - 基于 Pagefind 的客户端搜索，支持文章内容索引

### 个性化
- [x] **动态侧边栏** - 支持配置单侧边栏、双侧边栏
- [x] **文章布局** - 支持配置（单列）列表、网格（多列/瀑布流）布局
- [x] **字体管理** - 支持自定义字体，丰富的字体选择器
- [x] **页脚配置** - HTML 内容注入，完全自定义
- [x] **亮暗色模式** - 支持亮色/暗色/跟随系统三种模式
- [x] **导航栏自定义** - Logo、标题、链接全面自定义
- [x] **壁纸模式切换** - 横幅壁纸、全屏壁纸、全屏透明壁纸、纯色背景
- [x] **主题色自定义** - 360° 色相调节

如果你有好用的功能和优化，欢迎提交 Pull Request。

## 🚀 快速开始

### 环境要求

- Node.js ≥ 22
- pnpm ≥ 11

### 本地开发部署

1. **克隆仓库：**
   ```bash
   git clone <你的仓库地址>
   cd maoyulin
   ```

2. **安装依赖：**
   ```bash
   # 如果没有安装 pnpm，先安装
   npm install -g pnpm

   # 安装项目依赖
   pnpm install
   ```

3. **配置博客：**
   - 编辑 `src/config/` 目录下的配置文件自定义博客设置

4. **启动开发服务器：**
   ```bash
   pnpm dev
   ```
   博客将在 `http://localhost:4321` 可用

### 平台托管部署

- **参考[官方指南](https://docs.astro.build/zh-cn/guides/deploy/)将博客部署至 Vercel、Netlify、Cloudflare Pages、EdgeOne Pages 等。**
- **Vercel**、**Netlify** 等主流平台自动部署，会根据环境自动选择适配器。

   框架预设： `Astro`

   根目录： `./`

   输出目录： `dist`

   构建命令： `pnpm run build`

   安装命令： `pnpm install`

## 📖 配置说明

> 📚 **配置文档**：查看 [`src/config/README.md`](src/config/README.md) 了解各配置文件的作用

### 设置网站语言

要设置博客的默认语言，请编辑 `src/config/siteConfig.ts` 文件：

```typescript
// 定义站点语言
const SITE_LANG = "zh_CN";
```

**支持的语言代码：**
- `zh_CN` - 简体中文
- `zh_TW` - 繁体中文
- `en` - 英文
- `ja` - 日文
- `ru` - 俄文
- `ko` - 韩文

### 配置文件结构

```
src/
├── config/
│   ├── index.ts                  # 配置索引文件
│   ├── siteConfig.ts             # 站点基础配置
│   ├── analyticsConfig.ts        # 统计分析配置
│   ├── announcementConfig.ts     # 公告配置
│   ├── backgroundWallpaper.ts    # 背景壁纸配置
│   ├── commentConfig.ts          # 评论系统配置
│   ├── coverImageConfig.ts       # 封面图配置
│   ├── displaySettingsConfig.ts  # 设置面板配置
│   ├── dynamicConfig.ts          # 动态页面配置
│   ├── effectsConfig.ts          # 动画特效配置（樱花等）
│   ├── expressiveCodeConfig.ts   # 代码高亮配置
│   ├── fontConfig.ts             # 字体配置
│   ├── FooterConfig.html         # 页脚配置
│   ├── friendsConfig.ts          # 友链配置
│   ├── galleryConfig.ts          # 相册配置
│   ├── licenseConfig.ts          # 许可证配置
│   ├── musicConfig.ts            # 音乐播放器配置
│   ├── navBarConfig.ts           # 导航栏配置
│   ├── pioConfig.ts              # 看板娘配置
│   ├── mermaidConfig.ts          # Mermaid 图表配置
│   ├── plantumlConfig.ts         # PlantUML 图表配置
│   ├── profileConfig.ts          # 用户资料配置
│   ├── sidebarConfig.ts          # 侧边栏布局配置
```

## ⚙️ 文章 Frontmatter

```yaml
---
title: My First Blog Post
published: 2023-09-09
description: This is the first post of my new Astro blog.
image: ./cover.jpg  # 或使用 "api" 来启用随机封面图
tags: [Foo, Bar]
category: Front-end
draft: false
lang: zh-CN      # 仅当文章语言与 `siteConfig.ts` 中的网站语言不同时需要设置
pinned: false    # 置顶
comment: true    # 是否允许评论
---
```

## 动态

动态文件保存在 `src/content/dynamic/` 中，一个 Markdown 文件对应一条动态。可以使用快捷命令创建：

```bash
pnpm new-d 今天心情不错，出去吃了一顿火锅
```

`pnpm new-dynamic <content>` 也可以使用，和 `new-d` 完全等价。

```yaml
---
published: 2026-07-15 16:15:29
pinned: true  # 置顶
location: China # 位置
---

动态内容可以使用 Markdown 语法。
```

也支持对接 [Memos](https://www.usememos.com/) 作为数据源，在 `src/config/dynamicConfig.ts` 中配置 `memos` 选项即可实时获取 Memos 动态，支持置顶同步和图片附件展示。

## 🧩 Markdown 扩展语法

除了 Astro 默认支持的 [GitHub Flavored Markdown](https://github.github.com/gfm/) 之外，还包含了一些额外的 Markdown 功能：

- 提醒块（Admonitions） - 支持 GitHub、Obsidian、VitePress、Docusaurus 四种风格主题配置
- GitHub 仓库卡片
- 基于 Expressive Code 的增强代码块（[文档](https://expressive-code.com/)）

## 🧞 指令

下列指令均需要在项目根目录执行：

| Command                    | Action                                 |
| :------------------------- | :------------------------------------- |
| `pnpm install`             | 安装依赖                               |
| `pnpm dev`                 | 在 `localhost:4321` 启动本地开发服务器 |
| `pnpm build`               | 构建网站至 `./dist/`                   |
| `pnpm preview`             | 本地预览已构建的网站                   |
| `pnpm check`               | 检查代码中的错误                       |
| `pnpm format`              | 使用 Biome 格式化您的代码              |
| `pnpm new-post <filename>` | 创建新文章                             |
| `pnpm new-d <content>`     | 创建一条动态                           |
| `pnpm new-dynamic <content>` | 创建一条动态（完整命令）              |
| `pnpm astro ...`           | 执行 `astro add`, `astro check` 等指令 |
| `pnpm astro --help`        | 显示 Astro CLI 帮助                    |

## 🙏 致谢

非常感谢 [saicaca](https://github.com/saicaca) 开发的 [fuwari](https://github.com/saicaca/fuwari) 模板，本站点在其基础上二次开发。

### 技术栈

- [Astro](https://astro.build)
- [Tailwind CSS](https://tailwindcss.com)
- [Iconify](https://iconify.design)

### 灵感项目

- [fuwari](https://github.com/saicaca/fuwari)
- [hexo-theme-shoka](https://github.com/amehime/hexo-theme-shoka)
- [astro-koharu](https://github.com/cosZone/astro-koharu)
- [Mizuki](https://github.com/matsuzaka-yuki/Mizuki)

### 其他参考
- 博主`霞葉`的 [Bangumi 收藏](https://kasuha.com/posts/fuwari-enhance-ep2/) 页面组件

## 🎀 形象与素材署名

- 形象原型：**猫羽雫**（ねこあめ しずく）
- 角色设计 / 原案：**甘城なつき**
- 参考资料：[萌娘百科 · 猫羽雫](https://zh.moegirl.org.cn/猫羽雫)、[B 站图集检索](https://search.bilibili.com/all?keyword=猫羽雫)、[Pixiv 标签 · 猫羽雫](https://www.pixiv.net/tags/猫羽雫)、[Pixiv 标签 · 甘城なつき](https://www.pixiv.net/tags/甘城なつき)
- 完整素材出处与逐图版权清单：[MAOYULIN-CREDITS.md](./MAOYULIN-CREDITS.md)
- 本站为**非商业同人站点**，与角色版权方无隶属关系；相关角色形象、插画与素材版权归原作者所有，如有侵权请联系删除。

## 📝 许可协议

本项目遵循 [MIT license](https://mit-license.org/) 开源协议，详细查看 [LICENSE](./LICENSE) 文件。

最初 Fork 自 [saicaca/fuwari](https://github.com/saicaca/fuwari)，感谢原作者的贡献。

**版权声明：**
- Copyright (c) 2024 [saicaca](https://github.com/saicaca) - [fuwari](https://github.com/saicaca/fuwari)

根据 MIT 开源协议，你可以自由使用、修改、分发代码，但需保留上述版权声明及 [LICENSE](./LICENSE) 中的全部声明。

## 🍀 贡献者

感谢以下贡献者对原项目 [fuwari](https://github.com/saicaca/fuwari) 做出的贡献，为本项目奠定了基础。

><a href="https://github.com/saicaca/fuwari/graphs/contributors">
>  <img src="https://contrib.rocks/image?repo=saicaca/fuwari" />
></a>
