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
    "url": "/dist/app.77ea978e886eb603f3f5.js",
    "revision": "f8192cc6bc6b5b548f70b81ed2603394"
  },
  {
    "url": "/dist/common.77ea978e886eb603f3f5.css",
    "revision": "d8fd7aa70c8822b096f0d1ad689253b0"
  },
  {
    "url": "/dist/manifest.231a226feb8628a6a8f1.js",
    "revision": "e2f61906f8aeb38bacdf8fc833aae555"
  },
  {
    "url": "/dist/pages-landing.d9acc7568edba2026019.js",
    "revision": "96775764f89a4fd51debecb64f7926ad"
  },
  {
    "url": "/dist/pages-lazy.8d1270232a2f45d8023a.js",
    "revision": "ae6e9c89dd9518b0036b9404ee910bb5"
  },
  {
    "url": "/dist/vendor.bfad3e32743b6fce62a4.js",
    "revision": "6b83484fa572b2a739dde997c34868ba"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
workboxSW.router.registerRoute(/\//, workboxSW.strategies.staleWhileRevalidate({}), 'GET');
workboxSW.router.registerRoute(/\/overview/, workboxSW.strategies.staleWhileRevalidate({}), 'GET');
