var content = (function () {
  "use strict";
  var _e = Object.defineProperty;
  var ve = (E, b, _) =>
    b in E
      ? _e(E, b, { enumerable: !0, configurable: !0, writable: !0, value: _ })
      : (E[b] = _);
  var p = (E, b, _) => ve(E, typeof b != "symbol" ? b + "" : b, _);
  function E(t) {
    return t;
  }
  var b =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
        ? window
        : typeof global < "u"
          ? global
          : typeof self < "u"
            ? self
            : {};
  function _(t) {
    return t &&
      t.__esModule &&
      Object.prototype.hasOwnProperty.call(t, "default")
      ? t.default
      : t;
  }
  var j = { exports: {} };
  (function (t, e) {
    (function (s, r) {
      r(t);
    })(
      typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : b,
      function (s) {
        if (
          !(
            globalThis.chrome &&
            globalThis.chrome.runtime &&
            globalThis.chrome.runtime.id
          )
        )
          throw new Error(
            "This script should only be loaded in a browser extension.",
          );
        if (
          globalThis.browser &&
          globalThis.browser.runtime &&
          globalThis.browser.runtime.id
        )
          s.exports = globalThis.browser;
        else {
          const r = "The message port closed before a response was received.",
            a = (l) => {
              const d = {
                alarms: {
                  clear: { minArgs: 0, maxArgs: 1 },
                  clearAll: { minArgs: 0, maxArgs: 0 },
                  get: { minArgs: 0, maxArgs: 1 },
                  getAll: { minArgs: 0, maxArgs: 0 },
                },
                bookmarks: {
                  create: { minArgs: 1, maxArgs: 1 },
                  get: { minArgs: 1, maxArgs: 1 },
                  getChildren: { minArgs: 1, maxArgs: 1 },
                  getRecent: { minArgs: 1, maxArgs: 1 },
                  getSubTree: { minArgs: 1, maxArgs: 1 },
                  getTree: { minArgs: 0, maxArgs: 0 },
                  move: { minArgs: 2, maxArgs: 2 },
                  remove: { minArgs: 1, maxArgs: 1 },
                  removeTree: { minArgs: 1, maxArgs: 1 },
                  search: { minArgs: 1, maxArgs: 1 },
                  update: { minArgs: 2, maxArgs: 2 },
                },
                browserAction: {
                  disable: { minArgs: 0, maxArgs: 1, fallbackToNoCallback: !0 },
                  enable: { minArgs: 0, maxArgs: 1, fallbackToNoCallback: !0 },
                  getBadgeBackgroundColor: { minArgs: 1, maxArgs: 1 },
                  getBadgeText: { minArgs: 1, maxArgs: 1 },
                  getPopup: { minArgs: 1, maxArgs: 1 },
                  getTitle: { minArgs: 1, maxArgs: 1 },
                  openPopup: { minArgs: 0, maxArgs: 0 },
                  setBadgeBackgroundColor: {
                    minArgs: 1,
                    maxArgs: 1,
                    fallbackToNoCallback: !0,
                  },
                  setBadgeText: {
                    minArgs: 1,
                    maxArgs: 1,
                    fallbackToNoCallback: !0,
                  },
                  setIcon: { minArgs: 1, maxArgs: 1 },
                  setPopup: {
                    minArgs: 1,
                    maxArgs: 1,
                    fallbackToNoCallback: !0,
                  },
                  setTitle: {
                    minArgs: 1,
                    maxArgs: 1,
                    fallbackToNoCallback: !0,
                  },
                },
                browsingData: {
                  remove: { minArgs: 2, maxArgs: 2 },
                  removeCache: { minArgs: 1, maxArgs: 1 },
                  removeCookies: { minArgs: 1, maxArgs: 1 },
                  removeDownloads: { minArgs: 1, maxArgs: 1 },
                  removeFormData: { minArgs: 1, maxArgs: 1 },
                  removeHistory: { minArgs: 1, maxArgs: 1 },
                  removeLocalStorage: { minArgs: 1, maxArgs: 1 },
                  removePasswords: { minArgs: 1, maxArgs: 1 },
                  removePluginData: { minArgs: 1, maxArgs: 1 },
                  settings: { minArgs: 0, maxArgs: 0 },
                },
                commands: { getAll: { minArgs: 0, maxArgs: 0 } },
                contextMenus: {
                  remove: { minArgs: 1, maxArgs: 1 },
                  removeAll: { minArgs: 0, maxArgs: 0 },
                  update: { minArgs: 2, maxArgs: 2 },
                },
                cookies: {
                  get: { minArgs: 1, maxArgs: 1 },
                  getAll: { minArgs: 1, maxArgs: 1 },
                  getAllCookieStores: { minArgs: 0, maxArgs: 0 },
                  remove: { minArgs: 1, maxArgs: 1 },
                  set: { minArgs: 1, maxArgs: 1 },
                },
                devtools: {
                  inspectedWindow: {
                    eval: { minArgs: 1, maxArgs: 2, singleCallbackArg: !1 },
                  },
                  panels: {
                    create: { minArgs: 3, maxArgs: 3, singleCallbackArg: !0 },
                    elements: { createSidebarPane: { minArgs: 1, maxArgs: 1 } },
                  },
                },
                downloads: {
                  cancel: { minArgs: 1, maxArgs: 1 },
                  download: { minArgs: 1, maxArgs: 1 },
                  erase: { minArgs: 1, maxArgs: 1 },
                  getFileIcon: { minArgs: 1, maxArgs: 2 },
                  open: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                  pause: { minArgs: 1, maxArgs: 1 },
                  removeFile: { minArgs: 1, maxArgs: 1 },
                  resume: { minArgs: 1, maxArgs: 1 },
                  search: { minArgs: 1, maxArgs: 1 },
                  show: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                },
                extension: {
                  isAllowedFileSchemeAccess: { minArgs: 0, maxArgs: 0 },
                  isAllowedIncognitoAccess: { minArgs: 0, maxArgs: 0 },
                },
                history: {
                  addUrl: { minArgs: 1, maxArgs: 1 },
                  deleteAll: { minArgs: 0, maxArgs: 0 },
                  deleteRange: { minArgs: 1, maxArgs: 1 },
                  deleteUrl: { minArgs: 1, maxArgs: 1 },
                  getVisits: { minArgs: 1, maxArgs: 1 },
                  search: { minArgs: 1, maxArgs: 1 },
                },
                i18n: {
                  detectLanguage: { minArgs: 1, maxArgs: 1 },
                  getAcceptLanguages: { minArgs: 0, maxArgs: 0 },
                },
                identity: { launchWebAuthFlow: { minArgs: 1, maxArgs: 1 } },
                idle: { queryState: { minArgs: 1, maxArgs: 1 } },
                management: {
                  get: { minArgs: 1, maxArgs: 1 },
                  getAll: { minArgs: 0, maxArgs: 0 },
                  getSelf: { minArgs: 0, maxArgs: 0 },
                  setEnabled: { minArgs: 2, maxArgs: 2 },
                  uninstallSelf: { minArgs: 0, maxArgs: 1 },
                },
                notifications: {
                  clear: { minArgs: 1, maxArgs: 1 },
                  create: { minArgs: 1, maxArgs: 2 },
                  getAll: { minArgs: 0, maxArgs: 0 },
                  getPermissionLevel: { minArgs: 0, maxArgs: 0 },
                  update: { minArgs: 2, maxArgs: 2 },
                },
                pageAction: {
                  getPopup: { minArgs: 1, maxArgs: 1 },
                  getTitle: { minArgs: 1, maxArgs: 1 },
                  hide: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                  setIcon: { minArgs: 1, maxArgs: 1 },
                  setPopup: {
                    minArgs: 1,
                    maxArgs: 1,
                    fallbackToNoCallback: !0,
                  },
                  setTitle: {
                    minArgs: 1,
                    maxArgs: 1,
                    fallbackToNoCallback: !0,
                  },
                  show: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                },
                permissions: {
                  contains: { minArgs: 1, maxArgs: 1 },
                  getAll: { minArgs: 0, maxArgs: 0 },
                  remove: { minArgs: 1, maxArgs: 1 },
                  request: { minArgs: 1, maxArgs: 1 },
                },
                runtime: {
                  getBackgroundPage: { minArgs: 0, maxArgs: 0 },
                  getPlatformInfo: { minArgs: 0, maxArgs: 0 },
                  openOptionsPage: { minArgs: 0, maxArgs: 0 },
                  requestUpdateCheck: { minArgs: 0, maxArgs: 0 },
                  sendMessage: { minArgs: 1, maxArgs: 3 },
                  sendNativeMessage: { minArgs: 2, maxArgs: 2 },
                  setUninstallURL: { minArgs: 1, maxArgs: 1 },
                },
                sessions: {
                  getDevices: { minArgs: 0, maxArgs: 1 },
                  getRecentlyClosed: { minArgs: 0, maxArgs: 1 },
                  restore: { minArgs: 0, maxArgs: 1 },
                },
                storage: {
                  local: {
                    clear: { minArgs: 0, maxArgs: 0 },
                    get: { minArgs: 0, maxArgs: 1 },
                    getBytesInUse: { minArgs: 0, maxArgs: 1 },
                    remove: { minArgs: 1, maxArgs: 1 },
                    set: { minArgs: 1, maxArgs: 1 },
                  },
                  managed: {
                    get: { minArgs: 0, maxArgs: 1 },
                    getBytesInUse: { minArgs: 0, maxArgs: 1 },
                  },
                  sync: {
                    clear: { minArgs: 0, maxArgs: 0 },
                    get: { minArgs: 0, maxArgs: 1 },
                    getBytesInUse: { minArgs: 0, maxArgs: 1 },
                    remove: { minArgs: 1, maxArgs: 1 },
                    set: { minArgs: 1, maxArgs: 1 },
                  },
                },
                tabs: {
                  captureVisibleTab: { minArgs: 0, maxArgs: 2 },
                  create: { minArgs: 1, maxArgs: 1 },
                  detectLanguage: { minArgs: 0, maxArgs: 1 },
                  discard: { minArgs: 0, maxArgs: 1 },
                  duplicate: { minArgs: 1, maxArgs: 1 },
                  executeScript: { minArgs: 1, maxArgs: 2 },
                  get: { minArgs: 1, maxArgs: 1 },
                  getCurrent: { minArgs: 0, maxArgs: 0 },
                  getZoom: { minArgs: 0, maxArgs: 1 },
                  getZoomSettings: { minArgs: 0, maxArgs: 1 },
                  goBack: { minArgs: 0, maxArgs: 1 },
                  goForward: { minArgs: 0, maxArgs: 1 },
                  highlight: { minArgs: 1, maxArgs: 1 },
                  insertCSS: { minArgs: 1, maxArgs: 2 },
                  move: { minArgs: 2, maxArgs: 2 },
                  query: { minArgs: 1, maxArgs: 1 },
                  reload: { minArgs: 0, maxArgs: 2 },
                  remove: { minArgs: 1, maxArgs: 1 },
                  removeCSS: { minArgs: 1, maxArgs: 2 },
                  sendMessage: { minArgs: 2, maxArgs: 3 },
                  setZoom: { minArgs: 1, maxArgs: 2 },
                  setZoomSettings: { minArgs: 1, maxArgs: 2 },
                  update: { minArgs: 1, maxArgs: 2 },
                },
                topSites: { get: { minArgs: 0, maxArgs: 0 } },
                webNavigation: {
                  getAllFrames: { minArgs: 1, maxArgs: 1 },
                  getFrame: { minArgs: 1, maxArgs: 1 },
                },
                webRequest: {
                  handlerBehaviorChanged: { minArgs: 0, maxArgs: 0 },
                },
                windows: {
                  create: { minArgs: 0, maxArgs: 1 },
                  get: { minArgs: 1, maxArgs: 2 },
                  getAll: { minArgs: 0, maxArgs: 1 },
                  getCurrent: { minArgs: 0, maxArgs: 1 },
                  getLastFocused: { minArgs: 0, maxArgs: 1 },
                  remove: { minArgs: 1, maxArgs: 1 },
                  update: { minArgs: 2, maxArgs: 2 },
                },
              };
              if (Object.keys(d).length === 0)
                throw new Error(
                  "api-metadata.json has not been included in browser-polyfill",
                );
              class y extends WeakMap {
                constructor(i, g = void 0) {
                  super(g), (this.createItem = i);
                }
                get(i) {
                  return (
                    this.has(i) || this.set(i, this.createItem(i)), super.get(i)
                  );
                }
              }
              const pe = (n) =>
                  n && typeof n == "object" && typeof n.then == "function",
                W =
                  (n, i) =>
                  (...g) => {
                    l.runtime.lastError
                      ? n.reject(new Error(l.runtime.lastError.message))
                      : i.singleCallbackArg ||
                          (g.length <= 1 && i.singleCallbackArg !== !1)
                        ? n.resolve(g[0])
                        : n.resolve(g);
                  },
                O = (n) => (n == 1 ? "argument" : "arguments"),
                we = (n, i) =>
                  function (c, ...u) {
                    if (u.length < i.minArgs)
                      throw new Error(
                        `Expected at least ${i.minArgs} ${O(i.minArgs)} for ${n}(), got ${u.length}`,
                      );
                    if (u.length > i.maxArgs)
                      throw new Error(
                        `Expected at most ${i.maxArgs} ${O(i.maxArgs)} for ${n}(), got ${u.length}`,
                      );
                    return new Promise((h, f) => {
                      if (i.fallbackToNoCallback)
                        try {
                          c[n](...u, W({ resolve: h, reject: f }, i));
                        } catch (o) {
                          console.warn(
                            `${n} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,
                            o,
                          ),
                            c[n](...u),
                            (i.fallbackToNoCallback = !1),
                            (i.noCallback = !0),
                            h();
                        }
                      else
                        i.noCallback
                          ? (c[n](...u), h())
                          : c[n](...u, W({ resolve: h, reject: f }, i));
                    });
                  },
                H = (n, i, g) =>
                  new Proxy(i, {
                    apply(c, u, h) {
                      return g.call(u, n, ...h);
                    },
                  });
              let R = Function.call.bind(Object.prototype.hasOwnProperty);
              const D = (n, i = {}, g = {}) => {
                  let c = Object.create(null),
                    u = {
                      has(f, o) {
                        return o in n || o in c;
                      },
                      get(f, o, x) {
                        if (o in c) return c[o];
                        if (!(o in n)) return;
                        let m = n[o];
                        if (typeof m == "function")
                          if (typeof i[o] == "function") m = H(n, n[o], i[o]);
                          else if (R(g, o)) {
                            let v = we(o, g[o]);
                            m = H(n, n[o], v);
                          } else m = m.bind(n);
                        else if (
                          typeof m == "object" &&
                          m !== null &&
                          (R(i, o) || R(g, o))
                        )
                          m = D(m, i[o], g[o]);
                        else if (R(g, "*")) m = D(m, i[o], g["*"]);
                        else
                          return (
                            Object.defineProperty(c, o, {
                              configurable: !0,
                              enumerable: !0,
                              get() {
                                return n[o];
                              },
                              set(v) {
                                n[o] = v;
                              },
                            }),
                            m
                          );
                        return (c[o] = m), m;
                      },
                      set(f, o, x, m) {
                        return o in c ? (c[o] = x) : (n[o] = x), !0;
                      },
                      defineProperty(f, o, x) {
                        return Reflect.defineProperty(c, o, x);
                      },
                      deleteProperty(f, o) {
                        return Reflect.deleteProperty(c, o);
                      },
                    },
                    h = Object.create(n);
                  return new Proxy(h, u);
                },
                $ = (n) => ({
                  addListener(i, g, ...c) {
                    i.addListener(n.get(g), ...c);
                  },
                  hasListener(i, g) {
                    return i.hasListener(n.get(g));
                  },
                  removeListener(i, g) {
                    i.removeListener(n.get(g));
                  },
                }),
                be = new y((n) =>
                  typeof n != "function"
                    ? n
                    : function (g) {
                        const c = D(
                          g,
                          {},
                          { getContent: { minArgs: 0, maxArgs: 0 } },
                        );
                        n(c);
                      },
                ),
                Y = new y((n) =>
                  typeof n != "function"
                    ? n
                    : function (g, c, u) {
                        let h = !1,
                          f,
                          o = new Promise((I) => {
                            f = function (w) {
                              (h = !0), I(w);
                            };
                          }),
                          x;
                        try {
                          x = n(g, c, f);
                        } catch (I) {
                          x = Promise.reject(I);
                        }
                        const m = x !== !0 && pe(x);
                        if (x !== !0 && !m && !h) return !1;
                        const v = (I) => {
                          I.then(
                            (w) => {
                              u(w);
                            },
                            (w) => {
                              let V;
                              w &&
                              (w instanceof Error ||
                                typeof w.message == "string")
                                ? (V = w.message)
                                : (V = "An unexpected error occurred"),
                                u({
                                  __mozWebExtensionPolyfillReject__: !0,
                                  message: V,
                                });
                            },
                          ).catch((w) => {
                            console.error(
                              "Failed to send onMessage rejected reply",
                              w,
                            );
                          });
                        };
                        return v(m ? x : o), !0;
                      },
                ),
                ye = ({ reject: n, resolve: i }, g) => {
                  l.runtime.lastError
                    ? l.runtime.lastError.message === r
                      ? i()
                      : n(new Error(l.runtime.lastError.message))
                    : g && g.__mozWebExtensionPolyfillReject__
                      ? n(new Error(g.message))
                      : i(g);
                },
                z = (n, i, g, ...c) => {
                  if (c.length < i.minArgs)
                    throw new Error(
                      `Expected at least ${i.minArgs} ${O(i.minArgs)} for ${n}(), got ${c.length}`,
                    );
                  if (c.length > i.maxArgs)
                    throw new Error(
                      `Expected at most ${i.maxArgs} ${O(i.maxArgs)} for ${n}(), got ${c.length}`,
                    );
                  return new Promise((u, h) => {
                    const f = ye.bind(null, { resolve: u, reject: h });
                    c.push(f), g.sendMessage(...c);
                  });
                },
                Ee = {
                  devtools: { network: { onRequestFinished: $(be) } },
                  runtime: {
                    onMessage: $(Y),
                    onMessageExternal: $(Y),
                    sendMessage: z.bind(null, "sendMessage", {
                      minArgs: 1,
                      maxArgs: 3,
                    }),
                  },
                  tabs: {
                    sendMessage: z.bind(null, "sendMessage", {
                      minArgs: 2,
                      maxArgs: 3,
                    }),
                  },
                },
                B = {
                  clear: { minArgs: 1, maxArgs: 1 },
                  get: { minArgs: 1, maxArgs: 1 },
                  set: { minArgs: 1, maxArgs: 1 },
                };
              return (
                (d.privacy = {
                  network: { "*": B },
                  services: { "*": B },
                  websites: { "*": B },
                }),
                D(l, Ee, d)
              );
            };
          s.exports = a(chrome);
        }
      },
    );
  })(j);
  var Z = j.exports;
  const A = _(Z),
    T = {
      EXTENSION: "XHS_EXTENSION",
      CONTENT: "XHS_CONTENT",
      PAGE: "XHS_PAGE",
    },
    F = { EXTENSION_READY: "EXTENSION_READY", PAGE_READY: "PAGE_READY" },
    q = "https://www.xiaohongshu.com",
    J = `${q}/browser_extension`,
    Q = new URL(J).hostname,
    ee = [q],
    G = { log(...t) {}, warn(...t) {}, error(...t) {} },
    se = "https://apm-fe.xiaohongshu.com/api/data",
    te = 10,
    re = 4e3;
  var C = ((t) => (
    (t.BACKGROUND_EVENT = "ext_background_event"),
    (t.DNR_EVENT = "ext_dnr_event"),
    (t.COOKIE_EVENT = "ext_cookie_event"),
    (t.MESSAGE_EVENT = "ext_message_event"),
    (t.CONTENT_EVENT = "ext_content_event"),
    (t.IFRAME_EVENT = "ext_iframe_event"),
    (t.USER_ACTION_EVENT = "ext_user_action_event"),
    t
  ))(C || {});
  class ne {
    constructor() {
      p(this, "cachedDeviceId", "");
      p(this, "cachedUserId", "");
      p(this, "queue", []);
      p(this, "timer", null);
    }
    buildContext() {
      const e = Date.now(),
        s = A.runtime.getManifest();
      return {
        clientEventTime: e,
        clientTime: e,
        context_env: "prod",
        context_nameTracker: "wapT",
        context_platform: "web",
        context_appVersion: s.version,
        context_osVersion: navigator.platform,
        context_deviceModel: "",
        context_deviceId: this.cachedDeviceId,
        context_package: "xhs_pc_extension",
        context_networkType: navigator.onLine ? "wifi" : "none",
        context_matchedPath: "",
        context_route: "",
        context_userAgent: navigator.userAgent,
        context_artifactName: "xhs-pc-web",
        context_artifactVersion: s.version,
        context_networkQuality: "unknow",
        context_userId: this.cachedUserId,
      };
    }
    async initContext() {
      var e;
      try {
        if (typeof A < "u" && A.cookies) {
          const r =
            ((e = (await A.cookies.getAll({ domain: Q })).find(
              (a) => a.name === "webId",
            )) == null
              ? void 0
              : e.value) ?? "";
          r && (this.cachedDeviceId = r);
        }
        if (typeof A < "u" && A.storage) {
          const r =
            (await A.storage.local.get("cachedUserId")).cachedUserId ?? "";
          r && (this.cachedUserId = r);
        }
      } catch {}
    }
    async initContextFromDocumentCookie() {
      try {
        const e = document.cookie.match(/(?:^|;\s*)webId=([^;]*)/),
          s = e ? decodeURIComponent(e[1]) : "";
        s && (this.cachedDeviceId = s);
        const a =
          (await A.storage.local.get("cachedUserId")).cachedUserId ?? "";
        a && (this.cachedUserId = a);
      } catch {}
    }
    async initContextFromBackground(e) {
      try {
        const s = await e(),
          r = (s == null ? void 0 : s.webId) ?? "",
          a = (s == null ? void 0 : s.userId) ?? "";
        r && (this.cachedDeviceId = r), a && (this.cachedUserId = a);
      } catch {}
    }
    updateUserId(e) {
      e && (this.cachedUserId = e);
    }
    push(e, s) {
      const r = {
        ...this.buildContext(),
        measurement_name: e,
        measurement_data: {
          event: s.event,
          action: s.action,
          time: Date.now(),
          extra: JSON.stringify(s.extra ?? {}),
          ...(s.duration !== void 0 ? { duration: s.duration } : {}),
        },
      };
      if ((this.queue.push(r), this.queue.length >= te)) {
        this.flush();
        return;
      }
      this.timer || (this.timer = setTimeout(() => this.flush(), re));
    }
    flush() {
      if (
        (this.timer && (clearTimeout(this.timer), (this.timer = null)),
        this.queue.length === 0)
      )
        return;
      const e = this.queue.splice(0),
        s = this.cachedDeviceId,
        r = this.cachedUserId;
      if (s || r)
        for (const a of e)
          !a.context_deviceId && s && (a.context_deviceId = s),
            !a.context_userId && r && (a.context_userId = r);
      fetch(se, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "biz-type": "apm_fe",
          batch: "true",
        },
        body: JSON.stringify(e),
        keepalive: !0,
      }).catch(() => {});
    }
  }
  const S = new ne(),
    ie = {
      matches: ["https://www.xiaohongshu.com/*", "https://*.xiaohongshu.com/*"],
      allFrames: !0,
      runAt: "document_idle",
      main() {
        const t = window !== window.top;
        S.initContextFromDocumentCookie(),
          S.push(C.CONTENT_EVENT, {
            event: "content_script_injected",
            action: "success",
            extra: { isFrame: t, hostname: window.location.hostname },
          }),
          oe(),
          ae(),
          window === window.top ? ge() : (le(), ce());
      },
    };
  function oe() {
    A.runtime.onMessage.addListener((t, e) => {
      const s = t;
      s.source === T.EXTENSION &&
        (G.log("[Content Script] 转发消息到页面:", s.type),
        window.postMessage(s, window.location.origin));
    });
  }
  function ae() {
    window.addEventListener("message", (t) => {
      var e;
      ee.includes(t.origin) &&
        ((e = t.data) == null ? void 0 : e.source) === T.PAGE &&
        (G.log("[Content Script] 转发页面消息到 Background:", t.data.type),
        A.runtime.sendMessage(t.data).catch((s) => {}));
    });
  }
  function ge() {
    (window.__XHS_EXTENSION_READY__ = !0), X(), me();
    const t = {
        source: T.EXTENSION,
        type: F.EXTENSION_READY,
        payload: {
          version: A.runtime.getManifest().version,
          timestamp: Date.now(),
        },
      },
      e = () => {
        window.postMessage(t, window.location.origin),
          S.push(C.CONTENT_EVENT, {
            event: "extension_ready_notified",
            action: "success",
            extra: { isFrame: !1 },
          });
      };
    document.readyState === "complete"
      ? e()
      : window.addEventListener("load", e);
  }
  function X() {
    A.runtime
      .sendMessage({
        source: T.CONTENT,
        type: F.PAGE_READY,
        payload: { url: window.location.href },
      })
      .catch(() => {});
  }
  function ce() {
    const t = {
      source: T.EXTENSION,
      type: F.EXTENSION_READY,
      payload: {
        version: A.runtime.getManifest().version,
        timestamp: Date.now(),
      },
    };
    window.postMessage(t, window.location.origin),
      S.push(C.CONTENT_EVENT, {
        event: "extension_ready_notified",
        action: "success",
        extra: { isFrame: !0 },
      });
  }
  function le() {
    const t = () => {
      const e = document.querySelector('link[rel="manifest"]');
      e && e.remove();
    };
    document.readyState === "loading"
      ? document.addEventListener("DOMContentLoaded", t, { once: !0 })
      : t();
  }
  function me() {
    if (!window.location.hostname.endsWith("xiaohongshu.com")) return;
    let t = document.cookie;
    setInterval(() => {
      const e = document.cookie;
      e !== t && ((t = e), X(), S.initContextFromDocumentCookie());
    }, 500);
  }
  function N(t, ...e) {}
  const Ae = {
      debug: (...t) => N(console.debug, ...t),
      log: (...t) => N(console.log, ...t),
      warn: (...t) => N(console.warn, ...t),
      error: (...t) => N(console.error, ...t),
    },
    P = class P extends Event {
      constructor(e, s) {
        super(P.EVENT_NAME, {}), (this.newUrl = e), (this.oldUrl = s);
      }
    };
  p(P, "EVENT_NAME", U("wxt:locationchange"));
  let L = P;
  function U(t) {
    var e;
    return `${(e = A == null ? void 0 : A.runtime) == null ? void 0 : e.id}:content:${t}`;
  }
  function ue(t) {
    let e, s;
    return {
      run() {
        e == null &&
          ((s = new URL(location.href)),
          (e = t.setInterval(() => {
            let r = new URL(location.href);
            r.href !== s.href && (window.dispatchEvent(new L(r, s)), (s = r));
          }, 1e3)));
      },
    };
  }
  const k = class k {
    constructor(e, s) {
      p(this, "isTopFrame", window.self === window.top);
      p(this, "abortController");
      p(this, "locationWatcher", ue(this));
      p(this, "receivedMessageIds", new Set());
      (this.contentScriptName = e),
        (this.options = s),
        (this.abortController = new AbortController()),
        this.isTopFrame
          ? (this.listenForNewerScripts({ ignoreFirstEvent: !0 }),
            this.stopOldScripts())
          : this.listenForNewerScripts();
    }
    get signal() {
      return this.abortController.signal;
    }
    abort(e) {
      return this.abortController.abort(e);
    }
    get isInvalid() {
      return (
        A.runtime.id == null && this.notifyInvalidated(), this.signal.aborted
      );
    }
    get isValid() {
      return !this.isInvalid;
    }
    onInvalidated(e) {
      return (
        this.signal.addEventListener("abort", e),
        () => this.signal.removeEventListener("abort", e)
      );
    }
    block() {
      return new Promise(() => {});
    }
    setInterval(e, s) {
      const r = setInterval(() => {
        this.isValid && e();
      }, s);
      return this.onInvalidated(() => clearInterval(r)), r;
    }
    setTimeout(e, s) {
      const r = setTimeout(() => {
        this.isValid && e();
      }, s);
      return this.onInvalidated(() => clearTimeout(r)), r;
    }
    requestAnimationFrame(e) {
      const s = requestAnimationFrame((...r) => {
        this.isValid && e(...r);
      });
      return this.onInvalidated(() => cancelAnimationFrame(s)), s;
    }
    requestIdleCallback(e, s) {
      const r = requestIdleCallback((...a) => {
        this.signal.aborted || e(...a);
      }, s);
      return this.onInvalidated(() => cancelIdleCallback(r)), r;
    }
    addEventListener(e, s, r, a) {
      var l;
      s === "wxt:locationchange" && this.isValid && this.locationWatcher.run(),
        (l = e.addEventListener) == null ||
          l.call(e, s.startsWith("wxt:") ? U(s) : s, r, {
            ...a,
            signal: this.signal,
          });
    }
    notifyInvalidated() {
      this.abort("Content script context invalidated"),
        Ae.debug(
          `Content script "${this.contentScriptName}" context invalidated`,
        );
    }
    stopOldScripts() {
      window.postMessage(
        {
          type: k.SCRIPT_STARTED_MESSAGE_TYPE,
          contentScriptName: this.contentScriptName,
          messageId: Math.random().toString(36).slice(2),
        },
        "*",
      );
    }
    verifyScriptStartedEvent(e) {
      var l, d, y;
      const s =
          ((l = e.data) == null ? void 0 : l.type) ===
          k.SCRIPT_STARTED_MESSAGE_TYPE,
        r =
          ((d = e.data) == null ? void 0 : d.contentScriptName) ===
          this.contentScriptName,
        a = !this.receivedMessageIds.has(
          (y = e.data) == null ? void 0 : y.messageId,
        );
      return s && r && a;
    }
    listenForNewerScripts(e) {
      let s = !0;
      const r = (a) => {
        if (this.verifyScriptStartedEvent(a)) {
          this.receivedMessageIds.add(a.data.messageId);
          const l = s;
          if (((s = !1), l && e != null && e.ignoreFirstEvent)) return;
          this.notifyInvalidated();
        }
      };
      addEventListener("message", r),
        this.onInvalidated(() => removeEventListener("message", r));
    }
  };
  p(k, "SCRIPT_STARTED_MESSAGE_TYPE", U("wxt:content-script-started"));
  let K = k;
  const de = Symbol("null");
  let he = 0;
  class fe extends Map {
    constructor(...e) {
      super(),
        (this._objectHashes = new WeakMap()),
        (this._symbolHashes = new Map()),
        (this._publicKeys = new Map());
      const [s] = e;
      if (s != null) {
        if (typeof s[Symbol.iterator] != "function")
          throw new TypeError(
            typeof s +
              " is not iterable (cannot read property Symbol(Symbol.iterator))",
          );
        for (const [r, a] of s) this.set(r, a);
      }
    }
    _getPublicKeys(e, s = !1) {
      if (!Array.isArray(e))
        throw new TypeError("The keys parameter must be an array");
      const r = this._getPrivateKey(e, s);
      let a;
      return (
        r && this._publicKeys.has(r)
          ? (a = this._publicKeys.get(r))
          : s && ((a = [...e]), this._publicKeys.set(r, a)),
        { privateKey: r, publicKey: a }
      );
    }
    _getPrivateKey(e, s = !1) {
      const r = [];
      for (const a of e) {
        const l = a === null ? de : a;
        let d;
        if (
          (typeof l == "object" || typeof l == "function"
            ? (d = "_objectHashes")
            : typeof l == "symbol"
              ? (d = "_symbolHashes")
              : (d = !1),
          !d)
        )
          r.push(l);
        else if (this[d].has(l)) r.push(this[d].get(l));
        else if (s) {
          const y = `@@mkm-ref-${he++}@@`;
          this[d].set(l, y), r.push(y);
        } else return !1;
      }
      return JSON.stringify(r);
    }
    set(e, s) {
      const { publicKey: r } = this._getPublicKeys(e, !0);
      return super.set(r, s);
    }
    get(e) {
      const { publicKey: s } = this._getPublicKeys(e);
      return super.get(s);
    }
    has(e) {
      const { publicKey: s } = this._getPublicKeys(e);
      return super.has(s);
    }
    delete(e) {
      const { publicKey: s, privateKey: r } = this._getPublicKeys(e);
      return !!(s && super.delete(s) && this._publicKeys.delete(r));
    }
    clear() {
      super.clear(), this._symbolHashes.clear(), this._publicKeys.clear();
    }
    get [Symbol.toStringTag]() {
      return "ManyKeysMap";
    }
    get size() {
      return super.size;
    }
  }
  new fe();
  function Se() {}
  function M(t, ...e) {}
  const xe = {
    debug: (...t) => M(console.debug, ...t),
    log: (...t) => M(console.log, ...t),
    warn: (...t) => M(console.warn, ...t),
    error: (...t) => M(console.error, ...t),
  };
  return (async () => {
    try {
      const { main: t, ...e } = ie,
        s = new K("content", e);
      return await t(s);
    } catch (t) {
      throw (
        (xe.error('The content script "content" crashed on startup!', t), t)
      );
    }
  })();
})();
content;
