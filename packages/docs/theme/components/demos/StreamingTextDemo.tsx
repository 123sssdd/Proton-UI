import { useState, useEffect } from "react";
import { StreamingText } from "@proton-ui/streaming";

/**
 * StreamingTextDemo - StreamingText 组件演示
 *
 * 展示流式文本渲染的各种功能：
 * - 基础流式效果
 * - 虚拟补全功能
 * - 参数调整（batchSize, maxFPS）
 * - 性能监控
 */
export function StreamingTextDemo() {
  const [content1, setContent1] = useState("");
  const [content2, setContent2] = useState("");
  const [content3, setContent3] = useState("");
  const [batchSize, setBatchSize] = useState(5);
  const [maxFPS, setMaxFPS] = useState(30);
  const [showPerf, setShowPerf] = useState(false);

  const fullText = `这是一段流式渲染的文本示例。

## 主要特点

- **逐字显示**：文本会逐字显示，提供流畅的视觉体验
- **Markdown 支持**：支持 **粗体**、*斜体*、\`代码\` 等格式
- **虚拟补全**：自动补全未闭合的 Markdown 标签

## 代码示例

\`\`\`javascript
function hello() {
  console.log("Hello, World!");
}
\`\`\`

## 列表支持

1. 第一项
2. 第二项
3. 第三项

流式渲染非常适合 AI 对话场景！`;

  // 演示1：基础流式效果
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setContent1(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 30);

    return () => clearInterval(timer);
  }, []);

  // 演示2：虚拟补全演示
  useEffect(() => {
    const incompleteText = "这是一段 **未完成的粗体文本";
    let index = 0;
    const timer = setInterval(() => {
      if (index < incompleteText.length) {
        setContent2(incompleteText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  // 演示3：可调参数演示
  useEffect(() => {
    const text =
      "这是一段可以调整参数的流式文本。你可以调整 batchSize 和 maxFPS 来观察不同的渲染效果。";
    let index = 0;
    const timer = setInterval(() => {
      if (index < text.length) {
        setContent3(text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 30);

    return () => clearInterval(timer);
  }, [batchSize, maxFPS]);

  return (
    <div className="space-y-8">
      {/* 基础流式效果 */}
      <div>
        <h4 className="text-sm font-medium text-gray-700 mb-2">基础流式效果</h4>
        <div className="border rounded-lg p-4 bg-white">
          <StreamingText content={content1} />
        </div>
      </div>

      {/* 虚拟补全功能 */}
      <div>
        <h4 className="text-sm font-medium text-gray-700 mb-2">虚拟补全功能</h4>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-xs text-gray-500 mb-2">未启用虚拟补全</p>
            <div className="border rounded-lg p-4 bg-white">
              <StreamingText
                content={content2}
                enableVirtualCompletion={false}
              />
            </div>
          </div>
          <div>
            <p className="text-xs text-gray-500 mb-2">已启用虚拟补全</p>
            <div className="border rounded-lg p-4 bg-white">
              <StreamingText
                content={content2}
                enableVirtualCompletion={true}
              />
            </div>
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-2">
          💡 右侧会自动补全未闭合的 Markdown 标签，避免显示异常
        </p>
      </div>

      {/* 参数调整 */}
      <div>
        <h4 className="text-sm font-medium text-gray-700 mb-2">参数调整</h4>
        <div className="space-y-4">
          {/* 控制面板 */}
          <div className="border rounded-lg p-4 bg-gray-50 space-y-3">
            <div>
              <label className="text-xs text-gray-600 block mb-1">
                Batch Size: {batchSize} 字符/帧
              </label>
              <input
                type="range"
                min="1"
                max="20"
                value={batchSize}
                onChange={(e) => setBatchSize(Number(e.target.value))}
                className="w-full"
              />
              <p className="text-xs text-gray-500 mt-1">
                每帧渲染的字符数，越大渲染越快
              </p>
            </div>
            <div>
              <label className="text-xs text-gray-600 block mb-1">
                Max FPS: {maxFPS}
              </label>
              <input
                type="range"
                min="10"
                max="60"
                value={maxFPS}
                onChange={(e) => setMaxFPS(Number(e.target.value))}
                className="w-full"
              />
              <p className="text-xs text-gray-500 mt-1">
                最大帧率，越高越流畅但消耗更多性能
              </p>
            </div>
            <div>
              <label className="flex items-center gap-2 text-xs text-gray-600">
                <input
                  type="checkbox"
                  checked={showPerf}
                  onChange={(e) => setShowPerf(e.target.checked)}
                />
                显示性能监控
              </label>
            </div>
          </div>

          {/* 渲染区域 */}
          <div className="border rounded-lg p-4 bg-white">
            <StreamingText
              content={content3}
              batchSize={batchSize}
              maxFPS={maxFPS}
              enablePerformanceMonitoring={showPerf}
            />
          </div>
        </div>
      </div>

      {/* 性能说明 */}
      <div className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded">
        <h5 className="text-sm font-medium text-blue-900 mb-2">
          ⚡ 性能优化建议
        </h5>
        <ul className="text-xs text-blue-800 space-y-1">
          <li>
            • <strong>batchSize</strong>: 推荐 5-10，平衡流畅度和性能
          </li>
          <li>
            • <strong>maxFPS</strong>: 推荐 30，足够流畅且不浪费性能
          </li>
          <li>
            • <strong>虚拟补全</strong>: 建议始终启用，避免 Markdown 显示异常
          </li>
          <li>
            • <strong>性能监控</strong>: 开发时启用，生产环境关闭
          </li>
        </ul>
      </div>
    </div>
  );
}

// 添加 default export 以支持 Rspress globalComponents
export default StreamingTextDemo;
