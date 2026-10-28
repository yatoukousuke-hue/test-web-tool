# 研修ナビ スマホ通知サーバー（Vercel）

- `keys.js`：通知用のカギ（VAPID）を作って返す。Apps Script の `setupPush()` が最初に1回だけ使う
- `push.js`：Apps Script から頼まれた通知を、先生のスマホへ送る

公開先：Vercel の「test-web-tool」プロジェクト（https://test-web-tool-three.vercel.app/api/…）

カギは Apps Script のスクリプトプロパティに保存され、このリポジトリには入りません。
