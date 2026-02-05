import type { MessageProps } from "../Message/types";

/**
 * 加载指示器类型
 */
export type LoadingIndicatorType =
  | "dots" // 跳动的点（默认）
  | "pulse" // 脉冲圆点
  | "spinner" // 旋转的圆圈
  | "bars" // 跳动的条形
  | "wave" // 波浪效果
  | "custom"; // 自定义渲染

export interface ChatMessage extends Omit<MessageProps, "className"> {
  /** 消息唯一标识 */
  id: string;
}

export interface ChatContainerProps {
  /** 消息列表 */
  messages: ChatMessage[];
  /** 是否正在加载 */
  loading?: boolean;
  /** 加载提示文本 */
  loadingText?: string;
  /** 加载指示器类型 */
  loadingIndicator?: LoadingIndicatorType;
  /** 自定义加载指示器渲染函数 */
  renderLoadingIndicator?: () => React.ReactNode;
  /** 消息气泡最大宽度（百分比，如 70 表示 70%） */
  messageMaxWidth?: number;
  /** 自定义类名 */
  className?: string;
  /** 消息项自定义类名 */
  messageClassName?: string;
  /** 像素风格主题 */
  pixelTheme?:
    | "retro-futurism"
    | "neo-tokyo"
    | "cyber-shrine"
    | "dreamy-lofi"
    | "vaporwave";
  /** 装饰效果 */
  decoration?: "scanline" | "rivets" | "glitch";
}
