"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7762],
  {
    4788: (e, t, n) => {
      n.d(t, { K: () => i, SpaceLayoutContextProvider: () => r });
      var s = n(54568),
        a = n(7620);
      let l = a.createContext({ basePath: "" });
      function r(e) {
        let { basePath: t, children: n } = e,
          r = a.useMemo(() => ({ basePath: t }), [t]);
        return (0, s.jsx)(l.Provider, { value: r, children: n });
      }
      function i() {
        let e = a.useContext(l);
        if (!e) throw Error("SpaceLayoutContext not found");
        return e.basePath;
      }
    },
    10087: (e, t, n) => {
      n.r(t),
        n.d(t, {
          AIChatProvider: () => b,
          useAIChatController: () => v,
          useAIChatState: () => g,
        });
      var s = n(54568),
        a = n(13368),
        l = n(88118),
        r = n(96021),
        i = n(5772),
        o = n(7620),
        c = n(24578),
        u = n(89608),
        d = n(54223),
        m = n(25316);
      let h = (0, m.createServerReference)(
        "40a8bc3f1dcfe4503a90cf0f4bafc9b11adc4b21ee",
        m.callServer,
        void 0,
        m.findSourceMapURL,
        "streamAIChatResponse"
      );
      var p = n(62574);
      let f = o.createContext(null),
        x = a.v(() => ({
          opened: !1,
          responseId: null,
          messages: [],
          query: null,
          followUpSuggestions: [],
          pendingTools: [],
          loading: !1,
          error: !1,
          initialQuery: null,
        }));
      function g() {
        return a.P(x);
      }
      function b(e) {
        let { renderMessageOptions: t, children: n } = e,
          a = (function () {
            let e = (function () {
                let e = (0, p.aP)();
                return o.useMemo(
                  () => ({
                    location: e
                      ? { spaceId: e.spaceId, pageId: e.pageId }
                      : void 0,
                  }),
                  [e]
                );
              })(),
              t = o.useRef(e);
            return (
              o.useEffect(() => {
                t.current = e;
              }, [e]),
              t
            );
          })(),
          m = (0, c.jt)(),
          [, g] = (0, d.SQ)(),
          b = (0, l.ok)(),
          v = o.useCallback(() => {
            let { initialQuery: e } = x.getState();
            x.setState((e) => ({ ...e, opened: !0 })),
              g((t) => {
                var n, s, a, l;
                return {
                  ask:
                    null !=
                    (s = null != (n = null == t ? void 0 : t.ask) ? n : e)
                      ? s
                      : "",
                  query: null != (a = null == t ? void 0 : t.query) ? a : null,
                  global: null != (l = null == t ? void 0 : t.global) && l,
                  open: !1,
                };
              });
          }, [g]),
          y = o.useCallback(() => {
            x.setState((e) => ({ ...e, opened: !1 })),
              g((e) => {
                var t, n;
                return {
                  ask: null,
                  query: null != (t = null == e ? void 0 : e.query) ? t : null,
                  global: null != (n = null == e ? void 0 : e.global) && n,
                  open: !1,
                };
              });
          }, [g]),
          k = o.useCallback(
            async (e) => {
              x.setState((e) => ({
                ...e,
                followUpSuggestions: [],
                pendingTools: [],
                loading: !0,
                error: !1,
                messages: [
                  ...e.messages,
                  { role: i.W7.Assistant, content: null },
                ],
              }));
              let n = async (e) => {
                  let t = u.By.getState().tools.find(
                    (t) => t.name === e.toolCall.tool
                  );
                  if (!t)
                    throw Error("Tool ".concat(e.toolCall.tool, " not found"));
                  try {
                    let n = await t.execute(e.toolCall.input);
                    k({
                      toolCall: {
                        tool: e.toolCall.tool,
                        toolCallId: e.toolCallId,
                        output: n.output,
                        summary: n.summary,
                      },
                    });
                  } catch (t) {
                    k({
                      toolCall: {
                        tool: e.toolCall.tool,
                        toolCallId: e.toolCallId,
                        output: {
                          error:
                            t instanceof Error ? t.message : "Unknown error",
                        },
                        summary: {
                          icon: "bomb",
                          text: "An error occurred while executing the tool",
                        },
                      },
                    });
                  }
                },
                s = null;
              try {
                var l, o, c, d;
                let m = u.By.getState().tools;
                for await (let u of await h({
                  message: e.message,
                  toolCall: e.toolCall,
                  messageContext: a.current,
                  previousResponseId:
                    null != (l = x.getState().responseId) ? l : void 0,
                  tools: m.map((e) => ({
                    name: e.name,
                    description: e.description,
                    inputSchema: e.inputSchema,
                  })),
                  options: {
                    withLinkPreviews:
                      null == (o = null == t ? void 0 : t.withLinkPreviews) ||
                      o,
                    withToolCalls:
                      null == (c = null == t ? void 0 : t.withToolCalls) || c,
                    asEmbeddable:
                      null != (d = null == t ? void 0 : t.asEmbeddable) && d,
                  },
                })) {
                  if (!u) continue;
                  if (e.message && x.getState().query !== e.message) break;
                  let t = u.event;
                  switch (t.type) {
                    case "response_finish":
                      x.setState((e) => ({
                        ...e,
                        responseId: t.responseId,
                        loading: !1,
                        error: !1,
                      }));
                      break;
                    case "response_followup_suggestion":
                      x.setState((e) => ({
                        ...e,
                        followUpSuggestions: [
                          ...e.followUpSuggestions,
                          ...t.suggestions,
                        ],
                      }));
                      break;
                    case "response_tool_call_pending": {
                      let e = m.find((e) => e.name === t.toolCall.tool);
                      if (!e)
                        throw Error(
                          "Tool ".concat(t.toolCall.tool, " not found")
                        );
                      let a = e.confirmation;
                      a
                        ? x.setState((e) => ({
                            ...e,
                            pendingTools: [
                              ...e.pendingTools,
                              {
                                icon: a.icon,
                                label: a.label,
                                cancelToolCall: {
                                  tool: t.toolCall.tool,
                                  toolCallId: t.toolCallId,
                                  output: {
                                    cancelled:
                                      "User did not confirm the tool call",
                                  },
                                  summary: {
                                    icon: "forward",
                                    text: (0, r.s)(
                                      b,
                                      "tool_call_skipped",
                                      a.label
                                    ),
                                  },
                                },
                                confirm: async () => {
                                  await n(t);
                                },
                              },
                            ],
                          }))
                        : (s = t);
                    }
                  }
                  x.setState((e) => ({
                    ...e,
                    messages: [
                      ...e.messages.slice(0, -1),
                      { role: i.W7.Assistant, content: u.content },
                    ],
                  }));
                }
                s && (await n(s)),
                  x.setState((e) => ({ ...e, loading: !1, error: !1 }));
              } catch (e) {
                console.error("Error streaming AI response", e),
                  x.setState((e) => ({ ...e, loading: !1, error: !0 }));
              }
            },
            [
              a.current,
              null == t ? void 0 : t.withLinkPreviews,
              null == t ? void 0 : t.withToolCalls,
              null == t ? void 0 : t.asEmbeddable,
              b,
            ]
          ),
          _ = o.useCallback(
            async (e) => {
              let { query: t, messages: n, pendingTools: s } = x.getState();
              if (
                (0 === n.length &&
                  g((t) => {
                    var n, s;
                    return {
                      ask: e.message,
                      query:
                        null != (n = null == t ? void 0 : t.query) ? n : null,
                      global: null != (s = null == t ? void 0 : t.global) && s,
                      open: !1,
                    };
                  }),
                t === e.message)
              )
                return;
              m({ type: "ask_question", query: e.message }),
                x.setState((t) => {
                  var n;
                  return {
                    ...t,
                    messages: [
                      ...t.messages,
                      { role: i.W7.User, content: e.message, query: e.message },
                    ],
                    query: e.message,
                    followUpSuggestions: [],
                    loading: !0,
                    error: !1,
                    initialQuery: null != (n = t.initialQuery) ? n : e.message,
                  };
                });
              let a = s[0];
              k({
                message: e.message,
                ...(a ? { toolCall: a.cancelToolCall } : {}),
              });
            },
            [g, m, k]
          ),
          j = o.useCallback(() => {
            x.setState((e) => ({
              opened: e.opened,
              loading: !1,
              messages: [],
              query: null,
              followUpSuggestions: [],
              pendingTools: [],
              responseId: null,
              error: !1,
              initialQuery: null,
            })),
              g((e) => {
                var t, n;
                return {
                  ask: "",
                  query: null != (t = null == e ? void 0 : e.query) ? t : null,
                  global: null != (n = null == e ? void 0 : e.global) && n,
                  open: !1,
                };
              });
          }, [g]),
          w = o.useMemo(
            () => ({ open: v, close: y, clear: j, postMessage: _ }),
            [v, y, j, _]
          );
        return (0, s.jsx)(f.Provider, { value: w, children: n });
      }
      function v() {
        let e = o.useContext(f);
        if (!e)
          throw Error(
            "useAIChatController must be used within an AIChatProvider"
          );
        return e;
      }
    },
    15954: (e, t, n) => {
      n.r(t), n.d(t, { SearchContainer: () => B });
      var s = n(54568),
        a = n(5772),
        l = n(62942),
        r = n(7620),
        i = n(58541),
        o = n(55809),
        c = n(99507),
        u = n(24578),
        d = n(54217),
        m = n(86424),
        h = n(65938),
        p = n(88118),
        f = n(96021),
        x = n(98743);
      let g = (0, r.createContext)(void 0);
      function b(e) {
        let { children: t, value: n } = e;
        return (0, s.jsx)(g.Provider, { value: n, children: t });
      }
      var v = n(25316);
      let y = (0, v.createServerReference)(
        "402690789a6031777324644c79c5bf0d7e3c2c3002",
        v.callServer,
        void 0,
        v.findSourceMapURL,
        "streamAskQuestion"
      );
      var k = n(21566);
      function _(e) {
        let { query: t } = e,
          n = (0, p.ok)(),
          a = (0, u.jt)(),
          [l, i] = (function () {
            let e = (0, r.useContext)(g);
            if (!e) throw Error("SearchAskContext is not available");
            return e;
          })();
        r.useEffect(() => {
          let e = !1;
          return (
            i({ type: "loading" }),
            (async () => {
              a({ type: "ask_question", query: t });
              let { stream: n } = await y({ question: t });
              for await (let t of (0, h.S7)(n)) {
                if (e) return;
                t && i({ type: "answer", answer: t });
              }
            })().catch(() => {
              e || i({ type: "error" });
            }),
            () => {
              e = !0;
            }
          );
        }, [t, i, a]),
          r.useEffect(
            () => () => {
              i(null);
            },
            [i]
          );
        let o = (0, s.jsx)("div", {
          className: "flex grow items-center justify-center",
          children: (0, s.jsx)(d.Rh, {
            className: (0, x.P)("size-6", "text-tint/6"),
          }),
        });
        return (0, s.jsxs)("div", {
          className: "flex min-h-full p-4",
          children: [
            (null == l ? void 0 : l.type) === "answer"
              ? (0, s.jsx)(r.Suspense, {
                  fallback: o,
                  children: (0, s.jsx)(j, {
                    answer: l.answer,
                    placeholder: o,
                    query: t,
                  }),
                })
              : null,
            (null == l ? void 0 : l.type) === "error"
              ? (0, s.jsx)("div", {
                  className: (0, x.P)("grow p-4 text-center"),
                  children: (0, f.t)(n, "search_ask_error"),
                })
              : null,
            (null == l ? void 0 : l.type) === "loading" ? o : null,
          ],
        });
      }
      function j(e) {
        let { query: t, answer: n, placeholder: a } = e,
          [l, i] = r.useState(null),
          [o, c] = r.useTransition();
        return (
          r.useEffect(() => {
            c(() => {
              i(n);
            });
          }, [n]),
          l
            ? (0, s.jsx)("div", {
                className: (0, x.P)("w-full"),
                children: (0, s.jsx)(w, { query: t, answer: l }),
              })
            : (0, s.jsx)(s.Fragment, { children: a })
        );
      }
      function w(e) {
        var t;
        let { query: n, answer: a } = e,
          l = (0, p.ok)();
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsxs)("div", {
              "data-testid": "search-ask-answer",
              className: "text-tint-strong",
              children: [
                null != (t = a.body) ? t : (0, f.t)(l, "search_ask_no_answer"),
                a.sources.length > 0
                  ? (0, s.jsx)(c.ph, {
                      query: n,
                      className: "-ml-1 mt-2",
                      responseId: "",
                    })
                  : null,
                a.followupQuestions.length > 0
                  ? (0, s.jsx)(C, { followupQuestions: a.followupQuestions })
                  : null,
              ],
            }),
            a.sources.length > 0
              ? (0, s.jsx)(N, {
                  sources: a.sources,
                  language: l,
                  hasAnswer: !!a.body,
                })
              : null,
          ],
        });
      }
      function C(e) {
        let { followupQuestions: t } = e,
          n = (0, k.useSearchLink)();
        return (0, s.jsx)("div", {
          className: (0, x.P)("flex", "flex-col", "flex-wrap", "mt-4"),
          children: t.map((e) =>
            (0, s.jsxs)(
              d.N_,
              {
                className: (0, x.P)(
                  "flex",
                  "items-center",
                  "gap-2",
                  "px-4",
                  "-mx-4",
                  "py-2",
                  "rounded-sm",
                  "straight-corners:rounded-none",
                  "circular-corners:rounded-full",
                  "text-tint",
                  "hover:bg-tint-hover",
                  "focus-within:bg-tint-hover"
                ),
                ...n({ ask: e, open: !0 }),
                children: [],
              },
              e
            )
          ),
        });
      }
      function N(e) {
        let { sources: t, language: n, hasAnswer: a } = e;
        return (0, s.jsxs)("div", {
          className: (0, x.P)(
            "flex",
            "flex-wrap",
            "gap-2",
            "mt-4",
            "sm:mt-6",
            "pt-4",
            "border-t",
            "border-subtle"
          ),
          children: [
            (0, s.jsx)("span", {
              children: (0, f.t)(
                n,
                a ? "search_ask_sources" : "search_ask_sources_no_answer"
              ),
            }),
            t.map((e) =>
              (0, s.jsx)(
                "span",
                {
                  className: (0, x.P)(),
                  children: (0, s.jsxs)(d.N_, {
                    className: (0, x.P)(
                      "flex",
                      "flex-wrap",
                      "gap-1",
                      "items-center",
                      "text-tint",
                      "hover:underline",
                      "links-accent:decoration-[3px]",
                      "links-accent:underline-offset-4",
                      "focus-within:text-primary"
                    ),
                    href: e.href,
                    children: [
                      (0, s.jsx)(m.In, {
                        icon: "arrow-up-right",
                        className: (0, x.P)(
                          "text-tint-subtle",
                          "size-4",
                          "shrink-0"
                        ),
                      }),
                      e.title,
                    ],
                  }),
                },
                e.id
              )
            ),
          ],
        });
      }
      var I = n(27143),
        S = n(64824),
        q = n(5047);
      function L(e) {
        var t;
        let {
            query: n,
            text: a,
            highlight: l = [
              "-z-1",
              "relative",
              "text-bold",
              "bg-primary",
              "text-contrast-primary",
              "px-0.5",
              "-mx-0.5",
              "py-0.5",
              "rounded-sm",
              "straight-corners:rounded-xs",
              "transition-colors",
              "group-hover:bg-primary-active",
              "group-hover:text-contrast-primary-active",
              "group-[.is-active]:bg-primary-active",
              "group-[.is-active]:text-contrast-primary-active",
            ],
          } = e,
          r =
            ((t = a),
            n
              .toLowerCase()
              .split(" ")
              .reduce(
                (e, t) => {
                  var n, s;
                  return (
                    (n = e),
                    (s = t),
                    n.reduce((e, t) => {
                      if (t.match) return e.push(t), e;
                      let { text: n } = t,
                        a = n.toLowerCase().indexOf(s);
                      if (a >= 0) {
                        let t = n.slice(0, a),
                          l = n.slice(a, a + s.length),
                          r = n.slice(a + s.length);
                        return (
                          t.length > 0 && e.push({ text: t }),
                          l.length > 0 && e.push({ text: l, match: s }),
                          r.length > 0 && e.push({ text: r }),
                          e
                        );
                      }
                      return e.push({ text: n }), e;
                    }, [])
                  );
                },
                [{ text: t }]
              ));
        return (0, s.jsx)("span", {
          className: (0, x.P)("relative z-2 whitespace-break-spaces"),
          children: r.map((e, t) =>
            (0, s.jsx)(
              "span",
              { className: (0, x.P)(e.match ? l : null), children: e.text },
              t
            )
          ),
        });
      }
      var P = n(20255);
      let z = r.forwardRef(function (e, t) {
          let {
            children: n,
            href: a,
            active: l,
            className: r,
            leadingIcon: i,
            size: o = "medium",
            action: c,
            ...u
          } = e;
          return (0,
          s.jsxs)(P.Link, { ref: t, href: a, className: (0, x.P)("flex", "items-center", "gap-3", "group", "px-4", "small" === o ? "py-1.5" : "py-3", "text-tint", "hover:bg-tint", "hover:text-tint-strong", "group", "transition-colors", "rounded-corners:rounded-md", "circular-corners:rounded-2xl", l ? ["is-active", "bg-primary", "text-primary-strong", "hover:bg-primary"] : null, r), ...u, children: [(0, s.jsx)("div", { className: "size-4 shrink-0 text-tint-subtle", children: "string" == typeof i ? (0, s.jsx)(m.In, { icon: i, className: "size-4" }) : i }), (0, s.jsx)("div", { className: "grow", children: n }), l ? (0, s.jsx)(d.$n, { label: c, iconOnly: !0, variant: "primary", icon: "arrow-turn-down-left" }) : (0, s.jsx)("div", { className: "flex size-8 shrink-0 items-center justify-center text-tint-subtle", children: (0, s.jsx)(m.In, { icon: "chevron-right", className: "size-3" }) })] });
        }),
        A = r.forwardRef(function (e, t) {
          var n, a;
          let { query: l, item: i, active: o } = e,
            c = (0, p.ok)(),
            u =
              null !=
              (a =
                null == (n = i.breadcrumbs)
                  ? void 0
                  : n.map((e) =>
                      (0, s.jsxs)(
                        "span",
                        {
                          className: "flex items-center gap-1",
                          children: [
                            e.icon
                              ? (0, s.jsx)(m.In, {
                                  className: "size-3",
                                  icon: e.icon,
                                })
                              : null,
                            e.label,
                          ],
                        },
                        e.label
                      )
                    ))
                ? a
                : [];
          return (0,
          s.jsxs)(z, { ref: t, href: i.href, active: o, "data-testid": "search-page-result", action: (0, p.si)(c, "view"), leadingIcon: (0, s.jsx)(m.In, { icon: "memo", className: "size-4" }), insights: { type: "search_open_result", query: l, result: { pageId: i.pageId, spaceId: i.spaceId } }, children: [u.length > 0 ? (0, s.jsx)("div", { className: (0, x.P)("text-xs", "text-tint/7", "contrast-more:text-tint", "group-[.is-active]:text-tint", "transition-colors", "font-normal", "uppercase", "leading-none", "tracking-wider", "mb-1", "flex", "flex-wrap", "gap-x-2", "gap-y-1", "items-center"), children: (u.length > 3 ? [...u.slice(0, 2), (0, s.jsx)(m.In, { icon: "ellipsis-h", className: "size-3" }, "ellipsis"), ...u.slice(-1)] : u).map((e, t) => (0, s.jsxs)(r.Fragment, { children: [0 !== t ? (0, s.jsx)(m.In, { icon: "chevron-right", className: "size-2" }, "".concat(e.key, "-icon")) : null, (0, s.jsx)("span", { className: "line-clamp-1", children: e })] }, t)) }) : null, (0, s.jsx)("p", { className: "line-clamp-2 font-semibold text-base text-tint-strong leading-snug", children: (0, s.jsx)(L, { query: l, text: i.title }) })] });
        }),
        E = r.forwardRef(function (e, t) {
          let { question: n, recommended: a = !1, active: l, assistant: r } = e,
            i = (0, p.ok)(),
            o = (0, k.useSearchLink)();
          return (0, s.jsx)(z, {
            size: a ? "small" : "medium",
            action: (0, p.si)(i, "ask", ""),
            ref: t,
            "data-testid": a
              ? "search-recommended-question"
              : "search-ask-question",
            scroll: !1,
            ...o({ ask: n, query: null, open: "search" === r.mode }, () => {
              r.open(n);
            }),
            active: l,
            leadingIcon: a ? "search" : r.icon,
            className: a ? "pr-1.5" : "",
            children: a
              ? n
              : (0, s.jsxs)(s.Fragment, {
                  children: [
                    (0, s.jsx)("div", {
                      className:
                        "font-semibold text-base text-tint-strong leading-tight",
                      children: (0, p.t)(i, "search_ask", [n]),
                    }),
                    (0, s.jsx)("div", {
                      className: "text-sm text-tint-subtle",
                      children: (0, p.t)(i, "search_ask_description", r.label),
                    }),
                  ],
                }),
          });
        }),
        R = r.forwardRef(function (e, t) {
          let { query: n, item: a, active: l } = e,
            r = (0, p.ok)();
          return (0, s.jsx)(z, {
            ref: t,
            href: a.href,
            size: "small",
            active: l,
            action: (0, p.si)(r, "view"),
            "data-testid": "search-page-section-result",
            insights: {
              type: "search_open_result",
              query: n,
              result: { pageId: a.pageId, spaceId: a.spaceId },
            },
            children: (0, s.jsxs)("div", {
              className: "grow border-tint-subtle border-l-2 pl-4",
              children: [
                a.title
                  ? (0, s.jsx)("p", {
                      className: "font-semibold",
                      children: (0, s.jsx)(L, { query: n, text: a.title }),
                    })
                  : null,
                a.body
                  ? (function (e, t) {
                      let n = e
                        .toLocaleLowerCase()
                        .indexOf(t.toLocaleLowerCase());
                      return (0, s.jsx)("p", {
                        className:
                          "wrap-anywhere relative line-clamp-3 text-sm",
                        children: (0, s.jsx)(L, {
                          query: t,
                          text: n < 20 ? e : "...".concat(e.slice(n - 10)),
                        }),
                      });
                    })(a.body, n)
                  : null,
              ],
            }),
          });
        }),
        M = (0, v.createServerReference)(
          "402dcec56894d34b98af4f35c55f034e9dba74e7fd",
          v.callServer,
          void 0,
          v.findSourceMapURL,
          "streamRecommendedQuestions"
        ),
        T = (0, v.createServerReference)(
          "4005caf9609c2816e4accb17debb8d329992610455",
          v.callServer,
          void 0,
          v.findSourceMapURL,
          "searchAllSiteContent"
        ),
        D = (0, v.createServerReference)(
          "40c7c8b733378eaec606f6f45567d88debaa659aff",
          v.callServer,
          void 0,
          v.findSourceMapURL,
          "searchSiteSpaceContent"
        ),
        O = new Map(),
        U = r.forwardRef(function (e, t) {
          let { children: n, query: a, global: l, siteSpaceId: i } = e,
            c = (0, p.ok)(),
            m = (0, u.jt)(),
            [f, g] = r.useState({ results: [], fetching: !0 }),
            [b, v] = r.useState(null),
            y = r.useRef([]),
            { assistants: k } = (0, o.OD)(),
            _ = k.length > 0;
          r.useEffect(() => {
            if (!a) {
              if (!_) return void g({ results: [], fetching: !1 });
              if (O.has(i)) {
                let e = O.get(i);
                (0, q.assert)(
                  e,
                  "Cached recommended questions should be set for site-space ".concat(
                    i
                  )
                ),
                  g({ results: e, fetching: !1 });
                return;
              }
              g({ results: [], fetching: !1 });
              let e = !1,
                t = new Set(),
                n = [],
                s = setTimeout(async () => {
                  if (e) return;
                  let s = await M({ siteSpaceId: i });
                  for await (let a of (0, h.S7)(s.stream)) {
                    if (!a) continue;
                    let { question: s } = a;
                    !t.has(s) &&
                      (t.add(s),
                      n.push({
                        type: "recommended-question",
                        id: s,
                        question: s,
                      }),
                      O.set(i, n),
                      e || g({ results: [...n], fetching: !1 }));
                  }
                }, 100);
              return () => {
                (e = !0), clearTimeout(s);
              };
            }
            g((e) => ({ results: e.results, fetching: !0 }));
            let e = !1,
              t = setTimeout(async () => {
                let t = await (l ? T(a) : D(a));
                if (!e) {
                  if (!t) return void g({ results: [], fetching: !1 });
                  g({ results: t, fetching: !1 }),
                    m({ type: "search_type_query", query: a });
                }
              }, 350);
            return () => {
              (e = !0), clearTimeout(t);
            };
          }, [a, l, m, _, i]);
          let j = r.useMemo(
            () =>
              _
                ? (function (e, t, n) {
                    let s = e.filter((e) => "question" !== e.type);
                    return 0 === t.length
                      ? s
                      : [
                          ...n.map((e, n) => ({
                            type: "question",
                            id: "question-".concat(n),
                            query: t,
                            assistant: e,
                          })),
                          ...(null != s ? s : []),
                        ];
                  })(f.results, a, k)
                : f.results,
            [f.results, a, _]
          );
          r.useEffect(() => {
            a ? j.length > 0 && v(0) : v(null);
          }, [j, a]),
            r.useEffect(() => {
              var e;
              null !== b &&
                y.current[b] &&
                (null == (e = y.current[b]) ||
                  e.scrollIntoView({ block: "nearest", inline: "nearest" }));
            }, [b]);
          let w = r.useCallback(
              (e) => {
                v((t) =>
                  null === t ? 0 : Math.max(Math.min(t + e, j.length - 1), 0)
                );
              },
              [j]
            ),
            C = r.useCallback(() => {
              var e;
              null !== b &&
                y.current[b] &&
                (null == (e = y.current[b]) || e.click());
            }, [b]);
          if (
            (r.useImperativeHandle(
              t,
              () => ({
                moveUp: () => {
                  w(-1);
                },
                moveDown: () => {
                  w(1);
                },
                select: C,
              }),
              [w, C]
            ),
            f.fetching)
          )
            return (0, s.jsx)("div", {
              className: (0, x.P)(
                "flex",
                "items-center",
                "justify-center",
                "py-8",
                "h-full"
              ),
              children: (0, s.jsx)(d.Rh, {
                className: (0, x.P)("w-6", "text-tint/6"),
              }),
            });
          let N = (0, s.jsx)("div", {
            className: (0, x.P)(
              "flex",
              "items-center",
              "justify-center",
              "text-center",
              "py-8",
              "h-full"
            ),
            children: (0, p.t)(c, "search_no_results_for", a),
          });
          return (0, s.jsxs)("div", {
            className: (0, x.P)("min-h-full"),
            children: [
              n,
              0 === j.length
                ? a
                  ? N
                  : (0, s.jsx)("div", { className: "empty" })
                : (0, s.jsxs)(s.Fragment, {
                    children: [
                      (0, s.jsx)("div", {
                        "data-testid": "search-results",
                        className: "flex flex-col gap-y-1",
                        children: j.map((e, t) => {
                          switch (e.type) {
                            case "page":
                              return (0, s.jsx)(
                                A,
                                {
                                  ref: (e) => {
                                    y.current[t] = e;
                                  },
                                  query: a,
                                  item: e,
                                  active: t === b,
                                },
                                e.id
                              );
                            case "question":
                              return (0, s.jsx)(
                                E,
                                {
                                  ref: (e) => {
                                    y.current[t] = e;
                                  },
                                  question: a,
                                  active: t === b,
                                  assistant: e.assistant,
                                },
                                e.id
                              );
                            case "recommended-question":
                              return (0, s.jsx)(
                                E,
                                {
                                  ref: (e) => {
                                    y.current[t] = e;
                                  },
                                  question: e.question,
                                  active: t === b,
                                  assistant: k[0],
                                  recommended: !0,
                                },
                                e.id
                              );
                            case "section":
                              return (0, s.jsx)(
                                R,
                                {
                                  ref: (e) => {
                                    y.current[t] = e;
                                  },
                                  query: a,
                                  item: e,
                                  active: t === b,
                                },
                                e.id
                              );
                            default:
                              (0, S.Ay)(e);
                          }
                        }),
                      }),
                      !j.some((e) => "question" !== e.type) && N,
                    ],
                  }),
            ],
          });
        });
      function F(e) {
        let { spaceTitle: t } = e,
          [n, a] = (0, k.useSearch)(),
          l = (0, p.ok)();
        return n
          ? (0, s.jsxs)("div", {
              role: "toolbar",
              "aria-orientation": "horizontal",
              className:
                "mb-2 flex flex-row flex-wrap gap-1 circular-corners:rounded-3xl rounded-corners:rounded-lg bg-tint-subtle p-1",
              children: [
                (0, s.jsx)(d.$n, {
                  variant: "blank",
                  size: "medium",
                  className: "shrink grow justify-center whitespace-normal",
                  active: !n.global,
                  label: (0, p.si)(l, "search_scope_space", t),
                  onClick: () => {
                    a({ ...n, global: !1 });
                  },
                }),
                (0, s.jsx)(d.$n, {
                  variant: "blank",
                  size: "medium",
                  className: "shrink grow justify-center whitespace-normal",
                  active: n.global,
                  label: (0, p.si)(l, "search_scope_all"),
                  onClick: () => {
                    a({ ...n, global: !0 });
                  },
                }),
              ],
            })
          : null;
      }
      function B(e) {
        var t, n, m, h, p, f, x, g, v, y;
        let {
            siteSpaceId: j,
            spaceTitle: w,
            isMultiVariants: C,
            style: N,
            className: S,
            viewport: q,
          } = e,
          { assistants: L } = (0, o.OD)(),
          [P, z] = (0, k.useSearch)(),
          A = (function () {
            let [e, t] = (0, r.useState)(null);
            return (0, r.useMemo)(() => [e, t], [e]);
          })(),
          E = (0, l.useRouter)(),
          R = (0, u.jt)(),
          M = (0, r.useRef)(null),
          T = (0, r.useRef)(null),
          D = (function () {
            let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 1024,
              [t, n] = r.useState(!1);
            return (
              r.useEffect(() => {
                let t = window.matchMedia(
                  "(max-width: ".concat(e - 0.02, "px)")
                );
                n(t.matches);
                let s = (e) => {
                  n(e.matches);
                };
                return (
                  t.addEventListener("change", s),
                  () => {
                    t.removeEventListener("change", s);
                  }
                );
              }, [e]),
              t
            );
          })(),
          O = L.length > 0,
          B = L.filter((e) => "search" === e.mode).length > 0,
          $ = r.useRef(
            (null == P ? void 0 : P.ask) === void 0 ||
              (null == P ? void 0 : P.ask) === null
          );
        r.useEffect(() => {
          var e, t;
          $.current ||
            0 === L.length ||
            ((null == P ? void 0 : P.ask) !== void 0 &&
              (null == P ? void 0 : P.ask) !== null &&
              (($.current = !0),
              null == (e = L[0]) ||
                e.open(null != (t = null == P ? void 0 : P.ask) ? t : void 0)));
        }, [
          null == P ? void 0 : P.ask,
          L.length,
          null == (t = L[0]) ? void 0 : t.open,
        ]);
        let W = r.useCallback(
          async (e) => {
            z((e) =>
              e
                ? { ...e, open: !1, query: "" === e.query ? null : e.query }
                : null
            ),
              e && E.push(e);
          },
          [z, E]
        );
        (0, i.vC)(
          "mod+k",
          (e) => {
            e.preventDefault(), Q();
          },
          { enableOnFormTags: !0 }
        ),
          (0, i.vC)(
            "mod+i",
            (e) => {
              if ((e.preventDefault(), L)) {
                var t;
                null == (t = L[0]) || t.open();
              }
            },
            { enableOnFormTags: !0 }
          );
        let Q = r.useCallback(() => {
          (null != P && P.open) ||
            (z((e) => {
              var t, n, s, a;
              return {
                ask: O && null != (t = null == e ? void 0 : e.ask) ? t : null,
                global: null != (n = null == e ? void 0 : e.global) && n,
                query:
                  null !=
                  (a =
                    null != (s = null == e ? void 0 : e.query)
                      ? s
                      : B || !O
                      ? null == e
                        ? void 0
                        : e.ask
                      : null)
                    ? a
                    : "",
                open: !0,
              };
            }),
            R({ type: "search_open" }));
        }, [null == P ? void 0 : P.open, z, R, O, B]);
        r.useEffect(() => {
          let e = (e) => {
            "Escape" === e.key && W();
          };
          return (
            document.addEventListener("keydown", e),
            () => {
              document.removeEventListener("keydown", e);
            }
          );
        }, [W]);
        let V =
            null != (h = null == P || null == (n = P.query) ? void 0 : n.trim())
              ? h
              : "",
          K =
            null != (p = null == P || null == (m = P.ask) ? void 0 : m.trim())
              ? p
              : "",
          H = B && K,
          J = "desktop" === q ? !D : "mobile" !== q || D;
        return (0, s.jsxs)(b, {
          value: A,
          children: [
            (0, s.jsx)(d.AM, {
              content:
                (null == P ? void 0 : P.query) || O
                  ? (0, s.jsxs)(r.Suspense, {
                      fallback: null,
                      children: [
                        C && !H ? (0, s.jsx)(F, { spaceTitle: w }) : null,
                        null === P || H
                          ? null
                          : (0, s.jsx)(U, {
                              ref: M,
                              query: V,
                              global:
                                null != (f = null == P ? void 0 : P.global) &&
                                f,
                              siteSpaceId: j,
                            }),
                        H ? (0, s.jsx)(_, { query: K }) : null,
                      ],
                    })
                  : null,
              rootProps: {
                open: J && null != (x = null == P ? void 0 : P.open) && x,
                onOpenChange: (e) => {
                  e ? Q() : W();
                },
                modal: D,
              },
              contentProps: {
                onOpenAutoFocus: (e) => e.preventDefault(),
                align: "start",
                className:
                  "bg-tint-base has-[.empty]:hidden gutter-stable scroll-py-2 w-128 p-2 pr-1 max-h-[min(32rem,var(--radix-popover-content-available-height))] max-w-[min(var(--radix-popover-content-available-width),32rem)]",
                onInteractOutside: (e) => {
                  var t;
                  if (null == (t = T.current) ? void 0 : t.contains(e.target))
                    return;
                },
                sideOffset: 8,
                collisionPadding: { top: 16, right: 16, bottom: 32, left: 16 },
                hideWhenDetached: !0,
              },
              triggerProps: { asChild: !0 },
              children: (0, s.jsx)(I.SearchInput, {
                ref: T,
                value:
                  null !=
                  (v =
                    null != (g = null == P ? void 0 : P.query)
                      ? g
                      : B || !O
                      ? null == P
                        ? void 0
                        : P.ask
                      : null)
                    ? v
                    : "",
                onFocus: Q,
                onChange: (e) => {
                  z((t) => {
                    var n, s;
                    return {
                      ask:
                        O && !B && null != (n = null == t ? void 0 : t.ask)
                          ? n
                          : null,
                      query: e,
                      global: null != (s = null == t ? void 0 : t.global) && s,
                      open: !0,
                    };
                  });
                },
                onKeyDown: (e) => {
                  var t, n, s;
                  "ArrowUp" === e.key
                    ? (e.preventDefault(),
                      null == (t = M.current) || t.moveUp())
                    : "ArrowDown" === e.key
                    ? (e.preventDefault(),
                      null == (n = M.current) || n.moveDown())
                    : "Enter" === e.key &&
                      (e.preventDefault(),
                      null == (s = M.current) || s.select());
                },
                withAI: B,
                isOpen: null != (y = null == P ? void 0 : P.open) && y,
                className: S,
              }),
            }),
            L.filter((e) => !0 === e.ui).map((e, t) =>
              (0, s.jsx)(
                c.LN,
                {
                  assistant: e,
                  withShortcut: 0 === t,
                  showLabel:
                    1 === L.filter((e) => !0 === e.ui).length &&
                    N === a.zK.Prominent,
                },
                e.id
              )
            ),
          ],
        });
      }
    },
    21566: (e, t, n) => {
      n.r(t),
        n.d(t, {
          SearchContext: () => i,
          SearchContextProvider: () => o,
          useSearch: () => c,
          useSearchLink: () => u,
        });
      var s = n(54568),
        a = n(16821),
        l = n(7620);
      let r = { q: a.tU, ask: a.tU, global: a.cr },
        i = l.createContext(null);
      function o(e) {
        let { children: t } = e,
          [n, o] = (0, a.ab)(r, { history: "replace" });
        l.useEffect(() => {
          (null == n ? void 0 : n.ask) === "true" &&
            (null == n ? void 0 : n.q) &&
            o({ q: null, ask: n.q, global: n.global });
        }, [n, o]);
        let [c, u] = l.useState(() => (null == n ? void 0 : n.q) !== null),
          d = l.useMemo(
            () =>
              null === n || (null === n.q && null === n.ask)
                ? null
                : { query: n.q, ask: n.ask, global: !!n.global, open: c },
            [n, c]
          ),
          m = l.useRef(d);
        l.useLayoutEffect(() => {
          m.current = d;
        }, [d]);
        let h = l.useCallback(
          (e) =>
            ("function" == typeof e && (e = e(m.current)), null === e)
              ? (u(!1), o({ q: null, ask: null, global: null }))
              : (u(e.open),
                o({ q: e.query, ask: e.ask, global: !!e.global || null })),
          [o]
        );
        return (0, s.jsx)(i.Provider, {
          value: { state: d, setState: h },
          children: t,
        });
      }
      function c() {
        let e = l.useContext(i);
        if (!e)
          throw Error("useSearch must be used within SearchContextProvider");
        return [e.state, e.setState];
      }
      function u() {
        let [, e] = c();
        return l.useCallback(
          (t, n) => {
            let s = new URLSearchParams();
            return (
              t.query ? s.set("q", t.query) : s.delete("q"),
              t.ask ? s.set("ask", t.ask) : s.delete("ask"),
              t.global ? s.set("global", "true") : s.delete("global"),
              {
                href: "?".concat(s.toString()),
                prefetch: !1,
                onClick: (s) => {
                  s.preventDefault(),
                    null == n || n(),
                    e((e) => ({
                      ...e,
                      query: void 0 !== t.query ? t.query : null,
                      ask: void 0 !== t.ask ? t.ask : null,
                      global: void 0 !== t.global && t.global,
                      open: void 0 !== t.open && t.open,
                    }));
                },
              }
            );
          },
          [e]
        );
      }
    },
    22399: (e, t, n) => {
      n.r(t),
        n.d(t, {
          LoadIntegrations: () => u,
          integrationAssistants: () => o,
          integrationsAssistantTools: () => i,
          useIntegrationAssistants: () => c,
        });
      var s = n(7620),
        a = n(26768),
        l = n(13368);
      let r = new Map(),
        i = a.y(() => ({ tools: [] })),
        o = a.y(() => []);
      function c() {
        return l.P(o);
      }
      function u() {
        return (
          s.useEffect(() => {
            !(function (e) {
              for (
                var t,
                  n = arguments.length,
                  s = Array(n > 1 ? n - 1 : 0),
                  a = 1;
                a < n;
                a++
              )
                s[a - 1] = arguments[a];
              null == (t = r.get(e)) || t.forEach((e) => e(...s));
            })("load");
          }, []),
          null
        );
      }
      window.GitBook = {
        addEventListener: (e, t) => {
          var n;
          let s = null != (n = r.get(e)) ? n : [];
          s.push(t), r.set(e, s);
        },
        removeEventListener: (e, t) => {
          var n;
          let s = null != (n = r.get(e)) ? n : [],
            a = s.indexOf(t);
          -1 !== a && s.splice(a, 1);
        },
        registerTool: (e) => {
          i.setState((t) => ({ tools: [...t.tools, e] }));
        },
        registerAssistant: (e) => {
          let t = window.crypto.randomUUID();
          return (
            o.setState((n) => {
              var s;
              return [
                ...n,
                {
                  ...e,
                  id: t,
                  ui: null == (s = e.ui) || s,
                  mode: "overlay",
                  pageAction: !1,
                },
              ];
            }, !0),
            () => {
              o.setState((e) => e.filter((e) => e.id !== t), !0);
            }
          );
        },
      };
    },
    27143: (e, t, n) => {
      n.r(t), n.d(t, { SearchInput: () => d });
      var s = n(54568),
        a = n(7620),
        l = n(88118),
        r = n(98743),
        i = n(86424),
        o = n(54217),
        c = n(52288);
      let u = ["text-sm", "px-3.5", "py-1.5", "md:circular-corners:px-4"],
        d = a.forwardRef(function (e, t) {
          let {
              onChange: n,
              onKeyDown: d,
              onFocus: h,
              value: p,
              withAI: f,
              isOpen: x,
              className: g,
            } = e,
            b = (0, a.useRef)(null),
            v = (0, l.ok)(),
            y = (0, c.K)(["ButtonStyles"]);
          return (0, a.useEffect)(() => {
            var e, t, n;
            x
              ? document.activeElement !== b.current &&
                (null == (e = b.current) || e.focus({ preventScroll: !0 }),
                null == (t = b.current) ||
                  t.setSelectionRange(p.length, p.length))
              : null == (n = b.current) || n.blur();
          }, [x, p]);
        });
      function m() {
        let [e, t] = (0, a.useState)(null);
        return (
          (0, a.useEffect)(() => {
            t(
              (function () {
                let e = navigator.platform.toLowerCase();
                return e.includes("mac") ? "mac" : (e.includes("win"), "win");
              })()
            );
          }, [])
        );
      }
    },
    28463: (e, t, n) => {
      n.r(t), n.d(t, { AIResponseFeedback: () => u });
      var s = n(54568),
        a = n(88118),
        l = n(96021),
        r = n(98743),
        i = n(7620),
        o = n(24578),
        c = n(54217);
      function u(e) {
        let { className: t, responseId: n, query: u } = e,
          d = (0, a.ok)(),
          [m, h] = (0, i.useState)(null),
          p = (0, o.jt)(),
          f = (e) => {
            h(e),
              p({
                type: "ask_rate_response",
                query: u,
                responseId: n,
                rating: e,
              });
          };
        return (0, s.jsxs)("div", {
          className: (0, r.P)("flex h-fit items-center", t),
          children: [
            (0, s.jsx)(
              c.$n,
              {
                icon: "thumbs-up",
                iconOnly: !0,
                label: (0, l.s)(d, "was_this_helpful_positive_label"),
                variant: "blank",
                className: (0, r.P)(
                  "animate-fade-in overflow-hidden text-tint-subtle transition-all",
                  null !== m && 1 !== m && "px-0 text-[0rem] opacity-0"
                ),
                size: "medium",
                style: { animationDuration: ".5s" },
                onClick: () => f(1),
                disabled: null !== m,
                active: 1 === m,
              },
              "positive"
            ),
            (0, s.jsx)(
              c.$n,
              {
                icon: "thumbs-down",
                iconOnly: !0,
                label: (0, l.s)(d, "was_this_helpful_negative_label"),
                variant: "blank",
                className: (0, r.P)(
                  "animate-fade-in overflow-hidden text-tint-subtle transition-all",
                  null !== m && -1 !== m && "px-0 text-[0rem] opacity-0"
                ),
                size: "medium",
                style: { animationDelay: ".2s", animationDuration: ".5s" },
                onClick: () => f(-1),
                disabled: null !== m,
                active: -1 === m,
              },
              "negative"
            ),
            null !== m
              ? (0, s.jsx)("span", {
                  className: "ml-2 animate-fade-in-slow text-tint-subtle",
                  style: { animationDelay: ".3s" },
                  children: (0, l.t)(d, "was_this_helpful_thank_you"),
                })
              : null,
          ],
        });
      }
    },
    30711: (e, t, n) => {
      n.r(t), n.d(t, { ThemeToggler: () => o });
      var s = n(54568),
        a = n(21752),
        l = n(7620),
        r = n(88118),
        i = n(54217);
      function o() {
        let e = (0, r.ok)(),
          [t, n] = l.useState(!1),
          { theme: o, setTheme: u } = (0, a.D)();
        l.useEffect(() => {
          n(!0);
        }, []);
        let d = (e) => {
          u(e);
        };
        return (0, s.jsxs)(i.e2, {
          role: "radiogroup",
          className: "gap-2",
          combinedShape: !1,
          children: [
            (0, s.jsx)(c, {
              active: t && "light" === o,
              icon: "sun-bright",
              onClick: () => d("light"),
              title: (0, r.si)(e, "switch_to_light_theme"),
            }),
            (0, s.jsx)(c, {
              active: t && "system" === o,
              icon: "desktop",
              onClick: () => d("system"),
              title: (0, r.si)(e, "switch_to_system_theme"),
            }),
            (0, s.jsx)(c, {
              active: t && "dark" === o,
              icon: "moon",
              onClick: () => d("dark"),
              title: (0, r.si)(e, "switch_to_dark_theme"),
            }),
          ],
        });
      }
      function c(e) {
        let { icon: t, onClick: n, title: a, active: l } = e;
        return (0, s.jsx)(i.$n, {
          type: "button",
          role: "radio",
          onClick: n,
          label: a,
          "aria-checked": l,
          variant: "blank",
          size: "default",
          className: l
            ? "bg-primary theme-muted:bg-primary-hover text-primary-strong ring-primary hover:bg-primary contrast-more:text-primary-strong contrast-more:ring-1 [html.sidebar-filled.theme-bold.tint_&]:bg-primary-hover"
            : "",
          icon: t,
          iconOnly: !0,
        });
      }
    },
    37397: (e, t, n) => {
      n.r(t),
        n.d(t, {
          AIChat: () => I,
          AIChatBody: () => L,
          AIChatDynamicIcon: () => S,
          AIChatSubtitle: () => q,
          getAIChatName: () => z,
        });
      var s = n(54568),
        a = n(88118),
        l = n(86424),
        r = n(7620),
        i = n(58541),
        o = n(55809),
        c = n(75742),
        u = n(24578),
        d = n(62574),
        m = n(54217),
        h = n(60544),
        p = n(73598),
        f = n(98743),
        x = n(85598);
      function g(e) {
        let { value: t, onChange: n, onSubmit: o, disabled: c, loading: u } = e,
          d = (0, a.ok)(),
          h = (0, r.useRef)(null);
        return (
          (0, r.useEffect)(() => {
            if (!c && !u) {
              let e = setTimeout(() => {
                var e;
                null == (e = h.current) || e.focus();
              }, 150);
              return () => clearTimeout(e);
            }
          }, [c, u]),
          (0, i.vC)(
            "mod+i",
            (e) => {
              var t;
              e.preventDefault(), null == (t = h.current) || t.focus();
            },
            { enableOnFormTags: !0 }
          ),
          (0, s.jsxs)("div", {
            className:
              "depth-subtle:has-[textarea:focus]:-translate-y-px relative flex flex-col overflow-hidden circular-corners:rounded-2xl rounded-corners:rounded-md bg-tint-base/9 depth-subtle:shadow-sm shadow-tint/6 ring-1 ring-tint-subtle backdrop-blur-lg transition-all depth-subtle:has-[textarea:focus]:shadow-lg has-[textarea:focus]:shadow-primary-subtle has-[textarea:focus]:ring-2 has-[textarea:focus]:ring-primary-hover contrast-more:bg-tint-base dark:shadow-tint-1",
            children: [
              (0, s.jsx)("textarea", {
                ref: h,
                disabled: c || u,
                "data-loading": u,
                "data-testid": "ai-chat-input",
                className: (0, f.P)(
                  "resize-none",
                  "focus:outline-hidden",
                  "focus:ring-0",
                  "w-full",
                  "px-3",
                  "py-3",
                  "pb-12",
                  "h-auto",
                  "bg-transparent",
                  "peer",
                  "max-h-64",
                  "placeholder:text-tint/8",
                  "transition-colors",
                  "disabled:bg-tint-subtle",
                  "delay-300",
                  "disabled:delay-0",
                  "disabled:cursor-not-allowed",
                  "data-[loading=true]:cursor-progress",
                  "data-[loading=true]:opacity-50"
                ),
                value: t,
                rows: 1,
                placeholder: (0, a.si)(d, "ai_chat_input_placeholder"),
                onChange: (e) => {
                  let t = e.currentTarget;
                  n(t.value),
                    (t.style.height = "auto"),
                    (t.style.height = "".concat(t.scrollHeight, "px"));
                },
                onKeyDown: (e) => {
                  if ("Escape" === e.key) {
                    e.preventDefault(), e.currentTarget.blur();
                    return;
                  }
                  "Enter" === e.key &&
                    !e.shiftKey &&
                    t.trim() &&
                    (e.preventDefault(),
                    (e.currentTarget.style.height = "auto"),
                    o(t));
                },
              }),
              c
                ? null
                : (0, s.jsx)("div", {
                    className:
                      "absolute top-2.5 right-3 animate-[fadeIn_0.2s_0.5s_ease-in-out_both] peer-focus:hidden",
                    children: (0, s.jsx)(x.S, {
                      keys: ["mod", "i"],
                      className: "bg-tint-base",
                    }),
                  }),
              (0, s.jsxs)("div", {
                className:
                  "absolute inset-x-0 bottom-0 flex items-center gap-2 px-2 py-2",
                children: [
                  (0, s.jsxs)(m.z8, {
                    children: [
                      (0, s.jsx)(m.jc, {
                        className: "max-w-xs bg-tint p-2 text-sm text-tint",
                        arrow: { className: "fill-tint-3" },
                        children: (0, s.jsxs)("div", {
                          className: "flex flex-col gap-3 p-2",
                          children: [
                            (0, s.jsx)("p", {
                              className: "font-semibold",
                              children: (0, a.t)(
                                d,
                                "ai_chat_context_description"
                              ),
                            }),
                            (0, s.jsxs)("ul", {
                              className: "flex flex-col gap-2",
                              children: [
                                (0, s.jsxs)("li", {
                                  className: "flex items-center gap-2",
                                  children: [
                                    (0, s.jsx)(l.In, {
                                      icon: "memo",
                                      className: "size-3.5 opacity-7",
                                    }),
                                    (0, a.t)(
                                      d,
                                      "ai_chat_context_pages_youve_read"
                                    ),
                                  ],
                                }),
                                (0, s.jsxs)("li", {
                                  className: "flex items-center gap-2",
                                  children: [
                                    (0, s.jsx)(l.In, {
                                      icon: "user",
                                      className: "size-3.5 opacity-7",
                                    }),
                                    (0, a.t)(
                                      d,
                                      "ai_chat_context_info_provided_by_the_site"
                                    ),
                                  ],
                                }),
                                (0, s.jsxs)("li", {
                                  className: "flex items-center gap-2",
                                  children: [
                                    (0, s.jsx)(l.In, {
                                      icon: "message-question",
                                      className: "size-3.5 opacity-7",
                                    }),
                                    (0, a.t)(
                                      d,
                                      "ai_chat_context_previous_messages"
                                    ),
                                  ],
                                }),
                              ],
                            }),
                            (0, s.jsx)("p", {
                              children: (0, a.t)(
                                d,
                                "ai_chat_context_disclaimer"
                              ),
                            }),
                          ],
                        }),
                      }),
                      (0, s.jsx)(m.d0, {
                        children: (0, s.jsxs)("div", {
                          className:
                            "flex cursor-help items-center gap-1 circular-corners:rounded-2xl rounded-corners:rounded-md px-2.5 py-1.5 text-tint/7 text-xs transition-all hover:bg-tint",
                          children: [
                            (0, s.jsx)("span", {
                              className:
                                "-ml-1 circular-corners:rounded-2xl rounded-corners:rounded-sm bg-tint-11/7 px-1 py-0.5 font-mono font-semibold text-[0.65rem] text-contrast-tint-11 leading-none",
                              children: (0, a.t)(d, "ai_chat_context_badge"),
                            }),
                            " ",
                            (0, s.jsx)("span", {
                              className: "leading-none",
                              children: (0, a.t)(d, "ai_chat_context_title"),
                            }),
                            (0, s.jsx)(l.In, {
                              icon: "question-circle",
                              className: "size-3",
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  (0, s.jsx)(m.$n, {
                    label: (0, a.si)(d, "send"),
                    size: "medium",
                    className: "ml-auto",
                    disabled: c || !t.trim(),
                    onClick: () => o(t),
                  }),
                ],
              }),
            ],
          })
        );
      }
      var b = n(96021),
        v = n(5772);
      function y(e) {
        let { chat: t } = e,
          n = (0, a.ok)();
        return (
          (0, i.vC)(
            "mod+enter",
            (e) => {
              var n;
              e.preventDefault(),
                null == (n = t.pendingTools[0]) || n.confirm();
            },
            { enableOnFormTags: !0 },
            [t.pendingTools]
          ),
          (0, s.jsx)("div", {
            className: "flex w-full flex-wrap justify-end gap-2",
            children: t.pendingTools.map((e, t) =>
              (0, s.jsxs)(
                "div",
                {
                  className: "flex w-full animate-present-slow flex-col gap-1",
                  style: { animationDelay: "".concat(0.5 + 0.1 * t, "s") },
                  children: [
                    (0, s.jsx)(m.$n, {
                      onClick: () => {
                        e.confirm();
                      },
                      tabIndex: t,
                      label: e.label,
                      className: "w-full justify-center",
                      size: 0 === t ? "default" : "medium",
                      variant: 0 === t ? "primary" : "secondary",
                      icon: e.icon,
                    }),
                    0 === t &&
                      (0, s.jsx)("div", {
                        className:
                          "flex pointer-none:hidden w-full animate-fade-in-slow items-center justify-end gap-2 text-tint text-xs",
                        style: { animationDelay: "1000ms" },
                        children: (0, b.t)(
                          n,
                          "press_to_confirm",
                          (0, s.jsx)(x.S, {
                            keys: ["mod", "enter"],
                            className: "mx-0 text-tint",
                          })
                        ),
                      }),
                  ],
                },
                t
              )
            ),
          })
        );
      }
      var k = n(28463);
      function _(e) {
        let { chat: t, chatController: n } = e;
        return 0 === t.followUpSuggestions.length
          ? null
          : (0, s.jsx)("div", {
              className: "mt-auto flex w-full flex-wrap justify-end gap-2",
              children: t.followUpSuggestions.map((e, t) =>
                (0, s.jsx)(
                  m.$n,
                  {
                    onClick: () => {
                      n.postMessage({ message: e });
                    },
                    label: e,
                    className:
                      "whitespace-normal! max-w-full animate-[present_500ms_both] text-left ring-1 ring-tint-subtle",
                    size: "medium",
                    variant: "blank",
                    style: {
                      animationDelay: "".concat(
                        250 + Math.min(50 * t, 150),
                        "ms"
                      ),
                    },
                  },
                  t
                )
              ),
            });
      }
      function j(e) {
        let { chat: t, chatController: n, lastUserMessageRef: a } = e;
        return (0, s.jsx)(s.Fragment, {
          children: t.messages.map((e, l) => {
            let r = l === t.messages.length - 1,
              i =
                e.role === v.W7.User &&
                l === t.messages.map((e) => e.role).lastIndexOf(v.W7.User);
            return (0, s.jsxs)(
              "div",
              {
                ref: i ? a : void 0,
                "data-testid": "ai-chat-message",
                className: (0, f.P)(
                  e.content ? "animate-fade-in-slow" : "",
                  "shrink-0",
                  "last:min-h-[calc(100%-5rem)]",
                  "scroll-mt-36",
                  "lg:scroll-mt-0",
                  "flex flex-col gap-6",
                  "break-words",
                  "group/message",
                  e.role === v.W7.User
                    ? "max-w-[80%] self-end circular-corners:rounded-2xl rounded-corners:rounded-md bg-tint px-4 py-2"
                    : "text-tint-strong"
                ),
                style: {
                  animationDelay: "".concat(Math.min(0.05 * l, 0.5), "s"),
                },
                children: [
                  e.content ? e.content : null,
                  r && t.loading
                    ? (0, s.jsxs)("div", {
                        className:
                          "flex w-full animate-fade-in-slow flex-col gap-2",
                        children: [
                          e.content ? null : (0, s.jsx)(w, {}),
                          (0, s.jsx)(C, {}),
                        ],
                      })
                    : null,
                  r
                    ? (0, s.jsxs)(s.Fragment, {
                        children: [
                          !t.loading &&
                          !t.error &&
                          t.query &&
                          t.responseId &&
                          0 === t.pendingTools.length
                            ? (0, s.jsx)(k.AIResponseFeedback, {
                                responseId: t.responseId,
                                query: t.query,
                                className: "-ml-1 -mt-4",
                              })
                            : null,
                          (0, s.jsx)(y, { chat: t }),
                          (0, s.jsx)(_, { chat: t, chatController: n }),
                        ],
                      })
                    : null,
                ],
              },
              l
            );
          }),
        });
      }
      function w() {
        let e = (0, a.ok)();
        return (0, s.jsxs)("div", {
          className:
            "animate-[heightIn_500ms_4500ms_ease_both] py-2 text-tint-subtle",
          children: [
            (0, b.s)(e, "ai_chat_hold_message_1")
              .split(" ")
              .map((e, t) =>
                (0, s.jsxs)(
                  "span",
                  {
                    className: "animate-fade-in-slow",
                    style: { animationDelay: "".concat(5e3 + 200 * t, "ms") },
                    children: [e, " "],
                  },
                  t
                )
              ),
            (0, b.s)(e, "ai_chat_hold_message_2")
              .split(" ")
              .map((e, t) =>
                (0, s.jsxs)(
                  "span",
                  {
                    className: "animate-fade-in-slow",
                    style: { animationDelay: "".concat(1e4 + 200 * t, "ms") },
                    children: [e, " "],
                  },
                  t
                )
              ),
          ],
        });
      }
      function C() {
        return (0, s.jsx)("div", {
          className: "flex flex-wrap gap-2",
          children: Array.from({ length: 7 }).map((e, t) =>
            (0, s.jsx)(
              "div",
              {
                className:
                  "h-4 animate-[fadeIn_500ms_ease_both,pulse_1.5s_infinite] circular-corners:rounded-2xl rounded-corners:rounded-md bg-tint-4",
                style: {
                  width: "calc(".concat((t % 4) * 20 + 10, "% - 4px)"),
                  animationDelay: "".concat(0.1 * t, "s"),
                },
              },
              t
            )
          ),
        });
      }
      function N(e) {
        let t = (0, a.ok)(),
          {
            chatController: n,
            suggestions: l = [
              (0, a.si)(t, "ai_chat_suggested_questions_about_this_page"),
              (0, a.si)(t, "ai_chat_suggested_questions_read_next"),
              (0, a.si)(t, "ai_chat_suggested_questions_example"),
            ],
          } = e;
        return (0, s.jsx)("div", {
          className: "flex flex-col items-center gap-2",
          children: l.map((e, t) =>
            (0, s.jsx)(
              m.$n,
              {
                variant: "secondary",
                size: "medium",
                className:
                  "max-w-full animate-[present_500ms_both] whitespace-normal",
                style: { animationDelay: "".concat(800 + 100 * t, "ms") },
                onClick: () => n.postMessage({ message: e }),
                children: e,
              },
              e
            )
          ),
        });
      }
      function I(e) {
        let { trademark: t } = e,
          n = (0, a.ok)(),
          l = (0, o.J4)(),
          d = (0, o.C8)(),
          p = r.useRef(null);
        r.useEffect(() => {
          if (l.opened) {
            var e;
            null == (e = p.current) ||
              e.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, [l.opened]),
          (0, i.vC)(
            "esc",
            () => {
              d.close();
            },
            []
          );
        let f = (0, u.jt)();
        return (r.useEffect(() => {
          l.opened && f({ type: "ask_view" });
        }, [l.opened, f]),
        l.opened)
          ? (0, s.jsx)("div", {
              "data-testid": "ai-chat",
              className:
                "ai-chat inset-y-0 right-0 z-40 mx-auto flex max-w-3xl animate-present scroll-mt-36 px-4 py-4 transition-all duration-300 sm:px-6 lg:fixed lg:w-80 lg:animate-enter-from-right lg:pr-4 lg:pl-0 xl:w-96",
              children: (0, s.jsxs)(c.VN, {
                className:
                  "relative circular-corners:rounded-3xl rounded-corners:rounded-md depth-subtle:shadow-lg shadow-tint ring-1 ring-tint-subtle",
                children: [
                  (0, s.jsxs)(c.Ac, {
                    children: [
                      (0, s.jsx)(S, { trademark: t }),
                      (0, s.jsxs)(c.Do, {
                        children: [
                          (0, s.jsx)(c.tP, { children: z(n, t) }),
                          (0, s.jsx)(q, { chat: l }),
                        ],
                      }),
                      (0, s.jsxs)(c.a8, {
                        children: [
                          (0, s.jsx)(h.AIChatControlButton, {}),
                          (0, s.jsx)(m.$n, {
                            onClick: () => d.close(),
                            iconOnly: !0,
                            icon: "close",
                            label: (0, a.si)(n, "close"),
                            variant: "blank",
                            size: "default",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, s.jsx)(c.XO, {
                    children: (0, s.jsx)(L, {
                      chatController: d,
                      chat: l,
                      trademark: t,
                    }),
                  }),
                ],
              }),
            })
          : null;
      }
      function S(e) {
        var t;
        let { trademark: n } = e,
          a = (0, o.J4)();
        return (0, s.jsx)(p.y, {
          className: "size-5 text-tint",
          trademark: n,
          state: a.error
            ? "error"
            : a.loading
            ? (
                null == (t = a.messages[a.messages.length - 1])
                  ? void 0
                  : t.content
              )
              ? "working"
              : "thinking"
            : a.messages.length > 0
            ? a.pendingTools.length > 0
              ? "confirm"
              : "done"
            : "default",
        });
      }
      function q(e) {
        var t;
        let { chat: n } = e,
          l = (0, a.ok)();
        return (0, s.jsx)(c.bY, {
          className: n.loading ? "h-3 opacity-11" : "h-0 opacity-0",
          children: (
            null == (t = n.messages[n.messages.length - 1]) ? void 0 : t.content
          )
            ? (0, a.si)(l, "ai_chat_working")
            : (0, a.si)(l, "ai_chat_thinking"),
        });
      }
      function L(e) {
        let { chatController: t, chat: n, trademark: l, suggestions: i } = e,
          [o, c] = r.useState(""),
          u = r.useRef(null),
          m = r.useRef(null),
          h = r.useRef(null),
          [f, x] = r.useState(0),
          b = (0, a.ok)(),
          v = (0, d.cB)(36e5),
          y = !n.messages.length,
          k = r.useMemo(() => {
            let e = new Date(v).getHours();
            return e < 6
              ? (0, a.si)(b, "ai_chat_assistant_greeting_night")
              : e < 12
              ? (0, a.si)(b, "ai_chat_assistant_greeting_morning")
              : e < 18
              ? (0, a.si)(b, "ai_chat_assistant_greeting_afternoon")
              : (0, a.si)(b, "ai_chat_assistant_greeting_evening");
          }, [v, b]);
        return (
          r.useEffect(() => {
            n.messages.length > 0 &&
              m.current &&
              m.current.scrollIntoView({ behavior: "smooth", block: "start" });
          }, [n.messages.length]),
          r.useEffect(() => {
            let e = setTimeout(() => {
                m.current &&
                  m.current.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
              }, 100),
              t = new ResizeObserver((e) => {
                e.forEach((e) => {
                  x(e.contentRect.height + 32);
                });
              });
            return (
              h.current && t.observe(h.current),
              () => {
                t.disconnect(), clearTimeout(e);
              }
            );
          }, []),
          (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)("div", {
                ref: u,
                className:
                  "gutter-stable flex grow scroll-pt-4 flex-col gap-4 overflow-y-auto p-4",
                style: { paddingBottom: "".concat(f, "px") },
                children: y
                  ? (0, s.jsxs)("div", {
                      className:
                        "flex min-h-full w-full shrink-0 flex-col items-center justify-center gap-6 py-4",
                      children: [
                        (0, s.jsx)("div", {
                          className:
                            "flex size-32 animate-fade-in-slow items-center justify-center rounded-full bg-tint-subtle",
                          children: (0, s.jsx)(p.y, {
                            state: "intro",
                            trademark: l,
                            className:
                              "size-16 animate-[present_500ms_200ms_both]",
                          }),
                        }),
                        (0, s.jsxs)("div", {
                          className: "animate-[fadeIn_500ms_400ms_both]",
                          children: [
                            (0, s.jsx)("h5", {
                              className:
                                " text-center font-bold text-lg text-tint-strong",
                              children: k,
                            }),
                            (0, s.jsx)("p", {
                              className: "text-center text-tint",
                              children: (0, a.t)(
                                b,
                                "ai_chat_assistant_description"
                              ),
                            }),
                          ],
                        }),
                        n.error
                          ? null
                          : (0, s.jsx)(N, {
                              chatController: t,
                              suggestions: i,
                            }),
                      ],
                    })
                  : (0, s.jsx)(j, {
                      chat: n,
                      chatController: t,
                      lastUserMessageRef: m,
                    }),
              }),
              (0, s.jsxs)("div", {
                ref: h,
                className:
                  "absolute inset-x-0 bottom-0 mr-2 flex select-none flex-col gap-4 bg-linear-to-b from-transparent to-50% to-tint-base/9 p-4 pr-2",
                children: [
                  n.error ? (0, s.jsx)(P, { chatController: t }) : null,
                  (0, s.jsx)(g, {
                    value: o,
                    onChange: c,
                    loading: n.loading,
                    disabled: n.loading || n.error,
                    onSubmit: () => {
                      t.postMessage({ message: o }), c("");
                    },
                  }),
                ],
              }),
            ],
          })
        );
      }
      function P(e) {
        let t = (0, a.ok)(),
          { chatController: n } = e;
        return (0, s.jsxs)("div", {
          className:
            "flex animate-scale-in flex-wrap justify-between gap-2 circular-corners:rounded-2xl rounded-corners:rounded-md bg-danger px-3 py-2 text-danger text-sm ring-1 ring-danger",
          children: [
            (0, s.jsxs)("div", {
              className: "flex items-center gap-2",
              children: [
                (0, s.jsx)(l.In, {
                  icon: "exclamation-triangle",
                  className: "size-3.5",
                }),
                (0, s.jsx)("span", {
                  className: "flex items-center gap-1",
                  children: (0, a.t)(t, "ai_chat_error"),
                }),
              ],
            }),
            (0, s.jsx)("div", {
              className: "flex justify-end",
              children: (0, s.jsx)(m.$n, {
                variant: "blank",
                size: "small",
                icon: "refresh",
                label: (0, a.si)(t, "unexpected_error_retry"),
                onClick: () => {
                  n.clear();
                },
                className: "text-danger! hover:bg-danger-5",
              }),
            }),
          ],
        });
      }
      function z(e, t) {
        return t
          ? (0, a.si)(e, "ai_chat_assistant_name")
          : (0, a.si)(e, "ai_chat_assistant_name_unbranded");
      }
    },
    54223: (e, t, n) => {
      n.d(t, { Lt: () => s.SearchContextProvider, SQ: () => s.useSearch }),
        n(27143),
        n(15954);
      var s = n(21566);
    },
    55809: (e, t, n) => {
      n.d(t, {
        C8: () => a.useAIChatController,
        J4: () => a.useAIChatState,
        OD: () => s.useAI,
      });
      var s = n(97306),
        a = n(10087);
    },
    60101: (e, t, n) => {
      n.r(t), n.d(t, { AIChatButton: () => c });
      var s = n(54568),
        a = n(88118),
        l = n(96021),
        r = n(98743),
        i = n(54217),
        o = n(85598);
      function c(e) {
        let { assistant: t, showLabel: n = !0, withShortcut: c = !0 } = e,
          u = (0, a.ok)();
        return (0, s.jsx)(i.$n, {
          icon: t.icon,
          "data-testid": "ai-chat-button",
          iconOnly: !n,
          size: "medium",
          variant: "header",
          className: (0, r.P)("h-9 px-2.5"),
          label: (0, s.jsxs)("div", {
            className: "flex items-center gap-2",
            children: [
              (0, l.t)(u, "ai_chat_ask", t.label),
              c
                ? (0, s.jsx)(o.S, {
                    keys: ["mod", "i"],
                    className: "border-tint-11 text-tint-1",
                  })
                : null,
            ],
          }),
          onClick: () => t.open(),
          children: n
            ? (0, s.jsx)("span", {
                className: "max-md:hidden",
                children: (0, l.t)(u, "ask"),
              })
            : null,
        });
      }
    },
    60544: (e, t, n) => {
      n.r(t), n.d(t, { AIChatControlButton: () => c });
      var s = n(54568),
        a = n(88118),
        l = n(96021),
        r = n(86424),
        i = n(55809),
        o = n(54217);
      function c() {
        let e = (0, a.ok)(),
          t = (0, i.J4)(),
          n = (0, i.C8)();
        return t.messages.length > 0
          ? (0, s.jsx)(o.rI, {
              button: (0, s.jsx)(o.$n, {
                onClick: () => {},
                iconOnly: !0,
                icon: "ellipsis",
                label: (0, l.s)(e, "actions"),
                variant: "blank",
                size: "default",
              }),
              children: (0, s.jsxs)(o._2, {
                onClick: () => {
                  n.clear();
                },
                children: [
                  (0, s.jsx)(r.In, {
                    icon: "broom-wide",
                    className: "size-3 shrink-0 text-tint-subtle",
                  }),
                  (0, l.t)(e, "ai_chat_clear_conversation"),
                ],
              }),
            })
          : null;
      }
    },
    73598: (e, t, n) => {
      n.d(t, { y: () => r });
      var s = n(54568),
        a = n(98743),
        l = n(86424);
      let r = (e) => {
        let {
          className: t = "size-4",
          size: n,
          trademark: r = !0,
          state: i = "default",
          ...o
        } = e;
        return r
          ? (0, s.jsxs)("svg", {
              width: "16",
              height: "16",
              viewBox: "0 0 16 16",
              preserveAspectRatio: "xMaxYMid meet",
              className: t,
              "aria-busy": "thinking" === i,
              overflow: "visible",
              ...o,
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                (0, s.jsx)("title", { children: "GitBook Assistant" }),
                (0, s.jsx)("path", {
                  d: "M12.8916 1.06265C12.921 0.979101 13.0392 0.979127 13.0685 1.06267C13.239 1.5478 13.3439 1.84646 13.516 2.1032C13.6683 2.33042 13.8578 2.53033 14.0766 2.6945C14.3239 2.88 14.6165 3.00068 15.0919 3.19671C15.1761 3.23142 15.1761 3.3506 15.0919 3.38531C14.6165 3.58134 14.3239 3.70203 14.0766 3.88752C13.8578 4.05169 13.6683 4.2516 13.516 4.47882C13.3439 4.73556 13.239 5.03423 13.0685 5.51937C13.0392 5.60291 12.921 5.60292 12.8916 5.51938C12.7212 5.03423 12.6162 4.73557 12.4442 4.47882C12.2919 4.2516 12.1023 4.05169 11.8835 3.88752C11.6363 3.70202 11.3436 3.58134 10.8682 3.38531C10.7841 3.3506 10.7841 3.23141 10.8683 3.1967C11.3436 3.00067 11.6363 2.87999 11.8835 2.6945C12.1023 2.53033 12.2919 2.33042 12.4442 2.1032C12.6162 1.84646 12.7212 1.54779 12.8916 1.06265Z",
                  stroke: "currentColor",
                  strokeWidth: "1.2",
                  strokeLinejoin: "round",
                  className: (0, a.P)(
                    "intro" === i &&
                      "animate-[fadeIn_.5s_.7s_both,spin_2s_1s_forwards_cubic-bezier(.43,1.54,.64,1)]",
                    ("working" === i || "thinking" === i) &&
                      "animate-[fadeIn_.5s_.3s_both,spin_2s_1s_infinite_forwards_cubic-bezier(0.16,1,0.3,1)]",
                    "done" === i && "animate-[fadeOut_.5s_both]",
                    "confirm" === i && "animate-[fadeOut_.5s_both]",
                    "default" === i && "animate-[fadeIn_0s_both]",
                    "error" === i && "hidden"
                  ),
                  style: { transformOrigin: "13px 3.5px" },
                }),
                (0, s.jsxs)("g", {
                  clipPath: "url(#clip0_153_2034)",
                  className: (0, a.P)(
                    "text-danger-subtle",
                    "error" === i ? "animate-[fadeIn_.5s_.3s_both]" : "hidden"
                  ),
                  children: [
                    (0, s.jsx)("path", {
                      d: "M13.0312 1.42059L13.0312 3.95184",
                      stroke: "currentColor",
                      strokeWidth: "1.2",
                      strokeLinecap: "round",
                    }),
                    (0, s.jsx)("path", {
                      d: "M13.0312 6.00253V6.00263",
                      stroke: "currentColor",
                      strokeWidth: "1.2",
                      strokeLinecap: "round",
                    }),
                  ],
                }),
                (0, s.jsx)("path", {
                  d: "M10.8051 3.71161L12.2401 5.27411L14.823 2.14911",
                  stroke: "currentColor",
                  strokeWidth: "1.2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  className: (0, a.P)(
                    "done" === i
                      ? "animate-[fadeIn_.5s_.3s_both]"
                      : "animate-[fadeOut_.5s_both]",
                    "intro" === i && "hidden",
                    "confirm" === i && "hidden"
                  ),
                }),
                (0, s.jsx)("path", {
                  className: (0, a.P)(
                    "fill-primary-9",
                    "confirm" === i
                      ? "animate-[fadeIn_.5s_.3s_both,bounceSmall_1s_infinite_both]"
                      : "thinking" === i
                      ? "animate-[fadeOut_.5s_both]"
                      : "hidden"
                  ),
                  d: "M12.9463 5.24512C13.3688 5.24422 13.713 5.58625 13.7139 6.00879C13.7146 6.43114 13.3725 6.77338 12.9502 6.77441C12.5279 6.77505 12.1845 6.43408 12.1836 6.01172C12.1828 5.58953 12.5242 5.24649 12.9463 5.24512ZM13.0391 0.0751953C14.0688 0.0730893 14.9049 0.90586 14.9072 1.93555C14.9084 2.5063 14.6484 3.04679 14.2012 3.40137L13.7773 3.7373C13.6151 3.86604 13.5201 4.06239 13.5205 4.26953V4.30371C13.5211 4.62139 13.2639 4.879 12.9463 4.87988C12.6288 4.88032 12.3701 4.62417 12.3691 4.30664V4.27246C12.3679 3.71272 12.6238 3.18263 13.0625 2.83496L13.4854 2.49902C13.6565 2.36341 13.7562 2.1568 13.7559 1.93848C13.755 1.54463 13.4358 1.22503 13.042 1.22559H12.9385C12.488 1.22679 12.1225 1.59352 12.123 2.04395L12.124 2.21875C12.1245 2.53649 11.8676 2.79522 11.5498 2.7959C11.2321 2.79653 10.9746 2.53928 10.9736 2.22168L10.9727 2.04688C10.9706 0.960578 11.8493 0.0778178 12.9355 0.0751953H13.0391Z",
                }),
                (0, s.jsx)("path", {
                  d: "M3.5625 8.78512L7.26347 10.9219C7.88227 11.2791 8.64467 11.2791 9.26347 10.9219L14.25 8.0429C14.5833 7.85045 15 8.09101 15 8.47591V10.2777C15 10.4563 14.9047 10.6214 14.75 10.7107L9.26347 13.8784C8.64467 14.2356 7.88228 14.2356 7.26347 13.8784L3.5625 11.7416C2.70833 11.2978 1 9.93199 1 8.01949M1 8.01949C1 6.6448 1.84765 5.98698 2.62903 5.71701C3.15426 5.53555 3.71577 5.70568 4.19701 5.98353L7.26347 7.75395C7.88228 8.11122 8.64467 8.11122 9.26347 7.75395L10.9095 6.80362M1 8.01949C1 6.4945 2.03973 5.30731 2.5596 4.90434L7.37937 2.12165C7.79013 1.88449 8.26417 1.80476 8.71747 1.88245",
                  stroke: "currentColor",
                  strokeOpacity: "0.25",
                  strokeWidth: "1.2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  className: (0, a.P)(
                    "intro" === i && "animate-[fadeIn_2s_forwards]"
                  ),
                }),
                (0, s.jsx)("mask", {
                  id: "mask0_220_25",
                  style: { maskType: "alpha" },
                  maskUnits: "userSpaceOnUse",
                  x: "0",
                  y: "1",
                  width: "16",
                  height: "14",
                  children: (0, s.jsx)("path", {
                    d: "M3.5625 8.78512L7.26347 10.9219C7.88227 11.2791 8.64467 11.2791 9.26347 10.9219L14.25 8.0429C14.5833 7.85045 15 8.09101 15 8.47591V10.2777C15 10.4563 14.9047 10.6214 14.75 10.7107L9.26347 13.8784C8.64467 14.2356 7.88228 14.2356 7.26347 13.8784L3.5625 11.7416C2.70833 11.2978 1 9.93199 1 8.01949M1 8.01949C1 6.6448 1.84765 5.98698 2.62903 5.71701C3.15426 5.53555 3.71577 5.70568 4.19701 5.98353L7.26347 7.75395C7.88228 8.11122 8.64467 8.11122 9.26347 7.75395L10.9095 6.80362M1 8.01949C1 6.4945 2.03973 5.30731 2.5596 4.90434L7.37937 2.12165C7.79013 1.88449 8.26417 1.80476 8.71747 1.88245",
                    stroke: "currentColor",
                    pathLength: "100",
                    strokeWidth: "1.2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                  }),
                }),
                (0, s.jsx)("g", {
                  mask: "url(#mask0_220_25)",
                  children: (0, s.jsx)("path", {
                    d: "M3.5625 8.78512L7.26347 10.9219C7.88227 11.2791 8.64467 11.2791 9.26347 10.9219L14.25 8.0429C14.5833 7.85045 15 8.09101 15 8.47591V10.2777C15 10.4563 14.9047 10.6214 14.75 10.7107L9.26347 13.8784C8.64467 14.2356 7.88228 14.2356 7.26347 13.8784L3.5625 11.7416C2.70833 11.2978 1 9.93199 1 8.01949C1 6.6448 1.84765 5.98698 2.62903 5.71701C3.15426 5.53555 3.71577 5.70568 4.19701 5.98353L7.26347 7.75395C7.88228 8.11122 8.64467 8.11122 9.26347 7.75395L14.1991 4.90434L9.37937 2.12165C8.76057 1.76438 7.99907 1.76386 7.38027 2.12113C5.89314 2.97972 3.20298 4.53289 2.5596 4.90434C1.77376 5.35804 1 6.11597 1.00148 7.9207",
                    stroke: "currentColor",
                    pathLength: "100",
                    strokeWidth: "1.2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    className: (0, a.P)(
                      ("thinking" === i || "working" === i) &&
                        "animate-[pathLoading_2s_infinite_both]",
                      "intro" === i && "animate-[pathEnter_2s_both]",
                      "done" === i && "animate-[pathEnter_1s_forwards_ease]"
                    ),
                  }),
                }),
              ],
            })
          : (0, s.jsx)(l.In, {
              icon: "sparkle",
              className: (0, a.P)(
                t,
                ("thinking" === i || "working" === i) &&
                  "animate-[spin_2s_infinite_forwards_cubic-bezier(0.16,1,0.3,1)]",
                "intro" === i &&
                  "animate-[spin_2s_forwards_cubic-bezier(0.16,1,0.3,1)]"
              ),
            });
      };
    },
    75742: (e, t, n) => {
      n.d(t, {
        Ac: () => r,
        Do: () => i,
        VN: () => l,
        XO: () => o,
        a8: () => d,
        bY: () => u,
        tP: () => c,
      });
      var s = n(54568),
        a = n(98743);
      let l = n(7620).forwardRef((e, t) => {
        let { children: n, ...l } = e;
        return (0, s.jsx)("div", {
          ...l,
          className: (0, a.P)(
            "flex h-full grow animate-fade-in-slow flex-col overflow-hidden bg-tint-base text-sm text-tint",
            l.className
          ),
          ref: t,
          children: n,
        });
      });
      function r(e) {
        let { children: t } = e;
        return (0, s.jsx)("div", {
          className:
            "flex select-none items-center gap-2 border-tint-subtle border-b bg-tint-subtle px-4 py-2 text-tint-strong",
          children: t,
        });
      }
      function i(e) {
        let { children: t } = e;
        return (0, s.jsx)("div", {
          className: "flex flex-1 flex-col",
          children: t,
        });
      }
      function o(e) {
        let { children: t } = e;
        return (0, s.jsx)("div", {
          className: "flex flex-1 flex-col overflow-hidden",
          children: t,
        });
      }
      function c(e) {
        let { children: t } = e;
        return (0, s.jsx)("div", { className: "font-bold", children: t });
      }
      function u(e) {
        let { children: t, className: n } = e;
        return (0, s.jsx)("div", {
          className: (0, a.P)(
            "text-tint text-xs leading-none transition-all duration-500",
            n
          ),
          children: t,
        });
      }
      function d(e) {
        let { children: t } = e;
        return (0, s.jsx)("div", {
          className: "ml-auto flex gap-2",
          children: t,
        });
      }
    },
    85598: (e, t, n) => {
      n.d(t, { S: () => i });
      var s = n(54568),
        a = n(98743),
        l = n(86424),
        r = n(7620);
      function i(e) {
        let { keys: t, className: n } = e,
          [i, o] = r.useState(null);
        return (
          r.useEffect(() => {
            o(
              (function () {
                let e = navigator.platform.toLowerCase();
                return e.includes("mac") ? "mac" : (e.includes("win"), "win");
              })()
            );
          }, [])
          
        );
      }
    },
    89608: (e, t, n) => {
      n.d(t, {
        By: () => s.integrationsAssistantTools,
        r0: () => s.useIntegrationAssistants,
      });
      var s = n(22399);
    },
    97306: (e, t, n) => {
      n.r(t), n.d(t, { AIContextProvider: () => h, useAI: () => p });
      var s = n(54568),
        a = n(5772),
        l = n(86424),
        r = n(7620),
        i = n(88118),
        o = n(55809),
        c = n(99507),
        u = n(89608),
        d = n(21566);
      let m = r.createContext(null);
      function h(e) {
        let { aiMode: t, trademark: n, children: a } = e,
          l = r.useMemo(() => ({ aiMode: t, trademark: n }), [t, n]);
        return (0, s.jsx)(m.Provider, { value: l, children: a });
      }
      function p() {
        let e = (function () {
            let e = r.useContext(m);
            if (!e) throw Error("useAI must be used within AIContextProvider");
            return e;
          })(),
          t = (0, o.J4)(),
          n = (0, o.C8)(),
          h = (0, i.ok)(),
          [, p] = (0, d.useSearch)(),
          f = [];
        e.aiMode === a.RN.Assistant
          ? f.push({
              id: "gitbook-assistant",
              label: (0, c.YZ)(h, e.trademark),
              icon: (0, s.jsx)(c.yQ, {
                state: t.loading ? "thinking" : "default",
                trademark: e.trademark,
              }),
              open: (e) => {
                n.open(), e && n.postMessage({ message: e });
              },
              pageAction: !0,
              ui: !0,
              mode: "sidebar",
            })
          : e.aiMode === a.RN.Search &&
            f.push({
              id: "gitbook-ai-search",
              label: (0, i.si)(h, "ai_chat_context_badge"),
              icon: (0, s.jsxs)("div", {
                className: "relative",
                children: [
                  (0, s.jsx)(l.In, { icon: "search", className: "size-4" }),
                  (0, s.jsx)(l.In, {
                    icon: "sparkle",
                    iconStyle: l.pO.Solid,
                    className: "absolute top-[2.5px] left-[2.6px] size-2",
                  }),
                ],
              }),
              open: (e) => {
                e &&
                  p((t) =>
                    t ? { ...t, query: null, ask: e, open: !0 } : null
                  );
              },
              pageAction: !1,
              ui: !1,
              mode: "search",
            });
        let x = (0, u.r0)();
        return (
          x.length > 0 &&
            f.push(
              ...x.map((e) => ({
                ...e,
                icon: (0, s.jsx)(l.In, { icon: e.icon, className: "size-4" }),
                open: (t) => {
                  p((e) => {
                    var t, n;
                    return {
                      ask: null,
                      query:
                        null != (t = null == e ? void 0 : e.query) ? t : null,
                      global: null != (n = null == e ? void 0 : e.global) && n,
                      open: !1,
                    };
                  }),
                    e.open(t);
                },
              }))
            ),
          { config: e, assistants: f }
        );
      }
    },
    99507: (e, t, n) => {
      n.d(t, {
        Fo: () => s.AIChatBody,
        LN: () => a.AIChatButton,
        Rk: () => s.AIChatSubtitle,
        Xo: () => s.AIChatDynamicIcon,
        YZ: () => s.getAIChatName,
        k6: () => i.AIChatControlButton,
        ph: () => r.AIResponseFeedback,
        yQ: () => l.y,
      });
      var s = n(37397),
        a = n(60101),
        l = n(73598),
        r = n(28463),
        i = n(60544);
    },
  },
]);
