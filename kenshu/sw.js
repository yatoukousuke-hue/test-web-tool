// 研修ナビ：スマホ通知を受け取る係（サービスワーカー）
self.addEventListener("install", function () { self.skipWaiting(); });
self.addEventListener("activate", function (e) { e.waitUntil(self.clients.claim()); });

self.addEventListener("push", function (e) {
  var d = {};
  try { d = e.data ? e.data.json() : {}; } catch (x) { d = { body: e.data ? e.data.text() : "" }; }
  e.waitUntil(self.registration.showNotification(d.title || "先生研修ナビ", {
    body: d.body || "",
    icon: "icon-192.png",
    badge: "icon-192.png",
    tag: d.tag || "kenshu-navi",
    data: { url: d.url || "./" }
  }));
});

self.addEventListener("notificationclick", function (e) {
  e.notification.close();
  // 通知をタップしたら、この入口（ホーム画面のアイコンと同じ場所）から研修ナビをひらく
  e.waitUntil(self.clients.openWindow(self.registration.scope));
});
