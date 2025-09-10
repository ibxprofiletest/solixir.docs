"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2580],
  {
    16821: (e, t, n) => {
      n.d(t, { cr: () => v, tU: () => h, ab: () => g });
      var r = n(34743),
        l = n(18080);
      function o(e, t, n) {
        try {
          return e(t);
        } catch (e) {
          return (
            (0, r.R)(
              "[nuqs] Error while parsing value `%s`: %O" +
                (n ? " (for key `%s`)" : ""),
              t,
              e,
              n
            ),
            null
          );
        }
      }
      var a = (function () {
          if ("undefined" == typeof window || !window.GestureEvent) return 50;
          try {
            let e = navigator.userAgent?.match(/version\/([\d\.]+) safari/i);
            return parseFloat(e[1]) >= 17 ? 120 : 320;
          } catch {
            return 320;
          }
        })(),
        i = new Map(),
        u = { history: "replace", scroll: !1, shallow: !0, throttleMs: a },
        s = new Set(),
        c = 0,
        d = null,
        f = n(7620);
      function m(e) {
        function t(t) {
          if (void 0 === t) return null;
          let n = "";
          if (Array.isArray(t)) {
            if (void 0 === t[0]) return null;
            n = t[0];
          }
          return "string" == typeof t && (n = t), o(e.parse, n);
        }
        return {
          eq: (e, t) => e === t,
          ...e,
          parseServerSide: t,
          withDefault(e) {
            return {
              ...this,
              defaultValue: e,
              parseServerSide(n) {
                var r;
                return null != (r = t(n)) ? r : e;
              },
            };
          },
          withOptions(e) {
            return { ...this, ...e };
          },
        };
      }
      var h = m({ parse: (e) => e, serialize: (e) => "".concat(e) });
      m({
        parse: (e) => {
          let t = parseInt(e);
          return Number.isNaN(t) ? null : t;
        },
        serialize: (e) => Math.round(e).toFixed(),
      }),
        m({
          parse: (e) => {
            let t = parseInt(e, 16);
            return Number.isNaN(t) ? null : t;
          },
          serialize: (e) => {
            let t = Math.round(e).toString(16);
            return t.padStart(t.length + (t.length % 2), "0");
          },
        }),
        m({
          parse: (e) => {
            let t = parseFloat(e);
            return Number.isNaN(t) ? null : t;
          },
          serialize: (e) => e.toString(),
        });
      var v = m({
        parse: (e) => "true" === e,
        serialize: (e) => (e ? "true" : "false"),
      });
      m({
        parse: (e) => {
          let t = parseInt(e);
          return Number.isNaN(t) ? null : new Date(t);
        },
        serialize: (e) => e.valueOf().toString(),
      }),
        m({
          parse: (e) => {
            let t = new Date(e);
            return Number.isNaN(t.valueOf()) ? null : t;
          },
          serialize: (e) => e.toISOString(),
        }),
        m({
          parse: (e) => {
            let t = new Date(e.slice(0, 10));
            return Number.isNaN(t.valueOf()) ? null : t;
          },
          serialize: (e) => e.toISOString().slice(0, 10),
        });
      var p = (function (e) {
          return {
            all: (e = e || new Map()),
            on: function (t, n) {
              var r = e.get(t);
              r ? r.push(n) : e.set(t, [n]);
            },
            off: function (t, n) {
              var r = e.get(t);
              r && (n ? r.splice(r.indexOf(n) >>> 0, 1) : e.set(t, []));
            },
            emit: function (t, n) {
              var r = e.get(t);
              r &&
                r.slice().map(function (e) {
                  e(n);
                }),
                (r = e.get("*")) &&
                  r.slice().map(function (e) {
                    e(t, n);
                  });
            },
          };
        })(),
        y = {};
      function g(e) {
        let {
            history: t = "replace",
            scroll: n = !1,
            shallow: o = !0,
            throttleMs: m = a,
            clearOnDefault: h = !0,
            startTransition: v,
            urlKeys: g = y,
          } = arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : {},
          S = Object.keys(e).join(","),
          k = (0, f.useMemo)(
            () =>
              Object.fromEntries(
                Object.keys(e).map((e) => {
                  var t;
                  return [e, null != (t = g[e]) ? t : e];
                })
              ),
            [S, g]
          ),
          {
            searchParams: O,
            updateUrl: E,
            rateLimitFactor: C = 1,
          } = (0, l.V7)(),
          L = (0, f.useRef)({});
        if (Object.keys(L.current).length !== Object.keys(e).length) {
          var j;
          L.current = Object.fromEntries(
            null != (j = null == O ? void 0 : O.entries()) ? j : []
          );
        }
        let M = (0, f.useMemo)(
            () =>
              Object.fromEntries(
                Object.keys(e).map((t) => {
                  var n;
                  return [t, null != (n = e[t].defaultValue) ? n : null];
                })
              ),
            [
              Object.values(e)
                .map((e) => {
                  let { defaultValue: t } = e;
                  return t;
                })
                .join(","),
            ]
          ),
          [$, N] = (0, f.useState)(() =>
            b(e, g, null != O ? O : new URLSearchParams())
          ),
          x = (0, f.useRef)($);
        (0, r.Y)("[nuq+ `%s`] render - state: %O, iSP: %s", S, $, O),
          (0, f.useEffect)(() => {
            let t = b(e, g, O, L.current, x.current);
            (x.current = t), N(t);
          }, [
            Object.values(k)
              .map((e) => (null == O ? void 0 : O.get(e)))
              .join("&"),
          ]),
          (0, f.useInsertionEffect)(() => {
            let t = Object.keys(e).reduce(
              (t, n) => (
                (t[n] = (t) => {
                  var l, o;
                  let { state: a, query: i } = t,
                    { defaultValue: u } = e[n],
                    s = k[n];
                  (x.current = {
                    ...x.current,
                    [n]: null != (l = null != a ? a : u) ? l : null,
                  }),
                    (L.current[s] = i),
                    (0, r.Y)(
                      "[nuq+ `%s`] Cross-hook key sync %s: %O (default: %O). Resolved: %O",
                      S,
                      s,
                      a,
                      u,
                      x.current
                    ),
                    (o = x.current),
                    (0, r.Y)("[nuq+ `%s`] updateInternalState %O", S, o),
                    (x.current = o),
                    N(o);
                }),
                t
              ),
              {}
            );
            for (let n of Object.keys(e)) {
              let e = k[n];
              (0, r.Y)("[nuq+ `%s`] Subscribing to sync for `%s`", S, e),
                p.on(e, t[n]);
            }
            return () => {
              for (let n of Object.keys(e)) {
                let e = k[n];
                (0, r.Y)("[nuq+ `%s`] Unsubscribing to sync for `%s`", S, e),
                  p.off(e, t[n]);
              }
            };
          }, [e, k]);
        let q = (0, f.useCallback)(
          function (f) {
            var y, g, b, O, j, $, N, q, T, A, R, I, K, z, P;
            let D =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              U =
                "function" == typeof f
                  ? f(w(x.current, M))
                  : null === f
                  ? Object.fromEntries(Object.keys(e).map((e) => [e, null]))
                  : f;
            for (let [l, c] of ((0, r.Y)("[nuq+ `%s`] setState: %O", S, U),
            Object.entries(U))) {
              let d = e[l],
                f = k[l];
              d &&
                ((null !=
                (g = null != (y = D.clearOnDefault) ? y : d.clearOnDefault)
                  ? g
                  : h) &&
                  null !== c &&
                  void 0 !== d.defaultValue &&
                  (null != (b = d.eq) ? b : (e, t) => e === t)(
                    c,
                    d.defaultValue
                  ) &&
                  (c = null),
                (L.current[f] = (function (e, t, n, l) {
                  let o = null === t ? null : n(t);
                  return (
                    (0, r.Y)("[nuqs queue] Enqueueing %s=%s %O", e, o, l),
                    i.set(e, o),
                    "push" === l.history && (u.history = "push"),
                    l.scroll && (u.scroll = !0),
                    !1 === l.shallow && (u.shallow = !1),
                    l.startTransition && s.add(l.startTransition),
                    (u.throttleMs = Math.max(
                      l.throttleMs ?? a,
                      Number.isFinite(u.throttleMs) ? u.throttleMs : 0
                    )),
                    o
                  );
                })(f, c, null != (O = d.serialize) ? O : String, {
                  history:
                    null != ($ = null != (j = D.history) ? j : d.history)
                      ? $
                      : t,
                  shallow:
                    null != (q = null != (N = D.shallow) ? N : d.shallow)
                      ? q
                      : o,
                  scroll:
                    null != (A = null != (T = D.scroll) ? T : d.scroll) ? A : n,
                  throttleMs:
                    null != (I = null != (R = D.throttleMs) ? R : d.throttleMs)
                      ? I
                      : m,
                  startTransition:
                    null !=
                    (z =
                      null != (K = D.startTransition) ? K : d.startTransition)
                      ? z
                      : v,
                })),
                p.emit(f, {
                  state: c,
                  query: null != (P = L.current[f]) ? P : null,
                }));
            }
            return (
              null === d &&
                (d = new Promise((e, t) => {
                  if (!Number.isFinite(u.throttleMs)) {
                    (0, r.Y)(
                      "[nuqs queue] Skipping flush due to throttleMs=Infinity"
                    ),
                      e(new URLSearchParams(location.search)),
                      setTimeout(() => {
                        d = null;
                      }, 0);
                    return;
                  }
                  function n() {
                    c = performance.now();
                    let [n, o] = (function (e) {
                      let t = new URLSearchParams(location.search);
                      if (0 === i.size) return [t, null];
                      let n = Array.from(i.entries()),
                        o = { ...u },
                        c = Array.from(s);
                      for (let [e, l] of (i.clear(),
                      s.clear(),
                      (u.history = "replace"),
                      (u.scroll = !1),
                      (u.shallow = !0),
                      (u.throttleMs = a),
                      (0, r.Y)(
                        "[nuqs queue] Flushing queue %O with options %O",
                        n,
                        o
                      ),
                      n))
                        null === l ? t.delete(e) : t.set(e, l);
                      try {
                        return (
                          (function (e, t) {
                            let n = (r) => {
                              if (r === e.length) return t();
                              let l = e[r];
                              if (!l)
                                throw Error("Invalid transition function");
                              l(() => n(r + 1));
                            };
                            n(0);
                          })(c, () => {
                            e(t, {
                              history: o.history,
                              scroll: o.scroll,
                              shallow: o.shallow,
                            });
                          }),
                          [t, null]
                        );
                      } catch (e) {
                        return (
                          console.error(
                            (0, l.z3)(429),
                            n.map(([e]) => e).join(),
                            e
                          ),
                          [t, e]
                        );
                      }
                    })(E);
                    null === o ? e(n) : t(n), (d = null);
                  }
                  setTimeout(function () {
                    let e = performance.now() - c,
                      t = u.throttleMs,
                      l = C * Math.max(0, Math.min(t, t - e));
                    (0, r.Y)(
                      "[nuqs queue] Scheduling flush in %f ms. Throttled at %f ms",
                      l,
                      t
                    ),
                      0 === l ? n() : setTimeout(n, l);
                  }, 0);
                })),
              d
            );
          },
          [e, t, o, n, m, v, k, E, C, M]
        );
        return [(0, f.useMemo)(() => w($, M), [$, M]), q];
      }
      function b(e, t, n, r, l) {
        return Object.keys(e).reduce((a, u) => {
          var s, c, d;
          let f = null != (s = null == t ? void 0 : t[u]) ? s : u,
            { parse: m } = e[u],
            h = i.get(f),
            v =
              void 0 === h
                ? null != (c = null == n ? void 0 : n.get(f))
                  ? c
                  : null
                : h;
          if (r && l && r[f] === v)
            return (a[u] = null != (d = l[u]) ? d : null), a;
          let p = null === v ? null : o(m, v, u);
          return (a[u] = null != p ? p : null), r && (r[f] = v), a;
        }, {});
      }
      function w(e, t) {
        return Object.fromEntries(
          Object.keys(e).map((n) => {
            var r, l;
            return [n, null != (l = null != (r = e[n]) ? r : t[n]) ? l : null];
          })
        );
      }
    },
    18080: (e, t, n) => {
      n.d(t, { Hx: () => u, OB: () => a, V7: () => s, z3: () => o });
      var r = n(7620),
        l = {
          404: "nuqs requires an adapter to work with your framework.",
          409: "Multiple versions of the library are loaded. This may lead to unexpected behavior. Currently using `%s`, but `%s` was about to load on top.",
          414: "Max safe URL length exceeded. Some browsers may not be able to accept this URL. Consider limiting the amount of state stored in the URL.",
          429: "URL update rate-limited by the browser. Consider increasing `throttleMs` for key(s) `%s`. %O",
          500: "Empty search params cache. Search params can't be accessed in Layouts.",
          501: "Search params cache already populated. Have you called `parse` twice?",
        };
      function o(e) {
        return `[nuqs] ${l[e]}
  See https://err.47ng.com/NUQS-${e}`;
      }
      function a(e) {
        if (0 === e.size) return "";
        let t = [];
        for (let [n, r] of e.entries()) {
          let e = n
            .replace(/#/g, "%23")
            .replace(/&/g, "%26")
            .replace(/\+/g, "%2B")
            .replace(/=/g, "%3D")
            .replace(/\?/g, "%3F");
          t.push(
            `${e}=${r
              .replace(/%/g, "%25")
              .replace(/\+/g, "%2B")
              .replace(/ /g, "+")
              .replace(/#/g, "%23")
              .replace(/&/g, "%26")
              .replace(/"/g, "%22")
              .replace(/'/g, "%27")
              .replace(/`/g, "%60")
              .replace(/</g, "%3C")
              .replace(/>/g, "%3E")
              .replace(/[\x00-\x1F]/g, (e) => encodeURIComponent(e))}`
          );
        }
        return "?" + t.join("&");
      }
      var i = (0, r.createContext)({
        useAdapter() {
          throw Error(o(404));
        },
      });
      function u(e) {
        return ({ children: t, ...n }) =>
          (0, r.createElement)(
            i.Provider,
            { ...n, value: { useAdapter: e } },
            t
          );
      }
      function s() {
        let e = (0, r.useContext)(i);
        if (!("useAdapter" in e)) throw Error(o(404));
        return e.useAdapter();
      }
      i.displayName = "NuqsAdapterContext";
    },
    21752: (e, t, n) => {
      n.d(t, { D: () => s, N: () => c });
      var r = n(7620);
      let l = ["light", "dark"],
        o = "(prefers-color-scheme: dark)",
        a = "undefined" == typeof window,
        i = (0, r.createContext)(void 0),
        u = { setTheme: (e) => {}, themes: [] },
        s = () => {
          var e;
          return null != (e = (0, r.useContext)(i)) ? e : u;
        },
        c = (e) =>
          (0, r.useContext)(i)
            ? r.createElement(r.Fragment, null, e.children)
            : r.createElement(f, e),
        d = ["light", "dark"],
        f = ({
          forcedTheme: e,
          disableTransitionOnChange: t = !1,
          enableSystem: n = !0,
          enableColorScheme: a = !0,
          storageKey: u = "theme",
          themes: s = d,
          defaultTheme: c = n ? "system" : "light",
          attribute: f = "data-theme",
          value: y,
          children: g,
          nonce: b,
        }) => {
          let [w, S] = (0, r.useState)(() => h(u, c)),
            [k, O] = (0, r.useState)(() => h(u)),
            E = y ? Object.values(y) : s,
            C = (0, r.useCallback)((e) => {
              let r = e;
              if (!r) return;
              "system" === e && n && (r = p());
              let o = y ? y[r] : r,
                i = t ? v() : null,
                u = document.documentElement;
              if (
                ("class" === f
                  ? (u.classList.remove(...E), o && u.classList.add(o))
                  : o
                  ? u.setAttribute(f, o)
                  : u.removeAttribute(f),
                a)
              ) {
                let e = l.includes(c) ? c : null,
                  t = l.includes(r) ? r : e;
                u.style.colorScheme = t;
              }
              null == i || i();
            }, []),
            L = (0, r.useCallback)(
              (e) => {
                S(e);
                try {
                  localStorage.setItem(u, e);
                } catch (e) {}
              },
              [e]
            ),
            j = (0, r.useCallback)(
              (t) => {
                O(p(t)), "system" === w && n && !e && C("system");
              },
              [w, e]
            );
          (0, r.useEffect)(() => {
            let e = window.matchMedia(o);
            return e.addListener(j), j(e), () => e.removeListener(j);
          }, [j]),
            (0, r.useEffect)(() => {
              let e = (e) => {
                e.key === u && L(e.newValue || c);
              };
              return (
                window.addEventListener("storage", e),
                () => window.removeEventListener("storage", e)
              );
            }, [L]),
            (0, r.useEffect)(() => {
              C(null != e ? e : w);
            }, [e, w]);
          let M = (0, r.useMemo)(
            () => ({
              theme: w,
              setTheme: L,
              forcedTheme: e,
              resolvedTheme: "system" === w ? k : w,
              themes: n ? [...s, "system"] : s,
              systemTheme: n ? k : void 0,
            }),
            [w, L, e, k, n, s]
          );
          return r.createElement(
            i.Provider,
            { value: M },
            r.createElement(m, {
              forcedTheme: e,
              disableTransitionOnChange: t,
              enableSystem: n,
              enableColorScheme: a,
              storageKey: u,
              themes: s,
              defaultTheme: c,
              attribute: f,
              value: y,
              children: g,
              attrs: E,
              nonce: b,
            }),
            g
          );
        },
        m = (0, r.memo)(
          ({
            forcedTheme: e,
            storageKey: t,
            attribute: n,
            enableSystem: a,
            enableColorScheme: i,
            defaultTheme: u,
            value: s,
            attrs: c,
            nonce: d,
          }) => {
            let f = "system" === u,
              m =
                "class" === n
                  ? `var d=document.documentElement,c=d.classList;c.remove(${c
                      .map((e) => `'${e}'`)
                      .join(",")});`
                  : `var d=document.documentElement,n='${n}',s='setAttribute';`,
              h = i
                ? l.includes(u) && u
                  ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${u}'`
                  : "if(e==='light'||e==='dark')d.style.colorScheme=e"
                : "",
              v = (e, t = !1, r = !0) => {
                let o = s ? s[e] : e,
                  a = t ? e + "|| ''" : `'${o}'`,
                  u = "";
                return (
                  i &&
                    r &&
                    !t &&
                    l.includes(e) &&
                    (u += `d.style.colorScheme = '${e}';`),
                  "class" === n
                    ? (u += t || o ? `c.add(${a})` : "null")
                    : o && (u += `d[s](n,${a})`),
                  u
                );
              },
              p = e
                ? `!function(){${m}${v(e)}}()`
                : a
                ? `!function(){try{${m}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${f})){var t='${o}',m=window.matchMedia(t);if(m.media!==t||m.matches){${v(
                    "dark"
                  )}}else{${v("light")}}}else if(e){${
                    s ? `var x=${JSON.stringify(s)};` : ""
                  }${v(s ? "x[e]" : "e", !0)}}${
                    f ? "" : "else{" + v(u, !1, !1) + "}"
                  }${h}}catch(e){}}()`
                : `!function(){try{${m}var e=localStorage.getItem('${t}');if(e){${
                    s ? `var x=${JSON.stringify(s)};` : ""
                  }${v(s ? "x[e]" : "e", !0)}}else{${v(
                    u,
                    !1,
                    !1
                  )};}${h}}catch(t){}}();`;
            return r.createElement("script", {
              nonce: d,
              dangerouslySetInnerHTML: { __html: p },
            });
          },
          () => !0
        ),
        h = (e, t) => {
          let n;
          if (!a) {
            try {
              n = localStorage.getItem(e) || void 0;
            } catch (e) {}
            return n || t;
          }
        },
        v = () => {
          let e = document.createElement("style");
          return (
            e.appendChild(
              document.createTextNode(
                "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}"
              )
            ),
            document.head.appendChild(e),
            () => {
              window.getComputedStyle(document.body),
                setTimeout(() => {
                  document.head.removeChild(e);
                }, 1);
            }
          );
        },
        p = (e) => (
          e || (e = window.matchMedia(o)), e.matches ? "dark" : "light"
        );
    },
    25316: (e, t, n) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        !(function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          callServer: function () {
            return r.callServer;
          },
          createServerReference: function () {
            return o;
          },
          findSourceMapURL: function () {
            return l.findSourceMapURL;
          },
        });
      let r = n(35411),
        l = n(32795),
        o = n(496).createServerReference;
    },
    34743: (e, t, n) => {
      n.d(t, { R: () => o, Y: () => l });
      var r = (function () {
        try {
          if ("undefined" == typeof localStorage) return !1;
          let e = "nuqs-localStorage-test";
          localStorage.setItem(e, e);
          let t = localStorage.getItem(e) === e;
          if ((localStorage.removeItem(e), !t)) return !1;
        } catch (e) {
          return (
            console.error(
              "[nuqs]: debug mode is disabled (localStorage unavailable).",
              e
            ),
            !1
          );
        }
        return (localStorage.getItem("debug") ?? "").includes("nuqs");
      })();
      function l(e, ...t) {
        if (!r) return;
        let n = (function (e, ...t) {
          return e.replace(/%[sfdO]/g, (e) => {
            let n = t.shift();
            return "%O" === e && n
              ? JSON.stringify(n).replace(/"([^"]+)":/g, "$1:")
              : String(n);
          });
        })(e, ...t);
        performance.mark(n), console.log(e, ...t);
      }
      function o(e, ...t) {
        r && console.warn(e, ...t);
      }
    },
    58541: (e, t, n) => {
      n.d(t, { vC: () => w });
      var r = n(7620);
      function l() {
        return (l = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }).apply(null, arguments);
      }
      n(54568);
      var o = ["shift", "alt", "meta", "mod", "ctrl"],
        a = {
          esc: "escape",
          return: "enter",
          ".": "period",
          ",": "comma",
          "-": "slash",
          " ": "space",
          "`": "backquote",
          "#": "backslash",
          "+": "bracketright",
          ShiftLeft: "shift",
          ShiftRight: "shift",
          AltLeft: "alt",
          AltRight: "alt",
          MetaLeft: "meta",
          MetaRight: "meta",
          OSLeft: "meta",
          OSRight: "meta",
          ControlLeft: "ctrl",
          ControlRight: "ctrl",
        };
      function i(e) {
        return ((e && a[e]) || e || "")
          .trim()
          .toLowerCase()
          .replace(/key|digit|numpad|arrow/, "");
      }
      function u(e, t) {
        return void 0 === t && (t = ","), e.split(t);
      }
      function s(e, t, n) {
        void 0 === t && (t = "+");
        var r = e
            .toLocaleLowerCase()
            .split(t)
            .map(function (e) {
              return i(e);
            }),
          a = {
            alt: r.includes("alt"),
            ctrl: r.includes("ctrl") || r.includes("control"),
            shift: r.includes("shift"),
            meta: r.includes("meta"),
            mod: r.includes("mod"),
          },
          u = r.filter(function (e) {
            return !o.includes(e);
          });
        return l({}, a, { keys: u, description: n });
      }
      "undefined" != typeof document &&
        (document.addEventListener("keydown", function (e) {
          void 0 !== e.key && f([i(e.key), i(e.code)]);
        }),
        document.addEventListener("keyup", function (e) {
          void 0 !== e.key && m([i(e.key), i(e.code)]);
        })),
        "undefined" != typeof window &&
          window.addEventListener("blur", function () {
            c.clear();
          });
      var c = new Set();
      function d(e) {
        return Array.isArray(e);
      }
      function f(e) {
        var t = Array.isArray(e) ? e : [e];
        c.has("meta") &&
          c.forEach(function (e) {
            return !o.includes(e) && c.delete(e.toLowerCase());
          }),
          t.forEach(function (e) {
            return c.add(e.toLowerCase());
          });
      }
      function m(e) {
        var t = Array.isArray(e) ? e : [e];
        "meta" === e
          ? c.clear()
          : t.forEach(function (e) {
              return c.delete(e.toLowerCase());
            });
      }
      function h(e, t) {
        var n = e.target;
        void 0 === t && (t = !1);
        var r = n && n.tagName;
        return d(t)
          ? !!(
              r &&
              t &&
              t.some(function (e) {
                return e.toLowerCase() === r.toLowerCase();
              })
            )
          : !!(r && t && !0 === t);
      }
      var v = function (e, t, n) {
          void 0 === n && (n = !1);
          var r,
            l = t.alt,
            o = t.meta,
            a = t.mod,
            u = t.shift,
            s = t.ctrl,
            f = t.keys,
            m = e.key,
            h = e.code,
            v = e.ctrlKey,
            p = e.metaKey,
            y = e.shiftKey,
            g = e.altKey,
            b = i(h),
            w = m.toLowerCase();
          if (
            !(null != f && f.includes(b)) &&
            !(null != f && f.includes(w)) &&
            ![
              "ctrl",
              "control",
              "unknown",
              "meta",
              "alt",
              "shift",
              "os",
            ].includes(b)
          )
            return !1;
          if (!n) {
            if ((!g === l && "alt" !== w) || (!y === u && "shift" !== w))
              return !1;
            if (a) {
              if (!p && !v) return !1;
            } else if (
              (!p === o && "meta" !== w && "os" !== w) ||
              (!v === s && "ctrl" !== w && "control" !== w)
            )
              return !1;
          }
          return (
            !!(f && 1 === f.length && (f.includes(w) || f.includes(b))) ||
            (f
              ? (void 0 === r && (r = ","),
                (d(f) ? f : f.split(r)).every(function (e) {
                  return c.has(e.trim().toLowerCase());
                }))
              : !f || !1)
          );
        },
        p = (0, r.createContext)(void 0),
        y = (0, r.createContext)({
          hotkeys: [],
          enabledScopes: [],
          toggleScope: function () {},
          enableScope: function () {},
          disableScope: function () {},
        }),
        g = function (e) {
          e.stopPropagation(), e.preventDefault(), e.stopImmediatePropagation();
        },
        b = "undefined" != typeof window ? r.useLayoutEffect : r.useEffect;
      function w(e, t, n, l) {
        var o,
          a = (0, r.useState)(null),
          c = a[0],
          w = a[1],
          S = (0, r.useRef)(!1),
          k = n instanceof Array ? (l instanceof Array ? void 0 : l) : n,
          O = d(e) ? e.join(null == k ? void 0 : k.splitKey) : e,
          E = n instanceof Array ? n : l instanceof Array ? l : void 0,
          C = (0, r.useCallback)(t, null != E ? E : []),
          L = (0, r.useRef)(C);
        E ? (L.current = C) : (L.current = t);
        var j =
            ((function e(t, n) {
              return t && n && "object" == typeof t && "object" == typeof n
                ? Object.keys(t).length === Object.keys(n).length &&
                    Object.keys(t).reduce(function (r, l) {
                      return r && e(t[l], n[l]);
                    }, !0)
                : t === n;
            })((o = (0, r.useRef)(void 0)).current, k) || (o.current = k),
            o.current),
          M = (0, r.useContext)(y).enabledScopes,
          $ = (0, r.useContext)(p);
        return (
          b(
            function () {
              var e;
              if (
                (null == j ? void 0 : j.enabled) !== !1 &&
                ((e = null == j ? void 0 : j.scopes),
                0 === M.length && e
                  ? (console.warn(
                      'A hotkey has the "scopes" option set, however no active scopes were found. If you want to use the global scopes feature, you need to wrap your app in a <HotkeysProvider>'
                    ),
                    !0)
                  : !e ||
                    M.some(function (t) {
                      return e.includes(t);
                    }) ||
                    M.includes("*"))
              ) {
                var t = function (e, t) {
                    var n;
                    if (
                      (void 0 === t && (t = !1),
                      !h(e, ["input", "textarea", "select"]) ||
                        h(e, null == j ? void 0 : j.enableOnFormTags))
                    ) {
                      if (null !== c) {
                        var r = c.getRootNode();
                        if (
                          (r instanceof Document || r instanceof ShadowRoot) &&
                          r.activeElement !== c &&
                          !c.contains(r.activeElement)
                        )
                          return void g(e);
                      }
                      (null == (n = e.target) ||
                        !n.isContentEditable ||
                        (null != j && j.enableOnContentEditable)) &&
                        u(O, null == j ? void 0 : j.splitKey).forEach(function (
                          n
                        ) {
                          var r,
                            l,
                            o,
                            a = s(n, null == j ? void 0 : j.combinationKey);
                          if (
                            v(e, a, null == j ? void 0 : j.ignoreModifiers) ||
                            (null != (o = a.keys) && o.includes("*"))
                          ) {
                            if (
                              (null != j &&
                                null != j.ignoreEventWhen &&
                                j.ignoreEventWhen(e)) ||
                              (t && S.current)
                            )
                              return;
                            if (
                              ((("function" ==
                                typeof (r =
                                  null == j ? void 0 : j.preventDefault) &&
                                r(e, a)) ||
                                !0 === r) &&
                                e.preventDefault(),
                              "function" ==
                              typeof (l = null == j ? void 0 : j.enabled)
                                ? !l(e, a)
                                : !0 !== l && void 0 !== l)
                            )
                              return void g(e);
                            L.current(e, a), t || (S.current = !0);
                          }
                        });
                    }
                  },
                  n = function (e) {
                    void 0 !== e.key &&
                      (f(i(e.code)),
                      (((null == j ? void 0 : j.keydown) === void 0 &&
                        (null == j ? void 0 : j.keyup) !== !0) ||
                        (null != j && j.keydown)) &&
                        t(e));
                  },
                  r = function (e) {
                    void 0 !== e.key &&
                      (m(i(e.code)),
                      (S.current = !1),
                      null != j && j.keyup && t(e, !0));
                  },
                  l = c || (null == k ? void 0 : k.document) || document;
                return (
                  l.addEventListener("keyup", r),
                  l.addEventListener("keydown", n),
                  $ &&
                    u(O, null == j ? void 0 : j.splitKey).forEach(function (e) {
                      return $.addHotkey(
                        s(
                          e,
                          null == j ? void 0 : j.combinationKey,
                          null == j ? void 0 : j.description
                        )
                      );
                    }),
                  function () {
                    l.removeEventListener("keyup", r),
                      l.removeEventListener("keydown", n),
                      $ &&
                        u(O, null == j ? void 0 : j.splitKey).forEach(function (
                          e
                        ) {
                          return $.removeHotkey(
                            s(
                              e,
                              null == j ? void 0 : j.combinationKey,
                              null == j ? void 0 : j.description
                            )
                          );
                        });
                  }
                );
              }
            },
            [c, O, j, M]
          ),
          w
        );
      }
    },
    65938: (e, t, n) => {
      n.d(t, { S7: () => a });
      var r = n(7620);
      n(54568);
      var l = Symbol.for("ui.streamable.value");
      function o(e) {
        return null != e && "object" == typeof e && "type" in e && e.type === l;
      }
      function a(e) {
        if (!o(e))
          throw Error(
            "Invalid value: this hook only accepts values created via `createStreamableValue`."
          );
        return {
          [Symbol.asyncIterator]() {
            let t = e,
              n = t.curr,
              r = !1,
              l = !0;
            return {
              async next() {
                if (r) return { value: n, done: !0 };
                if (void 0 !== (t = await t).error) throw t.error;
                if ("curr" in t || t.diff) {
                  if (t.diff) {
                    if (0 === t.diff[0]) {
                      if ("string" != typeof n)
                        throw Error(
                          "Invalid patch: can only append to string types. This is a bug in the AI SDK."
                        );
                      n += t.diff[1];
                    }
                  } else n = t.curr;
                  if (!t.next) return (r = !0), { value: n, done: !1 };
                }
                return void 0 === t.next
                  ? { value: n, done: !0 }
                  : ((t = t.next), l && ((l = !1), void 0 === n))
                  ? this.next()
                  : { value: n, done: !1 };
              },
            };
          },
        };
      }
    },
  },
]);
