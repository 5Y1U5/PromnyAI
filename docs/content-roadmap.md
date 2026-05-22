# PromnyAI 記事制作ロードマップ

最終更新: 2026-05-21
ステータス: Phase 1・2 完了 / Phase 3 完了（Day 1〜8 完了）

このファイルは、新3機能（ハブ／コンテンツ生成／AI学習データ管理）リリースに合わせたマニュアル・ブログ記事の制作計画と進捗を記録したもの。新しいセッションで再開する際の参照ドキュメントとして使う。

## 戦略の前提

3機能は「**学習データ → ハブ → コンテンツ生成**」の循環ストーリーで説明できる。マニュアルとブログの役割分担は以下のとおり。

| | マニュアル `/docs/` | ブログ `/blog/` |
|---|---|---|
| 目的 | 「いま操作したい」読者の支援 | 「悩み・関心」段階の読者の獲得 |
| 文体 | 手順 + 補足が中心 | 物語・事例・考え方が中心 |
| 文字数目安 | 1,200〜2,000字 | 2,000〜3,500字 |

## 公開済み記事

### マニュアル

| ID | タイトル | パス | 文字数 |
|---|---|---|---|
| A-1 | ハブの使い方 | `/docs/hub.html` | 約 3,600 |
| A-2 | AI学習データの使い方 | `/docs/ai-knowledge.html` | 約 4,200 |
| A-3 | コンテンツ生成の使い方 | `/docs/content-generator.html` | 約 4,200 |
| E-1 | 3機能をつなぐPromnyAI運用法 | `/docs/workflow.html` | 約 3,500 |
| B-2 | 学習データの上手な分け方 | `/docs/ai-knowledge-categories.html` | 約 3,800 |
| C-2 | ブログ記事の下書きを作る | `/docs/blog-content-generation.html` | 約 2,400 |
| C-1 | SNS投稿の作り方 — Instagram／X／Facebookの違いと設定 | `/docs/sns-content-generation.html` | 約 3,300 |
| C-3 | LINE配信文の作り方 — 告知・リマインド・季節挨拶 | `/docs/line-content-generation.html` | 約 3,400 |
| D-1 | PDF・Word を AI 学習データに登録する前に | `/docs/file-upload-tips.html` | 約 2,400 |
| D-2 | ハブを社内ナレッジ化する | `/docs/hub-internal-knowledge.html` | 約 3,700 |
| B-1 | ハブをチームで使う | `/docs/hub-team.html` | 約 3,500 |
| B-3 | 生成履歴の活用 | `/docs/generation-history.html` | 約 3,000 |
| B-4 | テンプレートの活用 | `/docs/generation-templates.html` | 約 3,600 |

### ブログ

| ID | タイトル | パス | 文字数 |
|---|---|---|---|
| Blog A-1 | なぜAI文章は「他人事」に聞こえるのか — 学習データが9割という話 | `/blog/why-ai-content-feels-generic.html` | 約 5,100 |
| Blog A-2 | SNS運用が続かない店舗オーナーへ — 作成時間を1/3にするAIワークフロー | `/blog/sns-workflow-for-shops.html` | 約 4,500 |
| Blog C-1 | 美容サロン編：店販商品の紹介投稿をAIで安定運用する | `/blog/beauty-salon-product-sns.html` | 約 4,600 |
| Blog B-1 | AI生成記事を「自社の声」に近づける3ステップ | `/blog/ai-content-3-steps-to-authenticity.html` | 約 3,800 |
| Blog B-3 | 同じ告知を3回書き直していないか — ブログ・SNS・LINEを1テーマから作るレシピ | `/blog/blog-sns-line-from-one-theme.html` | 約 3,900 |
| Blog C-2 | 毎朝「今日の一品」の投稿に1時間かけていないか — 飲食店の日替わり告知をテンプレ化する | `/blog/restaurant-daily-menu-ai.html` | 約 4,200 |
| Blog B-2 | AIに教えるべき「自社情報」5カテゴリ整理術 — 棚を分ければ取り出せる | `/blog/company-info-5-categories.html` | 約 4,000 |
| Blog C-3 | 士業・コンサル編：顧客向けニュースレターのAI下書き | `/blog/professionals-newsletter-ai.html` | 約 4,300 |
| Blog C-4 | 個人事業主編：ひとり広報のAI活用ロードマップ | `/blog/solo-entrepreneur-ai-roadmap.html` | 約 4,100 |
| Blog D-1 | 汎用AIと「自社専用AI」の違い | `/blog/general-vs-company-ai.html` | 約 3,800 |
| Blog D-2 | AIに任せていい仕事／任せてはいけない仕事 2026年版 | `/blog/what-to-delegate-to-ai-2026.html` | 約 4,300 |

### 周辺整備

- `/docs/index.html` に「AIワークスペース機能」セクション追加
- `/blog/index.html` 新規作成（記事一覧）
- 全ページのフッターに「ブログ」ボタン追加（`/download.html` 除く）
- `vite.config.js` の `rollupOptions.input` に新ページを登録

### 定期集客記事

| 公開日 | タイトル | パス | テーマ |
|---|---|---|---|
| 2026-05-22 | AI担当を孤立させない小さな会社の運用会議 — 週1回15分で回す3つの確認 | `/blog/ai-team-meeting-15min.html` | 経営ノウハウ / チーム運用 |

## Phase 2（完了済み）

Phase 2 の4本（E-1／B-2／Blog A-2／Blog C-1）は2026-05-12に公開。詳細は上記「公開済み記事」参照。

## Phase 3 制作計画（1日2本 × 8日）

残り 16 本（マニュアル 8 ＋ ブログ 8）を「マニュアル ＋ ブログ」のセットで1日2本ずつ8日に分割。2026-05-21 に Day 8 まで完了。詳細パスは上の「公開済み記事」テーブル参照。

### 完了済みサマリー

| Day | 公開日 | マニュアル | ブログ |
|---|---|---|---|
| 1 | 2026-05-13 | C-2 ブログ生成 | B-1 自社の声3ステップ |
| 2 | 2026-05-14 | C-1 SNS媒体別 | B-3 3媒体作り分け |
| 3 | 2026-05-14 | C-3 LINE | C-2 飲食店日替わり |
| 4 | 2026-05-15 | D-1 ファイル取り込み準備 | B-2 5カテゴリ整理術 |
| 5 | 2026-05-18 | D-2 社内ナレッジ | C-3 士業ニュースレター |
| 6 | 2026-05-19 | B-1 チーム利用 | C-4 個人事業主ロードマップ |
| 7 | 2026-05-20 | B-3 生成履歴 | D-1 汎用AIと自社専用AI |
| 8 | 2026-05-21 | B-4 テンプレート活用 | D-2 AIに任せる／任せない |

### Day 5：社内ナレッジ × 士業ペア（完了）

- [x] **マニュアル D-2** ハブを社内ナレッジ化する
  パス候補：`/docs/hub-internal-knowledge.html`
- [x] **ブログ C-3** 士業・コンサル編：顧客向けニュースレターのAI下書き
  パス候補：`/blog/professionals-newsletter-ai.html`

### Day 6：チーム × 個人事業主ペア

- [x] **マニュアル B-1** ハブをチームで使う
  パス候補：`/docs/hub-team.html`
- [x] **ブログ C-4** 個人事業主編：ひとり広報のAI活用ロードマップ
  パス候補：`/blog/solo-entrepreneur-ai-roadmap.html`

### Day 7：履歴 × 思想ペア（完了）

- [x] **マニュアル B-3** 生成履歴の活用（過去文章の再利用）
  パス候補：`/docs/generation-history.html`
- [x] **ブログ D-1** 汎用AIと「自社専用AI」の違い
  パス候補：`/blog/general-vs-company-ai.html`

### Day 8：テンプレ × 締めの思想ペア（完了）

- [x] **マニュアル B-4** テンプレートの活用
  パス候補：`/docs/generation-templates.html`
- [x] **ブログ D-2** AIに任せていい仕事／任せてはいけない仕事 2026年版
  パス候補：`/blog/what-to-delegate-to-ai-2026.html`

### Phase 3 進行ルール

1. 1日に着手するのは原則1セット（マニュアル＋ブログ）。
2. 完成したらこのファイルのチェックボックスを `[x]` に変更し、上の「公開済み記事」テーブルにも追記。
3. 各記事公開時に `vite.config.js` の `rollupOptions.input` に登録（登録忘れ防止）。
4. ブログは末尾CTAを案件に応じて切り替える（美容サロンは GlamAI、それ以外は PromnyAI など）。
5. `docs/index.html`・`blog/index.html` の一覧カードも公開のたびに更新。
6. **ブログ記事は必ず `docs/blog-writing-style.md` を通してから公開する**（冒頭3行ルール／小見出しは問い形／具体名・数字・セリフ3か所／禁則ワード／人の手で1文追加）。マニュアルには適用しない。

### Phase 3 完了時の状態

- 公開マニュアル：13本（既存の Phase 1・2 含む）
- 公開ブログ：11本（既存の Phase 1・2 含む）
- 3機能ストーリー × 用途別マニュアル × 業種別ブログ × 思想ブログがそろい、LP の SEO と教育動線が完成する想定。

## ファイル命名・配置のルール

- マニュアルは `/docs/<kebab-case>.html`
- ブログは `/blog/<kebab-case>.html`（SEOキーワードを含む英字スラッグ）
- 新規HTMLは必ず `vite.config.js` の `rollupOptions.input` に登録
- 既存マニュアル（`getting-started.html` 等）と同じ DOM 構造に揃える
  - `<header>` `<main class="pt-28 pb-20 sm:pt-36 sm:pb-28">` `<footer>` のレイアウト
  - `section-label` クラスで上部にカテゴリラベル
  - フッター末尾の Chatta ウィジェットを残す
- コピーライトに年号を入れない（`© PromnyAI`）

## SEO の前提

- `<meta description>`、Open Graph、canonical URL を必ず設定
- マニュアルは操作系キーワード（「PromnyAI ◯◯ 使い方」）を狙う
- ブログは課題系キーワード（「店舗 SNS 続かない」「AI 自社らしい文章」）を狙う

## 内部リンク戦略

- 各マニュアル末尾の「次に読む」で 3 機能を循環させる
- ブログ末尾に該当マニュアル ＋ お申し込み CTA を配置
- 業種別ブログ ⇄ 課題喚起ブログ ⇄ 機能マニュアルを 3 角形でクロスリンク

## 再開の手順

1. このファイル冒頭の「公開済み」「Phase 2 推奨」リストを確認
2. 次に書く記事を 1〜2 本決める（基本は Phase 2 から E-1 → B-2 → ブログ A-2 → ブログ C-1 の順）
3. 提案書本体は `tasks/article-proposal.md`（gitignore 対象）に詳細あり
4. 探索時の生データは `report/` `screenshots/`（gitignore 対象）に保存済み
5. 執筆方針は既存マニュアル `docs/hub.html` `docs/ai-knowledge.html` `docs/content-generator.html` を参考にトーンを揃える

## 関連リソース

- 機能探索レポート：`report/00-summary.md` 〜 `report/07-open-questions.md`
- バグ報告書（開発パートナー共有用）：`report/bugs.html` / `report/bugs.pdf`
- 提案書詳細：`tasks/article-proposal.md`
