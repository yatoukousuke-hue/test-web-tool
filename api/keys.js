// 研修ナビ：通知用のカギ（VAPID）を新しく作って返す。
// Apps Script の setupPush() が最初に1回だけ呼び、カギは Apps Script 側に保存されます。
const webpush = require("web-push");

module.exports = (req, res) => {
  res.setHeader("Cache-Control", "no-store");
  res.status(200).json(webpush.generateVAPIDKeys());
};
