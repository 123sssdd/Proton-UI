/**
 * 主题工具函数 - 像素风UI设计系统
 * 提供主题切换和管理功能
 */

export type Theme = "light" | "dark" | "system";

const THEME_STORAGE_KEY = "aether-ui-theme";

/**
 * 获取系统主题偏好
 */
export function getSystemTheme(): "light" | "dark" {
  if (typeof window === "undefined") {
    return "light";
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

/**
 * 获取当前主题
 */
export function getCurrentTheme(): Theme {
  if (typeof window === "undefined") {
    return "light";
  }

  const stored = localStorage.getItem(THEME_STORAGE_KEY) as Theme | null;
  return stored || "system";
}

/**
 * 获取实际应用的主题（解析 system）
 */
export function getResolvedTheme(
  theme: Theme = getCurrentTheme()
): "light" | "dark" {
  if (theme === "system") {
    return getSystemTheme();
  }
  return theme;
}

/**
 * 设置主题
 */
export function setTheme(theme: Theme): void {
  if (typeof window === "undefined") {
    return;
  }

  // 保存用户偏好
  localStorage.setItem(THEME_STORAGE_KEY, theme);

  // 应用主题
  applyTheme(theme);
}

/**
 * 应用主题到 DOM
 */
export function applyTheme(theme: Theme): void {
  if (typeof window === "undefined") {
    return;
  }

  const resolved = getResolvedTheme(theme);
  const root = document.documentElement;

  // 移除旧主题
  root.removeAttribute("data-theme");

  // 应用新主题
  if (resolved === "dark") {
    root.setAttribute("data-theme", "dark");
  } else {
    root.setAttribute("data-theme", "light");
  }

  // 触发自定义事件
  window.dispatchEvent(
    new CustomEvent("theme-change", {
      detail: { theme: resolved },
    })
  );
}

/**
 * 切换主题（在 light 和 dark 之间）
 */
export function toggleTheme(): void {
  const current = getCurrentTheme();
  const resolved = getResolvedTheme(current);
  const next = resolved === "light" ? "dark" : "light";
  setTheme(next);
}

/**
 * 监听系统主题变化
 */
export function watchSystemTheme(
  callback: (theme: "light" | "dark") => void
): () => void {
  if (typeof window === "undefined") {
    return () => {};
  }

  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

  const handler = (e: MediaQueryListEvent) => {
    const theme = e.matches ? "dark" : "light";
    callback(theme);

    // 如果当前使用 system 主题，自动切换
    if (getCurrentTheme() === "system") {
      applyTheme("system");
    }
  };

  // 现代浏览器
  if (mediaQuery.addEventListener) {
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }

  // 旧版浏览器
  mediaQuery.addListener(handler);
  return () => mediaQuery.removeListener(handler);
}

/**
 * 初始化主题
 * 应该在应用启动时调用
 */
export function initTheme(): void {
  if (typeof window === "undefined") {
    return;
  }

  const theme = getCurrentTheme();
  applyTheme(theme);

  // 监听系统主题变化
  watchSystemTheme(() => {
    // 回调已在 watchSystemTheme 中处理
  });
}
