import { cn } from "../../utils/cn";
import { Message } from "../Message";

import type { ChatContainerProps } from "./types";

/**
 * ChatContainer 组件
 *
 * 用于显示对话消息列表，支持加载状态显示。
 *
 * @example
 * ```tsx
 * const messages = [
 *   { id: '1', role: 'user', content: '你好', timestamp: new Date() },
 *   { id: '2', role: 'assistant', content: '你好！有什么可以帮助你的吗？', timestamp: new Date() }
 * ];
 *
 * <ChatContainer messages={messages} />
 * ```
 */
export function ChatContainer({
  messages,
  loading = false,
  loadingText = "正在输入...",
  className,
  messageClassName,
}: ChatContainerProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-2 p-4 overflow-y-auto",
        "bg-white dark:bg-gray-900",
        className
      )}
      role="log"
      aria-label="对话消息列表"
      aria-live="polite"
    >
      {/* 消息列表 */}
      {messages.map((message) => (
        <Message
          key={message.id}
          role={message.role}
          content={message.content}
          timestamp={message.timestamp}
          avatar={message.avatar}
          streaming={message.streaming}
          renderContent={message.renderContent}
          onStreamComplete={message.onStreamComplete}
          className={messageClassName}
        />
      ))}

      {/* 加载状态 */}
      {loading && (
        <div
          className="flex items-center gap-2 text-gray-500 text-sm px-4 py-2"
          role="status"
          aria-label={loadingText}
        >
          <div className="flex gap-1">
            <span
              className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
              style={{ animationDelay: "0ms" }}
            />
            <span
              className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
              style={{ animationDelay: "150ms" }}
            />
            <span
              className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
              style={{ animationDelay: "300ms" }}
            />
          </div>
          <span>{loadingText}</span>
        </div>
      )}
    </div>
  );
}
