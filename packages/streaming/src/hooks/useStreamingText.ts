import { useState, useEffect, useRef } from "react";

import { StreamingRenderer } from "../renderer/StreamingRenderer";

import type { UseStreamingTextOptions, UseStreamingTextResult } from "./types";

/**
 * 流式文本渲染 Hook
 *
 * 用于将源内容逐步显示，实现流式渲染效果。
 *
 * @param sourceContent 源内容（完整的文本）
 * @param options 配置选项
 * @returns 流式渲染状态
 *
 * @example
 * ```tsx
 * const { displayedContent, isStreaming, progress } = useStreamingText(
 *   aiResponse,
 *   {
 *     batchSize: 10,
 *     maxFPS: 60,
 *     onComplete: () => console.log('完成'),
 *   }
 * );
 * ```
 */
export function useStreamingText(
  sourceContent: string,
  options: UseStreamingTextOptions = {}
): UseStreamingTextResult {
  const [displayedContent, setDisplayedContent] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const rendererRef = useRef<StreamingRenderer | null>(null);
  const lastSourceLengthRef = useRef(0);

  // 初始化渲染器
  useEffect(() => {
    if (!rendererRef.current) {
      rendererRef.current = new StreamingRenderer({
        batchSize: options.batchSize,
        maxFPS: options.maxFPS,
      });

      // 设置刷新回调
      rendererRef.current.onFlush((content) => {
        setDisplayedContent((prev) => prev + content);
      });
    }

    return () => {
      if (rendererRef.current) {
        rendererRef.current.destroy();
        rendererRef.current = null;
      }
    };
  }, [options.batchSize, options.maxFPS]);

  // 监听源内容变化
  useEffect(() => {
    if (!rendererRef.current) return;

    const renderer = rendererRef.current;
    const currentLength = sourceContent.length;
    const lastLength = lastSourceLengthRef.current;

    // 如果源内容增加了，添加新增的部分
    if (currentLength > lastLength) {
      const newChars = sourceContent.slice(lastLength);
      setIsStreaming(true);

      // 逐字符添加到渲染器
      for (const char of newChars) {
        renderer.append(char);
      }

      lastSourceLengthRef.current = currentLength;
    }

    // 如果源内容完全显示完毕，触发完成回调
    if (displayedContent.length === sourceContent.length && isStreaming) {
      setIsStreaming(false);
      options.onComplete?.();
    }
  }, [sourceContent, displayedContent.length, isStreaming, options]);

  // 计算进度
  const progress =
    sourceContent.length > 0
      ? displayedContent.length / sourceContent.length
      : 0;

  return {
    displayedContent,
    isStreaming,
    progress,
  };
}
