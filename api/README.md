# 研修ナビ スマホ通知サーバー（Vercel）

- `keys.js`：通知用のカギ（VAPID）を作って返す。Apps Script の `setupPush()` が最初に1回だけ使う
- `push.js`：Apps Script から頼まれた通知を、先生のスマホへ送る

カギは Apps Script のスクリプトプロパティに保存され、このリポジトリには入りません。
