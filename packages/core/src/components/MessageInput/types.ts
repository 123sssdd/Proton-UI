export interface MessageInputProps {
  /** 输入框占位符 */
  placeholder?: string;
  /** 发送按钮文本 */
  sendButtonText?: string;
  /** 是否禁用输入 */
  disabled?: boolean;
  /** 是否正在发送 */
  loading?: boolean;
  /** 发送消息回调 */
  onSend?: (message: string) => void;
  /** 输入值变化回调 */
  onChange?: (value: string) => void;
  /** 自定义类名 */
  className?: string;
  /** 最大字符数 */
  maxLength?: number;
}
