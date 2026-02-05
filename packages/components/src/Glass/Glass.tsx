import React from "react";
import { cn } from "@proton-ui/utils";
import type {
  GlassProps,
  GlassVariant,
  GlassBlur,
  GlassHighlight,
} from "./types";

/**
 * 玻璃拟态组件
 *
 * 提供多种风格的毛玻璃效果容器。
 */
export const Glass = React.forwardRef<HTMLDivElement, GlassProps>(
  (
    {
      variant = "base",
      blur = "md",
      highlight = "none",
      intensity = "medium",
      className,
      children,
      ...props
    },
    ref
  ) => {
    // 映射 Variant 到 CSS 类
    const getVariantClass = (v: GlassVariant) => {
      switch (v) {
        case "subtle":
          return "glass-morphism-subtle";
        case "strong":
          return "glass-morphism-strong";
        case "cyan":
          return "glass-morphism-cyan";
        case "pink":
          return "glass-morphism-pink";
        case "purple":
          return "glass-morphism-purple";
        case "base":
        default:
          return "glass-morphism";
      }
    };

    // 映射 Blur 到 CSS 类 (需要在 CSS 中补全这些工具类，或者使用 Tailwind)
    const getBlurClass = (b: GlassBlur) => {
      switch (b) {
        case "sm":
          return "glass-blur-sm";
        case "md":
          return "glass-blur-md";
        case "lg":
          return "glass-blur-lg";
        case "xl":
          return "glass-blur-xl";
        default:
          return "";
      }
    };

    // 映射 Highlight 到 CSS 类
    const getHighlightClass = (h: GlassHighlight) => {
      switch (h) {
        case "top":
          return "glass-highlight-top";
        case "45":
          return "glass-highlight-45";
        default:
          return "";
      }
    };

    // 映射 Intensity 到 CSS 类
    const getIntensityClass = (i: "low" | "medium" | "high") => {
      switch (i) {
        case "low":
          return "glass-intensity-low";
        case "high":
          return "glass-intensity-high";
        case "medium":
        default:
          return "glass-intensity-medium";
      }
    };

    return (
      <div
        ref={ref}
        className={cn(
          "transition-all duration-300",
          getVariantClass(variant),
          getBlurClass(blur),
          getHighlightClass(highlight),
          getIntensityClass(intensity),
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Glass.displayName = "Glass";
