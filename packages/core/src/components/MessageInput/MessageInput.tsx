import { useState, KeyboardEvent } from "react";

import { cn } from "../../utils/cn";
import { Button } from "../Button";

import type { MessageInputProps } from "./types";

/**
 * MessageInput 组件
 *
 * 用于输入和发送消息，支持快捷键（Enter 发送，Shift+Enter 换行）。
 *
 * @example
 * ```tsx
 * <MessageInput
 *   placeholder="输入消息..."
 *   onSend={(message) => console.log('发送:', message)}
 * />
 * ```
 */
export function MessageInput({
  placeholder = "输入消息...",
  sendButtonText = "发送",
  disabled = false,
  loading = false,
  onSend,
  onChange,
  className,
  maxLength,
}: MessageInputProps) {
  const [value, setValue] = useState("");

  // 处理输入变化
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    onChange?.(newValue);
  };

  // 处理发送
  const handleSend = () => {
    const trimmedValue = value.trim();
    if (trimmedValue && !disabled && !loading) {
      onSend?.(trimmedValue);
      setValue("");
      onChange?.("");
    }
  };

  // 处理键盘事件
  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    // Enter 发送，Shift+Enter 换行
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const isDisabled = disabled || loading;
  const canSend = value.trim().length > 0 && !isDisabled;

  return (
    <div
      className={cn(
        "flex gap-2 p-4 border-t border-gray-200 bg-white dark:bg-gray-900 dark:border-gray-700",
        className
      )}
    >
      {/* 输入框 */}
      <textarea
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        disabled={isDisabled}
        maxLength={maxLength}
        rows={1}
        className={cn(
          "flex-1 resize-none rounded-lg px-4 py-2",
          "border border-gray-300 dark:border-gray-600",
          "bg-white dark:bg-gray-800",
          "text-gray-900 dark:text-gray-100",
          "placeholder-gray-400 dark:placeholder-gray-500",
          "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
          "disabled:bg-gray-100 dark:disabled:bg-gray-700 disabled:cursor-not-allowed",
          "transition-colors"
        )}
        aria-label="消息输入框"
        aria-describedby={maxLength ? "char-count" : undefined}
      />

      {/* 字符计数 */}
      {maxLength && (
        <div
          id="char-count"
          className="text-xs text-gray-500 self-end pb-2"
          aria-live="polite"
        >
          {value.length}/{maxLength}
        </div>
      )}

      {/* 发送按钮 */}
      <Button
        onClick={handleSend}
        disabled={!canSend}
        loading={loading}
        variant="primary"
        className="self-end"
        aria-label={sendButtonText}
      >
        {sendButtonText}
      </Button>
    </div>
  );
}
