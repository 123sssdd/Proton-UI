import React from "react";

export type GlassVariant =
  | "base"
  | "subtle"
  | "strong"
  | "cyan"
  | "pink"
  | "purple";

export type GlassBlur = "sm" | "md" | "lg" | "xl";

export type GlassHighlight = "none" | "top" | "45";

export interface GlassProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * 玻璃拟态变体
   * @default "base"
   */
  variant?: GlassVariant;
  /**
   * 模糊强度
   * @default "md"
   */
  blur?: GlassBlur;
  /**
   * 边缘高光
   * @default "none"
   */
  highlight?: GlassHighlight;
  /**
   * 模糊与透明度强度
   * @default "medium"
   */
  intensity?: "low" | "medium" | "high";
  /**
   * 子元素
   */
  children?: React.ReactNode;
}
