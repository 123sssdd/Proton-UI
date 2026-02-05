import { ChatContainer } from "@proton-ui/core";

/**
 * 基础对话演示组件
 */
export function BasicChatDemo() {
  const messages = [
    {
      id: "1",
      role: "user" as const,
      content: "你好，AI！",
      timestamp: new Date(),
    },
    {
      id: "2",
      role: "assistant" as const,
      content: "你好！有什么可以帮助你的吗？",
      timestamp: new Date(),
    },
    {
      id: "3",
      role: "user" as const,
      content: "请介绍一下你自己",
      timestamp: new Date(),
    },
    {
      id: "4",
      role: "assistant" as const,
      content: "我是一个 AI 助手，可以回答问题、提供建议和帮助解决问题。",
      timestamp: new Date(),
    },
  ];

  return (
    <div className="h-96 border rounded-lg overflow-hidden">
      <ChatContainer messages={messages} />
    </div>
  );
}

// 添加 default export 以支持 Rspress globalComponents
export default BasicChatDemo;
