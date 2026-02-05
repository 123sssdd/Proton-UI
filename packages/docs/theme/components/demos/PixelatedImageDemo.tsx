import React, { useState } from "react";
import { PixelatedImage } from "@proton-ui/core";

/**
 * 像素化图片演示组件
 *
 * 展示基础像素化效果和 5 种预设风格
 * 提供参数控制面板和原图对比视图
 */
export function PixelatedImageDemo() {
  // 预设风格类型
  type PresetName = "retro8bit" | "gameboy" | "cga" | "vaporwave" | "custom";

  // 预设配置
  const presets = {
    retro8bit: {
      label: "Retro 8-bit",
      pixelSize: 8,
      colorLevels: 16,
      description: "经典 8-bit 游戏美学",
      emoji: "🎮",
    },
    gameboy: {
      label: "Game Boy",
      pixelSize: 4,
      colorLevels: 4,
      description: "Game Boy 四色风格",
      emoji: "👾",
    },
    cga: {
      label: "CGA",
      pixelSize: 6,
      colorLevels: 16,
      description: "CGA 显示器风格",
      emoji: "🖥️",
    },
    vaporwave: {
      label: "Vaporwave",
      pixelSize: 12,
      colorLevels: 32,
      description: "蒸汽波美学",
      emoji: "🌸",
    },
    custom: {
      label: "Custom",
      pixelSize: 8,
      colorLevels: 64,
      description: "自定义参数",
      emoji: "⚙️",
    },
  };

  // 示例图片
  const exampleImages = [
    {
      id: "portrait",
      url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
      title: "人像",
    },
    {
      id: "landscape",
      url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400",
      title: "风景",
    },
    {
      id: "city",
      url: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=400",
      title: "城市",
    },
    {
      id: "abstract",
      url: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=400",
      title: "抽象",
    },
  ];

  // 状态
  const [currentImage, setCurrentImage] = useState(exampleImages[0].url);
  const [activePreset, setActivePreset] = useState<PresetName>("retro8bit");
  const [pixelSize, setPixelSize] = useState(presets.retro8bit.pixelSize);
  const [colorLevels, setColorLevels] = useState(presets.retro8bit.colorLevels);
  const [showComparison, setShowComparison] = useState(false);

  // 处理预设选择
  const handlePresetSelect = (preset: PresetName) => {
    setActivePreset(preset);
    setPixelSize(presets[preset].pixelSize);
    setColorLevels(presets[preset].colorLevels);
  };

  // 处理参数变化
  const handlePixelSizeChange = (value: number) => {
    setPixelSize(value);
    setActivePreset("custom");
  };

  const handleColorLevelsChange = (value: number) => {
    setColorLevels(value);
    setActivePreset("custom");
  };

  return (
    <div className="space-y-6">
      {/* 主要内容区域：两栏布局 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* 左侧：控制面板 */}
        <div className="space-y-6 lg:col-span-1">
          {/* 示例图片选择 */}
          <div className="glass-morphism p-4 rounded-lg">
            <h3 className="text-sm font-bold text-white mb-3">选择图片</h3>
            <div className="grid grid-cols-4 gap-2">
              {exampleImages.map((image) => (
                <button
                  key={image.id}
                  onClick={() => setCurrentImage(image.url)}
                  className={`relative overflow-hidden rounded-md border-2 transition-all aspect-square ${
                    currentImage === image.url
                      ? "border-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]"
                      : "border-gray-600 hover:border-cyan-400"
                  }`}
                  title={image.title}
                >
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* 预设风格选择 */}
          <div className="glass-morphism p-4 rounded-lg">
            <h3 className="text-sm font-bold text-white mb-3">风格预设</h3>
            <div className="grid grid-cols-2 gap-2">
              {(Object.keys(presets) as PresetName[]).map((preset) => (
                <button
                  key={preset}
                  onClick={() => handlePresetSelect(preset)}
                  className={`p-2 rounded-md border-2 transition-all text-left ${
                    activePreset === preset
                      ? "border-purple-500 bg-purple-500/20 text-purple-400"
                      : "border-gray-600 text-gray-300 hover:border-purple-400"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg">{presets[preset].emoji}</span>
                    <span className="text-xs font-bold">
                      {presets[preset].label}
                    </span>
                  </div>
                  <div className="text-[10px] text-gray-400">
                    {presets[preset].pixelSize}px ·{" "}
                    {presets[preset].colorLevels}色
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* 参数调节 */}
          <div className="glass-morphism p-4 rounded-lg space-y-4">
            <h3 className="text-sm font-bold text-white">参数调节</h3>

            {/* 像素大小 */}
            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-xs text-gray-300">像素大小</label>
                <span className="text-xs font-bold text-cyan-400">
                  {pixelSize}px
                </span>
              </div>
              <input
                type="range"
                min="2"
                max="32"
                value={pixelSize}
                onChange={(e) => handlePixelSizeChange(Number(e.target.value))}
                className="w-full h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"
              />
            </div>

            {/* 色彩级别 */}
            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-xs text-gray-300">色彩级别</label>
                <span className="text-xs font-bold text-pink-400">
                  {colorLevels}色
                </span>
              </div>
              <input
                type="range"
                min="4"
                max="256"
                step="4"
                value={colorLevels}
                onChange={(e) =>
                  handleColorLevelsChange(Number(e.target.value))
                }
                className="w-full h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-pink-500"
              />
            </div>
          </div>
        </div>

        {/* 右侧：效果预览 */}
        <div className="lg:col-span-2">
          <div className="glass-morphism p-6 rounded-lg h-full flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-white">效果预览</h3>
              <div className="flex gap-2 text-xs">
                <span className="px-2 py-1 bg-gray-800 rounded border border-gray-600 text-gray-300">
                  原始
                </span>
                <span className="px-2 py-1 bg-gray-800 rounded border border-cyan-500/50 text-cyan-400">
                  像素化
                </span>
              </div>
            </div>

            <div className="flex-1 grid grid-cols-2 gap-4 items-start content-start">
              <div className="space-y-2">
                <div className="relative aspect-auto rounded-lg overflow-hidden border-2 border-gray-700">
                  <img
                    src={currentImage}
                    alt="原图"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 left-2 px-2 py-0.5 bg-black/60 rounded text-[10px] text-white backdrop-blur-sm">
                    Original
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="relative aspect-auto rounded-lg overflow-hidden border-2 border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
                  <PixelatedImage
                    src={currentImage}
                    alt="像素化效果"
                    pixelSize={pixelSize}
                    colorLevels={colorLevels}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 left-2 px-2 py-0.5 bg-cyan-900/80 rounded text-[10px] text-cyan-200 backdrop-blur-sm border border-cyan-500/30">
                    Pixelated
                  </div>
                </div>
              </div>
            </div>

            <p className="text-center text-xs text-gray-400 mt-4">
              调整左侧参数实时查看像素化效果
            </p>
          </div>
        </div>
      </div>

      {/* 代码示例 */}
      <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
        <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-3">
          💻 代码示例
        </h4>
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
          <code>{`import { PixelatedImage } from '@proton-ui/core';

<PixelatedImage
  src="${currentImage}"
  alt="像素化图片"
  pixelSize={${pixelSize}}
  colorLevels={${colorLevels}}
  className="rounded-lg"
/>`}</code>
        </pre>
      </div>

      {/* 使用提示 */}
      <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
        <h4 className="text-sm font-bold text-green-900 dark:text-green-300 mb-2">
          💡 使用建议
        </h4>
        <ul className="text-sm text-green-800 dark:text-green-400 space-y-1">
          <li>• 小图标使用 4px 像素大小</li>
          <li>• 头像使用 8px 像素大小</li>
          <li>• 背景图使用 16px 像素大小</li>
          <li>• 限制图片尺寸在 2000x2000 以内以获得最佳性能</li>
        </ul>
      </div>
    </div>
  );
}

// 添加 default export 以支持 Rspress globalComponents
export default PixelatedImageDemo;
