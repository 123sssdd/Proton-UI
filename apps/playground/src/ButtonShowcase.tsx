import React from "react";
import { Button } from "@proton-ui/core";

/**
 * Button 完整展示页面
 * 包含基础风格和艺术风格
 * Refactored to use @proton-ui/core "Smart" Button component
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
    <div className="min-h-screen bg-[var(--pixel-bg-primary)] p-8">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* 页面标题 */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-pixel text-[var(--pixel-text-primary)]">
            Button 组件完整展示
          </h1>
          <p className="text-sm text-[var(--pixel-text-secondary)]">
            从基础到精美 - 艺术风格按钮的完整演示
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
            艺术风格
          </a>
        </nav>

        {/* ==================== 基础风格部分 ==================== */}
        <section id="basic" className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-pixel text-[var(--pixel-text-primary)]">
              基础风格 (Basic Style)
            </h2>
            <p className="text-sm text-[var(--pixel-text-secondary)]">
              简洁实用的基础风格按钮 - 适合快速开发
            </p>
          </div>

          {/* 基础变体 */}
          <div className="space-y-6">
            <h3 className="text-lg font-pixel text-[var(--pixel-text-primary)] border-b-2 border-[var(--pixel-text-secondary)] pb-2">
              按钮变体 (Variants)
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Primary */}
              <div className="space-y-4 p-6 bg-[var(--pixel-bg-secondary)] rounded-lg border-2 border-[var(--pixel-border)]">
                <h4 className="text-sm font-pixel text-[var(--pixel-text-primary)] mb-4">
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
              <div className="space-y-4 p-6 bg-[var(--pixel-bg-secondary)] rounded-lg border-2 border-[var(--pixel-border)]">
                <h4 className="text-sm font-pixel text-[var(--pixel-text-primary)] mb-4">
                  Secondary
                </h4>
                <Button variant="secondary">Secondary Button</Button>
                <Button variant="secondary" disabled>
                  Disabled
                </Button>
              </div>

              {/* Danger */}
              <div className="space-y-4 p-6 bg-[var(--pixel-bg-secondary)] rounded-lg border-2 border-[var(--pixel-border)]">
                <h4 className="text-sm font-pixel text-[var(--pixel-text-primary)] mb-4">
                  Danger
                </h4>
                <Button variant="danger">Danger Button</Button>
                <Button variant="danger" disabled>
                  Disabled
                </Button>
              </div>

              {/* Ghost */}
              <div className="space-y-4 p-6 bg-[var(--pixel-bg-secondary)] rounded-lg border-2 border-[var(--pixel-border)]">
                <h4 className="text-sm font-pixel text-[var(--pixel-text-primary)] mb-4">
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
            <h3 className="text-lg font-pixel text-[var(--pixel-text-primary)] border-b-2 border-[var(--pixel-text-secondary)] pb-2">
              按钮尺寸 (Sizes)
            </h3>

            <div className="flex flex-wrap items-center gap-4 p-6 bg-[var(--pixel-bg-secondary)] rounded-lg">
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
            <div className="w-full border-t-2 border-[var(--pixel-border)]"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="px-4 bg-[var(--pixel-bg-primary)] text-sm font-pixel text-[var(--pixel-text-secondary)]">
              ✨ 艺术风格 ✨
            </span>
          </div>
        </div>

        {/* ==================== 艺术风格部分 ==================== */}
        <section id="enhanced" className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-pixel text-[var(--pixel-text-primary)]">
              艺术风格 (Enhanced Pixel Style)
            </h2>
            <p className="text-sm text-[var(--pixel-text-secondary)]">
              Clean Pixel + High Readability + Japanese Aesthetic
            </p>
          </div>

          {/* 主题选择器 */}
          <div className="space-y-4">
            <h3 className="text-lg font-pixel text-[var(--pixel-text-primary)] border-b-2 border-[var(--pixel-border)] pb-2">
              主题选择 (Theme Selector)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {themes.map((theme) => (
                <button
                  key={theme.id}
                  onClick={() => setActiveTheme(theme.id)}
                  className={`
                    p-4 rounded-lg border-2 transition-all duration-200 font-pixel text-left
                    ${
                      activeTheme === theme.id
                        ? "border-[var(--pixel-accent-cyan)] bg-[var(--pixel-bg-tertiary)] scale-105 shadow-pixel-sm"
                        : "border-[var(--pixel-border)] hover:border-[var(--pixel-accent-cyan)] hover:opacity-80"
                    }
                  `}
                >
                  <div
                    className="w-full h-2 rounded mb-2 pixel-card"
                    style={{ backgroundColor: theme.color }}
                  />
                  <div className="text-xs text-[var(--pixel-text-primary)] mb-1">
                    {theme.name}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* 主题内容区域 - 动态渲染 */}
          <div className="min-h-[400px]">
            {activeTheme === "retro-futurism" && (
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-8 bg-[#1A1D2E] rounded-lg border-2 border-[#1A1D2E]">
                <div className="space-y-4">
                  <h4 className="text-sm font-pixel text-[#E8E4DB]">
                    Neon Glow
                  </h4>
                  <Button pixelTheme="retro-futurism" glow>
                    Neon Button
                  </Button>
                </div>
                <div className="space-y-4">
                  <h4 className="text-sm font-pixel text-[#E8E4DB]">
                    With Rivets
                  </h4>
                  <Button pixelTheme="retro-futurism" decoration="rivets">
                    Metal Rivets
                  </Button>
                </div>
                <div className="space-y-4">
                  <h4 className="text-sm font-pixel text-[#E8E4DB]">
                    Scanline
                  </h4>
                  <Button pixelTheme="retro-futurism" decoration="scanline">
                    Scanline
                  </Button>
                </div>
                <div className="space-y-4">
                  <h4 className="text-sm font-pixel text-[#E8E4DB]">Basic</h4>
                  <Button pixelTheme="retro-futurism">Retro Basic</Button>
                </div>
              </div>
            )}

            {activeTheme === "neo-tokyo" && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8 bg-[#1A1D2E] rounded-lg border-2 border-[#FF6B9D]">
                <div className="space-y-4">
                  <h4 className="text-sm font-pixel text-[#E8E4DB]">
                    Sakura Glow
                  </h4>
                  <Button pixelTheme="neo-tokyo" glow>
                    Sakura Button
                  </Button>
                </div>
                <div className="space-y-4">
                  <h4 className="text-sm font-pixel text-[#E8E4DB]">
                    Glitch Effect
                  </h4>
                  <Button pixelTheme="neo-tokyo" decoration="glitch">
                    Glitch
                  </Button>
                </div>
                <div className="space-y-4">
                  <h4 className="text-sm font-pixel text-[#E8E4DB]">Basic</h4>
                  <Button pixelTheme="neo-tokyo">Neo Basic</Button>
                </div>
              </div>
            )}

            {activeTheme === "cyber-shrine" && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8 bg-[#1B4D5C] rounded-lg border-2 border-[#D4AF37]">
                <div className="space-y-4">
                  <h4 className="text-sm font-pixel text-[#E8E4DB]">
                    Sacred Gold
                  </h4>
                  <Button pixelTheme="cyber-shrine" glow>
                    Shrine Gold
                  </Button>
                </div>
                <div className="space-y-4">
                  <h4 className="text-sm font-pixel text-[#E8E4DB]">Rivets</h4>
                  <Button pixelTheme="cyber-shrine" decoration="rivets">
                    Torii Gate
                  </Button>
                </div>
                <div className="space-y-4">
                  <h4 className="text-sm font-pixel text-[#E8E4DB]">Basic</h4>
                  <Button pixelTheme="cyber-shrine">Shrine Basic</Button>
                </div>
              </div>
            )}

            {(activeTheme === "dreamy-lofi" || activeTheme === "vaporwave") && (
              <div className="p-8 flex items-center justify-center text-[var(--pixel-text-secondary)] font-pixel">
                (More themes coming soon via core update...)
                <div className="ml-4 gap-4 flex">
                  <Button pixelTheme={activeTheme as any}>Demo Button</Button>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
