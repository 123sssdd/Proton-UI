import * as React from "react";

import type { Variant, Size } from "../../types";

/**
 * Button 组件的 Props 接口
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * 按钮变体
   * @default "primary"
   */
  variant?: Variant;

  /**
   * 按钮尺寸
   * @default "md"
   */
  size?: Size;

  /**
   * 加载状态
   * @default false
   */
  loading?: boolean;

  /**
   * 图标元素
   */
  icon?: React.ReactNode;

  /**
   * 是否占满容器宽度
   * @default false
   */
  fullWidth?: boolean;

  /**
   * 像素风格主题
   */
  pixelTheme?:
    | "retro-futurism"
    | "neo-tokyo"
    | "cyber-shrine"
    | "dreamy-lofi"
    | "vaporwave";

  /**
   * 是否启用辉光效果 (CRT/Neon)
   * @default false
   */
  glow?: boolean;

  /**
   * 装饰效果
   */
  decoration?: "rivets" | "scanline" | "glitch" | "none";
}
