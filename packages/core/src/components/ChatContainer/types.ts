import type { MessageProps } from "../Message/types";

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
  /** 自定义类名 */
  className?: string;
  /** 消息项自定义类名 */
  messageClassName?: string;
}
