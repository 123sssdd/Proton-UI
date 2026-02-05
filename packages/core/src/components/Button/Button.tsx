import * as React from "react";

import { cn } from "../../utils/cn";

import type { ButtonProps } from "./types";

/**
 * Button 组件 - 像素风格按钮组件
 *
 * 特性：
 * - 像素完美的边框和阴影
 * - 多种主题（Retro, Neo Tokyo, Cyber Shrine, etc.）
 * - 丰富的装饰效果（辉光、扫描线、铆钉）
 */
const variantStyles = {
  primary:
    "bg-[var(--pixel-bg-tertiary)] border-[var(--pixel-text-primary)] text-[var(--pixel-text-primary)] hover:bg-[var(--pixel-accent-cyan)] hover:text-[var(--pixel-bg-primary)]",
  secondary:
    "bg-transparent border-[#0ff0fc] text-[#0ff0fc] hover:bg-[rgba(15,240,252,0.1)]",
  danger:
    "bg-red-600 border-red-800 text-white hover:bg-red-700 hover:border-red-900 shadow-[4px_4px_0px_0px_rgba(185,28,28,0.5)]",
  ghost:
    "bg-transparent border-transparent text-[#e0e0e0] hover:bg-[rgba(255,255,255,0.1)] shadow-none",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      loading = false,
      icon,
      fullWidth = false,
      pixelTheme,
      glow = false,
      decoration,
      children,
      className,
      disabled,
      style,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading;

    const getThemeStyles = () => {
      // Force RED style for danger variant if no theme is active
      if (!pixelTheme && variant === "danger") {
        return {
          backgroundColor: "#dc2626", // red-600
          borderColor: "#991b1b", // red-800
          color: "#ffffff",
          boxShadow: "4px 4px 0px 0px rgba(185, 28, 28, 0.5)",
        } as React.CSSProperties;
      }

      if (!pixelTheme) return {};

      switch (pixelTheme) {
        // ... (existing themes)
        case "retro-futurism":
          return {
            backgroundColor: "var(--pixel-bg-tertiary)",
            borderColor: "var(--pixel-accent-cyan)",
            color: "var(--pixel-accent-cyan)",
            boxShadow: "4px 4px 0px 0px rgba(15, 240, 252, 0.3)",
          };
        case "neo-tokyo":
          return {
            backgroundColor: "rgba(255, 107, 157, 0.1)",
            borderColor: "var(--pixel-accent-pink)",
            color: "var(--pixel-accent-pink)",
            boxShadow: "0 0 10px rgba(255, 107, 157, 0.3)",
            backdropFilter: "blur(4px)",
          };
        case "cyber-shrine":
          return {
            backgroundColor: "var(--pixel-bg-tertiary)",
            borderColor: "var(--pixel-accent-gold)",
            color: "var(--pixel-accent-gold)",
            boxShadow: "4px 4px 0px 0px rgba(255, 215, 0, 0.3)",
          };
        case "dreamy-lofi":
          return {
            backgroundColor: "#F0F0F0",
            borderColor: "var(--pixel-accent-green)",
            color: "#2C2C2C",
            boxShadow: "4px 4px 0px 0px rgba(123, 160, 91, 0.3)",
          };
        case "vaporwave":
          return {
            background:
              "linear-gradient(90deg, var(--pixel-accent-pink), var(--pixel-accent-cyan))",
            borderColor: "var(--pixel-text-primary)",
            color: "var(--pixel-bg-primary)",
            boxShadow: "4px 4px 0px 0px rgba(157, 78, 221, 0.3)",
          };
        default:
          return {};
      }
    };

    const themeStyles = getThemeStyles();

    // 基础样式
    const baseStyles = cn(
      "inline-flex items-center justify-center gap-2",
      "font-pixel antialiased",
      "transition-all duration-100 ease-out",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
      "disabled:pointer-events-none disabled:opacity-60",
      "relative overflow-hidden", // needed for effects
      "border-2",
      // 默认像素阴影 (仅在无主题时应用默认，有主题时由 themeStyles 控制)
      !pixelTheme && "shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)]",
      // 按下效果
      "active:translate-y-[2px] active:shadow-none"
    );

    // 辉光效果
    const glowClass = glow
      ? "shadow-[0_0_10px_currentColor] hover:shadow-[0_0_15px_currentColor]"
      : "";

    // 尺寸样式
    const sizeStyles = {
      sm: "h-8 px-4 text-xs min-w-[32px]",
      md: "h-10 px-6 text-sm min-w-[40px]",
      lg: "h-12 px-8 text-base min-w-[48px]",
    };

    return (
      <button
        ref={ref}
        type="button"
        disabled={isDisabled}
        className={cn(
          baseStyles,
          !pixelTheme && variantStyles[variant],
          // themeClass removed, styles are in style prop now
          pixelTheme && "hover:brightness-110 transition-transform", // generic theme hover
          glowClass,
          sizeStyles[size],
          fullWidth ? "w-full" : "",
          className
        )}
        style={{ ...themeStyles, ...style }}
        {...props}
      >
        {/* Loading Spinner */}
        {loading && (
          <span className="absolute inset-0 flex items-center justify-center bg-inherit">
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          </span>
        )}

        {/* Content */}
        <span
          className={cn(
            "flex items-center gap-2 relative z-10",
            loading && "opacity-0"
          )}
        >
          {icon}
          {children}
        </span>

        {/* Decorations */}
        {decoration === "scanline" && (
          <div
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 2px, currentColor 2px, currentColor 3px)",
            }}
          />
        )}

        {decoration === "rivets" && (
          <>
            <div className="absolute top-1 left-1 w-1 h-1 bg-current opacity-50" />
            <div className="absolute top-1 right-1 w-1 h-1 bg-current opacity-50" />
            <div className="absolute bottom-1 left-1 w-1 h-1 bg-current opacity-50" />
            <div className="absolute bottom-1 right-1 w-1 h-1 bg-current opacity-50" />
          </>
        )}

        {decoration === "glitch" && (
          <div className="absolute inset-0 bg-white opacity-0 hover:opacity-10 animate-pulse pointer-events-none" />
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
