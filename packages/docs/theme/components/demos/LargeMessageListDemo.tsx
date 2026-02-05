import { ChatContainer } from "@proton-ui/core";

/**
 * 大量消息列表演示组件
 *
 * 展示 ChatContainer 处理大量消息的能力
 */
export function LargeMessageListDemo() {
  // 生成 50 条测试消息
  const generateMessages = (count: number) => {
    const messages = [];
    for (let i = 0; i < count; i++) {
      messages.push({
        id: `${i}`,
        role: (i % 2 === 0 ? "user" : "assistant") as "user" | "assistant",
        content: `这是第 ${i + 1} 条消息`,
        timestamp: new Date(Date.now() - (count - i) * 60000),
      });
    }
    return messages;
  };

  const messages = generateMessages(50);

  return (
    <div className="h-96 border rounded-lg overflow-hidden">
      <ChatContainer messages={messages} />
    </div>
  );
}

// 添加 default export 以支持 Rspress globalComponents
export default LargeMessageListDemo;
