import React, { useState, useCallback, useMemo } from "react";
import {
  ImageUploader,
  PresetSelector,
  ParameterControls,
  ImageComparison,
  ExampleGallery,
  DEFAULT_PRESETS,
  DEFAULT_EXAMPLES,
} from "../imageFilter";
import type { PresetName } from "../imageFilter";

/**
 * 防抖函数
 */
function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;
  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

/**
 * 图片滤镜工坊组件
 *
 * 完整的图片像素化工具，包括：
 * - 图片上传
 * - 示例图库
 * - 预设风格选择
 * - 参数实时调节
 * - 原图对比视图
 * - 代码示例
 */
export function ImageFilterWorkshop() {
  // 状态管理
  const [currentImage, setCurrentImage] = useState<string>(
    DEFAULT_EXAMPLES[0].url
  );
  const [pixelSize, setPixelSize] = useState<number>(8);
  const [colorLevels, setColorLevels] = useState<number>(16);
  const [activePreset, setActivePreset] = useState<PresetName | "custom">(
    "retro8bit"
  );
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  /**
   * 处理预设选择
   */
  const handlePresetSelect = useCallback((preset: PresetName) => {
    const config = DEFAULT_PRESETS.find((p) => p.name === preset);
    if (config) {
      setPixelSize(config.pixelSize);
      setColorLevels(config.colorLevels);
      setActivePreset(preset);
      setError(null);
    }
  }, []);

  /**
   * 处理像素大小变化（带防抖）
   */
  const handlePixelSizeChange = useMemo(
    () =>
      debounce((value: number) => {
        setPixelSize(value);
        setActivePreset("custom");
        setIsProcessing(true);
        // 模拟处理延迟
        setTimeout(() => setIsProcessing(false), 100);
      }, 100),
    []
  );

  /**
   * 处理色彩级别变化（带防抖）
   */
  const handleColorLevelsChange = useMemo(
    () =>
      debounce((value: number) => {
        setColorLevels(value);
        setActivePreset("custom");
        setIsProcessing(true);
        // 模拟处理延迟
        setTimeout(() => setIsProcessing(false), 100);
      }, 100),
    []
  );

  /**
   * 处理图片上传
   */
  const handleImageUpload = useCallback((dataUrl: string) => {
    setCurrentImage(dataUrl);
    setError(null);
  }, []);

  /**
   * 处理示例图片选择
   */
  const handleExampleSelect = useCallback((imageUrl: string) => {
    setCurrentImage(imageUrl);
    setError(null);
  }, []);

  /**
   * 处理错误
   */
  const handleError = useCallback((errorMessage: string) => {
    setError(errorMessage);
    // 3秒后自动清除错误
    setTimeout(() => setError(null), 3000);
  }, []);

  return (
    <div className="space-y-8">
      {/* 标题 */}
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          图片滤镜工坊
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          上传图片 · 调节参数 · 实时预览 · 效果对比
        </p>
      </div>

      {/* 错误提示 */}
      {error && (
        <div className="bg-red-50 dark:bg-red-900/20 border-2 border-red-400 p-4 rounded-lg">
          <div className="flex items-center gap-3">
            <span className="text-2xl">⚠️</span>
            <p className="text-red-600 dark:text-red-400 font-bold">{error}</p>
          </div>
        </div>
      )}

      {/* 图片上传 */}
      <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg border-2 border-gray-200 dark:border-gray-700">
        <ImageUploader onImageLoad={handleImageUpload} onError={handleError} />
      </div>

      {/* 示例图库 */}
      <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg border-2 border-gray-200 dark:border-gray-700">
        <ExampleGallery
          examples={DEFAULT_EXAMPLES}
          onExampleSelect={handleExampleSelect}
          selectedImage={currentImage}
        />
      </div>

      {/* 预设选择器 */}
      <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg border-2 border-gray-200 dark:border-gray-700">
        <PresetSelector
          activePreset={activePreset}
          onPresetSelect={handlePresetSelect}
          presets={DEFAULT_PRESETS}
        />
      </div>

      {/* 参数控制 */}
      <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg border-2 border-gray-200 dark:border-gray-700">
        <ParameterControls
          pixelSize={pixelSize}
          colorLevels={colorLevels}
          onPixelSizeChange={handlePixelSizeChange}
          onColorLevelsChange={handleColorLevelsChange}
          disabled={isProcessing}
        />
      </div>

      {/* 图片对比 */}
      <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg border-2 border-gray-200 dark:border-gray-700">
        <ImageComparison
          originalImage={currentImage}
          pixelSize={pixelSize}
          colorLevels={colorLevels}
          isProcessing={isProcessing}
        />
      </div>

      {/* API 使用示例 */}
      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border-2 border-blue-200 dark:border-blue-800">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
          💻 API 使用示例
        </h3>
        <div className="space-y-4">
          {/* 组件用法 */}
          <div>
            <h4 className="text-cyan-600 dark:text-cyan-400 font-bold mb-2">
              组件用法
            </h4>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
              <code>{`import { PixelatedImage } from '@proton-ui/core';

<PixelatedImage
  src="/avatar.jpg"
  alt="Avatar"
  pixelSize={${pixelSize}}
  colorLevels={${colorLevels}}
  className="rounded-lg"
/>`}</code>
            </pre>
          </div>

          {/* Hook 用法 */}
          <div>
            <h4 className="text-pink-600 dark:text-pink-400 font-bold mb-2">
              Hook 用法
            </h4>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
              <code>{`import { usePixelateImage } from '@proton-ui/core';

const { pixelatedImage, pixelate } = usePixelateImage();

const handleFile = async (file: File) => {
  await pixelate(file, {
    pixelSize: ${pixelSize},
    colorLevels: ${colorLevels}
  });
};`}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* 特性说明 */}
      <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border-2 border-green-200 dark:border-green-800">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
          ✨ 特性说明
        </h3>
        <ul className="text-gray-700 dark:text-gray-300 space-y-2">
          <li>✓ 支持可调像素大小（2-32px）</li>
          <li>✓ 支持色彩量化（8-256 色）</li>
          <li>✓ 提供 5 种预设配置</li>
          <li>✓ 支持多种图片格式（JPEG, PNG, WebP, GIF）</li>
          <li>✓ 实时参数调节和预览</li>
          <li>✓ Canvas 处理，高性能</li>
          <li>✓ 响应式设计，适配所有设备</li>
        </ul>
      </div>

      {/* 底部说明 */}
      <div className="text-center text-gray-500 dark:text-gray-400 text-sm">
        <p>
          所有特效都支持{" "}
          <code className="text-cyan-600 dark:text-cyan-400">
            prefers-reduced-motion
          </code>{" "}
          设置
        </p>
        <p className="mt-2">在系统设置中启用"减少动效"后，动画将自动禁用</p>
      </div>
    </div>
  );
}

// 添加 default export 以支持 Rspress globalComponents
export default ImageFilterWorkshop;
