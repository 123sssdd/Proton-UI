import React from "react";

/**
 * 霓虹光晕效果演示
 */
export function NeonEffectsDemo() {
  return (
    <div className="space-y-8">
      {/* 颜色预设 */}
      <div className="glass-morphism p-6 rounded-lg">
        <h3 className="text-sm font-bold text-white mb-4">5 种颜色预设</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <div className="neon-glow-cyan-box p-4 rounded-lg text-center aspect-square flex flex-col justify-center items-center">
            <p className="neon-glow-cyan text-xl font-bold mb-1">青</p>
            <p className="text-gray-400 text-xs">Cyan</p>
          </div>
          <div className="neon-glow-pink-box p-4 rounded-lg text-center aspect-square flex flex-col justify-center items-center">
            <p className="neon-glow-pink text-xl font-bold mb-1">粉</p>
            <p className="text-gray-400 text-xs">Pink</p>
          </div>
          <div className="neon-glow-purple-box p-4 rounded-lg text-center aspect-square flex flex-col justify-center items-center">
            <p className="neon-glow-purple text-xl font-bold mb-1">紫</p>
            <p className="text-gray-400 text-xs">Purple</p>
          </div>
          <div className="neon-glow-gold-box p-4 rounded-lg text-center aspect-square flex flex-col justify-center items-center">
            <p className="neon-glow-gold text-xl font-bold mb-1">金</p>
            <p className="text-gray-400 text-xs">Gold</p>
          </div>
          <div className="neon-glow-green-box p-4 rounded-lg text-center aspect-square flex flex-col justify-center items-center">
            <p className="neon-glow-green text-xl font-bold mb-1">绿</p>
            <p className="text-gray-400 text-xs">Green</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* 光晕强度 */}
        <div className="glass-morphism p-6 rounded-lg">
          <h3 className="text-sm font-bold text-white mb-4">光晕强度</h3>
          <div className="grid grid-cols-3 gap-3">
            <div className="neon-glow-subtle-box p-3 rounded-lg text-center border border-cyan-500/30">
              <p className="text-cyan-400 text-sm font-bold neon-glow-subtle">
                轻微
              </p>
              <p className="text-gray-500 text-[10px] mt-1">Subtle</p>
            </div>
            <div className="neon-glow-medium-box p-3 rounded-lg text-center border-2 border-cyan-500/50">
              <p className="text-cyan-400 text-sm font-bold neon-glow-medium">
                中等
              </p>
              <p className="text-gray-500 text-[10px] mt-1">Medium</p>
            </div>
            <div className="neon-glow-strong-box p-3 rounded-lg text-center border-2 border-cyan-400">
              <p className="text-cyan-400 text-sm font-bold neon-glow-strong">
                强烈
              </p>
              <p className="text-gray-500 text-[10px] mt-1">Strong</p>
            </div>
          </div>
        </div>

        {/* 动画效果 */}
        <div className="glass-morphism p-6 rounded-lg">
          <h3 className="text-sm font-bold text-white mb-4">动画效果</h3>
          <div className="grid grid-cols-3 gap-3">
            <div className="neon-glow-cyan-box neon-pulse p-3 rounded-lg text-center aspect-square flex flex-col justify-center">
              <p className="neon-glow-cyan text-sm font-bold">脉冲</p>
              <p className="text-gray-400 text-[10px] mt-1">Pulse</p>
            </div>
            <div className="neon-glow-pink-box neon-flicker p-3 rounded-lg text-center aspect-square flex flex-col justify-center">
              <p className="neon-glow-pink text-sm font-bold">闪烁</p>
              <p className="text-gray-400 text-[10px] mt-1">Flicker</p>
            </div>
            <div className="neon-glow-purple-box neon-breathe p-3 rounded-lg text-center aspect-square flex flex-col justify-center">
              <p className="neon-glow-purple text-sm font-bold">呼吸</p>
              <p className="text-gray-400 text-[10px] mt-1">Breathe</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NeonEffectsDemo;
