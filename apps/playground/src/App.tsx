import { useState, useEffect } from "react";
import {
  ChatContainer,
  MessageInput,
  type ChatMessage,
  ParticleEffect,
} from "@proton-ui/core";
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

type ViewState =
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
  | "themegallery";

export default function App() {
  const [view, setView] = useState<ViewState>("normal");
  const [reduceMotion, setReduceMotion] = useState(false);

  // Check system preference on mount
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setReduceMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "1",
      role: "assistant",
      content: "你好！我是 AI 助手，有什么可以帮助你的吗？",
      timestamp: new Date(),
    },
  ]);
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

  const renderContent = () => {
    switch (view) {
      case "buttonshowcase":
        return <ButtonShowcase />;
      case "inputshowcase":
        return <InputShowcase />;
      case "cardshowcase":
        return <CardShowcase />;
      case "messageshowcase":
        return <MessageShowcase />;
      case "chatshowcase":
        return <ChatContainerShowcase />;
      case "themegallery":
        return <ThemeGallery />;
      case "pixeleffectsenhanced":
        return <PixelEffectsShowcaseEnhanced />;
      case "pixeleffectsshowcase":
      case "pixeleffects":
        return <PixelEffectsShowcase />;
      case "fonttest":
        return <FontTest />;
      case "virtualized":
        return <VirtualizedDemo />;
      default:
        return (
          <div className="flex flex-col h-full bg-pixel-card border-x-4 border-pixel-section max-w-4xl mx-auto shadow-pixel relative">
            {/* Background particles for ambiance if motion allowed */}
            {!reduceMotion && (
              <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 z-0">
                <ParticleEffect
                  type="float"
                  count={5}
                  colors={["#0ff0fc", "#ff9ecd"]}
                  autoTrigger={true}
                  triggerInterval={2000}
                  life={{ min: 3000, max: 6000 }}
                />
              </div>
            )}
            <div className="flex-1 overflow-hidden p-4 relative z-10">
              <ChatContainer
                messages={messages}
                messageMaxWidth={400}
                className="h-full"
              />
            </div>
            <div className="p-4 border-t-4 border-pixel-section bg-pixel-bg relative z-10">
              <MessageInput
                onSend={handleSend}
                disabled={isStreaming}
                loading={isStreaming}
                placeholder="输入消息... (Enter 发送)"
                maxLength={500}
              />
            </div>
          </div>
        );
    }
  };

  const PixelButton = ({
    target, // If target is provided, clicking sets view
    onClick, // Optional custom click handler
    label,
    icon,
    active,
    variant = "default",
  }: {
    target?: ViewState;
    onClick?: () => void;
    label: string;
    icon?: string;
    active?: boolean;
    variant?: "default" | "home" | "action";
  }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleClick = () => {
      if (onClick) onClick();
      if (target) setView(target);
    };

    const baseClasses =
      "pixel-btn w-full text-left mb-2 flex items-center gap-2 relative overflow-visible";
    const activeClasses = active ? "bg-pixel-cyan text-pixel-bg" : "";
    const variantClasses = variant === "home" ? "bg-pixel-pink text-white" : "";

    return (
      <button
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`${baseClasses} ${activeClasses} ${variantClasses}`}
      >
        {icon && <span>{icon}</span>}
        {label}

        {/* Sparkle Effect on Hover */}
        {!reduceMotion && isHovered && (
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
            <ParticleEffect
              type="sparkle"
              count={3}
              colors={["#ffffff", "#ffd700"]}
              autoTrigger={true}
              triggerInterval={200}
              life={{ min: 500, max: 1000 }}
              size={{ min: 2, max: 4 }}
            />
          </div>
        )}
      </button>
    );
  };

  return (
    <div className="min-h-screen bg-pixel-bg text-pixel-text font-pixel selection:bg-pixel-cyan selection:text-pixel-bg flex flex-col">
      {/* Top Navigation Bar */}
      <header className="bg-pixel-section border-b-4 border-pixel-card py-6 px-8 shadow-pixel z-10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-3xl text-pixel-cyan drop-shadow-md tracking-wider">
              Proton UI
            </h1>
            <p className="text-xs text-pixel-muted mt-2 tracking-widest uppercase">
              Retro-Futurism AI Interface
            </p>
          </div>
          <div className="flex gap-4 items-center">
            {view !== "normal" && (
              <div className="w-auto">
                <PixelButton
                  target="normal"
                  label="首页"
                  icon="🏠"
                  variant="home"
                />
              </div>
            )}
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="flex-1 flex max-w-7xl mx-auto w-full p-8 gap-8">
        {/* Sidebar Navigation */}
        <aside className="w-64 hidden lg:block">
          <div className="sticky top-8 space-y-8">
            {/* Settings Panel */}
            <div className="bg-pixel-section p-4 border-2 border-pixel-muted shadow-pixel-sm">
              <h3 className="text-pixel-text mb-4 text-sm uppercase tracking-wider border-b-2 border-pixel-muted pb-2">
                System
              </h3>
              <div className="flex items-center justify-between text-xs mb-2">
                <span>Reduce Motion</span>
                <button
                  onClick={() => setReduceMotion(!reduceMotion)}
                  className={`w-8 h-8 flex items-center justify-center border-2 border-pixel-muted ${reduceMotion ? "bg-pixel-cyan text-pixel-bg" : "bg-pixel-bg"}`}
                >
                  {reduceMotion ? "ON" : "OFF"}
                </button>
              </div>
            </div>

            <div className="bg-pixel-section p-4 border-2 border-pixel-muted shadow-pixel-sm">
              <h3 className="text-pixel-gold mb-4 text-sm uppercase tracking-wider border-b-2 border-pixel-muted pb-2">
                Showcase Gallery
              </h3>
              <nav>
                <PixelButton
                  target="themegallery"
                  label="主题画廊"
                  icon="🎨"
                  active={view === "themegallery"}
                />
                <PixelButton
                  target="pixeleffectsenhanced"
                  label="图片滤镜"
                  icon="🖼️"
                  active={view === "pixeleffectsenhanced"}
                />
                <PixelButton
                  target="pixeleffectsshowcase"
                  label="特效系统"
                  icon="✨"
                  active={view === "pixeleffectsshowcase"}
                />
              </nav>
            </div>

            <div className="bg-pixel-section p-4 border-2 border-pixel-muted shadow-pixel-sm">
              <h3 className="text-pixel-pink mb-4 text-sm uppercase tracking-wider border-b-2 border-pixel-muted pb-2">
                Components
              </h3>
              <nav>
                <PixelButton
                  target="buttonshowcase"
                  label="Button"
                  icon="💎"
                  active={view === "buttonshowcase"}
                />
                <PixelButton
                  target="inputshowcase"
                  label="Input"
                  icon="⌨️"
                  active={view === "inputshowcase"}
                />
                <PixelButton
                  target="cardshowcase"
                  label="Card"
                  icon="🎴"
                  active={view === "cardshowcase"}
                />
                <PixelButton
                  target="messageshowcase"
                  label="Message"
                  icon="💬"
                  active={view === "messageshowcase"}
                />
                <PixelButton
                  target="chatshowcase"
                  label="Chat Container"
                  icon="📦"
                  active={view === "chatshowcase"}
                />
              </nav>
            </div>

            <div className="bg-pixel-section p-4 border-2 border-pixel-muted shadow-pixel-sm">
              <h3 className="text-pixel-cyan mb-4 text-sm uppercase tracking-wider border-b-2 border-pixel-muted pb-2">
                Labs
              </h3>
              <nav>
                <PixelButton
                  target="fonttest"
                  label="字体测试"
                  icon="Aa"
                  active={view === "fonttest"}
                />
                <PixelButton
                  target="virtualized"
                  label="虚拟滚动"
                  icon="🚀"
                  active={view === "virtualized"}
                />
              </nav>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <div className="flex-1 min-w-0">
          <div className="bg-pixel-section p-1 border-2 border-pixel-card shadow-pixel h-full rounded-sm">
            <div className="bg-pixel-bg h-full border-2 border-pixel-bg p-4 overflow-auto">
              {renderContent()}
            </div>
          </div>
        </div>
      </main>

      {/* Mobile Navigation (simplified) */}
      <div className="lg:hidden fixed bottom-4 right-4 z-50">
        <button className="pixel-btn rounded-full w-12 h-12 flex items-center justify-center bg-pixel-cyan text-pixel-bg shadow-pixel">
          ☰
        </button>
      </div>
    </div>
  );
}
