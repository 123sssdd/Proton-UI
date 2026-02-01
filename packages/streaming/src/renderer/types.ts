/**
 * 流式渲染配置
 */
export interface StreamingConfig {
  /** 批处理大小 - 累积多少个字符后统一渲染 */
  batchSize: number;
  /** 最大帧率 - 限制渲染频率 */
  maxFPS: number;
  /** 缓冲区大小 - 最多缓存多少个字符 */
  bufferSize: number;
}

/**
 * 性能指标
 */
export interface PerformanceMetrics {
  /** 总渲染次数 */
  renderCount: number;
  /** 平均帧率 */
  averageFPS: number;
  /** 总处理字符数 */
  totalChars: number;
  /** 平均批处理大小 */
  averageBatchSize: number;
}

/**
 * 渲染回调函数
 */
export type FlushCallback = (content: string) => void;
