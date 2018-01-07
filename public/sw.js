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
    "url": "/dist/app.3a461abd292c3b2adbb8.js",
    "revision": "b963e75e2535eac47e91de408889c46f"
  },
  {
    "url": "/dist/common.3a461abd292c3b2adbb8.css",
    "revision": "32f514c45599e11ea7aace0c32984612"
  },
  {
    "url": "/dist/components-infinity-grid.8b794b02dd418df5d97d.js",
    "revision": "cac082eff82d26f0b4a783d88c2c603a"
  },
  {
    "url": "/dist/components-info-box.ef4f1ff2c9bdf398e958.js",
    "revision": "686a8601c7a2b8a871cdec17c325f540"
  },
  {
    "url": "/dist/manifest.6fea79c82e4e15f0a378.js",
    "revision": "bddd459bb71dd6ca1e308342b83d02b8"
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
    "url": "/dist/pages-lazy.a37add4325989559c450.js",
    "revision": "c1eb01487e3a16675b9afbc6a9e4a3b0"
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
