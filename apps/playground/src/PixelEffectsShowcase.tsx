import React, { useState } from "react";
import { ParticleEffect } from "@proton-ui/core";
import "./index.css";

/**
 * 特效系统展示页面
 * 展示霓虹光晕、玻璃拟态和装饰元素
 */
export const PixelEffectsShowcase: React.FC = () => {
  const [selectedEffect, setSelectedEffect] = useState<string>("neon");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 p-8">
      <div className="max-w-7xl mx-auto">
        {/* 标题 */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4 neon-glow-cyan">
            赛博朋克特效展示
          </h1>
          <p className="text-gray-300 text-lg">
            霓虹光晕 · 玻璃拟态 · 粒子系统
          </p>
        </div>

        {/* 效果选择器 */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          <button
            onClick={() => setSelectedEffect("neon")}
            className={`px-6 py-3 rounded border-2 transition-all ${
              selectedEffect === "neon"
                ? "neon-glow-cyan-box text-cyan-400"
                : "border-gray-600 text-gray-400 hover:border-cyan-400"
            }`}
          >
            霓虹光晕
          </button>
          <button
            onClick={() => setSelectedEffect("glass")}
            className={`px-6 py-3 rounded border-2 transition-all ${
              selectedEffect === "glass"
                ? "neon-glow-pink-box text-pink-400"
                : "border-gray-600 text-gray-400 hover:border-pink-400"
            }`}
          >
            玻璃拟态
          </button>

          <button
            onClick={() => setSelectedEffect("particles")}
            className={`px-6 py-3 rounded border-2 transition-all ${
              selectedEffect === "particles"
                ? "neon-glow-pink-box text-pink-400"
                : "border-gray-600 text-gray-400 hover:border-pink-400"
            }`}
          >
            粒子效果
          </button>
          <button
            onClick={() => setSelectedEffect("hybrid")}
            className={`px-6 py-3 rounded border-2 transition-all ${
              selectedEffect === "hybrid"
                ? "neon-glow-cyan-box text-cyan-400"
                : "border-gray-600 text-gray-400 hover:border-cyan-400"
            }`}
          >
            混合风格 (Hybrid)
          </button>
        </div>

        {/* 混合风格展示 */}
        {selectedEffect === "hybrid" && (
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-white mb-4 text-hybrid-glitch">
                Cyberpunk Hybrid Style
              </h2>
              <p className="text-cyan-300 max-w-2xl mx-auto">
                高保真 UI 与局部像素化的完美融合。
                <br />
                <span className="text-sm opacity-70">
                  Partial Pixelation · Neon Glitch · High-Fi Glass
                </span>
              </p>
            </div>

            {/* Showcase Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Card 1: Data Construct */}
              <div className="hybrid-glass border-deco-hybrid p-8 h-64 flex flex-col justify-between group cursor-pointer relative overflow-hidden">
                <div className="absolute top-0 right-0 p-2 opacity-50 font-pixel text-xs text-cyan-400">
                  SYS.VER.2.0
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    Data Construct
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Accessing neural network interface...
                  </p>
                </div>
                <div className="flex gap-2">
                  <span className="px-2 py-1 bg-cyan-900/30 border border-cyan-500/30 text-cyan-400 text-xs rounded font-pixel">
                    SECURE
                  </span>
                  <span className="px-2 py-1 bg-purple-900/30 border border-purple-500/30 text-purple-400 text-xs rounded font-pixel">
                    ENCRYPTED
                  </span>
                </div>
                {/* Glitch Overlay on Hover */}
                <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none mix-blend-overlay" />
              </div>

              {/* Card 2: System Status */}
              <div className="hybrid-glass border-deco-hybrid p-8 h-64 flex flex-col justify-between relative">
                <div className="absolute -left-1 top-10 w-1 h-12 bg-pink-500/50" />
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4 text-hybrid-glitch">
                    System Status
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">CPU Load</span>
                      <div className="w-32 h-2 bg-gray-700 overflow-hidden">
                        <div className="h-full bg-pink-500 w-[75%] neon-glow-pink"></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Memory</span>
                      <div className="w-32 h-2 bg-gray-700 overflow-hidden">
                        <div className="h-full bg-cyan-500 w-[45%] neon-glow-cyan"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="btn-hybrid mt-4 py-2 px-6 bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-cyan-400 hover:text-cyan-400 transition-all uppercase tracking-widest text-sm">
                  Initialize
                </button>
              </div>
            </div>

            {/* Typography & Elements */}
            <div className="glass-morphism p-8 rounded-lg mt-8">
              <h3 className="text-xl font-bold text-white mb-6">
                Hybrid Elements
              </h3>
              <div className="flex flex-wrap gap-8 items-center">
                <div className="text-center">
                  <p className="text-gray-500 text-sm mb-2">Glitch Text</p>
                  <p className="text-2xl font-bold text-white text-hybrid-glitch cursor-default">
                    PROTOCOL_V3
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-gray-500 text-sm mb-2">Neon Badge</p>
                  <span className="inline-block px-4 py-1 border border-pink-500/50 bg-pink-500/10 text-pink-400 neon-glow-pink-box rounded-sm font-pixel text-xs">
                    WARNING
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* 霓虹光晕效果 */}
        {selectedEffect === "neon" && (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-white mb-6">霓虹光晕效果</h2>

            {/* 颜色预设 */}
            <div className="glass-morphism p-8 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4">
                5 种颜色预设
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="neon-glow-cyan-box p-6 rounded-lg text-center">
                  <p className="neon-glow-cyan text-2xl font-bold mb-2">
                    霓虹青
                  </p>
                  <p className="text-gray-300 text-sm">Neon Cyan</p>
                </div>
                <div className="neon-glow-pink-box p-6 rounded-lg text-center">
                  <p className="neon-glow-pink text-2xl font-bold mb-2">
                    樱花粉
                  </p>
                  <p className="text-gray-300 text-sm">Sakura Pink</p>
                </div>
                <div className="neon-glow-purple-box p-6 rounded-lg text-center">
                  <p className="neon-glow-purple text-2xl font-bold mb-2">
                    蒸汽紫
                  </p>
                  <p className="text-gray-300 text-sm">Vapor Purple</p>
                </div>
                <div className="neon-glow-gold-box p-6 rounded-lg text-center">
                  <p className="neon-glow-gold text-2xl font-bold mb-2">
                    神圣金
                  </p>
                  <p className="text-gray-300 text-sm">Sacred Gold</p>
                </div>
                <div className="neon-glow-green-box p-6 rounded-lg text-center">
                  <p className="neon-glow-green text-2xl font-bold mb-2">
                    抹茶绿
                  </p>
                  <p className="text-gray-300 text-sm">Matcha Green</p>
                </div>
              </div>
            </div>

            {/* 光晕强度 */}
            <div className="glass-morphism p-8 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4">
                光晕强度可调
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="neon-glow-subtle-box p-6 rounded-lg text-center border-2 border-cyan-400">
                  <p className="text-cyan-400 text-xl font-bold neon-glow-subtle">
                    轻微
                  </p>
                  <p className="text-gray-300 text-sm mt-2">Subtle</p>
                </div>
                <div className="neon-glow-medium-box p-6 rounded-lg text-center border-2 border-cyan-400">
                  <p className="text-cyan-400 text-xl font-bold neon-glow-medium">
                    中等
                  </p>
                  <p className="text-gray-300 text-sm mt-2">Medium</p>
                </div>
                <div className="neon-glow-strong-box p-6 rounded-lg text-center border-2 border-cyan-400">
                  <p className="text-cyan-400 text-xl font-bold neon-glow-strong">
                    强烈
                  </p>
                  <p className="text-gray-300 text-sm mt-2">Strong</p>
                </div>
              </div>
            </div>

            {/* 动画效果 */}
            <div className="glass-morphism p-8 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4">动画效果</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="neon-glow-cyan-box neon-pulse p-6 rounded-lg text-center">
                  <p className="neon-glow-cyan text-xl font-bold">脉冲</p>
                  <p className="text-gray-300 text-sm mt-2">Pulse</p>
                </div>
                <div className="neon-glow-pink-box neon-flicker p-6 rounded-lg text-center">
                  <p className="neon-glow-pink text-xl font-bold">闪烁</p>
                  <p className="text-gray-300 text-sm mt-2">Flicker</p>
                </div>
                <div className="neon-glow-purple-box neon-breathe p-6 rounded-lg text-center">
                  <p className="neon-glow-purple text-xl font-bold">呼吸</p>
                  <p className="text-gray-300 text-sm mt-2">Breathe</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 玻璃拟态效果 */}
        {selectedEffect === "glass" && (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-white mb-6">玻璃拟态效果</h2>

            {/* 基础效果 */}
            <div className="glass-morphism p-8 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4">基础效果</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="glass-morphism-subtle p-6 rounded-lg">
                  <p className="text-white text-lg font-bold mb-2">轻微</p>
                  <p className="text-gray-300 text-sm">
                    更透明的毛玻璃效果，适合背景元素
                  </p>
                </div>
                <div className="glass-morphism p-6 rounded-lg">
                  <p className="text-white text-lg font-bold mb-2">标准</p>
                  <p className="text-gray-300 text-sm">
                    平衡的毛玻璃效果，适合卡片和面板
                  </p>
                </div>
                <div className="glass-morphism-strong p-6 rounded-lg">
                  <p className="text-white text-lg font-bold mb-2">强烈</p>
                  <p className="text-gray-300 text-sm">
                    明显的模糊和高光，适合重要内容
                  </p>
                </div>
              </div>
            </div>

            {/* 彩色变体 */}
            <div className="glass-morphism p-8 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4">彩色变体</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="glass-morphism-cyan p-6 rounded-lg">
                  <p className="text-cyan-400 text-lg font-bold mb-2">
                    青色玻璃
                  </p>
                  <p className="text-gray-300 text-sm">带有青色调的玻璃效果</p>
                </div>
                <div className="glass-morphism-pink p-6 rounded-lg">
                  <p className="text-pink-400 text-lg font-bold mb-2">
                    粉色玻璃
                  </p>
                  <p className="text-gray-300 text-sm">带有粉色调的玻璃效果</p>
                </div>
                <div className="glass-morphism-purple p-6 rounded-lg">
                  <p className="text-purple-400 text-lg font-bold mb-2">
                    紫色玻璃
                  </p>
                  <p className="text-gray-300 text-sm">带有紫色调的玻璃效果</p>
                </div>
              </div>
            </div>

            {/* 边缘高光 */}
            <div className="glass-morphism p-8 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4">边缘高光</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="glass-morphism glass-highlight-45 p-6 rounded-lg">
                  <p className="text-white text-lg font-bold mb-2">45° 高光</p>
                  <p className="text-gray-300 text-sm">
                    从左上角到右下角的渐变高光
                  </p>
                </div>
                <div className="glass-morphism glass-highlight-top p-6 rounded-lg">
                  <p className="text-white text-lg font-bold mb-2">顶部高光</p>
                  <p className="text-gray-300 text-sm">
                    顶部边缘的渐变高光效果
                  </p>
                </div>
              </div>
            </div>

            {/* 模糊强度 */}
            <div className="glass-morphism p-8 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4">
                模糊强度可调
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="glass-blur-sm glass-opacity-20 p-4 rounded-lg border border-white/20">
                  <p className="text-white text-sm font-bold">Small</p>
                </div>
                <div className="glass-blur-md glass-opacity-20 p-4 rounded-lg border border-white/20">
                  <p className="text-white text-sm font-bold">Medium</p>
                </div>
                <div className="glass-blur-lg glass-opacity-20 p-4 rounded-lg border border-white/20">
                  <p className="text-white text-sm font-bold">Large</p>
                </div>
                <div className="glass-blur-xl glass-opacity-20 p-4 rounded-lg border border-white/20">
                  <p className="text-white text-sm font-bold">X-Large</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 粒子效果系统 */}
        {selectedEffect === "particles" && (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-white mb-6">粒子效果系统</h2>

            {/* 爆炸效果 */}
            <div className="glass-morphism p-8 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4">
                爆炸效果 (Explosion)
              </h3>
              <p className="text-gray-300 mb-4">点击下方区域触发粒子爆炸效果</p>
              <div className="relative h-64 bg-gray-800/50 rounded-lg border border-gray-600 overflow-hidden">
                <ParticleEffect
                  type="explosion"
                  onClickEmit
                  count={30}
                  colors={["#4ECDC4", "#FF6B9D", "#FFB86C", "#7FD99F"]}
                  size={{ min: 2, max: 4 }}
                  speed={{ min: 100, max: 200 }}
                  life={{ min: 500, max: 1500 }}
                  respectMotionPreference={false}
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <p className="text-white text-lg">点击任意位置</p>
                </div>
              </div>
            </div>

            {/* 漂浮效果 */}
            <div className="glass-morphism p-8 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4">
                漂浮效果 (Float)
              </h3>
              <p className="text-gray-300 mb-4">
                粒子从底部向上漂浮，模拟气泡或萤火虫效果
              </p>
              <div className="relative h-64 bg-gray-800/50 rounded-lg border border-gray-600 overflow-hidden">
                <ParticleEffect
                  type="float"
                  autoTrigger
                  triggerInterval={1000}
                  count={5}
                  colors={["#4ECDC4", "#7FD99F", "#FFB86C"]}
                  size={{ min: 2, max: 3 }}
                  speed={{ min: 30, max: 60 }}
                  life={{ min: 3000, max: 5000 }}
                  respectMotionPreference={false}
                />
              </div>
            </div>

            {/* 闪烁效果 */}
            <div className="glass-morphism p-8 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4">
                闪烁效果 (Sparkle)
              </h3>
              <p className="text-gray-300 mb-4">星星闪烁效果，适合装饰和强调</p>
              <div className="relative h-64 bg-gray-800/50 rounded-lg border border-gray-600 overflow-hidden">
                <ParticleEffect
                  type="sparkle"
                  autoTrigger
                  triggerInterval={500}
                  count={10}
                  colors={["#FFB86C", "#D4AF37", "#FFFFFF"]}
                  size={{ min: 2, max: 4 }}
                  life={{ min: 800, max: 1200 }}
                  respectMotionPreference={false}
                />
              </div>
            </div>

            {/* 雪花飘落效果 */}
            <div className="glass-morphism p-8 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4">
                雪花飘落效果 (Snow)
              </h3>
              <p className="text-gray-300 mb-4">雪花从顶部飘落，带有轻微摆动</p>
              <div className="relative h-64 bg-gray-800/50 rounded-lg border border-gray-600 overflow-hidden">
                <ParticleEffect
                  type="snow"
                  autoTrigger
                  triggerInterval={800}
                  count={8}
                  colors={["#FFFFFF", "#E8E4DB", "#A8A4A0"]}
                  size={{ min: 2, max: 3 }}
                  speed={{ min: 40, max: 80 }}
                  life={{ min: 4000, max: 6000 }}
                  respectMotionPreference={false}
                />
              </div>
            </div>

            {/* 组合效果 */}
            <div className="glass-morphism p-8 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4">
                组合效果演示
              </h3>
              <p className="text-gray-300 mb-4">点击触发爆炸 + 背景漂浮粒子</p>
              <div className="relative h-80 bg-gradient-to-br from-gray-900 to-purple-900 rounded-lg border border-gray-600 overflow-hidden">
                {/* 背景漂浮粒子 */}
                <ParticleEffect
                  type="float"
                  autoTrigger
                  triggerInterval={1500}
                  count={3}
                  colors={["#4ECDC4", "#7FD99F"]}
                  size={{ min: 2, max: 3 }}
                  speed={{ min: 20, max: 40 }}
                  life={{ min: 5000, max: 8000 }}
                  style={{ zIndex: 1 }}
                  respectMotionPreference={false}
                />
                {/* 点击爆炸效果 */}
                <ParticleEffect
                  type="explosion"
                  onClickEmit
                  count={40}
                  colors={["#FF6B9D", "#FFB86C", "#FFFFFF"]}
                  size={{ min: 2, max: 5 }}
                  speed={{ min: 80, max: 180 }}
                  life={{ min: 600, max: 1200 }}
                  style={{ zIndex: 2 }}
                  respectMotionPreference={false}
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                  <p className="text-white text-lg">点击触发爆炸效果</p>
                </div>
              </div>
            </div>

            {/* 性能说明 */}
            <div className="glass-morphism p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4">性能优化</h3>
              <ul className="text-gray-300 space-y-2">
                <li>✓ 使用对象池优化内存分配</li>
                <li>✓ RAF (requestAnimationFrame) 驱动的渲染循环</li>
                <li>✓ 自动清理死亡粒子</li>
                <li>✓ 支持 prefers-reduced-motion 设置</li>
                <li>✓ Canvas 渲染，GPU 加速</li>
              </ul>
            </div>
          </div>
        )}

        {/* 底部说明 */}
        <div className="glass-morphism p-6 rounded-lg mt-12 text-center">
          <p className="text-gray-300">
            所有特效都支持{" "}
            <code className="text-cyan-400">prefers-reduced-motion</code> 设置
          </p>
          <p className="text-gray-400 text-sm mt-2">
            在系统设置中启用"减少动效"后，动画将自动禁用
          </p>
        </div>
      </div>
    </div>
  );
};

export default PixelEffectsShowcase;
