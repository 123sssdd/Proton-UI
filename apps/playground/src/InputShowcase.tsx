import React from "react";
import { Input } from "@proton-ui/core";

/**
 * Input 完整展示页面
 * 包含基础风格和精美像素风格
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
    <div className="min-h-screen bg-[var(--color-bg-primary)] p-8">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* 页面标题 */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-pixel text-[var(--color-text-primary)]">
            Input 组件完整展示
          </h1>
          <p className="text-sm text-[var(--color-text-secondary)]">
            从基础到精美 - 像素风格输入框的完整演示
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
              简洁实用的像素风格输入框 - 适合快速开发
            </p>
          </div>

          {/* 基础输入框 */}
          <div className="space-y-6">
            <h3 className="text-lg font-pixel text-[var(--color-text-primary)] border-b-2 border-[var(--color-text-secondary)] pb-2">
              基础输入框 (Basic Input)
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* 无标签 */}
              <div className="space-y-4 p-6 bg-[var(--color-bg-secondary)] rounded-lg border-2 border-[var(--color-text-secondary)] border-opacity-20">
                <h4 className="text-sm font-pixel text-[var(--color-text-primary)] mb-4">
                  无标签
                </h4>
                <Input
                  placeholder="请输入内容..."
                  value={basicValue1}
                  onChange={(e) => setBasicValue1(e.target.value)}
                />
              </div>

              {/* 带标签 */}
              <div className="space-y-4 p-6 bg-[var(--color-bg-secondary)] rounded-lg border-2 border-[var(--color-text-secondary)] border-opacity-20">
                <h4 className="text-sm font-pixel text-[var(--color-text-primary)] mb-4">
                  带标签
                </h4>
                <Input
                  label="用户名"
                  placeholder="请输入用户名"
                  value={basicValue2}
                  onChange={(e) => setBasicValue2(e.target.value)}
                />
              </div>

              {/* 填充状态 */}
              <div className="space-y-4 p-6 bg-[var(--color-bg-secondary)] rounded-lg border-2 border-[var(--color-text-secondary)] border-opacity-20">
                <h4 className="text-sm font-pixel text-[var(--color-text-primary)] mb-4">
                  填充状态
                </h4>
                <Input
                  label="邮箱地址"
                  value={basicValue3}
                  onChange={(e) => setBasicValue3(e.target.value)}
                />
              </div>

              {/* 错误状态 */}
              <div className="space-y-4 p-6 bg-[var(--color-bg-secondary)] rounded-lg border-2 border-[var(--color-text-secondary)] border-opacity-20">
                <h4 className="text-sm font-pixel text-[var(--color-text-primary)] mb-4">
                  错误状态
                </h4>
                <Input
                  label="邮箱验证"
                  placeholder="请输入邮箱"
                  value={basicValue4}
                  onChange={(e) => {
                    setBasicValue4(e.target.value);
                    setShowError(
                      e.target.value.length > 0 && !e.target.value.includes("@")
                    );
                  }}
                  error={showError ? "请输入有效的邮箱地址" : undefined}
                />
              </div>
            </div>
          </div>

          {/* 带图标输入框 */}
          <div className="space-y-6">
            <h3 className="text-lg font-pixel text-[var(--color-text-primary)] border-b-2 border-[var(--color-text-secondary)] pb-2">
              带图标输入框 (With Icons)
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="搜索"
                placeholder="搜索内容..."
                leftIcon={
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                }
              />
              <Input
                label="密码"
                type="password"
                placeholder="输入密码"
                leftIcon={
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                }
              />
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
        </section>
      </div>
    </div>
  );
}

// ==================== Retro Futurism 主题 ====================
function RetroFuturismTheme() {
  const [value1, setValue1] = React.useState("");
  const [value2, setValue2] = React.useState("");
  const [value3, setValue3] = React.useState("");
  const [value4, setValue4] = React.useState("");

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
          霓虹边框 + 扫描线背景 + 光标闪烁 + 聚焦发光
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* 霓虹边框输入框 */}
        <div
          className="space-y-4 p-6 rounded-lg"
          style={{ backgroundColor: "#252836" }}
        >
          <h4 className="text-sm font-pixel mb-4" style={{ color: "#E8E4DB" }}>
            Neon Border
          </h4>
          <div className="relative">
            <input
              type="text"
              value={value1}
              onChange={(e) => setValue1(e.target.value)}
              placeholder="输入内容..."
              className="w-full px-4 py-3 font-pixel text-sm rounded-md border-2 transition-all duration-200 bg-transparent outline-none"
              style={{
                borderColor: value1 ? "#4ECDC4" : "rgba(78,205,196,0.3)",
                color: "#E8E4DB",
                boxShadow: value1 ? "0 0 10px rgba(78,205,196,0.5)" : "none",
              }}
            />
            {/* 扫描线效果 */}
            <div
              className="absolute inset-0 pointer-events-none opacity-10 rounded-md"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(78,205,196,0.5) 2px, rgba(78,205,196,0.5) 4px)",
              }}
            />
          </div>
        </div>

        {/* 带标签霓虹输入框 */}
        <div
          className="space-y-4 p-6 rounded-lg"
          style={{ backgroundColor: "#252836" }}
        >
          <h4 className="text-sm font-pixel mb-4" style={{ color: "#E8E4DB" }}>
            With Label
          </h4>
          <div className="space-y-2">
            <label className="text-xs font-pixel" style={{ color: "#4ECDC4" }}>
              用户名
            </label>
            <input
              type="text"
              value={value2}
              onChange={(e) => setValue2(e.target.value)}
              placeholder="输入用户名"
              className="w-full px-4 py-3 font-pixel text-sm rounded-md border-2 transition-all duration-200 bg-transparent outline-none"
              style={{
                borderColor: "#4ECDC4",
                color: "#E8E4DB",
                boxShadow: "0 0 10px rgba(78,205,196,0.3)",
              }}
            />
          </div>
        </div>

        {/* 带图标输入框 */}
        <div
          className="space-y-4 p-6 rounded-lg"
          style={{ backgroundColor: "#252836" }}
        >
          <h4 className="text-sm font-pixel mb-4" style={{ color: "#E8E4DB" }}>
            With Icon
          </h4>
          <div className="relative">
            <div
              className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
              style={{ color: "#4ECDC4" }}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              type="text"
              value={value3}
              onChange={(e) => setValue3(e.target.value)}
              placeholder="搜索..."
              className="w-full pl-12 pr-4 py-3 font-pixel text-sm rounded-md border-2 transition-all duration-200 bg-transparent outline-none"
              style={{
                borderColor: "#4ECDC4",
                color: "#E8E4DB",
                boxShadow: "0 0 10px rgba(78,205,196,0.3)",
              }}
            />
          </div>
        </div>

        {/* 密码输入框 */}
        <div
          className="space-y-4 p-6 rounded-lg"
          style={{ backgroundColor: "#252836" }}
        >
          <h4 className="text-sm font-pixel mb-4" style={{ color: "#E8E4DB" }}>
            Password
          </h4>
          <div className="relative">
            <div
              className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
              style={{ color: "#FF6B9D" }}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <input
              type="password"
              value={value4}
              onChange={(e) => setValue4(e.target.value)}
              placeholder="输入密码"
              className="w-full pl-12 pr-4 py-3 font-pixel text-sm rounded-md border-2 transition-all duration-200 bg-transparent outline-none"
              style={{
                borderColor: "#FF6B9D",
                color: "#E8E4DB",
                boxShadow: "0 0 10px rgba(255,107,157,0.3)",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// ==================== Neo Tokyo Night 主题 ====================
function NeoTokyoTheme() {
  const [value1, setValue1] = React.useState("");
  const [value2, setValue2] = React.useState("");
  const [value3, setValue3] = React.useState("");
  const [focused, setFocused] = React.useState<number | null>(null);

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
          玻璃拟态效果 + 樱粉聚焦指示器 + 渐变背景
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* 玻璃拟态输入框 */}
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
          <div className="relative">
            <input
              type="text"
              value={value1}
              onChange={(e) => setValue1(e.target.value)}
              onFocus={() => setFocused(1)}
              onBlur={() => setFocused(null)}
              placeholder="输入内容..."
              className="w-full px-4 py-3 font-pixel text-sm rounded-lg border-2 transition-all duration-300 outline-none relative z-10"
              style={{
                background: "rgba(255,107,157,0.1)",
                borderColor:
                  focused === 1 ? "#FF6B9D" : "rgba(255,107,157,0.3)",
                color: "#E8E4DB",
                backdropFilter: "blur(10px)",
                boxShadow:
                  focused === 1
                    ? "0 8px 32px 0 rgba(255,107,157,0.4)"
                    : "0 8px 32px 0 rgba(255,107,157,0.2)",
              }}
            />
            {/* 顶部高光 */}
            <div
              className="absolute top-0 left-0 right-0 h-1/2 pointer-events-none rounded-t-lg"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.1) 0%, transparent 100%)",
              }}
            />
          </div>
        </div>

        {/* 樱粉渐变输入框 */}
        <div
          className="space-y-4 p-6 rounded-lg"
          style={{ backgroundColor: "rgba(37,40,54,0.5)" }}
        >
          <h4 className="text-sm font-pixel mb-4" style={{ color: "#E8E4DB" }}>
            Sakura Gradient
          </h4>
          <div className="space-y-2">
            <label className="text-xs font-pixel" style={{ color: "#FF6B9D" }}>
              邮箱地址
            </label>
            <div className="relative">
              <input
                type="email"
                value={value2}
                onChange={(e) => setValue2(e.target.value)}
                onFocus={() => setFocused(2)}
                onBlur={() => setFocused(null)}
                placeholder="your@email.com"
                className="w-full px-4 py-3 font-pixel text-sm rounded-lg border-2 transition-all duration-300 outline-none"
                style={{
                  background:
                    focused === 2
                      ? "linear-gradient(135deg, rgba(255,107,157,0.2) 0%, rgba(78,205,196,0.2) 100%)"
                      : "rgba(37,40,54,0.5)",
                  borderColor:
                    focused === 2 ? "#FF6B9D" : "rgba(255,107,157,0.3)",
                  color: "#E8E4DB",
                  boxShadow:
                    focused === 2 ? "0 0 20px rgba(255,107,157,0.4)" : "none",
                }}
              />
            </div>
          </div>
        </div>

        {/* 霓虹青输入框 */}
        <div
          className="space-y-4 p-6 rounded-lg"
          style={{ backgroundColor: "rgba(37,40,54,0.5)" }}
        >
          <h4 className="text-sm font-pixel mb-4" style={{ color: "#E8E4DB" }}>
            Neon Cyan
          </h4>
          <div className="relative">
            <div
              className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
              style={{ color: "#4ECDC4" }}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
            <input
              type="text"
              value={value3}
              onChange={(e) => setValue3(e.target.value)}
              onFocus={() => setFocused(3)}
              onBlur={() => setFocused(null)}
              placeholder="用户名"
              className="w-full pl-12 pr-4 py-3 font-pixel text-sm rounded-lg border-2 transition-all duration-300 bg-transparent outline-none"
              style={{
                borderColor: focused === 3 ? "#4ECDC4" : "rgba(78,205,196,0.3)",
                color: "#E8E4DB",
                boxShadow:
                  focused === 3 ? "0 0 20px rgba(78,205,196,0.5)" : "none",
              }}
            />
            {/* 霓虹光晕 */}
            {focused === 3 && (
              <div
                className="absolute inset-0 opacity-30 blur-sm pointer-events-none rounded-lg"
                style={{
                  background:
                    "radial-gradient(circle at center, rgba(78,205,196,0.6) 0%, transparent 70%)",
                }}
              />
            )}
          </div>
        </div>

        {/* 装饰线条输入框 */}
        <div
          className="space-y-4 p-6 rounded-lg"
          style={{ backgroundColor: "rgba(37,40,54,0.5)" }}
        >
          <h4 className="text-sm font-pixel mb-4" style={{ color: "#E8E4DB" }}>
            Decorated
          </h4>
          <div className="relative">
            <input
              type="text"
              placeholder="带装饰线条"
              className="w-full px-4 py-3 font-pixel text-sm rounded-lg border-2 transition-all duration-300 bg-transparent outline-none"
              style={{
                background: "rgba(78,205,196,0.1)",
                borderColor: "rgba(78,205,196,0.3)",
                color: "#E8E4DB",
                backdropFilter: "blur(10px)",
              }}
            />
            {/* 装饰线条 */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4ECDC4] to-transparent opacity-50" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4ECDC4] to-transparent opacity-50" />
          </div>
        </div>
      </div>
    </div>
  );
}

// ==================== Cyber Shrine 主题 ====================
function CyberShrineTheme() {
  const [value1, setValue1] = React.useState("");
  const [value2, setValue2] = React.useState("");
  const [value3, setValue3] = React.useState("");

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
          和纸质感背景 + 墨迹边框效果 + 金色点缀
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* 金色神圣输入框 */}
        <div
          className="space-y-4 p-6 rounded-lg"
          style={{ backgroundColor: "rgba(44,44,44,0.5)" }}
        >
          <h4 className="text-sm font-pixel mb-4" style={{ color: "#E8E4DB" }}>
            Sacred Gold
          </h4>
          <div className="relative">
            <input
              type="text"
              value={value1}
              onChange={(e) => setValue1(e.target.value)}
              placeholder="输入内容..."
              className="w-full px-4 py-3 font-pixel text-sm rounded-md border-2 transition-all duration-300 outline-none"
              style={{
                backgroundColor: "rgba(212,175,55,0.1)",
                borderColor: "#D4AF37",
                color: "#E8E4DB",
                boxShadow: "4px 4px 0px rgba(212,175,55,0.3)",
              }}
            />
            {/* 金色光晕 */}
            <div
              className="absolute inset-0 opacity-20 pointer-events-none rounded-md"
              style={{
                background:
                  "radial-gradient(circle at center, rgba(212,175,55,0.6) 0%, transparent 70%)",
              }}
            />
          </div>
        </div>

        {/* 神社红输入框 */}
        <div
          className="space-y-4 p-6 rounded-lg"
          style={{ backgroundColor: "rgba(44,44,44,0.5)" }}
        >
          <h4 className="text-sm font-pixel mb-4" style={{ color: "#E8E4DB" }}>
            Shrine Red
          </h4>
          <div className="space-y-2">
            <label
              className="text-xs font-pixel flex items-center gap-1"
              style={{ color: "#C85A54" }}
            >
              <span>⛩️</span>
              <span>神社名称</span>
            </label>
            <div className="relative">
              <input
                type="text"
                value={value2}
                onChange={(e) => setValue2(e.target.value)}
                placeholder="输入神社名称"
                className="w-full px-4 py-3 font-pixel text-sm rounded-md border-2 transition-all duration-300 outline-none"
                style={{
                  backgroundColor: "rgba(200,90,84,0.1)",
                  borderColor: "#C85A54",
                  color: "#F5F1E8",
                  boxShadow: "4px 4px 0px rgba(200,90,84,0.3)",
                }}
              />
              {/* 墨迹质感 */}
              <div
                className="absolute inset-0 opacity-10 pointer-events-none rounded-md"
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' /%3E%3C/svg%3E\")",
                }}
              />
            </div>
          </div>
        </div>

        {/* 雾灰输入框 */}
        <div
          className="space-y-4 p-6 rounded-lg"
          style={{ backgroundColor: "rgba(44,44,44,0.5)" }}
        >
          <h4 className="text-sm font-pixel mb-4" style={{ color: "#E8E4DB" }}>
            Mist Gray
          </h4>
          <input
            type="text"
            placeholder="雾灰输入框"
            className="w-full px-4 py-3 font-pixel text-sm rounded-md border-2 transition-all duration-300 outline-none"
            style={{
              backgroundColor: "rgba(168,164,160,0.1)",
              borderColor: "#A8A4A0",
              color: "#E8E4DB",
              boxShadow: "4px 4px 0px rgba(168,164,160,0.3)",
            }}
          />
        </div>

        {/* 带纹样装饰输入框 */}
        <div
          className="space-y-4 p-6 rounded-lg"
          style={{ backgroundColor: "rgba(44,44,44,0.5)" }}
        >
          <h4 className="text-sm font-pixel mb-4" style={{ color: "#E8E4DB" }}>
            Decorated Pattern
          </h4>
          <div className="relative">
            <input
              type="text"
              value={value3}
              onChange={(e) => setValue3(e.target.value)}
              placeholder="带纹样装饰"
              className="w-full px-4 py-3 font-pixel text-sm rounded-md border-2 transition-all duration-300 outline-none"
              style={{
                backgroundColor: "rgba(212,175,55,0.1)",
                borderColor: "#D4AF37",
                color: "#E8E4DB",
                boxShadow: "4px 4px 0px rgba(212,175,55,0.3)",
              }}
            />
            {/* 装饰纹样 */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#2C2C2C] to-transparent opacity-30" />
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#2C2C2C] to-transparent opacity-30" />
          </div>
        </div>
      </div>
    </div>
  );
}

// ==================== Dreamy Lo-fi 主题 ====================
function DreamyLofiTheme() {
  const [value1, setValue1] = React.useState("");
  const [value2, setValue2] = React.useState("");
  const [value3, setValue3] = React.useState("");

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
          柔和渐变背景 + 云朵装饰元素 + 星星闪烁
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* 抹茶绿输入框 */}
        <div
          className="space-y-4 p-6 rounded-lg"
          style={{ backgroundColor: "#E8E4DB" }}
        >
          <h4 className="text-sm font-pixel mb-4" style={{ color: "#2C2C2C" }}>
            Matcha Green
          </h4>
          <div className="relative">
            <input
              type="text"
              value={value1}
              onChange={(e) => setValue1(e.target.value)}
              placeholder="输入内容..."
              className="w-full px-4 py-3 font-pixel text-sm rounded-lg border-2 transition-all duration-300 outline-none"
              style={{
                backgroundColor: "#7BA05B",
                borderColor: "#7BA05B",
                color: "#F5F1E8",
                boxShadow: "4px 4px 0px rgba(123,160,91,0.2)",
              }}
            />
            {/* 柔和渐变 */}
            <div
              className="absolute inset-0 opacity-20 pointer-events-none rounded-lg"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.3) 0%, transparent 100%)",
              }}
            />
          </div>
        </div>

        {/* 淡樱粉输入框 */}
        <div
          className="space-y-4 p-6 rounded-lg"
          style={{ backgroundColor: "#E8E4DB" }}
        >
          <h4 className="text-sm font-pixel mb-4" style={{ color: "#2C2C2C" }}>
            Soft Sakura
          </h4>
          <div className="space-y-2">
            <label className="text-xs font-pixel" style={{ color: "#FFB6C1" }}>
              邮箱地址
            </label>
            <div className="relative">
              <input
                type="email"
                value={value2}
                onChange={(e) => setValue2(e.target.value)}
                placeholder="your@email.com"
                className="w-full px-4 py-3 font-pixel text-sm rounded-lg border-2 transition-all duration-300 outline-none"
                style={{
                  backgroundColor: "#FFB6C1",
                  borderColor: "#FFB6C1",
                  color: "#2C2C2C",
                  boxShadow: "4px 4px 0px rgba(255,182,193,0.3)",
                }}
              />
              {/* 云朵装饰 */}
              <div
                className="absolute top-1 right-2 w-3 h-3 rounded-full opacity-20"
                style={{ backgroundColor: "#FFFFFF" }}
              />
            </div>
          </div>
        </div>

        {/* 金色输入框 */}
        <div
          className="space-y-4 p-6 rounded-lg"
          style={{ backgroundColor: "#E8E4DB" }}
        >
          <h4 className="text-sm font-pixel mb-4" style={{ color: "#2C2C2C" }}>
            Warm Gold
          </h4>
          <div className="relative">
            <input
              type="text"
              value={value3}
              onChange={(e) => setValue3(e.target.value)}
              placeholder="输入内容..."
              className="w-full px-4 py-3 font-pixel text-sm rounded-lg border-2 transition-all duration-300 outline-none"
              style={{
                backgroundColor: "#D4AF37",
                borderColor: "#D4AF37",
                color: "#2C2C2C",
                boxShadow: "4px 4px 0px rgba(212,175,55,0.3)",
              }}
            />
            {/* 星星装饰 */}
            <div className="absolute top-1 left-2 text-xs opacity-50">✨</div>
          </div>
        </div>

        {/* 渐变输入框 */}
        <div
          className="space-y-4 p-6 rounded-lg"
          style={{ backgroundColor: "#E8E4DB" }}
        >
          <h4 className="text-sm font-pixel mb-4" style={{ color: "#2C2C2C" }}>
            Gradient
          </h4>
          <input
            type="text"
            placeholder="渐变背景"
            className="w-full px-4 py-3 font-pixel text-sm rounded-lg border-2 transition-all duration-300 outline-none"
            style={{
              background: "linear-gradient(135deg, #FFB6C1 0%, #7BA05B 100%)",
              borderColor: "#FFB6C1",
              color: "#2C2C2C",
              boxShadow: "4px 4px 0px rgba(255,182,193,0.3)",
            }}
          />
        </div>
      </div>
    </div>
  );
}

// ==================== Vaporwave 主题 ====================
function VaporwaveTheme() {
  const [value1, setValue1] = React.useState("");
  const [value2, setValue2] = React.useState("");
  const [value3, setValue3] = React.useState("");

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
          渐变底色 + 霓虹粉 + 赛博青 + 网格纹理
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* 霓虹粉输入框 */}
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
          <div className="relative">
            <input
              type="text"
              value={value1}
              onChange={(e) => setValue1(e.target.value)}
              placeholder="输入内容..."
              className="w-full px-4 py-3 font-pixel text-sm rounded-lg border-2 transition-all duration-200 outline-none"
              style={{
                backgroundColor: "#FF006E",
                borderColor: "#FF006E",
                color: "#FFFFFF",
                boxShadow:
                  "0 0 20px rgba(255,0,110,0.5), 4px 4px 0px rgba(255,0,110,0.3)",
              }}
            />
            {/* 霓虹光晕 */}
            <div
              className="absolute inset-0 opacity-50 blur-md pointer-events-none rounded-lg"
              style={{
                background:
                  "radial-gradient(circle at center, rgba(255,0,110,0.8) 0%, transparent 70%)",
              }}
            />
          </div>
        </div>

        {/* 赛博青输入框 */}
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
          <div className="space-y-2">
            <label className="text-xs font-pixel" style={{ color: "#00F5FF" }}>
              用户名
            </label>
            <input
              type="text"
              value={value2}
              onChange={(e) => setValue2(e.target.value)}
              placeholder="输入用户名"
              className="w-full px-4 py-3 font-pixel text-sm rounded-lg border-2 transition-all duration-200 outline-none"
              style={{
                backgroundColor: "#00F5FF",
                borderColor: "#00F5FF",
                color: "#240046",
                boxShadow:
                  "0 0 20px rgba(0,245,255,0.5), 4px 4px 0px rgba(0,245,255,0.3)",
              }}
            />
          </div>
        </div>

        {/* 紫色输入框 */}
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
          <input
            type="text"
            value={value3}
            onChange={(e) => setValue3(e.target.value)}
            placeholder="输入内容..."
            className="w-full px-4 py-3 font-pixel text-sm rounded-lg border-2 transition-all duration-200 outline-none"
            style={{
              backgroundColor: "#9D4EDD",
              borderColor: "#9D4EDD",
              color: "#FFFFFF",
              boxShadow: "4px 4px 0px rgba(157,78,221,0.3)",
            }}
          />
        </div>

        {/* 渐变输入框 */}
        <div
          className="space-y-4 p-6 rounded-lg"
          style={{
            backgroundColor: "rgba(60,9,108,0.5)",
            backdropFilter: "blur(10px)",
          }}
        >
          <h4 className="text-sm font-pixel mb-4" style={{ color: "#E0AAFF" }}>
            Triple Gradient
          </h4>
          <input
            type="text"
            placeholder="三色渐变"
            className="w-full px-4 py-3 font-pixel text-sm rounded-lg border-2 transition-all duration-200 outline-none"
            style={{
              background:
                "linear-gradient(135deg, #FF006E 0%, #9D4EDD 50%, #00F5FF 100%)",
              borderColor: "#FF006E",
              color: "#FFFFFF",
              boxShadow: "4px 4px 0px rgba(255,0,110,0.3)",
            }}
          />
        </div>
      </div>

      {/* 特色效果展示 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {/* 带网格纹理 */}
        <div
          className="p-6 rounded-lg"
          style={{ backgroundColor: "rgba(60,9,108,0.5)" }}
        >
          <h4 className="text-sm font-pixel mb-4" style={{ color: "#E0AAFF" }}>
            Grid Texture
          </h4>
          <div className="relative">
            <input
              type="text"
              placeholder="网格纹理背景"
              className="w-full px-4 py-3 font-pixel text-sm rounded-lg border-2 transition-all duration-200 outline-none"
              style={{
                backgroundColor: "#FF006E",
                borderColor: "#FF006E",
                color: "#FFFFFF",
                boxShadow: "4px 4px 0px rgba(255,0,110,0.3)",
              }}
            />
            {/* 网格纹理 */}
            <div
              className="absolute inset-0 opacity-20 pointer-events-none rounded-lg"
              style={{
                backgroundImage:
                  "linear-gradient(0deg, transparent 24%, rgba(255,255,255,0.3) 25%, rgba(255,255,255,0.3) 26%, transparent 27%, transparent 74%, rgba(255,255,255,0.3) 75%, rgba(255,255,255,0.3) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255,255,255,0.3) 25%, rgba(255,255,255,0.3) 26%, transparent 27%, transparent 74%, rgba(255,255,255,0.3) 75%, rgba(255,255,255,0.3) 76%, transparent 77%, transparent)",
                backgroundSize: "8px 8px",
              }}
            />
          </div>
        </div>

        {/* 玻璃效果 */}
        <div
          className="p-6 rounded-lg"
          style={{ backgroundColor: "rgba(60,9,108,0.5)" }}
        >
          <h4 className="text-sm font-pixel mb-4" style={{ color: "#E0AAFF" }}>
            Glass Effect
          </h4>
          <div className="relative">
            <input
              type="text"
              placeholder="玻璃效果"
              className="w-full px-4 py-3 font-pixel text-sm rounded-lg border-2 transition-all duration-200 outline-none"
              style={{
                background: "rgba(157,78,221,0.2)",
                borderColor: "rgba(157,78,221,0.5)",
                color: "#E0AAFF",
                backdropFilter: "blur(10px)",
                boxShadow: "0 8px 32px 0 rgba(157,78,221,0.2)",
              }}
            />
            {/* 顶部高光 */}
            <div
              className="absolute top-0 left-0 right-0 h-1/2 pointer-events-none rounded-t-lg"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.2) 0%, transparent 100%)",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
