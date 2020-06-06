'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "b1576f2a6f78920a8d315221d0b4d832",
"assets/assets/1.jpg": "80961ffba498c31eefca8409374a7d90",
"assets/assets/2.jpg": "f97b52cd4bcfcdf095da9eac37fb97e8",
"assets/assets/3.jpg": "e7327d30417f4bfc246c42f805759387",
"assets/assets/bg.jpg": "b801f7337c04f43102d7adb0352d7929",
"assets/assets/logo.jpg": "88cd79b6670a45219e48e7f01fb60436",
"assets/FontManifest.json": "d751713988987e9331980363e24189ce",
"assets/LICENSE": "2f51d2c0d67c2cca15185d632d7f373b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "2f05d3aa79723e2d59bc7e9d7be5fd6a",
"/": "2f05d3aa79723e2d59bc7e9d7be5fd6a",
"main.dart.js": "124ca332dd9bc94167d425c7e1bd76b5",
"manifest.json": "a651998d3ce66d687a3477d0fae63a54"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
