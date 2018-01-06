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
    "url": "/dist/app.53843a0eb4d3691346d2.js",
    "revision": "9bb99927a3077582a1571f8fced94c2d"
  },
  {
    "url": "/dist/common.53843a0eb4d3691346d2.css",
    "revision": "d8fd7aa70c8822b096f0d1ad689253b0"
  },
  {
    "url": "/dist/manifest.5a5c51f3930a4cd348a3.js",
    "revision": "b66ab878d0803f5ce7f9fbfd3a625230"
  },
  {
    "url": "/dist/pages-landing.1b611f6eb70f6dac6f03.js",
    "revision": "55336fd021a936cd8feaf35cfac335d0"
  },
  {
    "url": "/dist/vendor.a396c68a382fca40d852.js",
    "revision": "5d1aeba8a8a4d69b347303969c4ba075"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
workboxSW.router.registerRoute(/\//, workboxSW.strategies.staleWhileRevalidate({}), 'GET');
workboxSW.router.registerRoute(/\/overview/, workboxSW.strategies.staleWhileRevalidate({}), 'GET');
