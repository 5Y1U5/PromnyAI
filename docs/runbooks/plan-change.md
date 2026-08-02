# プラン変更手順（Stripe + PromnyAI 管理画面）

対象: 既存組織の契約プランを変更するとき（例: Standard → Professional）

## 前提

- Stripe アカウントは「株式会社i-Style」（acct_1KEsCRJFnEGuQY4K）。
  Eringo Crypto LLC 配下に PromnyAI の顧客はいない
- Stripe 顧客は社名ではなく担当者名で登録されていることがある。
  社名で検索して0件でも「いない」とは限らないので、メールドメインで検索する
- Stripe と PromnyAI は自動同期しない。両方を手で変更する

## 手順

1. Stripe 側
   - 対象サブスクを開き「サブスクリプションを更新」
   - 「商品を追加」で新プランを選択 → 旧商品は「…」→「商品を削除」
   - 比例配分 →「比例配分変更額の請求書」にチェック
     即時請求なら「更新直後」、次回請求にまとめるなら「更新後の次回請求書において」
   - メタデータを新プランの値に更新（下表）
   - 「サブスクリプションを更新」→ 確認ダイアログで適用日を選んで確定
     （このダイアログを閉じると変更は保存されない）

2. PromnyAI 側
   - 管理画面 → 組織管理 → 対象組織 → 契約プランを変更
   - 利用枠（トークン・画像・ユーザー上限）が新プランに置き換わることを確認
   - 旧枠は「無効・期間外の履歴」に落ちる。現在の利用枠が1行なら二重付与なし

3. 突き合わせ
   - 組織詳細 → Stripe連携タブで「管理画面のプラン」と metadata が一致していることを確認

## メタデータの値

| プラン | plan_id | plan_name | tokens | user_limit |
|---|---|---|---|---|
| Lite | promny_stripe_lite | Lite | 800000 | 1 |
| Standard | promny_stripe_standard | Standard | 2550000 | 5 |
| Professional | promny_stripe_professional | Professional | 6200000 | 10 |

tokens / user_limit は `index.html` の料金表と同じ値。料金表を変えたらここも変える。
organization_id / user_id / app_type は触らない。

## 注意

- Stripe連携タブの「metadata を再設定」は、PromnyAI 側のプラン設定で Stripe の
  metadata を上書きする。PromnyAI 側を先に変更していないと古い値に戻る
- 「自動付与: 無効」表示は異常ではない。Stripe 契約中は月次決済で付与されるため OFF が正しい
- Stripe ダッシュボードで入力欄にフォーカスがない状態でキー入力すると、
  ショートカットが発火して請求書作成画面に飛ぶことがある
