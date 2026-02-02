import { useState } from "react";
import { ChatContainer, MessageInput, type ChatMessage } from "@proton-ui/core";
import { StreamingText } from "@proton-ui/streaming";
import VirtualizedDemo from "./VirtualizedDemo";

/**
 * 模拟 AI 流式响应
 */
function simulateAIResponse(
  userMessage: string,
  onChunk: (chunk: string) => void,
  onComplete: () => void
) {
  const responses = [
    "你好！我是 AI 助手，很高兴为你服务。",
    "这是一个使用 Proton UI 构建的对话示例。",
    "我可以帮你回答问题、提供建议或者进行对话。",
    "你可以尝试输入任何内容，我会尽力回复你。",
  ];

  // 根据用户消息选择响应
  const response =
    responses[Math.floor(Math.random() * responses.length)] +
    `\n\n你刚才说："${userMessage}"`;

  let currentIndex = 0;
  const chunkSize = 3; // 每次发送 3 个字符

  const interval = setInterval(() => {
    if (currentIndex < response.length) {
      const chunk = response.slice(
        currentIndex,
        Math.min(currentIndex + chunkSize, response.length)
      );
      onChunk(chunk);
      currentIndex += chunkSize;
    } else {
      clearInterval(interval);
      onComplete();
    }
  }, 50); // 每 50ms 发送一次

  return () => clearInterval(interval);
}

export default function App() {
  const [view, setView] = useState<"normal" | "virtualized">("normal");

  if (view === "virtualized") {
    return (
      <div className="relative">
        <button
          onClick={() => setView("normal")}
          className="absolute top-4 right-4 z-10 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          切换到标准模式
        </button>
        <VirtualizedDemo />
      </div>
    );
  }
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "1",
      role: "assistant",
      content: "你好！我是 AI 助手，有什么可以帮助你的吗？",
      timestamp: new Date(),
    },
  ]);
  const [loading, setLoading] = useState(false);
  const [isStreaming, setIsStreaming] = useState(false);

  const handleSend = (message: string) => {
    // 添加用户消息
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: "user",
      content: message,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);

    // 开始流式响应
    setLoading(true);
    setIsStreaming(true);

    // 添加 AI 消息占位符
    const aiMessageId = (Date.now() + 1).toString();
    const aiMessage: ChatMessage = {
      id: aiMessageId,
      role: "assistant",
      content: "",
      timestamp: new Date(),
      streaming: true,
      renderContent: (content) => (
        <StreamingText
          content={content}
          batchSize={5}
          maxFPS={60}
          enableVirtualCompletion
        />
      ),
    };
    setMessages((prev) => [...prev, aiMessage]);

    // 模拟 AI 响应
    const cleanup = simulateAIResponse(
      message,
      (chunk) => {
        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === aiMessageId
              ? { ...msg, content: msg.content + chunk }
              : msg
          )
        );
      },
      () => {
        setLoading(false);
        setIsStreaming(false);
        // 更新消息为非流式状态
        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === aiMessageId
              ? { ...msg, streaming: false, renderContent: undefined }
              : msg
          )
        );
      }
    );

    return cleanup;
  };

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      {/* 头部 */}
      <header className="bg-white border-b border-gray-200 px-6 py-4 shadow-sm flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Proton UI Playground
          </h1>
          <p className="text-sm text-gray-600 mt-1">
            AI 对话组件演示 - 支持流式渲染和 Markdown
          </p>
        </div>
        <button
          onClick={() => setView("virtualized")}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          切换到虚拟滚动模式
        </button>
      </header>

      {/* 对话容器 */}
      <div className="flex-1 overflow-hidden">
        <ChatContainer
          messages={messages}
          loading={loading && !isStreaming}
          className="h-full"
        />
      </div>

      {/* 输入框 */}
      <MessageInput
        onSend={handleSend}
        disabled={loading}
        loading={loading}
        placeholder="输入消息... (Enter 发送，Shift+Enter 换行)"
        maxLength={500}
      />
    </div>
  );
}
