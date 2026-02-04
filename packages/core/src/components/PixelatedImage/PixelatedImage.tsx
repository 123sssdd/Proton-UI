import React, { useEffect } from "react";

import {
  usePixelateImage,
  UsePixelateImageOptions,
} from "../../hooks/usePixelateImage";
import { cn } from "../../utils/cn";

export interface PixelatedImageProps extends Omit<
  UsePixelateImageOptions,
  "auto" | "onComplete" | "onError"
> {
  /** 图片源 */
  src: string | File | HTMLImageElement;
  /** 替代文本 */
  alt?: string;
  /** 自定义类名 */
  className?: string;
  /** 自定义样式 */
  style?: React.CSSProperties;
  /** 加载中占位符 */
  loadingPlaceholder?: React.ReactNode;
  /** 错误占位符 */
  errorPlaceholder?: React.ReactNode;
  /** 完成回调 */
  onLoad?: (pixelatedSrc: string) => void;
  /** 错误回调 */
  onError?: (error: Error) => void;
  /** 图片容器的 props */
  imgProps?: React.ImgHTMLAttributes<HTMLImageElement>;
}

/**
 * 像素化图片组件
 *
 * 自动将图片转换为像素风格并显示
 *
 * @example
 * ```tsx
 * // 基础用法
 * <PixelatedImage src="/avatar.jpg" alt="Avatar" pixelSize={8} />
 *
 * // 使用预设
 * <PixelatedImage
 *   src="/photo.jpg"
 *   alt="Photo"
 *   pixelSize={8}
 *   preserveColor={false}
 *   colorLevels={16}
 * />
 *
 * // 自定义样式
 * <PixelatedImage
 *   src="/banner.jpg"
 *   alt="Banner"
 *   pixelSize={4}
 *   className="rounded-lg shadow-pixel-md"
 *   style={{ maxWidth: '100%' }}
 * />
 * ```
 */
export const PixelatedImage: React.FC<PixelatedImageProps> = ({
  src,
  alt = "",
  className,
  style,
  loadingPlaceholder,
  errorPlaceholder,
  onLoad,
  onError,
  imgProps,
  ...pixelateOptions
}) => {
  const { pixelatedImage, isProcessing, error, pixelate } = usePixelateImage(
    undefined,
    {
      ...pixelateOptions,
      onComplete: onLoad,
      onError,
    }
  );

  // 当 src 变化时重新处理
  useEffect(() => {
    pixelate(src);
  }, [src, pixelate]);

  // 错误状态
  if (error && !pixelatedImage) {
    return (
      <div className={cn("pixelated-image-error", className)} style={style}>
        {errorPlaceholder || (
          <div className="flex items-center justify-center bg-[var(--color-bg-secondary)] p-8">
            <div className="text-[var(--color-error)] text-sm">
              {error.message}
            </div>
          </div>
        )}
      </div>
    );
  }

  // 显示像素化后的图片（处理中时也显示，避免闪烁）
  if (pixelatedImage) {
    return (
      <div className="relative">
        <img
          src={pixelatedImage}
          alt={alt}
          className={cn("pixelated-image", "pixel-perfect", className)}
          style={{
            imageRendering: "pixelated",
            ...style,
          }}
          {...imgProps}
        />
        {/* 处理中时显示半透明遮罩，但保留图片 */}
        {isProcessing && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-900/30 rounded">
            <div className="text-white text-xs bg-gray-900/80 px-2 py-1 rounded">
              更新中...
            </div>
          </div>
        )}
      </div>
    );
  }

  // 首次加载中状态
  if (isProcessing) {
    return (
      <div className={cn("pixelated-image-loading", className)} style={style}>
        {loadingPlaceholder || (
          <div className="flex items-center justify-center bg-[var(--color-bg-secondary)] p-8">
            <div className="text-[var(--color-text-secondary)] text-sm">
              处理中...
            </div>
          </div>
        )}
      </div>
    );
  }

  return null;
};

PixelatedImage.displayName = "PixelatedImage";
