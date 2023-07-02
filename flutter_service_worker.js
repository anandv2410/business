'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "607e09bae37f4dcfc1bc99893354ecfc",
"assets/assets/imgw/0.png": "a768f91c91dbae19488293e02a01e910",
"assets/assets/imgw/11.png": "fe003a36caf0837598c9a4d9cb356201",
"assets/assets/imgw/12.png": "b8f13435bc2fefb4e198830709faacc7",
"assets/assets/imgw/13.png": "3547defba0f616286e716c4f5186020b",
"assets/assets/imgw/144.png": "eef3b1dd91f830eb10c0abed4950cfe0",
"assets/assets/imgw/15.png": "954c6f5d7b648029eb2212abb6119f9e",
"assets/assets/imgw/155.png": "8e6f65cf586e18cc01c62da737a6ed3a",
"assets/assets/imgw/166.png": "f06e781a03252a2a39540551e3b1767c",
"assets/assets/imgw/199.png": "180f1150e47fbcd0effb40ccc8285816",
"assets/assets/imgw/200.png": "5fb1cca105120acc88c56de6e779d48b",
"assets/assets/imgw/22.png": "5f410671450a66e63309a7ade9a619cb",
"assets/assets/imgw/23.png": "c9d69cdc52af7b9ff37a7da855beb436",
"assets/assets/imgw/232.png": "e4480cb0b8b3af8dd4e6f661d15ae5f9",
"assets/assets/imgw/244.png": "75dbef9e6ba2f3615b9cca729a0cc4ab",
"assets/assets/imgw/255.png": "f9e3e8be859435e86a4e829e09723ee5",
"assets/assets/imgw/5.png": "b68ae44f7b70c4eaaf7f430879d830dc",
"assets/assets/imgw/8888.png": "c05e34c089e144b70370f4427141f1fe",
"assets/assets/imgw/Blue%2520Cutter.png": "11d956210e0cab90969f47adc3695064",
"assets/assets/imgw/Blue%2520Ribbon.png": "285af598d3d3bf58ff3d3c31e024e4ff",
"assets/assets/imgw/rr.png": "3b2fa87825404e7a765663b20a458f49",
"assets/assets/mob/1.png": "a23f58eaa6bf8f6b105df5ac8b953239",
"assets/assets/mob/10.png": "5b675c50dbc739f4c7ce15bd4a008894",
"assets/assets/mob/11.png": "a80de9cf03a0c5b239749498013fb371",
"assets/assets/mob/13.png": "d713ebdf33234a3380868c4e91b1b46a",
"assets/assets/mob/14.png": "ecf75e5ea97be4a0dccfd389080b4200",
"assets/assets/mob/15.png": "7c5266ffc646c12cb13e59cebd97e451",
"assets/assets/mob/16.png": "942ba6431050f402464a4ae7f9b0c1bc",
"assets/assets/mob/17.png": "0c62c78cc172c0a637952d6d637eefff",
"assets/assets/mob/18.png": "dd92ccdc6ae41885fe7808ce23c24847",
"assets/assets/mob/19.png": "e18562615900dfb9cbad7092b2ea49d5",
"assets/assets/mob/2.png": "7ce7055159efaadb9eeacec36ae7560c",
"assets/assets/mob/20.png": "fd300c17c9b78f3d2d1f72dedda17ddd",
"assets/assets/mob/21.png": "b2bdc80de360299e764a3bd046be645e",
"assets/assets/mob/22.png": "6071533aebe7157fa91833d1684b84b4",
"assets/assets/mob/24.png": "a88ae264a306904c4e7e29e50336f14f",
"assets/assets/mob/25.png": "95571296691455abb0fc392629798172",
"assets/assets/mob/26.png": "a658ce396244d1c8abdb7b81a78b1219",
"assets/assets/mob/28.png": "4fab2fda94a3e042f0267b4f7f413845",
"assets/assets/mob/29.png": "af170944b18a65c3620ddcbc34657d9a",
"assets/assets/mob/3.png": "c9fff4717f0d366aae6b12e80049360b",
"assets/assets/mob/31.png": "8d21b905fccaad48bfa82065b651e4aa",
"assets/assets/mob/32.png": "332cd30477ce1c1f3b4acda747423049",
"assets/assets/mob/4.png": "ba019b5b8dbcc626db649db39f8230e0",
"assets/assets/mob/5.png": "14f770e6652a6a777bad7fb19dd5c1f0",
"assets/assets/mob/7.png": "195c933610daef2153070033f8c7abe9",
"assets/assets/mob/8.png": "e70878c39ac71c572d198cfb825643c2",
"assets/assets/mob/9.png": "a29e6823250d3b515049d39686a0e286",
"assets/assets/mob/Screenshot%25202023-07-02%2520165647.png": "af170944b18a65c3620ddcbc34657d9a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "1c1af7a96477dd23b121bf6b33c55714",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "cc766c8586183fe44cb5711f83c1abfc",
"/": "cc766c8586183fe44cb5711f83c1abfc",
"main.dart.js": "f7d336e0a9c3a0eca5cb8b4cb9f71c6f",
"manifest.json": "97ef3e7bd5edd7e03bc4f36e62334f63",
"version.json": "3578e0da516017b4ec5211689f84b088"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
