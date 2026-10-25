/**
 * 设备指纹采集
 *
 * 核心能力：
 * 1. 采集浏览器环境信息
 * 2. 保持 deviceId 的一致性（localStorage + chrome.storage 双备份）
 * 3. 与服务端风控接口对接
 */

const DEVICE_ID_KEY = "ext_device_id";
const WEBID_COOKIE_NAME = "webId";

class DeviceFingerprint {
  constructor() {
    this.deviceId = "";
    this.webId = "";
  }

  /**
   * 初始化设备指纹
   */
  async init() {
    // 1. 尝试从 chrome.storage 恢复 deviceId
    const stored = await chrome.storage.local.get(DEVICE_ID_KEY);
    this.deviceId = stored[DEVICE_ID_KEY] || this.generateDeviceId();

    // 2. 持久化到 chrome.storage
    await chrome.storage.local.set({ [DEVICE_ID_KEY]: this.deviceId });

    // 3. 提取 webId（从 Cookie）
    this.webId = await this.extractWebId();

    return this.getFingerprint();
  }

  /**
   * 生成设备唯一标识
   */
  generateDeviceId() {
    const segments = [];
    for (let i = 0; i < 4; i++) {
      segments.push(
        Math.floor(Math.random() * 0x10000)
          .toString(16)
          .padStart(4, "0")
      );
    }
    return segments.join("-");
  }

  /**
   * 从 Cookie 提取 webId
   */
  async extractWebId() {
    try {
      const cookies = await chrome.cookies.getAll({
        domain: "target-domain.com",
      });
      const webIdCookie = cookies.find((c) => c.name === WEBID_COOKIE_NAME);
      return webIdCookie?.value || "";
    } catch (e) {
      return "";
    }
  }

  /**
   * 从 document.cookie 提取（Content Script 环境）
   */
  static extractFromDocument() {
    const match = document.cookie.match(
      new RegExp(`(?:^|;\\s*)${WEBID_COOKIE_NAME}=([^;]*)`)
    );
    return match?.[1] || "";
  }

  /**
   * 获取完整指纹信息
   */
  getFingerprint() {
    return {
      deviceId: this.deviceId,
      webId: this.webId,
      userAgent: navigator.userAgent,
      platform: navigator.platform,
      language: navigator.language,
      screenWidth: screen.width,
      screenHeight: screen.height,
      colorDepth: screen.colorDepth,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      online: navigator.onLine,
      // 可扩展：Canvas 指纹、WebGL 指纹等
    };
  }

  /**
   * 更新 webId（Cookie 变更时调用）
   */
  async updateWebId() {
    this.webId = await this.extractWebId();
    return this.webId;
  }
}

/**
 * 风控接口对接 - 透传 shield/webprofile 请求
 *
 * 扩展不直接处理风控逻辑，而是确保 iframe 中的请求
 * 携带正确的设备指纹，让服务端正常验证
 */
async function ensureShieldHeaders() {
  const fp = new DeviceFingerprint();
  await fp.init();

  // 通过 DNR 规则或 Cookie 注入，确保 shield 请求携带 deviceId
  // 具体实现参见 02-cookie-proxy/background.js
  return fp.getFingerprint();
}

export { DeviceFingerprint, ensureShieldHeaders };
