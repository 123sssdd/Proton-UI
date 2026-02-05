import { useRef, useEffect, useState, useCallback } from "react";

import { cn } from "@proton-ui/utils";
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
  // loadingIndicator = "dots", // unused
  renderLoadingIndicator,
  messageMaxWidth = 70,
  className,
  messageClassName,
  pixelTheme,
  decoration,
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
    return (
      <div className="flex gap-1">
        <span
          className="w-1.5 h-1.5 bg-current animate-bounce"
          style={{ animationDelay: "0ms" }}
        />
        <span
          className="w-1.5 h-1.5 bg-current animate-bounce"
          style={{ animationDelay: "150ms" }}
        />
        <span
          className="w-1.5 h-1.5 bg-current animate-bounce"
          style={{ animationDelay: "300ms" }}
        />
      </div>
    );
  };

  // Theme container styles
  const getContainerStyles = () => {
    if (!pixelTheme) return {};
    switch (pixelTheme) {
      case "retro-futurism":
        return {
          backgroundColor: "#161B33", // Secondary BG
          borderColor: "#333355",
        };
      case "neo-tokyo":
        return {
          background: "rgba(22, 27, 51, 0.4)",
          backdropFilter: "blur(10px)",
          borderColor: "#FF6B9D",
          boxShadow: "0 0 20px rgba(255, 107, 157, 0.2)",
        };
      default:
        return {};
    }
  };

  const themeContainerStyle = getContainerStyles();

  return (
    <div
      ref={containerRef}
      className={cn(
        "flex flex-col gap-4 p-4 overflow-y-auto border-2 relative",
        "font-pixel scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent",
        !pixelTheme &&
          "bg-[var(--pixel-bg-primary)] border-[var(--pixel-border)] scrollbar-thumb-[var(--pixel-bg-tertiary)]",
        className
      )}
      style={themeContainerStyle}
      role="log"
      aria-label="对话消息列表"
      aria-live="polite"
      onScroll={handleScroll}
    >
      {/* Container Decorations */}
      {(decoration === "scanline" || pixelTheme === "retro-futurism") && (
        <div
          className="absolute inset-0 pointer-events-none opacity-5 sticky top-0 h-full w-full"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(78, 205, 196, 0.3) 2px, rgba(78, 205, 196, 0.3) 4px)",
            zIndex: 0,
          }}
        />
      )}

      {/* 消息列表 */}
      <div className="relative z-10 flex flex-col">
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
            pixelTheme={pixelTheme} // Pass theme down
            decoration={decoration} // Pass decoration down
          />
        ))}
      </div>

      {/* 加载状态 */}
      {loading && (
        <div
          className="relative z-10 flex items-center gap-2 text-[var(--pixel-text-muted)] text-xs px-4 py-2 uppercase tracking-widest animate-pulse"
          role="status"
          aria-label={loadingText}
        >
          {renderIndicator()}
          <span>{loadingText}</span>
        </div>
      )}
    </div>
  );
}
