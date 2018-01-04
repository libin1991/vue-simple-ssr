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
    "url": "/dist/app.4e68100f98963dacf9d5.js",
    "revision": "90174e1fe24eef8944746fbcd69a6c0f"
  },
  {
    "url": "/dist/common.4e68100f98963dacf9d5.css",
    "revision": "c3dcf8aea44465e0a40dfb6d20ebae44"
  },
  {
    "url": "/dist/manifest.ac41430296b4ae7787fc.js",
    "revision": "df2887b42b54c6955af7de49dfeecb87"
  },
  {
    "url": "/dist/pages-landing.a5d7a650473c8ecede4e.js",
    "revision": "a15e854180a73388b31b4a34ade8a616"
  },
  {
    "url": "/dist/pages-overview.9f6bc42049d2cc5628a3.js",
    "revision": "d3e64a6a19ad70283ae5c40f4a64310d"
  },
  {
    "url": "/dist/pages-ssr.a6a81a80871ee04367d5.js",
    "revision": "e06b6944a0fa1e624ad69f9fbd8185e4"
  },
  {
    "url": "/dist/static/images/workshop/1.jpg",
    "revision": "33b46647ae796c1d85eaa7dc424eb4e2"
  },
  {
    "url": "/dist/static/images/workshop/10.jpg",
    "revision": "5094e05628b09a8a6c25e2310487832f"
  },
  {
    "url": "/dist/static/images/workshop/11.jpg",
    "revision": "b03456eae6cab1c8aff10d72d8f81838"
  },
  {
    "url": "/dist/static/images/workshop/12.jpg",
    "revision": "21577d052622d3e535e761cfce9f5c6a"
  },
  {
    "url": "/dist/static/images/workshop/13.jpg",
    "revision": "76e8c4160e5e754214b3080bf7701fd9"
  },
  {
    "url": "/dist/static/images/workshop/14.jpg",
    "revision": "757a380cf8aef0aa7f9b0dc248979572"
  },
  {
    "url": "/dist/static/images/workshop/15.jpg",
    "revision": "92b59ab5ead3e5338e707177318f7c2f"
  },
  {
    "url": "/dist/static/images/workshop/16.jpg",
    "revision": "b2e24685d650aa71180800f780f8d706"
  },
  {
    "url": "/dist/static/images/workshop/17.jpg",
    "revision": "8c74329c546d30fb2cf5c2f574b9d7f7"
  },
  {
    "url": "/dist/static/images/workshop/18.jpg",
    "revision": "050c3d22fe4189536e4b0e6f7cdc80b9"
  },
  {
    "url": "/dist/static/images/workshop/19.jpg",
    "revision": "fde19097d152d9b8e272a85a6c3fe180"
  },
  {
    "url": "/dist/static/images/workshop/2.jpg",
    "revision": "7775aa9f141429934a6fe3216d88648c"
  },
  {
    "url": "/dist/static/images/workshop/20.jpg",
    "revision": "e45c98cf417cd20875af7e2110fa1464"
  },
  {
    "url": "/dist/static/images/workshop/21.jpg",
    "revision": "4ccddc87ba12000a7374a60d3ac9edf7"
  },
  {
    "url": "/dist/static/images/workshop/22.jpg",
    "revision": "e5349e65983af59b341b33fc9b5b2194"
  },
  {
    "url": "/dist/static/images/workshop/23.jpg",
    "revision": "2f48fb389e80fc39869277f2b119878a"
  },
  {
    "url": "/dist/static/images/workshop/24.jpg",
    "revision": "41566f7d7de5946e6346228c442a0ad9"
  },
  {
    "url": "/dist/static/images/workshop/25.jpg",
    "revision": "18ee7684627a6531b88db55839215590"
  },
  {
    "url": "/dist/static/images/workshop/26.jpg",
    "revision": "573907aad7152cb53069f9262069f8ae"
  },
  {
    "url": "/dist/static/images/workshop/27.jpg",
    "revision": "afdaa2d1af0b0522c4c5f29e774a4a77"
  },
  {
    "url": "/dist/static/images/workshop/28.jpg",
    "revision": "e836008b3088c6bb684d4bcf0a71d9c0"
  },
  {
    "url": "/dist/static/images/workshop/29.jpg",
    "revision": "86d6d2e567d7e559d7d89f506630d0a0"
  },
  {
    "url": "/dist/static/images/workshop/3.jpg",
    "revision": "89267805015f2253ee0553edde40953e"
  },
  {
    "url": "/dist/static/images/workshop/30.jpg",
    "revision": "a9f2c3bedbf14412a8c5b043e82f79c7"
  },
  {
    "url": "/dist/static/images/workshop/31.jpg",
    "revision": "fe4c8a94afb8d1c65d7d0620765f9ef9"
  },
  {
    "url": "/dist/static/images/workshop/32.jpg",
    "revision": "67c114741668d1593f3387f53e1bda60"
  },
  {
    "url": "/dist/static/images/workshop/33.jpg",
    "revision": "3d1ca1e1277b6b86d857ab9326711953"
  },
  {
    "url": "/dist/static/images/workshop/34.jpg",
    "revision": "f7b1f4129443f21c9a874c3e1e097cd4"
  },
  {
    "url": "/dist/static/images/workshop/35.jpg",
    "revision": "2730a62df70b65f9dacca7e1a12ce00f"
  },
  {
    "url": "/dist/static/images/workshop/36.jpg",
    "revision": "07c8f7775b87b555ddaf2aeab5871ea1"
  },
  {
    "url": "/dist/static/images/workshop/37.jpg",
    "revision": "bf645a1ddea569ca3245378abf1caf59"
  },
  {
    "url": "/dist/static/images/workshop/38.jpg",
    "revision": "51c6b24e993e9de799cff06722ac5c6a"
  },
  {
    "url": "/dist/static/images/workshop/39.jpg",
    "revision": "dda497b836ed9c7e8bacbb778105ea29"
  },
  {
    "url": "/dist/static/images/workshop/4.jpg",
    "revision": "7ca6ac40c1e19f9481ec6c0dc4288a24"
  },
  {
    "url": "/dist/static/images/workshop/40.jpg",
    "revision": "eac43b8947ee620e594a4c4cca8eebb3"
  },
  {
    "url": "/dist/static/images/workshop/41.jpg",
    "revision": "2b372cdbe701a6142b5f18d51eb00946"
  },
  {
    "url": "/dist/static/images/workshop/42.jpg",
    "revision": "5e586342d7595b97c8bf0d60f4d7629b"
  },
  {
    "url": "/dist/static/images/workshop/43.jpg",
    "revision": "d0f27f7d6519a43f6915b98a19867595"
  },
  {
    "url": "/dist/static/images/workshop/44.jpg",
    "revision": "73b1c0fbca3c32b7596b3715f0ce877b"
  },
  {
    "url": "/dist/static/images/workshop/45.jpg",
    "revision": "c32b58f4a8d973860ae97a6b81d18738"
  },
  {
    "url": "/dist/static/images/workshop/46.jpg",
    "revision": "afda760a148a7ca5d56c8df472efcaea"
  },
  {
    "url": "/dist/static/images/workshop/47.jpg",
    "revision": "459f50ffdf6fdb77496f5365a980328a"
  },
  {
    "url": "/dist/static/images/workshop/48.jpg",
    "revision": "08d4ccbbbb2a4cd13af74a596045e2e4"
  },
  {
    "url": "/dist/static/images/workshop/49.jpg",
    "revision": "90e10655f0ba09c4f9544c87710a1df7"
  },
  {
    "url": "/dist/static/images/workshop/5.jpg",
    "revision": "56070c10dcccd0d042d206bdabe1669b"
  },
  {
    "url": "/dist/static/images/workshop/50.jpg",
    "revision": "9c341731d9df67033ee085a0c4b550f8"
  },
  {
    "url": "/dist/static/images/workshop/6.jpg",
    "revision": "5a857b2ebb526f5bb1533720e834a170"
  },
  {
    "url": "/dist/static/images/workshop/7.jpg",
    "revision": "2dbb6197e236bcf44a7d790f047acb6f"
  },
  {
    "url": "/dist/static/images/workshop/8.jpg",
    "revision": "cd634f916fdb9ecbc0067ec4f3fb182c"
  },
  {
    "url": "/dist/static/images/workshop/9.jpg",
    "revision": "1c8162199525ddbc71f657cd6aeaceff"
  },
  {
    "url": "/dist/static/images/workshop/thumbnails/1.jpg",
    "revision": "5d1dacb2ff04e0f03ccbc417f83b204e"
  },
  {
    "url": "/dist/static/images/workshop/thumbnails/10.jpg",
    "revision": "1ec21d99d36716c349a3ec36d2b6082b"
  },
  {
    "url": "/dist/static/images/workshop/thumbnails/11.jpg",
    "revision": "cb5e07c2baca72127136527bc0f37e01"
  },
  {
    "url": "/dist/static/images/workshop/thumbnails/12.jpg",
    "revision": "b28a5344cfdc99777890d28baafb5997"
  },
  {
    "url": "/dist/static/images/workshop/thumbnails/13.jpg",
    "revision": "e30367acfce181910efed24700fc6200"
  },
  {
    "url": "/dist/static/images/workshop/thumbnails/14.jpg",
    "revision": "39953d4eb3b43d464a6f8fc72a3c5971"
  },
  {
    "url": "/dist/static/images/workshop/thumbnails/15.jpg",
    "revision": "8d24a6bb75d7f88b0eada0931eddd897"
  },
  {
    "url": "/dist/static/images/workshop/thumbnails/16.jpg",
    "revision": "32658dfdad92f3422271e218b2fd3b29"
  },
  {
    "url": "/dist/static/images/workshop/thumbnails/17.jpg",
    "revision": "6a2889ac63394ca2621e75764dd21f31"
  },
  {
    "url": "/dist/static/images/workshop/thumbnails/18.jpg",
    "revision": "02fb943dbe825ec5920fddc22ea8aee9"
  },
  {
    "url": "/dist/static/images/workshop/thumbnails/19.jpg",
    "revision": "37e57b2104883f7dd55edcade0d63f8f"
  },
  {
    "url": "/dist/static/images/workshop/thumbnails/2.jpg",
    "revision": "f975bf4b258e3d831a2f725dd5450e21"
  },
  {
    "url": "/dist/static/images/workshop/thumbnails/20.jpg",
    "revision": "adc69f11698aa67debb41ca3584e937f"
  },
  {
    "url": "/dist/static/images/workshop/thumbnails/21.jpg",
    "revision": "bc6b0869ab2867a5b88594daf8ac1f9a"
  },
  {
    "url": "/dist/static/images/workshop/thumbnails/22.jpg",
    "revision": "27bd913596b56b6e6db27756df90e019"
  },
  {
    "url": "/dist/static/images/workshop/thumbnails/23.jpg",
    "revision": "78f0a3a54ab615fdbcec82d8bf192dc9"
  },
  {
    "url": "/dist/static/images/workshop/thumbnails/24.jpg",
    "revision": "8c03f1fc61c988184c8516f907f63d8f"
  },
  {
    "url": "/dist/static/images/workshop/thumbnails/25.jpg",
    "revision": "f676426314d477fa56b6aba5e7a4f79e"
  },
  {
    "url": "/dist/static/images/workshop/thumbnails/26.jpg",
    "revision": "fedbef56d5eefc37cf1145f7a1186336"
  },
  {
    "url": "/dist/static/images/workshop/thumbnails/27.jpg",
    "revision": "8eb8acd736a6b389b02ef7779af2c9ac"
  },
  {
    "url": "/dist/static/images/workshop/thumbnails/28.jpg",
    "revision": "40b8f1758cd909aec83cec9b1822a738"
  },
  {
    "url": "/dist/static/images/workshop/thumbnails/29.jpg",
    "revision": "b8cef2e8741513d38ee06cafd5e8ea4b"
  },
  {
    "url": "/dist/static/images/workshop/thumbnails/3.jpg",
    "revision": "642e096e6431fcc2bd83d3aa99b39145"
  },
  {
    "url": "/dist/static/images/workshop/thumbnails/30.jpg",
    "revision": "478e0409e447e622e1cb40dcb28d3686"
  },
  {
    "url": "/dist/static/images/workshop/thumbnails/31.jpg",
    "revision": "29a18cdb99765bbd6ea4460675e26169"
  },
  {
    "url": "/dist/static/images/workshop/thumbnails/32.jpg",
    "revision": "d32b1de88673d9c4465687a89966e282"
  },
  {
    "url": "/dist/static/images/workshop/thumbnails/33.jpg",
    "revision": "1c03bc7a996ed6a2e5b569e3ab3094cb"
  },
  {
    "url": "/dist/static/images/workshop/thumbnails/34.jpg",
    "revision": "bbeffde46f9b49f4b55ec7f103c1c21d"
  },
  {
    "url": "/dist/static/images/workshop/thumbnails/35.jpg",
    "revision": "4e98d976195ce0ae190a7ec6284f1726"
  },
  {
    "url": "/dist/static/images/workshop/thumbnails/36.jpg",
    "revision": "f6247dc7cceb5fb218c86a0a4ea658ef"
  },
  {
    "url": "/dist/static/images/workshop/thumbnails/37.jpg",
    "revision": "212206a074cc249e3d12a267601f758b"
  },
  {
    "url": "/dist/static/images/workshop/thumbnails/38.jpg",
    "revision": "84a59a5e722581f6754a2e42803f5e98"
  },
  {
    "url": "/dist/static/images/workshop/thumbnails/39.jpg",
    "revision": "02c000de496072d3a8029f04c6294927"
  },
  {
    "url": "/dist/static/images/workshop/thumbnails/4.jpg",
    "revision": "56e8f5c4d45144b0a1cbb786cb8edf3d"
  },
  {
    "url": "/dist/static/images/workshop/thumbnails/40.jpg",
    "revision": "faad21d487462da5f2025d476079d82e"
  },
  {
    "url": "/dist/static/images/workshop/thumbnails/41.jpg",
    "revision": "8da8f3a4bf63008efc4d3525ecd78ff7"
  },
  {
    "url": "/dist/static/images/workshop/thumbnails/42.jpg",
    "revision": "393c90343e0bbec55b4218d23e505741"
  },
  {
    "url": "/dist/static/images/workshop/thumbnails/43.jpg",
    "revision": "f32dc874f59e551c7772b79d2b326d39"
  },
  {
    "url": "/dist/static/images/workshop/thumbnails/44.jpg",
    "revision": "ba959d5fa8660fbba06e73615d43dc0a"
  },
  {
    "url": "/dist/static/images/workshop/thumbnails/45.jpg",
    "revision": "f23acbc7df5cfe76289f72fd5a0df203"
  },
  {
    "url": "/dist/static/images/workshop/thumbnails/46.jpg",
    "revision": "2a9b1f1ad8d0f479b0708215f8b00255"
  },
  {
    "url": "/dist/static/images/workshop/thumbnails/47.jpg",
    "revision": "ae1b3e73e30bbad648361ae2780ac065"
  },
  {
    "url": "/dist/static/images/workshop/thumbnails/48.jpg",
    "revision": "755e8e7003c6e3d16291c875205b6d1c"
  },
  {
    "url": "/dist/static/images/workshop/thumbnails/49.jpg",
    "revision": "aab4debfd54d61ca089d81cae8ffaf66"
  },
  {
    "url": "/dist/static/images/workshop/thumbnails/5.jpg",
    "revision": "ca8fa12c95366787f2a75f0ab837f549"
  },
  {
    "url": "/dist/static/images/workshop/thumbnails/50.jpg",
    "revision": "e07eca03b55cf8d9dbb0c92eb185818b"
  },
  {
    "url": "/dist/static/images/workshop/thumbnails/6.jpg",
    "revision": "5913f89593c4bcc3fc3020c82a4dcf23"
  },
  {
    "url": "/dist/static/images/workshop/thumbnails/7.jpg",
    "revision": "351decf700f93ca2524e5c2703dc97f9"
  },
  {
    "url": "/dist/static/images/workshop/thumbnails/8.jpg",
    "revision": "28c5fa9f8b3b2abcc31a8d12c4517c31"
  },
  {
    "url": "/dist/static/images/workshop/thumbnails/9.jpg",
    "revision": "f431a144b2800d25251856181b7919fb"
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
