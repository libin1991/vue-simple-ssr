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
    "url": "/dist/app.b70fb2da677e1d4f4422.js",
    "revision": "10995abca88f1a5d4a7df00763960f61"
  },
  {
    "url": "/dist/common.b70fb2da677e1d4f4422.css",
    "revision": "c3dcf8aea44465e0a40dfb6d20ebae44"
  },
  {
    "url": "/dist/manifest.210d8b774cfcee83028d.js",
    "revision": "0978bbec61a7f9f65e7d1f8c5d5f45a4"
  },
  {
    "url": "/dist/pages-landing.d66889c3654fff317561.js",
    "revision": "d91d36b866961cc1a5bae3164781879f"
  },
  {
    "url": "/dist/pages-overview.018a6d7760e565bbf50b.js",
    "revision": "ce7e87f1c522563eb2520a5e60c56a7b"
  },
  {
    "url": "/dist/pages-ssr.b340201a673b90444cba.js",
    "revision": "bbb84b185efd75f8c8f425b201573f09"
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
