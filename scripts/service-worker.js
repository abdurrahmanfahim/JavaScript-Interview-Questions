const CACHE_NAME = "js-qsns-v1";
const ASSETS = [
  "/",
  "/index.html",
  "css/style.css",
  "css/all.css",
  "script/logic.js",
  "script/questionsData.js"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((res) => res || fetch(event.request))
  );
});
