import React from "react";

/**
 * 增强版 Button 测试页面
 * 展示多主题变体和精美视觉效果
 */
export function EnhancedButtonTest() {
  const [activeTheme, setActiveTheme] =
    React.useState<string>("retro-futurism");

  const themes = [
    {
      id: "retro-futurism",
      name: "Retro Futurism",
      desc: "复古未来 - 霓虹青 + 深色底",
    },
    {
      id: "neo-tokyo",
      name: "Neo Tokyo Night",
      desc: "新东京夜景 - 樱粉 + 霓虹青",
    },
    {
      id: "cyber-shrine",
      name: "Cyber Shrine",
      desc: "赛博神社 - 墨黑 + 金色",
    },
    {
      id: "dreamy-lofi",
      name: "Dreamy Lo-fi",
      desc: "梦幻低保真 - 米白 + 抹茶绿",
    },
    { id: "vaporwave", name: "Vaporwave", desc: "蒸汽波 - 青紫粉渐变" },
  ];

  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)] p-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* 标题 */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-pixel text-[var(--color-text-primary)]">
            精美像素风按钮
          </h1>
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
        <section className="space-y-4">
          <h2 className="text-lg font-pixel text-[var(--color-text-primary)] border-b-2 border-[var(--color-text-secondary)] pb-2">
            主题选择 (Theme Selector)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {themes.map((theme) => (
              <button
                key={theme.id}
                onClick={() => setActiveTheme(theme.id)}
                className={`
                  p-4 rounded-lg border-2 transition-all duration-200
                  ${
                    activeTheme === theme.id
                      ? "border-[var(--color-accent)] bg-[var(--color-accent)] bg-opacity-10"
                      : "border-[var(--color-text-secondary)] border-opacity-20 hover:border-opacity-40"
                  }
                `}
              >
                <div className="text-sm font-pixel text-[var(--color-text-primary)] mb-1">
                  {theme.name}
                </div>
                <div className="text-xs text-[var(--color-text-secondary)]">
                  {theme.desc}
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Retro Futurism 主题 */}
        {activeTheme === "retro-futurism" && (
          <section
            className="space-y-6 p-8 rounded-lg"
            style={{ backgroundColor: "#1A1D2E" }}
          >
            <div className="text-center space-y-2">
              <h2 className="text-xl font-pixel" style={{ color: "#4ECDC4" }}>
                Retro Futurism
              </h2>
              <p className="text-sm" style={{ color: "#A8A4A0" }}>
                深色底色 + 霓虹青边框 + 轻微 CRT 光晕
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Primary */}
              <div
                className="space-y-4 p-6 rounded-lg"
                style={{ backgroundColor: "#252836" }}
              >
                <h3
                  className="text-sm font-pixel mb-4"
                  style={{ color: "#E8E4DB" }}
                >
                  Primary
                </h3>
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

                {/* 带铆钉装饰 */}
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
                  <span className="relative z-10">With Rivets</span>
                  {/* 四角铆钉 */}
                  <div className="absolute top-1 left-1 w-2 h-2 rounded-full bg-[#1A1D2E] opacity-50" />
                  <div className="absolute top-1 right-1 w-2 h-2 rounded-full bg-[#1A1D2E] opacity-50" />
                  <div className="absolute bottom-1 left-1 w-2 h-2 rounded-full bg-[#1A1D2E] opacity-50" />
                  <div className="absolute bottom-1 right-1 w-2 h-2 rounded-full bg-[#1A1D2E] opacity-50" />
                </button>
              </div>

              {/* Secondary */}
              <div
                className="space-y-4 p-6 rounded-lg"
                style={{ backgroundColor: "#252836" }}
              >
                <h3
                  className="text-sm font-pixel mb-4"
                  style={{ color: "#E8E4DB" }}
                >
                  Secondary
                </h3>
                <button
                  className="
                    w-full px-6 py-3 font-pixel text-sm
                    rounded-md border-2 transition-all duration-200
                    bg-transparent
                    hover:bg-[rgba(78,205,196,0.1)]
                    shadow-[4px_4px_0px_rgba(78,205,196,0.2)]
                    hover:shadow-[6px_6px_0px_rgba(78,205,196,0.3)]
                    active:translate-y-[2px]
                  "
                  style={{
                    borderColor: "#4ECDC4",
                    color: "#4ECDC4",
                  }}
                >
                  Outline Neon
                </button>

                {/* 带扫描线 */}
                <button
                  className="
                    w-full px-6 py-3 font-pixel text-sm
                    rounded-md border-2 transition-all duration-200
                    bg-transparent
                    hover:bg-[rgba(78,205,196,0.1)]
                    relative overflow-hidden
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

              {/* Danger */}
              <div
                className="space-y-4 p-6 rounded-lg"
                style={{ backgroundColor: "#252836" }}
              >
                <h3
                  className="text-sm font-pixel mb-4"
                  style={{ color: "#E8E4DB" }}
                >
                  Danger
                </h3>
                <button
                  className="
                    w-full px-6 py-3 font-pixel text-sm
                    rounded-md border-2 transition-all duration-200
                    shadow-[4px_4px_0px_rgba(255,107,157,0.3)]
                    hover:shadow-[6px_6px_0px_rgba(255,107,157,0.4)]
                    hover:brightness-110
                    active:translate-y-[2px]
                  "
                  style={{
                    backgroundColor: "#FF6B9D",
                    borderColor: "#FF6B9D",
                    color: "#1A1D2E",
                  }}
                >
                  Alert Pink
                </button>

                {/* 带脉冲动画 */}
                <button
                  className="
                    w-full px-6 py-3 font-pixel text-sm
                    rounded-md border-2 transition-all duration-200
                    relative
                    animate-pulse-pixel
                  "
                  style={{
                    backgroundColor: "#FF6B9D",
                    borderColor: "#FF6B9D",
                    color: "#1A1D2E",
                  }}
                >
                  Pulsing
                </button>
              </div>

              {/* Ghost */}
              <div
                className="space-y-4 p-6 rounded-lg"
                style={{ backgroundColor: "#252836" }}
              >
                <h3
                  className="text-sm font-pixel mb-4"
                  style={{ color: "#E8E4DB" }}
                >
                  Ghost
                </h3>
                <button
                  className="
                    w-full px-6 py-3 font-pixel text-sm
                    rounded-md border-2 border-transparent transition-all duration-200
                    hover:bg-[rgba(232,228,219,0.1)]
                  "
                  style={{
                    color: "#E8E4DB",
                  }}
                >
                  Minimal
                </button>

                {/* 带图标 */}
                <button
                  className="
                    w-full px-6 py-3 font-pixel text-sm
                    rounded-md border-2 border-transparent transition-all duration-200
                    hover:bg-[rgba(232,228,219,0.1)]
                    flex items-center justify-center gap-2
                  "
                  style={{
                    color: "#E8E4DB",
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
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  Settings
                </button>
              </div>
            </div>

            {/* 尺寸展示 */}
            <div
              className="space-y-4 p-6 rounded-lg"
              style={{ backgroundColor: "#252836" }}
            >
              <h3
                className="text-sm font-pixel mb-4"
                style={{ color: "#E8E4DB" }}
              >
                尺寸变体 (Sizes)
              </h3>
              <div className="flex flex-wrap items-center gap-4">
                <button
                  className="px-4 py-2 font-pixel text-xs rounded-md border-2 transition-all duration-200"
                  style={{
                    backgroundColor: "#4ECDC4",
                    borderColor: "#4ECDC4",
                    color: "#1A1D2E",
                  }}
                >
                  Small
                </button>
                <button
                  className="px-6 py-3 font-pixel text-sm rounded-md border-2 transition-all duration-200"
                  style={{
                    backgroundColor: "#4ECDC4",
                    borderColor: "#4ECDC4",
                    color: "#1A1D2E",
                  }}
                >
                  Medium
                </button>
                <button
                  className="px-8 py-4 font-pixel text-base rounded-md border-2 transition-all duration-200"
                  style={{
                    backgroundColor: "#4ECDC4",
                    borderColor: "#4ECDC4",
                    color: "#1A1D2E",
                  }}
                >
                  Large
                </button>
              </div>
            </div>
          </section>
        )}

        {/* Neo Tokyo Night 主题 */}
        {activeTheme === "neo-tokyo" && (
          <section
            className="space-y-6 p-8 rounded-lg"
            style={{ backgroundColor: "#1A1D2E" }}
          >
            <div className="text-center space-y-2">
              <h2 className="text-xl font-pixel" style={{ color: "#FF6B9D" }}>
                Neo Tokyo Night
              </h2>
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
                <h3
                  className="text-sm font-pixel mb-4"
                  style={{ color: "#E8E4DB" }}
                >
                  Glassmorphism
                </h3>
                <button
                  className="
                    w-full px-6 py-3 font-pixel text-sm
                    rounded-lg border-2 transition-all duration-200
                    relative overflow-hidden
                    shadow-[0_8px_32px_0_rgba(255,107,157,0.2)]
                    hover:shadow-[0_8px_32px_0_rgba(255,107,157,0.4)]
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
              </div>

              {/* 樱粉渐变按钮 */}
              <div
                className="space-y-4 p-6 rounded-lg"
                style={{ backgroundColor: "rgba(37,40,54,0.5)" }}
              >
                <h3
                  className="text-sm font-pixel mb-4"
                  style={{ color: "#E8E4DB" }}
                >
                  Sakura Gradient
                </h3>
                <button
                  className="
                    w-full px-6 py-3 font-pixel text-sm
                    rounded-lg border-2 transition-all duration-200
                    shadow-[4px_4px_0px_rgba(255,107,157,0.3)]
                    hover:shadow-[6px_6px_0px_rgba(255,107,157,0.4)]
                    active:translate-y-[2px]
                  "
                  style={{
                    background:
                      "linear-gradient(135deg, #FF6B9D 0%, #4ECDC4 100%)",
                    borderColor: "#FF6B9D",
                    color: "#1A1D2E",
                  }}
                >
                  Sakura Cyan
                </button>
              </div>

              {/* 霓虹青按钮 */}
              <div
                className="space-y-4 p-6 rounded-lg"
                style={{ backgroundColor: "rgba(37,40,54,0.5)" }}
              >
                <h3
                  className="text-sm font-pixel mb-4"
                  style={{ color: "#E8E4DB" }}
                >
                  Neon Cyan
                </h3>
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
              </div>
            </div>
          </section>
        )}

        {/* 其他主题提示 */}
        {!["retro-futurism", "neo-tokyo"].includes(activeTheme) && (
          <section className="space-y-6 p-8 rounded-lg bg-[var(--color-bg-secondary)] border-2 border-[var(--color-accent)] border-opacity-30">
            <div className="text-center space-y-4">
              <div className="text-6xl">🚧</div>
              <h2 className="text-xl font-pixel text-[var(--color-text-primary)]">
                {themes.find((t) => t.id === activeTheme)?.name}
              </h2>
              <p className="text-sm text-[var(--color-text-secondary)]">
                此主题正在开发中...
              </p>
              <p className="text-xs text-[var(--color-text-secondary)]">
                {themes.find((t) => t.id === activeTheme)?.desc}
              </p>
            </div>
          </section>
        )}

        {/* 设计说明 */}
        <section className="space-y-4 p-6 bg-[var(--color-bg-secondary)] rounded-lg border-2 border-[var(--color-accent)]">
          <h2 className="text-lg font-pixel text-[var(--color-text-primary)]">
            设计原则 (Design Principles)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-[var(--color-text-secondary)]">
            <div>
              <h3 className="font-pixel text-[var(--color-text-primary)] mb-2">
                视觉层
              </h3>
              <ul className="space-y-1">
                <li>• Clean pixel, high readability</li>
                <li>• Limited palette (6-12 colors)</li>
                <li>• Subtle dithering, soft CRT glow</li>
                <li>• Wabi-sabi inspired texture</li>
              </ul>
            </div>
            <div>
              <h3 className="font-pixel text-[var(--color-text-primary)] mb-2">
                交互层
              </h3>
              <ul className="space-y-1">
                <li>• Micro-interactions</li>
                <li>• Easing soft (200-300ms)</li>
                <li>• Hover sparkle & glow</li>
                <li>• Button press depth (2-4px)</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
