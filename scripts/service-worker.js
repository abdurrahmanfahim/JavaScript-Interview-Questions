const CACHE_NAME = "js-qsns-v3";
const ASSETS = [
  "/",
  "/index.html",
  "css/styles.css",
  "css/all.css",
  "scripts/topicsConfig.js",
  "scripts/logic.js",
  "scripts/questionsData.js",
  "scripts/questionsDataV2.js",
  "scripts/reactQuestionsData.js"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((res) => res || fetch(event.request))
  );
});
