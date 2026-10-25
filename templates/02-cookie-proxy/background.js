/**
 * Cookie 代理注入方案
 *
 * 核心能力：
 * 1. 读取目标域的所有 Cookie
 * 2. 提取关键身份标识（如 webId）
 * 3. 通过 DNR 动态规则将 Cookie 注入到请求头
 * 4. 监听 Cookie 变更并自动同步
 */

const TARGET_DOMAIN = "target-domain.com";
const RULE_ID_COOKIE_INJECT = 3;

/**
 * 初始化：读取目标域 Cookie 并创建注入规则
 */
async function initCookieProxy() {
  const cookies = await chrome.cookies.getAll({ domain: TARGET_DOMAIN });

  if (cookies.length === 0) {
    console.log("[CookieProxy] 无目标域 Cookie，已移除注入规则");
    await removeCookieRule();
    return;
  }

  const cookieString = cookies
    .map((c) => `${c.name}=${c.value}`)
    .join("; ");

  await updateCookieRule(cookieString, cookies.length);
}

/**
 * 更新 DNR 动态规则，将 Cookie 注入请求头
 */
async function updateCookieRule(cookieString, cookieCount) {
  await chrome.declarativeNetRequest.updateDynamicRules({
    removeRuleIds: [RULE_ID_COOKIE_INJECT],
    addRules: [
      {
        id: RULE_ID_COOKIE_INJECT,
        priority: 1,
        action: {
          type: "modifyHeaders",
          requestHeaders: [
            {
              header: "Cookie",
              operation: "append",
              value: cookieString,
            },
          ],
        },
        condition: {
          urlFilter: `|https://*.${TARGET_DOMAIN}/*`,
          resourceTypes: ["main_frame", "sub_frame", "xmlhttprequest"],
        },
      },
    ],
  });

  console.log(
    `[CookieProxy] Cookie 注入规则已更新，共 ${cookieCount} 个 Cookie`
  );
}

/**
 * 移除 Cookie 注入规则
 */
async function removeCookieRule() {
  await chrome.declarativeNetRequest.updateDynamicRules({
    removeRuleIds: [RULE_ID_COOKIE_INJECT],
  });
}

/**
 * 提取特定 Cookie 值（如 webId）
 */
function extractCookieValue(cookies, name) {
  const cookie = cookies.find((c) => c.name === name);
  return cookie?.value ?? "";
}

/**
 * 代写 Cookie 到目标域
 */
async function writeCookieToDomain(name, value, domain = `.${TARGET_DOMAIN}`) {
  try {
    await chrome.cookies.set({
      url: `https://${domain}`,
      name,
      value,
      domain,
      path: "/",
    });
    console.log("[CookieProxy] Cookie 代写成功:", name);
    return true;
  } catch (err) {
    console.warn("[CookieProxy] Cookie 代写失败:", name, err);
    return false;
  }
}

// 监听 Cookie 变更，实时同步
chrome.cookies.onChanged.addListener((changeInfo) => {
  const cookie = changeInfo.cookie;
  if (!cookie.domain.includes(TARGET_DOMAIN)) return;

  // webId 变更时重新初始化上下文
  if (cookie.name === "webId" && !changeInfo.removed) {
    initCookieProxy();
  }
});

// Service Worker 启动时初始化
chrome.runtime.onStartup.addListener(initCookieProxy);
chrome.runtime.onInstalled.addListener(initCookieProxy);
