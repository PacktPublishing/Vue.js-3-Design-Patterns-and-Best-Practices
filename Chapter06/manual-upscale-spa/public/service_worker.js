// Service Worker v1.0

const CACHE_NAME="MyCache"

self.addEventListener("install", event => {
   console.log("Service worker installed");
});

self.addEventListener("activate", event => {
   console.log("Service worker activated");
});

// Set strategy, cache first, then network
self.addEventListener("fetch", event=>{
        
    // Intercepts the event to respond
    event.respondWith((async ()=>{

        
        // Try to find the request in the cache
        const found=await caches.match(event.request);
        console.log(found)
        if(found){
            return found;
        }else{
            // Not cached yet, request from the network
            const response=await fetch(event.request);

            // Open the cache
            const cache=await caches.open(CACHE_NAME);

            // Place the network response in the cache
            cache.put(event.request, response.clone());

            // Return the response
            return response;
        }
    })())
})