# @proton-ui/streaming

高性能流式渲染引擎，专为 AI 对话场景设计。

## 特性

- 🚀 基于 RAF 的批处理渲染
- 📊 帧率控制和性能监控
- 🎯 虚拟补全算法
- ⚡️ 零阻塞主线程
- 🔄 支持暂停和恢复

## 安装

```bash
pnpm add @proton-ui/streaming
```

## 使用

```tsx
import { useStreamingText, StreamingText } from "@proton-ui/streaming";

function MyComponent() {
  const { displayedContent, isStreaming } = useStreamingText(sourceContent);

  return <div>{displayedContent}</div>;
}
```
