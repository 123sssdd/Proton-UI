import { useState } from "react";

/**
 * ThemeGallery - 主题画廊页面
 *
 * 展示所有 5 个主题的完整效果，包括所有组件
 */
export function ThemeGallery() {
  const [selectedTheme, setSelectedTheme] = useState<
    "retro" | "tokyo" | "shrine" | "lofi" | "vaporwave"
  >("retro");

  const themes = [
    {
      id: "retro" as const,
      name: "Retro Futurism",
      icon: "🌟",
      description: "霓虹光晕 + CRT 效果 + 扫描线",
      colors: {
        primary: "#4ECDC4",
        secondary: "#667EEA",
        accent: "#FFB86C",
        bg: "linear-gradient(135deg, #1A1D2E 0%, #2C3E50 100%)",
      },
    },
    {
      id: "tokyo" as const,
      name: "Neo Tokyo Night",
      icon: "🌸",
      description: "玻璃拟态 + 樱粉渐变 + 霓虹青",
      colors: {
        primary: "#FF6B9D",
        secondary: "#4ECDC4",
        accent: "#9D4EDD",
        bg: "linear-gradient(135deg, #1A1D2E 0%, #2C3E50 100%)",
      },
    },
    {
      id: "shrine" as const,
      name: "Cyber Shrine",
      icon: "⛩️",
      description: "金色神圣 + 神社红 + 浮世绘",
      colors: {
        primary: "#D4AF37",
        secondary: "#C85A54",
        accent: "#A8A4A0",
        bg: "linear-gradient(135deg, #1B4D5C 0%, #2C3E50 100%)",
      },
    },
    {
      id: "lofi" as const,
      name: "Dreamy Lo-fi",
      icon: "☁️",
      description: "抹茶绿 + 淡樱粉 + 柔和渐变",
      colors: {
        primary: "#7BA05B",
        secondary: "#FFB6C1",
        accent: "#D4AF37",
        bg: "linear-gradient(135deg, #F5F1E8 0%, #E8E4D9 100%)",
      },
    },
    {
      id: "vaporwave" as const,
      name: "Vaporwave",
      icon: "🌊",
      description: "霓虹粉 + 赛博青 + 网格纹理",
      colors: {
        primary: "#FF006E",
        secondary: "#00F5FF",
        accent: "#9D4EDD",
        bg: "linear-gradient(135deg, #240046 0%, #3C096C 100%)",
      },
    },
  ];

  const currentTheme = themes.find((t) => t.id === selectedTheme)!;

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* 标题 */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">🎨 主题画廊</h1>
          <p className="text-xl text-gray-600 mb-2">探索 5 个艺术主题</p>
          <p className="text-sm text-gray-500">
            每个主题都有独特的视觉风格和情感表达
          </p>
        </div>

        {/* 主题选择器 - 大卡片样式 */}
        <div className="grid grid-cols-5 gap-4 mb-16">
          {themes.map((theme) => (
            <button
              key={theme.id}
              onClick={() => setSelectedTheme(theme.id)}
              className={`relative p-6 rounded-xl transition-all duration-300 ${
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
                  className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold shadow-lg"
                  style={{ background: theme.colors.primary }}
                >
                  ✓
                </div>
              )}

              <div className="text-center">
                <div className="text-4xl mb-3">{theme.icon}</div>
                <h3
                  className="text-lg font-bold mb-2"
                  style={{ color: theme.colors.primary }}
                >
                  {theme.name}
                </h3>
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
              <div className="flex justify-center gap-2 mt-4">
                <div
                  className="w-6 h-6 rounded-full"
                  style={{ background: theme.colors.primary }}
                  title="Primary"
                />
                <div
                  className="w-6 h-6 rounded-full"
                  style={{ background: theme.colors.secondary }}
                  title="Secondary"
                />
                <div
                  className="w-6 h-6 rounded-full"
                  style={{ background: theme.colors.accent }}
                  title="Accent"
                />
              </div>
            </button>
          ))}
        </div>

        {/* 当前主题展示 */}
        <div
          className="rounded-2xl p-12 mb-12"
          style={{
            background: currentTheme.colors.bg,
            border: `3px solid ${currentTheme.colors.primary}`,
            boxShadow: `0 0 40px ${currentTheme.colors.primary}40`,
          }}
        >
          <div className="text-center mb-12">
            <div className="text-6xl mb-4">{currentTheme.icon}</div>
            <h2
              className="text-4xl font-bold mb-3"
              style={{ color: currentTheme.colors.primary }}
            >
              {currentTheme.name}
            </h2>
            <p
              className="text-lg"
              style={{
                color:
                  currentTheme.id === "lofi"
                    ? "#5A4A42"
                    : "rgba(255,255,255,0.8)",
              }}
            >
              {currentTheme.description}
            </p>
          </div>

          {/* 组件展示网格 */}
          <div className="grid grid-cols-2 gap-8">
            {/* Button 示例 */}
            <div
              className="p-6 rounded-lg"
              style={{
                background:
                  currentTheme.id === "lofi"
                    ? "rgba(255,255,255,0.5)"
                    : "rgba(0,0,0,0.2)",
                border: `2px solid ${currentTheme.colors.primary}40`,
              }}
            >
              <h3
                className="text-lg font-bold mb-4"
                style={{ color: currentTheme.colors.primary }}
              >
                💎 Button 组件
              </h3>
              <div className="flex flex-wrap gap-3">
                <button
                  className="px-6 py-3 rounded-lg font-medium transition-all hover:scale-105"
                  style={{
                    background: currentTheme.colors.primary,
                    color: currentTheme.id === "lofi" ? "#2C2C2C" : "#FFFFFF",
                    boxShadow: `0 0 20px ${currentTheme.colors.primary}60`,
                  }}
                >
                  Primary
                </button>
                <button
                  className="px-6 py-3 rounded-lg font-medium transition-all hover:scale-105"
                  style={{
                    background: currentTheme.colors.secondary,
                    color: currentTheme.id === "lofi" ? "#2C2C2C" : "#FFFFFF",
                    boxShadow: `0 0 20px ${currentTheme.colors.secondary}60`,
                  }}
                >
                  Secondary
                </button>
                <button
                  className="px-6 py-3 rounded-lg font-medium transition-all hover:scale-105"
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

            {/* Input 示例 */}
            <div
              className="p-6 rounded-lg"
              style={{
                background:
                  currentTheme.id === "lofi"
                    ? "rgba(255,255,255,0.5)"
                    : "rgba(0,0,0,0.2)",
                border: `2px solid ${currentTheme.colors.primary}40`,
              }}
            >
              <h3
                className="text-lg font-bold mb-4"
                style={{ color: currentTheme.colors.primary }}
              >
                💎 Input 组件
              </h3>
              <input
                type="text"
                placeholder="输入文本..."
                className="w-full px-4 py-3 rounded-lg font-medium transition-all focus:outline-none"
                style={{
                  background:
                    currentTheme.id === "lofi"
                      ? "rgba(255,255,255,0.8)"
                      : "rgba(0,0,0,0.3)",
                  color: currentTheme.id === "lofi" ? "#2C2C2C" : "#FFFFFF",
                  border: `2px solid ${currentTheme.colors.primary}60`,
                }}
              />
            </div>

            {/* Card 示例 */}
            <div
              className="p-6 rounded-lg"
              style={{
                background:
                  currentTheme.id === "lofi"
                    ? "rgba(255,255,255,0.5)"
                    : "rgba(0,0,0,0.2)",
                border: `2px solid ${currentTheme.colors.primary}40`,
              }}
            >
              <h3
                className="text-lg font-bold mb-4"
                style={{ color: currentTheme.colors.primary }}
              >
                💎 Card 组件
              </h3>
              <div
                className="p-4 rounded-lg"
                style={{
                  background:
                    currentTheme.id === "lofi"
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
                      className="font-bold"
                      style={{
                        color:
                          currentTheme.id === "lofi" ? "#2C2C2C" : "#FFFFFF",
                      }}
                    >
                      卡片标题
                    </h4>
                    <p
                      className="text-sm"
                      style={{
                        color:
                          currentTheme.id === "lofi"
                            ? "#5A4A42"
                            : "rgba(255,255,255,0.7)",
                      }}
                    >
                      卡片描述文本
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Message 示例 */}
            <div
              className="p-6 rounded-lg"
              style={{
                background:
                  currentTheme.id === "lofi"
                    ? "rgba(255,255,255,0.5)"
                    : "rgba(0,0,0,0.2)",
                border: `2px solid ${currentTheme.colors.primary}40`,
              }}
            >
              <h3
                className="text-lg font-bold mb-4"
                style={{ color: currentTheme.colors.primary }}
              >
                💬 Message 组件
              </h3>
              <div className="space-y-3">
                {/* 用户消息 */}
                <div className="flex gap-2 flex-row-reverse">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{
                      background: currentTheme.colors.secondary,
                      color: currentTheme.id === "lofi" ? "#2C2C2C" : "#FFFFFF",
                    }}
                  >
                    U
                  </div>
                  <div
                    className="px-3 py-2 rounded-lg text-sm max-w-[200px]"
                    style={{
                      background: currentTheme.colors.secondary,
                      color: currentTheme.id === "lofi" ? "#2C2C2C" : "#FFFFFF",
                    }}
                  >
                    你好！
                  </div>
                </div>
                {/* AI 消息 */}
                <div className="flex gap-2">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{
                      background: currentTheme.colors.primary,
                      color: currentTheme.id === "lofi" ? "#2C2C2C" : "#FFFFFF",
                    }}
                  >
                    AI
                  </div>
                  <div
                    className="px-3 py-2 rounded-lg text-sm max-w-[200px]"
                    style={{
                      background: currentTheme.colors.primary,
                      color: currentTheme.id === "lofi" ? "#2C2C2C" : "#FFFFFF",
                    }}
                  >
                    你好！有什么可以帮助你的吗？
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 主题特点说明 */}
        <div className="grid grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h3 className="text-lg font-bold text-gray-900 mb-3">🎨 视觉层</h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• Clean pixel, high readability</li>
              <li>• Limited palette (6-12 colors)</li>
              <li>• Subtle dithering, soft glow</li>
              <li>• Wabi-sabi inspired texture</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h3 className="text-lg font-bold text-gray-900 mb-3">📐 布局层</h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• Comfortable spacing</li>
              <li>• Clear hierarchy</li>
              <li>• Consistent rhythm</li>
              <li>• Japanese aesthetic: Ma</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h3 className="text-lg font-bold text-gray-900 mb-3">✨ 交互层</h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• Micro-interactions</li>
              <li>• Easing soft (200-300ms)</li>
              <li>• Hover sparkle & glow</li>
              <li>• Clear feedback</li>
            </ul>
          </div>
        </div>

        {/* 底部导航 */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">🚀 探索更多</h3>
          <p className="text-gray-700 mb-6">
            查看每个组件的详细展示页面，了解更多设计细节和实现方式
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="#"
              className="px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors"
            >
              💎 按钮展示
            </a>
            <a
              href="#"
              className="px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
            >
              💎 输入框展示
            </a>
            <a
              href="#"
              className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              💎 卡片展示
            </a>
            <a
              href="#"
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              💬 消息展示
            </a>
            <a
              href="#"
              className="px-6 py-3 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors"
            >
              💬 聊天容器
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
