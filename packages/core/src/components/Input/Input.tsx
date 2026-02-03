import * as React from "react";

import { cn } from "../../utils/cn";

import type { InputProps } from "./types";

/**
 * Input 组件 - 像素风格输入框组件
 *
 * 特性：
 * - 像素完美的边框和圆角
 * - 多种状态（默认、聚焦、错误、禁用）
 * - 支持前缀/后缀图标
 * - 完整的可访问性支持
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
      required,
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

    // 输入框基础样式 - 像素风格
    const baseInputStyles = cn(
      "flex h-10 w-full",
      "px-3 py-2",
      "font-pixel no-font-smooth text-sm",
      "bg-[var(--color-bg-primary)]",
      "border-base rounded-md",
      "transition-all duration-200",
      "placeholder:text-[var(--color-text-secondary)] placeholder:opacity-60",
      "focus-visible:outline-none",
      "disabled:cursor-not-allowed disabled:opacity-60 disabled:bg-[var(--color-bg-secondary)]",
      // 文件输入样式
      "file:border-0 file:bg-transparent file:text-sm file:font-pixel"
    );

    // 状态样式
    const stateStyles = error
      ? cn(
          // 错误状态
          "border-[var(--color-error)]",
          "focus-visible:ring-2 focus-visible:ring-[var(--color-error)] focus-visible:ring-offset-2"
        )
      : cn(
          // 默认状态
          "border-[var(--color-text-secondary)] border-opacity-40",
          // 聚焦状态
          "focus-visible:border-[var(--color-accent)]",
          "focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-opacity-40 focus-visible:ring-offset-2"
        );

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
            className="block text-sm font-pixel text-[var(--color-text-primary)]"
          >
            {label}
            {required && (
              <span
                className="ml-1 text-[var(--color-error)]"
                aria-label="必填"
              >
                *
              </span>
            )}
          </label>
        )}

        {/* 输入框容器 */}
        <div className={iconContainerStyles}>
          {/* 左侧图标 */}
          {leftIcon && (
            <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-text-secondary)]">
              {leftIcon}
            </div>
          )}

          {/* 输入框 */}
          <input
            ref={ref}
            id={inputId}
            disabled={disabled}
            required={required}
            className={cn(
              baseInputStyles,
              stateStyles,
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
            <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-text-secondary)]">
              {rightIcon}
            </div>
          )}
        </div>

        {/* 错误信息 */}
        {error && (
          <div className="flex items-start gap-1">
            <svg
              className="w-3 h-3 mt-0.5 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clipRule="evenodd"
              />
            </svg>
            <p
              id={errorId}
              className="text-xs text-[var(--color-error)]"
              role="alert"
              aria-live="polite"
            >
              {error}
            </p>
          </div>
        )}

        {/* 辅助文本 */}
        {!error && helperText && (
          <p
            id={helperTextId}
            className="text-xs text-[var(--color-text-secondary)]"
          >
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
