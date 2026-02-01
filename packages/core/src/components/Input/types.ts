import * as React from "react";

/**
 * Input 组件的 Props 接口
 */
export interface InputProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "size"
> {
  /**
   * 输入框标签
   */
  label?: string;

  /**
   * 错误信息
   */
  error?: string;

  /**
   * 辅助文本
   */
  helperText?: string;

  /**
   * 左侧图标
   */
  leftIcon?: React.ReactNode;

  /**
   * 右侧图标
   */
  rightIcon?: React.ReactNode;

  /**
   * 是否全宽
   */
  fullWidth?: boolean;
}
