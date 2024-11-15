'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a08b1a9443db0ad41dc6dddee81eef3e",
".git/config": "ca5dad71d0ff09d97479b0ec41cfdd51",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "3be39e429211b327638dbcd890d87811",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "59a1d347a0f0e6c94766c063bb6ab570",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2da642afa3d9db6bb6399ec870c50428",
".git/logs/refs/heads/master": "e644e851b5ab1f82984fafd9ee43a082",
".git/logs/refs/remotes/origin/master": "29011581d4ff3a39fd861816a5c11c79",
".git/objects/00/a6f97b1a8c1d91025ef7ea3675eeeebc8ddec2": "ef6c9a64c9117cc645e5bb33ffa136d6",
".git/objects/08/189d22d19742db8edb55a071eced56ba7c9928": "9c2dddc971b6a8cdbf52b15a809eeef8",
".git/objects/08/4a11118eaa9bd5234fdb0d4595cc7b3e92c73d": "390635df805920ab8f5d94976950a17f",
".git/objects/0f/a5a6f0550b41743f75c49c58f3e22711d6a266": "d420401cbe3ec1ed505f17177dc3c2a9",
".git/objects/10/ef77cf99946d00a91d34a3405c20de38afa209": "800ad2630862cce73fa66c62b98df44e",
".git/objects/14/9b42df514ed6ddab603ac19cc5863dc1c61c37": "4e4da9cf38c7bcfbc95900e3091e875c",
".git/objects/16/c839fd30f11437e6e53d771e338a64afe03c1c": "e99762314138fd905b0f1ac405a3ee26",
".git/objects/17/efbd94c2102b34fb858b5e3196875385c16a07": "eb328a544ecda3766339a2e78607f624",
".git/objects/18/2a1b0a97ca529a0ecd2487372e5f6d54f0bdf4": "4cb833118d4dafeab0d32e62c3486752",
".git/objects/1c/8d9e7351c04eeae20a72e2f4424768c6878142": "e16c0ed6975e1bbf15c20dcc8a291133",
".git/objects/1c/ff6f94b81c214915f168c03cd2bf01f5ab5531": "101be5b3385f215d72eb233ff0f70579",
".git/objects/1e/b0c7130cea2ea447e7d1c7b42e3bd871233a0b": "29942960d2df020d06e2df3067c01c8e",
".git/objects/29/71c897a21614f05a7a49fe72a9cf384e18beb3": "110b0b2e7b0e7ad01cdcc502e57cedf6",
".git/objects/39/f1c025caf9a2d3394b74a375e4abed4df119d9": "6c84be397210801ca3e87a9ee0e5b8fe",
".git/objects/3e/266192fa29f59f469d8ce94d0336f9e2855fe7": "a933193b023b08fd72f3a924ceb24f3d",
".git/objects/4a/a5ee6ed1e316db5b7d3b12d1863fc39490517f": "a8d7dc3982bf2f811825f51a2a71326b",
".git/objects/4a/da8b083438d2a1c679add98522b7e6a1a0a95f": "8777d482930ce59f234da7f389bc950f",
".git/objects/4c/382dd5126440c0f2fdcd5742cb59bea9c3e6c9": "e14c422947c8399408da1c5204511a76",
".git/objects/4c/621af1296aa148927b5a85bc8da30389a372e4": "0c7d3f773f91022fbf119ab97ef5d215",
".git/objects/4e/d2b9dd30373c7932d8a659e76cb97ed7b0dcd2": "8a85ecaff39c1addf93ed7386604053c",
".git/objects/50/4d407e5f71284caa892a8eae97dbc72ccf1e89": "12db55117b031923274db148cfed4bf6",
".git/objects/56/2bfa816a208391e860bfd4729ba72387e4259c": "a857bfa6b6c9006ca5dfd509c71b4a14",
".git/objects/5c/9a1afbb905533c61d6d085730c2558a40ae393": "bf68efd30c4381cba9d2c54bebffb757",
".git/objects/5f/4ce3e7ac7c28b824475233b18d038e42cd228f": "60a00912723ef3444b7261396b14a0b7",
".git/objects/61/d1b55423ce623bb5b046a5700d49eb83eae14a": "eec3ed1643a762fd002c126e86abbc9e",
".git/objects/64/fb868b3c999e6786d5f1f6910226e1b6482d44": "6939fb6113df1d3817bfe030f87fe3e6",
".git/objects/69/ee5339c17cc0c9a0ad4fffa99bbc4912629fbb": "d3b6be5564013e4ec7a9a186f0b3b7d7",
".git/objects/73/7bee2247fb85bae675d5036f00f87f6209072a": "e5b1563f71e060d158194ee73609ad7a",
".git/objects/76/14b55d17a0be936e39742781a2267cef7a7f29": "a5155395828589794203c6def20ff595",
".git/objects/7e/215decf9f91f0b2684a050d967bf688f6db6ea": "d36f1c3a827f089437b726d4b4c60f7b",
".git/objects/81/894b334f38fe9082dccd922e4766216ab90e39": "8498a0b6f0904ddb852ac3167a67ca38",
".git/objects/84/ccb91e143e534888c767b13f65c40837ed2350": "afe1529402738ff6146f1c55fd23d4b5",
".git/objects/87/5c2c4114436e0ce68735462d3f39a7b7730922": "1122f2febab70bdc642e659539099d84",
".git/objects/88/9a642d7946ec154af198a10087e90bf106eb95": "842b91544e61fcaa7036b07c8fe64164",
".git/objects/93/710b13fd52e99a2210833d1045b3dd127209c7": "a6e97f4fce6ef49bef7856cc6f531cba",
".git/objects/94/9b5d7549c16a98a477ed6165db7ce37139ede7": "1e12a851dbfff4f4135b04d22cb6b307",
".git/objects/96/f79b30cf2672286209d2474cacfba2909f257c": "0547a99686e5685fdf494186ca0d085d",
".git/objects/a1/c28d93f2649a7173e261c3fa3a348d5454d22f": "bdd6c71e701c9caf7aa8a816b8748676",
".git/objects/ac/b0dc52de3f5d56fd242591ea32d63614ccbc25": "ebcb7acec45d237d5fa0727bc607228f",
".git/objects/ad/3e407f722b43215f704adb901b0cc29331ce3e": "f76ed28e77e1960891c6453527267650",
".git/objects/ad/a841f30bf41251307d5ecd66c48bde79292595": "ccf5d4c5cdc07bfd0148f0a180c96185",
".git/objects/b6/063c0c7067a5d97bbb9e1cae4e628fc2f6790b": "7b40d1a58e9f5001fec5ed246fd9c39c",
".git/objects/bb/33cdb04969da2dd335a384c006e38b925eb340": "ee43137d7ca98dee994d85dafba95f7b",
".git/objects/bb/f5372965b72051509247f7bf90973200b09a00": "9c6e1de9b00e1ca5c74ca2cd23f1552d",
".git/objects/bb/fcb404e7013912f115c1c287bcdce30f68219d": "a5d7dd183c37b079580b371731dd99b9",
".git/objects/be/26d59ea3c810361b06116378c757cc95d863c0": "ab830656b8a88b9dcf4d85fe59dacf25",
".git/objects/be/95db5d25ec67ba0db5176479f557227668167b": "718b15b82d23be0fa494c5f76a8f2c38",
".git/objects/bf/429ad0b9eb943b11aef7482ff7809414fb8d68": "61ed68e5f69f49dade742f2917102eda",
".git/objects/c1/27a2270c64324826afe456c447597bb2255013": "f859e964210a30d6d340c416467133fa",
".git/objects/c5/cc05b1215ee810dda17493778691abaaad726b": "9bb7f1625fc285e28561497996ddd4be",
".git/objects/ca/bce9d4165bc7043b958b8e9d4e9219671793f8": "aadbaee968c3becee414491c8defeb28",
".git/objects/d2/5010fade8aad48acf415b2f6132434aea7bcc9": "262141aac3a2e5def3521acbec87b3c9",
".git/objects/d5/f009adffe93dbf499195be7e445b9b469225d7": "00d574adbc2320a2d18043955eca1383",
".git/objects/d9/e319d8d263c1338be2b5633e5386e5da54ca8c": "031e899ee06b281c476ed468843128aa",
".git/objects/dd/6b2e229cb9fa015044bc9f850e288370cc1e51": "7b62b9541f5530d5907ffcf470138232",
".git/objects/e6/c659837416796ed341032b037d36427aacc442": "3ad3886991e13e0689ca1dfc0781a6eb",
".git/objects/e7/b2c9531b134abb5178b6cf596e52e958a3771b": "7222a8332d35cbc765f8dc146bd31e73",
".git/objects/f1/218120323028aae446d8e6536513a7a65b31c6": "7eb90abd27709aa17baaacd550ca3f06",
".git/objects/f5/995cb226aeaa9fd6b9c45b24563ad985433cfb": "0093965f844789ae4f80b7bb887e386c",
".git/objects/f8/4d72cc41b8c4fdc865414b033f4640db3e56ed": "fa7b05d9d833b79dcc0ec1c382cbc1fc",
".git/objects/f9/223cc0408be491ba9207e2cc025b560025a9db": "2ae8a068c012c100300fad1f101d3719",
".git/objects/fa/40c38a8b0ee2869587b3ae1eebb72c6edf6448": "a6f9a0e85704e8161800b8fca952fc90",
".git/objects/fc/393941ce242f7d42d2514f53aaad4f568bd69f": "4a03bfacb08155abcc2a94f6d1043f89",
".git/objects/fd/3945ea240fc1d2cca72a0c55b84ef4021f02e9": "4d56fa742ee063c3731b41629760a2b3",
".git/objects/pack/pack-03d4b5c73e4d7c0efac7435bc8933de9689b279b.idx": "9f8b1d9d38b050ca4012fef6dd9eaeb6",
".git/objects/pack/pack-03d4b5c73e4d7c0efac7435bc8933de9689b279b.pack": "9741f25729b1e9b0156bca6195f94e2e",
".git/ORIG_HEAD": "07a0590701886a7f801da82803e9a6e8",
".git/REBASE_HEAD": "5c6d3b459a678e32dd42ac463792cd2a",
".git/refs/heads/master": "2af930fba3d2c107dece9febf350681f",
".git/refs/remotes/origin/master": "2af930fba3d2c107dece9febf350681f",
"assets/AssetManifest.bin": "5e44eba95c4b539acf20b9915c6baf38",
"assets/AssetManifest.json": "643eff16a9426e11274abe200b4adeee",
"assets/assets/fonts/Baloo2-Bold.ttf": "e6ea43c5e41884cff68110bb88dbdbab",
"assets/assets/fonts/Baloo2-Regular.ttf": "f8f89a31657b9ea44e160870759723a4",
"assets/assets/fonts/IRANSans.ttf": "860ad172ae5c052dea861911dc17b92a",
"assets/assets/fonts/IRANSans_Bold.ttf": "da941c58b16727d4339a8c92c46f2704",
"assets/assets/images/back.png": "917dab6a2220c667fff3c7c778c2369b",
"assets/assets/images/edit.png": "024e585611e6e7b3c0cf5779191bab7b",
"assets/assets/images/empty.json": "20e62229847226f1b54b605cc6df8d8c",
"assets/assets/images/login.png": "3be3a8871fe0a0796bdb427904ac482e",
"assets/assets/images/logo.jpg": "051675cbfae8a38dc659cf73c9181fab",
"assets/assets/images/logo.png": "0ebde89b374d06442c68d68b52eb09c0",
"assets/assets/images/noimg.jpg": "5fe6d6d77dfb92843375f778d3790f5d",
"assets/assets/images/p1.png": "94d83c9e83aefd485ee7dd4bb180386c",
"assets/assets/images/smile.png": "ed9b24231ae3a8fdcbfecfddeb1e161f",
"assets/assets/translations/ar-QA.json": "81cf935bbc7cf2bc0a6b9ba6448ed2b0",
"assets/assets/translations/en-US.json": "6a55faac4697bc3712a406ef41562005",
"assets/FontManifest.json": "d58fd59fa752a3e83ff0291efeb01fc9",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "a6a082cf97b431ff3f82df30dc41c2d4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_osm_plugin/assets/default_pin.png": "7679c39b09843c8bbea9add45fb6dd87",
"assets/packages/flutter_osm_plugin/assets/dynamic-styles.yaml": "0ee8b2f249be023fb6cb4e55d5961959",
"assets/packages/flutter_osm_web/src/asset/map.html": "9e96d8940f514213a73840721f0b5c1d",
"assets/packages/flutter_osm_web/src/asset/map.js": "c69b4d778b3081d4d3b353d1786a9ea8",
"assets/packages/flutter_osm_web/src/asset/osm_interop.js": "8ac7e3bf937ae11469e21265b15709eb",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "f25e8e701660fb45e2a81ff3f43c6d5c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a5d7457fda15b7622c14f432ba63039a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "b72c617acdf2227c8b1413215f620711",
"assets/packages/routing_client_dart/src/assets/en.json": "006f10a887beeb7207fc58db61426a4e",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "4c9d551b2f568feeefa320e57a0d83fc",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "da6a55f713a56c43ddbea232df4926a5",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "89e7a5192ac57cc4a99334142c80d546",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "db372adbcf547b4efddc9d467e28b321",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ff1204a84146dc40d0ee7f9d45068ccd",
"icons/Icon-512.png": "467b25b10a12305d0514178de240cfc6",
"icons/Icon-maskable-192.png": "ff1204a84146dc40d0ee7f9d45068ccd",
"icons/Icon-maskable-512.png": "467b25b10a12305d0514178de240cfc6",
"index.html": "2fbcfedfc5944308b1a0e1b00ffdc591",
"/": "2fbcfedfc5944308b1a0e1b00ffdc591",
"main.dart.js": "dbf9dc86a2641b1c19b5567e2494c0f2",
"manifest.json": "2002068137e3f4ef767bad9f51e08418",
"version.json": "0611ec9a45e391e766beb8ac47564deb"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
