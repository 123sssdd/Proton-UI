import { useState, useRef } from "react";
import {
  ChatContainer,
  MessageInput,
  type ChatMessage,
} from "@proton-ui/components";
import { StreamingText } from "@proton-ui/streaming";

/**
 * FullChatDemo - 完整对话演示
 *
 * 集成所有对话组件的完整示例：
 * - ChatContainer: 消息列表容器
 * - Message: 消息组件（通过 ChatContainer）
 * - MessageInput: 消息输入框
 * - StreamingText: 流式文本渲染
 *
 * 功能：
 * - 发送消息
 * - 模拟 AI 流式回复
 * - 消息历史管理
 * - 错误处理
 * - 加载状态
 */
export function FullChatDemo() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      role: "assistant",
      content: "你好！我是 AI 助手。试试向我发送消息吧！",
      timestamp: new Date(),
    },
  ]);
  const [isStreaming, setIsStreaming] = useState(false);
  const [streamingContent, setStreamingContent] = useState("");
  const streamingIdRef = useRef<string>("");

  // 模拟 AI 回复的文本库
  const aiResponses = [
    "这是一个很好的问题！让我来为你解答。\n\n首先，我们需要理解问题的核心。然后，我会提供一些实用的建议。",
    "我理解你的意思。这里有几个要点：\n\n1. **第一点**：这是最重要的\n2. **第二点**：这也很关键\n3. **第三点**：不要忽视这个\n\n希望这些信息对你有帮助！",
    "让我用代码示例来说明：\n\n```javascript\nfunction example() {\n  console.log('Hello, World!');\n  return true;\n}\n```\n\n这样就清楚多了，对吧？",
    "这是一个常见的场景。我建议你可以这样做：\n\n- 首先，分析问题\n- 然后，制定计划\n- 最后，执行方案\n\n记住，*耐心*和**坚持**是成功的关键！",
    "很高兴能帮到你！如果还有其他问题，随时问我。我会尽力为你提供最好的答案。😊",
  ];

  // 处理发送消息
  const handleSend = (content: string) => {
    // 添加用户消息
    const userMessage = {
      id: `user-${Date.now()}`,
      role: "user" as const,
      content,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);

    // 模拟 AI 流式回复
    simulateAIResponse();
  };

  // 模拟 AI 流式回复
  const simulateAIResponse = () => {
    setIsStreaming(true);
    setStreamingContent("");
    streamingIdRef.current = `ai-${Date.now()}`;

    // 随机选择一个回复
    const response =
      aiResponses[Math.floor(Math.random() * aiResponses.length)]!;

    // 模拟流式输出
    let index = 0;
    const interval = setInterval(() => {
      if (index < response.length) {
        setStreamingContent(response.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
        // 流式完成，添加完整消息
        setMessages((prev) => [
          ...prev,
          {
            id: streamingIdRef.current,
            role: "assistant" as const,
            content: response,
            timestamp: new Date(),
          },
        ]);
        setIsStreaming(false);
        setStreamingContent("");
      }
    }, 30);
  };

  // 构建显示的消息列表
  const displayMessages = isStreaming
    ? [
        ...messages,
        {
          id: "streaming",
          role: "assistant" as const,
          content: streamingContent,
          streaming: true,
          renderContent: (text: string) => (
            <StreamingText content={text} enableVirtualCompletion />
          ),
          timestamp: new Date(),
        },
      ]
    : messages;

  return (
    <div className="w-full">
      <div className="border rounded-lg overflow-hidden bg-white shadow-sm">
        {/* 头部 */}
        <div className="px-4 py-3 border-b bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold">
              AI
            </div>
            <div>
              <h3 className="font-medium text-gray-900">AI 助手</h3>
              <p className="text-xs text-gray-500">
                {isStreaming ? "正在输入..." : "在线"}
              </p>
            </div>
          </div>
        </div>

        {/* 消息容器 */}
        <div className="h-96">
          <ChatContainer messages={displayMessages} loading={false} />
        </div>

        {/* 输入框 */}
        <MessageInput
          placeholder="输入消息... (Enter 发送，Shift+Enter 换行)"
          loading={isStreaming}
          onSend={handleSend}
        />
      </div>

      {/* 提示信息 */}
      <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
        <p className="text-xs text-blue-800">
          💡 <strong>提示</strong>：这是一个完整的对话演示，集成了
          ChatContainer、Message、MessageInput 和 StreamingText
          组件。试试发送消息，体验流式 AI 回复！
        </p>
      </div>
    </div>
  );
}

// 添加 default export 以支持 Rspress globalComponents
export default FullChatDemo;
