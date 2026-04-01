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
├── public/
│   ├── promnyai-logo.png   # ロゴ画像
│   ├── favicon.ico         # ファビコン
│   └── docs/               # マニュアル用画像（未使用）
├── src/
│   ├── main.js             # アニメーション・FAQ・メニュー等のJS
│   └── style.css           # Tailwind + カスタムCSS
├── vite.config.js          # Vite設定
├── docs/                   # ドキュメント（ADR等）
└── .claude/                # Claude Code 設定
    └── skills/             # スキル定義
```

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
- main ブランチへの直接コミット
- .env ファイルのコミット
