const CACHE_NAME = 'ur-aashik-link-v2';
const RUNTIME_CACHE = 'runtime-cache-v1';

const urlsToCache = [
    './',
    './index.html',
    './manifest.json'
];

// Install event
self.addEventListener('install', event => {
    console.log('[Service Worker] Installing...');
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('[Service Worker] Caching app shell');
                return cache.addAll(urlsToCache);
            })
            .catch(err => console.error('[Service Worker] Cache error:', err))
    );
    self.skipWaiting();
});

// Activate event
self.addEventListener('activate', event => {
    console.log('[Service Worker] Activating...');
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME && cacheName !== RUNTIME_CACHE) {
                        console.log('[Service Worker] Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
    self.clients.claim();
});

// Fetch event - Network first, then cache
self.addEventListener('fetch', event => {
    const { request } = event;

    event.respondWith(
        fetch(request)
            .then(response => {
                // Don't cache non-successful responses
                if (!response || response.status !== 200) {
                    return response;
                }

                // Clone the response
                const responseToCache = response.clone();

                // Cache successful responses
                caches.open(RUNTIME_CACHE)
                    .then(cache => {
                        cache.put(request, responseToCache);
                    });

                return response;
            })
            .catch(() => {
                // Return cached response if available
                return caches.match(request)
                    .then(response => {
                        if (response) {
                            return response;
                        }
                        // Return offline page for document requests
                        if (request.mode === 'navigate') {
                            return caches.match('./index.html');
                        }
                        return new Response('Resource not available offline', {
                            status: 503,
                            statusText: 'Service Unavailable'
                        });
                    });
            })
    );
});

// Handle messages
self.addEventListener('message', event => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});

// Periodic sync (if supported)
self.addEventListener('sync', event => {
    if (event.tag === 'sync-files') {
        event.waitUntil(Promise.resolve());
    }
});

console.log('[Service Worker] Script loaded');
