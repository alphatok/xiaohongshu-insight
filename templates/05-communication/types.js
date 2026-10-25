/**
 * 扩展组件间通信协议 - 类型定义
 *
 * 统一的事件命名规范，避免冲突和混乱
 */

export const EventType = {
  // Background Script 事件
  BACKGROUND_EVENT: "ext_background_event",

  // DNR (Declarative Net Request) 规则事件
  DNR_EVENT: "ext_dnr_event",

  // Cookie 相关事件
  COOKIE_EVENT: "ext_cookie_event",

  // 通用消息事件
  MESSAGE_EVENT: "ext_message_event",

  // Content Script 事件
  CONTENT_EVENT: "ext_content_event",

  // iframe 加载事件
  IFRAME_EVENT: "ext_iframe_event",

  // 用户交互事件
  USER_ACTION_EVENT: "ext_user_action_event",
};

export const MessageType = {
  GET_USER_INFO: "GET_USER_INFO",
  SET_COOKIE: "SET_COOKIE",
  COOKIE_CHANGED: "COOKIE_CHANGED",
  IFRAME_LOADED: "IFRAME_LOADED",
  IFRAME_ERROR: "IFRAME_ERROR",
};

/**
 * 消息格式规范
 */
export function createMessage(type, payload = {}) {
  return {
    type,
    payload,
    timestamp: Date.now(),
    source: "chrome-extension",
  };
}
