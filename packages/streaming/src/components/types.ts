import type { UseStreamingTextOptions } from "../hooks/types";

/**
 * StreamingText 组件属性
 */
export interface StreamingTextProps extends UseStreamingTextOptions {
  /** 源内容 */
  content: string;
  /** 自定义类名 */
  className?: string;
  /** 是否启用虚拟补全（处理 Markdown 标签） */
  enableVirtualCompletion?: boolean;
}
