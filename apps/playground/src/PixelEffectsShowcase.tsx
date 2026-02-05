import React, { useState } from "react";
import { ParticleEffect, Glass, PixelBorder } from "@proton-ui/components";
import "./index.css";

/**
 * 特效系统展示页面
 * 展示霓虹光晕、玻璃拟态和装饰元素
 */
export const PixelEffectsShowcase: React.FC = () => {
  const [selectedEffect, setSelectedEffect] = useState<string>("neon");

  return (
    <div className="min-h-screen bg-gray-950 p-8">
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
            onClick={() => setSelectedEffect("borders")}
            className={`px-6 py-3 rounded border-2 transition-all ${
              selectedEffect === "borders"
                ? "neon-glow-gold-box text-yellow-400"
                : "border-gray-600 text-gray-400 hover:border-yellow-400"
            }`}
          >
            装饰边框
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
              <PixelBorder
                variant="hybrid"
                className="glass-morphism h-64 flex flex-col justify-between group cursor-pointer relative overflow-hidden"
              >
                <div className="p-8 h-full flex flex-col justify-between">
                  <div className="absolute top-0 right-0 p-4 opacity-50 font-pixel text-xs text-cyan-400">
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
              </PixelBorder>

              {/* Card 2: System Status */}
              <PixelBorder
                variant="hybrid"
                className="glass-morphism h-64 flex flex-col justify-between relative"
              >
                <div className="p-8 h-full flex flex-col justify-between">
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
              </PixelBorder>
            </div>

            {/* Typography & Elements */}
            <Glass className="p-8 rounded-lg mt-8">
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
            </Glass>
          </div>
        )}
        {/* 霓虹光晕效果 */}
        {selectedEffect === "neon" && (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-white mb-6">霓虹光晕效果</h2>

            {/* 颜色预设 */}
            <Glass className="p-8 rounded-lg">
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
            </Glass>

            {/* 光晕强度 */}
            <Glass className="p-8 rounded-lg">
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
            </Glass>

            {/* 动画效果 */}
            <Glass className="p-8 rounded-lg">
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
            </Glass>
          </div>
        )}

        {/* 玻璃拟态效果 */}
        {selectedEffect === "glass" && (
          <div className="space-y-8 bg-white/10 p-8 rounded-xl border border-white/20 backdrop-blur-sm">
            <h2 className="text-3xl font-bold text-white mb-6">玻璃拟态效果</h2>
            <div className="p-8 bg-gradient-to-tr from-gray-200 to-white rounded-xl mb-8">
              <p className="text-gray-900 mb-6 font-bold">
                浅色背景下的表现 (Light Theme Context):
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Glass
                  variant="base"
                  className="p-8 rounded-xl border border-white/50 shadow-xl"
                >
                  <h4 className="text-gray-900 font-bold text-xl mb-2">
                    High Intensity Glass
                  </h4>
                  <p className="text-gray-700">
                    在浅色背景下，玻璃拟态的高光和模糊感更加显著，营造出极强的层次感。
                  </p>
                </Glass>
                <Glass
                  variant="cyan"
                  className="p-8 rounded-xl border border-cyan-200/50 shadow-lg"
                >
                  <h4 className="text-cyan-900 font-bold text-xl mb-2">
                    Color Tinted Glass
                  </h4>
                  <p className="text-gray-700">
                    彩色玻璃在浅色背景下会呈现出柔和的滤镜感。
                  </p>
                </Glass>
              </div>
            </div>

            {/* 基础效果 */}
            <Glass className="p-8 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4">
                基础效果 (Dark Mode)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Glass variant="subtle" className="p-6 rounded-lg">
                  <p className="text-white text-lg font-bold mb-2">轻微</p>
                  <p className="text-gray-300 text-sm">
                    更透明的毛玻璃效果，适合背景元素
                  </p>
                </Glass>
                <Glass variant="base" className="p-6 rounded-lg">
                  <p className="text-white text-lg font-bold mb-2">标准</p>
                  <p className="text-gray-300 text-sm">
                    平衡的毛玻璃效果，适合卡片和面板
                  </p>
                </Glass>
                <Glass variant="strong" className="p-6 rounded-lg">
                  <p className="text-white text-lg font-bold mb-2">强烈</p>
                  <p className="text-gray-300 text-sm">
                    明显的模糊和高光，适合重要内容
                  </p>
                </Glass>
              </div>
            </Glass>

            {/* 彩色变体 */}
            <Glass className="p-8 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4">彩色变体</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Glass variant="cyan" className="p-6 rounded-lg">
                  <p className="text-cyan-400 text-lg font-bold mb-2">
                    青色玻璃
                  </p>
                  <p className="text-gray-300 text-sm">带有青色调的玻璃效果</p>
                </Glass>
                <Glass variant="pink" className="p-6 rounded-lg">
                  <p className="text-pink-400 text-lg font-bold mb-2">
                    粉色玻璃
                  </p>
                  <p className="text-gray-300 text-sm">带有粉色调的玻璃效果</p>
                </Glass>
                <Glass variant="purple" className="p-6 rounded-lg">
                  <p className="text-purple-400 text-lg font-bold mb-2">
                    紫色玻璃
                  </p>
                  <p className="text-gray-300 text-sm">带有紫色调的玻璃效果</p>
                </Glass>
              </div>
            </Glass>

            {/* 边缘高光 */}
            <Glass className="p-8 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4">边缘高光</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Glass highlight="45" className="p-6 rounded-lg">
                  <p className="text-white text-lg font-bold mb-2">45° 高光</p>
                  <p className="text-gray-300 text-sm">
                    从左上角到右下角的渐变高光
                  </p>
                </Glass>
                <Glass highlight="top" className="p-6 rounded-lg">
                  <p className="text-white text-lg font-bold mb-2">顶部高光</p>
                  <p className="text-gray-300 text-sm">
                    顶部边缘的渐变高光效果
                  </p>
                </Glass>
              </div>
            </Glass>

            {/* 模糊强度 */}
            <Glass className="p-8 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4">
                模糊强度可调
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Glass
                  blur="sm"
                  className="p-4 rounded-lg border border-white/20"
                >
                  <p className="text-white text-sm font-bold">Small</p>
                </Glass>
                <Glass
                  blur="md"
                  className="p-4 rounded-lg border border-white/20"
                >
                  <p className="text-white text-sm font-bold">Medium</p>
                </Glass>
                <Glass
                  blur="lg"
                  className="p-4 rounded-lg border border-white/20"
                >
                  <p className="text-white text-sm font-bold">Large</p>
                </Glass>
                <Glass
                  blur="xl"
                  className="p-4 rounded-lg border border-white/20"
                >
                  <p className="text-white text-sm font-bold">X-Large</p>
                </Glass>
              </div>
            </Glass>
          </div>
        )}

        {/* 装饰边框效果 */}
        {selectedEffect === "borders" && (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-white mb-6">
              装饰边框 (Pixel Borders)
            </h2>

            <div className="space-y-12">
              {/* 深色模式预览 */}
              <div className="space-y-6">
                <h3 className="text-white font-pixel text-lg border-l-4 border-cyan-400 pl-4 mb-4">
                  DARK CONTEXT (DEFAULT)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <PixelBorder
                    variant="retro"
                    className="p-8 bg-gray-900/50 text-cyan-400"
                  >
                    <h3 className="text-xl font-bold text-white mb-2 font-pixel">
                      Retro Style
                    </h3>
                    <p className="text-gray-400 text-sm">
                      经典复古像素风格，带有多层阴影感。
                    </p>
                  </PixelBorder>

                  <PixelBorder
                    variant="tech"
                    className="p-8 bg-gray-900/50 text-pink-500"
                  >
                    <h3 className="text-xl font-bold text-white mb-2 font-pixel">
                      Tech Style
                    </h3>
                    <p className="text-gray-400 text-sm">
                      硬核技术感，线条分明，适合科幻界面。
                    </p>
                  </PixelBorder>

                  <PixelBorder
                    variant="japanese"
                    className="p-8 bg-gray-900/50 text-red-500"
                  >
                    <h3 className="text-xl font-bold text-white mb-2 font-pixel">
                      Japanese Style
                    </h3>
                    <p className="text-gray-400 text-sm">
                      灵感来自经典日式 RPG 的UI装饰风格。
                    </p>
                  </PixelBorder>

                  <PixelBorder
                    variant="geometric"
                    className="p-8 bg-gray-900/50 text-green-400"
                  >
                    <h3 className="text-xl font-bold text-white mb-2 font-pixel">
                      Geometric Style
                    </h3>
                    <p className="text-gray-400 text-sm">
                      强调几何分割的边框，具有强烈的结构感。
                    </p>
                  </PixelBorder>

                  <PixelBorder
                    variant="minimal"
                    className="p-8 bg-gray-900/50 text-blue-400"
                  >
                    <h3 className="text-xl font-bold text-white mb-2 font-pixel">
                      Minimal Style
                    </h3>
                    <p className="text-gray-400 text-sm">
                      极简像素风，低调但不失细节。
                    </p>
                  </PixelBorder>

                  <PixelBorder
                    variant="hybrid"
                    className="p-8 bg-gray-900/50 text-cyan-400"
                  >
                    <h3 className="text-xl font-bold text-white mb-2 font-pixel">
                      Hybrid Style
                    </h3>
                    <p className="text-gray-400 text-sm">
                      混合了霓虹效果与像素装饰的现代赛博风格。
                    </p>
                  </PixelBorder>
                </div>
              </div>

              {/* 浅色模式预览 */}
              <div className="p-12 bg-gray-100 rounded-2xl space-y-8">
                <h3 className="text-gray-900 font-pixel text-lg border-l-4 border-blue-600 pl-4 mb-4">
                  LIGHT THEME CONTEXT
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <PixelBorder
                    variant="retro"
                    className="p-8 bg-white text-blue-600 border-2 border-blue-600 shadow-xl"
                  >
                    <h4 className="font-pixel text-xs mb-2">RETRO (LIGHT)</h4>
                    <p className="text-gray-600 text-xs text-blue-600">
                      经典风格的浅色背景表现。
                    </p>
                  </PixelBorder>
                  <PixelBorder
                    variant="tech"
                    className="p-8 bg-white text-purple-600 border-2 border-purple-600 shadow-xl"
                  >
                    <h4 className="font-pixel text-xs mb-2">TECH (LIGHT)</h4>
                    <p className="text-gray-600 text-xs text-purple-600">
                      科技感在浅色下的呈现。
                    </p>
                  </PixelBorder>
                  <PixelBorder
                    variant="japanese"
                    className="p-8 bg-white text-red-600 border-2 border-red-600 shadow-xl"
                  >
                    <h4 className="font-pixel text-xs mb-2">
                      JAPANESE (LIGHT)
                    </h4>
                    <p className="text-gray-600 text-xs text-red-600">
                      和风纹样浅色版。
                    </p>
                  </PixelBorder>
                </div>
              </div>

              {/* 角落装饰单独展示 */}
              <Glass className="p-8 rounded-lg mt-12 bg-gray-900/30">
                <h3 className="text-xl font-bold text-white mb-6 font-pixel">
                  角落装饰 (Corner Decorations)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <PixelBorder
                    corner="rivet"
                    variant="retro"
                    className="p-8 bg-gray-800/80 text-cyan-400"
                  >
                    <h4 className="text-white font-pixel text-xs mb-2">
                      RIVET CORNER
                    </h4>
                    <p className="text-gray-400 text-xs text-cyan-400/80">
                      带铆钉装饰的角落感。
                    </p>
                  </PixelBorder>
                  <PixelBorder
                    corner="gem"
                    variant="tech"
                    className="p-8 bg-gray-800/80 text-pink-500"
                  >
                    <h4 className="text-white font-pixel text-xs mb-2">
                      GEM CORNER
                    </h4>
                    <p className="text-gray-400 text-xs text-pink-500/80">
                      晶体/宝石感角落。
                    </p>
                  </PixelBorder>
                  <PixelBorder
                    corner="glow"
                    variant="hybrid"
                    className="p-8 bg-gray-800/80 text-cyan-400"
                  >
                    <h4 className="text-white font-pixel text-xs mb-2">
                      GLOW CORNER
                    </h4>
                    <p className="text-gray-400 text-xs text-cyan-400/80">
                      发光角落，增强氛围。
                    </p>
                  </PixelBorder>
                </div>
              </Glass>
            </div>
          </div>
        )}

        {/* 粒子效果系统 */}
        {selectedEffect === "particles" && (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-white mb-6">粒子效果系统</h2>

            {/* 爆炸效果 */}
            <Glass className="p-8 rounded-lg">
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
            </Glass>

            {/* 漂浮效果 */}
            <Glass className="p-8 rounded-lg">
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
            </Glass>

            {/* 闪烁效果 */}
            <Glass className="p-8 rounded-lg">
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
            </Glass>

            {/* 雪花飘落效果 */}
            <Glass className="p-8 rounded-lg">
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
            </Glass>

            {/* 组合效果 */}
            <Glass className="p-8 rounded-lg">
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
            </Glass>

            {/* 性能说明 */}
            <Glass className="p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4">性能优化</h3>
              <ul className="text-gray-300 space-y-2">
                <li>✓ 使用对象池优化内存分配</li>
                <li>✓ RAF (requestAnimationFrame) 驱动的渲染循环</li>
                <li>✓ 自动清理死亡粒子</li>
                <li>✓ 支持 prefers-reduced-motion 设置</li>
                <li>✓ Canvas 渲染，GPU 加速</li>
              </ul>
            </Glass>
          </div>
        )}

        {/* 底部说明 */}
        <Glass className="p-6 rounded-lg mt-12 text-center">
          <p className="text-gray-300">
            所有特效都支持{" "}
            <code className="text-cyan-400">prefers-reduced-motion</code> 设置
          </p>
          <p className="text-gray-400 text-sm mt-2">
            在系统设置中启用"减少动效"后，动画将自动禁用
          </p>
        </Glass>
      </div>
    </div>
  );
};

export default PixelEffectsShowcase;
