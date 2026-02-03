import { useState, useCallback, useEffect } from "react";

import { pixelateImage, PixelateOptions } from "../utils/pixelateImage";

export interface UsePixelateImageOptions extends PixelateOptions {
  /** 是否自动处理（默认 false） */
  auto?: boolean;
  /** 错误回调 */
  onError?: (error: Error) => void;
  /** 完成回调 */
  onComplete?: (result: string) => void;
}

export interface UsePixelateImageReturn {
  /** 像素化后的图片 Data URL */
  pixelatedImage: string | null;
  /** 是否正在处理 */
  isProcessing: boolean;
  /** 错误信息 */
  error: Error | null;
  /** 手动触发像素化处理 */
  pixelate: (source: string | File | HTMLImageElement) => Promise<void>;
  /** 重置状态 */
  reset: () => void;
}

/**
 * 图片像素化 Hook
 *
 * @param source - 图片源（可选，如果提供且 auto=true 则自动处理）
 * @param options - 像素化选项
 * @returns 像素化结果和控制函数
 *
 * @example
 * ```tsx
 * const { pixelatedImage, isProcessing, pixelate } = usePixelateImage();
 *
 * const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
 *   const file = e.target.files?.[0];
 *   if (file) {
 *     await pixelate(file);
 *   }
 * };
 *
 * return (
 *   <div>
 *     <input type="file" onChange={handleFileChange} />
 *     {isProcessing && <p>处理中...</p>}
 *     {pixelatedImage && <img src={pixelatedImage} alt="Pixelated" />}
 *   </div>
 * );
 * ```
 */
export function usePixelateImage(
  source?: string | File | HTMLImageElement,
  options: UsePixelateImageOptions = {}
): UsePixelateImageReturn {
  const [pixelatedImage, setPixelatedImage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const { auto = false, onError, onComplete, ...pixelateOptions } = options;

  const pixelate = useCallback(
    async (imageSource: string | File | HTMLImageElement) => {
      setIsProcessing(true);
      setError(null);

      try {
        const result = await pixelateImage(imageSource, pixelateOptions);
        setPixelatedImage(result);
        onComplete?.(result);
      } catch (err) {
        const error = err instanceof Error ? err : new Error("像素化处理失败");
        setError(error);
        onError?.(error);
      } finally {
        setIsProcessing(false);
      }
    },
    [pixelateOptions, onComplete, onError]
  );

  const reset = useCallback(() => {
    setPixelatedImage(null);
    setError(null);
    setIsProcessing(false);
  }, []);

  // 自动处理
  useEffect(() => {
    if (auto && source) {
      pixelate(source);
    }
  }, [auto, source, pixelate]);

  return {
    pixelatedImage,
    isProcessing,
    error,
    pixelate,
    reset,
  };
}
