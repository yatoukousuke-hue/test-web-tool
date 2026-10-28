# リーダー先生研修ナビ 入口ページ

iPhoneの「ホーム画面に追加」でアプリのアイコンが出るようにするための入口ページです。
中身は Google Apps Script で動いている研修ナビをそのままひらきます（研修ナビ本体の更新は自動で反映されます）。

- `index.html`：入口ページ（アイコン設定＋研修ナビをひらく）。`?push=コード` でひらくと、スマホ通知の設定画面になります
- 同じ入口が GitHub Pages（https://yatoukousuke-hue.github.io/test-web-tool/kenshu/）と Vercel（https://test-web-tool-three.vercel.app/kenshu/）の両方で公開されています
- `sw.js`：スマホ通知を受け取って表示する係（サービスワーカー）
- `manifest.webmanifest`：アプリ名・アイコンの設定
- `icon-180.png` / `icon-192.png` / `icon-512.png`：アイコン画像（EIMEIグループのロゴ）
- `icon-mask.png`：Android用（丸く切り抜かれても欠けないマークだけの版）

通知を送る側は、リポジトリ直下の `api/`（Vercel で動く小さなサーバー）です。
Apps Script の `setupPush()` を1回実行すると、毎朝8時ごろに期限のお知らせが届くようになります。
