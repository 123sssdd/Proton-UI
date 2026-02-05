import React from "react";

/**
 * ParameterControls 组件属性
 */
export interface ParameterControlsProps {
  /** 像素大小 (2-32) */
  pixelSize: number;
  /** 色彩级别 (8-256) */
  colorLevels: number;
  /** 像素大小变化回调 */
  onPixelSizeChange: (value: number) => void;
  /** 色彩级别变化回调 */
  onColorLevelsChange: (value: number) => void;
  /** 是否禁用控件 */
  disabled?: boolean;
}

/**
 * 参数控制组件
 *
 * 功能：
 * - 像素大小滑块（2-32px，步长 1）
 * - 色彩级别滑块（8-256，步长 8）
 * - 实时显示当前数值
 * - 支持禁用状态
 */
export const ParameterControls: React.FC<ParameterControlsProps> = ({
  pixelSize,
  colorLevels,
  onPixelSizeChange,
  onColorLevelsChange,
  disabled = false,
}) => {
  return (
    <div className="w-full space-y-6">
      <h3 className="text-xl font-bold text-white mb-4">参数调节</h3>

      {/* 像素大小滑块 */}
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <label htmlFor="pixel-size" className="text-white font-medium">
            像素大小
          </label>
          <span className="text-cyan-400 font-bold text-lg">{pixelSize}px</span>
        </div>
        <input
          id="pixel-size"
          type="range"
          min="2"
          max="32"
          step="1"
          value={pixelSize}
          onInput={(e) => onPixelSizeChange(Number(e.currentTarget.value))}
          disabled={disabled}
          className={`
            w-full h-2 rounded-lg appearance-none cursor-pointer
            bg-gray-700
            ${disabled ? "opacity-50 cursor-not-allowed" : ""}
          `}
          style={{
            background: disabled
              ? undefined
              : `linear-gradient(to right, #22d3ee 0%, #22d3ee ${
                  ((pixelSize - 2) / 30) * 100
                }%, #374151 ${((pixelSize - 2) / 30) * 100}%, #374151 100%)`,
          }}
        />
        <div className="flex justify-between text-xs text-gray-400">
          <span>2px (精细)</span>
          <span>32px (粗糙)</span>
        </div>
      </div>

      {/* 色彩级别滑块 */}
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <label htmlFor="color-levels" className="text-white font-medium">
            色彩级别
          </label>
          <span className="text-pink-400 font-bold text-lg">
            {colorLevels} 色
          </span>
        </div>
        <input
          id="color-levels"
          type="range"
          min="8"
          max="256"
          step="8"
          value={colorLevels}
          onInput={(e) => onColorLevelsChange(Number(e.currentTarget.value))}
          disabled={disabled}
          className={`
            w-full h-2 rounded-lg appearance-none cursor-pointer
            bg-gray-700
            ${disabled ? "opacity-50 cursor-not-allowed" : ""}
          `}
          style={{
            background: disabled
              ? undefined
              : `linear-gradient(to right, #ec4899 0%, #ec4899 ${
                  ((colorLevels - 8) / 248) * 100
                }%, #374151 ${((colorLevels - 8) / 248) * 100}%, #374151 100%)`,
          }}
        />
        <div className="flex justify-between text-xs text-gray-400">
          <span>8 色 (复古)</span>
          <span>256 色 (丰富)</span>
        </div>
      </div>

      {/* 提示信息 */}
      {disabled && (
        <p className="text-yellow-400 text-sm text-center">
          ⏳ 处理中，请稍候...
        </p>
      )}
    </div>
  );
};
