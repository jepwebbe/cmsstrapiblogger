let cacheVersionName = 'my-site-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
];

self.addEventListener('install', event => {
    // Åben cache, vent til response er sat
    event.waitUntil(
        caches.open(cacheVersionName)
            .then( response => {
                console.log('Opened cache');
                return response.addAll(urlsToCache);
            })
    );
    // hop vent over og sæt serviceworker i gang med det samme
    self.skipWaiting()
});

// tilføj eventlistener og fetch
self.addEventListener('fetch', (event) => {

    event.respondWith(caches.open(cacheVersionName).then((response) => {
      // Først gå til cachen
      return response.match(event.request.url).then((cachedResponse) => {
        // Hvis der er et noget i cachen, returner det
        if (cachedResponse) {
          console.log("cached response" + cachedResponse)
  
          return cachedResponse;
        }
  
        // Hvis der ikke er et cached response, gå til netværket
        return fetch(event.request).then((fetchedResponse) => {
          // Tilføj fetched response til cahce for senere besøg
          response.put(event.request, fetchedResponse.clone());
  
          // Returner netrespons
          console.log("fetched response" + fetchedResponse)
          return fetchedResponse;
        });
      });
    }));
  });