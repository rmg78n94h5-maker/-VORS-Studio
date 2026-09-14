const CACHE = 'vors-studio-v1.0.0-ui-r2';
const ASSETS = [
  './',
  './index.html',
  './styles.css',
  './materials-ui-0.9.1.css',
  './vors-1.0.css',
  './vors-1.0-fixes.css',
  './app.js',
  './catalog-kudel-2026-09.js',
  './materials-ui-0.9.1.js',
  './vors-1.0-ui.js',
  './vors-1.0-fixes.js',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/apple-touch-icon.png'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key))))
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request).then(response => {
      const copy = response.clone();
      caches.open(CACHE).then(cache => cache.put(event.request, copy));
      return response;
    }).catch(() => caches.match('./index.html')))
  );
});
