'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "38b54c47b83b56fa4fd89cff5d9be9ba",
".git/config": "ca5dad71d0ff09d97479b0ec41cfdd51",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
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
".git/index": "b151fc8f845127257cc6d8b197480338",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "daf145294acd5476a1fdc7ec81a3066a",
".git/logs/refs/heads/master": "daf145294acd5476a1fdc7ec81a3066a",
".git/logs/refs/remotes/origin/master": "f8859c05fde84d43c04cbd3f17024fb5",
".git/objects/00/eafce6138f7ec3780615dca85aa7f661baaf54": "b270a4665b2ec5bac627e4327359a594",
".git/objects/02/50e8718a0dae23be155171a28c3d6dd8f246df": "b2f87e5342b4c83fed970171680280b5",
".git/objects/03/2f3b0d6e8377376904291212ca107411c2375b": "ea650d3ea08e9cc985708d7173ebb2a1",
".git/objects/04/c8fde367e04b0ee68b6354587e05cb14c33a60": "9b58e1de9927637e8e8a9bba6c18c6f1",
".git/objects/05/3ffc71328e9742a5b4b38a51d7f676b66ac22d": "e944e270bd6f846021ab2a992f6c7148",
".git/objects/07/7bade46b0f504674a5d5829a8dd1cf847c16c4": "1a55d26086977c42f3c753fad1c4d7e7",
".git/objects/0b/3644fbdbc9375e4a610ad4deba4328c8d2f1c2": "4fa5b51d7d84bb2f6c94ca7a92908a04",
".git/objects/0d/a6b5188031b99fcf78784ba0332705aea884c7": "e387d1438e0b89c4d5a2019ed8336291",
".git/objects/17/5b96f41048ee497bcde2678d0021f5c5c89adf": "2a1a7c6cb6d3e39b7a95d114f8790120",
".git/objects/19/766fbc348983afec14fb7de9afbf47785adc00": "41a968bb3a69a3f621ab97a3b01a3f0c",
".git/objects/19/8b09ef449f8c7bcc5b74325dc8d0d696943af7": "3be7f2975c4977e1f87cc3b5e8f3d397",
".git/objects/1c/c12301c0fc753bc0308796c2db075e21e266bc": "1fc24b60899e131b96c5642a31aac733",
".git/objects/1e/b297f10a534af493f01638dcd1c0a76a7dc74d": "058293809321ce0c1832131aa5ec7bd4",
".git/objects/1e/de599a4396321dcbf5f0bc798c2cd758a9cd45": "3769bb2bf17d7231eca01d10a64a81a3",
".git/objects/29/2f380c7c2d856b57b066c93b96adf140d6a55b": "b2d635ecad214d0233ba0c312e609115",
".git/objects/2c/f34951ff3679950e6f4c1c3d33bcdc820e2908": "849f104af199f32bfddb78fd47d6f4f1",
".git/objects/32/dacaa60d9fb2ff3cd75790687f94b31600918b": "a5303f04fa709fcd7f08d25fe74fc400",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/36/73d3d54797d2b2ce68ee78429f0613120588f4": "167cd0109eab0653a9fe211d1d08b3a7",
".git/objects/37/d1f46e95e4de0e4e66b8a8edb3066a6ab5a4ea": "2b4cb498524ab6aead3fca5a22ca67af",
".git/objects/38/86f0fa47da53591d83e39d2e7387c4ab0b1f8f": "58abe0fcab4423fe75c8370b19e69eb8",
".git/objects/3a/cb25571fae28b85f58ca42868bb2cc5e5884d0": "9b9968864211574e239e7dae4c519fbf",
".git/objects/3e/4d11f887ba217a2aa1e445ed81771fc8940a0a": "ac58c0f76c985d122b676c3a846c57d4",
".git/objects/3e/af49c6b79f496ab2c84bab2bf2ccef8b0c854e": "655d067b0a2252691428b63185ffb523",
".git/objects/3f/38fee9e8c9cab8a303ce00951ce6c915396530": "d3b011a81208c4cefd7a632ac8f11882",
".git/objects/40/8a88d5d1caeae46d389ffdcee3b50906cadabc": "f420b3ec77268bebe0c1544779902b44",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/47/4a190e8a5ec90f65aefa160f35992f3eb13b81": "f1119a2105b894682e5601f61d0fd063",
".git/objects/47/e49e9b98a6cc68a9eb50348bc004a90d185fc3": "1f20ec333fb3dcb80df72f63bf1b14e1",
".git/objects/49/dd05fb6ef6d39b86a3870c829443a8df84c4f5": "8a6759abfafe595c0684c8704fe95c5b",
".git/objects/4b/648e47390aae591e46492c63ea11acc602bc81": "e1cdb811649a5646e5a5ff589d8330ca",
".git/objects/4c/be384387b2c6576a65ec1dce4ee0c28d84127b": "04b31ad5874faa5947517ed0e063a70e",
".git/objects/4d/01625270e1520a222d173f56c409fb70122b97": "b319c4ad0cb069135ef053063e75184f",
".git/objects/4d/bb542a6b78a4c524e9fa68269a68f451c6bc4d": "4b6c6f6eebe096f79d748a472e54e588",
".git/objects/4e/1edbc6c27a1fb63a7c459a60393b63549315aa": "ed6f11c7677c903202f8d8359f05d9b1",
".git/objects/59/c51be23484e6d9d8f1900e999904b4bfd8e2ae": "6c9fe58854d2ae339d7d867bc1c58113",
".git/objects/5e/f36c00cd895f022d0f6f88ee86f25b2fed6d69": "fccc626ffb7015a46cb0686916c90734",
".git/objects/65/65446490d4731df15ba612900883e3e9ae0b2d": "3b10b63fd6df2bb28f080bde40378ef5",
".git/objects/66/63b61d2344b5dc4b20aa0bd612901644eaac8f": "2ae79b33cf42c0423947735fa4bbce2c",
".git/objects/66/f2db7a2c5c02cd2d82dc38013a3440f00c7312": "ee1466ec4a3c8ce1bb744347ac8b1932",
".git/objects/67/4bd438b1ad1429fa1bebb46ca5e90415514fc0": "9523099010f3935c593c9eddc11aaa23",
".git/objects/67/86e935af3b8457f8177390e2f1f8b8cc046df0": "96f6ba04c2d92fa952dfa44eebc602d5",
".git/objects/6a/4c99ff95e35b18ff6db89926e9d16b59b88654": "e41ecc2d4fc5b4897fb876b1d8a62f1b",
".git/objects/6b/465f29a66239a7f08ccc6d387f9ea9e0921886": "90494b40973f8b3547c6db146b9d1675",
".git/objects/71/23ed17376a3fc9ac278f33960b5e7f8dbaa3fa": "5f0b838ad0ef1541aba54ede5f8b390b",
".git/objects/72/a5d2f67799cba03c7ac87e35fbe24d0a2f28ba": "4b064edb3e9a0ef09b52787241d20772",
".git/objects/78/0f2caf556ab8db64de7d57d3bde690c804f5bf": "a7894c63b58b8f5977a002d0b7b9c052",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/dab5b73a001e1b3a589f3d70102851c1948a00": "6ecbc175fa81c1d30401093068bf9844",
".git/objects/7d/8ab0e2d7caf414497b4d4677fb4faa7fcbd6ff": "787467f686261bbb8fe6b89e96632e97",
".git/objects/7d/efb146fa3df563dc8f70fbc2a1e254e87f3e14": "f94cfec701c511ae493bac520909098e",
".git/objects/80/92ac737f0eaa0293b51d7158927eb3abf755da": "a32acab3440440d06a46ea1ab149ed65",
".git/objects/83/05f2f8bdd61cae0c3d79ff589c2af0e28fb296": "2cead78c367373678bd02b882d628c48",
".git/objects/83/147aa21888f14dda3bd34850594e0fe4ebba8c": "473a1621064a03d50bcea369fd9d28db",
".git/objects/83/5832684bf96a4163bf3f65d3e378973e20ec2a": "828c5cb67dc1801e7d5b7cabbc702a36",
".git/objects/87/5c365dd4a5e6d3c1b094c16a4d30b4a46cfe8d": "051205315c48e14615601739af62e5a9",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/e4b0888c2692cad3796ca7fa08217b71ea076f": "cc1e2714abd53b88f3d505549e07e98b",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8f/0dbc30d01fe657e854b2168ced8ea3c797aa8c": "2a030aa2d6f23fed8a48187ac72085e5",
".git/objects/9a/30bc0fe4b9128639ef4390c944709160ea62a0": "cb94230c079309bdc970db7d3f590d70",
".git/objects/9c/a4d29ceba1b27f858783e9864eb018d6380868": "98727533af770d515d942f3d4c5dfb9b",
".git/objects/9d/5f886353dcff6c222439cc1118e77eb1b007ea": "a87ff240c6e149d1ce495643e49417f9",
".git/objects/9e/26dfeeb6e641a33dae4961196235bdb965b21b": "304148c109fef2979ed83fbc7cd0b006",
".git/objects/9f/03a6d2d882d1852229bce7647919ada5767b63": "207acffed28f8fb380223e0fa30f6917",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/65cbac89ed93cc1262a23859f457a5860b0d1b": "72d28fd613e9e147998a01b6b2e4a133",
".git/objects/a3/003ea0c4e58c6a85a14991b61b3cf1366020ef": "e6c7d1d83e841e131e0d06011b21a9b2",
".git/objects/ac/97cd38287c3684da70739cc19189d4d3ffc242": "5e56cd5077bb65d883d826dbba78da26",
".git/objects/ae/56a1ea2eaf1d4f544bc126cfb92065897c8045": "1c4e1e5f09374edd5229091e7938aa19",
".git/objects/ae/7c27fc6d8960264c2b272b5261a8a32801817e": "af6c4bbd8111c45dcc579a2a6482ec25",
".git/objects/b1/8af51aa0acbd55079d44a73b79ea550f1e4fc9": "4a11d6f2079aaa91f70545b3c4d5446d",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/17c24c17f2bb176ec0829d045b1b4700df5d88": "70f58ae6a2de9ab530ab7d846a220cf7",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/87dea118de3eaa9b9dbe481c36b403da820a92": "7c4ddca1c7adeed8eec5a4c87743728e",
".git/objects/bb/a53a37ad74ce524415d7d62ea8e91c67ade5b0": "246cbf12323eb26beb5d2b05ca061091",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bc/726137f16cc3435637dc0683fd8ddbbd35bf41": "d68f59c3936fed6b99b9d23317e25397",
".git/objects/c2/46d90491abac5b678477be38dd973d4331690a": "c39c2658a4750622ed1bfb213977aa58",
".git/objects/c4/aeaaab71c4590c6834a2e6a2e2c367740ac893": "013a6128ed7000bb1db537e0aa224b8a",
".git/objects/c6/46bb2c2d5ef9e2d65457d4552a15cd7c0e3435": "0d63211045fcdc1d9b5af3f780a01dad",
".git/objects/c7/419e8c10883f07f9aa6972bf9d244f668908b9": "c306a8cb236b2f82faf30a4b3b3e3ff4",
".git/objects/c8/bedf0a790e0c5a191d4794bf5a9dc94327b355": "793f1ee279c7cca56d917fb82b6e7e1b",
".git/objects/ca/5940691cf72b4a62b44917b2849d457df3b763": "ffbeeebe3c2b480e083059e6a4cea9f6",
".git/objects/cb/cfece077313f659db6114115a48c0f0d290d45": "04bddeffaf3e9c724786ce5ebfb85ab0",
".git/objects/cd/328cda908af08c1413d699eb3506d7d1f8612b": "909a48e45a2970e7e5de998e8c28c790",
".git/objects/cf/80d19e0e78f99857783a26ba562c0be11b1efb": "db4ce5101fb14d473834d13762dfbc66",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/16e62071a9bb5f6b757b7ab7b9b9b4a435f05d": "12b0cbe63ab511fedb5e31b34ea393eb",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/480080f9c9d40a8bb1e835a1f59dd6740c0e87": "e91eff2f2c407c8b7c51c86da58bedca",
".git/objects/dc/50d5873dc88909b5b52eddc211f8bbf54236f5": "168a84ee04ed01c6e1f740091804dcf3",
".git/objects/de/a704b658b3bcd9a8ebfea7e1d8ee1431c51df7": "c371de3d281e83dcb9cc2d200f897745",
".git/objects/df/cb6a201b2f958dca9172fffa0c05a6ddf1c3e3": "cb75f13c39b6ff70367aae167c645c5a",
".git/objects/e1/32036ac7dea727bbbd5dbea8db60a89f2f5e74": "950a846b8b0bf1d2cead45ac7ce655ee",
".git/objects/e2/a7138fdf4957d515a222b263b90c6e2a3911f6": "7c82f105553a14e1f6b52fffa49cffd2",
".git/objects/e2/ff5865b192241d53935e77de70a4e6dff2847a": "cad1058aedc6c21a518b3cb00af21fac",
".git/objects/e4/c2b53fbba02f536010d0a1b9c2a3228e8aa34c": "0d330ec52279d41979f472ab3cf6a363",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/7f96acfa6feb8ef6096817536d37a6c945095c": "c35448e06ee79e2ab90f62bcf97fb2e9",
".git/objects/e9/2e0d3704e35f7b248ca680ec7fdd96eb212211": "4b6ad9edf08aa12bea2291e709beceee",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/972d89b081f53d07925ca8485e521c7d755a88": "16c8a0e260b135b84a6384f74976b09c",
".git/objects/f1/0a07db7cc295bafe4e9a0ceea8417433ecbb20": "12a7bd69cae2b3a46f4545771c01d159",
".git/objects/f2/3cfa51beb69081b81511447b2572832d1d4c1f": "f42b05bba0c391a7ead0b6149df89f2d",
".git/objects/f2/baa0c6d18da8508872c01f2f507be862366967": "727aef8012e9b42c8fb1ef269ac66000",
".git/objects/f3/d9662f8b3d5feed66840dca1c29e8c0d0f3ceb": "59c3a0cc3f56ea3f52f8e74a9aa3bc5b",
".git/objects/f7/9bf38aada2756d306e50a69fad3e41eef54ca8": "63254e0e1d3faeb75224842a3cb09b68",
".git/objects/fb/34bac3a2d79cc6fc14c1e872caceafc463e882": "d954abdf28070f2a3b5d9769d3be8987",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/refs/heads/master": "b8d1225736fae16d45035f06e9c8e2d1",
".git/refs/remotes/origin/master": "b8d1225736fae16d45035f06e9c8e2d1",
"assets/AssetManifest.bin": "5e44eba95c4b539acf20b9915c6baf38",
"assets/AssetManifest.json": "643eff16a9426e11274abe200b4adeee",
"assets/assets/fonts/Baloo2-Bold.ttf": "e6ea43c5e41884cff68110bb88dbdbab",
"assets/assets/fonts/Baloo2-Regular.ttf": "f8f89a31657b9ea44e160870759723a4",
"assets/assets/fonts/IRANSans.ttf": "860ad172ae5c052dea861911dc17b92a",
"assets/assets/fonts/IRANSans_Bold.ttf": "da941c58b16727d4339a8c92c46f2704",
"assets/assets/images/back.png": "917dab6a2220c667fff3c7c778c2369b",
"assets/assets/images/edit.png": "024e585611e6e7b3c0cf5779191bab7b",
"assets/assets/images/empty.json": "20e62229847226f1b54b605cc6df8d8c",
"assets/assets/images/login.png": "976981285b1089b034f1f7df572d5d5f",
"assets/assets/images/logo.jpg": "051675cbfae8a38dc659cf73c9181fab",
"assets/assets/images/logo.png": "0ebde89b374d06442c68d68b52eb09c0",
"assets/assets/images/noimg.jpg": "5fe6d6d77dfb92843375f778d3790f5d",
"assets/assets/images/p1.png": "94d83c9e83aefd485ee7dd4bb180386c",
"assets/assets/images/smile.png": "ed9b24231ae3a8fdcbfecfddeb1e161f",
"assets/assets/translations/ar-QA.json": "81cf935bbc7cf2bc0a6b9ba6448ed2b0",
"assets/assets/translations/en-US.json": "483fd8f42a67fc68a3ea083ccfbfc2de",
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
"index.html": "9969de4c9d6626d62fa3f11c8fc6d1ea",
"/": "9969de4c9d6626d62fa3f11c8fc6d1ea",
"main.dart.js": "30e983da01aac227cc20beaf1649a3d9",
"manifest.json": "05a33360f87b4fed51800d4de1dff529",
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
