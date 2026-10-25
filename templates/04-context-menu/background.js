/**
 * 右键菜单搜索功能
 *
 * 核心能力：
 * 1. 注册右键上下文菜单
 * 2. 获取用户选中的文本
 * 3. 跳转到目标站点的搜索结果页
 * 4. 附加 Source 追踪参数
 */

const MENU_ID = "ext-search";
const TARGET_BASE_URL = "https://www.target-domain.com";
const SOURCE_PARAM = "ext_context_menu";

/**
 * 初始化右键菜单
 */
function initContextMenu() {
  chrome.contextMenus.removeAll().then(() => {
    chrome.contextMenus.create({
      id: MENU_ID,
      title: "在目标站点中搜索 '%s'",
      contexts: ["selection"],
    });
  });
}

/**
 * 更新菜单标题（可选，用于显示当前选中内容预览）
 */
function updateMenuTitle(title) {
  if (!title) return;
  // Chrome 限制菜单标题长度，截断处理
  const maxLen = 30;
  const displayTitle =
    title.length > maxLen ? title.slice(0, maxLen) + "..." : title;

  chrome.contextMenus.update(MENU_ID, {
    title: `在目标站点中搜索 '${displayTitle}'`,
  });
}

/**
 * 处理菜单点击事件
 */
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId !== MENU_ID) return;

  const keyword = info.selectionText?.trim();
  if (!keyword) return;

  const searchUrl = `${TARGET_BASE_URL}/search_result?keyword=${encodeURIComponent(
    keyword
  )}&source=${SOURCE_PARAM}`;

  chrome.tabs.create({ url: searchUrl });

  // 上报埋点
  reportEvent("context_menu_search", {
    keyword: keyword.slice(0, 50), // 脱敏
    source: SOURCE_PARAM,
  });
});

/**
 * 简化的埋点上报（实际使用时替换为完整实现）
 */
function reportEvent(event, extra = {}) {
  console.log("[ContextMenu] Event:", event, extra);
  // 实际实现：调用 monitor.report() 或 fetch 上报
}

// 初始化
chrome.runtime.onInstalled.addListener(initContextMenu);
chrome.runtime.onStartup.addListener(initContextMenu);
