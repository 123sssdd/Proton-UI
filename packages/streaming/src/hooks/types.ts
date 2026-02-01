/**
 * useStreamingText Hook 配置选项
 */
export interface UseStreamingTextOptions {
  /** 批处理大小 */
  batchSize?: number;
  /** 最大帧率 */
  maxFPS?: number;
  /** 完成回调 */
  onComplete?: () => void;
}

/**
 * useStreamingText Hook 返回值
 */
export interface UseStreamingTextResult {
  /** 当前显示的内容 */
  displayedContent: string;
  /** 是否正在流式渲染 */
  isStreaming: boolean;
  /** 渲染进度 (0-1) */
  progress: number;
}
