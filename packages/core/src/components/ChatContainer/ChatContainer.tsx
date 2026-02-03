import { useRef, useEffect, useState, useCallback } from "react";

import { cn } from "../../utils/cn";
import { Message } from "../Message";

import type { ChatContainerProps } from "./types";

/**
 * ChatContainer 组件
 *
 * 用于显示对话消息列表，支持加载状态显示和自动滚动。
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
  const containerRef = useRef<HTMLDivElement>(null);
  const [autoScroll, setAutoScroll] = useState(true);
  const lastMessageCountRef = useRef(messages.length);

  // 滚动到底部
  const scrollToBottom = useCallback(() => {
    if (containerRef.current && autoScroll) {
      containerRef.current.scrollTo({
        top: containerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [autoScroll]);

  // 检测用户是否手动滚动
  const handleScroll = () => {
    if (!containerRef.current) return;

    const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
    const isAtBottom = Math.abs(scrollHeight - scrollTop - clientHeight) < 10;

    // 如果用户滚动到底部，启用自动滚动；否则禁用
    setAutoScroll(isAtBottom);
  };

  // 当消息变化时自动滚动
  useEffect(() => {
    // 只有在新增消息时才滚动
    if (messages.length > lastMessageCountRef.current) {
      scrollToBottom();
    }
    lastMessageCountRef.current = messages.length;
  }, [messages, scrollToBottom]);

  // 当 loading 状态变化时滚动
  useEffect(() => {
    if (loading) {
      scrollToBottom();
    }
  }, [loading, scrollToBottom]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "flex flex-col gap-2 p-4 overflow-y-auto",
        "bg-white dark:bg-gray-900",
        className
      )}
      role="log"
      aria-label="对话消息列表"
      aria-live="polite"
      onScroll={handleScroll}
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
