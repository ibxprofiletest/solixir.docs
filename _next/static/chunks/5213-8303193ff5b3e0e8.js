"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5213],
  {
    10083: (e, t, r) => {
      r.r(t), r.d(t, { PageFeedbackForm: () => u });
      var i = r(54568),
        l = r(5772),
        n = r(7620),
        s = r(88118),
        a = r(96021),
        o = r(98743),
        c = r(24578),
        d = r(54217);
      function u(e) {
        let { className: t } = e,
          r = (0, s.ok)(),
          u = (0, c.jt)(),
          p = n.useRef(null),
          [m, x] = n.useState(),
          [f, g] = n.useState(""),
          [L, v] = n.useState(!1),
          b = (e) => {
            x(e), u({ type: "page_post_feedback", feedback: { rating: e } });
          },
          w = (e, t) => {
            v(!0),
              u({
                type: "page_post_feedback_comment",
                feedback: { rating: e, comment: t },
              });
          };
        return (
          n.useEffect(() => {
            if (m) {
              var e;
              null == (e = p.current) || e.focus();
            }
          }, [m]),
          (0, i.jsxs)("div", {
            className: (0, o.P)("flex flex-col gap-3 text-sm", t),
            children: [
              (0, i.jsxs)("div", {
                className: "flex flex-wrap items-center gap-2",
                children: [
                  (0, i.jsx)("p", {
                    children: (0, a.t)(r, "was_this_helpful"),
                  }),
                  (0, i.jsxs)(d.e2, {
                    className: "rounded-full border border-tint bg-tint-base",
                    children: [
                      (0, i.jsx)(h, {
                        rating: l.op.Good,
                        label: (0, a.s)(r, "was_this_helpful_positive"),
                        onClick: () => b(l.op.Good),
                        active: m === l.op.Good,
                        disabled: void 0 !== m,
                      }),
                      (0, i.jsx)(h, {
                        rating: l.op.Ok,
                        label: (0, a.s)(r, "was_this_helpful_neutral"),
                        onClick: () => b(l.op.Ok),
                        active: m === l.op.Ok,
                        disabled: void 0 !== m,
                      }),
                      (0, i.jsx)(h, {
                        rating: l.op.Bad,
                        label: (0, a.s)(r, "was_this_helpful_negative"),
                        onClick: () => b(l.op.Bad),
                        active: m === l.op.Bad,
                        disabled: void 0 !== m,
                      }),
                    ],
                  }),
                ],
              }),
              m
                ? (0, i.jsx)("div", {
                    className: "flex flex-col gap-2",
                    children: L
                      ? (0, i.jsx)("p", {
                          children: (0, a.t)(r, "was_this_helpful_thank_you"),
                        })
                      : (0, i.jsxs)(i.Fragment, {
                          children: [
                            (0, i.jsx)("textarea", {
                              ref: p,
                              name: "comment",
                              className:
                                "mx-0.5 max-h-40 min-h-16 grow rounded-sm straight-corners:rounded-none bg-tint-base p-2 ring-1 ring-tint ring-inset placeholder:text-sm placeholder:text-tint contrast-more:ring-tint-12 contrast-more:placeholder:text-tint-strong",
                              placeholder: (0, a.s)(
                                r,
                                "was_this_helpful_comment"
                              ),
                              "aria-label": (0, a.s)(
                                r,
                                "was_this_helpful_comment"
                              ),
                              onChange: (e) => g(e.target.value),
                              value: f,
                              rows: 3,
                              maxLength: 512,
                            }),
                            (0, i.jsxs)("div", {
                              className:
                                "flex items-center justify-between gap-4",
                              children: [
                                (0, i.jsx)(d.$n, {
                                  size: "small",
                                  onClick: () => w(m, f),
                                  label: (0, a.s)(r, "submit"),
                                }),
                                f.length > 409.6
                                  ? (0, i.jsxs)("span", {
                                      className:
                                        512 === f.length ? "text-red-500" : "",
                                      children: [f.length, " / ", 512],
                                    })
                                  : null,
                              ],
                            }),
                          ],
                        }),
                  })
                : null,
            ],
          })
        );
      }
      function h(e) {
        var t;
        let {
            rating: r,
            label: l,
            onClick: n,
            active: s,
            disabled: a,
            ...o
          } = e,
          c =
            null !=
            (t = {
              bad: (0, i.jsx)(p, {}),
              ok: (0, i.jsx)(m, {}),
              good: (0, i.jsx)(x, {}),
            }[r])
              ? t
              : null;
        return (0, i.jsx)(d.$n, {
          className: "first:pl-2.5 last:pr-2.5",
          type: "button",
          variant: "blank",
          label: l,
          onClick: n,
          active: s,
          disabled: a,
          iconOnly: !0,
          ...o,
          icon: c,
        });
      }
      let p = () =>
          (0, i.jsxs)("svg", {
            width: "18",
            height: "18",
            viewBox: "0 0 18 18",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, i.jsx)("circle", {
                cx: "9",
                cy: "9",
                r: "9",
                fill: "currentColor",
                fillOpacity: "0.2",
              }),
              (0, i.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M5 8.25C4.58579 8.25 4.25 7.91421 4.25 7.5V6C4.25 5.58579 4.58579 5.25 5 5.25C5.41421 5.25 5.75 5.58579 5.75 6V7.5C5.75 7.91421 5.41421 8.25 5 8.25ZM4.66782 13.3737C4.87421 13.5572 5.19025 13.5386 5.3737 13.3322C7.30371 11.1609 10.6963 11.1609 12.6263 13.3322C12.8098 13.5386 13.1258 13.5572 13.3322 13.3737C13.5386 13.1902 13.5572 12.8742 13.3737 12.6678C11.0459 10.049 6.9541 10.049 4.6263 12.6678C4.44284 12.8742 4.46143 13.1902 4.66782 13.3737ZM12.25 7.5C12.25 7.91421 12.5858 8.25 13 8.25C13.4142 8.25 13.75 7.91421 13.75 7.5V6C13.75 5.58579 13.4142 5.25 13 5.25C12.5858 5.25 12.25 5.58579 12.25 6V7.5Z",
                fill: "currentColor",
              }),
            ],
          }),
        m = () =>
          (0, i.jsxs)("svg", {
            width: "18",
            height: "18",
            viewBox: "0 0 18 18",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, i.jsx)("circle", {
                cx: "9",
                cy: "9",
                r: "9",
                fill: "currentColor",
                fillOpacity: "0.2",
              }),
              (0, i.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M5 8.25C4.58579 8.25 4.25 7.91421 4.25 7.5V6C4.25 5.58579 4.58579 5.25 5 5.25C5.41421 5.25 5.75 5.58579 5.75 6V7.5C5.75 7.91421 5.41421 8.25 5 8.25ZM4.5 12C4.5 11.7239 4.72386 11.5 5 11.5H13C13.2761 11.5 13.5 11.7239 13.5 12C13.5 12.2761 13.2761 12.5 13 12.5H5C4.72386 12.5 4.5 12.2761 4.5 12ZM12.25 7.5C12.25 7.91421 12.5858 8.25 13 8.25C13.4142 8.25 13.75 7.91421 13.75 7.5V6C13.75 5.58579 13.4142 5.25 13 5.25C12.5858 5.25 12.25 5.58579 12.25 6V7.5Z",
                fill: "currentColor",
              }),
            ],
          }),
        x = () =>
          (0, i.jsxs)("svg", {
            width: "18",
            height: "18",
            viewBox: "0 0 18 18",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, i.jsx)("circle", {
                cx: "9",
                cy: "9",
                r: "9",
                fill: "currentColor",
                fillOpacity: "0.2",
              }),
              (0, i.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M5 8.25C4.58579 8.25 4.25 7.91421 4.25 7.5V6C4.25 5.58579 4.58579 5.25 5 5.25C5.41421 5.25 5.75 5.58579 5.75 6V7.5C5.75 7.91421 5.41421 8.25 5 8.25ZM4.66782 11.6263C4.87421 11.4428 5.19025 11.4614 5.3737 11.6678C7.30371 13.8391 10.6963 13.8391 12.6263 11.6678C12.8098 11.4614 13.1258 11.4428 13.3322 11.6263C13.5386 11.8098 13.5572 12.1258 13.3737 12.3322C11.0459 14.951 6.9541 14.951 4.6263 12.3322C4.44284 12.1258 4.46143 11.8098 4.66782 11.6263ZM12.25 7.5C12.25 7.91421 12.5858 8.25 13 8.25C13.4142 8.25 13.75 7.91421 13.75 7.5V6C13.75 5.58579 13.4142 5.25 13 5.25C12.5858 5.25 12.25 5.58579 12.25 6V7.5Z",
                fill: "currentColor",
              }),
            ],
          });
    },
    27851: (e, t, r) => {
      r.d(t, { PageClientLayout: () => s });
      var i = r(62942),
        l = r(7620),
        n = r(62574);
      function s() {
        return (
          (0, n.eb)(),
          (function () {
            let e = (0, i.useRouter)(),
              t = (0, i.usePathname)(),
              r = (0, i.useSearchParams)();
            l.useEffect(() => {
              if (null == r ? void 0 : r.has("fallback")) {
                var i;
                let l = new URLSearchParams(r.toString());
                l.delete("fallback"),
                  e.push(
                    ""
                      .concat(t, "?")
                      .concat(l.toString())
                      .concat(null != (i = window.location.hash) ? i : "")
                  );
              }
            }, [e, t, r]);
          })(),
          null
        );
      }
    },
    29526: (e, t, r) => {
      r.d(t, { PageActionsDropdown: () => _ });
      var i = r(54568),
        l = r(55809);
      function n(e) {
        return (0, i.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 320 320",
          ...e,
          children: [
            (0, i.jsx)("title", { children: "ChatGPT" }),
            (0, i.jsx)("path", {
              d: "m297.06 130.97c7.26-21.79 4.76-45.66-6.85-65.48-17.46-30.4-52.56-46.04-86.84-38.68-15.25-17.18-37.16-26.95-60.13-26.81-35.04-.08-66.13 22.48-76.91 55.82-22.51 4.61-41.94 18.7-53.31 38.67-17.59 30.32-13.58 68.54 9.92 94.54-7.26 21.79-4.76 45.66 6.85 65.48 17.46 30.4 52.56 46.04 86.84 38.68 15.24 17.18 37.16 26.95 60.13 26.8 35.06.09 66.16-22.49 76.94-55.86 22.51-4.61 41.94-18.7 53.31-38.67 17.57-30.32 13.55-68.51-9.94-94.51zm-120.28 168.11c-14.03.02-27.62-4.89-38.39-13.88.49-.26 1.34-.73 1.89-1.07l63.72-36.8c3.26-1.85 5.26-5.32 5.24-9.07v-89.83l26.93 15.55c.29.14.48.42.52.74v74.39c-.04 33.08-26.83 59.9-59.91 59.97zm-128.84-55.03c-7.03-12.14-9.56-26.37-7.15-40.18.47.28 1.3.79 1.89 1.13l63.72 36.8c3.23 1.89 7.23 1.89 10.47 0l77.79-44.92v31.1c.02.32-.13.63-.38.83l-64.41 37.19c-28.69 16.52-65.33 6.7-81.92-21.95zm-16.77-139.09c7-12.16 18.05-21.46 31.21-26.29 0 .55-.03 1.52-.03 2.2v73.61c-.02 3.74 1.98 7.21 5.23 9.06l77.79 44.91-26.93 15.55c-.27.18-.61.21-.91.08l-64.42-37.22c-28.63-16.58-38.45-53.21-21.95-81.89zm221.26 51.49-77.79-44.92 26.93-15.54c.27-.18.61-.21.91-.08l64.42 37.19c28.68 16.57 38.51 53.26 21.94 81.94-7.01 12.14-18.05 21.44-31.2 26.28v-75.81c.03-3.74-1.96-7.2-5.2-9.06zm26.8-40.34c-.47-.29-1.3-.79-1.89-1.13l-63.72-36.8c-3.23-1.89-7.23-1.89-10.47 0l-77.79 44.92v-31.1c-.02-.32.13-.63.38-.83l64.41-37.16c28.69-16.55 65.37-6.7 81.91 22 6.99 12.12 9.52 26.31 7.15 40.1zm-168.51 55.43-26.94-15.55c-.29-.14-.48-.42-.52-.74v-74.39c.02-33.12 26.89-59.96 60.01-59.94 14.01 0 27.57 4.92 38.34 13.88-.49.26-1.33.73-1.89 1.07l-63.72 36.8c-3.26 1.85-5.26 5.31-5.24 9.06l-.04 89.79zm14.63-31.54 34.65-20.01 34.65 20v40.01l-34.65 20-34.65-20z",
            }),
          ],
        });
      }
      function s(e) {
        return (0, i.jsxs)("svg", {
          viewBox: "0 0 256 257",
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg",
          preserveAspectRatio: "xMidYMid",
          ...e,
          children: [
            (0, i.jsx)("title", { children: "Claude" }),
            (0, i.jsx)("g", {
              children: (0, i.jsx)("path", {
                d: "M50.2278481,170.321013 L100.585316,142.063797 L101.427848,139.601013 L100.585316,138.24 L98.1225316,138.24 L89.6972152,137.721519 L60.921519,136.943797 L35.9696203,135.906835 L11.795443,134.610633 L5.70329114,133.31443 L0,125.796456 L0.583291139,122.037468 L5.70329114,118.602532 L13.0268354,119.250633 L29.2293671,120.352405 L53.5331646,122.037468 L71.161519,123.07443 L97.28,125.796456 L101.427848,125.796456 L102.011139,124.111392 L100.585316,123.07443 L99.4835443,122.037468 L74.3372152,104.992405 L47.116962,86.9751899 L32.8587342,76.6055696 L25.1463291,71.3559494 L21.2577215,66.4303797 L19.5726582,55.6718987 L26.5721519,47.9594937 L35.9696203,48.6075949 L38.3675949,49.2556962 L47.8946835,56.5792405 L68.2450633,72.3281013 L94.8172152,91.9007595 L98.7058228,95.1412658 L100.261266,94.0394937 L100.455696,93.2617722 L98.7058228,90.3453165 L84.2531646,64.2268354 L68.8283544,37.6546835 L61.958481,26.636962 L60.1437975,20.0263291 C59.4956962,17.3043038 59.0420253,15.0359494 59.0420253,12.2491139 L67.0136709,1.42582278 L71.4207595,-1.42108547e-14 L82.0496203,1.42582278 L86.521519,5.31443038 L93.1321519,20.4151899 L103.825823,44.2005063 L120.417215,76.5407595 L125.277975,86.1326582 L127.87038,95.0116456 L128.842532,97.7336709 L130.527595,97.7336709 L130.527595,96.1782278 L131.888608,77.9665823 L134.416203,55.6070886 L136.878987,26.8313924 L137.721519,18.7301266 L141.739747,9.00860759 L149.711392,3.75898734 L155.933165,6.74025316 L161.053165,14.0637975 L160.340253,18.7949367 L157.294177,38.5620253 L151.331646,69.5412658 L147.443038,90.2805063 L149.711392,90.2805063 L152.303797,87.6881013 L162.803038,73.7539241 L180.431392,51.718481 L188.208608,42.9691139 L197.282025,33.3124051 L203.114937,28.7108861 L214.132658,28.7108861 L222.233924,40.7655696 L218.604557,53.2091139 L207.262785,67.596962 L197.865316,79.7812658 L184.38481,97.9281013 L175.959494,112.44557 L176.737215,113.612152 L178.746329,113.417722 L209.207089,106.936709 L225.668861,103.955443 L245.306329,100.585316 L254.185316,104.733165 L255.157468,108.945823 L251.657722,117.56557 L230.659241,122.75038 L206.031392,127.675949 L169.348861,136.360506 L168.89519,136.684557 L169.413671,137.332658 L185.940253,138.888101 L193.004557,139.276962 L210.308861,139.276962 L242.519494,141.674937 L250.94481,147.248608 L256,154.053671 L255.157468,159.238481 L242.195443,165.849114 L224.696709,161.701266 L183.866329,151.979747 L169.867342,148.48 L167.923038,148.48 L167.923038,149.646582 L179.588861,161.053165 L200.976203,180.366582 L227.742785,205.253671 L229.103797,211.410633 L225.668861,216.271392 L222.039494,215.752911 L198.513418,198.059747 L189.44,190.088101 L168.89519,172.783797 L167.534177,172.783797 L167.534177,174.598481 L172.265316,181.533165 L197.282025,219.123038 L198.578228,230.659241 L196.763544,234.418228 L190.282532,236.686582 L183.153418,235.39038 L168.506329,214.84557 L153.40557,191.708354 L141.221266,170.969114 L139.730633,171.811646 L132.536709,249.259747 L129.166582,253.213165 L121.389367,256.19443 L114.908354,251.268861 L111.473418,243.297215 L114.908354,227.548354 L119.056203,207.003544 L122.426329,190.671392 L125.472405,170.385823 L127.287089,163.64557 L127.157468,163.191899 L125.666835,163.386329 L110.371646,184.38481 L87.1048101,215.817722 L68.6987342,235.52 L64.2916456,237.269873 L56.6440506,233.316456 L57.356962,226.252152 L61.6344304,219.96557 L87.1048101,187.560506 L102.46481,167.469367 L112.380759,155.868354 L112.315949,154.183291 L111.732658,154.183291 L44.0708861,198.124557 L32.0162025,199.68 L26.8313924,194.819241 L27.4794937,186.847595 L29.9422785,184.25519 L50.2926582,170.256203 L50.2278481,170.321013 Z",
                fill: "currentColor",
              }),
            }),
          ],
        });
      }
      function a(e) {
        return (0, i.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 471 289.85",
          ...e,
          children: [
            (0, i.jsx)("title", { children: "Markdown" }),
            (0, i.jsx)("path", {
              d: "M437,289.85H34a34,34,0,0,1-34-34V34A34,34,0,0,1,34,0H437a34,34,0,0,1,34,34V255.88A34,34,0,0,1,437,289.85ZM34,22.64A11.34,11.34,0,0,0,22.64,34V255.88A11.34,11.34,0,0,0,34,267.2H437a11.34,11.34,0,0,0,11.33-11.32V34A11.34,11.34,0,0,0,437,22.64Z",
            }),
            (0, i.jsx)("path", {
              d: "M67.93,221.91v-154h45.29l45.29,56.61L203.8,67.93h45.29v154H203.8V133.6l-45.29,56.61L113.22,133.6v88.31Zm283.06,0-67.94-74.72h45.29V67.93h45.29v79.26h45.29Z",
            }),
          ],
        });
      }
      var o = r(90983),
        c = r(4093),
        d = r(88118),
        u = r(86424),
        h = r(64824),
        p = r(6988);
      function m(e) {
        let { assistant: t, type: r } = e,
          n = (0, l.J4)(),
          s = (0, d.ok)();
        return (0, i.jsx)(j, {
          type: r,
          icon: t.icon,
          label: t.label,
          shortLabel: (0, d.si)(s, "ask"),
          description: (0, d.si)(s, "ai_chat_ask_about_page", t.label),
          disabled: n.loading,
          onClick: () => {
            t.open((0, d.si)(s, "ai_chat_suggested_questions_about_this_page"));
          },
        });
      }
      let x = (0, r(13368).v)((e) => {
          let t = null;
          return {
            copied: !1,
            loading: !1,
            setLoading: (t) => e({ loading: t }),
            copy: async (r, i) => {
              let { onSuccess: l } = i || {};
              t && clearTimeout(t),
                await navigator.clipboard.writeText(r),
                e({ copied: !0 }),
                (t = setTimeout(() => {
                  e({ copied: !1 }), null == l || l(), (t = null);
                }, 1500));
            },
          };
        }),
        f = new p.A({ maxSize: 10 });
      function g(e) {
        let { markdownPageUrl: t, type: r, isDefaultAction: l } = e,
          n = (0, d.ok)(),
          s = (0, c.useDropdownMenuClose)(),
          { copied: a, loading: o, setLoading: u, copy: h } = x(),
          p = async () => {
            u(!0);
            let e = await fetch(t).then((e) => e.text());
            return f.set(t, e), u(!1), e;
          },
          m = async (e) => {
            l || e.preventDefault(),
              h(f.get(t) || (await p()), {
                onSuccess: () => {
                  "dropdown-menu-item" !== r || l || s();
                },
              });
          };
        return (0, i.jsx)(j, {
          type: r,
          icon: a ? "check" : "copy",
          label: a ? (0, d.si)(n, "code_copied") : (0, d.si)(n, "copy_page"),
          shortLabel: a
            ? (0, d.si)(n, "code_copied")
            : (0, d.si)(n, "code_copy"),
          description: (0, d.si)(n, "copy_page_markdown"),
          onClick: m,
          loading: o,
        });
      }
      function L(e) {
        let { markdownPageUrl: t, type: r } = e,
          l = (0, d.ok)();
        return (0, i.jsx)(j, {
          type: r,
          icon: (0, i.jsx)(a, { className: "size-4 fill-current" }),
          label: (0, d.si)(l, "view_page_markdown"),
          description: (0, d.si)(l, "view_page_plaintext"),
          href: t,
        });
      }
      function v(e) {
        let { provider: t, url: r, type: l } = e,
          a = (0, d.ok)(),
          o = "chatgpt" === t ? "ChatGPT" : "Claude";
        return (0, i.jsx)(j, {
          type: l,
          icon:
            "chatgpt" === t
              ? (0, i.jsx)(n, { className: "size-3.5 fill-current" })
              : (0, i.jsx)(s, { className: "size-3.5 fill-current" }),
          label: (0, d.si)(a, "open_in", o),
          shortLabel: o,
          description: (0, d.si)(a, "ai_chat_ask_about_page", o),
          href: (function (e, t, r) {
            let i = encodeURIComponent(
              (0, d.si)(r, "open_in_llms_pre_prompt", t)
            );
            switch (e) {
              case "chatgpt":
                return "https://chat.openai.com/?q=".concat(i);
              case "claude":
                return "https://claude.ai/new?q=".concat(i);
              default:
                (0, h.Ay)(e);
            }
          })(t, r, a),
        });
      }
      function b(e) {
        let { type: t, provider: r, url: l } = e,
          n = (0, d.ok)();
        return (0, i.jsx)(j, {
          type: t,
          icon: "gitlab" === r ? "gitlab" : "github",
          label: (0, d.si)(
            n,
            "edit_on_git",
            "github" === r ? "GitHub" : "gitlab" === r ? "GitLab" : "Git"
          ),
          shortLabel: (0, d.si)(n, "edit"),
          href: l,
        });
      }
      function w(e) {
        let { url: t, type: r } = e,
          l = (0, d.ok)();
        return (0, i.jsx)(j, {
          type: r,
          icon: "file-pdf",
          label: (0, d.si)(l, "pdf_download"),
          href: t,
          target: "_self",
        });
      }
      function j(e) {
        let {
          type: t,
          icon: r,
          label: l,
          shortLabel: n,
          onClick: s,
          href: a,
          target: d = "_blank",
          description: h,
          disabled: p,
          loading: m,
        } = e;
        return "button" === t
          ? (0, i.jsx)(o.Button, {
              icon: m
                ? (0, i.jsx)(u.In, {
                    icon: "spinner-third",
                    className: "size-4 animate-spin",
                  })
                : r,
              size: "xsmall",
              variant: "secondary",
              label: null != l ? l : n,
              className: "bg-tint-base text-sm",
              onClick: s,
              href: a,
              target: a ? d : void 0,
              disabled: p || m,
              children: n,
            })
          : (0, i.jsxs)(c.DropdownMenuItem, {
              className: "flex items-stretch gap-2.5 p-2",
              href: a,
              target: d,
              onClick: s,
              disabled: p || m,
              children: [
                (0, i.jsx)("div", {
                  className:
                    "flex size-5 items-center justify-center text-tint",
                  children: m
                    ? (0, i.jsx)(u.In, {
                        icon: "spinner-third",
                        className: "size-4 shrink-0 animate-spin",
                      })
                    : r
                    ? "string" == typeof r
                      ? (0, i.jsx)(u.In, {
                          icon: r,
                          iconStyle: u.pO.Regular,
                          className:
                            "size-4 shrink-0 fill-transparent stroke-current",
                        })
                      : r
                    : null,
                }),
                (0, i.jsxs)("div", {
                  className: "flex flex-1 flex-col gap-0.5",
                  children: [
                    (0, i.jsxs)("span", {
                      className: "flex items-center gap-1 text-tint-strong",
                      children: [
                        (0, i.jsx)("span", {
                          className: "truncate font-medium text-sm",
                          children: l,
                        }),
                        a && "_blank" === d
                          ? (0, i.jsx)(u.In, {
                              icon: "arrow-up-right",
                              className: "size-3 shrink-0 text-tint-subtle",
                            })
                          : null,
                      ],
                    }),
                    h &&
                      (0, i.jsx)("span", {
                        className: "text-tint text-xs",
                        children: h,
                      }),
                  ],
                }),
              ],
            });
      }
      var y = r(7620);
      function _(e) {
        let t = (0, y.useRef)(null),
          r = (0, l.OD)().assistants.filter((e) => !0 === e.ui && e.pageAction),
          n = (0, d.ok)(),
          s = [r.length > 0, e.actions.markdown, e.editOnGit].filter(Boolean),
          a = [e.actions.externalAI, e.pdfUrl].filter(Boolean);
        return [...s, ...a].length > 0
          ? (0, i.jsxs)(o.ButtonGroup, {
              ref: t,
              className: e.className,
              children: [
                s.length > 0 ? (0, i.jsx)(k, { ...e }) : null,
                a.length > 0
                  ? (0, i.jsx)(c.DropdownMenu, {
                      align: "end",
                      className: "!min-w-60 max-w-max",
                      button: (0, i.jsx)(o.Button, {
                        icon: (0, i.jsx)(u.In, {
                          icon: "chevron-down",
                          className:
                            "size-3 transition-transform group-data-[state=open]/button:rotate-180",
                        }),
                        label: (0, d.si)(
                          n,
                          s.some(Boolean) ? "more" : "actions"
                        ),
                        iconOnly: s.some(Boolean),
                        size: "xsmall",
                        variant: "secondary",
                        className: "bg-tint-base text-sm",
                      }),
                      children: (0, i.jsx)(C, { ...e }),
                    })
                  : null,
              ],
            })
          : null;
      }
      function C(e) {
        let { markdownPageUrl: t, actions: r } = e,
          n = (0, l.OD)().assistants.filter((e) => !0 === e.ui && e.pageAction);
        return (0, i.jsxs)(i.Fragment, {
          children: [
            n.map((e) =>
              (0, i.jsx)(
                m,
                { assistant: e, type: "dropdown-menu-item" },
                e.label
              )
            ),
            r.markdown
              ? (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsx)(c.DropdownMenuSeparator, {
                      className: "first:hidden",
                    }),
                    (0, i.jsx)(g, {
                      isDefaultAction: !n.length,
                      markdownPageUrl: t,
                      type: "dropdown-menu-item",
                    }),
                    (0, i.jsx)(L, {
                      markdownPageUrl: t,
                      type: "dropdown-menu-item",
                    }),
                  ],
                })
              : null,
            r.externalAI
              ? (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsx)(c.DropdownMenuSeparator, {
                      className: "first:hidden",
                    }),
                    (0, i.jsx)(v, {
                      provider: "chatgpt",
                      url: t,
                      type: "dropdown-menu-item",
                    }),
                    (0, i.jsx)(v, {
                      provider: "claude",
                      url: t,
                      type: "dropdown-menu-item",
                    }),
                  ],
                })
              : null,
            e.editOnGit || e.pdfUrl
              ? (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsx)(c.DropdownMenuSeparator, {
                      className: "first:hidden",
                    }),
                    e.editOnGit
                      ? (0, i.jsx)(b, {
                          type: "dropdown-menu-item",
                          provider: e.editOnGit.provider,
                          url: e.editOnGit.url,
                        })
                      : null,
                    e.pdfUrl
                      ? (0, i.jsx)(w, {
                          url: e.pdfUrl,
                          type: "dropdown-menu-item",
                        })
                      : null,
                  ],
                })
              : null,
          ],
        });
      }
      function k(e) {
        let { markdownPageUrl: t, actions: r } = e,
          n = (0, l.OD)().assistants.filter(
            (e) => !0 === e.ui && e.pageAction
          )[0];
        return n
          ? (0, i.jsx)(m, { assistant: n, type: "button" })
          : e.editOnGit
          ? (0, i.jsx)(b, {
              type: "button",
              provider: e.editOnGit.provider,
              url: e.editOnGit.url,
            })
          : r.markdown
          ? (0, i.jsx)(g, {
              isDefaultAction: !n,
              markdownPageUrl: t,
              type: "button",
            })
          : void 0;
      }
    },
    30881: (e, t, r) => {
      r.d(t, { ScrollSectionsList: () => d });
      var i = r(54568),
        l = r(7620),
        n = r(62574),
        s = r(98743),
        a = r(54217),
        o = r(90526);
      let c = l.memo((e) => {
        let { className: t } = e;
        return (0, i.jsx)("div", {
          className: (0, s.P)([
            "border-primary-9",
            "tint:border-primary-11",
            "sidebar-list-line:border-l-2",
            "inset-0",
            "pointer-events-none",
            "absolute",
            "z-0",
            "sidebar-list-line:-left-px",
            "rounded-md",
            "straight-corners:rounded-none",
            "circular-corners:rounded-2xl",
            "sidebar-list-line:rounded-l-none!",
            "sidebar-list-pill:bg-primary",
            "[html.theme-muted.sidebar-list-pill_&]:bg-primary-hover",
            "[html.theme-gradient.sidebar-list-pill_&]:bg-primary-active",
            "contrast-more:border",
            "contrast-more:bg-primary",
            t,
          ]),
        });
      });
      function d(e) {
        let { sections: t } = e,
          r = l.useMemo(
            () =>
              t.map((e) => {
                let { id: t } = e;
                return t;
              }),
            [t]
          ),
          d = (0, a.rz)(),
          u = (0, n.W1)(r, {
            rootMargin: "-".concat(o.vV, "px 0px -40% 0px"),
            threshold: 0.9,
            enabled: d,
          }),
          h = l.useRef(null),
          p = l.useRef(null);
        return (
          l.useEffect(() => {
            if (u && p.current && h.current) {
              var e;
              null == (e = h.current) ||
                e.scrollTo({
                  top: p.current.offsetTop - 100,
                  behavior: "smooth",
                });
            }
          }, [u]),
          (0, i.jsx)("ul", {
            className:
              "relative flex flex-col overflow-y-auto border-tint-subtle sidebar-list-line:border-l pb-5 xl:max-2xl:page-api-block:mt-0 xl:max-2xl:page-api-block:p-2",
            ref: h,
            children: t.map((e) =>
              (0, i.jsxs)(
                "li",
                {
                  className: (0, s.P)(
                    "flex",
                    "flex-row",
                    "relative",
                    "h-fit",
                    "mt-2",
                    "first:mt-0",
                    "mb-0.5",
                    e.depth > 1 && ["ml-3", "my-0", "sidebar-list-line:ml-0"]
                  ),
                  ref: u === e.id ? p : null,
                  children: [
                    u === e.id &&
                      (0, i.jsx)(c, {
                        className: (0, s.P)(
                          "sidebar-list-default:hidden",
                          (null == e ? void 0 : e.depth) > 1
                            ? [
                                "sidebar-list-default:rounded-l-none",
                                "sidebar-list-line:rounded-l-none",
                              ]
                            : [
                                "sidebar-list-default:ml-3",
                                "contrast-more:sidebar-list-default:ml-0",
                              ]
                        ),
                      }),
                    (0, i.jsxs)("a", {
                      href: "#".concat(e.id),
                      className: (0, s.P)(
                        "relative",
                        "z-10",
                        "text-sm",
                        "w-full",
                        "py-1",
                        "px-3",
                        "transition-all",
                        "duration-200",
                        "rounded-md",
                        "straight-corners:rounded-none",
                        "circular-corners:rounded-2xl",
                        "sidebar-list-line:rounded-l-none!",
                        "hover:bg-tint-hover",
                        "theme-gradient:hover:bg-tint-12/1",
                        "hover:text-tint-strong",
                        "contrast-more:hover:ring-1",
                        "contrast-more:hover:ring-inset",
                        "contrast-more:hover:ring-current",
                        e.depth > 1 && [
                          "subitem",
                          "sidebar-list-line:pl-6",
                          "opacity-8",
                          "contrast-more:opacity-11",
                          "sidebar-list-default:rounded-l-none",
                          "sidebar-list-default:border-l",
                          "sidebar-list-default:border-tint",
                        ],
                        u === e.id && [
                          "text-primary-subtle",
                          "hover:text-primary",
                          "contrast-more:text-primary",
                          "contrast-more:hover:text-primary-strong",
                          "sidebar-list-line:ml-px",
                          "hover:bg-primary-hover",
                          "theme-muted:hover:bg-primary-active",
                          "[html.sidebar-filled.theme-bold.tint_&]:hover:bg-primary-active",
                          "theme-gradient:hover:bg-primary-active",
                          "tint:font-semibold",
                          "contrast-more:font-semibold",
                          "sidebar-list-default:border-tint",
                        ]
                      ),
                      children: [
                        e.tag
                          ? (0, i.jsx)("span", {
                              className:
                                "-mt-0.5 openapi-method text-xs! openapi-method-".concat(
                                  e.tag.toLowerCase()
                                ),
                              children: e.tag,
                            })
                          : null,
                        (0, i.jsx)("span", {
                          className: (0, s.P)(
                            e.deprecated && [
                              "line-through",
                              "opacity-50",
                              "contrast-more:opacity-60",
                            ]
                          ),
                          children: e.title,
                        }),
                      ],
                    }),
                  ],
                },
                e.id
              )
            ),
          })
        );
      }
    },
    32292: (e, t, r) => {
      r.r(t), r.d(t, { SitePageNotFound: () => h });
      var i = r(54568),
        l = r(24578),
        n = r(88118),
        s = r(98743),
        a = r(5772),
        o = r(62942),
        c = r(7620),
        d = r(4788),
        u = r(62574);
      function h() {
        let e = (0, d.K)(),
          t = (0, n.ok)(),
          r = (0, o.useRouter)(),
          h = (0, o.useSearchParams)(),
          p = null == h ? void 0 : h.get("fallback");
        return (
          (0, c.useEffect)(() => {
            p && r.replace(e);
          }, [e, p, r]),
          (0, i.jsx)(u.G8, {
            page: null,
            children: (0, i.jsxs)("div", {
              className: (0, s.P)(
                "flex-1",
                "flex",
                "flex-row",
                "items-center",
                "justify-center",
                "py-9",
                "min-h-[calc(100vh-64px)] lg:min-h-fit"
              ),
              children: [
                (0, i.jsxs)("div", {
                  className: (0, s.P)("max-w-80"),
                  children: [
                    (0, i.jsx)("h2", {
                      className: (0, s.P)("text-2xl", "font-semibold", "mb-2"),
                      children: (0, n.t)(t, "notfound_title"),
                    }),
                    (0, i.jsx)("p", {
                      className: (0, s.P)("text-base", "mb-4"),
                      children: (0, n.t)(t, "notfound"),
                    }),
                  ],
                }),
                (0, i.jsx)(l.ax, { displayContext: a.qT.Site }),
              ],
            }),
          })
        );
      }
    },
    41341: (e, t, r) => {
      r.d(t, { PreservePageLayout: () => l });
      var i = r(7620);
      function l(e) {
        let { siteWidthWide: t } = e;
        return (
          i.useLayoutEffect(() => {
            let e = document.querySelector("header");
            e &&
              (t
                ? e.classList.add("site-width-wide")
                : e.classList.remove("site-width-wide"));
          }, [t]),
          null
        );
      }
    },
    47836: (e, t, r) => {
      r.r(t), r.d(t, { Ad: () => p });
      var i = r(54568),
        l = r(5772),
        n = r(7620),
        s = r(88118),
        a = r(98743),
        o = r(24578);
      let c = "undefined" != typeof IntersectionObserver;
      var d = r(54217),
        u = r(25316);
      let h = (0, u.createServerReference)(
        "406ae1a581061b3e71b97976e3d692a9084dd022ff",
        u.callServer,
        void 0,
        u.findSourceMapURL,
        "renderAd"
      );
      function p(e) {
        let {
            zoneId: t,
            spaceId: r,
            placement: s,
            ignore: d,
            siteAdsStatus: u,
            style: p,
            mode: x = "auto",
          } = e,
          f = n.useRef(null),
          [g, L] = n.useState(void 0),
          v = (0, o.jt)();
        n.useEffect(() => {
          (null == g ? void 0 : g.insightsAd) &&
            v({ type: "ad_display", ad: g.insightsAd });
        }, [g, v]);
        let b = (function (e, t) {
          let [r, i] = (0, n.useState)(!1);
          return (
            (0, n.useEffect)(() => {
              if (!c) return void i(!0);
              if (!e.current) return;
              let r = new IntersectionObserver(
                (e) => {
                  let [t] = e;
                  (null == t ? void 0 : t.isIntersecting) &&
                    (i(!0), r.disconnect());
                },
                {
                  root: null == t ? void 0 : t.root,
                  rootMargin: null == t ? void 0 : t.rootMargin,
                  threshold: null == t ? void 0 : t.threshold,
                }
              );
              return r.observe(e.current), () => r.disconnect();
            }, [
              e,
              null == t ? void 0 : t.root,
              null == t ? void 0 : t.rootMargin,
              null == t ? void 0 : t.threshold,
            ]),
            r
          );
        })(f, { threshold: 0.1 });
        return (
          n.useEffect(() => {
            if (!b) return;
            let e = !1,
              r = new URL(window.location.href).searchParams.get("ads_preview"),
              i = !!r,
              n = i ? "CVAIKKQM" : t,
              a =
                "placeholder" === r ||
                (u && (u === l.ck.Pending || u === l.ck.InReview));
            if (n || a)
              return (
                (async () => {
                  let t = a
                    ? await h({ source: "placeholder" })
                    : n
                    ? await h({
                        placement: s,
                        ignore: d || i,
                        zoneId: n,
                        mode: x,
                        source: "live",
                      })
                    : void 0;
                  !e && t && L(t);
                })(),
                () => {
                  e = !0;
                }
              );
          }, [b, t, d, s, x, u]),
          (0, i.jsx)("div", {
            ref: f,
            className: (0, a.P)(p),
            "data-visual-test": "removed",
            children: g
              ? (0, i.jsxs)(i.Fragment, {
                  children: [g.children, (0, i.jsx)(m, { spaceId: r })],
                })
              : null,
          })
        );
      }
      function m(e) {
        let { spaceId: t } = e,
          r = (0, s.ok)(),
          n = new URL("https://www.gitbook.com");
        return (
          n.searchParams.set("utm_source", "content"),
          n.searchParams.set("utm_medium", "sponsored-by-gitbook"),
          n.searchParams.set("utm_campaign", t),
          (0, i.jsx)("p", {
            className: (0, a.P)(
              "mt-2",
              "mr-2",
              "text-xs",
              "text-right",
              "text-tint-subtle"
            ),
            children: (0, i.jsx)(d.N_, {
              target: "_blank",
              href: n.toString(),
              className: (0, a.P)("hover:underline"),
              insights: { type: "trademark_click", placement: l.H9.Ad },
              children: (0, s.t)(r, "sponsored_via_gitbook"),
            }),
          })
        );
      }
    },
    75555: (e, t, r) => {
      r.r(t),
        r.d(t, {
          PageContext: () => n,
          PageContextProvider: () => s,
          usePageContext: () => a,
        });
      var i = r(54568),
        l = r(7620);
      let n = l.createContext(null);
      function s(e) {
        let { pageId: t, spaceId: r, title: s, children: a } = e,
          o = l.useMemo(() => ({ pageId: t, spaceId: r, title: s }), [t, r, s]);
        return (0, i.jsx)(n.Provider, { value: o, children: a });
      }
      function a() {
        let e = l.useContext(n);
        if (!e)
          throw Error(
            "usePageContext must be used within a PageContextProvider"
          );
        return e;
      }
    },
    90654: (e, t, r) => {
      r.r(t), r.d(t, { default: () => i });
      let i = {
        src: "https://static-2v.gitbook.com/_next/static/media/default-page-cover.a2ccd7e9.svg",
        height: 1081,
        width: 1920,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    99447: (e, t, r) => {
      r.d(t, { PageCoverImage: () => c });
      var i = r(54568),
        l = r(98743),
        n = r(7620),
        s = r(60357);
      let a = { width: 1990, height: 480 };
      function o(e, t, r) {
        if (!r.size || 0 === t) return "50%";
        let i =
            e.height && e.width
              ? Math.max(e.width / r.size.width, e.height / r.size.height)
              : 1,
          l = r.size ? r.size.height * i : a.height,
          n = e.height && r.size ? (e.height - l) / 2 + t * i : t;
        return "".concat(n, "px");
      }
      function c(e) {
        let { imgs: t, y: r } = e,
          c = (0, n.useRef)(null),
          d = (0, s.wY)({ ref: c });
        return (0, i.jsxs)("div", {
          className: "h-full w-full overflow-hidden",
          ref: c,
          children: [
            (0, i.jsx)("img", {
              src: t.light.src,
              srcSet: t.light.srcSet,
              sizes: t.light.sizes,
              fetchPriority: "high",
              alt: "Page cover",
              className: (0, l.P)(
                "w-full",
                "object-cover",
                t.dark ? "dark:hidden" : ""
              ),
              style: {
                aspectRatio: "".concat(a.width, "/").concat(a.height),
                objectPosition: "50% ".concat(o(d, r, t.light)),
              },
            }),
            t.dark &&
              (0, i.jsx)("img", {
                src: t.dark.src,
                srcSet: t.dark.srcSet,
                sizes: t.dark.sizes,
                fetchPriority: "low",
                alt: "Page cover",
                className: (0, l.P)(
                  "w-full",
                  "object-cover",
                  "dark:inline",
                  "hidden"
                ),
                style: {
                  aspectRatio: "".concat(a.width, "/").concat(a.height),
                  objectPosition: "50% ".concat(o(d, r, t.dark)),
                },
              }),
          ],
        });
      }
    },
  },
]);
