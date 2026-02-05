import React, { useState } from "react";
import { PixelatedImage } from "@proton-ui/core";

/**
 * ImageComparison 组件属性
 */
export interface ImageComparisonProps {
  /** 原始图片 URL */
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
 * - 并排显示原图和像素化效果
 * - 支持切换单图/对比视图
 * - 显示处理状态
 * - 响应式布局
 */
export const ImageComparison: React.FC<ImageComparisonProps> = ({
  originalImage,
  pixelSize,
  colorLevels,
  isProcessing = false,
}) => {
  const [viewMode, setViewMode] = useState<"single" | "comparison">("single");

  return (
    <div className="w-full space-y-4">
      {/* 视图切换 */}
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold text-white">效果预览</h3>
        <div className="flex gap-2">
          <button
            onClick={() => setViewMode("single")}
            className={`px-4 py-2 rounded-lg border-2 font-medium transition-all text-sm ${
              viewMode === "single"
                ? "border-cyan-400 bg-cyan-400/20 text-cyan-400"
                : "border-gray-600 text-gray-300 hover:border-cyan-400/50"
            }`}
          >
            单图视图
          </button>
          <button
            onClick={() => setViewMode("comparison")}
            className={`px-4 py-2 rounded-lg border-2 font-medium transition-all text-sm ${
              viewMode === "comparison"
                ? "border-cyan-400 bg-cyan-400/20 text-cyan-400"
                : "border-gray-600 text-gray-300 hover:border-cyan-400/50"
            }`}
          >
            对比视图
          </button>
        </div>
      </div>

      {/* 处理状态提示 */}
      {isProcessing && (
        <div className="bg-yellow-900/30 border-2 border-yellow-400 text-yellow-400 p-3 rounded-lg text-sm text-center">
          ⏳ 正在处理图片，请稍候...
        </div>
      )}

      {/* 图片展示 */}
      {viewMode === "single" ? (
        /* 单图视图 */
        <div className="flex justify-center">
          <div className="max-w-2xl w-full">
            <PixelatedImage
              src={originalImage}
              alt="像素化效果"
              pixelSize={pixelSize}
              colorLevels={colorLevels}
              className="w-full rounded-lg shadow-lg"
            />
            <div className="mt-3 text-center text-gray-400 text-sm">
              像素大小: {pixelSize}px · 色彩级别: {colorLevels} 色
            </div>
          </div>
        </div>
      ) : (
        /* 对比视图 */
        <div className="grid md:grid-cols-2 gap-6">
          {/* 原图 */}
          <div>
            <div className="mb-2 text-sm font-medium text-gray-300 flex items-center gap-2">
              <span>📷</span>
              <span>原图</span>
            </div>
            <img
              src={originalImage}
              alt="原图"
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          {/* 像素化效果 */}
          <div>
            <div className="mb-2 text-sm font-medium text-gray-300 flex items-center gap-2">
              <span>🎨</span>
              <span>像素化效果</span>
            </div>
            <PixelatedImage
              src={originalImage}
              alt="像素化效果"
              pixelSize={pixelSize}
              colorLevels={colorLevels}
              className="w-full rounded-lg shadow-lg"
            />
            <div className="mt-2 text-xs text-gray-400">
              {pixelSize}px · {colorLevels} 色
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
