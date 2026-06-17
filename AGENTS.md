# PromnyAI

## 概要
PromnyAI LP — 複数LLM＋業界特化AIチャットボットを1つのプラットフォームで提供するAIサービスのランディングページ。

## 技術スタック
- フレームワーク: Vite + Vanilla JS
- CSS: Tailwind CSS v4（@tailwindcss/vite）
- ホスティング: Cloudflare Pages（promnyai.com / promnyai.pages.dev）
- デプロイ: GitHub Actions → wrangler pages deploy
- リポジトリ: github.com/5Y1U5/PromnyAI

## ディレクトリ構成
```
PromnyAI/
├── index.html              # トップページ（LP）
├── contact.html            # お問い合わせ
├── download.html           # サービス資料ダウンロード
├── privacy.html / terms.html / security.html  # 法務系ページ
├── docs/                   # マニュアル（公開HTML）+ 内部ドキュメント
│   ├── index.html          # マニュアル一覧
│   ├── *.html              # 各機能マニュアル（hub / ai-knowledge / content-generator 等）
│   ├── architecture.md     # 内部ドキュメント（ADR等）
│   ├── content-roadmap.md  # 記事制作ロードマップ（次のセッションで参照）
│   ├── blog-writing-style.md # ブログ執筆スタイルガイド（/blog/ のみ適用）
│   ├── decisions/          # ADR
│   └── runbooks/           # 運用手順
├── blog/                   # ブログ記事（公開HTML）
│   ├── index.html          # ブログ一覧
│   └── *.html              # 各記事
├── public/
│   ├── promnyai-logo.png
│   ├── favicon.ico
│   └── promkun.png         # チャットボットアバター
├── src/
│   ├── main.js             # アニメーション・FAQ・メニュー等のJS
│   └── style.css           # Tailwind + カスタムCSS
├── vite.config.js          # Vite設定（HTMLは rollupOptions.input に登録必須）
└── .claude/skills/        # Claude Code / Codex 共通設定
```

## ページ追加時の注意

新しいHTMLページを追加する際は **必ず `vite.config.js` の `rollupOptions.input` に登録すること**。登録しないと `dist/` に出力されず、Cloudflare Pages にデプロイされない。

## ブログ執筆ルール

`/blog/` 配下の新規記事および既存記事の改修時は **必ず `docs/blog-writing-style.md` を通すこと**。
冒頭3行ルール、小見出しは問い形、具体名・数字・セリフ最低3か所、AI禁則ワード集、人の手で「現場」の1文追加、まとめは5点以内、などの共通ルール。
マニュアル `/docs/` には適用しない（手順書のため淡々とした書き方を維持）。

## 本文タイポグラフィ

ブログ・マニュアルの本文 `<p>` `<ul>` `<ol>` は以下で統一:
- font-size: `text-base` (16px)
- line-height: `leading-[1.8]` (Yahoo!ニュース基準)
- color: `text-gray-600`
- font-family: `Noto Sans JP`（Tailwind デフォルト経由）

UI要素（ボタン・ナビ・カード説明・CTA box・索引メタ）は `text-sm` で意図的に小さくしている。
本文サイズを変えるときは `blog/*.html` と `docs/*.html` の両方を一括で揃えること（PR #15 参照）。

## 開発コマンド
```bash
# 開発サーバー
npm run dev

# ビルド
npm run build

# プレビュー
npm run preview
```

## カラーパレット
- メインカラー: `#097ADB`
- パレット: emerald-50〜900 を `#097ADB` ベースでカスタム定義
- 背景: 白ベース + パステルブルー

## 主要リンク先
| 用途 | URL |
|---|---|
| 本番LP | https://promnyai.com/ |
| ログイン | https://promnyai.jp/ |
| 申し込み | https://promnyai.jp/apply |
| 運営会社 | https://i-styleinc.com/ |
| X公式 | https://x.com/promnyai |

## 注意事項
- コピーライトに年号は入れない（`© PromnyAI`）
- `npm ci` 実行時は `--legacy-peer-deps` が必要（.npmrc で設定済み）
- GlamAIサロン版（salon.glam-ai.net）をベースにしたデザイン

## 禁止事項
- main ブランチへの直接コミット（原則）。ただし、YukiがHermesに対して明示的に「公開して」「公開まで」「今後も止まらないよう同等権限で」等の本番公開許可を出したブログ/定期コンテンツ更新は、他ブログ運用と同様に `npm run build` と本番確認を実施したうえで main へ直接 push してよい。
- .env ファイルのコミット

## Hermesブログ公開権限
- Hermes Agent は、Yukiの明示承認がある PromnyAI ブログ記事について、ブランチ/PRで停止せず、build成功後に main へ push して Cloudflare Pages 本番反映まで進めてよい。
- 公開後は必ず記事URLと `/blog/` 一覧を HTTP 200 で確認し、タイトルまたは主要キーワードの反映を検証する。
- 秘密情報・`.env`・無関係な生成物はコミットしない。
