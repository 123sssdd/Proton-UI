import React from "react";

/**
 * 预设名称类型
 */
export type PresetName =
  | "retro8bit"
  | "modern16bit"
  | "modernPixel"
  | "coarsePixel"
  | "finePixel";

/**
 * 预设配置接口
 */
export interface PresetConfiguration {
  name: PresetName;
  label: string;
  pixelSize: number;
  colorLevels: number;
  description: string;
}

/**
 * PresetSelector 组件属性
 */
export interface PresetSelectorProps {
  /** 当前激活的预设 */
  activePreset: PresetName | "custom";
  /** 预设选择回调 */
  onPresetSelect: (preset: PresetName) => void;
  /** 预设配置列表 */
  presets?: PresetConfiguration[];
}

/**
 * 默认预设配置
 */
export const DEFAULT_PRESETS: PresetConfiguration[] = [
  {
    name: "retro8bit",
    label: "Retro 8-bit",
    pixelSize: 8,
    colorLevels: 16,
    description: "经典 8-bit 游戏美学",
  },
  {
    name: "modern16bit",
    label: "Modern 16-bit",
    pixelSize: 4,
    colorLevels: 64,
    description: "增强的 16-bit 风格",
  },
  {
    name: "modernPixel",
    label: "Modern Pixel",
    pixelSize: 6,
    colorLevels: 128,
    description: "现代像素艺术",
  },
  {
    name: "coarsePixel",
    label: "Coarse",
    pixelSize: 16,
    colorLevels: 32,
    description: "大块像素效果",
  },
  {
    name: "finePixel",
    label: "Fine",
    pixelSize: 2,
    colorLevels: 256,
    description: "精细像素化",
  },
];

/**
 * 预设选择器组件
 *
 * 功能：
 * - 显示 5 种预定义的像素化风格
 * - 高亮显示当前激活的预设
 * - 支持自定义状态显示
 * - 悬停显示详细描述
 */
export const PresetSelector: React.FC<PresetSelectorProps> = ({
  activePreset,
  onPresetSelect,
  presets = DEFAULT_PRESETS,
}) => {
  return (
    <div className="w-full">
      <h3 className="text-xl font-bold text-white mb-4">预设风格</h3>
      <div className="flex gap-3 overflow-x-auto pb-2">
        {presets.map((preset) => {
          const isActive = activePreset === preset.name;
          return (
            <button
              key={preset.name}
              onClick={() => onPresetSelect(preset.name)}
              title={preset.description}
              className={`
                flex-shrink-0 px-4 py-3 rounded-lg border-2 font-bold transition-all
                min-w-[120px] text-center
                ${
                  isActive
                    ? "border-cyan-400 bg-cyan-400/20 text-cyan-400 shadow-lg shadow-cyan-400/30"
                    : "border-gray-600 text-gray-300 hover:border-cyan-400/50 hover:text-cyan-400"
                }
              `}
            >
              <div className="text-sm">{preset.label}</div>
              <div className="text-xs text-gray-400 mt-1">
                {preset.pixelSize}px · {preset.colorLevels} 色
              </div>
            </button>
          );
        })}
        {activePreset === "custom" && (
          <div
            className="
              flex-shrink-0 px-4 py-3 rounded-lg border-2 font-bold
              min-w-[120px] text-center
              border-purple-400 bg-purple-400/20 text-purple-400
            "
          >
            <div className="text-sm">Custom</div>
            <div className="text-xs text-gray-400 mt-1">自定义参数</div>
          </div>
        )}
      </div>
    </div>
  );
};
