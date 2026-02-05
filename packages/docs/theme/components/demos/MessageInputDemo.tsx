import { useState } from "react";
import { MessageInput } from "@proton-ui/core";

/**
 * MessageInputDemo - MessageInput 组件演示
 *
 * 展示各种 MessageInput 的使用场景
 */
export function MessageInputDemo() {
  const [messages, setMessages] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSend = (message: string) => {
    setMessages((prev) => [...prev, `你: ${message}`]);

    // 模拟 AI 回复
    setLoading(true);
    setTimeout(() => {
      setMessages((prev) => [...prev, `AI: 收到你的消息"${message}"`]);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="space-y-6">
      {/* 基础输入框 */}
      <div>
        <h4 className="text-sm font-medium text-gray-700 mb-2">基础输入框</h4>
        <div className="border rounded-lg overflow-hidden bg-white">
          <MessageInput
            placeholder="输入消息..."
            onSend={(msg) => console.log("发送:", msg)}
          />
        </div>
      </div>

      {/* 带字符计数 */}
      <div>
        <h4 className="text-sm font-medium text-gray-700 mb-2">
          字符计数（最多 100 字）
        </h4>
        <div className="border rounded-lg overflow-hidden bg-white">
          <MessageInput
            placeholder="输入消息..."
            maxLength={100}
            onSend={(msg) => console.log("发送:", msg)}
          />
        </div>
      </div>

      {/* 禁用状态 */}
      <div>
        <h4 className="text-sm font-medium text-gray-700 mb-2">禁用状态</h4>
        <div className="border rounded-lg overflow-hidden bg-white">
          <MessageInput
            placeholder="输入框已禁用"
            disabled
            onSend={(msg) => console.log("发送:", msg)}
          />
        </div>
      </div>

      {/* 完整对话示例 */}
      <div>
        <h4 className="text-sm font-medium text-gray-700 mb-2">
          完整对话示例（Enter 发送，Shift+Enter 换行）
        </h4>
        <div className="border rounded-lg overflow-hidden bg-white">
          {/* 消息列表 */}
          <div className="h-48 overflow-y-auto p-4 space-y-2 bg-gray-50">
            {messages.length === 0 ? (
              <p className="text-sm text-gray-400 text-center py-8">
                还没有消息，试试发送一条吧！
              </p>
            ) : (
              messages.map((msg, index) => (
                <div
                  key={index}
                  className={`text-sm p-2 rounded ${
                    msg.startsWith("你:")
                      ? "bg-blue-100 text-blue-900 ml-auto max-w-xs"
                      : "bg-white text-gray-900 mr-auto max-w-xs"
                  }`}
                >
                  {msg}
                </div>
              ))
            )}
          </div>
          {/* 输入框 */}
          <MessageInput
            placeholder="输入消息..."
            loading={loading}
            onSend={handleSend}
          />
        </div>
      </div>
    </div>
  );
}

// 添加 default export 以支持 Rspress globalComponents
export default MessageInputDemo;
