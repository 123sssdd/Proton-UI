import { useState } from "react";

/**
 * MessageShowcase - Message 组件完整展示页面
 *
 * 包含：
 * 1. 基础风格部分（使用现有 Message 组件）
 * 2. 艺术主题部分（5 个主题）
 */
export function MessageShowcase() {
  const [selectedTheme, setSelectedTheme] = useState<
    "retro" | "tokyo" | "shrine" | "lofi" | "vaporwave"
  >("retro");

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* 标题 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            💬 Message 组件展示
          </h1>
          <p className="text-lg text-gray-600">
            基础风格 + 艺术主题（5 个主题）
          </p>
        </div>

        {/* 基础风格部分 */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">基础风格</h2>
          <div className="bg-white rounded-lg shadow-sm p-8 space-y-6">
            {/* 用户消息 */}
            <div className="flex gap-3 flex-row-reverse">
              <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-medium flex-shrink-0">
                U
              </div>
              <div className="flex flex-col gap-1">
                <div className="bg-blue-600 text-white rounded-lg px-4 py-3 max-w-md">
                  你好！这是一条用户消息。
                </div>
                <div className="text-xs text-gray-500 text-right px-1">
                  14:30
                </div>
              </div>
            </div>

            {/* AI 消息 */}
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-gray-300 text-gray-700 flex items-center justify-center text-sm font-medium flex-shrink-0">
                AI
              </div>
              <div className="flex flex-col gap-1">
                <div className="bg-gray-100 text-gray-900 rounded-lg px-4 py-3 max-w-md">
                  你好！我是 AI 助手，很高兴为你服务。
                </div>
                <div className="text-xs text-gray-500 px-1">14:31</div>
              </div>
            </div>

            {/* 系统消息 */}
            <div className="flex justify-center">
              <div className="bg-yellow-50 text-yellow-900 text-sm text-center rounded-lg px-4 py-2">
                系统消息：对话已开始
              </div>
            </div>

            {/* 长消息 */}
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-gray-300 text-gray-700 flex items-center justify-center text-sm font-medium flex-shrink-0">
                AI
              </div>
              <div className="flex flex-col gap-1">
                <div className="bg-gray-100 text-gray-900 rounded-lg px-4 py-3 max-w-md">
                  这是一条较长的消息，用于展示消息气泡如何处理多行文本。
                  消息内容会自动换行，保持良好的可读性。
                  你可以看到时间戳显示在消息下方。
                </div>
                <div className="text-xs text-gray-500 px-1">14:32</div>
              </div>
            </div>

            {/* 加载状态 */}
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-gray-300 text-gray-700 flex items-center justify-center text-sm font-medium flex-shrink-0">
                AI
              </div>
              <div className="flex flex-col gap-1">
                <div className="bg-gray-100 text-gray-900 rounded-lg px-4 py-3 min-w-[60px] min-h-[40px] flex items-center justify-center">
                  <div className="w-3 h-3 bg-gray-400 rounded-full animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 分隔线 */}
        <div className="flex items-center justify-center my-16">
          <div className="flex-1 border-t-2 border-gray-300"></div>
          <div className="px-6 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500">
            ✨ 艺术主题 ✨
          </div>
          <div className="flex-1 border-t-2 border-gray-300"></div>
        </div>

        {/* 主题选择器 */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setSelectedTheme("retro")}
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              selectedTheme === "retro"
                ? "bg-cyan-500 text-white shadow-lg scale-105"
                : "bg-white text-gray-700 hover:bg-gray-50"
            }`}
          >
            🌟 Retro Futurism
          </button>
          <button
            onClick={() => setSelectedTheme("tokyo")}
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              selectedTheme === "tokyo"
                ? "bg-pink-500 text-white shadow-lg scale-105"
                : "bg-white text-gray-700 hover:bg-gray-50"
            }`}
          >
            🌸 Neo Tokyo Night
          </button>
          <button
            onClick={() => setSelectedTheme("shrine")}
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              selectedTheme === "shrine"
                ? "bg-amber-500 text-white shadow-lg scale-105"
                : "bg-white text-gray-700 hover:bg-gray-50"
            }`}
          >
            ⛩️ Cyber Shrine
          </button>
          <button
            onClick={() => setSelectedTheme("lofi")}
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              selectedTheme === "lofi"
                ? "bg-green-500 text-white shadow-lg scale-105"
                : "bg-white text-gray-700 hover:bg-gray-50"
            }`}
          >
            ☁️ Dreamy Lo-fi
          </button>
          <button
            onClick={() => setSelectedTheme("vaporwave")}
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              selectedTheme === "vaporwave"
                ? "bg-purple-500 text-white shadow-lg scale-105"
                : "bg-white text-gray-700 hover:bg-gray-50"
            }`}
          >
            🌊 Vaporwave
          </button>
        </div>

        {/* 艺术主题展示 */}
        <section>
          {selectedTheme === "retro" && <RetroFuturismTheme />}
          {selectedTheme === "tokyo" && <NeoTokyoTheme />}
          {selectedTheme === "shrine" && <CyberShrineTheme />}
          {selectedTheme === "lofi" && <DreamyLofiTheme />}
          {selectedTheme === "vaporwave" && <VaporwaveTheme />}
        </section>

        {/* 设计原则说明 */}
        <div className="mt-16 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">💡 设计原则</h3>
          <div className="grid grid-cols-2 gap-6 text-sm text-gray-700">
            <div>
              <strong>视觉层：</strong>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Clean pixel, high readability</li>
                <li>Limited palette (6-12 colors)</li>
                <li>Subtle dithering, soft CRT glow</li>
                <li>Japanese aesthetic: Ma (intentional negative space)</li>
              </ul>
            </div>
            <div>
              <strong>交互层：</strong>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Micro-interactions</li>
                <li>Easing soft (200-300ms)</li>
                <li>Hover sparkle & glow</li>
                <li>Clear feedback</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * 🌟 Retro Futurism 主题
 * 霓虹边框 + CRT 光晕 + 扫描线 + 金属铆钉
 */
function RetroFuturismTheme() {
  return (
    <div className="bg-[#1A1D2E] rounded-lg p-8 space-y-6">
      <h3 className="text-xl font-bold text-cyan-400 mb-6">
        🌟 Retro Futurism Theme
      </h3>

      {/* 用户消息 - 霓虹青 */}
      <div className="flex gap-3 flex-row-reverse">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
          style={{
            background: "linear-gradient(135deg, #4ECDC4 0%, #44A08D 100%)",
            boxShadow: "0 0 12px rgba(78, 205, 196, 0.6)",
            border: "2px solid #4ECDC4",
          }}
        >
          U
        </div>
        <div className="flex flex-col gap-1">
          <div
            className="rounded-lg px-4 py-3 max-w-md relative"
            style={{
              background: "linear-gradient(135deg, #2C3E50 0%, #34495E 100%)",
              border: "2px solid #4ECDC4",
              boxShadow:
                "0 0 16px rgba(78, 205, 196, 0.4), inset 0 1px 0 rgba(255,255,255,0.1)",
              color: "#E0E0E0",
            }}
          >
            {/* 四角铆钉 */}
            <div
              className="absolute top-1 left-1 w-1.5 h-1.5 rounded-full bg-cyan-400"
              style={{ boxShadow: "0 0 4px #4ECDC4" }}
            />
            <div
              className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-cyan-400"
              style={{ boxShadow: "0 0 4px #4ECDC4" }}
            />
            <div
              className="absolute bottom-1 left-1 w-1.5 h-1.5 rounded-full bg-cyan-400"
              style={{ boxShadow: "0 0 4px #4ECDC4" }}
            />
            <div
              className="absolute bottom-1 right-1 w-1.5 h-1.5 rounded-full bg-cyan-400"
              style={{ boxShadow: "0 0 4px #4ECDC4" }}
            />
            {/* 扫描线纹理 */}
            <div
              className="absolute inset-0 pointer-events-none rounded-lg"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(78, 205, 196, 0.03) 2px, rgba(78, 205, 196, 0.03) 4px)",
              }}
            />
            你好！这是一条霓虹风格的用户消息。
          </div>
          <div className="text-xs text-cyan-400 text-right px-1 font-mono">
            14:30
          </div>
        </div>
      </div>

      {/* AI 消息 - 深色底 + 霓虹边框 */}
      <div className="flex gap-3">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
          style={{
            background: "linear-gradient(135deg, #667EEA 0%, #764BA2 100%)",
            boxShadow: "0 0 12px rgba(102, 126, 234, 0.6)",
            border: "2px solid #667EEA",
          }}
        >
          AI
        </div>
        <div className="flex flex-col gap-1">
          <div
            className="rounded-lg px-4 py-3 max-w-md relative"
            style={{
              background: "linear-gradient(135deg, #1A1D2E 0%, #2C3E50 100%)",
              border: "2px solid #667EEA",
              boxShadow:
                "0 0 16px rgba(102, 126, 234, 0.4), inset 0 1px 0 rgba(255,255,255,0.1)",
              color: "#E0E0E0",
            }}
          >
            {/* 四角铆钉 */}
            <div
              className="absolute top-1 left-1 w-1.5 h-1.5 rounded-full bg-purple-400"
              style={{ boxShadow: "0 0 4px #667EEA" }}
            />
            <div
              className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-purple-400"
              style={{ boxShadow: "0 0 4px #667EEA" }}
            />
            <div
              className="absolute bottom-1 left-1 w-1.5 h-1.5 rounded-full bg-purple-400"
              style={{ boxShadow: "0 0 4px #667EEA" }}
            />
            <div
              className="absolute bottom-1 right-1 w-1.5 h-1.5 rounded-full bg-purple-400"
              style={{ boxShadow: "0 0 4px #667EEA" }}
            />
            {/* 扫描线纹理 */}
            <div
              className="absolute inset-0 pointer-events-none rounded-lg"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(102, 126, 234, 0.03) 2px, rgba(102, 126, 234, 0.03) 4px)",
              }}
            />
            你好！我是 AI 助手，很高兴为你服务。这是一条带有 CRT
            光晕效果的消息。
          </div>
          <div className="text-xs text-purple-400 px-1 font-mono">14:31</div>
        </div>
      </div>

      {/* 系统消息 - 霓虹黄 */}
      <div className="flex justify-center">
        <div
          className="text-sm text-center rounded-lg px-4 py-2 relative"
          style={{
            background: "rgba(255, 184, 108, 0.1)",
            border: "2px solid #FFB86C",
            boxShadow: "0 0 12px rgba(255, 184, 108, 0.3)",
            color: "#FFB86C",
          }}
        >
          <div
            className="absolute top-1 left-1 w-1 h-1 rounded-full bg-amber-400"
            style={{ boxShadow: "0 0 4px #FFB86C" }}
          />
          <div
            className="absolute top-1 right-1 w-1 h-1 rounded-full bg-amber-400"
            style={{ boxShadow: "0 0 4px #FFB86C" }}
          />
          <div
            className="absolute bottom-1 left-1 w-1 h-1 rounded-full bg-amber-400"
            style={{ boxShadow: "0 0 4px #FFB86C" }}
          />
          <div
            className="absolute bottom-1 right-1 w-1 h-1 rounded-full bg-amber-400"
            style={{ boxShadow: "0 0 4px #FFB86C" }}
          />
          系统消息：对话已开始
        </div>
      </div>

      {/* 长消息 */}
      <div className="flex gap-3">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
          style={{
            background: "linear-gradient(135deg, #667EEA 0%, #764BA2 100%)",
            boxShadow: "0 0 12px rgba(102, 126, 234, 0.6)",
            border: "2px solid #667EEA",
          }}
        >
          AI
        </div>
        <div className="flex flex-col gap-1">
          <div
            className="rounded-lg px-4 py-3 max-w-md relative"
            style={{
              background: "linear-gradient(135deg, #1A1D2E 0%, #2C3E50 100%)",
              border: "2px solid #667EEA",
              boxShadow:
                "0 0 16px rgba(102, 126, 234, 0.4), inset 0 1px 0 rgba(255,255,255,0.1)",
              color: "#E0E0E0",
            }}
          >
            {/* 四角铆钉 */}
            <div
              className="absolute top-1 left-1 w-1.5 h-1.5 rounded-full bg-purple-400"
              style={{ boxShadow: "0 0 4px #667EEA" }}
            />
            <div
              className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-purple-400"
              style={{ boxShadow: "0 0 4px #667EEA" }}
            />
            <div
              className="absolute bottom-1 left-1 w-1.5 h-1.5 rounded-full bg-purple-400"
              style={{ boxShadow: "0 0 4px #667EEA" }}
            />
            <div
              className="absolute bottom-1 right-1 w-1.5 h-1.5 rounded-full bg-purple-400"
              style={{ boxShadow: "0 0 4px #667EEA" }}
            />
            {/* 扫描线纹理 */}
            <div
              className="absolute inset-0 pointer-events-none rounded-lg"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(102, 126, 234, 0.03) 2px, rgba(102, 126, 234, 0.03) 4px)",
              }}
            />
            这是一条较长的消息，用于展示消息气泡如何处理多行文本。
            消息内容会自动换行，保持良好的可读性。 霓虹边框和 CRT
            光晕效果让消息更具未来感。
          </div>
          <div className="text-xs text-purple-400 px-1 font-mono">14:32</div>
        </div>
      </div>

      {/* 加载状态 */}
      <div className="flex gap-3">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
          style={{
            background: "linear-gradient(135deg, #667EEA 0%, #764BA2 100%)",
            boxShadow: "0 0 12px rgba(102, 126, 234, 0.6)",
            border: "2px solid #667EEA",
          }}
        >
          AI
        </div>
        <div className="flex flex-col gap-1">
          <div
            className="rounded-lg px-4 py-3 min-w-[60px] min-h-[40px] flex items-center justify-center relative"
            style={{
              background: "linear-gradient(135deg, #1A1D2E 0%, #2C3E50 100%)",
              border: "2px solid #667EEA",
              boxShadow: "0 0 16px rgba(102, 126, 234, 0.4)",
            }}
          >
            <div
              className="w-3 h-3 rounded-full animate-pulse"
              style={{ background: "#667EEA", boxShadow: "0 0 8px #667EEA" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * 🌸 Neo Tokyo Night 主题
 * 玻璃拟态 + 樱粉渐变 + 霓虹青光晕 + 装饰线条
 */
function NeoTokyoTheme() {
  return (
    <div
      className="rounded-lg p-8 space-y-6"
      style={{
        background: "linear-gradient(135deg, #1A1D2E 0%, #2C3E50 100%)",
      }}
    >
      <h3 className="text-xl font-bold text-pink-400 mb-6">
        🌸 Neo Tokyo Night Theme
      </h3>

      {/* 用户消息 - 樱粉渐变 */}
      <div className="flex gap-3 flex-row-reverse">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
          style={{
            background: "linear-gradient(135deg, #FF6B9D 0%, #C44569 100%)",
            boxShadow: "0 0 16px rgba(255, 107, 157, 0.6)",
            border: "2px solid rgba(255, 107, 157, 0.5)",
          }}
        >
          U
        </div>
        <div className="flex flex-col gap-1">
          <div
            className="rounded-lg px-4 py-3 max-w-md relative overflow-hidden"
            style={{
              background: "rgba(255, 107, 157, 0.15)",
              backdropFilter: "blur(12px)",
              border: "2px solid rgba(255, 107, 157, 0.5)",
              boxShadow:
                "0 0 20px rgba(255, 107, 157, 0.3), inset 0 1px 0 rgba(255,255,255,0.2)",
              color: "#FFE5EC",
            }}
          >
            {/* 顶部高光 */}
            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
              }}
            />
            {/* 装饰线条 */}
            <div className="absolute top-2 right-2 w-8 h-px bg-pink-300 opacity-50" />
            <div className="absolute top-3 right-2 w-6 h-px bg-pink-300 opacity-30" />
            你好！这是一条樱粉渐变的用户消息。
          </div>
          <div className="text-xs text-pink-300 text-right px-1">14:30</div>
        </div>
      </div>

      {/* AI 消息 - 霓虹青玻璃 */}
      <div className="flex gap-3">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
          style={{
            background: "linear-gradient(135deg, #4ECDC4 0%, #44A08D 100%)",
            boxShadow: "0 0 16px rgba(78, 205, 196, 0.6)",
            border: "2px solid rgba(78, 205, 196, 0.5)",
          }}
        >
          AI
        </div>
        <div className="flex flex-col gap-1">
          <div
            className="rounded-lg px-4 py-3 max-w-md relative overflow-hidden"
            style={{
              background: "rgba(78, 205, 196, 0.15)",
              backdropFilter: "blur(12px)",
              border: "2px solid rgba(78, 205, 196, 0.5)",
              boxShadow:
                "0 0 20px rgba(78, 205, 196, 0.3), inset 0 1px 0 rgba(255,255,255,0.2)",
              color: "#E0F7F5",
            }}
          >
            {/* 顶部高光 */}
            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
              }}
            />
            {/* 装饰线条 */}
            <div className="absolute top-2 left-2 w-8 h-px bg-cyan-300 opacity-50" />
            <div className="absolute top-3 left-2 w-6 h-px bg-cyan-300 opacity-30" />
            你好！我是 AI 助手，很高兴为你服务。这是一条带有玻璃拟态效果的消息。
          </div>
          <div className="text-xs text-cyan-300 px-1">14:31</div>
        </div>
      </div>

      {/* 系统消息 - 紫色玻璃 */}
      <div className="flex justify-center">
        <div
          className="text-sm text-center rounded-lg px-4 py-2 relative overflow-hidden"
          style={{
            background: "rgba(155, 89, 182, 0.15)",
            backdropFilter: "blur(12px)",
            border: "2px solid rgba(155, 89, 182, 0.5)",
            boxShadow: "0 0 16px rgba(155, 89, 182, 0.3)",
            color: "#E8D5F2",
          }}
        >
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
            }}
          />
          系统消息：对话已开始
        </div>
      </div>

      {/* 长消息 */}
      <div className="flex gap-3">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
          style={{
            background: "linear-gradient(135deg, #4ECDC4 0%, #44A08D 100%)",
            boxShadow: "0 0 16px rgba(78, 205, 196, 0.6)",
            border: "2px solid rgba(78, 205, 196, 0.5)",
          }}
        >
          AI
        </div>
        <div className="flex flex-col gap-1">
          <div
            className="rounded-lg px-4 py-3 max-w-md relative overflow-hidden"
            style={{
              background: "rgba(78, 205, 196, 0.15)",
              backdropFilter: "blur(12px)",
              border: "2px solid rgba(78, 205, 196, 0.5)",
              boxShadow:
                "0 0 20px rgba(78, 205, 196, 0.3), inset 0 1px 0 rgba(255,255,255,0.2)",
              color: "#E0F7F5",
            }}
          >
            {/* 顶部高光 */}
            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
              }}
            />
            {/* 装饰线条 */}
            <div className="absolute top-2 left-2 w-8 h-px bg-cyan-300 opacity-50" />
            <div className="absolute top-3 left-2 w-6 h-px bg-cyan-300 opacity-30" />
            这是一条较长的消息，用于展示消息气泡如何处理多行文本。
            消息内容会自动换行，保持良好的可读性。
            玻璃拟态效果和霓虹光晕让消息更具东京夜景的氛围。
          </div>
          <div className="text-xs text-cyan-300 px-1">14:32</div>
        </div>
      </div>

      {/* 加载状态 */}
      <div className="flex gap-3">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
          style={{
            background: "linear-gradient(135deg, #4ECDC4 0%, #44A08D 100%)",
            boxShadow: "0 0 16px rgba(78, 205, 196, 0.6)",
            border: "2px solid rgba(78, 205, 196, 0.5)",
          }}
        >
          AI
        </div>
        <div className="flex flex-col gap-1">
          <div
            className="rounded-lg px-4 py-3 min-w-[60px] min-h-[40px] flex items-center justify-center relative overflow-hidden"
            style={{
              background: "rgba(78, 205, 196, 0.15)",
              backdropFilter: "blur(12px)",
              border: "2px solid rgba(78, 205, 196, 0.5)",
              boxShadow: "0 0 20px rgba(78, 205, 196, 0.3)",
            }}
          >
            <div
              className="w-3 h-3 rounded-full animate-pulse"
              style={{ background: "#4ECDC4", boxShadow: "0 0 12px #4ECDC4" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * ⛩️ Cyber Shrine 主题
 * 金色神圣 + 神社红 + 雾灰 + 浮世绘纹样
 */
function CyberShrineTheme() {
  return (
    <div
      className="rounded-lg p-8 space-y-6"
      style={{
        background: "linear-gradient(135deg, #1B4D5C 0%, #2C3E50 100%)",
      }}
    >
      <h3 className="text-xl font-bold text-amber-400 mb-6">
        ⛩️ Cyber Shrine Theme
      </h3>

      {/* 用户消息 - 神社红 */}
      <div className="flex gap-3 flex-row-reverse">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
          style={{
            background: "linear-gradient(135deg, #C85A54 0%, #A0463F 100%)",
            boxShadow: "0 4px 8px rgba(200, 90, 84, 0.4)",
            border: "2px solid #C85A54",
          }}
        >
          U
        </div>
        <div className="flex flex-col gap-1">
          <div
            className="rounded-lg px-4 py-3 max-w-md relative"
            style={{
              background:
                "linear-gradient(135deg, rgba(200, 90, 84, 0.2) 0%, rgba(160, 70, 63, 0.2) 100%)",
              border: "2px solid #C85A54",
              boxShadow:
                "0 4px 12px rgba(200, 90, 84, 0.3), inset 0 1px 0 rgba(255,255,255,0.1)",
              color: "#FFE5E0",
            }}
          >
            {/* 墨迹纹理 */}
            <div
              className="absolute inset-0 pointer-events-none rounded-lg opacity-10"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 30%, rgba(0,0,0,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(0,0,0,0.2) 0%, transparent 50%)",
              }}
            />
            {/* 装饰纹样 */}
            <div className="absolute top-2 right-2 text-xs opacity-50">⛩️</div>
            你好！这是一条神社红风格的用户消息。
          </div>
          <div className="text-xs text-red-300 text-right px-1">14:30</div>
        </div>
      </div>

      {/* AI 消息 - 金色神圣 */}
      <div className="flex gap-3">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
          style={{
            background: "linear-gradient(135deg, #D4AF37 0%, #B8941E 100%)",
            boxShadow: "0 4px 8px rgba(212, 175, 55, 0.4)",
            border: "2px solid #D4AF37",
          }}
        >
          AI
        </div>
        <div className="flex flex-col gap-1">
          <div
            className="rounded-lg px-4 py-3 max-w-md relative"
            style={{
              background:
                "linear-gradient(135deg, rgba(212, 175, 55, 0.15) 0%, rgba(184, 148, 30, 0.15) 100%)",
              border: "2px solid #D4AF37",
              boxShadow:
                "0 4px 12px rgba(212, 175, 55, 0.3), inset 0 1px 0 rgba(255,255,255,0.1)",
              color: "#FFF8E1",
            }}
          >
            {/* 和纸质感 */}
            <div
              className="absolute inset-0 pointer-events-none rounded-lg opacity-5"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)",
              }}
            />
            {/* 装饰纹样 */}
            <div className="absolute top-2 left-2 text-xs opacity-50">✨</div>
            你好！我是 AI 助手，很高兴为你服务。这是一条带有金色神圣感的消息。
          </div>
          <div className="text-xs text-amber-300 px-1">14:31</div>
        </div>
      </div>

      {/* 系统消息 - 雾灰 */}
      <div className="flex justify-center">
        <div
          className="text-sm text-center rounded-lg px-4 py-2 relative"
          style={{
            background: "rgba(168, 164, 160, 0.2)",
            border: "2px solid #A8A4A0",
            boxShadow: "0 4px 8px rgba(168, 164, 160, 0.3)",
            color: "#E8E6E3",
          }}
        >
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 text-xs opacity-30">
            ⛩️
          </div>
          系统消息：对话已开始
        </div>
      </div>

      {/* 长消息 */}
      <div className="flex gap-3">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
          style={{
            background: "linear-gradient(135deg, #D4AF37 0%, #B8941E 100%)",
            boxShadow: "0 4px 8px rgba(212, 175, 55, 0.4)",
            border: "2px solid #D4AF37",
          }}
        >
          AI
        </div>
        <div className="flex flex-col gap-1">
          <div
            className="rounded-lg px-4 py-3 max-w-md relative"
            style={{
              background:
                "linear-gradient(135deg, rgba(212, 175, 55, 0.15) 0%, rgba(184, 148, 30, 0.15) 100%)",
              border: "2px solid #D4AF37",
              boxShadow:
                "0 4px 12px rgba(212, 175, 55, 0.3), inset 0 1px 0 rgba(255,255,255,0.1)",
              color: "#FFF8E1",
            }}
          >
            {/* 和纸质感 */}
            <div
              className="absolute inset-0 pointer-events-none rounded-lg opacity-5"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)",
              }}
            />
            {/* 装饰纹样 */}
            <div className="absolute top-2 left-2 text-xs opacity-50">✨</div>
            这是一条较长的消息，用于展示消息气泡如何处理多行文本。
            消息内容会自动换行，保持良好的可读性。
            金色和神社红的配色营造出赛博神社的氛围。
          </div>
          <div className="text-xs text-amber-300 px-1">14:32</div>
        </div>
      </div>

      {/* 加载状态 */}
      <div className="flex gap-3">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
          style={{
            background: "linear-gradient(135deg, #D4AF37 0%, #B8941E 100%)",
            boxShadow: "0 4px 8px rgba(212, 175, 55, 0.4)",
            border: "2px solid #D4AF37",
          }}
        >
          AI
        </div>
        <div className="flex flex-col gap-1">
          <div
            className="rounded-lg px-4 py-3 min-w-[60px] min-h-[40px] flex items-center justify-center relative"
            style={{
              background:
                "linear-gradient(135deg, rgba(212, 175, 55, 0.15) 0%, rgba(184, 148, 30, 0.15) 100%)",
              border: "2px solid #D4AF37",
              boxShadow: "0 4px 12px rgba(212, 175, 55, 0.3)",
            }}
          >
            <div
              className="w-3 h-3 rounded-full animate-pulse"
              style={{ background: "#D4AF37", boxShadow: "0 0 8px #D4AF37" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * ☁️ Dreamy Lo-fi 主题
 * 抹茶绿 + 淡樱粉 + 金色 + 柔和渐变 + 云朵装饰
 */
function DreamyLofiTheme() {
  return (
    <div
      className="rounded-lg p-8 space-y-6"
      style={{
        background: "linear-gradient(135deg, #F5F1E8 0%, #E8E4D9 100%)",
      }}
    >
      <h3 className="text-xl font-bold text-green-700 mb-6">
        ☁️ Dreamy Lo-fi Theme
      </h3>

      {/* 用户消息 - 淡樱粉 */}
      <div className="flex gap-3 flex-row-reverse">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
          style={{
            background: "linear-gradient(135deg, #FFB6C1 0%, #FFA0B4 100%)",
            boxShadow: "0 4px 8px rgba(255, 182, 193, 0.3)",
            border: "2px solid rgba(255, 182, 193, 0.5)",
          }}
        >
          U
        </div>
        <div className="flex flex-col gap-1">
          <div
            className="rounded-lg px-4 py-3 max-w-md relative"
            style={{
              background:
                "linear-gradient(135deg, rgba(255, 182, 193, 0.3) 0%, rgba(255, 160, 180, 0.3) 100%)",
              border: "2px solid rgba(255, 182, 193, 0.5)",
              boxShadow: "0 4px 12px rgba(255, 182, 193, 0.2)",
              color: "#5A4A42",
            }}
          >
            {/* 云朵装饰 */}
            <div className="absolute top-1 right-2 text-xs opacity-40">☁️</div>
            {/* 柔和渐变 */}
            <div
              className="absolute inset-0 pointer-events-none rounded-lg opacity-20"
              style={{
                background:
                  "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.5) 0%, transparent 50%)",
              }}
            />
            你好！这是一条淡樱粉风格的用户消息。
          </div>
          <div className="text-xs text-pink-600 text-right px-1">14:30</div>
        </div>
      </div>

      {/* AI 消息 - 抹茶绿 */}
      <div className="flex gap-3">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
          style={{
            background: "linear-gradient(135deg, #7BA05B 0%, #6A8F4A 100%)",
            boxShadow: "0 4px 8px rgba(123, 160, 91, 0.3)",
            border: "2px solid rgba(123, 160, 91, 0.5)",
          }}
        >
          AI
        </div>
        <div className="flex flex-col gap-1">
          <div
            className="rounded-lg px-4 py-3 max-w-md relative"
            style={{
              background:
                "linear-gradient(135deg, rgba(123, 160, 91, 0.2) 0%, rgba(106, 143, 74, 0.2) 100%)",
              border: "2px solid rgba(123, 160, 91, 0.5)",
              boxShadow: "0 4px 12px rgba(123, 160, 91, 0.2)",
              color: "#3A4A2A",
            }}
          >
            {/* 星星装饰 */}
            <div className="absolute top-1 left-2 text-xs opacity-40">✨</div>
            {/* 柔和渐变 */}
            <div
              className="absolute inset-0 pointer-events-none rounded-lg opacity-20"
              style={{
                background:
                  "radial-gradient(circle at 70% 30%, rgba(255,255,255,0.5) 0%, transparent 50%)",
              }}
            />
            你好！我是 AI 助手，很高兴为你服务。这是一条带有抹茶绿色调的消息。
          </div>
          <div className="text-xs text-green-700 px-1">14:31</div>
        </div>
      </div>

      {/* 系统消息 - 金色 */}
      <div className="flex justify-center">
        <div
          className="text-sm text-center rounded-lg px-4 py-2 relative"
          style={{
            background: "rgba(212, 175, 55, 0.2)",
            border: "2px solid rgba(212, 175, 55, 0.5)",
            boxShadow: "0 4px 8px rgba(212, 175, 55, 0.2)",
            color: "#6A5A2A",
          }}
        >
          <div className="absolute top-1 left-1/2 transform -translate-x-1/2 text-xs opacity-30">
            ✨
          </div>
          系统消息：对话已开始
        </div>
      </div>

      {/* 长消息 */}
      <div className="flex gap-3">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
          style={{
            background: "linear-gradient(135deg, #7BA05B 0%, #6A8F4A 100%)",
            boxShadow: "0 4px 8px rgba(123, 160, 91, 0.3)",
            border: "2px solid rgba(123, 160, 91, 0.5)",
          }}
        >
          AI
        </div>
        <div className="flex flex-col gap-1">
          <div
            className="rounded-lg px-4 py-3 max-w-md relative"
            style={{
              background:
                "linear-gradient(135deg, rgba(123, 160, 91, 0.2) 0%, rgba(106, 143, 74, 0.2) 100%)",
              border: "2px solid rgba(123, 160, 91, 0.5)",
              boxShadow: "0 4px 12px rgba(123, 160, 91, 0.2)",
              color: "#3A4A2A",
            }}
          >
            {/* 星星装饰 */}
            <div className="absolute top-1 left-2 text-xs opacity-40">✨</div>
            {/* 柔和渐变 */}
            <div
              className="absolute inset-0 pointer-events-none rounded-lg opacity-20"
              style={{
                background:
                  "radial-gradient(circle at 70% 30%, rgba(255,255,255,0.5) 0%, transparent 50%)",
              }}
            />
            这是一条较长的消息，用于展示消息气泡如何处理多行文本。
            消息内容会自动换行，保持良好的可读性。
            柔和的渐变和云朵装饰营造出梦幻 Lo-fi 的氛围。
          </div>
          <div className="text-xs text-green-700 px-1">14:32</div>
        </div>
      </div>

      {/* 加载状态 */}
      <div className="flex gap-3">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
          style={{
            background: "linear-gradient(135deg, #7BA05B 0%, #6A8F4A 100%)",
            boxShadow: "0 4px 8px rgba(123, 160, 91, 0.3)",
            border: "2px solid rgba(123, 160, 91, 0.5)",
          }}
        >
          AI
        </div>
        <div className="flex flex-col gap-1">
          <div
            className="rounded-lg px-4 py-3 min-w-[60px] min-h-[40px] flex items-center justify-center relative"
            style={{
              background:
                "linear-gradient(135deg, rgba(123, 160, 91, 0.2) 0%, rgba(106, 143, 74, 0.2) 100%)",
              border: "2px solid rgba(123, 160, 91, 0.5)",
              boxShadow: "0 4px 12px rgba(123, 160, 91, 0.2)",
            }}
          >
            <div
              className="w-3 h-3 rounded-full animate-pulse"
              style={{
                background: "#7BA05B",
                boxShadow: "0 0 8px rgba(123, 160, 91, 0.5)",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * 🌊 Vaporwave 主题
 * 霓虹粉 + 赛博青 + 紫色 + 三色渐变 + 网格纹理
 */
function VaporwaveTheme() {
  return (
    <div
      className="rounded-lg p-8 space-y-6"
      style={{
        background: "linear-gradient(135deg, #240046 0%, #3C096C 100%)",
      }}
    >
      <h3 className="text-xl font-bold text-pink-400 mb-6">
        🌊 Vaporwave Theme
      </h3>

      {/* 用户消息 - 霓虹粉 */}
      <div className="flex gap-3 flex-row-reverse">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
          style={{
            background: "linear-gradient(135deg, #FF006E 0%, #D90368 100%)",
            boxShadow: "0 0 20px rgba(255, 0, 110, 0.6)",
            border: "2px solid rgba(255, 0, 110, 0.5)",
          }}
        >
          U
        </div>
        <div className="flex flex-col gap-1">
          <div
            className="rounded-lg px-4 py-3 max-w-md relative overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, rgba(255, 0, 110, 0.2) 0%, rgba(217, 3, 104, 0.2) 100%)",
              border: "2px solid rgba(255, 0, 110, 0.5)",
              boxShadow:
                "0 0 24px rgba(255, 0, 110, 0.4), inset 0 1px 0 rgba(255,255,255,0.1)",
              color: "#FFE5F0",
            }}
          >
            {/* 网格纹理 */}
            <div
              className="absolute inset-0 pointer-events-none rounded-lg opacity-10"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,0,110,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,0,110,0.3) 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            />
            {/* 三色渐变装饰 */}
            <div
              className="absolute top-0 left-0 right-0 h-1"
              style={{
                background:
                  "linear-gradient(90deg, #FF006E 0%, #9D4EDD 50%, #00F5FF 100%)",
              }}
            />
            你好！这是一条霓虹粉风格的用户消息。
          </div>
          <div className="text-xs text-pink-300 text-right px-1 font-mono">
            14:30
          </div>
        </div>
      </div>

      {/* AI 消息 - 赛博青 */}
      <div className="flex gap-3">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
          style={{
            background: "linear-gradient(135deg, #00F5FF 0%, #00D4E6 100%)",
            boxShadow: "0 0 20px rgba(0, 245, 255, 0.6)",
            border: "2px solid rgba(0, 245, 255, 0.5)",
          }}
        >
          AI
        </div>
        <div className="flex flex-col gap-1">
          <div
            className="rounded-lg px-4 py-3 max-w-md relative overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, rgba(0, 245, 255, 0.15) 0%, rgba(0, 212, 230, 0.15) 100%)",
              backdropFilter: "blur(12px)",
              border: "2px solid rgba(0, 245, 255, 0.5)",
              boxShadow:
                "0 0 24px rgba(0, 245, 255, 0.4), inset 0 1px 0 rgba(255,255,255,0.1)",
              color: "#E0FFFF",
            }}
          >
            {/* 网格纹理 */}
            <div
              className="absolute inset-0 pointer-events-none rounded-lg opacity-10"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(0,245,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,245,255,0.3) 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            />
            {/* 三色渐变装饰 */}
            <div
              className="absolute top-0 left-0 right-0 h-1"
              style={{
                background:
                  "linear-gradient(90deg, #00F5FF 0%, #9D4EDD 50%, #FF006E 100%)",
              }}
            />
            你好！我是 AI 助手，很高兴为你服务。这是一条带有赛博青色调的消息。
          </div>
          <div className="text-xs text-cyan-300 px-1 font-mono">14:31</div>
        </div>
      </div>

      {/* 系统消息 - 紫色 */}
      <div className="flex justify-center">
        <div
          className="text-sm text-center rounded-lg px-4 py-2 relative overflow-hidden"
          style={{
            background: "rgba(157, 78, 221, 0.2)",
            backdropFilter: "blur(12px)",
            border: "2px solid rgba(157, 78, 221, 0.5)",
            boxShadow: "0 0 20px rgba(157, 78, 221, 0.4)",
            color: "#F0E5FF",
          }}
        >
          <div
            className="absolute top-0 left-0 right-0 h-1"
            style={{
              background:
                "linear-gradient(90deg, #FF006E 0%, #9D4EDD 50%, #00F5FF 100%)",
            }}
          />
          系统消息：对话已开始
        </div>
      </div>

      {/* 长消息 */}
      <div className="flex gap-3">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
          style={{
            background: "linear-gradient(135deg, #00F5FF 0%, #00D4E6 100%)",
            boxShadow: "0 0 20px rgba(0, 245, 255, 0.6)",
            border: "2px solid rgba(0, 245, 255, 0.5)",
          }}
        >
          AI
        </div>
        <div className="flex flex-col gap-1">
          <div
            className="rounded-lg px-4 py-3 max-w-md relative overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, rgba(0, 245, 255, 0.15) 0%, rgba(0, 212, 230, 0.15) 100%)",
              backdropFilter: "blur(12px)",
              border: "2px solid rgba(0, 245, 255, 0.5)",
              boxShadow:
                "0 0 24px rgba(0, 245, 255, 0.4), inset 0 1px 0 rgba(255,255,255,0.1)",
              color: "#E0FFFF",
            }}
          >
            {/* 网格纹理 */}
            <div
              className="absolute inset-0 pointer-events-none rounded-lg opacity-10"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(0,245,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,245,255,0.3) 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            />
            {/* 三色渐变装饰 */}
            <div
              className="absolute top-0 left-0 right-0 h-1"
              style={{
                background:
                  "linear-gradient(90deg, #00F5FF 0%, #9D4EDD 50%, #FF006E 100%)",
              }}
            />
            这是一条较长的消息，用于展示消息气泡如何处理多行文本。
            消息内容会自动换行，保持良好的可读性。
            三色渐变和网格纹理营造出蒸汽波的复古未来感。
          </div>
          <div className="text-xs text-cyan-300 px-1 font-mono">14:32</div>
        </div>
      </div>

      {/* 加载状态 */}
      <div className="flex gap-3">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
          style={{
            background: "linear-gradient(135deg, #00F5FF 0%, #00D4E6 100%)",
            boxShadow: "0 0 20px rgba(0, 245, 255, 0.6)",
            border: "2px solid rgba(0, 245, 255, 0.5)",
          }}
        >
          AI
        </div>
        <div className="flex flex-col gap-1">
          <div
            className="rounded-lg px-4 py-3 min-w-[60px] min-h-[40px] flex items-center justify-center relative overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, rgba(0, 245, 255, 0.15) 0%, rgba(0, 212, 230, 0.15) 100%)",
              backdropFilter: "blur(12px)",
              border: "2px solid rgba(0, 245, 255, 0.5)",
              boxShadow: "0 0 24px rgba(0, 245, 255, 0.4)",
            }}
          >
            <div
              className="w-3 h-3 rounded-full animate-pulse"
              style={{ background: "#00F5FF", boxShadow: "0 0 12px #00F5FF" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
