import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";

import { cn } from "../../utils/cn";

import type { MessageProps } from "./types";

/**
 * Message 组件
 *
 * 用于显示对话消息，支持不同角色（用户、AI、系统）的样式区分。
 * 支持 Markdown 格式渲染和代码高亮。
 *
 * @example
 * ```tsx
 * // 普通消息
 * <Message
 *   role="user"
 *   content="你好，AI！"
 *   timestamp={new Date()}
 * />
 *
 * // Markdown 消息
 * <Message
 *   role="assistant"
 *   content="你好！这是一段 **Markdown** 文本。"
 * />
 *
 * // 流式渲染消息（需要外部提供 StreamingText）
 * <Message
 *   role="assistant"
 *   content={streamingContent}
 *   streaming
 *   renderContent={(content) => <StreamingText content={content} />}
 * />
 * ```
 */
export function Message({
  role,
  content,
  timestamp,
  avatar,
  streaming = false,
  renderContent,
  onStreamComplete: _onStreamComplete,
  className,
}: MessageProps) {
  // 根据角色确定样式
  const isUser = role === "user";
  const isAssistant = role === "assistant";
  const isSystem = role === "system";

  // 容器样式：用户消息右对齐，AI 消息左对齐
  const containerClasses = cn(
    "flex gap-3 mb-4",
    isUser && "flex-row-reverse",
    isSystem && "justify-center",
    className
  );

  // 消息气泡样式
  const bubbleClasses = cn(
    "max-w-[70%] rounded-lg px-4 py-3 break-words",
    isUser && "bg-blue-600 text-white",
    isAssistant && "bg-gray-100 text-gray-900",
    isSystem && "bg-yellow-50 text-yellow-900 text-sm text-center"
  );

  // 头像样式
  const avatarClasses = cn(
    "w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-sm font-medium",
    isUser && "bg-blue-500 text-white",
    isAssistant && "bg-gray-300 text-gray-700",
    isSystem && "hidden"
  );

  // 格式化时间
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("zh-CN", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // Markdown 组件样式
  const markdownClasses = cn(
    "prose prose-sm max-w-none",
    isUser && "prose-invert",
    "prose-p:my-1 prose-pre:my-2 prose-code:text-sm",
    "prose-headings:my-2 prose-ul:my-1 prose-ol:my-1"
  );

  return (
    <div
      className={containerClasses}
      role="article"
      aria-label={`${role} 消息`}
    >
      {/* 头像 */}
      {!isSystem && (
        <div className={avatarClasses} aria-hidden="true">
          {avatar ? (
            <img
              src={avatar}
              alt={`${role} 头像`}
              className="w-full h-full rounded-full object-cover"
            />
          ) : (
            <span>{isUser ? "U" : "AI"}</span>
          )}
        </div>
      )}

      {/* 消息内容区域 */}
      <div className="flex flex-col gap-1 min-w-0">
        {/* 消息气泡 */}
        <div className={bubbleClasses}>
          {streaming ? (
            <div data-streaming="true" aria-live="polite" aria-atomic="false">
              {renderContent ? renderContent(content) : content}
            </div>
          ) : (
            <div className={markdownClasses}>
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeHighlight]}
              >
                {content}
              </ReactMarkdown>
            </div>
          )}
        </div>

        {/* 时间戳 */}
        {timestamp && !isSystem && (
          <div
            className={cn("text-xs text-gray-500 px-1", isUser && "text-right")}
            aria-label={`发送时间: ${formatTime(timestamp)}`}
          >
            {formatTime(timestamp)}
          </div>
        )}
      </div>
    </div>
  );
}
