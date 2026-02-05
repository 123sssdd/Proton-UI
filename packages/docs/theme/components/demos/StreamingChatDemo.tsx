import { ChatContainer } from "@proton-ui/core";
import { StreamingText } from "@proton-ui/streaming";
import { useState, useEffect } from "react";

/**
 * 流式对话演示组件
 *
 * 模拟真实的 AI 对话流式渲染效果
 */
export function StreamingChatDemo() {
  const [messages, setMessages] = useState<
    Array<{
      id: string;
      role: "user" | "assistant";
      content: string;
      timestamp: Date;
      streaming?: boolean;
      renderContent?: (text: string) => React.ReactNode;
    }>
  >([
    {
      id: "1",
      role: "user",
      content: "请介绍一下流式渲染",
      timestamp: new Date(),
    },
  ]);
  const [streamingContent, setStreamingContent] = useState("");

  const fullText = `流式渲染是一种逐步显示内容的技术，特别适合 AI 对话场景。

主要优势：
- **即时反馈**：用户无需等待完整响应
- **流畅体验**：内容逐字显示，更自然
- **性能优化**：增量渲染，降低内存占用

实现方式：
1. 使用 SSE 或 WebSocket 接收数据流
2. 配合 StreamingText 组件渲染
3. 自动处理 Markdown 标签补全`;

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setStreamingContent(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 30);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (streamingContent) {
      setMessages([
        messages[0]!,
        {
          id: "2",
          role: "assistant" as const,
          content: streamingContent,
          streaming: true,
          renderContent: (text: string) => (
            <StreamingText content={text} enableVirtualCompletion />
          ),
          timestamp: new Date(),
        },
      ]);
    }
  }, [streamingContent]);

  return (
    <div className="h-96 border rounded-lg overflow-hidden">
      <ChatContainer messages={messages} />
    </div>
  );
}

// 添加 default export 以支持 Rspress globalComponents
export default StreamingChatDemo;
