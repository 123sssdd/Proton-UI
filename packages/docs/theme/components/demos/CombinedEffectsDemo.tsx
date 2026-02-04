import React, { useState, useEffect } from "react";
import { ParticleEffect } from "@proton-ui/core";

/**
 * 效果组合演示组件
 *
 * 展示多种像素特效的组合使用，包括：
 * - 粒子效果（漂浮 + 爆炸）
 * - 霓虹光晕
 * - 玻璃拟态
 * - 性能监控
 */
export function CombinedEffectsDemo() {
  const [fps, setFps] = useState(60);
  const [enableFloat, setEnableFloat] = useState(true);
  const [enableExplosion, setEnableExplosion] = useState(true);
  const [enableNeon, setEnableNeon] = useState(true);
  const [enableGlass, setEnableGlass] = useState(true);

  // FPS 监控
  useEffect(() => {
    let frameCount = 0;
    let lastTime = performance.now();
    let animationFrameId: number;

    const measureFPS = () => {
      frameCount++;
      const currentTime = performance.now();
      const elapsed = currentTime - lastTime;

      if (elapsed >= 1000) {
        setFps(Math.round((frameCount * 1000) / elapsed));
        frameCount = 0;
        lastTime = currentTime;
      }

      animationFrameId = requestAnimationFrame(measureFPS);
    };

    animationFrameId = requestAnimationFrame(measureFPS);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="space-y-6">
      {/* 控制面板 */}
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">
            特效控制
          </h3>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600 dark:text-gray-400">
              FPS:
            </span>
            <span
              className={`text-lg font-bold ${
                fps >= 50
                  ? "text-green-600"
                  : fps >= 30
                    ? "text-yellow-600"
                    : "text-red-600"
              }`}
            >
              {fps}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={enableFloat}
              onChange={(e) => setEnableFloat(e.target.checked)}
              className="w-4 h-4"
            />
            <span className="text-sm text-gray-700 dark:text-gray-300">
              漂浮粒子
            </span>
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={enableExplosion}
              onChange={(e) => setEnableExplosion(e.target.checked)}
              className="w-4 h-4"
            />
            <span className="text-sm text-gray-700 dark:text-gray-300">
              点击爆炸
            </span>
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={enableNeon}
              onChange={(e) => setEnableNeon(e.target.checked)}
              className="w-4 h-4"
            />
            <span className="text-sm text-gray-700 dark:text-gray-300">
              霓虹光晕
            </span>
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={enableGlass}
              onChange={(e) => setEnableGlass(e.target.checked)}
              className="w-4 h-4"
            />
            <span className="text-sm text-gray-700 dark:text-gray-300">
              玻璃拟态
            </span>
          </label>
        </div>
      </div>

      {/* 效果展示区域 */}
      <div
        className="relative h-96 rounded-lg overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #1e3a8a 0%, #1e293b 100%)",
        }}
      >
        {/* 背景漂浮粒子 */}
        {enableFloat && (
          <ParticleEffect
            type="float"
            autoTrigger
            triggerInterval={1500}
            count={3}
            colors={["#4ECDC4", "#7FD99F", "#FFB86C"]}
            size={{ min: 2, max: 3 }}
            speed={{ min: 20, max: 40 }}
            life={{ min: 5000, max: 8000 }}
            style={{ zIndex: 1 }}
          />
        )}

        {/* 点击爆炸效果 */}
        {enableExplosion && (
          <ParticleEffect
            type="explosion"
            onClickEmit
            count={40}
            colors={["#FF6B9D", "#FFB86C", "#FFFFFF"]}
            size={{ min: 2, max: 5 }}
            speed={{ min: 80, max: 180 }}
            life={{ min: 600, max: 1200 }}
            style={{ zIndex: 2 }}
          />
        )}

        {/* 内容卡片 */}
        <div
          className="absolute inset-0 flex items-center justify-center p-8"
          style={{ zIndex: 10 }}
        >
          <div
            className={`p-8 rounded-lg max-w-md ${
              enableGlass ? "glass-morphism-cyan" : "bg-gray-900/80"
            } ${enableNeon ? "neon-glow-cyan-box" : ""}`}
          >
            <h2
              className={`text-3xl font-bold mb-4 ${
                enableNeon ? "neon-glow-cyan neon-pulse" : "text-cyan-400"
              }`}
            >
              赛博朋克卡片
            </h2>

            <p className="text-white mb-4">
              这是一个组合了多种像素特效的演示卡片。你可以通过上方的控制面板开关不同的特效。
            </p>

            <div className="space-y-2 text-sm text-gray-300">
              <p>✨ 漂浮粒子：背景装饰效果</p>
              <p>💥 点击爆炸：交互反馈效果</p>
              <p>🌟 霓虹光晕：强调重要元素</p>
              <p>🔮 玻璃拟态：现代优雅风格</p>
            </div>

            <div className="mt-6 pt-4 border-t border-cyan-400/30">
              <p className="text-xs text-gray-400">点击任意位置触发爆炸效果</p>
            </div>
          </div>
        </div>

        {/* 性能提示 */}
        {fps < 30 && (
          <div className="absolute bottom-4 left-4 right-4 bg-red-900/80 text-white p-3 rounded-lg text-sm">
            ⚠️ 检测到性能问题（FPS &lt; 30），建议关闭部分特效
          </div>
        )}
      </div>

      {/* 性能说明 */}
      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
        <h4 className="text-sm font-bold text-blue-900 dark:text-blue-300 mb-2">
          💡 性能优化建议
        </h4>
        <ul className="text-sm text-blue-800 dark:text-blue-400 space-y-1">
          <li>• 限制同时运行的粒子效果数量</li>
          <li>• 避免在大面积区域使用霓虹光晕</li>
          <li>• 使用 GPU 加速的 CSS 属性（transform、opacity）</li>
          <li>• 支持 prefers-reduced-motion 设置</li>
        </ul>
      </div>
    </div>
  );
}
