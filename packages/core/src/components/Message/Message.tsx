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
  maxWidth = 70,
  className,
  pixelTheme,
  decoration,
}: MessageProps) {
  // 根据角色确定样式
  const isUser = role === "user";
  const isAssistant = role === "assistant";
  const isSystem = role === "system";

  // 判断是否显示加载点（内容为空且正在流式渲染）
  const showLoadingDot = streaming && content.length === 0;

  // 容器样式：用户消息右对齐，AI 消息左对齐
  const containerClasses = cn(
    "flex gap-3 mb-4",
    isUser && "flex-row-reverse",
    isSystem && "justify-center",
    "font-pixel antialiased", // Add global pixel font
    className
  );

  // 动态主题样式
  const getThemeStyles = () => {
    if (!pixelTheme) return {};

    switch (pixelTheme) {
      case "retro-futurism":
        return {
          backgroundColor: isUser ? "#4ECDC4" : "#252836",
          borderColor: isUser ? "#4ECDC4" : "#4ECDC4",
          color: isUser ? "#252836" : "#E8E4DB",
          boxShadow: "4px 4px 0px 0px rgba(78,205,196,0.3)",
        };
      case "neo-tokyo":
        return {
          background: isUser
            ? "rgba(255, 107, 157, 0.8)"
            : "rgba(37, 40, 54, 0.5)",
          borderColor: "#FF6B9D",
          color: isUser ? "#FFFFFF" : "#FF6B9D",
          boxShadow: isUser
            ? "0 0 15px rgba(255,107,157,0.5)"
            : "0 0 10px rgba(255,107,157,0.2)",
          backdropFilter: "blur(5px)",
        };
      // Add other themes as needed... defaults below
      default:
        return {};
    }
  };

  const themeStyles = getThemeStyles();

  // 消息气泡样式
  const bubbleClasses = cn(
    "rounded-none border-2 px-4 py-3 break-words relative overflow-hidden transition-all duration-200", // Pixel base
    !pixelTheme &&
      isUser &&
      "bg-[var(--pixel-accent-cyan)] text-[var(--pixel-bg-primary)] border-[var(--pixel-accent-cyan)] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)]",
    !pixelTheme &&
      isAssistant &&
      "bg-[var(--pixel-bg-secondary)] text-[var(--pixel-text-primary)] border-[var(--pixel-border)] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)]",
    !pixelTheme &&
      isSystem &&
      "bg-[var(--pixel-bg-tertiary)] text-[var(--pixel-text-muted)] border-dashed border-[var(--pixel-text-muted)] text-sm text-center",
    // 如果显示加载点，使用固定的最小尺寸
    showLoadingDot &&
      "min-w-[60px] min-h-[40px] flex items-center justify-center"
  );

  // 动态设置最大宽度
  const bubbleStyle = {
    maxWidth: `${maxWidth}%`,
    ...themeStyles,
  };

  // 头像样式
  const avatarClasses = cn(
    "w-10 h-10 border-2 flex-shrink-0 flex items-center justify-center text-sm font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,0.5)]",
    isUser &&
      "bg-[var(--pixel-accent-cyan)] text-[var(--pixel-bg-primary)] border-[var(--pixel-accent-cyan)]",
    isAssistant &&
      "bg-[var(--pixel-bg-secondary)] text-[var(--pixel-text-primary)] border-[var(--pixel-border)]",
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
    "prose prose-sm max-w-none prose-invert font-pixel", // Force dark mode prose style for pixel contrast
    "prose-p:my-1 prose-pre:my-2 prose-code:text-xs prose-code:font-mono",
    "prose-headings:my-2 prose-ul:my-1 prose-ol:my-1"
  );

  return (
    <div
      className={containerClasses}
      role="article"
      aria-label={`${role} 消息`}
    >
      {/* 头像 - AI (Left) */}
      {!isSystem && isAssistant && (
        <div className={avatarClasses} aria-hidden="true">
          {avatar ? (
            <img
              src={avatar}
              alt={`${role} 头像`}
              className="w-full h-full object-cover" // Removed rounded-full
            />
          ) : (
            <span>AI</span>
          )}
        </div>
      )}

      {/* 消息内容区域 */}
      <div
        className={cn(
          "flex flex-col gap-1 min-w-0",
          isUser ? "items-end" : "items-start"
        )}
      >
        {/* 消息气泡 */}
        <div className={bubbleClasses} style={bubbleStyle}>
          {/* Decorations */}
          {(decoration === "scanline" || pixelTheme === "retro-futurism") && (
            <div
              className="absolute inset-0 pointer-events-none opacity-10"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg, transparent, transparent 2px, currentColor 2px, currentColor 4px)",
              }}
            />
          )}

          {showLoadingDot ? (
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
          ) : streaming ? (
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
            className={cn(
              "text-[10px] text-[var(--pixel-text-muted)] px-1 uppercase tracking-wider"
            )}
            aria-label={`发送时间: ${formatTime(timestamp)}`}
          >
            {formatTime(timestamp)}
          </div>
        )}
      </div>

      {/* 头像 - User (Right) */}
      {!isSystem && isUser && (
        <div className={avatarClasses} aria-hidden="true">
          {avatar ? (
            <img
              src={avatar}
              alt={`${role} 头像`}
              className="w-full h-full object-cover" // Removed rounded-full
            />
          ) : (
            <span>U</span>
          )}
        </div>
      )}
    </div>
  );
}
