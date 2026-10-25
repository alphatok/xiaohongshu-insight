/**
 * Content Script - 页面与扩展的安全通信桥梁
 *
 * 核心能力：
 * 1. 监听页面 window.postMessage，转发到扩展 Background Script
 * 2. 接收扩展消息，转发到页面
 * 3. 确保 targetOrigin 安全校验
 */

import { EventType, MessageType } from "./types.js";

const TARGET_ORIGIN = window.location.origin;

/**
 * 向页面发送消息（通过 postMessage）
 */
function sendToPage(data) {
  window.postMessage(data, TARGET_ORIGIN);
}

/**
 * 向 Background Script 发送消息
 */
function sendToBackground(data) {
  chrome.runtime.sendMessage(data).catch((err) => {
    // 如果 Background 未响应，静默忽略
    if (err.message.includes("receiving end does not exist")) return;
    console.warn("[ContentScript] sendMessage failed:", err);
  });
}

/**
 * 监听页面发来的消息
 */
window.addEventListener("message", (event) => {
  // 安全校验：只接受同源消息
  if (event.origin !== TARGET_ORIGIN) return;

  const data = event.data;
  if (!data || typeof data !== "object") return;

  // 转发到 Background Script
  sendToBackground({
    type: EventType.CONTENT_EVENT,
    payload: data,
  });
});

/**
 * 监听扩展发来的消息
 */
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === MessageType.GET_USER_INFO) {
    // 获取页面用户信息并返回
    const userInfo = getPageUserInfo();
    sendResponse({ success: true, data: userInfo });
    return true; // 保持通道开放以支持异步响应
  }

  // 其他消息转发到页面
  sendToPage(message);
  sendResponse({ success: true });
  return true;
});

/**
 * 从页面 DOM 或全局变量中提取用户信息
 * （需根据目标站点实际情况调整）
 */
function getPageUserInfo() {
  // 示例：从 window.__INITIAL_STATE__ 或 localStorage 读取
  try {
    const userId = localStorage.getItem("userId") || "";
    const webId = document.cookie.match(/(?:^|;\s*)webId=([^;]*)/)?.[1] || "";
    return { userId, webId };
  } catch (e) {
    return {};
  }
}
