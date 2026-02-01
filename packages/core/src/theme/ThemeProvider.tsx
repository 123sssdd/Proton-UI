import * as React from "react";

import type { ThemeConfig } from "../types/theme";

import { defaultTheme } from "./defaultTheme";

/**
 * 主题上下文
 */
const ThemeContext = React.createContext<ThemeConfig>(defaultTheme);

/**
 * ThemeProvider Props
 */
export interface ThemeProviderProps {
  /**
   * 子元素
   */
  children: React.ReactNode;

  /**
   * 主题配置（可选，默认使用 defaultTheme）
   */
  theme?: Partial<ThemeConfig>;
}

/**
 * ThemeProvider 组件 - 提供主题配置
 */
export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  theme: customTheme,
}) => {
  // 合并自定义主题和默认主题
  const theme = React.useMemo(() => {
    if (!customTheme) {
      return defaultTheme;
    }

    return {
      colors: { ...defaultTheme.colors, ...customTheme.colors },
      spacing: { ...defaultTheme.spacing, ...customTheme.spacing },
      borderRadius: {
        ...defaultTheme.borderRadius,
        ...customTheme.borderRadius,
      },
      shadow: { ...defaultTheme.shadow, ...customTheme.shadow },
      typography: {
        ...defaultTheme.typography,
        ...customTheme.typography,
        fontSize: {
          ...defaultTheme.typography.fontSize,
          ...customTheme.typography?.fontSize,
        },
        fontWeight: {
          ...defaultTheme.typography.fontWeight,
          ...customTheme.typography?.fontWeight,
        },
        lineHeight: {
          ...defaultTheme.typography.lineHeight,
          ...customTheme.typography?.lineHeight,
        },
      },
    };
  }, [customTheme]);

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

/**
 * useTheme Hook - 获取当前主题配置
 */
export const useTheme = (): ThemeConfig => {
  const theme = React.useContext(ThemeContext);

  if (!theme) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return theme;
};
