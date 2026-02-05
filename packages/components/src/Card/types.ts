import * as React from "react";

/**
 * Card 主组件的 Props 接口
 */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * 子元素
   */
  children: React.ReactNode;

  /**
   * Internal padding
   * @default 'md'
   */
  padding?: "none" | "sm" | "md" | "lg";

  /**
   * Shadow depth
   * @default 'md'
   */
  shadow?: "none" | "sm" | "md" | "lg";

  /**
   * Pixel art theme
   */
  pixelTheme?:
    | "retro-futurism"
    | "neo-tokyo"
    | "cyber-shrine"
    | "dreamy-lofi"
    | "vaporwave";

  /**
   * Additional decorations
   */
  decoration?: "scanline" | "rivets" | "none";
}

/**
 * Card.Header 组件的 Props 接口
 */
export interface CardHeaderProps {
  /**
   * 标题
   */
  title: string;

  /**
   * 副标题
   */
  subtitle?: string;

  /**
   * 操作按钮区域
   */
  action?: React.ReactNode;

  /**
   * 自定义类名
   */
  className?: string;
}

/**
 * Card.Body 组件的 Props 接口
 */
export interface CardBodyProps {
  /**
   * 子元素
   */
  children: React.ReactNode;

  /**
   * 自定义类名
   */
  className?: string;
}

/**
 * Card.Footer 组件的 Props 接口
 */
export interface CardFooterProps {
  /**
   * 子元素
   */
  children: React.ReactNode;

  /**
   * 自定义类名
   */
  className?: string;
}
