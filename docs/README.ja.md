<img src="./images/maoyulin.png" width="350" height="500" alt="猫羽霖" align=right />

<div align="center">

# 猫羽霖
> 青い星光に住む猫耳の少女 · Astro 個人ブログ
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

⚡ 静的サイト生成：Astro ベースの超高速読み込みと SEO 最適化

🎨 モダンデザイン：シルバーブルーと星光が織りなす清爽なインターフェース、テーマカラーもカスタマイズ可能

📱 モバイルフレンドリー：完璧なレスポンシブ体験、モバイル専用最適化

🔧 高度にカスタマイズ可能：ほとんどの機能モジュールは設定ファイルでカスタマイズ可能

サイトは「シルバーブルー・猫耳・星光」をテーマにしています。シルバーブルーを基調色とし、猫耳少女のビジュアルと柔らかな光の演出を合わせることで、静かで透明感がありながら、夜らしい瑞々しさも残した雰囲気に仕上げています。ホームはバナー、全画面壁紙、透明オーバーレイ、単色の 4 つの表示モードに対応し、設定パネルからいつでも切り替えられます。

>[!TIP]
>
>猫羽霖は Astro フレームワークと Fuwari テンプレートをベースに二次開発されたモダンな個人ブログサイトです。技術愛好家やコンテンツクリエイター向けに設計され、モダンな Web 技術スタックと豊富な機能モジュール、高いカスタマイズ性を備えたインターフェースにより、プロフェッショナルで見栄えのよい個人ブログを手軽に構築できます。
>
>Fuwari 本来のレイアウト方針も維持しており、設定ファイルで好みに応じて自由に切り替えられます。
>
>UI は i18n に対応していますが、簡体字中国語以外は AI 翻訳です。誤りがあれば Pull Request での修正を歓迎します。

## ✨ 機能

### コア機能

- [x] **Astro + Tailwind CSS** - モダンな技術スタックによる超高速静的サイト生成
- [x] **スムーズなアニメーション** - Swup ページトランジションで滑らかなブラウジング体験
- [x] **レスポンシブデザイン** - デスクトップ、タブレット、モバイルに完璧に対応
- [x] **多言語サポート** - i18n UI で簡体字中国語、繁体字中国語、英語、日本語、ロシア語、韓国語をサポート
- [x] **全文検索** - Pagefind ベースのクライアントサイド検索、記事本文のインデックスに対応

### パーソナライゼーション
- [x] **動的サイドバー** - シングル／デュアルサイドバー構成に対応
- [x] **記事レイアウト** - リスト（単列）、グリッド（多列／メイソンリー）レイアウトに対応
- [x] **フォント管理** - カスタムフォントと豊富なフォントセレクター
- [x] **フッター設定** - HTML コンテンツ注入による完全カスタマイズ
- [x] **ライト／ダークモード** - ライト、ダーク、システム追従の 3 モード
- [x] **ナビゲーションバーのカスタマイズ** - ロゴ、タイトル、リンクを自由に変更
- [x] **壁紙モード切り替え** - バナー壁紙、全画面壁紙、全画面透明壁紙、単色背景
- [x] **テーマカラーのカスタマイズ** - 360° 色相調整

便利な機能や最適化があれば、Pull Request を送ってください。

## 🚀 クイックスタート

### 環境要件

- Node.js ≥ 22
- pnpm ≥ 11

### ローカル開発

1. **リポジトリのクローン：**
   ```bash
   git clone <リポジトリの URL>
   cd maoyulin
   ```

2. **依存関係のインストール：**
   ```bash
   # pnpm がインストールされていない場合
   npm install -g pnpm

   # プロジェクトの依存関係をインストール
   pnpm install
   ```

3. **ブログの設定：**
   - `src/config/` ディレクトリ内の設定ファイルを編集してカスタマイズ

4. **開発サーバーの起動：**
   ```bash
   pnpm dev
   ```
   ブログは `http://localhost:4321` で利用可能になります

### プラットフォームホスティングデプロイ

- **[公式ガイド](https://docs.astro.build/ja/guides/deploy/)を参照して、Vercel、Netlify、Cloudflare Pages、EdgeOne Pages などにデプロイしてください。**
- **Vercel**、**Netlify** などの主要プラットフォームは自動デプロイに対応し、環境に応じて適切なアダプターが自動的に選択されます。

   フレームワークプリセット： `Astro`

   ルートディレクトリ： `./`

   出力ディレクトリ： `dist`

   ビルドコマンド： `pnpm run build`

   インストールコマンド： `pnpm install`

## 📖 設定説明

> 📚 **設定ドキュメント**：[`src/config/README.md`](../src/config/README.md) で各設定ファイルの役割を確認できます

### ウェブサイトの言語設定

ブログのデフォルト言語を設定するには、`src/config/siteConfig.ts` を編集します：

```typescript
// サイト言語を定義
const SITE_LANG = "zh_CN";
```

**サポートされている言語コード：**
- `zh_CN` - 簡体字中国語
- `zh_TW` - 繁体字中国語
- `en` - 英語
- `ja` - 日本語
- `ru` - ロシア語
- `ko` - 韓国語

### 設定ファイル構造

```
src/
├── config/
│   ├── index.ts                  # 設定インデックスファイル
│   ├── siteConfig.ts             # サイト基本設定
│   ├── analyticsConfig.ts        # アナリティクス設定
│   ├── announcementConfig.ts     # お知らせ設定
│   ├── backgroundWallpaper.ts    # 背景壁紙設定
│   ├── commentConfig.ts          # コメントシステム設定
│   ├── coverImageConfig.ts       # カバー画像設定
│   ├── displaySettingsConfig.ts  # 設定パネル構成
│   ├── dynamicConfig.ts          # モーメントページ設定
│   ├── effectsConfig.ts          # アニメーションエフェクト設定（桜など）
│   ├── expressiveCodeConfig.ts   # コードハイライト設定
│   ├── fontConfig.ts             # フォント設定
│   ├── FooterConfig.html         # フッター設定
│   ├── friendsConfig.ts          # 友人リンク設定
│   ├── galleryConfig.ts          # ギャラリー設定
│   ├── licenseConfig.ts          # ライセンス設定
│   ├── musicConfig.ts            # 音楽プレーヤー設定
│   ├── navBarConfig.ts           # ナビゲーションバー設定
│   ├── pioConfig.ts              # マスコット設定
│   ├── mermaidConfig.ts          # Mermaid 図表設定
│   ├── plantumlConfig.ts         # PlantUML 図表設定
│   ├── profileConfig.ts          # プロフィール設定
│   ├── sidebarConfig.ts          # サイドバーレイアウト設定
```

## ⚙️ 記事の Frontmatter

```yaml
---
title: My First Blog Post
published: 2023-09-09
description: This is the first post of my new Astro blog.
image: ./cover.jpg  # または "api" でランダムカバー画像を有効化
tags: [Foo, Bar]
category: Front-end
draft: false
lang: zh-CN      # `siteConfig.ts` のサイト言語と異なる場合のみ設定
pinned: false    # 記事を固定
comment: true    # コメントを有効化
---
```

## モーメント

モーメントは `src/content/dynamic/` に保存され、1 つの Markdown ファイルが 1 件に対応します。次のコマンドで作成できます：

```bash
pnpm new-d 今日はとても良い天気です
```

`pnpm new-dynamic <content>` も同じ機能の完全なコマンドです。

```yaml
---
published: 2026-07-15 16:15:29
pinned: true  # 記事を固定
location: China # 場所
---

本文では Markdown を使用できます。
```

[Memos](https://www.usememos.com/) をデータソースとして接続することもできます。`src/config/dynamicConfig.ts` の `memos` オプションを設定すると、ピン留めの同期や画像添付の表示に対応したリアルタイム取得が可能です。

## 🧩 Markdown 拡張

Astro がデフォルトで対応している [GitHub Flavored Markdown](https://github.github.com/gfm/) に加えて、いくつかの追加機能があります：

- Admonitions（予告ブロック） - GitHub、Obsidian、VitePress、Docusaurus の 4 テーマ設定に対応
- GitHub リポジトリカード
- Expressive Code ベースの強化コードブロック（[ドキュメント](https://expressive-code.com/)）

## 🧞 コマンド

すべてのコマンドはプロジェクトルートで実行します：

| Command                    | Action                                          |
| :------------------------- | :---------------------------------------------- |
| `pnpm install`             | 依存関係をインストール                          |
| `pnpm dev`                 | `localhost:4321` でローカル開発サーバーを起動    |
| `pnpm build`               | `./dist/` にサイトをビルド                       |
| `pnpm preview`             | ビルドされたサイトをローカルでプレビュー        |
| `pnpm check`               | コード内のエラーをチェック                      |
| `pnpm format`              | Biome でコードをフォーマット                    |
| `pnpm new-post <filename>` | 新しい記事を作成                                |
| `pnpm new-d <content>`     | 新しいモーメントを作成                          |
| `pnpm new-dynamic <content>` | 新しいモーメントを作成（完全なコマンド）      |
| `pnpm astro ...`           | `astro add`、`astro check` などを実行           |
| `pnpm astro --help`        | Astro CLI ヘルプを表示                          |

## 🙏 謝辞

[fuwari](https://github.com/saicaca/fuwari) テンプレートを開発した [saicaca](https://github.com/saicaca) に深く感謝します。本サイトはこのテンプレートをベースに二次開発されています。

### 技術スタック

- [Astro](https://astro.build)
- [Tailwind CSS](https://tailwindcss.com)
- [Iconify](https://iconify.design)

### インスピレーションプロジェクト

- [fuwari](https://github.com/saicaca/fuwari)
- [hexo-theme-shoka](https://github.com/amehime/hexo-theme-shoka)
- [astro-koharu](https://github.com/cosZone/astro-koharu)
- [Mizuki](https://github.com/matsuzaka-yuki/Mizuki)

### その他の参考
- ブロガー`霞葉`の [Bangumi コレクション](https://kasuha.com/posts/fuwari-enhance-ep2/) ページコンポーネント

## 🎀 キャラクター・素材クレジット

- キャラクター原型：**猫羽雫**（ねこあめ しずく）
- キャラクターデザイン／原案：**甘城なつき**
- 参考：[萌娘百科 · 猫羽雫](https://zh.moegirl.org.cn/猫羽雫)、[B 站ギャラリー検索](https://search.bilibili.com/all?keyword=猫羽雫)、[Pixiv タグ · 猫羽雫](https://www.pixiv.net/tags/猫羽雫)、[Pixiv タグ · 甘城なつき](https://www.pixiv.net/tags/甘城なつき)
- 素材の出典と画像ごとのクレジット一覧：[MAOYULIN-CREDITS.md](../MAOYULIN-CREDITS.md)
- 本サイトは**非営利の二次創作サイト**であり、権利者とは関係ありません。キャラクター形象、イラスト、素材の著作権は原作者に帰属します。問題がある場合はご連絡ください。

## 📝 ライセンス

本プロジェクトは [MIT license](https://mit-license.org/) の下で公開されています。詳細は [LICENSE](../LICENSE) をご覧ください。

最初は [saicaca/fuwari](https://github.com/saicaca/fuwari) からフォークされました。元の作者の貢献に感謝します。

**著作権表示：**
- Copyright (c) 2024 [saicaca](https://github.com/saicaca) - [fuwari](https://github.com/saicaca/fuwari)

MIT ライセンスに基づき、コードの自由な使用、変更、配布が可能ですが、上記の著作権表示と [LICENSE](../LICENSE) 内のすべての表示を保持する必要があります。

## 🍀 貢献者

このプロジェクトの基盤を築いた元プロジェクト [fuwari](https://github.com/saicaca/fuwari) に貢献してくれた以下の方々に感謝します。

><a href="https://github.com/saicaca/fuwari/graphs/contributors">
>  <img src="https://contrib.rocks/image?repo=saicaca/fuwari" />
></a>
