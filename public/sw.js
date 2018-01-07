importScripts('workbox-sw.prod.v2.1.2.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "/dist/app.c1a2a45f424d8c733145.js",
    "revision": "b3890b845132effd104934343f4a8c0b"
  },
  {
    "url": "/dist/common.c1a2a45f424d8c733145.css",
    "revision": "10691acb5521bcef21406d43b9f242bf"
  },
  {
    "url": "/dist/components-infinity-grid.8e8bfd68e5ac648a6d06.js",
    "revision": "c1e372bddbe7686ac3c8c47274c0889e"
  },
  {
    "url": "/dist/components-info-box.ef4f1ff2c9bdf398e958.js",
    "revision": "686a8601c7a2b8a871cdec17c325f540"
  },
  {
    "url": "/dist/manifest.56019c8da755e44274fb.js",
    "revision": "c4f90a76f3b0f4d99b0d55b4351451e6"
  },
  {
    "url": "/dist/modules-ssr-progressive-background.69c37e275437ff9de77d.js",
    "revision": "984f1940cb4aa6a18a79db22617b8e0e"
  },
  {
    "url": "/dist/pages-landing.c8effdd8641828515750.js",
    "revision": "e6746387dff48da778e8902c19edc2cb"
  },
  {
    "url": "/dist/pages-lazy.629de3a5a5dfc2f40de6.js",
    "revision": "e52604f039953a3a5d80dcc5d575d3a0"
  },
  {
    "url": "/dist/vendor.a97a052850a28f18ff0b.js",
    "revision": "2fdefab6f1a6e5fd98a0ce85818527c4"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
