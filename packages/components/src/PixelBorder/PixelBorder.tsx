import React from "react";
import { cn } from "@proton-ui/utils";
import type {
  PixelBorderProps,
  PixelBorderVariant,
  PixelBorderCornerVariant,
} from "./types";

/**
 * 像素边框组件
 *
 * 提供多种像素风格的装饰性边框。
 */
export const PixelBorder = React.forwardRef<HTMLDivElement, PixelBorderProps>(
  (
    { variant = "none", corner = "none", className, children, ...props },
    ref
  ) => {
    const getBorderClass = (v: PixelBorderVariant) => {
      switch (v) {
        case "minimal":
          return "border-deco-minimal";
        case "retro":
          return "border-deco-retro";
        case "tech":
          return "border-deco-tech";
        case "japanese":
          return "border-deco-japanese";
        case "geometric":
          return "border-deco-geometric";
        case "hybrid":
          return "border-deco-hybrid";
        default:
          return "";
      }
    };

    const getCornerClass = (c: PixelBorderCornerVariant) => {
      switch (c) {
        case "rivet":
          return "corner-deco-rivet";
        case "gem":
          return "corner-deco-gem";
        case "glow":
          return "corner-deco-glow";
        default:
          return "";
      }
    };

    return (
      <div
        ref={ref}
        className={cn(
          "relative transition-all duration-300 p-4", // 添加默认 padding 以展示边框内部装饰
          getBorderClass(variant),
          getCornerClass(corner),
          className
        )}
        style={{
          boxSizing: "border-box",
          ...props.style,
        }}
        {...props}
      >
        {children}
      </div>
    );
  }
);

PixelBorder.displayName = "PixelBorder";
