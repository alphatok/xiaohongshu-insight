/**
 * 前端监控埋点体系
 *
 * 核心能力：
 * 1. 事件批量收集与上报
 * 2. 自动采集设备上下文
 * 3. 支持 keepalive 确保页面关闭也能上报
 * 4. 本地缓存 + 失败重试
 */

const REPORT_URL = "https://apm-fe.your-domain.com/api/data";
const BATCH_SIZE = 10;
const FLUSH_INTERVAL = 4000; // ms
const STORAGE_KEY = "ext_monitor_queue";

class Monitor {
  constructor(options = {}) {
    this.reportUrl = options.reportUrl || REPORT_URL;
    this.appId = options.appId || "pc_extension";
    this.packageName = options.packageName || "pc_extension";
    this.artifactName = options.artifactName || "pc-web";
    this.version = options.version || "1.0.0";

    this.queue = [];
    this.cachedDeviceId = "";
    this.cachedUserId = "";

    // 初始化设备 ID
    this.initDeviceId();

    // 定时刷新
    setInterval(() => this.flush(), FLUSH_INTERVAL);

    // 页面关闭前强制上报
    window.addEventListener("beforeunload", () => this.flush(true));
  }

  /**
   * 初始化或恢复 deviceId
   */
  async initDeviceId() {
    const result = await chrome.storage.local.get("deviceId");
    this.cachedDeviceId = result.deviceId || this.generateDeviceId();
    if (!result.deviceId) {
      await chrome.storage.local.set({ deviceId: this.cachedDeviceId });
    }
  }

  /**
   * 生成简易 deviceId
   */
  generateDeviceId() {
    return "d_" + Math.random().toString(36).slice(2) + Date.now().toString(36);
  }

  /**
   * 构建设备上下文
   */
  buildContext() {
    return {
      context_userAgent: navigator.userAgent,
      context_platform: navigator.platform,
      context_deviceModel: "",
      context_deviceId: this.cachedDeviceId,
      context_package: this.packageName,
      context_networkType: navigator.onLine ? "wifi" : "none",
      context_matchedPath: "",
      context_route: "",
      context_artifactName: this.artifactName,
      context_artifactVersion: this.version,
      context_networkQuality: "unknown",
      context_userId: this.cachedUserId,
    };
  }

  /**
   * 上报单个事件
   */
  push(eventType, data = {}) {
    const event = {
      type: eventType,
      timestamp: Date.now(),
      ...this.buildContext(),
      ...data,
    };

    this.queue.push(event);

    if (this.queue.length >= BATCH_SIZE) {
      this.flush();
    }
  }

  /**
   * 批量上报
   */
  async flush(force = false) {
    if (this.queue.length === 0) return;

    const batch = this.queue.splice(0, BATCH_SIZE);

    try {
      await fetch(this.reportUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          appId: this.appId,
          batch: "true",
          events: batch,
        }),
        keepalive: force, // 页面关闭时使用 keepalive
      });
    } catch (err) {
      // 上报失败，将事件存回队列
      this.queue.unshift(...batch);
      console.warn("[Monitor] Report failed:", err);
    }
  }

  /**
   * 更新用户 ID
   */
  setUserId(userId) {
    this.cachedUserId = userId;
  }

  /**
   * 便捷方法：上报 iframe 加载事件
   */
  reportIframeLoad(data) {
    this.push("iframe_load", data);
  }

  /**
   * 便捷方法：上报 Cookie 注入事件
   */
  reportCookieInjection(data) {
    this.push("cookie_injection_rule_updated", data);
  }

  /**
   * 便捷方法：上报用户行为
   */
  reportUserAction(action, extra = {}) {
    this.push("user_action", { action, ...extra });
  }
}

// 单例导出
let monitorInstance = null;

export function getMonitor(options) {
  if (!monitorInstance) {
    monitorInstance = new Monitor(options);
  }
  return monitorInstance;
}

export { Monitor };
