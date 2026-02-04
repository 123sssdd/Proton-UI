import type { ReactNode } from "react";

/**
 * 属性配置类型
 */
export type PropControlType =
  | "boolean"
  | "string"
  | "number"
  | "select"
  | "color";

/**
 * 属性配置接口
 */
export interface PropConfig {
  /** 属性名称 */
  name: string;
  /** 控制器类型 */
  type: PropControlType;
  /** 默认值 */
  defaultValue: unknown;
  /** select 类型的选项列表 */
  options?: unknown[];
  /** number 类型的最小值 */
  min?: number;
  /** number 类型的最大值 */
  max?: number;
  /** number 类型的步进值 */
  step?: number;
  /** 显示标签 */
  label?: string;
  /** 属性描述 */
  description?: string;
}

/**
 * DemoBox 组件属性接口
 */
export interface DemoBoxProps {
  /** 演示标题 */
  title?: string;
  /** 演示描述 */
  description?: string;
  /** 子组件（实际演示内容） */
  children: ReactNode;
  /** 是否显示代码 */
  showCode?: boolean;
  /** 代码内容 */
  code?: string;
  /** 代码语言 */
  language?: "tsx" | "jsx" | "typescript" | "javascript";
  /** 是否显示属性面板 */
  showProps?: boolean;
  /** 属性配置 */
  propsConfig?: PropConfig[];
  /** 背景样式 */
  background?: "default" | "dark" | "light" | "transparent";
  /** 是否全宽显示 */
  fullWidth?: boolean;
}
