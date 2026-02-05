import { useState, useCallback, useEffect, useRef } from "react";

import { pixelateImage, PixelateOptions } from "@proton-ui/utils";

export interface UsePixelateImageOptions extends PixelateOptions {
  /** 是否自动处理（默认 false） */
  auto?: boolean;
  /** 错误回调 */
  onError?: (error: Error) => void;
  /** 完成回调 */
  onComplete?: (result: string) => void;
  /** 防抖延迟（毫秒，默认 300） */
  debounceDelay?: number;
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

  const {
    auto = false,
    onError,
    onComplete,
    debounceDelay = 300,
    ...pixelateOptions
  } = options;

  // 使用 ref 存储最新的 options，避免 pixelate 函数频繁重新创建
  const optionsRef = useRef(pixelateOptions);
  const callbacksRef = useRef({ onError, onComplete });

  // 更新 refs
  useEffect(() => {
    optionsRef.current = pixelateOptions;
    callbacksRef.current = { onError, onComplete };
  }, [pixelateOptions, onError, onComplete]);

  // 防抖定时器
  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);

  const pixelate = useCallback(
    async (imageSource: string | File | HTMLImageElement) => {
      // 清除之前的防抖定时器
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }

      setIsProcessing(true);
      setError(null);

      // 使用防抖延迟
      return new Promise<void>((resolve) => {
        debounceTimerRef.current = setTimeout(async () => {
          try {
            const result = await pixelateImage(imageSource, optionsRef.current);
            setPixelatedImage(result);
            callbacksRef.current.onComplete?.(result);
            resolve();
          } catch (err) {
            const error =
              err instanceof Error ? err : new Error("像素化处理失败");
            setError(error);
            callbacksRef.current.onError?.(error);
            resolve();
          } finally {
            setIsProcessing(false);
          }
        }, debounceDelay);
      });
    },
    [debounceDelay]
  );

  const reset = useCallback(() => {
    setPixelatedImage(null);
    setError(null);
    setIsProcessing(false);
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }
  }, []);

  // 自动处理
  useEffect(() => {
    if (auto && source) {
      pixelate(source);
    }
  }, [auto, source, pixelate]);

  // 清理防抖定时器
  useEffect(() => {
    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };
  }, []);

  return {
    pixelatedImage,
    isProcessing,
    error,
    pixelate,
    reset,
  };
}
