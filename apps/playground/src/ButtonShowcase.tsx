import React from "react";
import { Button } from "@proton-ui/core";

/**
 * Button 完整展示页面
 * 包含基础风格和精美像素风格
 */
export function ButtonShowcase() {
  const [activeTheme, setActiveTheme] =
    React.useState<string>("retro-futurism");
  const [loading, setLoading] = React.useState(false);

  const handleLoadingClick = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  const themes = [
    {
      id: "retro-futurism",
      name: "Retro Futurism",
      desc: "复古未来 - 霓虹青 + 深色底",
      color: "#4ECDC4",
    },
    {
      id: "neo-tokyo",
      name: "Neo Tokyo Night",
      desc: "新东京夜景 - 樱粉 + 霓虹青",
      color: "#FF6B9D",
    },
    {
      id: "cyber-shrine",
      name: "Cyber Shrine",
      desc: "赛博神社 - 墨黑 + 金色",
      color: "#D4AF37",
    },
    {
      id: "dreamy-lofi",
      name: "Dreamy Lo-fi",
      desc: "梦幻低保真 - 米白 + 抹茶绿",
      color: "#7BA05B",
    },
    {
      id: "vaporwave",
      name: "Vaporwave",
      desc: "蒸汽波 - 青紫粉渐变",
      color: "#9D4EDD",
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)] p-8">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* 页面标题 */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-pixel text-[var(--color-text-primary)]">
            Button 组件完整展示
          </h1>
          <p className="text-sm text-[var(--color-text-secondary)]">
            从基础到精美 - 像素风格按钮的完整演示
          </p>
        </div>

        {/* 目录导航 */}
        <nav className="flex justify-center gap-4 flex-wrap">
          <a
            href="#basic"
            className="px-4 py-2 text-sm font-pixel text-[var(--color-accent)] hover:underline"
          >
            基础风格
          </a>
          <span className="text-[var(--color-text-secondary)]">•</span>
          <a
            href="#enhanced"
            className="px-4 py-2 text-sm font-pixel text-[var(--color-accent)] hover:underline"
          >
            精美像素风格
          </a>
        </nav>

        {/* ==================== 基础风格部分 ==================== */}
        <section id="basic" className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-pixel text-[var(--color-text-primary)]">
              基础风格 (Basic Style)
            </h2>
            <p className="text-sm text-[var(--color-text-secondary)]">
              简洁实用的像素风格按钮 - 适合快速开发
            </p>
          </div>

          {/* 基础变体 */}
          <div className="space-y-6">
            <h3 className="text-lg font-pixel text-[var(--color-text-primary)] border-b-2 border-[var(--color-text-secondary)] pb-2">
              按钮变体 (Variants)
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Primary */}
              <div className="space-y-4 p-6 bg-[var(--color-bg-secondary)] rounded-lg border-2 border-[var(--color-text-secondary)] border-opacity-20">
                <h4 className="text-sm font-pixel text-[var(--color-text-primary)] mb-4">
                  Primary
                </h4>
                <Button variant="primary">Primary Button</Button>
                <Button variant="primary" disabled>
                  Disabled
                </Button>
                <Button
                  variant="primary"
                  loading={loading}
                  onClick={handleLoadingClick}
                >
                  {loading ? "Loading..." : "Click to Load"}
                </Button>
              </div>

              {/* Secondary */}
              <div className="space-y-4 p-6 bg-[var(--color-bg-secondary)] rounded-lg border-2 border-[var(--color-text-secondary)] border-opacity-20">
                <h4 className="text-sm font-pixel text-[var(--color-text-primary)] mb-4">
                  Secondary
                </h4>
                <Button variant="secondary">Secondary Button</Button>
                <Button variant="secondary" disabled>
                  Disabled
                </Button>
              </div>

              {/* Danger */}
              <div className="space-y-4 p-6 bg-[var(--color-bg-secondary)] rounded-lg border-2 border-[var(--color-text-secondary)] border-opacity-20">
                <h4 className="text-sm font-pixel text-[var(--color-text-primary)] mb-4">
                  Danger
                </h4>
                <Button variant="danger">Danger Button</Button>
                <Button variant="danger" disabled>
                  Disabled
                </Button>
              </div>

              {/* Ghost */}
              <div className="space-y-4 p-6 bg-[var(--color-bg-secondary)] rounded-lg border-2 border-[var(--color-text-secondary)] border-opacity-20">
                <h4 className="text-sm font-pixel text-[var(--color-text-primary)] mb-4">
                  Ghost
                </h4>
                <Button variant="ghost">Ghost Button</Button>
                <Button variant="ghost" disabled>
                  Disabled
                </Button>
              </div>
            </div>
          </div>

          {/* 基础尺寸 */}
          <div className="space-y-6">
            <h3 className="text-lg font-pixel text-[var(--color-text-primary)] border-b-2 border-[var(--color-text-secondary)] pb-2">
              按钮尺寸 (Sizes)
            </h3>

            <div className="flex flex-wrap items-center gap-4 p-6 bg-[var(--color-bg-secondary)] rounded-lg">
              <Button variant="primary" size="sm">
                Small (32px)
              </Button>
              <Button variant="primary" size="md">
                Medium (40px)
              </Button>
              <Button variant="primary" size="lg">
                Large (48px)
              </Button>
            </div>
          </div>
        </section>

        {/* 分隔线 */}
        <div className="relative py-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t-2 border-[var(--color-text-secondary)] border-opacity-20"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="px-4 bg-[var(--color-bg-primary)] text-sm font-pixel text-[var(--color-text-secondary)]">
              ✨ 精美像素风格 ✨
            </span>
          </div>
        </div>

        {/* ==================== 精美像素风格部分 ==================== */}
        <section id="enhanced" className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-pixel text-[var(--color-text-primary)]">
              精美像素风格 (Enhanced Pixel Style)
            </h2>
            <p className="text-sm text-[var(--color-text-secondary)]">
              Clean Pixel + High Readability + Japanese Aesthetic
            </p>
            <div className="flex items-center justify-center gap-2 text-xs text-[var(--color-text-secondary)]">
              <span>💎 材质分层</span>
              <span>•</span>
              <span>🎨 限制色盘</span>
              <span>•</span>
              <span>✨ 细节装饰</span>
              <span>•</span>
              <span>🌸 日系留白</span>
            </div>
          </div>

          {/* 主题选择器 */}
          <div className="space-y-4">
            <h3 className="text-lg font-pixel text-[var(--color-text-primary)] border-b-2 border-[var(--color-text-secondary)] pb-2">
              主题选择 (Theme Selector)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {themes.map((theme) => (
                <button
                  key={theme.id}
                  onClick={() => setActiveTheme(theme.id)}
                  className={`
                    p-4 rounded-lg border-2 transition-all duration-200
                    ${
                      activeTheme === theme.id
                        ? "border-[var(--color-accent)] bg-[var(--color-accent)] bg-opacity-10 scale-105"
                        : "border-[var(--color-text-secondary)] border-opacity-20 hover:border-opacity-40 hover:scale-102"
                    }
                  `}
                >
                  <div
                    className="w-full h-2 rounded mb-2"
                    style={{ backgroundColor: theme.color }}
                  />
                  <div className="text-sm font-pixel text-[var(--color-text-primary)] mb-1">
                    {theme.name}
                  </div>
                  <div className="text-xs text-[var(--color-text-secondary)]">
                    {theme.desc}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* 主题内容区域 - 动态渲染 */}
          <div className="min-h-[600px]">
            {activeTheme === "retro-futurism" && <RetroFuturismTheme />}
            {activeTheme === "neo-tokyo" && <NeoTokyoTheme />}
            {activeTheme === "cyber-shrine" && <CyberShrineTheme />}
            {activeTheme === "dreamy-lofi" && <DreamyLofiTheme />}
            {activeTheme === "vaporwave" && <VaporwaveTheme />}
          </div>

          {/* 设计原则 */}
          <div className="space-y-4 p-6 bg-[var(--color-bg-secondary)] rounded-lg border-2 border-[var(--color-accent)]">
            <h3 className="text-lg font-pixel text-[var(--color-text-primary)]">
              设计原则 (Design Principles)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-[var(--color-text-secondary)]">
              <div>
                <h4 className="font-pixel text-[var(--color-text-primary)] mb-2">
                  视觉层
                </h4>
                <ul className="space-y-1">
                  <li>• Clean pixel, high readability</li>
                  <li>• Limited palette (6-12 colors)</li>
                  <li>• Subtle dithering, soft CRT glow</li>
                  <li>• Wabi-sabi inspired texture</li>
                </ul>
              </div>
              <div>
                <h4 className="font-pixel text-[var(--color-text-primary)] mb-2">
                  布局层
                </h4>
                <ul className="space-y-1">
                  <li>• Comfortable spacing</li>
                  <li>• Clear hierarchy</li>
                  <li>• Large tap targets</li>
                  <li>• Consistent rhythm</li>
                </ul>
              </div>
              <div>
                <h4 className="font-pixel text-[var(--color-text-primary)] mb-2">
                  交互层
                </h4>
                <ul className="space-y-1">
                  <li>• Micro-interactions</li>
                  <li>• Easing soft (200-300ms)</li>
                  <li>• Hover sparkle & glow</li>
                  <li>• Button press depth (2-4px)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

// ==================== Retro Futurism 主题 ====================
function RetroFuturismTheme() {
  return (
    <div
      className="space-y-6 p-8 rounded-lg"
      style={{ backgroundColor: "#1A1D2E" }}
    >
      <div className="text-center space-y-2">
        <h3 className="text-xl font-pixel" style={{ color: "#4ECDC4" }}>
          Retro Futurism
        </h3>
        <p className="text-sm" style={{ color: "#A8A4A0" }}>
          深色底色 + 霓虹青边框 + 轻微 CRT 光晕 + 金属铆钉
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* 基础霓虹按钮 */}
        <div
          className="space-y-4 p-6 rounded-lg"
          style={{ backgroundColor: "#252836" }}
        >
          <h4 className="text-sm font-pixel mb-4" style={{ color: "#E8E4DB" }}>
            Neon Glow
          </h4>
          <button
            className="
              w-full px-6 py-3 font-pixel text-sm
              rounded-md border-2 transition-all duration-200
              shadow-[4px_4px_0px_rgba(78,205,196,0.3)]
              hover:shadow-[6px_6px_0px_rgba(78,205,196,0.4)]
              hover:brightness-110
              active:translate-y-[2px] active:shadow-[2px_2px_0px_rgba(78,205,196,0.3)]
              relative overflow-hidden
            "
            style={{
              backgroundColor: "#4ECDC4",
              borderColor: "#4ECDC4",
              color: "#1A1D2E",
            }}
          >
            <span className="relative z-10">Neon Button</span>
            {/* CRT 光晕效果 */}
            <div
              className="absolute inset-0 opacity-30 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at center, rgba(78,205,196,0.4) 0%, transparent 70%)",
              }}
            />
          </button>
        </div>

        {/* 带铆钉装饰 */}
        <div
          className="space-y-4 p-6 rounded-lg"
          style={{ backgroundColor: "#252836" }}
        >
          <h4 className="text-sm font-pixel mb-4" style={{ color: "#E8E4DB" }}>
            With Rivets
          </h4>
          <button
            className="
              w-full px-6 py-3 font-pixel text-sm
              rounded-md border-2 transition-all duration-200
              shadow-[4px_4px_0px_rgba(78,205,196,0.3)]
              hover:shadow-[6px_6px_0px_rgba(78,205,196,0.4)]
              active:translate-y-[2px]
              relative
            "
            style={{
              backgroundColor: "#4ECDC4",
              borderColor: "#4ECDC4",
              color: "#1A1D2E",
            }}
          >
            <span className="relative z-10">Metal Rivets</span>
            {/* 四角铆钉 */}
            <div className="absolute top-1 left-1 w-2 h-2 rounded-full bg-[#1A1D2E] opacity-50 shadow-inner" />
            <div className="absolute top-1 right-1 w-2 h-2 rounded-full bg-[#1A1D2E] opacity-50 shadow-inner" />
            <div className="absolute bottom-1 left-1 w-2 h-2 rounded-full bg-[#1A1D2E] opacity-50 shadow-inner" />
            <div className="absolute bottom-1 right-1 w-2 h-2 rounded-full bg-[#1A1D2E] opacity-50 shadow-inner" />
          </button>
        </div>

        {/* 扫描线效果 */}
        <div
          className="space-y-4 p-6 rounded-lg"
          style={{ backgroundColor: "#252836" }}
        >
          <h4 className="text-sm font-pixel mb-4" style={{ color: "#E8E4DB" }}>
            Scanline
          </h4>
          <button
            className="
              w-full px-6 py-3 font-pixel text-sm
              rounded-md border-2 transition-all duration-200
              bg-transparent
              hover:bg-[rgba(78,205,196,0.1)]
              relative overflow-hidden
              shadow-[4px_4px_0px_rgba(78,205,196,0.2)]
            "
            style={{
              borderColor: "#4ECDC4",
              color: "#4ECDC4",
            }}
          >
            <span className="relative z-10">Scanline</span>
            {/* 扫描线效果 */}
            <div
              className="absolute inset-0 pointer-events-none opacity-20"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(78,205,196,0.5) 2px, rgba(78,205,196,0.5) 4px)",
              }}
            />
          </button>
        </div>

        {/* 脉冲动画 */}
        <div
          className="space-y-4 p-6 rounded-lg"
          style={{ backgroundColor: "#252836" }}
        >
          <h4 className="text-sm font-pixel mb-4" style={{ color: "#E8E4DB" }}>
            Pulse
          </h4>
          <button
            className="
              w-full px-6 py-3 font-pixel text-sm
              rounded-md border-2 transition-all duration-200
              relative
              animate-pulse-pixel
              shadow-[4px_4px_0px_rgba(255,107,157,0.3)]
            "
            style={{
              backgroundColor: "#FF6B9D",
              borderColor: "#FF6B9D",
              color: "#1A1D2E",
            }}
          >
            Alert Pink
          </button>
        </div>
      </div>
    </div>
  );
}

// ==================== Neo Tokyo Night 主题 ====================
function NeoTokyoTheme() {
  return (
    <div
      className="space-y-6 p-8 rounded-lg"
      style={{ backgroundColor: "#1A1D2E" }}
    >
      <div className="text-center space-y-2">
        <h3 className="text-xl font-pixel" style={{ color: "#FF6B9D" }}>
          Neo Tokyo Night
        </h3>
        <p className="text-sm" style={{ color: "#A8A4A0" }}>
          深夜景底色 + 樱粉 + 霓虹青双色点缀 + 玻璃高光
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* 玻璃拟态按钮 */}
        <div
          className="space-y-4 p-6 rounded-lg"
          style={{
            backgroundColor: "rgba(37,40,54,0.5)",
            backdropFilter: "blur(10px)",
          }}
        >
          <h4 className="text-sm font-pixel mb-4" style={{ color: "#E8E4DB" }}>
            Glassmorphism
          </h4>
          <button
            className="
              w-full px-6 py-3 font-pixel text-sm
              rounded-lg border-2 transition-all duration-200
              relative overflow-hidden
              shadow-[0_8px_32px_0_rgba(255,107,157,0.2)]
              hover:shadow-[0_8px_32px_0_rgba(255,107,157,0.4)]
              hover:scale-105
            "
            style={{
              background: "rgba(255,107,157,0.1)",
              borderColor: "rgba(255,107,157,0.3)",
              color: "#FF6B9D",
              backdropFilter: "blur(10px)",
            }}
          >
            <span className="relative z-10">Glass Button</span>
            {/* 顶部高光 */}
            <div
              className="absolute top-0 left-0 right-0 h-1/2 pointer-events-none"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.1) 0%, transparent 100%)",
              }}
            />
          </button>

          {/* 带边框装饰 */}
          <button
            className="
              w-full px-6 py-3 font-pixel text-sm
              rounded-lg border-2 transition-all duration-200
              relative overflow-hidden
              shadow-[0_8px_32px_0_rgba(78,205,196,0.2)]
              hover:shadow-[0_8px_32px_0_rgba(78,205,196,0.4)]
            "
            style={{
              background: "rgba(78,205,196,0.1)",
              borderColor: "rgba(78,205,196,0.3)",
              color: "#4ECDC4",
              backdropFilter: "blur(10px)",
            }}
          >
            <span className="relative z-10">Cyan Glass</span>
            {/* 装饰线条 */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4ECDC4] to-transparent opacity-50" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4ECDC4] to-transparent opacity-50" />
          </button>
        </div>

        {/* 樱粉渐变按钮 */}
        <div
          className="space-y-4 p-6 rounded-lg"
          style={{ backgroundColor: "rgba(37,40,54,0.5)" }}
        >
          <h4 className="text-sm font-pixel mb-4" style={{ color: "#E8E4DB" }}>
            Sakura Gradient
          </h4>
          <button
            className="
              w-full px-6 py-3 font-pixel text-sm
              rounded-lg border-2 transition-all duration-200
              shadow-[4px_4px_0px_rgba(255,107,157,0.3)]
              hover:shadow-[6px_6px_0px_rgba(255,107,157,0.4)]
              active:translate-y-[2px]
              relative overflow-hidden
            "
            style={{
              background: "linear-gradient(135deg, #FF6B9D 0%, #4ECDC4 100%)",
              borderColor: "#FF6B9D",
              color: "#1A1D2E",
            }}
          >
            <span className="relative z-10">Sakura Cyan</span>
            {/* 玻璃高光 */}
            <div
              className="absolute top-0 left-0 w-1/2 h-full pointer-events-none"
              style={{
                background:
                  "linear-gradient(90deg, rgba(255,255,255,0.2) 0%, transparent 100%)",
              }}
            />
          </button>

          {/* 垂直渐变 */}
          <button
            className="
              w-full px-6 py-3 font-pixel text-sm
              rounded-lg border-2 transition-all duration-200
              shadow-[4px_4px_0px_rgba(255,107,157,0.3)]
              hover:shadow-[6px_6px_0px_rgba(255,107,157,0.4)]
              active:translate-y-[2px]
            "
            style={{
              background: "linear-gradient(180deg, #FF6B9D 0%, #9D4EDD 100%)",
              borderColor: "#FF6B9D",
              color: "#FFFFFF",
            }}
          >
            Sakura Purple
          </button>
        </div>

        {/* 霓虹青按钮 */}
        <div
          className="space-y-4 p-6 rounded-lg"
          style={{ backgroundColor: "rgba(37,40,54,0.5)" }}
        >
          <h4 className="text-sm font-pixel mb-4" style={{ color: "#E8E4DB" }}>
            Neon Cyan
          </h4>
          <button
            className="
              w-full px-6 py-3 font-pixel text-sm
              rounded-lg border-2 transition-all duration-200
              shadow-[4px_4px_0px_rgba(78,205,196,0.3)]
              hover:shadow-[6px_6px_0px_rgba(78,205,196,0.4)]
              active:translate-y-[2px]
              relative
            "
            style={{
              backgroundColor: "#4ECDC4",
              borderColor: "#4ECDC4",
              color: "#1A1D2E",
            }}
          >
            <span className="relative z-10">Cyber Cyan</span>
            {/* 霓虹光晕 */}
            <div
              className="absolute inset-0 opacity-50 blur-sm pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at center, rgba(78,205,196,0.6) 0%, transparent 70%)",
              }}
            />
          </button>

          {/* 带图标 */}
          <button
            className="
              w-full px-6 py-3 font-pixel text-sm
              rounded-lg border-2 transition-all duration-200
              shadow-[4px_4px_0px_rgba(78,205,196,0.3)]
              hover:shadow-[6px_6px_0px_rgba(78,205,196,0.4)]
              active:translate-y-[2px]
              flex items-center justify-center gap-2
            "
            style={{
              backgroundColor: "#4ECDC4",
              borderColor: "#4ECDC4",
              color: "#1A1D2E",
            }}
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            <span>Power</span>
          </button>
        </div>
      </div>
    </div>
  );
}

// ==================== Cyber Shrine 主题 ====================
function CyberShrineTheme() {
  return (
    <div
      className="space-y-6 p-8 rounded-lg"
      style={{ backgroundColor: "#1B4D5C" }}
    >
      <div className="text-center space-y-2">
        <h3 className="text-xl font-pixel" style={{ color: "#D4AF37" }}>
          Cyber Shrine (赛博神社)
        </h3>
        <p className="text-sm" style={{ color: "#A8A4A0" }}>
          墨黑底色 + 金色点缀 + 浮世绘纹样 + 神社元素
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* 金色神圣按钮 */}
        <div
          className="space-y-4 p-6 rounded-lg"
          style={{ backgroundColor: "rgba(44,44,44,0.5)" }}
        >
          <h4 className="text-sm font-pixel mb-4" style={{ color: "#E8E4DB" }}>
            Sacred Gold
          </h4>
          <button
            className="
              w-full px-6 py-3 font-pixel text-sm
              rounded-md border-2 transition-all duration-300
              shadow-[4px_4px_0px_rgba(212,175,55,0.3)]
              hover:shadow-[6px_6px_0px_rgba(212,175,55,0.5)]
              active:translate-y-[2px]
              relative overflow-hidden
            "
            style={{
              backgroundColor: "#D4AF37",
              borderColor: "#D4AF37",
              color: "#2C2C2C",
            }}
          >
            <span className="relative z-10">神社 Shrine</span>
            {/* 金色光晕 */}
            <div
              className="absolute inset-0 opacity-40 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at center, rgba(212,175,55,0.6) 0%, transparent 70%)",
              }}
            />
          </button>

          {/* 带纹样装饰 */}
          <button
            className="
              w-full px-6 py-3 font-pixel text-sm
              rounded-md border-2 transition-all duration-300
              shadow-[4px_4px_0px_rgba(212,175,55,0.3)]
              hover:shadow-[6px_6px_0px_rgba(212,175,55,0.5)]
              active:translate-y-[2px]
              relative
            "
            style={{
              backgroundColor: "#D4AF37",
              borderColor: "#D4AF37",
              color: "#2C2C2C",
            }}
          >
            <span className="relative z-10">鳥居 Torii</span>
            {/* 装饰纹样 */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#2C2C2C] to-transparent opacity-30" />
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#2C2C2C] to-transparent opacity-30" />
          </button>
        </div>

        {/* 神社红按钮 */}
        <div
          className="space-y-4 p-6 rounded-lg"
          style={{ backgroundColor: "rgba(44,44,44,0.5)" }}
        >
          <h4 className="text-sm font-pixel mb-4" style={{ color: "#E8E4DB" }}>
            Shrine Red
          </h4>
          <button
            className="
              w-full px-6 py-3 font-pixel text-sm
              rounded-md border-2 transition-all duration-300
              shadow-[4px_4px_0px_rgba(200,90,84,0.3)]
              hover:shadow-[6px_6px_0px_rgba(200,90,84,0.5)]
              active:translate-y-[2px]
              relative
            "
            style={{
              backgroundColor: "#C85A54",
              borderColor: "#C85A54",
              color: "#F5F1E8",
            }}
          >
            <span className="relative z-10">朱 Vermillion</span>
            {/* 墨迹质感 */}
            <div
              className="absolute inset-0 opacity-10 pointer-events-none"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' /%3E%3C/svg%3E\")",
              }}
            />
          </button>

          {/* 轮廓按钮 */}
          <button
            className="
              w-full px-6 py-3 font-pixel text-sm
              rounded-md border-2 transition-all duration-300
              bg-transparent
              hover:bg-[rgba(200,90,84,0.1)]
              shadow-[4px_4px_0px_rgba(200,90,84,0.2)]
              hover:shadow-[6px_6px_0px_rgba(200,90,84,0.3)]
            "
            style={{
              borderColor: "#C85A54",
              color: "#C85A54",
            }}
          >
            Outline Red
          </button>
        </div>

        {/* 雾灰按钮 */}
        <div
          className="space-y-4 p-6 rounded-lg"
          style={{ backgroundColor: "rgba(44,44,44,0.5)" }}
        >
          <h4 className="text-sm font-pixel mb-4" style={{ color: "#E8E4DB" }}>
            Mist Gray
          </h4>
          <button
            className="
              w-full px-6 py-3 font-pixel text-sm
              rounded-md border-2 transition-all duration-300
              shadow-[4px_4px_0px_rgba(168,164,160,0.3)]
              hover:shadow-[6px_6px_0px_rgba(168,164,160,0.5)]
              active:translate-y-[2px]
              relative
            "
            style={{
              backgroundColor: "#A8A4A0",
              borderColor: "#A8A4A0",
              color: "#2C2C2C",
            }}
          >
            <span className="relative z-10">霧 Mist</span>
          </button>

          {/* 带图标 */}
          <button
            className="
              w-full px-6 py-3 font-pixel text-sm
              rounded-md border-2 transition-all duration-300
              shadow-[4px_4px_0px_rgba(212,175,55,0.3)]
              hover:shadow-[6px_6px_0px_rgba(212,175,55,0.5)]
              active:translate-y-[2px]
              flex items-center justify-center gap-2
            "
            style={{
              backgroundColor: "#D4AF37",
              borderColor: "#D4AF37",
              color: "#2C2C2C",
            }}
          >
            <span>⛩️</span>
            <span>参拝 Visit</span>
          </button>
        </div>
      </div>
    </div>
  );
}

// ==================== Dreamy Lo-fi 主题 ====================
function DreamyLofiTheme() {
  return (
    <div
      className="space-y-6 p-8 rounded-lg"
      style={{ backgroundColor: "#F5F1E8" }}
    >
      <div className="text-center space-y-2">
        <h3 className="text-xl font-pixel" style={{ color: "#7BA05B" }}>
          Dreamy Lo-fi (梦幻低保真)
        </h3>
        <p className="text-sm" style={{ color: "#5A5A5A" }}>
          米白纸感背景 + 抹茶绿点缀 + 极轻渐变 + 柔和阴影
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* 抹茶绿按钮 */}
        <div
          className="space-y-4 p-6 rounded-lg"
          style={{ backgroundColor: "#E8E4DB" }}
        >
          <h4 className="text-sm font-pixel mb-4" style={{ color: "#2C2C2C" }}>
            Matcha Green
          </h4>
          <button
            className="
              w-full px-6 py-3 font-pixel text-sm
              rounded-lg border-2 transition-all duration-300
              relative overflow-hidden
            "
            style={{
              backgroundColor: "#7BA05B",
              borderColor: "#7BA05B",
              color: "#F5F1E8",
              boxShadow: "4px 4px 0px rgba(123,160,91,0.2)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow =
                "6px 6px 0px rgba(123,160,91,0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow =
                "4px 4px 0px rgba(123,160,91,0.2)";
            }}
          >
            <span className="relative z-10">抹茶 Matcha</span>
            {/* 柔和渐变 */}
            <div
              className="absolute inset-0 opacity-20 pointer-events-none"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.3) 0%, transparent 100%)",
              }}
            />
          </button>

          {/* Dithering 渐变 */}
          <button
            className="
              w-full px-6 py-3 font-pixel text-sm
              rounded-lg border-2 transition-all duration-300
              relative overflow-hidden
            "
            style={{
              backgroundColor: "#7BA05B",
              borderColor: "#7BA05B",
              color: "#F5F1E8",
              boxShadow: "4px 4px 0px rgba(123,160,91,0.2)",
            }}
          >
            <span className="relative z-10">Dithering</span>
            {/* Dithering 效果 */}
            <div
              className="absolute inset-0 opacity-30 pointer-events-none"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255,255,255,0.3) 2px, rgba(255,255,255,0.3) 4px)",
              }}
            />
          </button>
        </div>

        {/* 淡樱粉按钮 */}
        <div
          className="space-y-4 p-6 rounded-lg"
          style={{ backgroundColor: "#E8E4DB" }}
        >
          <h4 className="text-sm font-pixel mb-4" style={{ color: "#2C2C2C" }}>
            Soft Sakura
          </h4>
          <button
            className="
              w-full px-6 py-3 font-pixel text-sm
              rounded-lg border-2 transition-all duration-300
              relative
            "
            style={{
              backgroundColor: "#FFB6C1",
              borderColor: "#FFB6C1",
              color: "#2C2C2C",
              boxShadow: "4px 4px 0px rgba(255,182,193,0.3)",
            }}
          >
            <span className="relative z-10">桜 Sakura</span>
            {/* 云朵装饰 */}
            <div
              className="absolute top-1 right-2 w-3 h-3 rounded-full opacity-20"
              style={{ backgroundColor: "#FFFFFF" }}
            />
          </button>

          {/* 渐变按钮 */}
          <button
            className="
              w-full px-6 py-3 font-pixel text-sm
              rounded-lg border-2 transition-all duration-300
            "
            style={{
              background: "linear-gradient(135deg, #FFB6C1 0%, #7BA05B 100%)",
              borderColor: "#FFB6C1",
              color: "#2C2C2C",
              boxShadow: "4px 4px 0px rgba(255,182,193,0.3)",
            }}
          >
            Sakura Matcha
          </button>
        </div>

        {/* 金色按钮 */}
        <div
          className="space-y-4 p-6 rounded-lg"
          style={{ backgroundColor: "#E8E4DB" }}
        >
          <h4 className="text-sm font-pixel mb-4" style={{ color: "#2C2C2C" }}>
            Warm Gold
          </h4>
          <button
            className="
              w-full px-6 py-3 font-pixel text-sm
              rounded-lg border-2 transition-all duration-300
              relative
            "
            style={{
              backgroundColor: "#D4AF37",
              borderColor: "#D4AF37",
              color: "#2C2C2C",
              boxShadow: "4px 4px 0px rgba(212,175,55,0.3)",
            }}
          >
            <span className="relative z-10">金 Gold</span>
            {/* 星星装饰 */}
            <div className="absolute top-1 left-2 text-xs opacity-50">✨</div>
          </button>

          {/* 轮廓按钮 */}
          <button
            className="
              w-full px-6 py-3 font-pixel text-sm
              rounded-lg border-2 transition-all duration-300
              bg-transparent
              hover:bg-[rgba(212,175,55,0.1)]
            "
            style={{
              borderColor: "#D4AF37",
              color: "#D4AF37",
              boxShadow: "4px 4px 0px rgba(212,175,55,0.2)",
            }}
          >
            Outline Gold
          </button>
        </div>
      </div>
    </div>
  );
}

// ==================== Vaporwave 主题 ====================
function VaporwaveTheme() {
  return (
    <div
      className="space-y-6 p-8 rounded-lg"
      style={{
        background:
          "linear-gradient(180deg, #240046 0%, #3C096C 50%, #5A189A 100%)",
      }}
    >
      <div className="text-center space-y-2">
        <h3 className="text-xl font-pixel" style={{ color: "#FF006E" }}>
          Vaporwave (蒸汽波)
        </h3>
        <p className="text-sm" style={{ color: "#C77DFF" }}>
          渐变底色 + 霓虹粉 + 赛博青 + 网格纹理 + 复古未来感
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* 霓虹粉按钮 */}
        <div
          className="space-y-4 p-6 rounded-lg"
          style={{
            backgroundColor: "rgba(60,9,108,0.5)",
            backdropFilter: "blur(10px)",
          }}
        >
          <h4 className="text-sm font-pixel mb-4" style={{ color: "#E0AAFF" }}>
            Neon Pink
          </h4>
          <button
            className="
              w-full px-6 py-3 font-pixel text-sm
              rounded-lg border-2 transition-all duration-200
              relative overflow-hidden
            "
            style={{
              backgroundColor: "#FF006E",
              borderColor: "#FF006E",
              color: "#FFFFFF",
              boxShadow:
                "0 0 20px rgba(255,0,110,0.5), 4px 4px 0px rgba(255,0,110,0.3)",
            }}
          >
            <span className="relative z-10">NEON PINK</span>
            {/* 霓虹光晕 */}
            <div
              className="absolute inset-0 opacity-50 blur-md pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at center, rgba(255,0,110,0.8) 0%, transparent 70%)",
              }}
            />
          </button>

          {/* 带网格纹理 */}
          <button
            className="
              w-full px-6 py-3 font-pixel text-sm
              rounded-lg border-2 transition-all duration-200
              relative overflow-hidden
            "
            style={{
              backgroundColor: "#FF006E",
              borderColor: "#FF006E",
              color: "#FFFFFF",
              boxShadow: "4px 4px 0px rgba(255,0,110,0.3)",
            }}
          >
            <span className="relative z-10">GRID</span>
            {/* 网格纹理 */}
            <div
              className="absolute inset-0 opacity-20 pointer-events-none"
              style={{
                backgroundImage:
                  "linear-gradient(0deg, transparent 24%, rgba(255,255,255,0.3) 25%, rgba(255,255,255,0.3) 26%, transparent 27%, transparent 74%, rgba(255,255,255,0.3) 75%, rgba(255,255,255,0.3) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255,255,255,0.3) 25%, rgba(255,255,255,0.3) 26%, transparent 27%, transparent 74%, rgba(255,255,255,0.3) 75%, rgba(255,255,255,0.3) 76%, transparent 77%, transparent)",
                backgroundSize: "8px 8px",
              }}
            />
          </button>
        </div>

        {/* 赛博青按钮 */}
        <div
          className="space-y-4 p-6 rounded-lg"
          style={{
            backgroundColor: "rgba(60,9,108,0.5)",
            backdropFilter: "blur(10px)",
          }}
        >
          <h4 className="text-sm font-pixel mb-4" style={{ color: "#E0AAFF" }}>
            Cyber Cyan
          </h4>
          <button
            className="
              w-full px-6 py-3 font-pixel text-sm
              rounded-lg border-2 transition-all duration-200
              relative
            "
            style={{
              backgroundColor: "#00F5FF",
              borderColor: "#00F5FF",
              color: "#240046",
              boxShadow:
                "0 0 20px rgba(0,245,255,0.5), 4px 4px 0px rgba(0,245,255,0.3)",
            }}
          >
            <span className="relative z-10">CYBER CYAN</span>
          </button>

          {/* 渐变按钮 */}
          <button
            className="
              w-full px-6 py-3 font-pixel text-sm
              rounded-lg border-2 transition-all duration-200
            "
            style={{
              background: "linear-gradient(135deg, #FF006E 0%, #00F5FF 100%)",
              borderColor: "#FF006E",
              color: "#FFFFFF",
              boxShadow: "4px 4px 0px rgba(255,0,110,0.3)",
            }}
          >
            GRADIENT
          </button>
        </div>

        {/* 紫色按钮 */}
        <div
          className="space-y-4 p-6 rounded-lg"
          style={{
            backgroundColor: "rgba(60,9,108,0.5)",
            backdropFilter: "blur(10px)",
          }}
        >
          <h4 className="text-sm font-pixel mb-4" style={{ color: "#E0AAFF" }}>
            Vapor Purple
          </h4>
          <button
            className="
              w-full px-6 py-3 font-pixel text-sm
              rounded-lg border-2 transition-all duration-200
              relative
            "
            style={{
              backgroundColor: "#9D4EDD",
              borderColor: "#9D4EDD",
              color: "#FFFFFF",
              boxShadow: "4px 4px 0px rgba(157,78,221,0.3)",
            }}
          >
            <span className="relative z-10">PURPLE</span>
          </button>

          {/* 玻璃效果 */}
          <button
            className="
              w-full px-6 py-3 font-pixel text-sm
              rounded-lg border-2 transition-all duration-200
              relative overflow-hidden
            "
            style={{
              background: "rgba(157,78,221,0.2)",
              borderColor: "rgba(157,78,221,0.5)",
              color: "#E0AAFF",
              backdropFilter: "blur(10px)",
              boxShadow: "0 8px 32px 0 rgba(157,78,221,0.2)",
            }}
          >
            <span className="relative z-10">GLASS</span>
            {/* 顶部高光 */}
            <div
              className="absolute top-0 left-0 right-0 h-1/2 pointer-events-none"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.2) 0%, transparent 100%)",
              }}
            />
          </button>
        </div>
      </div>

      {/* 特色效果展示 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {/* 三色渐变 */}
        <div
          className="p-6 rounded-lg"
          style={{ backgroundColor: "rgba(60,9,108,0.5)" }}
        >
          <h4 className="text-sm font-pixel mb-4" style={{ color: "#E0AAFF" }}>
            Triple Gradient
          </h4>
          <button
            className="
              w-full px-6 py-3 font-pixel text-sm
              rounded-lg border-2 transition-all duration-200
            "
            style={{
              background:
                "linear-gradient(135deg, #FF006E 0%, #9D4EDD 50%, #00F5FF 100%)",
              borderColor: "#FF006E",
              color: "#FFFFFF",
              boxShadow: "4px 4px 0px rgba(255,0,110,0.3)",
            }}
          >
            AESTHETIC
          </button>
        </div>

        {/* 带图标 */}
        <div
          className="p-6 rounded-lg"
          style={{ backgroundColor: "rgba(60,9,108,0.5)" }}
        >
          <h4 className="text-sm font-pixel mb-4" style={{ color: "#E0AAFF" }}>
            With Icon
          </h4>
          <button
            className="
              w-full px-6 py-3 font-pixel text-sm
              rounded-lg border-2 transition-all duration-200
              flex items-center justify-center gap-2
            "
            style={{
              backgroundColor: "#FF006E",
              borderColor: "#FF006E",
              color: "#FFFFFF",
              boxShadow: "0 0 20px rgba(255,0,110,0.5)",
            }}
          >
            <span>🌴</span>
            <span>VAPOR WAVE</span>
            <span>🌴</span>
          </button>
        </div>
      </div>
    </div>
  );
}
