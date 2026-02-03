import React from "react";
import { Card } from "@proton-ui/core";

/**
 * Card 完整展示页面
 * 包含基础风格和精美像素风格
 */
export function CardShowcase() {
  const [activeTheme, setActiveTheme] =
    React.useState<string>("retro-futurism");

  const themes = [
    {
      id: "retro-futurism",
      name: "Retro Futurism",
      desc: "霓虹边框 + CRT 光晕",
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
      desc: "和纸质感 + 金色",
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
    <div className="min-h-screen bg-[var(--color-bg-primary)] p-8">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* 页面标题 */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-pixel text-[var(--color-text-primary)]">
            Card 组件完整展示
          </h1>
          <p className="text-sm text-[var(--color-text-secondary)]">
            从基础到精美 - 像素风格卡片的完整演示
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
              简洁实用的像素风格卡片 - 适合快速开发
            </p>
          </div>

          {/* 基础卡片 */}
          <div className="space-y-6">
            <h3 className="text-lg font-pixel text-[var(--color-text-primary)] border-b-2 border-[var(--color-text-secondary)] pb-2">
              基础卡片 (Basic Cards)
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* 简单卡片 */}
              <Card padding="md" shadow="md">
                <h4 className="text-sm font-pixel text-[var(--color-text-primary)] mb-2">
                  简单卡片
                </h4>
                <p className="text-xs text-[var(--color-text-secondary)]">
                  这是一个简单的卡片示例，包含标题和内容。
                </p>
              </Card>

              {/* 带头部卡片 */}
              <Card padding="none" shadow="md">
                <Card.Header
                  title="带头部卡片"
                  subtitle="副标题说明"
                  className="p-4"
                />
                <Card.Body className="px-4 pb-4">
                  <p className="text-xs text-[var(--color-text-secondary)]">
                    这是卡片的主体内容区域。
                  </p>
                </Card.Body>
              </Card>

              {/* 完整卡片 */}
              <Card padding="none" shadow="md">
                <Card.Header
                  title="完整卡片"
                  subtitle="包含所有部分"
                  className="p-4"
                />
                <Card.Body className="px-4">
                  <p className="text-xs text-[var(--color-text-secondary)]">
                    包含头部、主体和底部的完整卡片。
                  </p>
                </Card.Body>
                <Card.Footer className="px-4 pb-4">
                  <button className="px-3 py-1 text-xs font-pixel bg-[var(--color-accent)] text-white rounded">
                    操作
                  </button>
                </Card.Footer>
              </Card>
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
          <div className="min-h-[800px]">
            {activeTheme === "retro-futurism" && <RetroFuturismTheme />}
            {activeTheme === "neo-tokyo" && <NeoTokyoTheme />}
            {activeTheme === "cyber-shrine" && <CyberShrineTheme />}
            {activeTheme === "dreamy-lofi" && <DreamyLofiTheme />}
            {activeTheme === "vaporwave" && <VaporwaveTheme />}
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
          霓虹边框 + CRT 光晕 + 扫描线纹理 + 金属铆钉
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* 霓虹卡片 */}
        <div
          className="p-6 rounded-md border-2 transition-all duration-200 hover:scale-105 relative overflow-hidden"
          style={{
            backgroundColor: "#252836",
            borderColor: "#4ECDC4",
            boxShadow:
              "4px 4px 0px rgba(78,205,196,0.3), 0 0 20px rgba(78,205,196,0.2)",
          }}
        >
          <h4 className="text-sm font-pixel mb-3" style={{ color: "#4ECDC4" }}>
            Neon Card
          </h4>
          <p className="text-xs mb-4" style={{ color: "#E8E4DB" }}>
            霓虹青边框卡片，带有轻微的 CRT 光晕效果。
          </p>
          <div className="flex gap-2">
            <button
              className="px-3 py-1 text-xs font-pixel rounded border-2 transition-all"
              style={{
                backgroundColor: "#4ECDC4",
                borderColor: "#4ECDC4",
                color: "#1A1D2E",
              }}
            >
              查看
            </button>
          </div>
          {/* CRT 光晕 */}
          <div
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at center, rgba(78,205,196,0.4) 0%, transparent 70%)",
            }}
          />
        </div>

        {/* 带铆钉卡片 */}
        <div
          className="p-6 rounded-md border-2 transition-all duration-200 hover:scale-105 relative"
          style={{
            backgroundColor: "#252836",
            borderColor: "#4ECDC4",
            boxShadow: "4px 4px 0px rgba(78,205,196,0.3)",
          }}
        >
          <h4 className="text-sm font-pixel mb-3" style={{ color: "#4ECDC4" }}>
            With Rivets
          </h4>
          <p className="text-xs mb-4" style={{ color: "#E8E4DB" }}>
            四角金属铆钉装饰，增添机械感。
          </p>
          <div className="flex gap-2">
            <button
              className="px-3 py-1 text-xs font-pixel rounded border-2"
              style={{
                backgroundColor: "transparent",
                borderColor: "#4ECDC4",
                color: "#4ECDC4",
              }}
            >
              详情
            </button>
          </div>
          {/* 四角铆钉 */}
          <div className="absolute top-2 left-2 w-2 h-2 rounded-full bg-[#1A1D2E] opacity-50 shadow-inner" />
          <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#1A1D2E] opacity-50 shadow-inner" />
          <div className="absolute bottom-2 left-2 w-2 h-2 rounded-full bg-[#1A1D2E] opacity-50 shadow-inner" />
          <div className="absolute bottom-2 right-2 w-2 h-2 rounded-full bg-[#1A1D2E] opacity-50 shadow-inner" />
        </div>

        {/* 扫描线卡片 */}
        <div
          className="p-6 rounded-md border-2 transition-all duration-200 hover:scale-105 relative overflow-hidden"
          style={{
            backgroundColor: "#252836",
            borderColor: "#4ECDC4",
            boxShadow: "4px 4px 0px rgba(78,205,196,0.3)",
          }}
        >
          <h4 className="text-sm font-pixel mb-3" style={{ color: "#4ECDC4" }}>
            Scanline
          </h4>
          <p className="text-xs mb-4" style={{ color: "#E8E4DB" }}>
            复古扫描线纹理，营造 CRT 显示器效果。
          </p>
          <div className="flex gap-2">
            <button
              className="px-3 py-1 text-xs font-pixel rounded border-2"
              style={{
                backgroundColor: "#FF6B9D",
                borderColor: "#FF6B9D",
                color: "#1A1D2E",
              }}
            >
              操作
            </button>
          </div>
          {/* 扫描线效果 */}
          <div
            className="absolute inset-0 pointer-events-none opacity-15"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(78,205,196,0.5) 2px, rgba(78,205,196,0.5) 4px)",
            }}
          />
        </div>

        {/* 信息卡片 */}
        <div
          className="p-6 rounded-md border-2 transition-all duration-200 hover:scale-105"
          style={{
            backgroundColor: "#252836",
            borderColor: "#FF6B9D",
            boxShadow: "4px 4px 0px rgba(255,107,157,0.3)",
          }}
        >
          <div className="flex items-start justify-between mb-3">
            <h4 className="text-sm font-pixel" style={{ color: "#FF6B9D" }}>
              Info Card
            </h4>
            <span className="text-xs font-pixel" style={{ color: "#A8A4A0" }}>
              NEW
            </span>
          </div>
          <p className="text-xs mb-2" style={{ color: "#E8E4DB" }}>
            状态：活跃
          </p>
          <p className="text-xs" style={{ color: "#A8A4A0" }}>
            最后更新：2 分钟前
          </p>
        </div>

        {/* 统计卡片 */}
        <div
          className="p-6 rounded-md border-2 transition-all duration-200 hover:scale-105"
          style={{
            backgroundColor: "#252836",
            borderColor: "#4ECDC4",
            boxShadow: "4px 4px 0px rgba(78,205,196,0.3)",
          }}
        >
          <h4 className="text-sm font-pixel mb-3" style={{ color: "#4ECDC4" }}>
            Statistics
          </h4>
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span style={{ color: "#A8A4A0" }}>用户数</span>
              <span className="font-pixel" style={{ color: "#E8E4DB" }}>
                1,234
              </span>
            </div>
            <div className="flex justify-between text-xs">
              <span style={{ color: "#A8A4A0" }}>活跃率</span>
              <span className="font-pixel" style={{ color: "#4ECDC4" }}>
                89%
              </span>
            </div>
          </div>
        </div>

        {/* 操作卡片 */}
        <div
          className="p-6 rounded-md border-2 transition-all duration-200 hover:scale-105"
          style={{
            backgroundColor: "#252836",
            borderColor: "#4ECDC4",
            boxShadow: "4px 4px 0px rgba(78,205,196,0.3)",
          }}
        >
          <h4 className="text-sm font-pixel mb-3" style={{ color: "#4ECDC4" }}>
            Actions
          </h4>
          <p className="text-xs mb-4" style={{ color: "#E8E4DB" }}>
            选择一个操作继续
          </p>
          <div className="flex flex-col gap-2">
            <button
              className="w-full px-3 py-2 text-xs font-pixel rounded border-2 transition-all hover:brightness-110"
              style={{
                backgroundColor: "#4ECDC4",
                borderColor: "#4ECDC4",
                color: "#1A1D2E",
              }}
            >
              主要操作
            </button>
            <button
              className="w-full px-3 py-2 text-xs font-pixel rounded border-2 transition-all hover:bg-[rgba(78,205,196,0.1)]"
              style={{
                backgroundColor: "transparent",
                borderColor: "#4ECDC4",
                color: "#4ECDC4",
              }}
            >
              次要操作
            </button>
          </div>
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
          玻璃拟态效果 + 樱粉霓虹青双色 + 渐变背景 + 装饰线条
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* 玻璃拟态卡片 */}
        <div
          className="p-6 rounded-lg border-2 transition-all duration-300 hover:scale-105 relative overflow-hidden"
          style={{
            background: "rgba(255,107,157,0.1)",
            borderColor: "rgba(255,107,157,0.3)",
            backdropFilter: "blur(10px)",
            boxShadow: "0 8px 32px 0 rgba(255,107,157,0.2)",
          }}
        >
          <h4 className="text-sm font-pixel mb-3" style={{ color: "#FF6B9D" }}>
            Glass Card
          </h4>
          <p className="text-xs mb-4" style={{ color: "#E8E4DB" }}>
            玻璃拟态效果，带有毛玻璃背景和边缘高光。
          </p>
          <button
            className="px-3 py-1 text-xs font-pixel rounded-lg border-2"
            style={{
              background: "rgba(255,107,157,0.2)",
              borderColor: "#FF6B9D",
              color: "#FF6B9D",
            }}
          >
            查看
          </button>
          {/* 顶部高光 */}
          <div
            className="absolute top-0 left-0 right-0 h-1/2 pointer-events-none"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.1) 0%, transparent 100%)",
            }}
          />
        </div>

        {/* 樱粉渐变卡片 */}
        <div
          className="p-6 rounded-lg border-2 transition-all duration-300 hover:scale-105 relative overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,107,157,0.2) 0%, rgba(78,205,196,0.2) 100%)",
            borderColor: "#FF6B9D",
            boxShadow: "4px 4px 0px rgba(255,107,157,0.3)",
          }}
        >
          <h4 className="text-sm font-pixel mb-3" style={{ color: "#FF6B9D" }}>
            Sakura Gradient
          </h4>
          <p className="text-xs mb-4" style={{ color: "#E8E4DB" }}>
            樱粉到霓虹青的渐变背景。
          </p>
          <button
            className="px-3 py-1 text-xs font-pixel rounded-lg border-2"
            style={{
              backgroundColor: "#FF6B9D",
              borderColor: "#FF6B9D",
              color: "#1A1D2E",
            }}
          >
            操作
          </button>
          {/* 玻璃高光 */}
          <div
            className="absolute top-0 left-0 w-1/2 h-full pointer-events-none"
            style={{
              background:
                "linear-gradient(90deg, rgba(255,255,255,0.1) 0%, transparent 100%)",
            }}
          />
        </div>

        {/* 霓虹青卡片 */}
        <div
          className="p-6 rounded-lg border-2 transition-all duration-300 hover:scale-105 relative"
          style={{
            backgroundColor: "rgba(37,40,54,0.5)",
            borderColor: "#4ECDC4",
            boxShadow:
              "4px 4px 0px rgba(78,205,196,0.3), 0 0 20px rgba(78,205,196,0.3)",
          }}
        >
          <h4 className="text-sm font-pixel mb-3" style={{ color: "#4ECDC4" }}>
            Neon Cyan
          </h4>
          <p className="text-xs mb-4" style={{ color: "#E8E4DB" }}>
            霓虹青边框，带有光晕效果。
          </p>
          <button
            className="px-3 py-1 text-xs font-pixel rounded-lg border-2"
            style={{
              backgroundColor: "#4ECDC4",
              borderColor: "#4ECDC4",
              color: "#1A1D2E",
            }}
          >
            查看
          </button>
          {/* 霓虹光晕 */}
          <div
            className="absolute inset-0 opacity-30 blur-sm pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at center, rgba(78,205,196,0.6) 0%, transparent 70%)",
            }}
          />
        </div>

        {/* 装饰线条卡片 */}
        <div
          className="p-6 rounded-lg border-2 transition-all duration-300 hover:scale-105 relative"
          style={{
            background: "rgba(78,205,196,0.1)",
            borderColor: "rgba(78,205,196,0.3)",
            backdropFilter: "blur(10px)",
          }}
        >
          <h4 className="text-sm font-pixel mb-3" style={{ color: "#4ECDC4" }}>
            Decorated
          </h4>
          <p className="text-xs mb-4" style={{ color: "#E8E4DB" }}>
            带有装饰线条的卡片设计。
          </p>
          <button
            className="px-3 py-1 text-xs font-pixel rounded-lg border-2"
            style={{
              backgroundColor: "transparent",
              borderColor: "#4ECDC4",
              color: "#4ECDC4",
            }}
          >
            详情
          </button>
          {/* 装饰线条 */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4ECDC4] to-transparent opacity-50" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4ECDC4] to-transparent opacity-50" />
        </div>

        {/* 信息面板 */}
        <div
          className="p-6 rounded-lg border-2 transition-all duration-300 hover:scale-105"
          style={{
            background: "rgba(255,107,157,0.1)",
            borderColor: "#FF6B9D",
            backdropFilter: "blur(10px)",
          }}
        >
          <div className="flex items-center gap-2 mb-3">
            <div
              className="w-8 h-8 rounded-full"
              style={{
                background: "linear-gradient(135deg, #FF6B9D 0%, #4ECDC4 100%)",
              }}
            />
            <div>
              <h4 className="text-sm font-pixel" style={{ color: "#FF6B9D" }}>
                用户信息
              </h4>
              <p className="text-xs" style={{ color: "#A8A4A0" }}>
                在线
              </p>
            </div>
          </div>
          <p className="text-xs" style={{ color: "#E8E4DB" }}>
            最后活跃：刚刚
          </p>
        </div>

        {/* 通知卡片 */}
        <div
          className="p-6 rounded-lg border-2 transition-all duration-300 hover:scale-105"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,107,157,0.15) 0%, rgba(157,78,221,0.15) 100%)",
            borderColor: "#FF6B9D",
            boxShadow: "4px 4px 0px rgba(255,107,157,0.3)",
          }}
        >
          <div className="flex items-start justify-between mb-3">
            <h4 className="text-sm font-pixel" style={{ color: "#FF6B9D" }}>
              新消息
            </h4>
            <span
              className="px-2 py-0.5 text-xs font-pixel rounded"
              style={{
                backgroundColor: "#FF6B9D",
                color: "#1A1D2E",
              }}
            >
              3
            </span>
          </div>
          <p className="text-xs mb-2" style={{ color: "#E8E4DB" }}>
            你有 3 条未读消息
          </p>
          <button className="text-xs font-pixel" style={{ color: "#4ECDC4" }}>
            查看全部 →
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
          和纸质感背景 + 金色点缀 + 浮世绘纹样 + 神社元素
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* 金色神圣卡片 */}
        <div
          className="p-6 rounded-md border-2 transition-all duration-300 hover:scale-105 relative overflow-hidden"
          style={{
            backgroundColor: "rgba(44,44,44,0.5)",
            borderColor: "#D4AF37",
            boxShadow: "4px 4px 0px rgba(212,175,55,0.3)",
          }}
        >
          <h4 className="text-sm font-pixel mb-3" style={{ color: "#D4AF37" }}>
            神社 Shrine
          </h4>
          <p className="text-xs mb-4" style={{ color: "#E8E4DB" }}>
            金色边框，带有神圣的光晕效果。
          </p>
          <button
            className="px-3 py-1 text-xs font-pixel rounded-md border-2"
            style={{
              backgroundColor: "#D4AF37",
              borderColor: "#D4AF37",
              color: "#2C2C2C",
            }}
          >
            参拝
          </button>
          {/* 金色光晕 */}
          <div
            className="absolute inset-0 opacity-30 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at center, rgba(212,175,55,0.6) 0%, transparent 70%)",
            }}
          />
        </div>

        {/* 神社红卡片 */}
        <div
          className="p-6 rounded-md border-2 transition-all duration-300 hover:scale-105 relative"
          style={{
            backgroundColor: "rgba(44,44,44,0.5)",
            borderColor: "#C85A54",
            boxShadow: "4px 4px 0px rgba(200,90,84,0.3)",
          }}
        >
          <div className="flex items-center gap-2 mb-3">
            <span style={{ color: "#C85A54" }}>⛩️</span>
            <h4 className="text-sm font-pixel" style={{ color: "#C85A54" }}>
              朱 Vermillion
            </h4>
          </div>
          <p className="text-xs mb-4" style={{ color: "#F5F1E8" }}>
            神社红色，象征神圣与庄严。
          </p>
          <button
            className="px-3 py-1 text-xs font-pixel rounded-md border-2"
            style={{
              backgroundColor: "#C85A54",
              borderColor: "#C85A54",
              color: "#F5F1E8",
            }}
          >
            查看
          </button>
          {/* 墨迹质感 */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' /%3E%3C/svg%3E\")",
            }}
          />
        </div>

        {/* 雾灰卡片 */}
        <div
          className="p-6 rounded-md border-2 transition-all duration-300 hover:scale-105"
          style={{
            backgroundColor: "rgba(44,44,44,0.5)",
            borderColor: "#A8A4A0",
            boxShadow: "4px 4px 0px rgba(168,164,160,0.3)",
          }}
        >
          <h4 className="text-sm font-pixel mb-3" style={{ color: "#A8A4A0" }}>
            霧 Mist
          </h4>
          <p className="text-xs mb-4" style={{ color: "#E8E4DB" }}>
            雾灰色调，营造禅意氛围。
          </p>
          <button
            className="px-3 py-1 text-xs font-pixel rounded-md border-2"
            style={{
              backgroundColor: "transparent",
              borderColor: "#A8A4A0",
              color: "#A8A4A0",
            }}
          >
            详情
          </button>
        </div>

        {/* 带纹样装饰卡片 */}
        <div
          className="p-6 rounded-md border-2 transition-all duration-300 hover:scale-105 relative"
          style={{
            backgroundColor: "rgba(44,44,44,0.5)",
            borderColor: "#D4AF37",
            boxShadow: "4px 4px 0px rgba(212,175,55,0.3)",
          }}
        >
          <h4 className="text-sm font-pixel mb-3" style={{ color: "#D4AF37" }}>
            鳥居 Torii
          </h4>
          <p className="text-xs mb-4" style={{ color: "#E8E4DB" }}>
            带有浮世绘纹样装饰的边框。
          </p>
          <button
            className="px-3 py-1 text-xs font-pixel rounded-md border-2"
            style={{
              backgroundColor: "#D4AF37",
              borderColor: "#D4AF37",
              color: "#2C2C2C",
            }}
          >
            进入
          </button>
          {/* 装饰纹样 */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#2C2C2C] to-transparent opacity-30" />
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#2C2C2C] to-transparent opacity-30" />
        </div>

        {/* 信息卡片 */}
        <div
          className="p-6 rounded-md border-2 transition-all duration-300 hover:scale-105"
          style={{
            backgroundColor: "rgba(44,44,44,0.5)",
            borderColor: "#D4AF37",
            boxShadow: "4px 4px 0px rgba(212,175,55,0.3)",
          }}
        >
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-sm font-pixel" style={{ color: "#D4AF37" }}>
              御守 Omamori
            </h4>
            <span className="text-xs" style={{ color: "#A8A4A0" }}>
              护身符
            </span>
          </div>
          <div className="space-y-2 text-xs">
            <div className="flex justify-between">
              <span style={{ color: "#A8A4A0" }}>类型</span>
              <span style={{ color: "#E8E4DB" }}>学业成就</span>
            </div>
            <div className="flex justify-between">
              <span style={{ color: "#A8A4A0" }}>效果</span>
              <span style={{ color: "#D4AF37" }}>+10 智慧</span>
            </div>
          </div>
        </div>

        {/* 祈愿卡片 */}
        <div
          className="p-6 rounded-md border-2 transition-all duration-300 hover:scale-105"
          style={{
            backgroundColor: "rgba(44,44,44,0.5)",
            borderColor: "#C85A54",
            boxShadow: "4px 4px 0px rgba(200,90,84,0.3)",
          }}
        >
          <h4
            className="text-sm font-pixel mb-3 flex items-center gap-2"
            style={{ color: "#C85A54" }}
          >
            <span>⛩️</span>
            <span>絵馬 Ema</span>
          </h4>
          <p className="text-xs mb-4" style={{ color: "#F5F1E8" }}>
            写下你的愿望，祈求神明保佑。
          </p>
          <button
            className="w-full px-3 py-2 text-xs font-pixel rounded-md border-2"
            style={{
              backgroundColor: "#C85A54",
              borderColor: "#C85A54",
              color: "#F5F1E8",
            }}
          >
            写下愿望
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
          柔和渐变背景 + 云朵装饰元素 + 星星闪烁 + 温暖色调
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* 抹茶绿卡片 */}
        <div
          className="p-6 rounded-lg border-2 transition-all duration-300 hover:scale-105 relative overflow-hidden"
          style={{
            backgroundColor: "#7BA05B",
            borderColor: "#7BA05B",
            boxShadow: "4px 4px 0px rgba(123,160,91,0.2)",
          }}
        >
          <h4 className="text-sm font-pixel mb-3" style={{ color: "#F5F1E8" }}>
            抹茶 Matcha
          </h4>
          <p className="text-xs mb-4" style={{ color: "#F5F1E8" }}>
            清新的抹茶绿色调，带来自然的宁静感。
          </p>
          <button
            className="px-3 py-1 text-xs font-pixel rounded-lg border-2"
            style={{
              backgroundColor: "#F5F1E8",
              borderColor: "#F5F1E8",
              color: "#7BA05B",
            }}
          >
            查看
          </button>
          {/* 柔和渐变 */}
          <div
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.3) 0%, transparent 100%)",
            }}
          />
        </div>

        {/* 淡樱粉卡片 */}
        <div
          className="p-6 rounded-lg border-2 transition-all duration-300 hover:scale-105 relative"
          style={{
            backgroundColor: "#FFB6C1",
            borderColor: "#FFB6C1",
            boxShadow: "4px 4px 0px rgba(255,182,193,0.3)",
          }}
        >
          <h4 className="text-sm font-pixel mb-3" style={{ color: "#2C2C2C" }}>
            桜 Sakura
          </h4>
          <p className="text-xs mb-4" style={{ color: "#2C2C2C" }}>
            温柔的樱花粉色，营造梦幻氛围。
          </p>
          <button
            className="px-3 py-1 text-xs font-pixel rounded-lg border-2"
            style={{
              backgroundColor: "#2C2C2C",
              borderColor: "#2C2C2C",
              color: "#FFB6C1",
            }}
          >
            详情
          </button>
          {/* 云朵装饰 */}
          <div
            className="absolute top-2 right-2 w-4 h-4 rounded-full opacity-20"
            style={{ backgroundColor: "#FFFFFF" }}
          />
        </div>

        {/* 金色卡片 */}
        <div
          className="p-6 rounded-lg border-2 transition-all duration-300 hover:scale-105 relative"
          style={{
            backgroundColor: "#D4AF37",
            borderColor: "#D4AF37",
            boxShadow: "4px 4px 0px rgba(212,175,55,0.3)",
          }}
        >
          <h4
            className="text-sm font-pixel mb-3 flex items-center gap-1"
            style={{ color: "#2C2C2C" }}
          >
            <span>✨</span>
            <span>金 Gold</span>
          </h4>
          <p className="text-xs mb-4" style={{ color: "#2C2C2C" }}>
            温暖的金色，带来希望与活力。
          </p>
          <button
            className="px-3 py-1 text-xs font-pixel rounded-lg border-2"
            style={{
              backgroundColor: "#2C2C2C",
              borderColor: "#2C2C2C",
              color: "#D4AF37",
            }}
          >
            操作
          </button>
        </div>

        {/* 渐变卡片 */}
        <div
          className="p-6 rounded-lg border-2 transition-all duration-300 hover:scale-105"
          style={{
            background: "linear-gradient(135deg, #FFB6C1 0%, #7BA05B 100%)",
            borderColor: "#FFB6C1",
            boxShadow: "4px 4px 0px rgba(255,182,193,0.3)",
          }}
        >
          <h4 className="text-sm font-pixel mb-3" style={{ color: "#2C2C2C" }}>
            Sakura Matcha
          </h4>
          <p className="text-xs mb-4" style={{ color: "#2C2C2C" }}>
            樱粉到抹茶绿的柔和渐变。
          </p>
          <button
            className="px-3 py-1 text-xs font-pixel rounded-lg border-2"
            style={{
              backgroundColor: "#2C2C2C",
              borderColor: "#2C2C2C",
              color: "#FFB6C1",
            }}
          >
            查看
          </button>
        </div>

        {/* 信息卡片 */}
        <div
          className="p-6 rounded-lg border-2 transition-all duration-300 hover:scale-105"
          style={{
            backgroundColor: "#E8E4DB",
            borderColor: "#7BA05B",
            boxShadow: "4px 4px 0px rgba(123,160,91,0.2)",
          }}
        >
          <div className="flex items-center gap-2 mb-3">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-sm"
              style={{ backgroundColor: "#7BA05B", color: "#F5F1E8" }}
            >
              ☕
            </div>
            <div>
              <h4 className="text-sm font-pixel" style={{ color: "#7BA05B" }}>
                咖啡时光
              </h4>
              <p className="text-xs" style={{ color: "#5A5A5A" }}>
                放松一下
              </p>
            </div>
          </div>
          <p className="text-xs" style={{ color: "#5A5A5A" }}>
            享受宁静的下午时光
          </p>
        </div>

        {/* 任务卡片 */}
        <div
          className="p-6 rounded-lg border-2 transition-all duration-300 hover:scale-105"
          style={{
            backgroundColor: "#E8E4DB",
            borderColor: "#D4AF37",
            boxShadow: "4px 4px 0px rgba(212,175,55,0.2)",
          }}
        >
          <h4 className="text-sm font-pixel mb-3" style={{ color: "#D4AF37" }}>
            今日任务
          </h4>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs">
              <input type="checkbox" className="w-3 h-3" />
              <span style={{ color: "#5A5A5A" }}>完成设计稿</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <input type="checkbox" className="w-3 h-3" />
              <span style={{ color: "#5A5A5A" }}>代码审查</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <input type="checkbox" className="w-3 h-3" checked readOnly />
              <span
                style={{ color: "#7BA05B", textDecoration: "line-through" }}
              >
                晨间会议
              </span>
            </div>
          </div>
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* 霓虹粉卡片 */}
        <div
          className="p-6 rounded-lg border-2 transition-all duration-200 hover:scale-105 relative overflow-hidden"
          style={{
            backgroundColor: "#FF006E",
            borderColor: "#FF006E",
            boxShadow:
              "0 0 20px rgba(255,0,110,0.5), 4px 4px 0px rgba(255,0,110,0.3)",
          }}
        >
          <h4 className="text-sm font-pixel mb-3" style={{ color: "#FFFFFF" }}>
            NEON PINK
          </h4>
          <p className="text-xs mb-4" style={{ color: "#FFFFFF" }}>
            强烈的霓虹粉色，带有光晕效果。
          </p>
          <button
            className="px-3 py-1 text-xs font-pixel rounded-lg border-2"
            style={{
              backgroundColor: "#FFFFFF",
              borderColor: "#FFFFFF",
              color: "#FF006E",
            }}
          >
            VIEW
          </button>
          {/* 霓虹光晕 */}
          <div
            className="absolute inset-0 opacity-50 blur-md pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at center, rgba(255,0,110,0.8) 0%, transparent 70%)",
            }}
          />
        </div>

        {/* 赛博青卡片 */}
        <div
          className="p-6 rounded-lg border-2 transition-all duration-200 hover:scale-105"
          style={{
            backgroundColor: "#00F5FF",
            borderColor: "#00F5FF",
            boxShadow:
              "0 0 20px rgba(0,245,255,0.5), 4px 4px 0px rgba(0,245,255,0.3)",
          }}
        >
          <h4 className="text-sm font-pixel mb-3" style={{ color: "#240046" }}>
            CYBER CYAN
          </h4>
          <p className="text-xs mb-4" style={{ color: "#240046" }}>
            明亮的赛博青色，充满科技感。
          </p>
          <button
            className="px-3 py-1 text-xs font-pixel rounded-lg border-2"
            style={{
              backgroundColor: "#240046",
              borderColor: "#240046",
              color: "#00F5FF",
            }}
          >
            ACTION
          </button>
        </div>

        {/* 紫色卡片 */}
        <div
          className="p-6 rounded-lg border-2 transition-all duration-200 hover:scale-105"
          style={{
            backgroundColor: "#9D4EDD",
            borderColor: "#9D4EDD",
            boxShadow: "4px 4px 0px rgba(157,78,221,0.3)",
          }}
        >
          <h4 className="text-sm font-pixel mb-3" style={{ color: "#FFFFFF" }}>
            VAPOR PURPLE
          </h4>
          <p className="text-xs mb-4" style={{ color: "#FFFFFF" }}>
            蒸汽波标志性的紫色调。
          </p>
          <button
            className="px-3 py-1 text-xs font-pixel rounded-lg border-2"
            style={{
              backgroundColor: "transparent",
              borderColor: "#FFFFFF",
              color: "#FFFFFF",
            }}
          >
            DETAILS
          </button>
        </div>

        {/* 三色渐变卡片 */}
        <div
          className="p-6 rounded-lg border-2 transition-all duration-200 hover:scale-105"
          style={{
            background:
              "linear-gradient(135deg, #FF006E 0%, #9D4EDD 50%, #00F5FF 100%)",
            borderColor: "#FF006E",
            boxShadow: "4px 4px 0px rgba(255,0,110,0.3)",
          }}
        >
          <h4 className="text-sm font-pixel mb-3" style={{ color: "#FFFFFF" }}>
            AESTHETIC
          </h4>
          <p className="text-xs mb-4" style={{ color: "#FFFFFF" }}>
            三色渐变，完美的蒸汽波美学。
          </p>
          <button
            className="px-3 py-1 text-xs font-pixel rounded-lg border-2"
            style={{
              backgroundColor: "#FFFFFF",
              borderColor: "#FFFFFF",
              color: "#FF006E",
            }}
          >
            EXPLORE
          </button>
        </div>

        {/* 网格纹理卡片 */}
        <div
          className="p-6 rounded-lg border-2 transition-all duration-200 hover:scale-105 relative overflow-hidden"
          style={{
            backgroundColor: "rgba(60,9,108,0.5)",
            borderColor: "#FF006E",
            backdropFilter: "blur(10px)",
            boxShadow: "4px 4px 0px rgba(255,0,110,0.3)",
          }}
        >
          <h4 className="text-sm font-pixel mb-3" style={{ color: "#FF006E" }}>
            GRID TEXTURE
          </h4>
          <p className="text-xs mb-4" style={{ color: "#E0AAFF" }}>
            带有网格纹理的背景效果。
          </p>
          <button
            className="px-3 py-1 text-xs font-pixel rounded-lg border-2"
            style={{
              backgroundColor: "#FF006E",
              borderColor: "#FF006E",
              color: "#FFFFFF",
            }}
          >
            VIEW
          </button>
          {/* 网格纹理 */}
          <div
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(0deg, transparent 24%, rgba(255,255,255,0.3) 25%, rgba(255,255,255,0.3) 26%, transparent 27%, transparent 74%, rgba(255,255,255,0.3) 75%, rgba(255,255,255,0.3) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255,255,255,0.3) 25%, rgba(255,255,255,0.3) 26%, transparent 27%, transparent 74%, rgba(255,255,255,0.3) 75%, rgba(255,255,255,0.3) 76%, transparent 77%, transparent)",
              backgroundSize: "8px 8px",
            }}
          />
        </div>

        {/* 玻璃效果卡片 */}
        <div
          className="p-6 rounded-lg border-2 transition-all duration-200 hover:scale-105 relative overflow-hidden"
          style={{
            background: "rgba(157,78,221,0.2)",
            borderColor: "rgba(157,78,221,0.5)",
            backdropFilter: "blur(10px)",
            boxShadow: "0 8px 32px 0 rgba(157,78,221,0.2)",
          }}
        >
          <h4 className="text-sm font-pixel mb-3" style={{ color: "#E0AAFF" }}>
            GLASS EFFECT
          </h4>
          <p className="text-xs mb-4" style={{ color: "#E0AAFF" }}>
            玻璃拟态效果，带有顶部高光。
          </p>
          <button
            className="px-3 py-1 text-xs font-pixel rounded-lg border-2"
            style={{
              backgroundColor: "transparent",
              borderColor: "#E0AAFF",
              color: "#E0AAFF",
            }}
          >
            DETAILS
          </button>
          {/* 顶部高光 */}
          <div
            className="absolute top-0 left-0 right-0 h-1/2 pointer-events-none"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.2) 0%, transparent 100%)",
            }}
          />
        </div>

        {/* 信息卡片 */}
        <div
          className="p-6 rounded-lg border-2 transition-all duration-200 hover:scale-105"
          style={{
            backgroundColor: "rgba(60,9,108,0.5)",
            borderColor: "#00F5FF",
            backdropFilter: "blur(10px)",
          }}
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="text-lg">🌴</span>
            <h4 className="text-sm font-pixel" style={{ color: "#00F5FF" }}>
              VAPOR WAVE
            </h4>
            <span className="text-lg">🌴</span>
          </div>
          <div className="space-y-2 text-xs">
            <div className="flex justify-between">
              <span style={{ color: "#C77DFF" }}>Status</span>
              <span style={{ color: "#E0AAFF" }}>ACTIVE</span>
            </div>
            <div className="flex justify-between">
              <span style={{ color: "#C77DFF" }}>Vibe</span>
              <span style={{ color: "#FF006E" }}>100%</span>
            </div>
          </div>
        </div>

        {/* 通知卡片 */}
        <div
          className="p-6 rounded-lg border-2 transition-all duration-200 hover:scale-105"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,0,110,0.2) 0%, rgba(0,245,255,0.2) 100%)",
            borderColor: "#FF006E",
            backdropFilter: "blur(10px)",
            boxShadow: "4px 4px 0px rgba(255,0,110,0.3)",
          }}
        >
          <div className="flex items-start justify-between mb-3">
            <h4 className="text-sm font-pixel" style={{ color: "#FF006E" }}>
              NEW MESSAGE
            </h4>
            <span
              className="px-2 py-0.5 text-xs font-pixel rounded"
              style={{
                backgroundColor: "#FF006E",
                color: "#FFFFFF",
              }}
            >
              5
            </span>
          </div>
          <p className="text-xs mb-2" style={{ color: "#E0AAFF" }}>
            You have 5 unread messages
          </p>
          <button className="text-xs font-pixel" style={{ color: "#00F5FF" }}>
            VIEW ALL →
          </button>
        </div>
      </div>
    </div>
  );
}
