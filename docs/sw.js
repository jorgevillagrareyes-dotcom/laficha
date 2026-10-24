/* La Ficha: service worker para usar el sitio sin conexión.
   Páginas: primero la red y, sin conexión, la copia guardada.
   Estilos, scripts e imágenes: la copia guardada y se actualiza en segundo plano. */
var CACHE = "laficha-v1";

self.addEventListener("install", function () { self.skipWaiting(); });
self.addEventListener("activate", function (ev) {
  ev.waitUntil(caches.keys().then(function (ks) {
    return Promise.all(ks.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});

self.addEventListener("fetch", function (ev) {
  var req = ev.request;
  if (req.method !== "GET" || new URL(req.url).origin !== location.origin) return;
  var esPagina = req.mode === "navigate" || /\.html$|\/$/.test(new URL(req.url).pathname);
  if (esPagina) {
    ev.respondWith(fetch(req).then(function (r) {
      var copia = r.clone();
      if (r.ok) caches.open(CACHE).then(function (c) { c.put(req, copia); });
      return r;
    }).catch(function () {
      return caches.match(req, { ignoreSearch: true }).then(function (r) {
        return r || new Response("<p style='font-family:serif;padding:2rem'>Sin conexión y esta página no está guardada. Abre «Mis temas» con conexión y descarga el sitio.</p>",
          { headers: { "Content-Type": "text/html; charset=utf-8" } });
      });
    }));
    return;
  }
  ev.respondWith(caches.match(req, { ignoreSearch: true }).then(function (guardada) {
    var red = fetch(req).then(function (r) {
      if (r.ok) { var copia = r.clone(); caches.open(CACHE).then(function (c) { c.put(req, copia); }); }
      return r;
    }).catch(function () { return guardada; });
    return guardada || red;
  }));
});

// Descarga completa a pedido desde la página "Mis temas"
self.addEventListener("message", function (ev) {
  if (!ev.data || ev.data.tipo !== "descargar") return;
  var base = ev.data.base, archivos = ev.data.archivos, hechos = 0, fuente = ev.source;
  caches.open(CACHE).then(function (c) {
    var i = 0;
    function siguiente() {
      if (i >= archivos.length) { fuente.postMessage({ tipo: "listo", total: archivos.length }); return; }
      var lote = archivos.slice(i, i + 8); i += 8;
      Promise.all(lote.map(function (a) {
        return c.add(new Request(base + a, { cache: "reload" })).catch(function () {});
      })).then(function () {
        hechos += lote.length;
        fuente.postMessage({ tipo: "avance", hechos: hechos, total: archivos.length });
        siguiente();
      });
    }
    siguiente();
  });
});
