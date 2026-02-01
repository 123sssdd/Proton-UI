import { useStreamingText } from "../hooks/useStreamingText";

import type { StreamingTextProps } from "./types";

/**
 * 虚拟补全算法
 *
 *
 * 1. 维护真实内容字符串 source
 * 2. 按帧根据真实内容计算要渲染的内容 view
 * 3. 检查末尾是否有半截的 markdown 标签（如单个反引号）
 * 4. 统计 view 中各类标签的数量，如果是奇数，追加闭合标签
 *
 * @param content 真实内容
 * @returns 处理后的显示内容
 */
function applyVirtualCompletion(content: string): string {
  // 1. 检查末尾是否有半截的 markdown 标签
  const incompleteTagPatterns = [
    /`$/, // 单个反引号（可能是三个反引号的一部分）
    /``$/, // 两个反引号
    /\*$/, // 单个星号
    /_$/, // 单个下划线
    /~$/, // 单个波浪号
    /\[$/, // 单个左方括号
    /!\[$/, // 图片标记开始
  ];

  let view = content;

  // 移除末尾的不完整标签
  for (const pattern of incompleteTagPatterns) {
    if (pattern.test(view)) {
      view = view.replace(pattern, "");
    }
  }

  // 2. 统计各类标签的数量
  const codeBlockCount = (view.match(/```/g) || []).length;
  const inlineCodeCount = (view.match(/(?<!`)`(?!`)/g) || []).length;
  const boldCount = (view.match(/\*\*/g) || []).length;
  const italicCount = (view.match(/(?<!\*)\*(?!\*)/g) || []).length;

  // 3. 如果是奇数，追加闭合标签
  if (codeBlockCount % 2 === 1) {
    view += "\n```";
  }
  if (inlineCodeCount % 2 === 1) {
    view += "`";
  }
  if (boldCount % 2 === 1) {
    view += "**";
  }
  if (italicCount % 2 === 1) {
    view += "*";
  }

  return view;
}

/**
 * 流式文本组件
 *
 * 用于显示流式渲染的文本内容，支持虚拟补全算法。
 *
 * @example
 * ```tsx
 * <StreamingText
 *   content={aiResponse}
 *   batchSize={10}
 *   maxFPS={60}
 *   enableVirtualCompletion
 *   onComplete={() => console.log('完成')}
 * />
 * ```
 */
export function StreamingText({
  content,
  className,
  enableVirtualCompletion = false,
  ...options
}: StreamingTextProps): JSX.Element {
  const { displayedContent, isStreaming } = useStreamingText(content, options);

  // 应用虚拟补全算法
  const finalContent = enableVirtualCompletion
    ? applyVirtualCompletion(displayedContent)
    : displayedContent;

  return (
    <div className={className} data-streaming={isStreaming}>
      {finalContent}
    </div>
  );
}
