import * as React from "react";

/**
 * Card 主组件的 Props 接口
 */
export interface CardProps {
  /**
   * 子元素
   */
  children: React.ReactNode;

  /**
   * 自定义类名
   */
  className?: string;

  /**
   * 内边距大小
   */
  padding?: "none" | "sm" | "md" | "lg";

  /**
   * 阴影大
   */
  shadow?: "none" | "sm" | "md" | "lg";

  /**
   * 像素艺术主题
   */
  pixelTheme?:
    | "retro-futurism"
    | "neo-tokyo"
    | "cyber-shrine"
    | "dreamy-lofi"
    | "vaporwave";

  /**
   * 装饰效果
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
