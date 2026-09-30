// サービスワーカー: 一度開けばオフラインでも遊べるようにキャッシュする
const VERSION = '2bc626c026';
const CACHE = 'sumamama-' + VERSION;
const PRECACHE = ["./","index.html","app.js?v=2bc626c026","style.css?v=2bc626c026","manifest.webmanifest","icons/apple-touch-icon.png","icons/icon-192.png","icons/icon-512.png","icons/icon-maskable-512.png"];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(PRECACHE)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k.startsWith('sumamama-') && k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  // ページ本体はネット優先（更新をすぐ反映）、それ以外はキャッシュ優先
  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req)
        .then((res) => { const copy = res.clone(); caches.open(CACHE).then((c) => c.put('./', copy)); return res; })
        .catch(() => caches.match('./').then((r) => r || caches.match('index.html'))),
    );
    return;
  }
  e.respondWith(
    caches.match(req).then((hit) => hit || fetch(req).then((res) => {
      if (res.ok) { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(req, copy)); }
      return res;
    })),
  );
});
