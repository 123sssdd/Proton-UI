import React from "react";

export type PixelBorderVariant =
  | "none"
  | "minimal"
  | "retro"
  | "tech"
  | "japanese"
  | "geometric"
  | "hybrid";

export type PixelBorderCornerVariant = "none" | "rivet" | "gem" | "glow";

export interface PixelBorderProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * 边框风格
   * @default "none"
   */
  variant?: PixelBorderVariant;
  /**
   * 角落装饰
   * @default "none"
   */
  corner?: PixelBorderCornerVariant;
  /**
   * 子元素
   */
  children?: React.ReactNode;
}
