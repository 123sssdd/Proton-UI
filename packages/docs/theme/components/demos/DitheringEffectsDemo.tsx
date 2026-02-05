import React from "react";

/**
 * Dithering 效果演示
 */
export function DitheringEffectsDemo() {
  return (
    <div className="space-y-8">
      {/* 4x4 像素矩阵 */}
      <div className="glass-morphism p-6 rounded-lg">
        <h3 className="text-sm font-bold text-white mb-4">4x4 像素矩阵渐变</h3>
        <div className="grid grid-cols-4 md:grid-cols-8 gap-2">
          {[12, 25, 37, 50, 62, 75, 87, 100].map((val) => (
            <div
              key={val}
              className="aspect-square rounded-md bg-gray-800/50 border border-gray-600 relative overflow-hidden group"
            >
              <div
                className={`dithering-4x4-${val} absolute inset-0 text-cyan-400/80`}
              ></div>
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <span className="text-[10px] font-mono text-white/90 drop-shadow-md">
                  {val}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dithering 动画 */}
      <div className="glass-morphism p-6 rounded-lg">
        <h3 className="text-sm font-bold text-white mb-4">Dithering 动画</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-lg bg-gray-900 border border-gray-700 relative h-32 overflow-hidden">
            <div className="dithering-4x4-50 dithering-animated absolute inset-0 text-cyan-500/50"></div>
            <div className="relative z-10 flex flex-col h-full justify-center items-center">
              <p className="text-cyan-100 font-bold mb-1">渐变动画</p>
              <p className="text-xs text-cyan-300/70">像素点平滑移动</p>
            </div>
          </div>
          <div className="p-6 rounded-lg bg-gray-900 border border-gray-700 relative h-32 overflow-hidden">
            <div className="dithering-4x4-50 dithering-sparkle absolute inset-0 text-pink-500/50"></div>
            <div className="relative z-10 flex flex-col h-full justify-center items-center">
              <p className="text-pink-100 font-bold mb-1">闪烁效果</p>
              <p className="text-xs text-pink-300/70">随机像素点闪烁</p>
            </div>
          </div>
          <div className="p-6 rounded-lg bg-gray-900 border border-gray-700 relative h-32 overflow-hidden">
            <div className="dithering-4x4-50 dithering-wave absolute inset-0 text-purple-500/50"></div>
            <div className="relative z-10 flex flex-col h-full justify-center items-center">
              <p className="text-purple-100 font-bold mb-1">波浪扩散</p>
              <p className="text-xs text-purple-300/70">中心向外扩散</p>
            </div>
          </div>
        </div>
      </div>

      {/* 组合应用 */}
      <div className="glass-morphism p-6 rounded-lg">
        <h3 className="text-sm font-bold text-white mb-4">组合应用</h3>
        <div className="relative h-40 rounded-lg overflow-hidden border border-gray-700">
          {/* Background Gradient Dither */}
          <div className="absolute inset-0 bg-gray-900">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-purple-900 opacity-50"></div>
            <div className="dithering-4x4-25 dithering-animated absolute inset-0 text-white/10"></div>
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="glass-morphism p-8 rounded-lg border border-white/10 relative overflow-hidden group">
              <div className="dithering-4x4-50 absolute inset-0 text-white/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              <h1 className="text-3xl font-bold text-white relative z-10 drop-shadow-lg">
                Retro Future
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DitheringEffectsDemo;
