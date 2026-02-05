import * as React from "react";

import { cn } from "@proton-ui/utils";

import type { InputProps } from "./types";

/**
 * Input 组件 - 像素风格输入框组件
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
      pixelTheme,
      decoration,
      style,
      onFocus,
      onBlur,
      ...props
    },
    ref
  ) => {
    // 生成唯一 ID
    const generatedId = React.useId();
    const inputId = id || generatedId;
    const errorId = `${inputId}-error`;
    const helperTextId = `${inputId}-helper`;

    // 聚焦状态控制
    const [isFocused, setIsFocused] = React.useState(false);

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      onBlur?.(e);
    };

    // 基础容器样式
    const containerStyles = fullWidth ? "w-full" : "";

    // 默认样式
    const defaultStyles = cn(
      "flex h-10 w-full",
      "px-3 py-2",
      "font-pixel no-font-smooth text-sm",
      "bg-[var(--pixel-bg-primary)]",
      "border-2 border-[var(--pixel-border)] rounded-md",
      "transition-all duration-200",
      "text-[var(--pixel-text-primary)]",
      "placeholder:text-[var(--pixel-text-secondary)] placeholder:opacity-60",
      "focus-visible:outline-none",
      "disabled:cursor-not-allowed disabled:opacity-60 disabled:bg-[var(--pixel-bg-secondary)]",
      "file:border-0 file:bg-transparent file:text-sm file:font-pixel file:text-[var(--pixel-text-primary)]",
      // State styles
      error
        ? "border-red-500 focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
        : "focus-visible:border-[var(--pixel-accent-cyan)] focus-visible:ring-2 focus-visible:ring-[var(--pixel-accent-cyan)] focus-visible:ring-opacity-40 focus-visible:ring-offset-2"
    );

    // 主题样式生成
    const getThemeStyles = () => {
      if (!pixelTheme) return {};

      switch (pixelTheme) {
        case "retro-futurism":
          return {
            background: "rgba(37, 40, 54, 0.9)",
            borderColor: isFocused ? "#4ECDC4" : "rgba(78,205,196,0.3)",
            color: "#E8E4DB",
            boxShadow: isFocused ? "0 0 10px rgba(78,205,196,0.5)" : "none",
          };
        case "neo-tokyo":
          return {
            background: "rgba(37,40,54,0.5)",
            backdropFilter: "blur(10px)",
            borderColor: isFocused ? "#FF6B9D" : "rgba(255,107,157,0.3)",
            color: "#E8E4DB",
            boxShadow: isFocused
              ? "0 8px 32px 0 rgba(255,107,157,0.4)"
              : "0 8px 32px 0 rgba(255,107,157,0.2)",
          };
        case "cyber-shrine":
          return {
            backgroundColor: "rgba(44,44,44,0.5)",
            borderColor: "#D4AF37",
            color: "#E8E4DB",
            boxShadow: "4px 4px 0px rgba(212,175,55,0.3)",
          };
        case "dreamy-lofi":
          return {
            backgroundColor: "#E8E4DB",
            borderColor: "#7BA05B",
            color: "#2C2C2C",
            boxShadow: "4px 4px 0px rgba(123,160,91,0.2)",
          };
        case "vaporwave":
          return {
            backgroundColor: "rgba(60,9,108,0.5)",
            borderColor: "#FF006E",
            color: "#FFFFFF",
            boxShadow: "4px 4px 0px rgba(255,0,110,0.3)",
          };
        default:
          return {};
      }
    };

    const themeStyles = getThemeStyles();

    // Merge custom style with theme style
    const finalStyle = { ...themeStyles, ...style };

    // Determine final classes based on theme presence
    // If theme is present, we might want to override some default borders/bg
    const inputClassName = pixelTheme
      ? cn(
          "flex h-10 w-full",
          "px-3 py-2",
          "font-pixel no-font-smooth text-sm",
          "rounded-md border-2",
          "transition-all duration-200",
          "outline-none", // rely on custom switch for focus
          fullWidth ? "w-full" : "",
          className
        )
      : cn(defaultStyles, leftIcon && "pl-10", rightIcon && "pr-10", className);

    // Padding for icons logic needs to be applied even if theme is active
    const finalClassName = pixelTheme
      ? cn(inputClassName, leftIcon && "pl-10", rightIcon && "pr-10")
      : inputClassName;

    // Render Decorators
    const renderDecorators = () => {
      if (!pixelTheme && !decoration) return null;

      // Scanlines for retro-futurism
      if (pixelTheme === "retro-futurism" || decoration === "scanline") {
        return (
          <div
            className="absolute inset-0 pointer-events-none opacity-10 rounded-md"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(78,205,196,0.5) 2px, rgba(78,205,196,0.5) 4px)",
            }}
          />
        );
      }

      // Glow for neo-tokyo focus
      if (
        (pixelTheme === "neo-tokyo" && isFocused) ||
        decoration === "glitch"
      ) {
        // reusing glitch prop for generic enhanced glow for now
        return (
          <div
            className="absolute inset-0 pointer-events-none rounded-lg z-0"
            style={{
              background:
                "radial-gradient(circle at center, rgba(255,107,157,0.1) 0%, transparent 70%)",
            }}
          />
        );
      }

      // Shine/Glass for Neo Tokyo
      if (pixelTheme === "neo-tokyo") {
        return (
          <div
            className="absolute top-0 left-0 right-0 h-1/2 pointer-events-none rounded-t-lg"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.1) 0%, transparent 100%)",
            }}
          />
        );
      }

      // Gold sheen for Cyber Shrine
      if (pixelTheme === "cyber-shrine") {
        return (
          <div
            className="absolute inset-0 opacity-20 pointer-events-none rounded-md"
            style={{
              background:
                "radial-gradient(circle at center, rgba(212,175,55,0.6) 0%, transparent 70%)",
            }}
          />
        );
      }

      return null;
    };

    return (
      <div className={cn(containerStyles, "space-y-2")}>
        {/* 标签 */}
        {label && (
          <label
            htmlFor={inputId}
            className="block text-sm font-pixel"
            style={{
              color:
                finalStyle.borderColor ||
                (pixelTheme ? "inherit" : "var(--pixel-text-primary)"),
            }}
          >
            {label}
            {required && (
              <span className="ml-1 text-red-500" aria-label="必填">
                *
              </span>
            )}
          </label>
        )}

        {/* 输入框容器 (Wrapper for positioning visuals) */}
        <div
          className={cn("relative", leftIcon || rightIcon ? "relative" : "")}
        >
          {/* 左侧图标 */}
          {leftIcon && (
            <div
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 z-10"
              style={{
                color: finalStyle.borderColor || "var(--pixel-text-secondary)",
              }}
            >
              {leftIcon}
            </div>
          )}

          {/* 输入框 */}
          <input
            ref={ref}
            id={inputId}
            disabled={disabled}
            required={required}
            className={finalClassName}
            style={finalStyle}
            aria-invalid={!!error}
            aria-describedby={
              error ? errorId : helperText ? helperTextId : undefined
            }
            onFocus={handleFocus}
            onBlur={handleBlur}
            {...props}
          />

          {/* Visual Decorators (Scanlines, Glows, etc) */}
          {renderDecorators()}

          {/* 右侧图标 */}
          {rightIcon && (
            <div
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 z-10"
              style={{
                color: finalStyle.borderColor || "var(--pixel-text-secondary)",
              }}
            >
              {rightIcon}
            </div>
          )}
        </div>

        {/* 错误信息 */}
        {error && (
          <div className="flex items-start gap-1">
            {/* Error Icon */}
            <svg
              className="w-3 h-3 mt-0.5 flex-shrink-0 text-red-500"
              style={{ width: "12px", height: "12px" }}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clipRule="evenodd"
              />
            </svg>
            <p
              id={errorId}
              className="text-xs text-red-500"
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
            className="text-xs text-[var(--pixel-text-secondary)]"
          >
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
