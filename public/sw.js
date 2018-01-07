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
    "url": "/dist/app.7c04f87e51b6b602fa71.js",
    "revision": "fd8cf38931f6457883c705189807e724"
  },
  {
    "url": "/dist/common.7c04f87e51b6b602fa71.css",
    "revision": "0b7b79cafbc492ac40fed3de5216232b"
  },
  {
    "url": "/dist/components-infinity-grid.a2cedb8e455a5d381755.js",
    "revision": "719f8b776ba80bf38f19188584112c52"
  },
  {
    "url": "/dist/components-info-box.2a3ab32e573622a6baaa.js",
    "revision": "96f77d60c5441a7f7465141235a74a6e"
  },
  {
    "url": "/dist/manifest.0bdd5c09841e40b94cf5.js",
    "revision": "90cd042cd333d68067b4c7c328c3a4d3"
  },
  {
    "url": "/dist/modules-ssr-progressive-background.01fb0a6e5b352268ee58.js",
    "revision": "44adb7ec4cd40d52bf82b62e5310b34c"
  },
  {
    "url": "/dist/pages-landing.57406fb538fbd541c429.js",
    "revision": "ef7c645961d6048a61cd12adc8f20ff6"
  },
  {
    "url": "/dist/pages-lazy.0785009a56c596f6e4c0.js",
    "revision": "bf4c15ef4be7c4b989aaba5252eb795f"
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
