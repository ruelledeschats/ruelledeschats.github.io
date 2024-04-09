const CACHE_NAME = `Ruelle-des-Chats-v0.2.alfa`;

// Use the install event to pre-cache all initial resources.
self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    cache.addAll([
      '/',
      '/favicon.ico',
      '/icons/cat.ico',
      '/icons/cat-solid.svg',
      '/icons/icon-48x48.png',
      '/icons/icon-72x72.png',
      '/icons/icon-87x87.png',
      '/icons/icon-128x128.png',
      '/icons/icon-144x144.png',
      '/icons/icon-152x152.png',
      '/icons/icon-192x192.png',
      '/icons/flag-en.svg',
      '/icons/flag-fr.svg',
      '/favicon.ico',
      '/manifest.json',
      '/serviceWorker.js',
      '/js/app.js',
      '/index.html',
      '/apropos.html',
      '/js/lecteur.js',
      '/css/lecteur.css',
      '/css/app/app.min.css',
      '/css/lib/bootstap.min.css',
      '/fontawesome-free-5.15.4-web/css/all.min.css',
      '/audios/1_en.m4a',
      '/audios/2_en.m4a',
      '/audios/3_en.m4a',
      '/audios/1_fr.m4a',
      '/audios/2_fr.m4a',
      '/audios/3_fr.m4a',
      '/photos/1_photo.jpg',
      '/photos/2_photo.jpg',
      '/photos/3_photo.jpg',
    ]);
  })());
});

self.addEventListener('fetch', event => {
  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);

    // Get the resource from the cache.
    const cachedResponse = await cache.match(event.request);
    if (cachedResponse) {
      return cachedResponse;
    } else {
        try {
          // If the resource was not in the cache, try the network.
          const fetchResponse = await fetch(event.request);

          // Save the resource in the cache and return it.
          cache.put(event.request, fetchResponse.clone());
          return fetchResponse;
        } catch (e) {
          // The network failed.
        }
    }
  })());
});

// suppression caches  qui ne correspondent plus à la version actuelle de l'application
// @TODO : Tester
self.addEventListener('activate', async (event) => {
    const existingCaches = await caches.keys();
    const invalidCaches = existingCaches.filter( c => c!== CACHE_NAME );
    await Promise.all(invalidCaches.map(ic => caches.delete(ic)));
});
