// Upgrade bridge for VORS Studio installations created at the former root URL.
// This worker is intentionally NOT registered by the public website.
// Existing iPhone installations can update their previously registered root worker.
const OLD_ROOT_CACHES = new Set([
  'vors-studio-v1.1.0-flow-r2',
  'vors-studio-v1.2.1-exact-mark'
]);

self.addEventListener('install', event => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(key => OLD_ROOT_CACHES.has(key)).map(key => caches.delete(key))
    )).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET' || event.request.mode !== 'navigate') return;
  const url = new URL(event.request.url);
  const scope = new URL(self.registration.scope);
  if (url.origin !== scope.origin) return;
  if (url.pathname !== scope.pathname && url.pathname !== scope.pathname + 'index.html') return;
  event.respondWith(fetch(event.request, { cache: 'no-store' }));
});
