import type {
  StreamingConfig,
  PerformanceMetrics,
  FlushCallback,
} from "./types";

/**
 * 流式渲染引擎核心类
 *
 * 实现了基于 RAF 的批处理渲染策略，用于优化 AI 流式内容的显示性能。
 *
 * 核心算法：
 * 1. 批处理策略：累积多个字符后统一渲染，减少 DOM 操作
 * 2. RAF 节流：使用 requestAnimationFrame 确保渲染与浏览器刷新率同步
 * 3. 帧率控制：通过时间戳计算确保不超过最大帧率
 * 4. 缓冲区管理：使用数组作为缓冲区，避免字符串频繁拼接
 *
 *
 */
export class StreamingRenderer {
  private buffer: string[] = [];
  private rafId: number | null = null;
  private lastRenderTime: number = 0;
  private config: StreamingConfig;
  private isPaused: boolean = false;

  // 性能监控
  private metrics: PerformanceMetrics = {
    renderCount: 0,
    averageFPS: 0,
    totalChars: 0,
    averageBatchSize: 0,
  };
  private renderTimestamps: number[] = [];

  // 回调函数
  private flushCallback: FlushCallback | null = null;

  constructor(config: Partial<StreamingConfig> = {}) {
    this.config = {
      batchSize: config.batchSize ?? 10,
      maxFPS: config.maxFPS ?? 60,
      bufferSize: config.bufferSize ?? 1000,
    };
  }

  /**
   * 设置刷新回调函数
   */
  onFlush(callback: FlushCallback): void {
    this.flushCallback = callback;
  }

  /**
   * 添加内容到缓冲区
   * @param chunk 要添加的内容片段
   */
  append(chunk: string): void {
    if (this.isPaused) return;

    this.buffer.push(chunk);
    this.metrics.totalChars += chunk.length;

    // 如果缓冲区达到批处理大小，立即刷新
    if (this.buffer.length >= this.config.batchSize) {
      this.flush();
    } else {
      // 否则调度渲染
      this.scheduleRender();
    }
  }

  /**
   * 调度渲染
   * 使用 RAF 确保渲染与浏览器刷新率同步
   */
  private scheduleRender(): void {
    if (this.rafId !== null || this.isPaused) return;

    this.rafId = requestAnimationFrame((timestamp) => {
      this.render(timestamp);
      this.rafId = null;
    });
  }

  /**
   * 执行渲染
   * @param timestamp RAF 提供的时间戳
   */
  private render(timestamp: number): void {
    if (this.isPaused) return;

    const elapsed = timestamp - this.lastRenderTime;
    const minInterval = 1000 / this.config.maxFPS;

    // 帧率控制：如果距离上次渲染时间太短，重新调度
    if (elapsed < minInterval && this.lastRenderTime !== 0) {
      this.scheduleRender();
      return;
    }

    // 执行刷新
    if (this.buffer.length > 0) {
      this.flush();
      this.lastRenderTime = timestamp;

      // 记录渲染时间戳用于计算 FPS
      this.renderTimestamps.push(timestamp);
      if (this.renderTimestamps.length > 10) {
        this.renderTimestamps.shift();
      }
    }

    // 如果缓冲区还有内容，继续调度
    if (this.buffer.length > 0) {
      this.scheduleRender();
    }
  }

  /**
   * 刷新缓冲区到输出
   */
  private flush(): void {
    if (this.buffer.length === 0) return;

    const content = this.buffer.join("");
    this.buffer = [];

    // 更新性能指标
    this.metrics.renderCount++;
    this.metrics.averageBatchSize =
      this.metrics.totalChars / this.metrics.renderCount;

    // 计算平均 FPS
    if (this.renderTimestamps.length > 1) {
      const intervals = this.renderTimestamps
        .slice(1)
        .map((t, i) => t - (this.renderTimestamps[i] ?? 0));
      const avgInterval =
        intervals.reduce((a, b) => a + b, 0) / intervals.length;
      this.metrics.averageFPS = 1000 / avgInterval;
    }

    // 调用回调函数
    if (this.flushCallback) {
      this.flushCallback(content);
    }
  }

  /**
   * 暂停流式渲染
   */
  pause(): void {
    this.isPaused = true;
    if (this.rafId !== null) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
  }

  /**
   * 恢复流式渲染
   */
  resume(): void {
    this.isPaused = false;
    if (this.buffer.length > 0) {
      this.scheduleRender();
    }
  }

  /**
   * 获取性能指标
   */
  getMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }

  /**
   * 清理资源
   */
  destroy(): void {
    if (this.rafId !== null) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
    this.buffer = [];
    this.flushCallback = null;
  }
}
