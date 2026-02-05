import React from "react";
import { PixelatedImage } from "@proton-ui/components";

/**
 * ImageComparison 组件属性
 */
export interface ImageComparisonProps {
  /** 原始图片 URL 或 Data URL */
  originalImage: string;
  /** 像素大小 */
  pixelSize: number;
  /** 色彩级别 */
  colorLevels: number;
  /** 是否正在处理 */
  isProcessing?: boolean;
}

/**
 * 图片对比组件
 *
 * 功能：
 * - 并排显示原图和像素化图片
 * - 响应式布局（桌面端水平，移动端垂直）
 * - 显示加载状态
 * - 保持图片宽高比
 */
export const ImageComparison: React.FC<ImageComparisonProps> = ({
  originalImage,
  pixelSize,
  colorLevels,
  isProcessing = false,
}) => {
  return (
    <div className="w-full">
      <h3 className="text-xl font-bold text-white mb-4">效果对比</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 原图 */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="text-lg font-bold text-cyan-400">原图</h4>
          </div>
          <div className="glass-morphism p-4 rounded-lg">
            <img
              src={originalImage}
              alt="原始图片"
              className="w-full h-auto rounded"
              style={{ imageRendering: "auto" }}
            />
          </div>
        </div>

        {/* 像素化图片 */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="text-lg font-bold text-pink-400">像素化</h4>
            <div className="text-sm text-gray-400">
              {pixelSize}px · {colorLevels} 色
            </div>
          </div>
          <div className="glass-morphism p-4 rounded-lg relative">
            {/* 加载指示器 */}
            {isProcessing && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-900/80 rounded-lg z-10">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
                  <p className="text-cyan-400 font-bold">处理中...</p>
                </div>
              </div>
            )}

            {/* 像素化图片 */}
            <PixelatedImage
              src={originalImage}
              alt="像素化图片"
              pixelSize={pixelSize}
              colorLevels={colorLevels}
              className="w-full h-auto rounded"
            />
          </div>
        </div>
      </div>

      {/* 说明文字 */}
      <div className="mt-4 text-center text-gray-400 text-sm">
        💡 调整参数可实时查看像素化效果变化
      </div>
    </div>
  );
};
