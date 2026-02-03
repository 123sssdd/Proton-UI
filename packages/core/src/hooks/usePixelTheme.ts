/**
 * usePixelTheme Hook - 像素风UI设计系统
 * 在 React 组件中使用主题
 */

import { useState, useEffect } from "react";

import {
  type Theme,
  getCurrentTheme,
  getResolvedTheme,
  setTheme as setThemeUtil,
  toggleTheme as toggleThemeUtil,
  watchSystemTheme,
} from "../utils/theme";

export interface UsePixelThemeReturn {
  /** 当前主题设置（可能是 'system'） */
  theme: Theme;
  /** 实际应用的主题（解析后的 'light' 或 'dark'） */
  resolvedTheme: "light" | "dark";
  /** 设置主题 */
  setTheme: (theme: Theme) => void;
  /** 切换主题（在 light 和 dark 之间） */
  toggleTheme: () => void;
}

/**
 * 使用像素风主题的 Hook
 *
 * @example
 * ```tsx
 * function ThemeToggle() {
 *   const { theme, resolvedTheme, toggleTheme } = usePixelTheme();
 *
 *   return (
 *     <button onClick={toggleTheme}>
 *       Current: {resolvedTheme}
 *     </button>
 *   );
 * }
 * ```
 */
export function usePixelTheme(): UsePixelThemeReturn {
  const [theme, setThemeState] = useState<Theme>(() => getCurrentTheme());
  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">(() =>
    getResolvedTheme()
  );

  useEffect(() => {
    // 监听主题变化事件
    const handleThemeChange = (e: Event) => {
      const customEvent = e as CustomEvent<{ theme: "light" | "dark" }>;
      setResolvedTheme(customEvent.detail.theme);
    };

    window.addEventListener("theme-change", handleThemeChange);

    // 监听系统主题变化
    const unwatch = watchSystemTheme((systemTheme) => {
      if (getCurrentTheme() === "system") {
        setResolvedTheme(systemTheme);
      }
    });

    return () => {
      window.removeEventListener("theme-change", handleThemeChange);
      unwatch();
    };
  }, []);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    setThemeUtil(newTheme);
    setResolvedTheme(getResolvedTheme(newTheme));
  };

  const toggleTheme = () => {
    toggleThemeUtil();
    const newTheme = getCurrentTheme();
    setThemeState(newTheme);
    setResolvedTheme(getResolvedTheme(newTheme));
  };

  return {
    theme,
    resolvedTheme,
    setTheme,
    toggleTheme,
  };
}
