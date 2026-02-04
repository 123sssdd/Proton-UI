import { Message } from "@proton-ui/core";
import { StreamingText } from "@proton-ui/streaming";
import { useState, useEffect } from "react";

/**
 * 流式消息演示组件
 *
 * 模拟 AI 逐字生成回复的效果
 */
export function StreamingMessageDemo() {
  const [content, setContent] = useState("");
  const fullText =
    "这是一段流式渲染的 AI 回复，会逐字显示出来，提供更好的用户体验。";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setContent(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white p-4 rounded-lg">
      <Message
        role="assistant"
        content={content}
        streaming
        renderContent={(text) => (
          <StreamingText content={text} enableVirtualCompletion />
        )}
        timestamp={new Date()}
      />
    </div>
  );
}
