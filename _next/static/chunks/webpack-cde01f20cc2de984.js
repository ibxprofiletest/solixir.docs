(() => {
  "use strict";
  var e = {},
    a = {};
  function d(f) {
    var c = a[f];
    if (void 0 !== c) return c.exports;
    var b = (a[f] = { exports: {} }),
      t = !0;
    try {
      e[f].call(b.exports, b, b.exports, d), (t = !1);
    } finally {
      t && delete a[f];
    }
    return b.exports;
  }
  (d.m = e),
    (() => {
      var e = [];
      d.O = (a, f, c, b) => {
        if (f) {
          b = b || 0;
          for (var t = e.length; t > 0 && e[t - 1][2] > b; t--) e[t] = e[t - 1];
          e[t] = [f, c, b];
          return;
        }
        for (var r = 1 / 0, t = 0; t < e.length; t++) {
          for (var [f, c, b] = e[t], o = !0, n = 0; n < f.length; n++)
            (!1 & b || r >= b) && Object.keys(d.O).every((e) => d.O[e](f[n]))
              ? f.splice(n--, 1)
              : ((o = !1), b < r && (r = b));
          if (o) {
            e.splice(t--, 1);
            var i = c();
            void 0 !== i && (a = i);
          }
        }
        return a;
      };
    })(),
    (d.n = (e) => {
      var a = e && e.__esModule ? () => e.default : () => e;
      return d.d(a, { a: a }), a;
    }),
    (() => {
      var e,
        a = Object.getPrototypeOf
          ? (e) => Object.getPrototypeOf(e)
          : (e) => e.__proto__;
      d.t = function (f, c) {
        if (
          (1 & c && (f = this(f)),
          8 & c ||
            ("object" == typeof f &&
              f &&
              ((4 & c && f.__esModule) ||
                (16 & c && "function" == typeof f.then))))
        )
          return f;
        var b = Object.create(null);
        d.r(b);
        var t = {};
        e = e || [null, a({}), a([]), a(a)];
        for (
          var r = 2 & c && f;
          "object" == typeof r && !~e.indexOf(r);
          r = a(r)
        )
          Object.getOwnPropertyNames(r).forEach((e) => (t[e] = () => f[e]));
        return (t.default = () => f), d.d(b, t), b;
      };
    })(),
    (d.d = (e, a) => {
      for (var f in a)
        d.o(a, f) &&
          !d.o(e, f) &&
          Object.defineProperty(e, f, { enumerable: !0, get: a[f] });
    }),
    (d.f = {}),
    (d.e = (e) =>
      Promise.all(Object.keys(d.f).reduce((a, f) => (d.f[f](e, a), a), []))),
    (d.u = (e) =>
      "static/chunks/" +
      ({
        260: "336436a7",
        352: "604fe040",
        942: "f1fd93f1",
        1659: "a4f73d83",
        1917: "58f38233",
        3543: "6907ee1e",
        3702: "722f2a85",
        3849: "87851ddc",
        3897: "e7ff04ee",
        4521: "027c92e8",
        4760: "625df323",
        4762: "b3ef812f",
        6866: "1e8efba5",
        7401: "baeaa4ff",
        7955: "77552312",
        8561: "aeb96ac9",
        9223: "08e9f8d4",
        9430: "59a51a4c",
        9992: "b74732b4",
      }[e] || e) +
      "." +
      {
        0: "f7ab197d38a3ae27",
        57: "df41a05423c02161",
        84: "1301dace631c88e0",
        105: "0769a0d84f344940",
        163: "5264f5dc8d3c99b8",
        222: "240446843dddce08",
        247: "59b21577d35574d9",
        260: "2794c6fa3350384f",
        336: "92dc531d7e6bb6cc",
        342: "4594b0dc62537dde",
        348: "fcb149943d8402ef",
        352: "6773c0e78bcc0717",
        363: "7788f90efd955a78",
        401: "c2a2583ad1183ca7",
        437: "5c627d2fd59b9031",
        462: "2afc1191dbd53696",
        511: "2c52748b2a7053e7",
        527: "7e5bc7eece29f986",
        593: "ab2af51956a3f03f",
        610: "837e5102eb44b073",
        616: "56c69ec76cbbbde6",
        618: "8de3722943c75233",
        710: "eda4deed7c6d9e16",
        771: "bc2f35480d8ba1ac",
        831: "e61713c3312b3f09",
        850: "81ab57057f515705",
        914: "f3d1fd7d52c7fb39",
        940: "fa29a1c02bb9f5c8",
        942: "3ab62b400f3967cf",
        1012: "d9374f92598568f3",
        1026: "38bd432e05ca07a6",
        1112: "0928f835b2921804",
        1197: "30fb5bb67d60e931",
        1200: "7c3dfe6641b943e1",
        1210: "360a053bc4280309",
        1227: "6104f3ffd21d34bb",
        1332: "2ac266bada3daeef",
        1417: "88da5c62fa955dc9",
        1440: "fbac3d7e755c8343",
        1446: "3192328a09f3e8a8",
        1448: "6d5ecf23dd2bcc70",
        1451: "b3c1d43c9f6f95a7",
        1464: "269147836a0e0dbb",
        1466: "39e57f458e2650e1",
        1476: "b037fd658b180b2c",
        1552: "997e419296b52a5a",
        1581: "f7766ded3a3bc0f0",
        1584: "1bd3187406adc1d2",
        1656: "2831a046000eb397",
        1659: "708fc1fa24a3b325",
        1681: "3d9bc0f30f6260df",
        1688: "07aa4a7d88ad4cc8",
        1715: "fe94811d580e8305",
        1807: "2d6482cd4fde0d46",
        1889: "a586bd4cef81d978",
        1898: "1d3b5fc1bd49d3f6",
        1917: "4849b1932d1e8dd6",
        1976: "fd26bcaff1d60bce",
        2033: "9c794cb7cdccf5b2",
        2084: "fc7199fe81c96e95",
        2137: "ec5a3da2b70acfb1",
        2190: "d0b41bd2c1801283",
        2197: "1f1db857b48a3f91",
        2224: "591caae337a56296",
        2247: "a4676c8e819a5491",
        2303: "4e4a71cbc0b3e662",
        2328: "2c390226d764770a",
        2413: "5aa1fb00b53a03a4",
        2421: "88df80321b7f1ce6",
        2425: "f33cded5823820cf",
        2437: "3884337ebbb38f88",
        2472: "43dc6e06d6c843aa",
        2487: "a8d4fbb3704a20e9",
        2489: "95df35bb9680f1ba",
        2510: "35e90016bc836f3f",
        2540: "8b3640beae39e649",
        2563: "cb428a90eb669714",
        2586: "4290d2cbdbae94d1",
        2628: "f25d68344bbb1984",
        2657: "ad4f140047feeee9",
        2658: "c8d90a820fc8a1e6",
        2807: "5749c7a8ea8222fb",
        2833: "7c871eeb68eda7a3",
        2839: "d034af9729fa9023",
        2889: "0c911f5a32eabda3",
        2894: "1530b01c24ee2104",
        2908: "1d3aa09b993c8685",
        2968: "04ae46e143bf3628",
        2998: "8c753d2557b8c045",
        3026: "9cc7dabdcdaa0118",
        3172: "549da2bf9e769dc7",
        3201: "fb2ff6dc1a724a25",
        3215: "762e57b633cc6f9a",
        3262: "8940caf308a0a95f",
        3269: "c95f45dcbaa1047f",
        3272: "10acd9d5ae8c0a5f",
        3296: "d1c6eadf2e9af0ed",
        3335: "78355d5525150399",
        3346: "6f0d422ed5654a6c",
        3353: "9720a45cabc393ad",
        3543: "6a302378c8b627df",
        3570: "50c0efe4f54b06ac",
        3648: "e3f9db5b22f3e33a",
        3702: "1d6f3f0869dbe205",
        3737: "bd96f98f24374740",
        3780: "76cef5c192e6d487",
        3809: "abee7961217f2a74",
        3849: "16006228f714f699",
        3872: "808838d041d4f977",
        3873: "d77b9935d3ef4dc2",
        3877: "ec865914e0b63270",
        3885: "b606a61a426e5160",
        3888: "b871d5da1b827a7b",
        3897: "7a70f903fc8adf0d",
        3974: "272e19bb8c21feec",
        3992: "6c50614ff3b67ed3",
        4020: "17a4a086b3c80aed",
        4057: "b5690961a1b282e2",
        4103: "412a0080d5891901",
        4118: "22242f3a33bbee3e",
        4157: "e74dd9739b82d5a3",
        4207: "89b865a80426be38",
        4288: "c0953eca2bada53a",
        4337: "246b571ae65458fa",
        4457: "aa69ee2cb476fdec",
        4491: "1db84c987c935bff",
        4494: "5b5a034bb256e527",
        4521: "791bc9cfed88c992",
        4548: "c9452f7ebc1f84b9",
        4629: "10ed2f466142cec1",
        4641: "d9fb18f312ff8fb7",
        4734: "a8cb19da35b2a4c3",
        4760: "7646e55e2f96ec70",
        4762: "091d40d0669256dc",
        4774: "860e990983a77b8b",
        4810: "190e712b50c66758",
        4820: "d545e2a76ca19120",
        4897: "d2cf2e70a323ef6d",
        5043: "3ec55a501ad272e7",
        5046: "8bed3446db1c2f0e",
        5084: "73a162a811594445",
        5172: "565a0e8117618ba4",
        5265: "c8633d995ab7362e",
        5332: "8f8806fffb8b462d",
        5403: "5e5f8ef0647c5b3a",
        5535: "b05cfb8cea4c306d",
        5547: "a1fcd956089366cc",
        5571: "952ca55784b946b2",
        5656: "e98980b915a92584",
        5710: "caf428022a20b16e",
        5731: "19598a076a024bd7",
        5774: "e63b4becdab0fd55",
        5807: "a6d5ced53864c8d2",
        5832: "565fb2ec47baa9ef",
        5833: "631f4a71434b51fc",
        5952: "11a8cfab7decad3a",
        5993: "093034c6b5c61db8",
        6002: "b21fc09a9ea56360",
        6031: "d5739fe813cde5bf",
        6177: "ac54556fa2304dcf",
        6275: "10214d2c0b7d3d28",
        6299: "c64746a246bc98a6",
        6326: "41897d9cbd64bc04",
        6346: "927406e6553a37f6",
        6358: "7d4ff852d3e80878",
        6372: "7c7e30196a9f8ad9",
        6375: "bc947d56b0a35550",
        6384: "e6c8e154cad3a41c",
        6430: "81551f9264e8663c",
        6443: "92631cd5b22ccf1d",
        6450: "0ad9aed60e22d186",
        6477: "381fee0bd012dfdd",
        6542: "7c27c7fdc35cc52b",
        6591: "1c3206d4fa9931ad",
        6600: "0d85ecbbf9b34482",
        6601: "7c388a47c36071c1",
        6626: "fd5ec8157f032ff3",
        6647: "d5eb4c4cbee39c72",
        6662: "0d96fe91fc68e951",
        6801: "a9306aaeb6845d2e",
        6820: "fa6bcec744189868",
        6866: "f50ec7fcec1f6992",
        6909: "cf898a57987066d5",
        6932: "e379c749c7870deb",
        6964: "dbac9c1eabb81a98",
        7014: "3cdfefa4919e2aa7",
        7292: "22e8e4dd2a221265",
        7371: "dfca1f4fa665ee54",
        7399: "5c9cfc489d679207",
        7401: "6fa160e8f741985a",
        7503: "c311bb4fdebca370",
        7564: "0f78cad6a851effe",
        7568: "0e8feb351397fee3",
        7583: "2cb5aeb6d6892687",
        7623: "dfc6e2d68a1906b4",
        7625: "473ade8a255ab976",
        7636: "bb43cd04044bc018",
        7689: "96350adee6b4488f",
        7747: "555333efd4b586a5",
        7751: "dc9659eb907385b0",
        7813: "a95b5714fbc5cbd0",
        7949: "cb0d6b4d1badbb7a",
        7955: "61bd9a6b78af2e80",
        7999: "5326b21a9bec7d01",
        8114: "aaa07d59b060486b",
        8158: "b4a6db671c49cd4b",
        8168: "795a75ff8f01ee65",
        8180: "e4b0443fc1155111",
        8198: "73c9459d4991aafb",
        8305: "bf43701cc60d6528",
        8377: "c66202d2977c8453",
        8397: "ad761e8510149ea0",
        8481: "00daf7d2233aaafc",
        8489: "d6da9701af2401d6",
        8502: "c3d8fbb9c83e0cf7",
        8521: "f8b1a20963ee78b2",
        8561: "f4ba9f1a1b57f9a5",
        8715: "0bf18c53b369d95e",
        8787: "a89071a15429b8ba",
        8829: "e0af27ae329ecdbb",
        8857: "d568beaaf5672f89",
        8881: "196c7e6cc7fe2727",
        8892: "7f564c1d23ab15fb",
        8922: "c82cc8adf9c59a96",
        8948: "2d2eee1f99e59dce",
        8982: "1895e953d6579a14",
        8984: "fcba120f6df4bee5",
        9087: "a8cf7166f45ff113",
        9107: "79a72154be25bc4a",
        9127: "f69716367c476aba",
        9188: "84872ef6b65075b8",
        9215: "3c0e6a3bf8d35e43",
        9223: "214345aa46568a4f",
        9226: "7271b9dc05250286",
        9234: "1f54c88544b78889",
        9250: "9e363ef53376d315",
        9272: "9b14dcffc9937880",
        9275: "2831a046000eb397",
        9306: "c145bab440afa770",
        9310: "9a4c4f84e06a5eeb",
        9409: "5bf17c1c99c3b41e",
        9430: "b6c8e0c8fe4cdb65",
        9513: "a025be5dec180742",
        9529: "b579f7ea53f9629a",
        9548: "db30e37b600bad9c",
        9549: "1e9a562e66c693fc",
        9612: "20940638b2388192",
        9631: "32a015b225736896",
        9645: "2bf47c8826c883a5",
        9656: "4a73ceca2158e54d",
        9663: "bb698c7cdfd5a000",
        9790: "373f8de601db2d36",
        9820: "adbc27753f814a0a",
        9898: "5ded265f5a6892d1",
        9936: "3c8f9753b13cb384",
        9965: "f7ab9a5b7b6de556",
        9988: "9b9178604018b3dc",
        9990: "e6053ac5cc6d14a1",
        9991: "0d15289d69d97dc5",
        9992: "9d250dbbc88acc5a",
      }[e] +
      ".js"),
    (d.miniCssF = (e) => "static/css/354a779443270128.css"),
    (d.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (d.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a)),
    (() => {
      var e = {},
        a = "_N_E:";
      d.l = (f, c, b, t) => {
        if (e[f]) return void e[f].push(c);
        if (void 0 !== b)
          for (
            var r, o, n = document.getElementsByTagName("script"), i = 0;
            i < n.length;
            i++
          ) {
            var l = n[i];
            if (
              l.getAttribute("src") == f ||
              l.getAttribute("data-webpack") == a + b
            ) {
              r = l;
              break;
            }
          }
        r ||
          ((o = !0),
          ((r = document.createElement("script")).charset = "utf-8"),
          (r.timeout = 120),
          d.nc && r.setAttribute("nonce", d.nc),
          r.setAttribute("data-webpack", a + b),
          (r.src = d.tu(f))),
          (e[f] = [c]);
        var u = (a, d) => {
            (r.onerror = r.onload = null), clearTimeout(s);
            var c = e[f];
            if (
              (delete e[f],
              r.parentNode && r.parentNode.removeChild(r),
              c && c.forEach((e) => e(d)),
              a)
            )
              return a(d);
          },
          s = setTimeout(
            u.bind(null, void 0, { type: "timeout", target: r }),
            12e4
          );
        (r.onerror = u.bind(null, r.onerror)),
          (r.onload = u.bind(null, r.onload)),
          o && document.head.appendChild(r);
      };
    })(),
    (d.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (() => {
      var e;
      d.tt = () => (
        void 0 === e &&
          ((e = { createScriptURL: (e) => e }),
          "undefined" != typeof trustedTypes &&
            trustedTypes.createPolicy &&
            (e = trustedTypes.createPolicy("nextjs#bundler", e))),
        e
      );
    })(),
    (d.tu = (e) => d.tt().createScriptURL(e)),
    (d.p = "https://static-2v.gitbook.com/_next/"),
    (() => {
      var e = (e, a, d, f) => {
          var c = document.createElement("link");
          return (
            (c.rel = "stylesheet"),
            (c.type = "text/css"),
            (c.onerror = c.onload =
              (b) => {
                if (((c.onerror = c.onload = null), "load" === b.type)) d();
                else {
                  var t = b && ("load" === b.type ? "missing" : b.type),
                    r = (b && b.target && b.target.href) || a,
                    o = Error(
                      "Loading CSS chunk " + e + " failed.\n(" + r + ")"
                    );
                  (o.code = "CSS_CHUNK_LOAD_FAILED"),
                    (o.type = t),
                    (o.request = r),
                    c.parentNode.removeChild(c),
                    f(o);
                }
              }),
            (c.href = a),
            !(function (e) {
              if ("function" == typeof _N_E_STYLE_LOAD) {
                let { href: a, onload: d, onerror: f } = e;
                _N_E_STYLE_LOAD(
                  0 === a.indexOf(window.location.origin)
                    ? new URL(a).pathname
                    : a
                ).then(
                  () => (null == d ? void 0 : d.call(e, { type: "load" })),
                  () => (null == f ? void 0 : f.call(e, {}))
                );
              } else document.head.appendChild(e);
            })(c),
            c
          );
        },
        a = (e, a) => {
          for (
            var d = document.getElementsByTagName("link"), f = 0;
            f < d.length;
            f++
          ) {
            var c = d[f],
              b = c.getAttribute("data-href") || c.getAttribute("href");
            if ("stylesheet" === c.rel && (b === e || b === a)) return c;
          }
          for (
            var t = document.getElementsByTagName("style"), f = 0;
            f < t.length;
            f++
          ) {
            var c = t[f],
              b = c.getAttribute("data-href");
            if (b === e || b === a) return c;
          }
        },
        f = (f) =>
          new Promise((c, b) => {
            var t = d.miniCssF(f),
              r = d.p + t;
            if (a(t, r)) return c();
            e(f, r, c, b);
          }),
        c = { 8068: 0 };
      d.f.miniCss = (e, a) => {
        c[e]
          ? a.push(c[e])
          : 0 !== c[e] &&
            { 9447: 1 }[e] &&
            a.push(
              (c[e] = f(e).then(
                () => {
                  c[e] = 0;
                },
                (a) => {
                  throw (delete c[e], a);
                }
              ))
            );
      };
    })(),
    (() => {
      var e = {
        8068: 0,
        6602: 0,
        633: 0,
        6666: 0,
        915: 0,
        5615: 0,
        3610: 0,
        7219: 0,
        1825: 0,
        2811: 0,
        1018: 0,
        8586: 0,
        7003: 0,
      };
      (d.f.j = (a, f) => {
        var c = d.o(e, a) ? e[a] : void 0;
        if (0 !== c)
          if (c) f.push(c[2]);
          else if (
            /^(6(33|602|666)|(182|561|91)5|1018|2811|3610|7003|7219|8068|8586|9447)$/.test(
              a
            )
          )
            e[a] = 0;
          else {
            var b = new Promise((d, f) => (c = e[a] = [d, f]));
            f.push((c[2] = b));
            var t = d.p + d.u(a),
              r = Error();
            d.l(
              t,
              (f) => {
                if (d.o(e, a) && (0 !== (c = e[a]) && (e[a] = void 0), c)) {
                  var b = f && ("load" === f.type ? "missing" : f.type),
                    t = f && f.target && f.target.src;
                  (r.message =
                    "Loading chunk " + a + " failed.\n(" + b + ": " + t + ")"),
                    (r.name = "ChunkLoadError"),
                    (r.type = b),
                    (r.request = t),
                    c[1](r);
                }
              },
              "chunk-" + a,
              a
            );
          }
      }),
        (d.O.j = (a) => 0 === e[a]);
      var a = (a, f) => {
          var c,
            b,
            [t, r, o] = f,
            n = 0;
          if (t.some((a) => 0 !== e[a])) {
            for (c in r) d.o(r, c) && (d.m[c] = r[c]);
            if (o) var i = o(d);
          }
          for (a && a(f); n < t.length; n++)
            (b = t[n]), d.o(e, b) && e[b] && e[b][0](), (e[b] = 0);
          return d.O(i);
        },
        f = (self.webpackChunk_N_E = self.webpackChunk_N_E || []);
      f.forEach(a.bind(null, 0)), (f.push = a.bind(null, f.push.bind(f)));
    })(),
    (d.nc = void 0);
})();
(function () {
  if (
    typeof document === "undefined" ||
    !/(?:^|;\s)__vercel_toolbar=1(?:;|$)/.test(document.cookie)
  )
    return;
  var s = document.createElement("script");
  s.src = "https://vercel.live/_next-live/feedback/feedback.js";
  s.setAttribute("data-explicit-opt-in", "true");
  s.setAttribute("data-cookie-opt-in", "true");
  s.setAttribute("data-deployment-id", "dpl_ByhVo4eAhx2T5ntEEKUdsTxuvVQf");
  (document.head || document.documentElement).appendChild(s);
})();
