// 研修ナビ：スマホに通知を送る中継役。
// Apps Script から {vapid:{publicKey,privateKey,subject}, items:[{sub, msg}]} を受け取り、
// それぞれの端末に通知を送って、結果（200 / 404 / 410 など）を返します。
const webpush = require("web-push");

module.exports = async (req, res) => {
  if (req.method !== "POST") return res.status(405).json({ error: "POST only" });
  let body = req.body || {};
  if (typeof body === "string") { try { body = JSON.parse(body); } catch (e) { body = {}; } }
  const v = body.vapid || {};
  if (!v.publicKey || !v.privateKey) return res.status(400).json({ error: "vapid keys missing" });
  try {
    webpush.setVapidDetails(v.subject || "https://yatoukousuke-hue.github.io/test-web-tool/kenshu/", v.publicKey, v.privateKey);
  } catch (e) {
    return res.status(400).json({ error: "bad vapid keys" });
  }
  const items = Array.isArray(body.items) ? body.items.slice(0, 300) : [];
  const out = await Promise.all(items.map(async (it) => {
    try {
      const r = await webpush.sendNotification(it.sub, JSON.stringify(it.msg || {}), { TTL: 60 * 60 * 24, urgency: "normal" });
      return r.statusCode || 201;
    } catch (e) {
      return e.statusCode || 500;
    }
  }));
  res.status(200).json({ out });
};
