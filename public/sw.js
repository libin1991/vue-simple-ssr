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
    "url": "/dist/app.cc922241a00510c23111.js",
    "revision": "bb40c6da0431e880b579e58f8a93ea21"
  },
  {
    "url": "/dist/common.cc922241a00510c23111.css",
    "revision": "c3dcf8aea44465e0a40dfb6d20ebae44"
  },
  {
    "url": "/dist/manifest.2f52ede55345b71b15cb.js",
    "revision": "ce55f11a36b3744c4ed70fdaaf29d8d2"
  },
  {
    "url": "/dist/pages-landing.a5d7a650473c8ecede4e.js",
    "revision": "a15e854180a73388b31b4a34ade8a616"
  },
  {
    "url": "/dist/pages-overview.2ae831aefc0e579d846f.js",
    "revision": "ace5b5355bf10e3ff4548ef1259a1527"
  },
  {
    "url": "/dist/pages-ssr.6e198a39eca262696b9a.js",
    "revision": "a3376f717778c4143d2d15fd3ef3acda"
  },
  {
    "url": "/dist/vendor.448ee32738c3ce0170d6.js",
    "revision": "830bfd582ed9202b1e2c52577927d4e6"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
workboxSW.router.registerRoute(/\//, workboxSW.strategies.staleWhileRevalidate({}), 'GET');
workboxSW.router.registerRoute(/\/overview/, workboxSW.strategies.staleWhileRevalidate({}), 'GET');
