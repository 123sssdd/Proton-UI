import React from "react";
import { Input } from "@proton-ui/core";

/**
 * Input 完整展示页面 (Refactored to use Core Themes)
 */
export function InputShowcase() {
  const [activeTheme, setActiveTheme] =
    React.useState<string>("retro-futurism");

  // 基础输入框状态
  const [basicValue1, setBasicValue1] = React.useState("");
  const [basicValue2, setBasicValue2] = React.useState("");
  const [basicValue3, setBasicValue3] = React.useState("user@example.com");
  const [basicValue4, setBasicValue4] = React.useState("");
  const [showError, setShowError] = React.useState(false);

  const themes = [
    {
      id: "retro-futurism",
      name: "Retro Futurism",
      desc: "霓虹边框 + 扫描线",
      color: "#4ECDC4",
    },
    {
      id: "neo-tokyo",
      name: "Neo Tokyo Night",
      desc: "玻璃拟态 + 樱粉",
      color: "#FF6B9D",
    },
    {
      id: "cyber-shrine",
      name: "Cyber Shrine",
      desc: "和纸质感 + 墨迹",
      color: "#D4AF37",
    },
    {
      id: "dreamy-lofi",
      name: "Dreamy Lo-fi",
      desc: "柔和渐变 + 云朵",
      color: "#7BA05B",
    },
    {
      id: "vaporwave",
      name: "Vaporwave",
      desc: "渐变 + 网格纹理",
      color: "#9D4EDD",
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--pixel-bg-primary)] p-8">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* 页面标题 */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-pixel text-[var(--pixel-text-primary)]">
            Input 组件完整展示
          </h1>
          <p className="text-sm text-[var(--pixel-text-secondary)]">
            从基础到精美 - 像素风格输入框的完整演示 (Core Component Powered)
          </p>
        </div>

        {/* 目录导航 */}
        <nav className="flex justify-center gap-4 flex-wrap">
          <a
            href="#basic"
            className="px-4 py-2 text-sm font-pixel text-[var(--pixel-accent-cyan)] hover:underline"
          >
            基础风格
          </a>
          <span className="text-[var(--pixel-text-secondary)]">•</span>
          <a
            href="#enhanced"
            className="px-4 py-2 text-sm font-pixel text-[var(--pixel-accent-cyan)] hover:underline"
          >
            精美像素风格
          </a>
        </nav>

        {/* ==================== 基础风格部分 ==================== */}
        <section id="basic" className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-pixel text-[var(--pixel-text-primary)]">
              基础风格 (Basic Style)
            </h2>
            <p className="text-sm text-[var(--pixel-text-secondary)]">
              简洁实用的像素风格输入框 - 适合快速开发
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 无标签 */}
            <Input
              placeholder="请输入内容..."
              value={basicValue1}
              onChange={(e) => setBasicValue1(e.target.value)}
            />
            {/* 带标签 */}
            <Input
              label="用户名"
              placeholder="请输入用户名"
              value={basicValue2}
              onChange={(e) => setBasicValue2(e.target.value)}
            />
            {/* 错误状态 */}
            <Input
              label="邮箱验证"
              placeholder="请输入邮箱"
              error={showError ? "请输入有效的邮箱地址" : undefined}
              value={basicValue4}
              onChange={(e) => {
                setBasicValue4(e.target.value);
                setShowError(
                  !e.target.value.includes("@") && e.target.value.length > 0
                );
              }}
            />
          </div>
        </section>

        {/* ==================== 精美像素风格部分 ==================== */}
        <section id="enhanced" className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-pixel text-[var(--pixel-text-primary)]">
              精美像素风格 (Enhanced Pixel Style)
            </h2>
            <p className="text-sm text-[var(--pixel-text-secondary)]">
              Powered by @proton-ui/core "pixelTheme" prop
            </p>
          </div>

          {/* 主题选择器 */}
          <div className="flex justify-center flex-wrap gap-4">
            {themes.map((theme) => (
              <button
                key={theme.id}
                onClick={() => setActiveTheme(theme.id)}
                className={`
                    p-4 rounded-lg border-2 transition-all duration-200 font-pixel
                    ${
                      activeTheme === theme.id
                        ? "border-[var(--pixel-accent-cyan)] bg-[var(--pixel-bg-tertiary)] scale-105"
                        : "border-[var(--pixel-border)] bg-[var(--pixel-bg-secondary)] hover:opacity-80"
                    }
                  `}
              >
                {theme.name}
              </button>
            ))}
          </div>

          {/* 动态主题展示 */}
          <div className="p-8 rounded-lg border-2 border-[var(--pixel-border)] bg-[var(--pixel-bg-secondary)] min-h-[400px]">
            {/* Retro Futurism Showcase */}
            {activeTheme === "retro-futurism" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Input
                  pixelTheme="retro-futurism"
                  label="Neon Input"
                  placeholder="Click to glow"
                />
                <Input
                  pixelTheme="retro-futurism"
                  label="Scanline Input"
                  decoration="scanline"
                  placeholder="Scanning..."
                />
              </div>
            )}

            {/* Neo Tokyo Showcase */}
            {activeTheme === "neo-tokyo" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Input
                  pixelTheme="neo-tokyo"
                  label="Glass Input"
                  placeholder="Glassmorphism"
                />
                <Input
                  pixelTheme="neo-tokyo"
                  label="Cyber Input"
                  placeholder="Type here..."
                  leftIcon={<span>🎐</span>}
                />
              </div>
            )}

            {/* Cyber Shrine Showcase */}
            {activeTheme === "cyber-shrine" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Input
                  pixelTheme="cyber-shrine"
                  label="Offerings"
                  placeholder="Enter amount..."
                />
                <Input
                  pixelTheme="cyber-shrine"
                  label="Prayer"
                  placeholder="Your wish..."
                  rightIcon={<span>⛩️</span>}
                />
              </div>
            )}

            {/* Fallback */}
            {["dreamy-lofi", "vaporwave"].includes(activeTheme) && (
              <div className="flex flex-col gap-6 items-center justify-center h-full">
                <p className="text-[var(--pixel-text-secondary)] font-pixel">
                  Theme Preview
                </p>
                <div className="w-full max-w-md">
                  <Input
                    pixelTheme={activeTheme as any}
                    label={`${activeTheme} Input`}
                    placeholder="Type something cool..."
                  />
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
