/**
 * 像素风主题提供者 - 像素风UI设计系统
 * 提供主题初始化和管理
 */

import { useEffect, type ReactNode } from "react";

import { initTheme } from "../utils/theme";

export interface PixelThemeProviderProps {
  children: ReactNode;
}

/**
 * 像素风主题提供者组件
 * 负责初始化主题系统
 *
 * @example
 * ```tsx
 * import { PixelThemeProvider } from '@Proton-ui/core';
 *
 * function App() {
 *   return (
 *     <PixelThemeProvider>
 *       <YourApp />
 *     </PixelThemeProvider>
 *   );
 * }
 * ```
 */
export function PixelThemeProvider({ children }: PixelThemeProviderProps) {
  useEffect(() => {
    // 初始化主题系统
    initTheme();
  }, []);

  return <>{children}</>;
}
