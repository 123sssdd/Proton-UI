export type MessageRole = "user" | "assistant" | "system";

export interface MessageProps {
  /** 消息角色 */
  role: MessageRole;
  /** 消息内容 */
  content: string;
  /** 时间戳 */
  timestamp?: Date;
  /** 头像 URL */
  avatar?: string;
  /** 是否流式渲染 */
  streaming?: boolean;
  /** 自定义渲染内容函数（用于流式渲染） */
  renderContent?: (content: string) => React.ReactNode;
  /** 流式渲染完成回调 */
  onStreamComplete?: () => void;
  /** 消息气泡最大宽度（百分比，如 70 表示 70%） */
  maxWidth?: number;
  /** 自定义类名 */
  className?: string;
}
