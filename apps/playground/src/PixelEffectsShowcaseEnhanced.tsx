import React, { useState, useCallback, useMemo } from "react";
import {
  ImageUploader,
  PresetSelector,
  ParameterControls,
  ImageComparison,
  ExampleGallery,
  DEFAULT_PRESETS,
  DEFAULT_EXAMPLES,
} from "./components";
import type { PresetName } from "./components";
import { Glass } from "@proton-ui/components";

/**
 * 防抖函数
 */
function debounce<T extends (...args: any[]) => any>(
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
 * 增强版像素特效展示页面
 *
 * 功能：
 * - 真实图片像素化演示
 * - 用户图片上传
 * - 实时参数调节
 * - 预设风格选择
 * - 原图对比视图
 */
export const PixelEffectsShowcaseEnhanced: React.FC = () => {
  // 状态管理
  const [currentImage, setCurrentImage] = useState<string>(
    DEFAULT_EXAMPLES?.[0]?.url || ""
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
    <div className="min-h-screen bg-gray-950 p-4 sm:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* 标题 */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-white neon-glow-cyan">
            像素化图片滤镜
          </h1>
          <p className="text-gray-300 text-base sm:text-lg">
            上传图片 · 调节参数 · 实时预览 · 效果对比
          </p>
        </div>

        {/* 错误提示 */}
        {error && (
          <Glass
            variant="pink"
            className="p-4 rounded-lg border-2 border-pink-400"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">⚠️</span>
              <p className="text-pink-400 font-bold">{error}</p>
            </div>
          </Glass>
        )}

        {/* 图片上传 */}
        <Glass className="p-6 sm:p-8 rounded-lg">
          <ImageUploader
            onImageLoad={handleImageUpload}
            onError={handleError}
          />
        </Glass>

        {/* 示例图库 */}
        <Glass className="p-6 sm:p-8 rounded-lg">
          <ExampleGallery
            examples={DEFAULT_EXAMPLES}
            onExampleSelect={handleExampleSelect}
            selectedImage={currentImage}
          />
        </Glass>

        {/* 预设选择器 */}
        <Glass className="p-6 sm:p-8 rounded-lg">
          <PresetSelector
            activePreset={activePreset}
            onPresetSelect={handlePresetSelect}
            presets={DEFAULT_PRESETS}
          />
        </Glass>

        {/* 参数控制 */}
        <Glass className="p-6 sm:p-8 rounded-lg">
          <ParameterControls
            pixelSize={pixelSize}
            colorLevels={colorLevels}
            onPixelSizeChange={handlePixelSizeChange}
            onColorLevelsChange={handleColorLevelsChange}
            disabled={isProcessing}
          />
        </Glass>

        {/* 图片对比 */}
        <Glass className="p-6 sm:p-8 rounded-lg">
          <ImageComparison
            originalImage={currentImage}
            pixelSize={pixelSize}
            colorLevels={colorLevels}
            isProcessing={isProcessing}
          />
        </Glass>

        {/* API 使用示例 */}
        <Glass className="p-6 sm:p-8 rounded-lg">
          <h3 className="text-xl font-bold text-white mb-4">API 使用示例</h3>
          <div className="space-y-4">
            {/* 组件用法 */}
            <div>
              <h4 className="text-cyan-400 font-bold mb-2">组件用法</h4>
              <pre className="bg-gray-900 p-4 rounded border border-gray-700 overflow-x-auto text-sm">
                <code className="text-gray-300">{`import { PixelatedImage } from '@proton-ui/components';

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
              <h4 className="text-pink-400 font-bold mb-2">Hook 用法</h4>
              <pre className="bg-gray-900 p-4 rounded border border-gray-700 overflow-x-auto text-sm">
                <code className="text-gray-300">{`import { PixelatedImage } from '@proton-ui/components';
import { usePixelateImage } from '@proton-ui/hooks';

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
        </Glass>

        {/* 特性说明 */}
        <Glass className="p-6 rounded-lg">
          <h3 className="text-xl font-bold text-white mb-4">特性说明</h3>
          <ul className="text-gray-300 space-y-2">
            <li>✓ 支持可调像素大小（2-32px）</li>
            <li>✓ 支持色彩量化（8-256 色）</li>
            <li>✓ 提供 5 种预设配置</li>
            <li>✓ 支持多种图片格式（JPEG, PNG, WebP, GIF）</li>
            <li>✓ 实时参数调节和预览</li>
            <li>✓ Canvas 处理，高性能</li>
            <li>✓ 响应式设计，适配所有设备</li>
          </ul>
        </Glass>

        {/* 底部说明 */}
        <div className="text-center text-gray-400 text-sm">
          <p>
            所有特效都支持{" "}
            <code className="text-cyan-400">prefers-reduced-motion</code> 设置
          </p>
          <p className="mt-2">在系统设置中启用"减少动效"后，动画将自动禁用</p>
        </div>
      </div>
    </div>
  );
};

export default PixelEffectsShowcaseEnhanced;
