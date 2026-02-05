import React, { useState, useEffect } from "react";
import { ParticleEffect } from "@proton-ui/core";

/**
 * 粒子效果演示组件
 *
 * 展示 4 种粒子类型：explosion、float、sparkle、snow
 * 提供参数控制面板和性能监控
 */
export function ParticleEffectDemo() {
  // 粒子类型状态
  const [particleType, setParticleType] = useState<
    "explosion" | "float" | "sparkle" | "snow"
  >("explosion");

  // 参数状态
  const [count, setCount] = useState(30);
  const [speed, setSpeed] = useState({ min: 100, max: 200 });
  const [colorPreset, setColorPreset] = useState<
    "default" | "fire" | "ice" | "nature" | "neon"
  >("default");

  // 性能监控
  const [fps, setFps] = useState(60);

  // 颜色预设
  const colorPresets = {
    default: ["#4ECDC4", "#FF6B9D", "#FFB86C", "#7FD99F"],
    fire: ["#FF4500", "#FF6347", "#FFD700", "#FFA500"],
    ice: ["#00CED1", "#4682B4", "#87CEEB", "#B0E0E6"],
    nature: ["#228B22", "#32CD32", "#90EE90", "#98FB98"],
    neon: ["#FF1493", "#00FF00", "#00FFFF", "#FF00FF"],
  };

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

  // 根据粒子类型调整默认参数
  useEffect(() => {
    switch (particleType) {
      case "explosion":
        setCount(30);
        setSpeed({ min: 100, max: 200 });
        break;
      case "float":
        setCount(5);
        setSpeed({ min: 30, max: 60 });
        break;
      case "sparkle":
        setCount(10);
        setSpeed({ min: 0, max: 0 });
        break;
      case "snow":
        setCount(8);
        setSpeed({ min: 40, max: 80 });
        break;
    }
  }, [particleType]);

  return (
    <div className="space-y-6">
      {/* 效果展示区域 */}
      <div
        className="glass-morphism p-8 rounded-lg relative overflow-hidden"
        style={{
          background:
            particleType === "snow"
              ? "linear-gradient(135deg, #1e3a8a 0%, #1e293b 100%)"
              : particleType === "sparkle"
                ? "linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)"
                : "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
          minHeight: "400px",
        }}
      >
        {/* 粒子效果 */}
        <ParticleEffect
          type={particleType}
          autoTrigger={particleType !== "explosion"}
          onClickEmit={particleType === "explosion"}
          triggerInterval={
            particleType === "float"
              ? 1000
              : particleType === "sparkle"
                ? 500
                : particleType === "snow"
                  ? 800
                  : 2000
          }
          count={count}
          colors={colorPresets[colorPreset]}
          size={{ min: 2, max: particleType === "explosion" ? 5 : 3 }}
          speed={speed}
          life={
            particleType === "explosion"
              ? { min: 500, max: 1500 }
              : particleType === "float"
                ? { min: 3000, max: 5000 }
                : particleType === "sparkle"
                  ? { min: 800, max: 1200 }
                  : { min: 4000, max: 6000 }
          }
          respectMotionPreference={false}
        />

        {/* 提示文字 */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
              {particleType === "explosion" && "点击任意位置"}
              {particleType === "float" && "漂浮效果"}
              {particleType === "sparkle" && "闪烁效果"}
              {particleType === "snow" && "雪花飘落"}
            </h3>
            {particleType !== "explosion" && (
              <p className="text-gray-300 text-lg drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
                {particleType === "float" && "模拟气泡或萤火虫"}
                {particleType === "sparkle" && "模拟星空闪烁"}
                {particleType === "snow" && "模拟冬日飘雪"}
              </p>
            )}
          </div>
        </div>

        {/* 性能警告 */}
        {fps < 30 && (
          <div className="absolute bottom-4 left-4 right-4 bg-red-900/80 text-white p-3 rounded-lg text-sm z-20">
            ⚠️ 检测到性能问题（FPS &lt; 30），建议减少粒子数量
          </div>
        )}
      </div>

      {/* 控制面板 */}
      <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">
            粒子效果控制
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

        {/* 粒子类型选择 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            粒子类型
          </label>
          <div className="flex flex-wrap gap-3">
            {(["explosion", "float", "sparkle", "snow"] as const).map(
              (type) => (
                <button
                  key={type}
                  onClick={() => setParticleType(type)}
                  className={`px-4 py-2 rounded-lg border-2 font-medium transition-all ${
                    particleType === type
                      ? "border-cyan-500 bg-cyan-500/20 text-cyan-600 dark:text-cyan-400"
                      : "border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-cyan-400"
                  }`}
                >
                  {type === "explosion" && "💥 爆炸"}
                  {type === "float" && "🎈 漂浮"}
                  {type === "sparkle" && "✨ 闪烁"}
                  {type === "snow" && "❄️ 雪花"}
                </button>
              )
            )}
          </div>
        </div>

        {/* 粒子数量 */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              粒子数量
            </label>
            <span className="text-sm font-bold text-cyan-600 dark:text-cyan-400">
              {count}
            </span>
          </div>
          <input
            type="range"
            min="1"
            max="50"
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
            className="w-full accent-cyan-500"
          />
        </div>

        {/* 速度范围 */}
        {particleType !== "sparkle" && (
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                速度范围
              </label>
              <span className="text-sm font-bold text-pink-600 dark:text-pink-400">
                {speed.min} - {speed.max}
              </span>
            </div>
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="text-xs text-gray-600 dark:text-gray-400">
                  最小
                </label>
                <input
                  type="range"
                  min="10"
                  max="200"
                  value={speed.min}
                  onChange={(e) =>
                    setSpeed({ ...speed, min: Number(e.target.value) })
                  }
                  className="w-full accent-pink-500"
                />
              </div>
              <div className="flex-1">
                <label className="text-xs text-gray-600 dark:text-gray-400">
                  最大
                </label>
                <input
                  type="range"
                  min="10"
                  max="200"
                  value={speed.max}
                  onChange={(e) =>
                    setSpeed({ ...speed, max: Number(e.target.value) })
                  }
                  className="w-full accent-pink-500"
                />
              </div>
            </div>
          </div>
        )}

        {/* 颜色预设 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            颜色预设
          </label>
          <div className="flex gap-2 flex-wrap">
            {(["default", "fire", "ice", "nature", "neon"] as const).map(
              (preset) => (
                <button
                  key={preset}
                  onClick={() => setColorPreset(preset)}
                  className={`px-3 py-1 rounded-lg border-2 text-sm font-medium transition-all ${
                    colorPreset === preset
                      ? "border-purple-500 bg-purple-500/20 text-purple-600 dark:text-purple-400"
                      : "border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-purple-400"
                  }`}
                >
                  {preset === "default" && "🎨 默认"}
                  {preset === "fire" && "🔥 火焰"}
                  {preset === "ice" && "🧊 冰霜"}
                  {preset === "nature" && "🌿 自然"}
                  {preset === "neon" && "💡 霓虹"}
                </button>
              )
            )}
          </div>
        </div>
      </div>

      {/* 代码示例 */}
      <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
        <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-3">
          💻 代码示例
        </h4>
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
          <code>{`import { ParticleEffect } from '@proton-ui/core';

<ParticleEffect
  type="${particleType}"
  ${particleType === "explosion" ? "onClickEmit" : "autoTrigger"}
  ${particleType !== "explosion" ? `triggerInterval={${particleType === "float" ? 1000 : particleType === "sparkle" ? 500 : 800}}` : ""}
  count={${count}}
  colors={${JSON.stringify(colorPresets[colorPreset])}}
  size={{ min: 2, max: ${particleType === "explosion" ? 5 : 3} }}
  speed={{ min: ${speed.min}, max: ${speed.max} }}
  life={{ min: ${particleType === "explosion" ? 500 : particleType === "float" ? 3000 : particleType === "sparkle" ? 800 : 4000}, max: ${particleType === "explosion" ? 1500 : particleType === "float" ? 5000 : particleType === "sparkle" ? 1200 : 6000} }}
  respectMotionPreference={false}  // 仅用于演示
/>`}</code>
        </pre>
      </div>

      {/* 性能提示 */}
      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
        <h4 className="text-sm font-bold text-blue-900 dark:text-blue-300 mb-2">
          💡 性能优化建议
        </h4>
        <ul className="text-sm text-blue-800 dark:text-blue-400 space-y-1">
          <li>• 限制同时运行的粒子数量（建议 &lt; 50）</li>
          <li>• 使用 RAF 批量更新减少重绘</li>
          <li>• 粒子生命周期结束后及时清理</li>
          <li>• 在生产环境中保持 respectMotionPreference={"{true}"}</li>
        </ul>
      </div>
    </div>
  );
}

// 添加 default export 以支持 Rspress globalComponents
export default ParticleEffectDemo;
