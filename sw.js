const CACHE_NAME = 'tiksave-v1';
const urlsToCache = [
  '/tiksave/',
  '/tiksave/index.html',
  '/tiksave/icon-192.png',
  '/tiksave/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
