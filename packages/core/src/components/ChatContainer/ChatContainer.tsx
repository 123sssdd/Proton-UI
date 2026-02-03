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
 * <ChatContainer
 *   messages={messages}
 *   loading={true}
 *   loadingIndicator="dots"
 * />
 * ```
 */
export function ChatContainer({
  messages,
  loading = false,
  loadingText = "正在输入...",
  loadingIndicator = "dots",
  renderLoadingIndicator,
  messageMaxWidth = 70,
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
      // 使用 setTimeout 确保 DOM 更新后再滚动
      setTimeout(() => {
        scrollToBottom();
      }, 0);
    }
    lastMessageCountRef.current = messages.length;
  }, [messages, scrollToBottom]);

  // 当消息内容变化时也滚动（用于流式渲染）
  useEffect(() => {
    if (autoScroll && messages.length > 0) {
      const lastMessage = messages[messages.length - 1];
      if (lastMessage?.streaming) {
        // 流式渲染时持续滚动
        scrollToBottom();
      }
    }
  }, [messages, autoScroll, scrollToBottom]);

  // 当 loading 状态变化时滚动
  useEffect(() => {
    if (loading) {
      scrollToBottom();
    }
  }, [loading, scrollToBottom]);

  // 渲染加载指示器
  const renderIndicator = () => {
    if (renderLoadingIndicator) {
      return renderLoadingIndicator();
    }

    switch (loadingIndicator) {
      case "dots":
        return (
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
        );

      case "pulse":
        return (
          <div className="flex gap-1">
            <span className="w-3 h-3 bg-gray-400 rounded-full animate-pulse" />
          </div>
        );

      case "spinner":
        return (
          <svg
            className="w-5 h-5 animate-spin text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        );

      case "bars":
        return (
          <div className="flex gap-1 items-end h-5">
            <span
              className="w-1 bg-gray-400 rounded-full animate-pulse"
              style={{
                height: "60%",
                animationDelay: "0ms",
                animationDuration: "0.6s",
              }}
            />
            <span
              className="w-1 bg-gray-400 rounded-full animate-pulse"
              style={{
                height: "100%",
                animationDelay: "150ms",
                animationDuration: "0.6s",
              }}
            />
            <span
              className="w-1 bg-gray-400 rounded-full animate-pulse"
              style={{
                height: "80%",
                animationDelay: "300ms",
                animationDuration: "0.6s",
              }}
            />
          </div>
        );

      case "wave":
        return (
          <div className="flex gap-0.5 items-center h-5">
            {[0, 1, 2, 3, 4].map((i) => (
              <span
                key={i}
                className="w-0.5 h-3 bg-gray-400 rounded-full"
                style={{
                  animation: "wave 1.2s ease-in-out infinite",
                  animationDelay: `${i * 0.1}s`,
                }}
              />
            ))}
          </div>
        );

      default:
        return null;
    }
  };

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
          maxWidth={messageMaxWidth}
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
          {renderIndicator()}
          <span>{loadingText}</span>
        </div>
      )}

      {/* 添加 wave 动画的 CSS */}
      <style>{`
        @keyframes wave {
          0%, 100% {
            transform: scaleY(0.5);
          }
          50% {
            transform: scaleY(1);
          }
        }
      `}</style>
    </div>
  );
}
