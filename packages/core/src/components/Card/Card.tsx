import * as React from "react";

import { cn } from "../../utils/cn";

import type {
  CardProps,
  CardHeaderProps,
  CardBodyProps,
  CardFooterProps,
} from "./types";

/**
 * Card 主组件 - 卡片容器
 */
const CardRoot = React.forwardRef<HTMLDivElement, CardProps>(
  ({ children, className, padding = "md", shadow = "md", ...props }, ref) => {
    // 基础样式
    const baseStyles = "rounded-lg border border-gray-200 bg-white";

    // 内边距样式
    const paddingStyles = {
      none: "",
      sm: "p-3",
      md: "p-4",
      lg: "p-6",
    };

    // 阴影样式
    const shadowStyles = {
      none: "",
      sm: "shadow-sm",
      md: "shadow-md",
      lg: "shadow-lg",
    };

    return (
      <div
        ref={ref}
        className={cn(
          baseStyles,
          paddingStyles[padding],
          shadowStyles[shadow],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

CardRoot.displayName = "Card";

/**
 * Card.Header 组件 - 卡片头部
 */
export const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ title, subtitle, action, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex items-start justify-between", className)}
        {...props}
      >
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          {subtitle && <p className="mt-1 text-sm text-gray-500">{subtitle}</p>}
        </div>
        {action && <div className="ml-4 flex-shrink-0">{action}</div>}
      </div>
    );
  }
);

CardHeader.displayName = "CardHeader";

/**
 * Card.Body 组件 - 卡片主体
 */
export const CardBody = React.forwardRef<HTMLDivElement, CardBodyProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("mt-4", className)} {...props}>
        {children}
      </div>
    );
  }
);

CardBody.displayName = "CardBody";

/**
 * Card.Footer 组件 - 卡片底部
 */
export const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "mt-4 flex items-center justify-end gap-2 border-t border-gray-200 pt-4",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

CardFooter.displayName = "CardFooter";

// 组合式 API - 将子组件附加到主组件上
export const Card = Object.assign(CardRoot, {
  Header: CardHeader,
  Body: CardBody,
  Footer: CardFooter,
});
