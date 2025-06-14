self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('3cs-cache').then(cache => {
      return cache.addAll([
        './',
        './index.html',
        './3CSlogo.png',
        './manifest.json'
      ]);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
