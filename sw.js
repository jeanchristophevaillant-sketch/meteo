// sw.js
const CACHE_NAME = 'meteo-cache-v2'; // Changez v1 en v2 ici
const ASSETS = [
    './',
    './index.html',
    './manifest.json',
    // ... autres fichiers
];

// Lors de l'installation, on force le nouveau SW à prendre le contrôle
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
    );
    self.skipWaiting(); // Force l'activation immédiate
});

// Nettoyage des anciens caches
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
            );
        })
    );
});