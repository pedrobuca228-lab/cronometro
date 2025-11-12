self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("cronometro-cache").then(cache => {
      return cache.addAll([
        "./",
        "./index.html",
        "./manifest.json",
        "./style.css",
        "./script.js",
        "./icons/clock-192.png",
        "./icons/clock-512.png"
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
