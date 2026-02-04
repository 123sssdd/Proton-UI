import type { ReactNode } from "react";

/**
 * Callout 类型
 */
export type CalloutType = "info" | "warning" | "error" | "success" | "tip";

/**
 * Callout 组件属性接口
 */
export interface CalloutProps {
  /** 提示框类型 */
  type: CalloutType;
  /** 提示框标题 */
  title?: string;
  /** 提示框内容 */
  children: ReactNode;
}
