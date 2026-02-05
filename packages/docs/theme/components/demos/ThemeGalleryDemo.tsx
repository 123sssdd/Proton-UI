import React, { useState } from "react";

/**
 * ThemeGalleryDemo - 主题画廊演示组件
 *
 * 展示 5 个精美主题的完整效果，包括所有组件预览
 */

type ThemeId = "retro" | "tokyo" | "shrine" | "lofi" | "vaporwave";

interface ThemeConfig {
  id: ThemeId;
  name: string;
  icon: string;
  description: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    bg: string;
  };
  features: string[];
}

const THEMES: ThemeConfig[] = [
  {
    id: "retro",
    name: "Retro Futurism",
    icon: "🌟",
    description: "霓虹光晕 + CRT 效果 + 扫描线",
    colors: {
      primary: "#4ECDC4",
      secondary: "#667EEA",
      accent: "#FFB86C",
      bg: "linear-gradient(135deg, #1A1D2E 0%, #2C3E50 100%)",
    },
    features: ["霓虹边框", "CRT 光晕", "扫描线纹理", "铆钉装饰"],
  },
  {
    id: "tokyo",
    name: "Neo Tokyo Night",
    icon: "🌸",
    description: "玻璃拟态 + 樱粉渐变 + 霓虹青",
    colors: {
      primary: "#FF6B9D",
      secondary: "#4ECDC4",
      accent: "#9D4EDD",
      bg: "linear-gradient(135deg, #1A1D2E 0%, #2C3E50 100%)",
    },
    features: ["玻璃拟态", "樱粉渐变", "顶部高光", "装饰线条"],
  },
  {
    id: "shrine",
    name: "Cyber Shrine",
    icon: "⛩️",
    description: "金色神圣 + 神社红 + 浮世绘",
    colors: {
      primary: "#D4AF37",
      secondary: "#C85A54",
      accent: "#A8A4A0",
      bg: "linear-gradient(135deg, #1B4D5C 0%, #2C3E50 100%)",
    },
    features: ["金色边框", "神社红", "浮世绘纹样", "雾灰背景"],
  },
  {
    id: "lofi",
    name: "Dreamy Lo-fi",
    icon: "☁️",
    description: "抹茶绿 + 淡樱粉 + 柔和渐变",
    colors: {
      primary: "#7BA05B",
      secondary: "#FFB6C1",
      accent: "#D4AF37",
      bg: "linear-gradient(135deg, #F5F1E8 0%, #E8E4D9 100%)",
    },
    features: ["柔和色调", "淡雅渐变", "舒适留白", "温暖氛围"],
  },
  {
    id: "vaporwave",
    name: "Vaporwave",
    icon: "🌊",
    description: "霓虹粉 + 赛博青 + 网格纹理",
    colors: {
      primary: "#FF006E",
      secondary: "#00F5FF",
      accent: "#9D4EDD",
      bg: "linear-gradient(135deg, #240046 0%, #3C096C 100%)",
    },
    features: ["霓虹色彩", "网格纹理", "赛博朋克", "强烈对比"],
  },
];

export const ThemeGalleryDemo: React.FC = () => {
  const [selectedTheme, setSelectedTheme] = useState<ThemeId>("retro");

  const currentTheme = THEMES.find((t) => t.id === selectedTheme)!;
  const isLightTheme = currentTheme.id === "lofi";

  return (
    <div className="space-y-8">
      {/* 主题选择器 - 大卡片样式 */}
      <div>
        <h3 className="text-xl font-bold mb-4">选择主题</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {THEMES.map((theme) => (
            <button
              key={theme.id}
              onClick={() => setSelectedTheme(theme.id)}
              className={`relative p-4 rounded-xl transition-all duration-300 ${
                selectedTheme === theme.id
                  ? "scale-105 shadow-2xl"
                  : "hover:scale-102 shadow-lg hover:shadow-xl"
              }`}
              style={{
                background: theme.colors.bg,
                border:
                  selectedTheme === theme.id
                    ? `3px solid ${theme.colors.primary}`
                    : "3px solid transparent",
              }}
            >
              {/* 选中指示器 */}
              {selectedTheme === theme.id && (
                <div
                  className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg"
                  style={{ background: theme.colors.primary }}
                >
                  ✓
                </div>
              )}

              <div className="text-center">
                <div className="text-3xl mb-2">{theme.icon}</div>
                <h4
                  className="text-sm font-bold mb-1"
                  style={{ color: theme.colors.primary }}
                >
                  {theme.name}
                </h4>
                <p
                  className="text-xs leading-relaxed"
                  style={{
                    color:
                      theme.id === "lofi" ? "#5A4A42" : "rgba(255,255,255,0.7)",
                  }}
                >
                  {theme.description}
                </p>
              </div>

              {/* 颜色样本 */}
              <div className="flex justify-center gap-1 mt-3">
                <div
                  className="w-5 h-5 rounded-full"
                  style={{ background: theme.colors.primary }}
                  title="Primary"
                />
                <div
                  className="w-5 h-5 rounded-full"
                  style={{ background: theme.colors.secondary }}
                  title="Secondary"
                />
                <div
                  className="w-5 h-5 rounded-full"
                  style={{ background: theme.colors.accent }}
                  title="Accent"
                />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* 当前主题展示区域 */}
      <div
        className="rounded-2xl p-8 md:p-12"
        style={{
          background: currentTheme.colors.bg,
          border: `3px solid ${currentTheme.colors.primary}`,
          boxShadow: `0 0 40px ${currentTheme.colors.primary}40`,
        }}
      >
        {/* 主题信息 */}
        <div className="text-center mb-8">
          <div className="text-5xl mb-3">{currentTheme.icon}</div>
          <h2
            className="text-3xl font-bold mb-2"
            style={{ color: currentTheme.colors.primary }}
          >
            {currentTheme.name}
          </h2>
          <p
            className="text-base mb-4"
            style={{
              color: isLightTheme ? "#5A4A42" : "rgba(255,255,255,0.8)",
            }}
          >
            {currentTheme.description}
          </p>
          {/* 主题特性标签 */}
          <div className="flex flex-wrap justify-center gap-2">
            {currentTheme.features.map((feature) => (
              <span
                key={feature}
                className="px-3 py-1 rounded-full text-xs font-medium"
                style={{
                  background: `${currentTheme.colors.primary}20`,
                  color: currentTheme.colors.primary,
                  border: `1px solid ${currentTheme.colors.primary}40`,
                }}
              >
                {feature}
              </span>
            ))}
          </div>
        </div>

        {/* 组件预览网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Button 组件预览 */}
          <div
            className="p-5 rounded-lg"
            style={{
              background: isLightTheme
                ? "rgba(255,255,255,0.5)"
                : "rgba(0,0,0,0.2)",
              border: `2px solid ${currentTheme.colors.primary}40`,
            }}
          >
            <h3
              className="text-base font-bold mb-3"
              style={{ color: currentTheme.colors.primary }}
            >
              💎 Button 组件
            </h3>
            <div className="flex flex-wrap gap-2">
              <button
                className="px-4 py-2 rounded-lg text-sm font-medium transition-all hover:scale-105"
                style={{
                  background: currentTheme.colors.primary,
                  color: isLightTheme ? "#2C2C2C" : "#FFFFFF",
                  boxShadow: `0 0 20px ${currentTheme.colors.primary}60`,
                }}
              >
                Primary
              </button>
              <button
                className="px-4 py-2 rounded-lg text-sm font-medium transition-all hover:scale-105"
                style={{
                  background: currentTheme.colors.secondary,
                  color: isLightTheme ? "#2C2C2C" : "#FFFFFF",
                  boxShadow: `0 0 20px ${currentTheme.colors.secondary}60`,
                }}
              >
                Secondary
              </button>
              <button
                className="px-4 py-2 rounded-lg text-sm font-medium transition-all hover:scale-105"
                style={{
                  background: "transparent",
                  color: currentTheme.colors.primary,
                  border: `2px solid ${currentTheme.colors.primary}`,
                }}
              >
                Outline
              </button>
            </div>
          </div>

          {/* Input 组件预览 */}
          <div
            className="p-5 rounded-lg"
            style={{
              background: isLightTheme
                ? "rgba(255,255,255,0.5)"
                : "rgba(0,0,0,0.2)",
              border: `2px solid ${currentTheme.colors.primary}40`,
            }}
          >
            <h3
              className="text-base font-bold mb-3"
              style={{ color: currentTheme.colors.primary }}
            >
              💎 Input 组件
            </h3>
            <input
              type="text"
              placeholder="输入文本..."
              className="w-full px-3 py-2 rounded-lg text-sm font-medium transition-all focus:outline-none"
              style={{
                background: isLightTheme
                  ? "rgba(255,255,255,0.8)"
                  : "rgba(0,0,0,0.3)",
                color: isLightTheme ? "#2C2C2C" : "#FFFFFF",
                border: `2px solid ${currentTheme.colors.primary}60`,
              }}
            />
          </div>

          {/* Card 组件预览 */}
          <div
            className="p-5 rounded-lg"
            style={{
              background: isLightTheme
                ? "rgba(255,255,255,0.5)"
                : "rgba(0,0,0,0.2)",
              border: `2px solid ${currentTheme.colors.primary}40`,
            }}
          >
            <h3
              className="text-base font-bold mb-3"
              style={{ color: currentTheme.colors.primary }}
            >
              💎 Card 组件
            </h3>
            <div
              className="p-4 rounded-lg"
              style={{
                background: isLightTheme
                  ? "rgba(255,255,255,0.8)"
                  : "rgba(0,0,0,0.3)",
                border: `2px solid ${currentTheme.colors.primary}`,
                boxShadow: `0 0 16px ${currentTheme.colors.primary}40`,
              }}
            >
              <div className="flex items-center gap-3 mb-2">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-xl"
                  style={{ background: currentTheme.colors.primary }}
                >
                  {currentTheme.icon}
                </div>
                <div>
                  <h4
                    className="font-bold text-sm"
                    style={{
                      color: isLightTheme ? "#2C2C2C" : "#FFFFFF",
                    }}
                  >
                    卡片标题
                  </h4>
                  <p
                    className="text-xs"
                    style={{
                      color: isLightTheme ? "#5A4A42" : "rgba(255,255,255,0.7)",
                    }}
                  >
                    卡片描述文本
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Message 组件预览 */}
          <div
            className="p-5 rounded-lg"
            style={{
              background: isLightTheme
                ? "rgba(255,255,255,0.5)"
                : "rgba(0,0,0,0.2)",
              border: `2px solid ${currentTheme.colors.primary}40`,
            }}
          >
            <h3
              className="text-base font-bold mb-3"
              style={{ color: currentTheme.colors.primary }}
            >
              💬 Message 组件
            </h3>
            <div className="space-y-2">
              {/* 用户消息 */}
              <div className="flex gap-2 flex-row-reverse">
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
                  style={{
                    background: currentTheme.colors.secondary,
                    color: isLightTheme ? "#2C2C2C" : "#FFFFFF",
                  }}
                >
                  U
                </div>
                <div
                  className="px-3 py-2 rounded-lg text-xs max-w-[150px]"
                  style={{
                    background: currentTheme.colors.secondary,
                    color: isLightTheme ? "#2C2C2C" : "#FFFFFF",
                  }}
                >
                  你好！
                </div>
              </div>
              {/* AI 消息 */}
              <div className="flex gap-2">
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
                  style={{
                    background: currentTheme.colors.primary,
                    color: isLightTheme ? "#2C2C2C" : "#FFFFFF",
                  }}
                >
                  AI
                </div>
                <div
                  className="px-3 py-2 rounded-lg text-xs max-w-[150px]"
                  style={{
                    background: currentTheme.colors.primary,
                    color: isLightTheme ? "#2C2C2C" : "#FFFFFF",
                  }}
                >
                  你好！有什么可以帮助你的吗？
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 设计原则说明 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-5 shadow-lg">
          <h3 className="text-base font-bold text-gray-900 dark:text-white mb-3">
            🎨 视觉层
          </h3>
          <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
            <li>• Clean pixel, high readability</li>
            <li>• Limited palette (6-12 colors)</li>
            <li>• Subtle dithering, soft glow</li>
            <li>• Wabi-sabi inspired texture</li>
          </ul>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-5 shadow-lg">
          <h3 className="text-base font-bold text-gray-900 dark:text-white mb-3">
            📐 布局层
          </h3>
          <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
            <li>• Comfortable spacing</li>
            <li>• Clear hierarchy</li>
            <li>• Consistent rhythm</li>
            <li>• Japanese aesthetic: Ma</li>
          </ul>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-5 shadow-lg">
          <h3 className="text-base font-bold text-gray-900 dark:text-white mb-3">
            ✨ 交互层
          </h3>
          <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
            <li>• Micro-interactions</li>
            <li>• Easing soft (200-300ms)</li>
            <li>• Hover sparkle & glow</li>
            <li>• Clear feedback</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

// 添加 default export 以支持 Rspress globalComponents
export default ThemeGalleryDemo;
