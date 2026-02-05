import React from "react";

/**
 * 玻璃拟态效果演示
 */
export function GlassEffectsDemo() {
  return (
    <div
      className="space-y-8"
      style={{
        background: "linear-gradient(135deg, #1e3a8a 0%, #1e293b 100%)",
        padding: "2rem",
        borderRadius: "1rem",
      }}
    >
      {/* 基础效果 */}
      <div>
        <h3 className="text-sm font-bold text-white mb-4">基础效果</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-morphism-subtle p-6 rounded-lg text-center">
            <p className="text-white text-lg font-bold mb-2">轻微</p>
            <p className="text-gray-300 text-xs">Subtle</p>
          </div>
          <div className="glass-morphism p-6 rounded-lg text-center border border-white/20">
            <p className="text-white text-lg font-bold mb-2">标准</p>
            <p className="text-gray-300 text-xs">Standard</p>
          </div>
          <div className="glass-morphism-strong p-6 rounded-lg text-center border-2 border-white/20">
            <p className="text-white text-lg font-bold mb-2">强烈</p>
            <p className="text-gray-300 text-xs">Strong</p>
          </div>
        </div>
      </div>

      {/* 彩色变体 */}
      <div>
        <h3 className="text-sm font-bold text-white mb-4">彩色变体</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-morphism-cyan p-6 rounded-lg text-center">
            <p className="text-cyan-200 text-lg font-bold mb-1">青色玻璃</p>
            <p className="text-cyan-400/70 text-xs">Cyan Tint</p>
          </div>
          <div className="glass-morphism-pink p-6 rounded-lg text-center">
            <p className="text-pink-200 text-lg font-bold mb-1">粉色玻璃</p>
            <p className="text-pink-400/70 text-xs">Pink Tint</p>
          </div>
          <div className="glass-morphism-purple p-6 rounded-lg text-center">
            <p className="text-purple-200 text-lg font-bold mb-1">紫色玻璃</p>
            <p className="text-purple-400/70 text-xs">Purple Tint</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* 边缘高光 */}
        <div>
          <h3 className="text-sm font-bold text-white mb-4">边缘高光</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="glass-morphism glass-highlight-45 p-4 rounded-lg text-center">
              <p className="text-white text-sm font-bold">45° 高光</p>
            </div>
            <div className="glass-morphism glass-highlight-top p-4 rounded-lg text-center">
              <p className="text-white text-sm font-bold">顶部高光</p>
            </div>
          </div>
        </div>

        {/* 模糊强度 */}
        <div>
          <h3 className="text-sm font-bold text-white mb-4">模糊强度</h3>
          <div className="grid grid-cols-4 gap-2">
            <div className="glass-blur-sm glass-opacity-20 p-2 rounded-lg border border-white/20 flex items-center justify-center aspect-square">
              <p className="text-white text-xs font-bold">Sm</p>
            </div>
            <div className="glass-blur-md glass-opacity-20 p-2 rounded-lg border border-white/20 flex items-center justify-center aspect-square">
              <p className="text-white text-xs font-bold">Md</p>
            </div>
            <div className="glass-blur-lg glass-opacity-20 p-2 rounded-lg border border-white/20 flex items-center justify-center aspect-square">
              <p className="text-white text-xs font-bold">Lg</p>
            </div>
            <div className="glass-blur-xl glass-opacity-20 p-2 rounded-lg border border-white/20 flex items-center justify-center aspect-square">
              <p className="text-white text-xs font-bold">XL</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GlassEffectsDemo;
