import clsx from "clsx";
import React from "react";

export type PixelCardVariant =
  | "minimal"
  | "retro"
  | "tech"
  | "japanese"
  | "geometric"
  | "hybrid"
  | "none";

export type PixelCornerVariant = "rivet" | "gem" | "glow";

export interface PixelCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The visual style variant of the border decoration
   * @default "none"
   */
  variant?: PixelCardVariant;
  /**
   * Optional corner decoration style
   */
  corner?: PixelCornerVariant;
  /**
   * Content of the card
   */
  children?: React.ReactNode;
  /**
   * Additional CSS classes
   */
  className?: string;
  /**
   * Whether to apply the base glass morphism effect background
   * @default true
   */
  glass?: boolean;
}

/**
 * PixelCard Component
 *
 * A container component that applies varied pixel-art style borders and decorations.
 * Encapsulates the `border-deco-*` and `corner-deco-*` CSS classes.
 */
export const PixelCard: React.FC<PixelCardProps> = ({
  variant = "none",
  corner,
  children,
  className,
  glass = true,
  ...props
}) => {
  const getBorderClass = (v: PixelCardVariant) => {
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
        return "border-deco-hybrid hybrid-glass";
      default:
        return "";
    }
  };

  const getCornerClass = (c?: PixelCornerVariant) => {
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

  const classes = clsx(
    // Base styles
    "relative transition-all duration-300",
    {
      "glass-morphism": glass,
    },
    // Decoration styles
    getBorderClass(variant),
    getCornerClass(corner),
    // User classes
    className
  );

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};
