/**
 * Background Script - 消息中枢
 *
 * 核心能力：
 * 1. 接收 Content Script / Popup / iframe 发来的消息
 * 2. 协调各组件之间的数据流转
 * 3. 统一分发到对应的处理逻辑
 */

import { EventType, MessageType, createMessage } from "./types.js";

/**
 * 统一消息处理器
 */
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  const { type, payload } = message;

  switch (type) {
    case MessageType.GET_USER_INFO:
      handleGetUserInfo(sendResponse);
      return true; // 异步响应

    case EventType.COOKIE_EVENT:
      handleCookieEvent(payload);
      sendResponse({ success: true });
      break;

    case EventType.IFRAME_EVENT:
      handleIframeEvent(payload);
      sendResponse({ success: true });
      break;

    case EventType.USER_ACTION_EVENT:
      handleUserAction(payload);
      sendResponse({ success: true });
      break;

    default:
      console.log("[Background] Unknown message type:", type);
      sendResponse({ success: false, error: "Unknown type" });
  }

  return false;
});

/**
 * 获取用户信息
 */
async function handleGetUserInfo(sendResponse) {
  try {
    const cookies = await chrome.cookies.getAll({
      domain: "target-domain.com",
    });
    const webId = cookies.find((c) => c.name === "webId")?.value || "";

    sendResponse({
      success: true,
      data: { webId },
    });
  } catch (err) {
    sendResponse({ success: false, error: err.message });
  }
}

/**
 * 处理 Cookie 事件
 */
function handleCookieEvent(payload) {
  console.log("[Background] Cookie event:", payload);
  // 触发 Cookie 同步逻辑
}

/**
 * 处理 iframe 事件
 */
function handleIframeEvent(payload) {
  console.log("[Background] iframe event:", payload);
  // 上报埋点
}

/**
 * 处理用户交互事件
 */
function handleUserAction(payload) {
  console.log("[Background] User action:", payload);
  // 上报埋点
}

/**
 * 向指定标签页发送消息
 */
async function sendToTab(tabId, message) {
  try {
    await chrome.tabs.sendMessage(tabId, message);
  } catch (err) {
    console.warn("[Background] sendToTab failed:", err);
  }
}

/**
 * 向所有目标域标签页广播消息
 */
async function broadcastToTargetDomains(message) {
  const tabs = await chrome.tabs.query({
    url: "https://*.target-domain.com/*",
  });
  for (const tab of tabs) {
    if (tab.id) {
      sendToTab(tab.id, message);
    }
  }
}

export { sendToTab, broadcastToTargetDomains };
