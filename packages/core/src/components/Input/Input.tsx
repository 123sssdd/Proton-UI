import * as React from "react";

import { cn } from "../../utils/cn";

import type { InputProps } from "./types";

/**
 * Input 组件 - 支持受控和非受控模式的输入框组件
 */
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      helperText,
      leftIcon,
      rightIcon,
      fullWidth = false,
      className,
      id,
      disabled,
      ...props
    },
    ref
  ) => {
    // 生成唯一 ID（必须在条件之前调用）
    const generatedId = React.useId();
    const inputId = id || generatedId;
    const errorId = `${inputId}-error`;
    const helperTextId = `${inputId}-helper`;

    // 基础容器样式
    const containerStyles = fullWidth ? "w-full" : "";

    // 输入框基础样式
    const baseInputStyles =
      "flex h-10 w-full rounded-md border bg-white px-3 py-2 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";

    // 错误状态样式
    const errorStyles = error
      ? "border-red-500 focus-visible:ring-red-500"
      : "border-gray-300 focus-visible:ring-blue-600";

    // 图标容器样式
    const iconContainerStyles = leftIcon || rightIcon ? "relative" : "";

    // 输入框内边距（考虑图标）
    const paddingStyles = cn(leftIcon && "pl-10", rightIcon && "pr-10");

    return (
      <div className={cn(containerStyles, "space-y-2")}>
        {/* 标签 */}
        {label && (
          <label
            htmlFor={inputId}
            className="block text-sm font-medium text-gray-700"
          >
            {label}
          </label>
        )}

        {/* 输入框容器 */}
        <div className={iconContainerStyles}>
          {/* 左侧图标 */}
          {leftIcon && (
            <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              {leftIcon}
            </div>
          )}

          {/* 输入框 */}
          <input
            ref={ref}
            id={inputId}
            disabled={disabled}
            className={cn(
              baseInputStyles,
              errorStyles,
              paddingStyles,
              className
            )}
            aria-invalid={!!error}
            aria-describedby={
              error ? errorId : helperText ? helperTextId : undefined
            }
            {...props}
          />

          {/* 右侧图标 */}
          {rightIcon && (
            <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
              {rightIcon}
            </div>
          )}
        </div>

        {/* 错误信息 */}
        {error && (
          <p
            id={errorId}
            className="text-sm text-red-600"
            role="alert"
            aria-live="polite"
          >
            {error}
          </p>
        )}

        {/* 辅助文本 */}
        {!error && helperText && (
          <p id={helperTextId} className="text-sm text-gray-500">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
