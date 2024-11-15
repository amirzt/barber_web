'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "70bf8deeb48e0e6e9bf930f8d3bb1dd5",
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
".git/index": "ea936b7b5445a7d70e06328da0e84b7f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8ad29ace91de7b984d9c8c0ccf5b7ba5",
".git/logs/refs/heads/master": "d90315a93af38c3379951b16c073c8e3",
".git/logs/refs/remotes/origin/master": "0350d13be368c0fc22dba2cca6a8e107",
".git/objects/00/a6f97b1a8c1d91025ef7ea3675eeeebc8ddec2": "ef6c9a64c9117cc645e5bb33ffa136d6",
".git/objects/01/3b9660362284b4c701a91d60cf7fda6f7ca738": "0eaa57632e582ed36539e1a01568794d",
".git/objects/03/c86d0036a510a3cd181da756df2205a8da1d16": "83b0142053a6edecf055fefc7bc9fc2d",
".git/objects/08/189d22d19742db8edb55a071eced56ba7c9928": "9c2dddc971b6a8cdbf52b15a809eeef8",
".git/objects/08/39afbd81ce90bf2b398ce029aefd9c51ae8574": "d31864ce5462e4d623d742a4c802d7fe",
".git/objects/08/4a11118eaa9bd5234fdb0d4595cc7b3e92c73d": "390635df805920ab8f5d94976950a17f",
".git/objects/0f/a5a6f0550b41743f75c49c58f3e22711d6a266": "d420401cbe3ec1ed505f17177dc3c2a9",
".git/objects/10/e5d32c2b67b986811199f2aa29b9d951d66f1c": "72f1c6dd65466bce35c92eb385b31752",
".git/objects/10/ef77cf99946d00a91d34a3405c20de38afa209": "800ad2630862cce73fa66c62b98df44e",
".git/objects/13/a8f19cc5c69b3ef0c79ef7028c8ca00bbdcd83": "6b02f48e2d5893571e76b33768283f0a",
".git/objects/14/9b42df514ed6ddab603ac19cc5863dc1c61c37": "4e4da9cf38c7bcfbc95900e3091e875c",
".git/objects/16/c839fd30f11437e6e53d771e338a64afe03c1c": "e99762314138fd905b0f1ac405a3ee26",
".git/objects/17/efbd94c2102b34fb858b5e3196875385c16a07": "eb328a544ecda3766339a2e78607f624",
".git/objects/18/2a1b0a97ca529a0ecd2487372e5f6d54f0bdf4": "4cb833118d4dafeab0d32e62c3486752",
".git/objects/18/4a0d6c0deeda999b8c2a9d5c8d2b632be4bf0e": "8225b6fcc97cbd72d575275bd74af78d",
".git/objects/1c/8d9e7351c04eeae20a72e2f4424768c6878142": "e16c0ed6975e1bbf15c20dcc8a291133",
".git/objects/1c/ff6f94b81c214915f168c03cd2bf01f5ab5531": "101be5b3385f215d72eb233ff0f70579",
".git/objects/1e/b0c7130cea2ea447e7d1c7b42e3bd871233a0b": "29942960d2df020d06e2df3067c01c8e",
".git/objects/29/71c897a21614f05a7a49fe72a9cf384e18beb3": "110b0b2e7b0e7ad01cdcc502e57cedf6",
".git/objects/2a/9caafa6eaa60f33a0cef59cbe576d94f5b9446": "a8fbd41b78f4ea69bcdc05783109ffe9",
".git/objects/2e/76ccf91162a6b6efcd03921cab4454cd10b70c": "459871a16141f2e264d068fabcec92d9",
".git/objects/31/071c7b17462424c322ec2b76c70bddbfea0bb4": "24ab926cf2967e5e80fd5fd730d97177",
".git/objects/31/fb53f4ff7d49cc60d18ba8ecbc108fcdfdc4d6": "a742ac077f38a3885e11d2748822a79e",
".git/objects/39/f1c025caf9a2d3394b74a375e4abed4df119d9": "6c84be397210801ca3e87a9ee0e5b8fe",
".git/objects/3e/266192fa29f59f469d8ce94d0336f9e2855fe7": "a933193b023b08fd72f3a924ceb24f3d",
".git/objects/41/3de73f36c85ef443f5146ab80bab837d6484ee": "0a649284ecb858a2b1fb0c7cd249a7c4",
".git/objects/43/1e64ebe23eb5cf2aa3aeaffc2ba39b4da5482d": "0ce99388651444099635a51ec7dd86ec",
".git/objects/4a/a5ee6ed1e316db5b7d3b12d1863fc39490517f": "a8d7dc3982bf2f811825f51a2a71326b",
".git/objects/4a/da8b083438d2a1c679add98522b7e6a1a0a95f": "8777d482930ce59f234da7f389bc950f",
".git/objects/4c/382dd5126440c0f2fdcd5742cb59bea9c3e6c9": "e14c422947c8399408da1c5204511a76",
".git/objects/4c/621af1296aa148927b5a85bc8da30389a372e4": "0c7d3f773f91022fbf119ab97ef5d215",
".git/objects/4e/d2b9dd30373c7932d8a659e76cb97ed7b0dcd2": "8a85ecaff39c1addf93ed7386604053c",
".git/objects/50/4d407e5f71284caa892a8eae97dbc72ccf1e89": "12db55117b031923274db148cfed4bf6",
".git/objects/50/c5f1b832491648020add7561d0fc0989b68589": "aaab47d7573ad80232663623d58725fa",
".git/objects/56/2bfa816a208391e860bfd4729ba72387e4259c": "a857bfa6b6c9006ca5dfd509c71b4a14",
".git/objects/5c/9a1afbb905533c61d6d085730c2558a40ae393": "bf68efd30c4381cba9d2c54bebffb757",
".git/objects/5d/ffd305ea3be4b2928b00f9e1783ece7fae1288": "dd8090fbc7c2237e5413d4a92af4acc5",
".git/objects/5f/4ce3e7ac7c28b824475233b18d038e42cd228f": "60a00912723ef3444b7261396b14a0b7",
".git/objects/61/d1b55423ce623bb5b046a5700d49eb83eae14a": "eec3ed1643a762fd002c126e86abbc9e",
".git/objects/64/fb868b3c999e6786d5f1f6910226e1b6482d44": "6939fb6113df1d3817bfe030f87fe3e6",
".git/objects/67/7a81e02cf5f6e077a93aeb78b227c549128679": "5a134b43ed28cf3a6e78a37bb767bd89",
".git/objects/69/2067b2069b07f5db8b169b4360b59879e71dba": "a3dd10e679399b062b5a480e1c688dee",
".git/objects/69/ee5339c17cc0c9a0ad4fffa99bbc4912629fbb": "d3b6be5564013e4ec7a9a186f0b3b7d7",
".git/objects/73/7bee2247fb85bae675d5036f00f87f6209072a": "e5b1563f71e060d158194ee73609ad7a",
".git/objects/76/14b55d17a0be936e39742781a2267cef7a7f29": "a5155395828589794203c6def20ff595",
".git/objects/7d/30f062f921f8ff5e484e6df87c979118628a62": "a2afb1a56d2a18ce55c9f7c55a0cc0d1",
".git/objects/7e/215decf9f91f0b2684a050d967bf688f6db6ea": "d36f1c3a827f089437b726d4b4c60f7b",
".git/objects/7e/55654a467a242240af7200638401e2903eb2a3": "42398a57e788c496c6d3bba1c5b7f09b",
".git/objects/7f/b0c6e21192b9154f0f631dc8de2977eb82a721": "5f865d74fb0912a284a10b0ed17c3fd4",
".git/objects/81/894b334f38fe9082dccd922e4766216ab90e39": "8498a0b6f0904ddb852ac3167a67ca38",
".git/objects/84/ccb91e143e534888c767b13f65c40837ed2350": "afe1529402738ff6146f1c55fd23d4b5",
".git/objects/87/5c2c4114436e0ce68735462d3f39a7b7730922": "1122f2febab70bdc642e659539099d84",
".git/objects/88/23a729e79a362edb6fe831afa12a7602ee22fd": "d09ae8b36d6b04e20e17670ad827a8d3",
".git/objects/88/9a642d7946ec154af198a10087e90bf106eb95": "842b91544e61fcaa7036b07c8fe64164",
".git/objects/8e/5ac1fe552fc2aa465adf7631d836194b7ddb7d": "44fadd0c0ef8241478af80a80ebf2228",
".git/objects/93/710b13fd52e99a2210833d1045b3dd127209c7": "a6e97f4fce6ef49bef7856cc6f531cba",
".git/objects/94/9b5d7549c16a98a477ed6165db7ce37139ede7": "1e12a851dbfff4f4135b04d22cb6b307",
".git/objects/96/f79b30cf2672286209d2474cacfba2909f257c": "0547a99686e5685fdf494186ca0d085d",
".git/objects/98/73ad3aab2992b1fcb35ccd9c1b39063b244749": "31cb529c561aec2393b1f7f692e6a2af",
".git/objects/9b/e232b74f9563c0996195445e54408e5ae7fd09": "6820af4298559826c8133a4713e59d7d",
".git/objects/a1/c28d93f2649a7173e261c3fa3a348d5454d22f": "bdd6c71e701c9caf7aa8a816b8748676",
".git/objects/a1/f91044c3ce11e010202ebfb5b6cb84a584af8e": "9eee048c5f24bfa23c273a1389794f9d",
".git/objects/a3/424bd38ccda0471f925ee058f39e97ac51d1b4": "bbd59008ab7063ad12ac71f1c7629eb4",
".git/objects/ab/1775a04c666db927f61823dab1fcadcb66ab2d": "4053e2cedc9f3097d527729749446a49",
".git/objects/ab/7546dce68ca6631c56e79f4dfc958045f034c2": "eff75abadf50804429adbfb2ea059c8c",
".git/objects/ac/b0dc52de3f5d56fd242591ea32d63614ccbc25": "ebcb7acec45d237d5fa0727bc607228f",
".git/objects/ad/3e407f722b43215f704adb901b0cc29331ce3e": "f76ed28e77e1960891c6453527267650",
".git/objects/ad/a841f30bf41251307d5ecd66c48bde79292595": "ccf5d4c5cdc07bfd0148f0a180c96185",
".git/objects/b6/063c0c7067a5d97bbb9e1cae4e628fc2f6790b": "7b40d1a58e9f5001fec5ed246fd9c39c",
".git/objects/b9/a2d325a8b6bf26ff96c3cf0bb28bbec41716ce": "3ddbb0718174c1374309adc41892e1dd",
".git/objects/ba/4d510a604cc5c1c4c29aaf3d80410e6e0db14a": "c1d3fed5cb7f25086c9e35ab3ed65fc2",
".git/objects/bb/33cdb04969da2dd335a384c006e38b925eb340": "ee43137d7ca98dee994d85dafba95f7b",
".git/objects/bb/f5372965b72051509247f7bf90973200b09a00": "9c6e1de9b00e1ca5c74ca2cd23f1552d",
".git/objects/bb/fcb404e7013912f115c1c287bcdce30f68219d": "a5d7dd183c37b079580b371731dd99b9",
".git/objects/be/26d59ea3c810361b06116378c757cc95d863c0": "ab830656b8a88b9dcf4d85fe59dacf25",
".git/objects/be/95db5d25ec67ba0db5176479f557227668167b": "718b15b82d23be0fa494c5f76a8f2c38",
".git/objects/bf/429ad0b9eb943b11aef7482ff7809414fb8d68": "61ed68e5f69f49dade742f2917102eda",
".git/objects/c1/27a2270c64324826afe456c447597bb2255013": "f859e964210a30d6d340c416467133fa",
".git/objects/c5/cc05b1215ee810dda17493778691abaaad726b": "9bb7f1625fc285e28561497996ddd4be",
".git/objects/c6/06aea571acda6cff883908726ea64c779cc767": "e8083a9314ecec61d14a9d8c3696bb09",
".git/objects/c7/26e662c623bf8f595fd1fc45175f0382cb9f3e": "aa12996be63416b372210feb09b20bd2",
".git/objects/ca/bce9d4165bc7043b958b8e9d4e9219671793f8": "aadbaee968c3becee414491c8defeb28",
".git/objects/ca/fa8fec23b0d4c056c38c5e6e2dcda9ccebd553": "0d7d2d549c7538db5fbc48ba3d9a0a96",
".git/objects/d2/5010fade8aad48acf415b2f6132434aea7bcc9": "262141aac3a2e5def3521acbec87b3c9",
".git/objects/d5/f009adffe93dbf499195be7e445b9b469225d7": "00d574adbc2320a2d18043955eca1383",
".git/objects/d9/e319d8d263c1338be2b5633e5386e5da54ca8c": "031e899ee06b281c476ed468843128aa",
".git/objects/da/a6961bf30c9f4e04007495675c7d22d0a28d34": "330133bc018bb54000393fba2a85cd8c",
".git/objects/dd/6b2e229cb9fa015044bc9f850e288370cc1e51": "7b62b9541f5530d5907ffcf470138232",
".git/objects/e6/55e79c862846844432ac4a09d8f0dc1f9d1e7f": "30ad78dcda7aa289ffcb6ba6de063057",
".git/objects/e6/c659837416796ed341032b037d36427aacc442": "3ad3886991e13e0689ca1dfc0781a6eb",
".git/objects/e7/b2c9531b134abb5178b6cf596e52e958a3771b": "7222a8332d35cbc765f8dc146bd31e73",
".git/objects/ee/b35b7ab029fecbc42eea7df3a540ca99f6bada": "ee4cce591e046cc9f65af50de8e07865",
".git/objects/f1/218120323028aae446d8e6536513a7a65b31c6": "7eb90abd27709aa17baaacd550ca3f06",
".git/objects/f5/995cb226aeaa9fd6b9c45b24563ad985433cfb": "0093965f844789ae4f80b7bb887e386c",
".git/objects/f8/4d72cc41b8c4fdc865414b033f4640db3e56ed": "fa7b05d9d833b79dcc0ec1c382cbc1fc",
".git/objects/f9/223cc0408be491ba9207e2cc025b560025a9db": "2ae8a068c012c100300fad1f101d3719",
".git/objects/fa/40c38a8b0ee2869587b3ae1eebb72c6edf6448": "a6f9a0e85704e8161800b8fca952fc90",
".git/objects/fb/dd1731c69e687668521ef2443c0c9b2755b0a8": "1e21756aa4951270ba32403f2e111f2b",
".git/objects/fc/393941ce242f7d42d2514f53aaad4f568bd69f": "4a03bfacb08155abcc2a94f6d1043f89",
".git/objects/fd/3945ea240fc1d2cca72a0c55b84ef4021f02e9": "4d56fa742ee063c3731b41629760a2b3",
".git/objects/pack/pack-03d4b5c73e4d7c0efac7435bc8933de9689b279b.idx": "9f8b1d9d38b050ca4012fef6dd9eaeb6",
".git/objects/pack/pack-03d4b5c73e4d7c0efac7435bc8933de9689b279b.pack": "9741f25729b1e9b0156bca6195f94e2e",
".git/ORIG_HEAD": "07a0590701886a7f801da82803e9a6e8",
".git/REBASE_HEAD": "5c6d3b459a678e32dd42ac463792cd2a",
".git/refs/heads/master": "9dfcef2424269242c0b5043a3e9a23ae",
".git/refs/remotes/origin/master": "9dfcef2424269242c0b5043a3e9a23ae",
"assets/AssetManifest.bin": "81d148635aafa9618d757a4c4eb13141",
"assets/AssetManifest.json": "e45abe92719c968683a5819c5ed5d6ff",
"assets/assets/fonts/Baloo2-Bold.ttf": "e6ea43c5e41884cff68110bb88dbdbab",
"assets/assets/fonts/Baloo2-Regular.ttf": "f8f89a31657b9ea44e160870759723a4",
"assets/assets/fonts/IRANSans.ttf": "860ad172ae5c052dea861911dc17b92a",
"assets/assets/fonts/IRANSans_Bold.ttf": "da941c58b16727d4339a8c92c46f2704",
"assets/assets/images/back.png": "917dab6a2220c667fff3c7c778c2369b",
"assets/assets/images/edit.png": "024e585611e6e7b3c0cf5779191bab7b",
"assets/assets/images/empty.json": "20e62229847226f1b54b605cc6df8d8c",
"assets/assets/images/login.png": "3be3a8871fe0a0796bdb427904ac482e",
"assets/assets/images/logo.png": "7ae0c84690fbfa773394686ac4daabe0",
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
"favicon.png": "a6c86108ac063f253b7647f5fbda8e4d",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "3909f5f22aa7a34432c29a7ee59bb327",
"icons/Icon-512.png": "012f65266d396484e53c42de69360231",
"icons/Icon-maskable-192.png": "3909f5f22aa7a34432c29a7ee59bb327",
"icons/Icon-maskable-512.png": "012f65266d396484e53c42de69360231",
"index.html": "02efc9b8b633a9cbf1349b980a6a4ceb",
"/": "02efc9b8b633a9cbf1349b980a6a4ceb",
"main.dart.js": "eda7c5eae226baa4eb939b5b3b98aba0",
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
