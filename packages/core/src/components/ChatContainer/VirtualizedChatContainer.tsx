import { useRef, useEffect, useState } from "react";
import { Virtuoso, VirtuosoHandle } from "react-virtuoso";

import { cn } from "../../utils/cn";
import { Message } from "../Message";

import type { ChatContainerProps } from "./types";

/**
 * VirtualizedChatContainer 组件
 *
 * 使用虚拟滚动优化的对话容器，适用于大量消息的场景。
 * 基于 react-virtuoso 实现，只渲染可见区域的消息，大幅提升性能。
 *
 * @example
 * ```tsx
 * const messages = [...]; // 大量消息
 *
 * <VirtualizedChatContainer
 *   messages={messages}
 *   height={600}
 * />
 * ```
 */
export function VirtualizedChatContainer({
  messages,
  loading = false,
  loadingText = "正在输入...",
  className,
  messageClassName,
}: ChatContainerProps) {
  const virtuosoRef = useRef<VirtuosoHandle>(null);
  const [autoScroll, setAutoScroll] = useState(true);
  const lastMessageCountRef = useRef(messages.length);

  // 当消息变化时自动滚动
  useEffect(() => {
    // 只有在新增消息且启用自动滚动时才滚动
    if (messages.length > lastMessageCountRef.current && autoScroll) {
      virtuosoRef.current?.scrollToIndex({
        index: messages.length - 1,
        behavior: "smooth",
        align: "end",
      });
    }
    lastMessageCountRef.current = messages.length;
  }, [messages, autoScroll]);

  // 当 loading 状态变化时滚动
  useEffect(() => {
    if (loading && autoScroll) {
      virtuosoRef.current?.scrollToIndex({
        index: messages.length - 1,
        behavior: "smooth",
        align: "end",
      });
    }
  }, [loading, autoScroll, messages.length]);

  return (
    <div
      className={cn("bg-white dark:bg-gray-900", className)}
      role="log"
      aria-label="对话消息列表"
      aria-live="polite"
    >
      <Virtuoso
        ref={virtuosoRef}
        data={messages}
        style={{ height: "100%" }}
        itemContent={(_index, message) => (
          <div className="px-4 py-2">
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
          </div>
        )}
        followOutput={(isAtBottom) => {
          // 当用户滚动到底部时启用自动滚动，否则禁用
          setAutoScroll(isAtBottom);
          return isAtBottom ? "smooth" : false;
        }}
        alignToBottom
        components={{
          Footer: loading
            ? () => (
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
              )
            : undefined,
        }}
      />
    </div>
  );
}
