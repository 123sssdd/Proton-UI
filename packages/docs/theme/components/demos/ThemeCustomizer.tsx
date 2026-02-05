import React, { useState } from "react";

/**
 * ThemeCustomizer - 主题定制器组件
 *
 * 提供交互式主题编辑器，支持实时预览和导出配置
 */

interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
  border: string;
  success: string;
  warning: string;
  error: string;
  info: string;
}

const defaultTheme: ThemeColors = {
  primary: "#3b82f6",
  secondary: "#6b7280",
  accent: "#8b5cf6",
  background: "#ffffff",
  text: "#111827",
  border: "#e5e7eb",
  success: "#10b981",
  warning: "#f59e0b",
  error: "#ef4444",
  info: "#3b82f6",
};

const presetThemes: Record<string, ThemeColors> = {
  default: defaultTheme,
  retro: {
    primary: "#4ECDC4",
    secondary: "#667EEA",
    accent: "#FFB86C",
    background: "#1A1D2E",
    text: "#FFFFFF",
    border: "#2C3E50",
    success: "#7FD99F",
    warning: "#FFB86C",
    error: "#FF6B9D",
    info: "#4ECDC4",
  },
  tokyo: {
    primary: "#FF6B9D",
    secondary: "#4ECDC4",
    accent: "#9D4EDD",
    background: "#1A1D2E",
    text: "#FFFFFF",
    border: "#2C3E50",
    success: "#7FD99F",
    warning: "#FFB86C",
    error: "#FF6B9D",
    info: "#4ECDC4",
  },
  shrine: {
    primary: "#D4AF37",
    secondary: "#C85A54",
    accent: "#A8A4A0",
    background: "#1B4D5C",
    text: "#FFFFFF",
    border: "#2C3E50",
    success: "#7FD99F",
    warning: "#FFB86C",
    error: "#C85A54",
    info: "#D4AF37",
  },
  lofi: {
    primary: "#7BA05B",
    secondary: "#FFB6C1",
    accent: "#D4AF37",
    background: "#F5F1E8",
    text: "#2C2C2C",
    border: "#E8E4D9",
    success: "#7BA05B",
    warning: "#D4AF37",
    error: "#C85A54",
    info: "#7BA05B",
  },
  vaporwave: {
    primary: "#FF006E",
    secondary: "#00F5FF",
    accent: "#9D4EDD",
    background: "#240046",
    text: "#FFFFFF",
    border: "#3C096C",
    success: "#00F5FF",
    warning: "#FFB86C",
    error: "#FF006E",
    info: "#00F5FF",
  },
};

const colorLabels: Record<keyof ThemeColors, string> = {
  primary: "主要颜色",
  secondary: "次要颜色",
  accent: "强调色",
  background: "背景色",
  text: "文本颜色",
  border: "边框颜色",
  success: "成功状态",
  warning: "警告状态",
  error: "错误状态",
  info: "信息状态",
};

const presetLabels: Record<string, { name: string; icon: string }> = {
  default: { name: "默认", icon: "💎" },
  retro: { name: "Retro Futurism", icon: "🌟" },
  tokyo: { name: "Neo Tokyo Night", icon: "🌸" },
  shrine: { name: "Cyber Shrine", icon: "⛩️" },
  lofi: { name: "Dreamy Lo-fi", icon: "☁️" },
  vaporwave: { name: "Vaporwave", icon: "🌊" },
};

export const ThemeCustomizer: React.FC = () => {
  const [colors, setColors] = useState<ThemeColors>(defaultTheme);
  const [selectedPreset, setSelectedPreset] = useState<string>("default");

  const handleColorChange = (key: keyof ThemeColors, value: string) => {
    setColors((prev) => ({ ...prev, [key]: value }));
    setSelectedPreset("custom");
  };

  const handlePresetChange = (presetName: string) => {
    setSelectedPreset(presetName);
    setColors(presetThemes[presetName]);
  };

  const exportTheme = () => {
    const themeCode = `import type { ThemeConfig } from '@proton-ui/core';

const customTheme: Partial<ThemeConfig> = {
  colors: {
    primary: '${colors.primary}',
    secondary: '${colors.secondary}',
    accent: '${colors.accent}',
    background: '${colors.background}',
    text: '${colors.text}',
    border: '${colors.border}',
    success: '${colors.success}',
    warning: '${colors.warning}',
    error: '${colors.error}',
    info: '${colors.info}',
  },
};

export default customTheme;`;

    navigator.clipboard.writeText(themeCode);
    alert("主题配置已复制到剪贴板！");
  };

  const exportCSS = () => {
    const cssCode = `:root {
  --color-primary: ${colors.primary};
  --color-secondary: ${colors.secondary};
  --color-accent: ${colors.accent};
  --color-background: ${colors.background};
  --color-text: ${colors.text};
  --color-border: ${colors.border};
  --color-success: ${colors.success};
  --color-warning: ${colors.warning};
  --color-error: ${colors.error};
  --color-info: ${colors.info};
}`;

    navigator.clipboard.writeText(cssCode);
    alert("CSS 变量已复制到剪贴板！");
  };

  const isLightTheme =
    colors.background.includes("F") || colors.background.includes("E");

  return (
    <div className="space-y-6">
      {/* 预设主题选择 */}
      <div>
        <label className="block text-base font-bold mb-3">预设主题模板</label>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          {Object.keys(presetThemes).map((presetName) => (
            <button
              key={presetName}
              onClick={() => handlePresetChange(presetName)}
              className={`p-3 rounded-lg border-2 transition-all hover:scale-105 ${
                selectedPreset === presetName
                  ? "border-blue-600 bg-blue-50 dark:bg-blue-900/20 shadow-lg"
                  : "border-gray-300 dark:border-gray-600 hover:border-blue-400"
              }`}
            >
              <div className="text-2xl mb-1">
                {presetLabels[presetName].icon}
              </div>
              <div className="text-xs font-medium">
                {presetLabels[presetName].name}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* 颜色编辑器 */}
      <div>
        <label className="block text-base font-bold mb-3">自定义颜色</label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {(Object.keys(colors) as Array<keyof ThemeColors>).map((key) => (
            <div key={key} className="flex items-center gap-3">
              <input
                type="color"
                value={colors[key]}
                onChange={(e) => handleColorChange(key, e.target.value)}
                className="w-12 h-12 rounded-lg border-2 border-gray-300 dark:border-gray-600 cursor-pointer"
              />
              <div className="flex-1">
                <label className="block text-sm font-medium mb-1">
                  {colorLabels[key]}
                </label>
                <input
                  type="text"
                  value={colors[key]}
                  onChange={(e) => handleColorChange(key, e.target.value)}
                  className="w-full px-3 py-1.5 text-sm border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 实时预览 */}
      <div>
        <h3 className="text-base font-bold mb-3">实时预览</h3>
        <div
          className="p-6 rounded-lg border-2"
          style={{
            backgroundColor: colors.background,
            color: colors.text,
            borderColor: colors.border,
          }}
        >
          <div className="space-y-4">
            {/* 按钮预览 */}
            <div>
              <h4
                className="text-sm font-bold mb-2"
                style={{ color: colors.text }}
              >
                按钮组件
              </h4>
              <div className="flex gap-2 flex-wrap">
                <button
                  className="px-4 py-2 rounded-lg font-medium text-sm"
                  style={{
                    backgroundColor: colors.primary,
                    color: isLightTheme ? "#FFFFFF" : colors.background,
                  }}
                >
                  Primary
                </button>
                <button
                  className="px-4 py-2 rounded-lg font-medium text-sm"
                  style={{
                    backgroundColor: colors.secondary,
                    color: isLightTheme ? "#FFFFFF" : colors.background,
                  }}
                >
                  Secondary
                </button>
                <button
                  className="px-4 py-2 rounded-lg font-medium border-2 text-sm"
                  style={{ borderColor: colors.accent, color: colors.accent }}
                >
                  Accent
                </button>
              </div>
            </div>

            {/* 输入框预览 */}
            <div>
              <h4
                className="text-sm font-bold mb-2"
                style={{ color: colors.text }}
              >
                输入框组件
              </h4>
              <input
                type="text"
                placeholder="输入文本..."
                className="w-full px-4 py-2 rounded-lg border-2 text-sm"
                style={{
                  backgroundColor: colors.background,
                  color: colors.text,
                  borderColor: colors.border,
                }}
              />
            </div>

            {/* 卡片预览 */}
            <div>
              <h4
                className="text-sm font-bold mb-2"
                style={{ color: colors.text }}
              >
                卡片组件
              </h4>
              <div
                className="p-4 rounded-lg border-2"
                style={{ borderColor: colors.border }}
              >
                <h5
                  className="font-bold mb-1 text-sm"
                  style={{ color: colors.text }}
                >
                  卡片标题
                </h5>
                <p
                  className="text-sm"
                  style={{ color: colors.text, opacity: 0.8 }}
                >
                  这是卡片的内容区域，展示主题颜色效果。
                </p>
              </div>
            </div>

            {/* 状态标签预览 */}
            <div>
              <h4
                className="text-sm font-bold mb-2"
                style={{ color: colors.text }}
              >
                状态标签
              </h4>
              <div className="flex gap-2 flex-wrap">
                <span
                  className="px-3 py-1 rounded-full text-xs font-medium"
                  style={{
                    backgroundColor: colors.success,
                    color: isLightTheme ? "#FFFFFF" : colors.background,
                  }}
                >
                  Success
                </span>
                <span
                  className="px-3 py-1 rounded-full text-xs font-medium"
                  style={{
                    backgroundColor: colors.warning,
                    color: isLightTheme ? "#FFFFFF" : colors.background,
                  }}
                >
                  Warning
                </span>
                <span
                  className="px-3 py-1 rounded-full text-xs font-medium"
                  style={{
                    backgroundColor: colors.error,
                    color: isLightTheme ? "#FFFFFF" : colors.background,
                  }}
                >
                  Error
                </span>
                <span
                  className="px-3 py-1 rounded-full text-xs font-medium"
                  style={{
                    backgroundColor: colors.info,
                    color: isLightTheme ? "#FFFFFF" : colors.background,
                  }}
                >
                  Info
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 导出按钮 */}
      <div className="flex gap-3 justify-end">
        <button
          onClick={exportCSS}
          className="px-6 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors"
        >
          导出 CSS 变量
        </button>
        <button
          onClick={exportTheme}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
        >
          导出 TypeScript 配置
        </button>
      </div>
    </div>
  );
};

// 添加 default export 以支持 Rspress globalComponents
export default ThemeCustomizer;
