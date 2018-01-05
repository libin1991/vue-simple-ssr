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
    "url": "/dist/app.ca7eaa8b5cbc9312473e.js",
    "revision": "af8daadabd6da2ba9fda257d066b26ff"
  },
  {
    "url": "/dist/common.ca7eaa8b5cbc9312473e.css",
    "revision": "c3dcf8aea44465e0a40dfb6d20ebae44"
  },
  {
    "url": "/dist/manifest.9a4d0dfdbe3305aad4d0.js",
    "revision": "5cd4d0817a40b9f0e9268439eef9b220"
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
