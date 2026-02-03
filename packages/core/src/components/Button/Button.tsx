import * as React from "react";

import { cn } from "../../utils/cn";

import type { ButtonProps } from "./types";

/**
 * Button 组件 - 像素风格按钮组件
 *
 * 特性：
 * - 像素完美的边框和阴影
 * - 多种变体（primary、secondary、danger、ghost）
 * - 三种尺寸（small、medium、large）
 * - 像素风格的悬停和按下动效
 * - 完整的可访问性支持
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      loading = false,
      icon,
      fullWidth = false,
      children,
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading;

    // 基础样式 - 像素风格
    const baseStyles = cn(
      "inline-flex items-center justify-center gap-2",
      "font-pixel no-font-smooth",
      "border-base",
      "transition-all duration-100",
      "focus-visible:outline-none",
      "disabled:pointer-events-none disabled:opacity-60",
      "relative",
      // 像素阴影
      "shadow-pixel-md",
      // 按下效果：向下位移 2px，阴影减小
      "active:translate-y-[2px] active:shadow-pixel-sm"
    );

    // 变体样式 - 使用 CSS 变量
    const variantStyles = {
      primary: cn(
        "bg-[var(--color-accent)] text-[var(--color-bg-primary)]",
        "border-[var(--color-accent)]",
        // 悬停：背景加深 10%，添加像素闪烁效果
        "hover:brightness-90",
        // 聚焦：显示焦点环
        "focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2"
      ),
      secondary: cn(
        "bg-transparent text-[var(--color-accent)]",
        "border-[var(--color-accent)]",
        // 悬停：背景 accent + 10% opacity
        "hover:bg-[var(--color-accent)] hover:bg-opacity-10",
        // 聚焦
        "focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2"
      ),
      danger: cn(
        "bg-[var(--color-error)] text-[var(--color-bg-primary)]",
        "border-[var(--color-error)]",
        // 悬停：背景加深
        "hover:brightness-90",
        // 聚焦
        "focus-visible:ring-2 focus-visible:ring-[var(--color-error)] focus-visible:ring-offset-2"
      ),
      ghost: cn(
        "bg-transparent text-[var(--color-text-primary)]",
        "border-transparent",
        "shadow-none",
        // 悬停：背景 text-primary + 10% opacity
        "hover:bg-[var(--color-text-primary)] hover:bg-opacity-10",
        // 按下效果：不位移
        "active:translate-y-0",
        // 聚焦
        "focus-visible:ring-2 focus-visible:ring-[var(--color-text-secondary)] focus-visible:ring-offset-2"
      ),
    };

    // 尺寸样式 - 符合像素网格（8px 基准）
    const sizeStyles = {
      sm: cn(
        "h-8 min-h-[32px] px-4 text-sm",
        // 移动端最小触摸目标 44x44px
        "min-w-[44px] sm:min-w-[32px]"
      ),
      md: cn("h-10 min-h-[40px] px-6 text-base", "min-w-[44px]"),
      lg: cn("h-12 min-h-[48px] px-8 text-base", "min-w-[48px]"),
    };

    // 全宽样式
    const widthStyles = fullWidth ? "w-full" : "";

    // 圆角样式 - 像素风格
    const borderRadius = "rounded-md"; // 4px

    return (
      <button
        ref={ref}
        type="button"
        disabled={isDisabled}
        className={cn(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          borderRadius,
          widthStyles,
          className
        )}
        aria-busy={loading}
        aria-disabled={isDisabled}
        {...props}
      >
        {loading && (
          <svg
            className="h-4 w-4 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            role="status"
            aria-label="加载中"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {icon && !loading && icon}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
