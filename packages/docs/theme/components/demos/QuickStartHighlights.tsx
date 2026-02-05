import React from "react";
import { ParticleEffect, PixelatedImage } from "@proton-ui/core";

/**
 * QuickStartHighlights - 快速开始页面的核心亮点展示组件
 *
 * 展示 Proton UI 的 3 大核心亮点:
 * 1. 像素特效系统 (ParticleEffect + PixelatedImage)
 * 2. 主题系统 (5 个精美主题)
 * 3. 流式渲染 (StreamingText)
 */

interface Highlight {
  id: string;
  title: string;
  description: string;
  icon: string;
  link: string;
}

const highlights: Highlight[] = [
  {
    id: "pixel-effects",
    title: "特效系统",
    description: "粒子效果 + 图片像素化，打造独特的视觉体验",
    icon: "✨",
    link: "/components/effects/pixel-effects",
  },
  {
    id: "theme-system",
    title: "主题系统",
    description: "5 个精美主题，支持自定义配色和实时预览",
    icon: "🎨",
    link: "/components/theme/theme-gallery",
  },
  {
    id: "streaming",
    title: "流式渲染",
    description: "AI 对话场景的核心技术，逐字显示文本",
    icon: "💬",
    link: "/guide/streaming",
  },
];

export const QuickStartHighlights: React.FC = () => {
  const [streamingText, setStreamingText] = React.useState("");
  const [showParticles, setShowParticles] = React.useState(false);

  // 模拟流式文本效果
  React.useEffect(() => {
    const text = "你好！我是 AI 助手，这是流式渲染效果演示。";
    let index = 0;

    const interval = setInterval(() => {
      if (index < text.length) {
        setStreamingText(text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="my-12">
      <div className="text-center mb-8">
        <h2
          className="text-3xl font-bold mb-3"
          style={{ color: "var(--color-accent, #4ECDC4)" }}
        >
          核心亮点
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          探索 Proton UI 的强大功能
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* 像素特效卡片 */}
        <a
          href={highlights[0]!.link}
          className="block p-6 rounded-lg border-2 transition-all hover:scale-105 hover:shadow-xl"
          style={{
            borderColor: "var(--color-accent, #4ECDC4)",
            background:
              "linear-gradient(135deg, rgba(78, 205, 196, 0.1) 0%, rgba(102, 126, 234, 0.1) 100%)",
          }}
          onMouseEnter={() => setShowParticles(true)}
          onMouseLeave={() => setShowParticles(false)}
        >
          <div className="text-center">
            <div className="text-5xl mb-4">{highlights[0]!.icon}</div>
            <h3
              className="text-xl font-bold mb-2"
              style={{ color: "var(--color-accent, #4ECDC4)" }}
            >
              {highlights[0]!.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              {highlights[0]!.description}
            </p>

            {/* 演示区域 */}
            <div className="relative h-32 rounded overflow-hidden bg-gray-900">
              {showParticles && (
                <ParticleEffect type="sparkle" count={20} autoTrigger />
              )}
              <PixelatedImage
                src="https://via.placeholder.com/150"
                alt="Demo"
                pixelSize={8}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </a>

        {/* 主题系统卡片 */}
        <a
          href={highlights[1]!.link}
          className="block p-6 rounded-lg border-2 transition-all hover:scale-105 hover:shadow-xl"
          style={{
            borderColor: "var(--color-accent, #FF6B9D)",
            background:
              "linear-gradient(135deg, rgba(255, 107, 157, 0.1) 0%, rgba(157, 78, 221, 0.1) 100%)",
          }}
        >
          <div className="text-center">
            <div className="text-5xl mb-4">{highlights[1]!.icon}</div>
            <h3
              className="text-xl font-bold mb-2"
              style={{ color: "var(--color-accent, #FF6B9D)" }}
            >
              {highlights[1]!.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              {highlights[1]!.description}
            </p>

            {/* 演示区域 - 主题色块 */}
            <div className="flex justify-center gap-2">
              <div
                className="w-8 h-8 rounded"
                style={{ background: "#4ECDC4" }}
                title="霓虹青"
              />
              <div
                className="w-8 h-8 rounded"
                style={{ background: "#FF6B9D" }}
                title="樱粉"
              />
              <div
                className="w-8 h-8 rounded"
                style={{ background: "#D4AF37" }}
                title="金色"
              />
              <div
                className="w-8 h-8 rounded"
                style={{ background: "#7BA05B" }}
                title="抹茶绿"
              />
              <div
                className="w-8 h-8 rounded"
                style={{ background: "#FF006E" }}
                title="霓虹粉"
              />
            </div>
          </div>
        </a>

        {/* 流式渲染卡片 */}
        <a
          href={highlights[2]!.link}
          className="block p-6 rounded-lg border-2 transition-all hover:scale-105 hover:shadow-xl"
          style={{
            borderColor: "var(--color-accent, #667EEA)",
            background:
              "linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)",
          }}
        >
          <div className="text-center">
            <div className="text-5xl mb-4">{highlights[2]!.icon}</div>
            <h3
              className="text-xl font-bold mb-2"
              style={{ color: "var(--color-accent, #667EEA)" }}
            >
              {highlights[2]!.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              {highlights[2]!.description}
            </p>

            {/* 演示区域 - 流式文本 */}
            <div className="h-32 rounded bg-gray-900 p-4 text-left overflow-hidden">
              <div className="flex gap-2 mb-2">
                <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center text-xs font-bold text-white">
                  AI
                </div>
                <div className="flex-1">
                  <div className="text-sm text-gray-300">
                    {streamingText}
                    <span className="inline-block w-1 h-4 bg-purple-500 ml-1 animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default QuickStartHighlights;
