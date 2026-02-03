import { useState } from "react";
import { ChatContainer, MessageInput, type ChatMessage } from "@proton-ui/core";
import { StreamingText } from "@proton-ui/streaming";
import VirtualizedDemo from "./VirtualizedDemo";
import { ThemeToggle } from "./ThemeToggle";
import { FontTest } from "./FontTest";
import PixelEffectsShowcase from "./PixelEffectsShowcase";
import PixelEffectsShowcaseEnhanced from "./PixelEffectsShowcaseEnhanced";
import { ButtonShowcase } from "./ButtonShowcase";
import { InputShowcase } from "./InputShowcase";
import { CardShowcase } from "./CardShowcase";
import { MessageShowcase } from "./MessageShowcase";
import { ChatContainerShowcase } from "./ChatContainerShowcase";
import { ThemeGallery } from "./ThemeGallery";

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
  // 所有 hooks 必须在组件顶层调用
  const [view, setView] = useState<
    | "normal"
    | "virtualized"
    | "fonttest"
    | "pixeleffects"
    | "pixeleffectsshowcase"
    | "pixeleffectsenhanced"
    | "buttonshowcase"
    | "inputshowcase"
    | "cardshowcase"
    | "messageshowcase"
    | "chatshowcase"
    | "themegallery"
  >("normal");

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "1",
      role: "assistant",
      content: "你好！我是 AI 助手，有什么可以帮助你的吗？",
      timestamp: new Date(),
    },
  ]);
  const [isStreaming, setIsStreaming] = useState(false);

  // 条件渲染放在 hooks 之后
  if (view === "buttonshowcase") {
    return (
      <div className="relative min-h-screen">
        <button
          onClick={() => setView("normal")}
          className="absolute top-4 right-4 z-10 px-4 py-2 rounded-lg"
          style={{
            backgroundColor: "var(--color-accent)",
            color: "var(--color-bg-primary)",
          }}
        >
          返回主页
        </button>
        <ButtonShowcase />
      </div>
    );
  }

  if (view === "inputshowcase") {
    return (
      <div className="relative min-h-screen">
        <button
          onClick={() => setView("normal")}
          className="absolute top-4 right-4 z-10 px-4 py-2 rounded-lg"
          style={{
            backgroundColor: "var(--color-accent)",
            color: "var(--color-bg-primary)",
          }}
        >
          返回主页
        </button>
        <InputShowcase />
      </div>
    );
  }

  if (view === "cardshowcase") {
    return (
      <div className="relative min-h-screen">
        <button
          onClick={() => setView("normal")}
          className="absolute top-4 right-4 z-10 px-4 py-2 rounded-lg"
          style={{
            backgroundColor: "var(--color-accent)",
            color: "var(--color-bg-primary)",
          }}
        >
          返回主页
        </button>
        <CardShowcase />
      </div>
    );
  }

  if (view === "messageshowcase") {
    return (
      <div className="relative min-h-screen">
        <button
          onClick={() => setView("normal")}
          className="absolute top-4 right-4 z-10 px-4 py-2 rounded-lg"
          style={{
            backgroundColor: "var(--color-accent)",
            color: "var(--color-bg-primary)",
          }}
        >
          返回主页
        </button>
        <MessageShowcase />
      </div>
    );
  }

  if (view === "chatshowcase") {
    return (
      <div className="relative min-h-screen">
        <button
          onClick={() => setView("normal")}
          className="absolute top-4 right-4 z-10 px-4 py-2 rounded-lg"
          style={{
            backgroundColor: "var(--color-accent)",
            color: "var(--color-bg-primary)",
          }}
        >
          返回主页
        </button>
        <ChatContainerShowcase />
      </div>
    );
  }

  if (view === "themegallery") {
    return (
      <div className="relative min-h-screen">
        <button
          onClick={() => setView("normal")}
          className="absolute top-4 right-4 z-10 px-4 py-2 rounded-lg"
          style={{
            backgroundColor: "var(--color-accent)",
            color: "var(--color-bg-primary)",
          }}
        >
          返回主页
        </button>
        <ThemeGallery />
      </div>
    );
  }

  if (view === "pixeleffectsenhanced") {
    return (
      <div className="relative min-h-screen">
        <button
          onClick={() => setView("normal")}
          className="fixed top-4 right-4 z-50 px-4 py-2 rounded-lg shadow-lg"
          style={{
            backgroundColor: "var(--color-accent)",
            color: "var(--color-bg-primary)",
          }}
        >
          返回主页
        </button>
        <PixelEffectsShowcaseEnhanced />
      </div>
    );
  }

  if (view === "pixeleffectsshowcase") {
    return (
      <div className="relative min-h-screen">
        <button
          onClick={() => setView("normal")}
          className="absolute top-4 right-4 z-10 px-4 py-2 rounded-lg"
          style={{
            backgroundColor: "var(--color-accent)",
            color: "var(--color-bg-primary)",
          }}
        >
          返回主页
        </button>
        <PixelEffectsShowcase />
      </div>
    );
  }

  if (view === "pixeleffects") {
    return (
      <div className="relative min-h-screen">
        <button
          onClick={() => setView("normal")}
          className="absolute top-4 right-4 z-10 px-4 py-2 rounded-lg"
          style={{
            backgroundColor: "var(--color-accent)",
            color: "var(--color-bg-primary)",
          }}
        >
          返回主页
        </button>
        <PixelEffectsShowcase />
      </div>
    );
  }

  if (view === "fonttest") {
    return (
      <div className="relative min-h-screen">
        <button
          onClick={() => setView("normal")}
          className="absolute top-4 right-4 z-10 px-4 py-2 rounded-lg"
          style={{
            backgroundColor: "var(--color-accent)",
            color: "var(--color-bg-primary)",
          }}
        >
          返回主页
        </button>
        <FontTest />
      </div>
    );
  }

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

  const handleSend = (message: string) => {
    // 添加用户消息
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: "user",
      content: message,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);

    // 立即添加 AI 消息占位符（显示加载点）
    const aiMessageId = (Date.now() + 1).toString();
    const aiMessage: ChatMessage = {
      id: aiMessageId,
      role: "assistant",
      content: "", // 空内容会显示加载点
      timestamp: new Date(),
      streaming: true,
      renderContent: (content) => (
        <StreamingText
          content={content}
          className=""
          batchSize={5}
          maxFPS={60}
          enableVirtualCompletion
        />
      ),
    };
    setMessages((prev) => [...prev, aiMessage]);

    // 模拟 AI 思考延迟（2秒后开始输出）
    setTimeout(() => {
      setIsStreaming(true);

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
    }, 2000); // 2秒思考时间
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
        <div className="flex gap-3">
          <ThemeToggle />
          <button
            onClick={() => setView("themegallery")}
            className="px-4 py-2 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white rounded-lg hover:opacity-90 font-bold"
          >
            🎨 主题画廊
          </button>
          <button
            onClick={() => setView("buttonshowcase")}
            className="px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700"
          >
            💎 按钮展示
          </button>
          <button
            onClick={() => setView("inputshowcase")}
            className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700"
          >
            💎 输入框展示
          </button>
          <button
            onClick={() => setView("cardshowcase")}
            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
          >
            💎 卡片展示
          </button>
          <button
            onClick={() => setView("messageshowcase")}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
          >
            💬 消息展示
          </button>
          <button
            onClick={() => setView("chatshowcase")}
            className="px-4 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700"
          >
            💬 聊天容器
          </button>
          <button
            onClick={() => setView("pixeleffectsenhanced")}
            className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-pink-500 text-white rounded-lg hover:opacity-90 font-bold"
          >
            🖼️ 图片滤镜
          </button>
          <button
            onClick={() => setView("pixeleffectsshowcase")}
            className="px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700"
          >
            ✨ 像素特效
          </button>
          <button
            onClick={() => setView("fonttest")}
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            字体测试
          </button>
          <button
            onClick={() => setView("virtualized")}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            虚拟滚动
          </button>
        </div>
      </header>

      {/* 对话容器 */}
      <div className="flex-1 overflow-hidden">
        <ChatContainer
          messages={messages}
          messageMaxWidth={400}
          className="h-full"
        />
      </div>

      {/* 输入框 */}
      <MessageInput
        onSend={handleSend}
        disabled={isStreaming}
        loading={isStreaming}
        placeholder="输入消息... (Enter 发送，Shift+Enter 换行)"
        maxLength={500}
      />
    </div>
  );
}
