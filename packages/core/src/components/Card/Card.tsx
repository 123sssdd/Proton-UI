import * as React from "react";

import { cn } from "../../utils/cn";

import type {
  CardProps,
  CardHeaderProps,
  CardBodyProps,
  CardFooterProps,
} from "./types";

/**
 * Card Root Component
 */
const CardRoot = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      children,
      className,
      padding = "md",
      shadow = "md",
      pixelTheme,
      decoration,
      style,
      ...props
    },
    ref
  ) => {
    // Core Base Styles (Fallback)
    const baseStyles = cn(
      "rounded-lg border-2",
      "font-pixel",
      "transition-all duration-200",
      "relative overflow-hidden" // for decorations
    );

    // Padding Maps
    const paddingStyles = {
      none: "",
      sm: "p-3",
      md: "p-4",
      lg: "p-6",
    };

    // Shadow Maps (Default)
    const shadowStyles = {
      none: "",
      sm: "shadow-pixel-sm",
      md: "shadow-pixel",
      lg: "shadow-pixel-lg",
    };

    // --- Theme Logic ---
    const getThemeStyles = () => {
      if (!pixelTheme) return {};

      switch (pixelTheme) {
        case "retro-futurism":
          return {
            backgroundColor: "#252836",
            borderColor: "#4ECDC4",
            boxShadow: "4px 4px 0px rgba(78,205,196,0.3)",
            color: "#E8E4DB",
          };
        case "neo-tokyo":
          return {
            background: "rgba(37,40,54,0.5)",
            backdropFilter: "blur(10px)",
            borderColor: "#FF6B9D",
            boxShadow: "0 8px 32px 0 rgba(255,107,157,0.2)",
            color: "#E8E4DB",
          };
        case "cyber-shrine":
          return {
            backgroundColor: "rgba(44,44,44,0.5)",
            borderColor: "#D4AF37",
            boxShadow: "4px 4px 0px rgba(212,175,55,0.3)",
            color: "#E8E4DB",
          };
        case "dreamy-lofi":
          return {
            backgroundColor: "#E8E4DB",
            borderColor: "#7BA05B",
            boxShadow: "4px 4px 0px rgba(123,160,91,0.2)",
            color: "#2C2C2C",
          };
        case "vaporwave":
          return {
            background: "rgba(60,9,108,0.5)",
            borderColor: "#FF006E",
            boxShadow: "4px 4px 0px rgba(255,0,110,0.3)",
            color: "#FFFFFF",
            backdropFilter: "blur(10px)",
          };
        default:
          return {};
      }
    };

    const themeStyles = getThemeStyles();
    const finalStyle = { ...themeStyles, ...style };

    // Default classes if no theme is provided
    const defaultClasses =
      "bg-[var(--pixel-bg-secondary)] border-[var(--pixel-border)] text-[var(--pixel-text-primary)]";

    const finalClassName = cn(
      baseStyles,
      paddingStyles[padding],
      !pixelTheme ? shadowStyles[shadow] : "", // Disable default shadows if theme is active (theme handles shadow)
      !pixelTheme ? defaultClasses : "",
      className
    );

    // Decorators
    const renderDecorators = () => {
      // Scanlines
      if (pixelTheme === "retro-futurism" || decoration === "scanline") {
        return (
          <div
            className="absolute inset-0 pointer-events-none opacity-10"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(78,205,196,0.5) 2px, rgba(78,205,196,0.5) 4px)",
            }}
          />
        );
      }

      // Rivets
      if (decoration === "rivets") {
        return (
          <>
            <div className="absolute top-2 left-2 w-2 h-2 rounded-full bg-[#1A1D2E] opacity-50 shadow-inner" />
            <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#1A1D2E] opacity-50 shadow-inner" />
            <div className="absolute bottom-2 left-2 w-2 h-2 rounded-full bg-[#1A1D2E] opacity-50 shadow-inner" />
            <div className="absolute bottom-2 right-2 w-2 h-2 rounded-full bg-[#1A1D2E] opacity-50 shadow-inner" />
          </>
        );
      }

      // Neo Tokyo Sheen
      if (pixelTheme === "neo-tokyo") {
        return (
          <div
            className="absolute top-0 left-0 right-0 h-1/2 pointer-events-none"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.1) 0%, transparent 100%)",
            }}
          />
        );
      }

      // Cyber Shrine Pattern (simplified)
      // ... (can add later if needed)

      return null;
    };

    return (
      <div ref={ref} className={finalClassName} style={finalStyle} {...props}>
        {children}
        {renderDecorators()}
      </div>
    );
  }
);

CardRoot.displayName = "Card";

/**
 * Card Header
 */
export const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ title, subtitle, action, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex items-start justify-between relative z-10",
          className
        )}
        {...props}
      >
        <div className="flex-1">
          <h3 className="text-lg font-bold font-pixel text-inherit">{title}</h3>
          {subtitle && <p className="mt-1 text-sm opacity-80">{subtitle}</p>}
        </div>
        {action && <div className="ml-4 flex-shrink-0">{action}</div>}
      </div>
    );
  }
);

CardHeader.displayName = "CardHeader";

/**
 * Card Body
 */
export const CardBody = React.forwardRef<HTMLDivElement, CardBodyProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("mt-4 relative z-10", className)} {...props}>
        {children}
      </div>
    );
  }
);

CardBody.displayName = "CardBody";

/**
 * Card Footer
 */
export const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "mt-4 flex items-center justify-end gap-2 border-t-2 pt-4 relative z-10",
          // We inherit border color from parent via currentcolor or explicitly set it if needed.
          // For now, let's use a opacity-20 border
          "border-current",
          className
        )}
        style={{ borderColor: "rgba(255,255,255,0.1)" }} // Default separator opacity
        {...props}
      >
        {children}
      </div>
    );
  }
);

CardFooter.displayName = "CardFooter";

// Combine
export const Card = Object.assign(CardRoot, {
  Header: CardHeader,
  Body: CardBody,
  Footer: CardFooter,
});
