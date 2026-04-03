const CACHE_NAME = "js-qsns-v4";
const ASSETS = [
  "./",
  "./index.html",
  "./css/styles.css",
  "./css/all.css",
  "./scripts/topicsConfig.js",
  "./scripts/logic.js",
  "./scripts/questionsData.js",
  "./scripts/questionsDataV2.js",
  "./scripts/reactQuestionsData.js"
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

// Stale-While-Revalidate:
// 1. cache থেকে সাথে সাথে দাও (offline এও কাজ করে)
// 2. background এ network থেকে নতুন version আনো
// 3. cache update করো — পরের reload এ নতুন version পাবে
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.match(event.request).then((cached) => {
        const networkFetch = fetch(event.request).then((response) => {
          if (response && response.status === 200 && response.type !== "opaque") {
            cache.put(event.request, response.clone());
          }
          return response;
        }).catch(() => null);

        // cache আছে → সাথে সাথে দাও, background এ update হবে
        // cache নেই → network এর জন্য wait করো
        return cached || networkFetch;
      });
    })
  );
});
