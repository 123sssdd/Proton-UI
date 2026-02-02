import { useState } from "react";
import {
  VirtualizedChatContainer,
  MessageInput,
  type ChatMessage,
} from "@proton-ui/core";

/**
 * 虚拟滚动演示页面
 * 展示大量消息时的性能优化
 */
export default function VirtualizedDemo() {
  // 生成大量测试消息
  const generateMessages = (count: number): ChatMessage[] => {
    const messages: ChatMessage[] = [];
    for (let i = 0; i < count; i++) {
      messages.push({
        id: `${i}`,
        role: i % 2 === 0 ? "user" : "assistant",
        content: `这是第 ${i + 1} 条消息。${
          i % 2 === 0
            ? "用户发送的消息内容。"
            : "AI 助手的回复内容，可能包含更多的文字和信息。"
        }`,
        timestamp: new Date(Date.now() - (count - i) * 60000),
      });
    }
    return messages;
  };

  const [messages, setMessages] = useState<ChatMessage[]>(
    generateMessages(1000)
  ); // 1000 条消息
  const [loading, setLoading] = useState(false);

  const handleSend = (message: string) => {
    // 添加用户消息
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: "user",
      content: message,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);

    // 模拟 AI 响应
    setLoading(true);
    setTimeout(() => {
      const aiMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: `收到你的消息："${message}"。这是 AI 的回复。`,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMessage]);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      {/* 头部 */}
      <header className="bg-white border-b border-gray-200 px-6 py-4 shadow-sm">
        <h1 className="text-2xl font-bold text-gray-900">
          虚拟滚动演示 - {messages.length} 条消息
        </h1>
        <p className="text-sm text-gray-600 mt-1">
          使用 react-virtuoso 实现虚拟滚动，只渲染可见区域的消息
        </p>
      </header>

      {/* 对话容器 */}
      <div className="flex-1 overflow-hidden">
        <VirtualizedChatContainer
          messages={messages}
          loading={loading}
          className="h-full"
        />
      </div>

      {/* 输入框 */}
      <MessageInput
        onSend={handleSend}
        disabled={loading}
        loading={loading}
        placeholder="输入消息... (Enter 发送)"
        maxLength={500}
      />
    </div>
  );
}
