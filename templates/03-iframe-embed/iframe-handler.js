/**
 * iframe 嵌入第三方站点 - 最佳实践
 *
 * 核心能力：
 * 1. 预加载 iframe（HTML 中直接声明，非 JS 动态创建）
 * 2. 渐进显示（加载完成后 opacity 过渡）
 * 3. 错误兜底（加载失败显示重试按钮）
 * 4. 与扩展组件安全通信
 */

const IFRAME_ID = "newtab-frame";
const BANNER_DISMISSED_KEY = "ext_banner_dismissed";

class IframeEmbedder {
  constructor(targetUrl) {
    this.targetUrl = targetUrl;
    this.iframe = null;
    this.onLoad = null;
    this.onError = null;
  }

  /**
   * 初始化 iframe 事件监听
   */
  init() {
    this.iframe = document.getElementById(IFRAME_ID);
    if (!this.iframe) {
      console.error("[IframeEmbedder] iframe 元素未找到");
      return;
    }

    // 监听加载成功
    this.iframe.addEventListener("load", () => {
      this.handleLoad();
    }, { once: true });

    // 监听加载失败
    this.iframe.addEventListener("error", () => {
      this.handleError();
    }, { once: true });

    // 兜底：如果 iframe 已缓存，检查 readyState
    setTimeout(() => {
      try {
        const doc = this.iframe.contentDocument;
        if (doc && doc.readyState === "complete") {
          this.handleLoad();
        }
      } catch (e) {
        // 跨域安全策略，忽略
      }
    }, 50);
  }

  /**
   * iframe 加载成功处理
   */
  handleLoad() {
    if (this.iframe) {
      this.iframe.style.opacity = "1";
      this.iframe.style.pointerEvents = "auto";
    }

    const duration = Date.now() - performance.timeOrigin;
    console.log("[IframeEmbedder] iframe 加载成功，耗时:", duration, "ms");

    if (this.onLoad) {
      this.onLoad({ duration, src: this.targetUrl });
    }
  }

  /**
   * iframe 加载失败处理
   */
  handleError() {
    console.error("[IframeEmbedder] iframe 加载失败:", this.targetUrl);

    if (this.onError) {
      this.onError({ src: this.targetUrl });
    }
  }

  /**
   * 重新加载 iframe
   */
  reload() {
    if (!this.iframe) return;
    this.iframe.style.opacity = "0";
    this.iframe.style.pointerEvents = "none";
    this.iframe.src = this.targetUrl;
    this.init();
  }

  /**
   * 调整 iframe 位置（配合顶部横幅）
   */
  adjustPosition(bannerHeight) {
    if (!this.iframe) return;
    if (bannerHeight > 0) {
      this.iframe.style.top = `${bannerHeight}px`;
      this.iframe.style.height = `calc(100% - ${bannerHeight}px)`;
    } else {
      this.iframe.style.top = "0";
      this.iframe.style.height = "100%";
    }
  }
}

/**
 * 检查用户是否已关闭横幅提示
 */
function isBannerDismissed() {
  return localStorage.getItem(BANNER_DISMISSED_KEY) === "1";
}

/**
 * 标记横幅已关闭
 */
function dismissBanner() {
  localStorage.setItem(BANNER_DISMISSED_KEY, "1");
}

// 使用示例
// const embedder = new IframeEmbedder("https://www.target-domain.com/browser_extension");
// embedder.onLoad = (data) => reportEvent("iframe_load", { action: "success", ...data });
// embedder.onError = (data) => reportEvent("iframe_load", { action: "failed", ...data });
// embedder.init();

export { IframeEmbedder, isBannerDismissed, dismissBanner };
