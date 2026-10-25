var background = (function () {
  "use strict";
  var _e = Object.defineProperty;
  var Ee = (I, k, S) =>
    k in I
      ? _e(I, k, { enumerable: !0, configurable: !0, writable: !0, value: S })
      : (I[k] = S);
  var D = (I, k, S) => Ee(I, typeof k != "symbol" ? k + "" : k, S);
  function I(s) {
    return s == null || typeof s == "function" ? { main: s } : s;
  }
  var k =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
        ? window
        : typeof global < "u"
          ? global
          : typeof self < "u"
            ? self
            : {};
  function S(s) {
    return s &&
      s.__esModule &&
      Object.prototype.hasOwnProperty.call(s, "default")
      ? s.default
      : s;
  }
  var Y = { exports: {} };
  (function (s, r) {
    (function (e, n) {
      n(s);
    })(
      typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : k,
      function (e) {
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
          e.exports = globalThis.browser;
        else {
          const n = "The message port closed before a response was received.",
            a = (m) => {
              const E = {
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
              if (Object.keys(E).length === 0)
                throw new Error(
                  "api-metadata.json has not been included in browser-polyfill",
                );
              class y extends WeakMap {
                constructor(o, g = void 0) {
                  super(g), (this.createItem = o);
                }
                get(o) {
                  return (
                    this.has(o) || this.set(o, this.createItem(o)), super.get(o)
                  );
                }
              }
              const C = (t) =>
                  t && typeof t == "object" && typeof t.then == "function",
                h =
                  (t, o) =>
                  (...g) => {
                    m.runtime.lastError
                      ? t.reject(new Error(m.runtime.lastError.message))
                      : o.singleCallbackArg ||
                          (g.length <= 1 && o.singleCallbackArg !== !1)
                        ? t.resolve(g[0])
                        : t.resolve(g);
                  },
                v = (t) => (t == 1 ? "argument" : "arguments"),
                j = (t, o) =>
                  function (l, ...A) {
                    if (A.length < o.minArgs)
                      throw new Error(
                        `Expected at least ${o.minArgs} ${v(o.minArgs)} for ${t}(), got ${A.length}`,
                      );
                    if (A.length > o.maxArgs)
                      throw new Error(
                        `Expected at most ${o.maxArgs} ${v(o.maxArgs)} for ${t}(), got ${A.length}`,
                      );
                    return new Promise((p, b) => {
                      if (o.fallbackToNoCallback)
                        try {
                          l[t](...A, h({ resolve: p, reject: b }, o));
                        } catch (i) {
                          console.warn(
                            `${t} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,
                            i,
                          ),
                            l[t](...A),
                            (o.fallbackToNoCallback = !1),
                            (o.noCallback = !0),
                            p();
                        }
                      else
                        o.noCallback
                          ? (l[t](...A), p())
                          : l[t](...A, h({ resolve: p, reject: b }, o));
                    });
                  },
                B = (t, o, g) =>
                  new Proxy(o, {
                    apply(l, A, p) {
                      return g.call(A, t, ...p);
                    },
                  });
              let F = Function.call.bind(Object.prototype.hasOwnProperty);
              const L = (t, o = {}, g = {}) => {
                  let l = Object.create(null),
                    A = {
                      has(b, i) {
                        return i in t || i in l;
                      },
                      get(b, i, w) {
                        if (i in l) return l[i];
                        if (!(i in t)) return;
                        let u = t[i];
                        if (typeof u == "function")
                          if (typeof o[i] == "function") u = B(t, t[i], o[i]);
                          else if (F(g, i)) {
                            let O = j(i, g[i]);
                            u = B(t, t[i], O);
                          } else u = u.bind(t);
                        else if (
                          typeof u == "object" &&
                          u !== null &&
                          (F(o, i) || F(g, i))
                        )
                          u = L(u, o[i], g[i]);
                        else if (F(g, "*")) u = L(u, o[i], g["*"]);
                        else
                          return (
                            Object.defineProperty(l, i, {
                              configurable: !0,
                              enumerable: !0,
                              get() {
                                return t[i];
                              },
                              set(O) {
                                t[i] = O;
                              },
                            }),
                            u
                          );
                        return (l[i] = u), u;
                      },
                      set(b, i, w, u) {
                        return i in l ? (l[i] = w) : (t[i] = w), !0;
                      },
                      defineProperty(b, i, w) {
                        return Reflect.defineProperty(l, i, w);
                      },
                      deleteProperty(b, i) {
                        return Reflect.deleteProperty(l, i);
                      },
                    },
                    p = Object.create(t);
                  return new Proxy(p, A);
                },
                q = (t) => ({
                  addListener(o, g, ...l) {
                    o.addListener(t.get(g), ...l);
                  },
                  hasListener(o, g) {
                    return o.hasListener(t.get(g));
                  },
                  removeListener(o, g) {
                    o.removeListener(t.get(g));
                  },
                }),
                xe = new y((t) =>
                  typeof t != "function"
                    ? t
                    : function (g) {
                        const l = L(
                          g,
                          {},
                          { getContent: { minArgs: 0, maxArgs: 0 } },
                        );
                        t(l);
                      },
                ),
                Z = new y((t) =>
                  typeof t != "function"
                    ? t
                    : function (g, l, A) {
                        let p = !1,
                          b,
                          i = new Promise((R) => {
                            b = function (T) {
                              (p = !0), R(T);
                            };
                          }),
                          w;
                        try {
                          w = t(g, l, b);
                        } catch (R) {
                          w = Promise.reject(R);
                        }
                        const u = w !== !0 && C(w);
                        if (w !== !0 && !u && !p) return !1;
                        const O = (R) => {
                          R.then(
                            (T) => {
                              A(T);
                            },
                            (T) => {
                              let X;
                              T &&
                              (T instanceof Error ||
                                typeof T.message == "string")
                                ? (X = T.message)
                                : (X = "An unexpected error occurred"),
                                A({
                                  __mozWebExtensionPolyfillReject__: !0,
                                  message: X,
                                });
                            },
                          ).catch((T) => {
                            console.error(
                              "Failed to send onMessage rejected reply",
                              T,
                            );
                          });
                        };
                        return O(u ? w : i), !0;
                      },
                ),
                fe = ({ reject: t, resolve: o }, g) => {
                  m.runtime.lastError
                    ? m.runtime.lastError.message === n
                      ? o()
                      : t(new Error(m.runtime.lastError.message))
                    : g && g.__mozWebExtensionPolyfillReject__
                      ? t(new Error(g.message))
                      : o(g);
                },
                Q = (t, o, g, ...l) => {
                  if (l.length < o.minArgs)
                    throw new Error(
                      `Expected at least ${o.minArgs} ${v(o.minArgs)} for ${t}(), got ${l.length}`,
                    );
                  if (l.length > o.maxArgs)
                    throw new Error(
                      `Expected at most ${o.maxArgs} ${v(o.maxArgs)} for ${t}(), got ${l.length}`,
                    );
                  return new Promise((A, p) => {
                    const b = fe.bind(null, { resolve: A, reject: p });
                    l.push(b), g.sendMessage(...l);
                  });
                },
                pe = {
                  devtools: { network: { onRequestFinished: q(xe) } },
                  runtime: {
                    onMessage: q(Z),
                    onMessageExternal: q(Z),
                    sendMessage: Q.bind(null, "sendMessage", {
                      minArgs: 1,
                      maxArgs: 3,
                    }),
                  },
                  tabs: {
                    sendMessage: Q.bind(null, "sendMessage", {
                      minArgs: 2,
                      maxArgs: 3,
                    }),
                  },
                },
                K = {
                  clear: { minArgs: 1, maxArgs: 1 },
                  get: { minArgs: 1, maxArgs: 1 },
                  set: { minArgs: 1, maxArgs: 1 },
                };
              return (
                (E.privacy = {
                  network: { "*": K },
                  services: { "*": K },
                  websites: { "*": K },
                }),
                L(m, pe, E)
              );
            };
          e.exports = a(chrome);
        }
      },
    );
  })(Y);
  var ee = Y.exports;
  const c = S(ee),
    W = { EXTENSION: "XHS_EXTENSION" },
    f = {
      GET_USER_INFO: "GET_USER_INFO",
      NAVIGATE: "NAVIGATE",
      PAGE_READY: "PAGE_READY",
      USER_ACTION: "USER_ACTION",
      DATA_SYNC: "DATA_SYNC",
      USER_INFO_SYNC: "USER_INFO_SYNC",
      COOKIE_SET: "COOKIE_SET",
      OPEN_TAB: "OPEN_TAB",
      UPDATE_CONTEXT_MENU: "UPDATE_CONTEXT_MENU",
      GID_SYNC: "GID_SYNC",
    },
    $ = "https://www.xiaohongshu.com/browser_extension",
    U = new URL($).hostname;
  function G(s) {
    const r = s.replace(/^\./, "");
    return U.endsWith(r);
  }
  const N = { FRAME_HEADER_PROD: 1, FRAME_HEADER_BETA: 2, COOKIE_INJECT: 3 },
    P = [
      "edith.xiaohongshu.com",
      "edith.beta.xiaohongshu.com",
      "so.xiaohongshu.com",
      "so.beta.xiaohongshu.com",
    ],
    x = { log(...s) {}, warn(...s) {}, error(...s) {} },
    se = "https://apm-fe.xiaohongshu.com/api/data",
    re = 10,
    te = 4e3;
  var _ = ((s) => (
    (s.BACKGROUND_EVENT = "ext_background_event"),
    (s.DNR_EVENT = "ext_dnr_event"),
    (s.COOKIE_EVENT = "ext_cookie_event"),
    (s.MESSAGE_EVENT = "ext_message_event"),
    (s.CONTENT_EVENT = "ext_content_event"),
    (s.IFRAME_EVENT = "ext_iframe_event"),
    (s.USER_ACTION_EVENT = "ext_user_action_event"),
    s
  ))(_ || {});
  class ne {
    constructor() {
      D(this, "cachedDeviceId", "");
      D(this, "cachedUserId", "");
      D(this, "queue", []);
      D(this, "timer", null);
    }
    buildContext() {
      const r = Date.now(),
        e = c.runtime.getManifest();
      return {
        clientEventTime: r,
        clientTime: r,
        context_env: "prod",
        context_nameTracker: "wapT",
        context_platform: "web",
        context_appVersion: e.version,
        context_osVersion: navigator.platform,
        context_deviceModel: "",
        context_deviceId: this.cachedDeviceId,
        context_package: "xhs_pc_extension",
        context_networkType: navigator.onLine ? "wifi" : "none",
        context_matchedPath: "",
        context_route: "",
        context_userAgent: navigator.userAgent,
        context_artifactName: "xhs-pc-web",
        context_artifactVersion: e.version,
        context_networkQuality: "unknow",
        context_userId: this.cachedUserId,
      };
    }
    async initContext() {
      var r;
      try {
        if (typeof c < "u" && c.cookies) {
          const n =
            ((r = (await c.cookies.getAll({ domain: U })).find(
              (a) => a.name === "webId",
            )) == null
              ? void 0
              : r.value) ?? "";
          n && (this.cachedDeviceId = n);
        }
        if (typeof c < "u" && c.storage) {
          const n =
            (await c.storage.local.get("cachedUserId")).cachedUserId ?? "";
          n && (this.cachedUserId = n);
        }
      } catch {}
    }
    async initContextFromDocumentCookie() {
      try {
        const r = document.cookie.match(/(?:^|;\s*)webId=([^;]*)/),
          e = r ? decodeURIComponent(r[1]) : "";
        e && (this.cachedDeviceId = e);
        const a =
          (await c.storage.local.get("cachedUserId")).cachedUserId ?? "";
        a && (this.cachedUserId = a);
      } catch {}
    }
    async initContextFromBackground(r) {
      try {
        const e = await r(),
          n = (e == null ? void 0 : e.webId) ?? "",
          a = (e == null ? void 0 : e.userId) ?? "";
        n && (this.cachedDeviceId = n), a && (this.cachedUserId = a);
      } catch {}
    }
    updateUserId(r) {
      r && (this.cachedUserId = r);
    }
    push(r, e) {
      const n = {
        ...this.buildContext(),
        measurement_name: r,
        measurement_data: {
          event: e.event,
          action: e.action,
          time: Date.now(),
          extra: JSON.stringify(e.extra ?? {}),
          ...(e.duration !== void 0 ? { duration: e.duration } : {}),
        },
      };
      if ((this.queue.push(n), this.queue.length >= re)) {
        this.flush();
        return;
      }
      this.timer || (this.timer = setTimeout(() => this.flush(), te));
    }
    flush() {
      if (
        (this.timer && (clearTimeout(this.timer), (this.timer = null)),
        this.queue.length === 0)
      )
        return;
      const r = this.queue.splice(0),
        e = this.cachedDeviceId,
        n = this.cachedUserId;
      if (e || n)
        for (const a of r)
          !a.context_deviceId && e && (a.context_deviceId = e),
            !a.context_userId && n && (a.context_userId = n);
      fetch(se, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "biz-type": "apm_fe",
          batch: "true",
        },
        body: JSON.stringify(r),
        keepalive: !0,
      }).catch(() => {});
    }
  }
  const d = new ne();
  function oe() {
    const s = new URL($).hostname;
    c.declarativeNetRequest.updateDynamicRules({
      removeRuleIds: [N.FRAME_HEADER_PROD, N.FRAME_HEADER_BETA],
      addRules: [
        {
          id: N.FRAME_HEADER_PROD,
          priority: 1,
          action: {
            type: "modifyHeaders",
            responseHeaders: [
              { header: "X-Frame-Options", operation: "remove" },
              {
                header: "Content-Security-Policy",
                operation: "set",
                value: "frame-ancestors * chrome-extension: moz-extension:",
              },
            ],
          },
          condition: { requestDomains: [s], resourceTypes: ["sub_frame"] },
        },
        {
          id: N.FRAME_HEADER_BETA,
          priority: 1,
          action: {
            type: "modifyHeaders",
            responseHeaders: [
              { header: "X-Frame-Options", operation: "remove" },
              {
                header: "Content-Security-Policy",
                operation: "set",
                value: "frame-ancestors * chrome-extension: moz-extension:",
              },
            ],
          },
          condition: { initiatorDomains: [s], resourceTypes: ["sub_frame"] },
        },
      ],
    }),
      d.push(_.DNR_EVENT, {
        event: "frame_header_removal_setup",
        action: "success",
      });
  }
  async function H() {
    try {
      const s = await c.cookies.getAll({ domain: "xiaohongshu.com" }),
        r = s.filter((m) => G(m.domain));
      if ((x.log("[Background] all cookies", r, s), r.length === 0)) {
        await c.declarativeNetRequest.updateDynamicRules({
          removeRuleIds: [N.COOKIE_INJECT],
          addRules: [],
        }),
          x.log("[Background] 无 xiaohongshu.com Cookie，已移除注入规则"),
          d.push(_.DNR_EVENT, {
            event: "cookie_injection_rule_updated",
            action: "success",
            extra: { cookieCount: 0, domains: P },
          });
        return;
      }
      const e = r.map((m) => `${m.name}=${m.value}`).join("; "),
        a = `^https://(${P.map((m) => m.replace(/\./g, "\\.")).join("|")})/`;
      await c.declarativeNetRequest.updateDynamicRules({
        removeRuleIds: [N.COOKIE_INJECT],
        addRules: [
          {
            id: N.COOKIE_INJECT,
            priority: 10,
            action: {
              type: "modifyHeaders",
              requestHeaders: [
                { header: "Cookie", operation: "append", value: e },
              ],
            },
            condition: {
              regexFilter: a,
              initiatorDomains: [U],
              resourceTypes: ["xmlhttprequest", "sub_frame"],
            },
          },
        ],
      }),
        x.log(
          `[Background] Cookie 注入规则已更新，共 ${r.length} 个 Cookie，目标域名: ${P.join(", ")}`,
        ),
        d.push(_.DNR_EVENT, {
          event: "cookie_injection_rule_updated",
          action: "success",
          extra: { cookieCount: r.length, domains: P },
        });
    } catch (s) {
      d.push(_.DNR_EVENT, {
        event: "cookie_injection_rule_updated",
        action: "failed",
        extra: { error: String(s) },
      });
    }
  }
  function z(s) {
    const r = s.split(/;\s*/);
    if (r.length === 0) return null;
    const e = r[0].indexOf("=");
    if (e === -1) return null;
    const n = r[0].slice(0, e).trim(),
      a = r[0].slice(e + 1).trim();
    if (!n) return null;
    const m = {};
    for (let h = 1; h < r.length; h++) {
      const v = r[h].indexOf("=");
      if (v === -1) m[r[h].trim().toLowerCase()] = "true";
      else {
        const j = r[h].slice(0, v).trim().toLowerCase(),
          B = r[h].slice(v + 1).trim();
        m[j] = B;
      }
    }
    const E = m.domain ?? "",
      y = m.path ?? "/";
    let C;
    if (m["max-age"]) {
      const h = parseInt(m["max-age"], 10);
      isNaN(h) || (C = Date.now() / 1e3 + h);
    } else if (m.expires) {
      const h = Date.parse(m.expires);
      isNaN(h) || (C = h / 1e3);
    }
    return { name: n, value: a, domain: E, path: y, expirationDate: C };
  }
  async function J(s) {
    const r = `https://${s.domain.replace(/^\./, "")}${s.path}`;
    try {
      return (
        await c.cookies.set({
          url: r,
          name: s.name,
          value: s.value,
          domain: s.domain,
          path: s.path,
          secure: !0,
          httpOnly: !1,
          sameSite: "no_restriction",
          expirationDate: s.expirationDate,
        }),
        x.log("[Background] Cookie 代写成功:", s.name),
        !0
      );
    } catch (e) {
      return x.warn("[Background] Cookie 代写失败:", s.name, e), !1;
    }
  }
  async function ae(s) {
    const r = s.payload;
    if (!(r != null && r.cookieString)) return;
    const e = z(r.cookieString);
    if (!e || !G(e.domain)) return;
    (await J(e)) ||
      d.push(_.COOKIE_EVENT, {
        event: "cookie_proxy_write",
        action: "failed",
        extra: { cookieName: e.name },
      });
  }
  async function ie(s) {
    const r = z(s);
    return !r || r.name !== "gid"
      ? null
      : (r.domain || (r.domain = ".xiaohongshu.com"),
        x.log("[Background] 拦截到服务端 gid Set-Cookie，开始代写:", r.value),
        (await J(r))
          ? (d.push(_.COOKIE_EVENT, {
              event: "gid_set_cookie_intercept",
              action: "success",
            }),
            r.value)
          : (d.push(_.COOKIE_EVENT, {
              event: "gid_set_cookie_intercept",
              action: "failed",
            }),
            null));
  }
  function ce(s, r) {
    var n;
    const e = (n = r.tab) == null ? void 0 : n.id;
    e && c.tabs.sendMessage(e, { ...s, source: W.EXTENSION });
  }
  function ge(s) {
    c.runtime.sendMessage(s).catch(() => {});
  }
  async function me(s) {
    if (s.payload)
      try {
        await c.storage.local.set({
          [`sync_${s.type}_${Date.now()}`]: s.payload,
        });
      } catch {}
  }
  async function le() {
    var s;
    try {
      const [r, e] = await Promise.all([
          c.cookies.getAll({ domain: U }),
          c.storage.local.get(["userInfo", "cachedUserId"]),
        ]),
        n =
          ((s = r.find((a) => a.name === "webId")) == null
            ? void 0
            : s.value) ?? "";
      return {
        success: !0,
        data: e.userInfo ?? null,
        webId: n,
        userId: e.cachedUserId ?? "",
      };
    } catch (r) {
      return { success: !1, error: String(r) };
    }
  }
  async function ue(s) {
    const r = s.payload,
      e = (r == null ? void 0 : r.userId) ?? "";
    if (e)
      try {
        await c.storage.local.set({ cachedUserId: e }),
          d.updateUserId(e),
          x.log("[Background] USER_INFO_SYNC: userId 已缓存:", e);
      } catch {}
  }
  async function Ae(s) {
    const r = s.payload,
      e = r == null ? void 0 : r.url;
    if (!e) return;
    let n;
    try {
      n = new URL(e);
    } catch {
      return;
    }
    if (n.protocol !== "https:" && n.protocol !== "http:") {
      x.warn("[Background] OPEN_TAB: 不支持的协议:", n.protocol);
      return;
    }
    if (!n.hostname.endsWith("xiaohongshu.com")) {
      x.warn("[Background] OPEN_TAB: 非小红书域名，拒绝打开:", n.hostname);
      return;
    }
    try {
      await c.tabs.create({ url: e, active: !0 }),
        x.log("[Background] 新 Tab 已打开:", e);
    } catch {}
  }
  const de = I(async () => {
    await d.initContext(),
      d.push(_.BACKGROUND_EVENT, { event: "sw_start", action: "success" }),
      oe(),
      H(),
      c.contextMenus.removeAll().then(() => {
        c.contextMenus.create({
          id: "xhs-search",
          title: '使用小红书搜索"%s"',
          contexts: ["selection"],
        });
      }),
      c.cookies.onChanged.addListener((e) => {
        G(e.cookie.domain) &&
          (x.log(
            "[Background] Cookie 变化，刷新注入规则:",
            e.cookie.name,
            e.cause,
          ),
          H(),
          e.cookie.name === "webId" && !e.removed && d.initContext());
      }),
      c.webRequest.onHeadersReceived.addListener(
        (e) => {
          const n = (e.responseHeaders ?? []).filter(
            (a) => a.name.toLowerCase() === "set-cookie",
          );
          if (n.length !== 0) {
            for (const a of n)
              if (!(!a.value || a.value.split("=")[0].trim() !== "gid")) {
                ie(a.value)
                  .then((E) => {
                    !E ||
                      e.tabId < 0 ||
                      c.tabs
                        .sendMessage(e.tabId, {
                          source: W.EXTENSION,
                          type: f.GID_SYNC,
                          payload: { gid: E },
                        })
                        .catch(() => {});
                  })
                  .catch((E) => {});
                break;
              }
          }
        },
        {
          urls: [
            "https://as.xiaohongshu.com/api/sec/v1/shield/webprofile",
            "https://as.beta.xiaohongshu.com/api/sec/v1/shield/webprofile",
            "https://as.xiaohongshu.com/api/sec/v1/shield/webprofile*",
            "https://as.beta.xiaohongshu.com/api/sec/v1/shield/webprofile*",
          ],
        },
        ["responseHeaders", "extraHeaders"],
      );
    const s = new Set([f.PAGE_READY, f.COOKIE_SET, f.OPEN_TAB]);
    c.runtime.onMessage.addListener((e, n) => {
      var m, E;
      const a = e;
      switch (
        (x.log(
          "[Background] 收到消息:",
          a.type,
          "来自:",
          ((m = n.tab) == null ? void 0 : m.url) ?? "extension",
        ),
        s.has(a.type) &&
          d.push(_.MESSAGE_EVENT, {
            event: "message_received",
            action: "success",
            extra: {
              messageType: a.type,
              fromTab: ((E = n.tab) == null ? void 0 : E.id) ?? null,
            },
          }),
        a.type)
      ) {
        case f.NAVIGATE:
          ce(a, n);
          break;
        case f.USER_ACTION:
          ge(a);
          break;
        case f.DATA_SYNC:
          me(a);
          break;
        case f.COOKIE_SET:
          ae(a);
          break;
        case f.OPEN_TAB:
          Ae(a);
          break;
        case f.PAGE_READY:
          H();
          break;
        case f.USER_INFO_SYNC:
          ue(a);
          break;
        case f.UPDATE_CONTEXT_MENU: {
          const y = a.payload,
            C = y == null ? void 0 : y.title;
          C && c.contextMenus.update("xhs-search", { title: C });
          break;
        }
        default:
          x.warn("[Background] 未知消息类型:", a.type);
      }
    }),
      c.runtime.onMessage.addListener(async (e, n) => {
        if (e.type === f.GET_USER_INFO) return le();
      }),
      c.runtime.onInstalled.addListener((e) => {
        x.log("[Background] 扩展安装/更新:", e.reason),
          d.push(_.BACKGROUND_EVENT, {
            event: "extension_installed",
            action: "success",
            extra: {
              reason: e.reason,
              previousVersion: e.previousVersion ?? null,
            },
          }),
          d.flush(),
          e.reason === "install" &&
            c.tabs.create({ url: c.runtime.getURL("/newtab.html") });
      });
    const r = new URL($).origin;
    c.contextMenus.onClicked.addListener((e) => {
      var m;
      if (e.menuItemId !== "xhs-search") return;
      const n = (m = e.selectionText) == null ? void 0 : m.trim();
      if (!n) return;
      const a = `${r}/search_result?keyword=${encodeURIComponent(n)}&source=xhs_extension_menu`;
      d.push(_.USER_ACTION_EVENT, {
        event: "context_menu_search",
        action: "success",
        extra: { keywordLength: n.length },
      }),
        d.flush(),
        c.tabs.create({ url: a, active: !0 });
    });
  });
  function Te() {}
  function M(s, ...r) {}
  const he = {
    debug: (...s) => M(console.debug, ...s),
    log: (...s) => M(console.log, ...s),
    warn: (...s) => M(console.warn, ...s),
    error: (...s) => M(console.error, ...s),
  };
  let V;
  try {
    (V = de.main()),
      V instanceof Promise &&
        console.warn(
          "The background's main() function return a promise, but it must be synchronous",
        );
  } catch (s) {
    throw (he.error("The background crashed on startup!"), s);
  }
  return V;
})();
background;
