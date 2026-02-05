import { useState } from "react";

// 消息类型定义
type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
};

/**
 * ChatContainerShowcase - ChatContainer 组件完整展示页面
 *
 * 包含：
 * 1. 基础风格部分（使用现有 ChatContainer 组件）
 * 2. 艺术风格部分（5 个主题）
 */
export function ChatContainerShowcase() {
  const [selectedTheme, setSelectedTheme] = useState<
    "retro" | "tokyo" | "shrine" | "lofi" | "vaporwave"
  >("retro");

  // 模拟消息数据
  const sampleMessages = [
    {
      id: "1",
      role: "assistant" as const,
      content: "你好！我是 AI 助手，有什么可以帮助你的吗？",
      timestamp: new Date(Date.now() - 300000),
    },
    {
      id: "2",
      role: "user" as const,
      content: "你好！我想了解一下像素风格的设计。",
      timestamp: new Date(Date.now() - 240000),
    },
    {
      id: "3",
      role: "assistant" as const,
      content:
        "像素风格设计是一种复古而富有魅力的视觉风格。它的核心特点包括：\n\n1. 清晰的像素边界\n2. 限制的色盘（6-12 色）\n3. 材质分层效果\n4. 日系留白美学",
      timestamp: new Date(Date.now() - 180000),
    },
    {
      id: "4",
      role: "user" as const,
      content: "听起来很有趣！能给我一些例子吗？",
      timestamp: new Date(Date.now() - 120000),
    },
    {
      id: "5",
      role: "assistant" as const,
      content:
        "当然可以！这里有几个经典的像素风格主题：\n\n🌟 Retro Futurism - 霓虹光晕 + CRT 效果\n🌸 Neo Tokyo Night - 玻璃拟态 + 樱粉渐变\n⛩️ Cyber Shrine - 金色神圣 + 神社红\n☁️ Dreamy Lo-fi - 抹茶绿 + 淡樱粉\n🌊 Vaporwave - 三色渐变 + 网格纹理",
      timestamp: new Date(Date.now() - 60000),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* 标题 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            💬 ChatContainer 组件展示
          </h1>
          <p className="text-lg text-gray-600">
            基础风格 + 艺术主题（5 个主题）
          </p>
        </div>

        {/* 基础风格部分 */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">基础风格</h2>
          <div
            className="bg-white rounded-lg shadow-sm overflow-hidden"
            style={{ height: "500px" }}
          >
            <div className="h-full flex flex-col">
              {/* 聊天容器 */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {sampleMessages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0 ${
                        msg.role === "user"
                          ? "bg-blue-500 text-white"
                          : "bg-gray-300 text-gray-700"
                      }`}
                    >
                      {msg.role === "user" ? "U" : "AI"}
                    </div>
                    <div className="flex flex-col gap-1">
                      <div
                        className={`rounded-lg px-4 py-3 max-w-md whitespace-pre-wrap ${
                          msg.role === "user"
                            ? "bg-blue-600 text-white"
                            : "bg-gray-100 text-gray-900"
                        }`}
                      >
                        {msg.content}
                      </div>
                      <div
                        className={`text-xs text-gray-500 px-1 ${msg.role === "user" ? "text-right" : ""}`}
                      >
                        {msg.timestamp.toLocaleTimeString("zh-CN", {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </div>
                    </div>
                  </div>
                ))}
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
          {selectedTheme === "retro" && (
            <RetroFuturismTheme messages={sampleMessages} />
          )}
          {selectedTheme === "tokyo" && (
            <NeoTokyoTheme messages={sampleMessages} />
          )}
          {selectedTheme === "shrine" && (
            <CyberShrineTheme messages={sampleMessages} />
          )}
          {selectedTheme === "lofi" && (
            <DreamyLofiTheme messages={sampleMessages} />
          )}
          {selectedTheme === "vaporwave" && (
            <VaporwaveTheme messages={sampleMessages} />
          )}
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
                <li>Comfortable spacing (消息间距 24px)</li>
                <li>Custom scrollbar styling</li>
                <li>Date separators (日期分割线)</li>
                <li>Typing indicator (正在输入)</li>
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
 * 霓虹边框 + CRT 光晕 + 扫描线 + 自定义滚动条
 */
function RetroFuturismTheme({ messages }: { messages: Message[] }) {
  return (
    <div
      className="rounded-lg overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #1A1D2E 0%, #2C3E50 100%)",
        border: "2px solid #4ECDC4",
        boxShadow: "0 0 24px rgba(78, 205, 196, 0.4)",
        height: "600px",
      }}
    >
      <div className="h-full flex flex-col">
        {/* 头部 */}
        <div
          className="px-6 py-4 border-b-2 relative"
          style={{
            borderColor: "#4ECDC4",
            background: "rgba(78, 205, 196, 0.1)",
          }}
        >
          {/* 扫描线 */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(78, 205, 196, 0.03) 2px, rgba(78, 205, 196, 0.03) 4px)",
            }}
          />
          <h3 className="text-xl font-bold text-cyan-400 font-mono">
            🌟 Retro Futurism Chat
          </h3>
          <p className="text-sm text-cyan-300 mt-1 font-mono">
            Neon glow + CRT effect
          </p>
        </div>

        {/* 聊天容器 */}
        <div
          className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar-retro"
          style={{
            background: "linear-gradient(135deg, #1A1D2E 0%, #2C3E50 100%)",
          }}
        >
          {messages.map((msg, index) => (
            <div key={msg.id}>
              {/* 日期分割线（第一条消息前显示） */}
              {index === 0 && (
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="flex-1 h-px"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, #4ECDC4, transparent)",
                    }}
                  />
                  <div
                    className="text-xs text-cyan-400 font-mono px-3 py-1 rounded"
                    style={{
                      background: "rgba(78, 205, 196, 0.1)",
                      border: "1px solid #4ECDC4",
                    }}
                  >
                    {msg.timestamp.toLocaleDateString("zh-CN", {
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                  <div
                    className="flex-1 h-px"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, #4ECDC4, transparent)",
                    }}
                  />
                </div>
              )}

              <div
                className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                  style={{
                    background:
                      msg.role === "user"
                        ? "linear-gradient(135deg, #4ECDC4 0%, #44A08D 100%)"
                        : "linear-gradient(135deg, #667EEA 0%, #764BA2 100%)",
                    boxShadow:
                      msg.role === "user"
                        ? "0 0 12px rgba(78, 205, 196, 0.6)"
                        : "0 0 12px rgba(102, 126, 234, 0.6)",
                    border:
                      msg.role === "user"
                        ? "2px solid #4ECDC4"
                        : "2px solid #667EEA",
                  }}
                >
                  {msg.role === "user" ? "U" : "AI"}
                </div>
                <div className="flex flex-col gap-1">
                  <div
                    className="rounded-lg px-4 py-3 max-w-md relative whitespace-pre-wrap"
                    style={{
                      background:
                        msg.role === "user"
                          ? "linear-gradient(135deg, #2C3E50 0%, #34495E 100%)"
                          : "linear-gradient(135deg, #1A1D2E 0%, #2C3E50 100%)",
                      border:
                        msg.role === "user"
                          ? "2px solid #4ECDC4"
                          : "2px solid #667EEA",
                      boxShadow:
                        msg.role === "user"
                          ? "0 0 16px rgba(78, 205, 196, 0.4), inset 0 1px 0 rgba(255,255,255,0.1)"
                          : "0 0 16px rgba(102, 126, 234, 0.4), inset 0 1px 0 rgba(255,255,255,0.1)",
                      color: "#E0E0E0",
                    }}
                  >
                    {/* 四角铆钉 */}
                    <div
                      className="absolute top-1 left-1 w-1.5 h-1.5 rounded-full"
                      style={{
                        background: msg.role === "user" ? "#4ECDC4" : "#667EEA",
                        boxShadow:
                          msg.role === "user"
                            ? "0 0 4px #4ECDC4"
                            : "0 0 4px #667EEA",
                      }}
                    />
                    <div
                      className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full"
                      style={{
                        background: msg.role === "user" ? "#4ECDC4" : "#667EEA",
                        boxShadow:
                          msg.role === "user"
                            ? "0 0 4px #4ECDC4"
                            : "0 0 4px #667EEA",
                      }}
                    />
                    <div
                      className="absolute bottom-1 left-1 w-1.5 h-1.5 rounded-full"
                      style={{
                        background: msg.role === "user" ? "#4ECDC4" : "#667EEA",
                        boxShadow:
                          msg.role === "user"
                            ? "0 0 4px #4ECDC4"
                            : "0 0 4px #667EEA",
                      }}
                    />
                    <div
                      className="absolute bottom-1 right-1 w-1.5 h-1.5 rounded-full"
                      style={{
                        background: msg.role === "user" ? "#4ECDC4" : "#667EEA",
                        boxShadow:
                          msg.role === "user"
                            ? "0 0 4px #4ECDC4"
                            : "0 0 4px #667EEA",
                      }}
                    />

                    {/* 扫描线纹理 */}
                    <div
                      className="absolute inset-0 pointer-events-none rounded-lg"
                      style={{
                        backgroundImage:
                          msg.role === "user"
                            ? "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(78, 205, 196, 0.03) 2px, rgba(78, 205, 196, 0.03) 4px)"
                            : "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(102, 126, 234, 0.03) 2px, rgba(102, 126, 234, 0.03) 4px)",
                      }}
                    />

                    {msg.content}
                  </div>
                  <div
                    className={`text-xs font-mono px-1 ${msg.role === "user" ? "text-cyan-400 text-right" : "text-purple-400"}`}
                  >
                    {msg.timestamp.toLocaleTimeString("zh-CN", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* 正在输入指示器 */}
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
                className="rounded-lg px-4 py-3 flex items-center gap-2 relative"
                style={{
                  background:
                    "linear-gradient(135deg, #1A1D2E 0%, #2C3E50 100%)",
                  border: "2px solid #667EEA",
                  boxShadow: "0 0 16px rgba(102, 126, 234, 0.4)",
                }}
              >
                <div className="flex gap-1">
                  <span
                    className="w-2 h-2 rounded-full animate-bounce"
                    style={{
                      background: "#667EEA",
                      boxShadow: "0 0 4px #667EEA",
                      animationDelay: "0ms",
                    }}
                  />
                  <span
                    className="w-2 h-2 rounded-full animate-bounce"
                    style={{
                      background: "#667EEA",
                      boxShadow: "0 0 4px #667EEA",
                      animationDelay: "150ms",
                    }}
                  />
                  <span
                    className="w-2 h-2 rounded-full animate-bounce"
                    style={{
                      background: "#667EEA",
                      boxShadow: "0 0 4px #667EEA",
                      animationDelay: "300ms",
                    }}
                  />
                </div>
                <span className="text-sm text-purple-400 font-mono">
                  正在输入...
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 自定义滚动条样式 */}
      <style>{`
        .custom-scrollbar-retro::-webkit-scrollbar {
          width: 12px;
        }
        .custom-scrollbar-retro::-webkit-scrollbar-track {
          background: rgba(26, 29, 46, 0.5);
          border-left: 2px solid #4ECDC4;
        }
        .custom-scrollbar-retro::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #4ECDC4 0%, #44A08D 100%);
          border-radius: 6px;
          box-shadow: 0 0 8px rgba(78, 205, 196, 0.6);
        }
        .custom-scrollbar-retro::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, #5EDDD4 0%, #54B09D 100%);
          box-shadow: 0 0 12px rgba(78, 205, 196, 0.8);
        }
      `}</style>
    </div>
  );
}

/**
 * 🌸 Neo Tokyo Night 主题
 * 玻璃拟态 + 樱粉渐变 + 霓虹青光晕 + 自定义滚动条
 */
function NeoTokyoTheme({ messages }: { messages: Message[] }) {
  return (
    <div
      className="rounded-lg overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #1A1D2E 0%, #2C3E50 100%)",
        border: "2px solid rgba(255, 107, 157, 0.5)",
        boxShadow: "0 0 24px rgba(255, 107, 157, 0.3)",
        height: "600px",
      }}
    >
      <div className="h-full flex flex-col">
        {/* 头部 */}
        <div
          className="px-6 py-4 border-b-2 relative overflow-hidden"
          style={{
            borderColor: "rgba(255, 107, 157, 0.5)",
            background: "rgba(255, 107, 157, 0.1)",
            backdropFilter: "blur(12px)",
          }}
        >
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
            }}
          />
          <h3 className="text-xl font-bold text-pink-400">
            🌸 Neo Tokyo Night Chat
          </h3>
          <p className="text-sm text-pink-300 mt-1">
            Glass morphism + Sakura gradient
          </p>
        </div>

        {/* 聊天容器 */}
        <div
          className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar-tokyo"
          style={{
            background: "linear-gradient(135deg, #1A1D2E 0%, #2C3E50 100%)",
          }}
        >
          {messages.map((msg, index) => (
            <div key={msg.id}>
              {/* 日期分割线 */}
              {index === 0 && (
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="flex-1 h-px"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, rgba(255, 107, 157, 0.5), transparent)",
                    }}
                  />
                  <div
                    className="text-xs text-pink-300 px-3 py-1 rounded overflow-hidden relative"
                    style={{
                      background: "rgba(255, 107, 157, 0.15)",
                      backdropFilter: "blur(12px)",
                      border: "1px solid rgba(255, 107, 157, 0.5)",
                    }}
                  >
                    <div
                      className="absolute top-0 left-0 right-0 h-px"
                      style={{
                        background:
                          "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                      }}
                    />
                    {msg.timestamp.toLocaleDateString("zh-CN", {
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                  <div
                    className="flex-1 h-px"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, rgba(255, 107, 157, 0.5), transparent)",
                    }}
                  />
                </div>
              )}

              <div
                className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                  style={{
                    background:
                      msg.role === "user"
                        ? "linear-gradient(135deg, #FF6B9D 0%, #C44569 100%)"
                        : "linear-gradient(135deg, #4ECDC4 0%, #44A08D 100%)",
                    boxShadow:
                      msg.role === "user"
                        ? "0 0 16px rgba(255, 107, 157, 0.6)"
                        : "0 0 16px rgba(78, 205, 196, 0.6)",
                    border:
                      msg.role === "user"
                        ? "2px solid rgba(255, 107, 157, 0.5)"
                        : "2px solid rgba(78, 205, 196, 0.5)",
                  }}
                >
                  {msg.role === "user" ? "U" : "AI"}
                </div>
                <div className="flex flex-col gap-1">
                  <div
                    className="rounded-lg px-4 py-3 max-w-md relative overflow-hidden whitespace-pre-wrap"
                    style={{
                      background:
                        msg.role === "user"
                          ? "rgba(255, 107, 157, 0.15)"
                          : "rgba(78, 205, 196, 0.15)",
                      backdropFilter: "blur(12px)",
                      border:
                        msg.role === "user"
                          ? "2px solid rgba(255, 107, 157, 0.5)"
                          : "2px solid rgba(78, 205, 196, 0.5)",
                      boxShadow:
                        msg.role === "user"
                          ? "0 0 20px rgba(255, 107, 157, 0.3), inset 0 1px 0 rgba(255,255,255,0.2)"
                          : "0 0 20px rgba(78, 205, 196, 0.3), inset 0 1px 0 rgba(255,255,255,0.2)",
                      color: msg.role === "user" ? "#FFE5EC" : "#E0F7F5",
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
                    <div
                      className={`absolute top-2 w-8 h-px opacity-50 ${msg.role === "user" ? "right-2 bg-pink-300" : "left-2 bg-cyan-300"}`}
                    />
                    <div
                      className={`absolute top-3 w-6 h-px opacity-30 ${msg.role === "user" ? "right-2 bg-pink-300" : "left-2 bg-cyan-300"}`}
                    />

                    {msg.content}
                  </div>
                  <div
                    className={`text-xs px-1 ${msg.role === "user" ? "text-pink-300 text-right" : "text-cyan-300"}`}
                  >
                    {msg.timestamp.toLocaleTimeString("zh-CN", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* 正在输入指示器 */}
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
                className="rounded-lg px-4 py-3 flex items-center gap-2 relative overflow-hidden"
                style={{
                  background: "rgba(78, 205, 196, 0.15)",
                  backdropFilter: "blur(12px)",
                  border: "2px solid rgba(78, 205, 196, 0.5)",
                  boxShadow: "0 0 20px rgba(78, 205, 196, 0.3)",
                }}
              >
                <div className="flex gap-1">
                  <span
                    className="w-2 h-2 rounded-full animate-bounce"
                    style={{
                      background: "#4ECDC4",
                      boxShadow: "0 0 8px #4ECDC4",
                      animationDelay: "0ms",
                    }}
                  />
                  <span
                    className="w-2 h-2 rounded-full animate-bounce"
                    style={{
                      background: "#4ECDC4",
                      boxShadow: "0 0 8px #4ECDC4",
                      animationDelay: "150ms",
                    }}
                  />
                  <span
                    className="w-2 h-2 rounded-full animate-bounce"
                    style={{
                      background: "#4ECDC4",
                      boxShadow: "0 0 8px #4ECDC4",
                      animationDelay: "300ms",
                    }}
                  />
                </div>
                <span className="text-sm text-cyan-300">正在输入...</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 自定义滚动条样式 */}
      <style>{`
        .custom-scrollbar-tokyo::-webkit-scrollbar {
          width: 12px;
        }
        .custom-scrollbar-tokyo::-webkit-scrollbar-track {
          background: rgba(26, 29, 46, 0.5);
          border-left: 2px solid rgba(255, 107, 157, 0.3);
        }
        .custom-scrollbar-tokyo::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, rgba(255, 107, 157, 0.6) 0%, rgba(78, 205, 196, 0.6) 100%);
          border-radius: 6px;
          backdrop-filter: blur(12px);
        }
        .custom-scrollbar-tokyo::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, rgba(255, 107, 157, 0.8) 0%, rgba(78, 205, 196, 0.8) 100%);
        }
      `}</style>
    </div>
  );
}

/**
 * ⛩️ Cyber Shrine 主题
 * 金色神圣 + 神社红 + 雾灰 + 浮世绘纹样
 */
function CyberShrineTheme({ messages }: { messages: Message[] }) {
  return (
    <div
      className="rounded-lg overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #1B4D5C 0%, #2C3E50 100%)",
        border: "2px solid #D4AF37",
        boxShadow: "0 4px 16px rgba(212, 175, 55, 0.3)",
        height: "600px",
      }}
    >
      <div className="h-full flex flex-col">
        {/* 头部 */}
        <div
          className="px-6 py-4 border-b-2 relative"
          style={{
            borderColor: "#D4AF37",
            background: "rgba(212, 175, 55, 0.1)",
          }}
        >
          <h3 className="text-xl font-bold text-amber-400">
            ⛩️ Cyber Shrine Chat
          </h3>
          <p className="text-sm text-amber-300 mt-1">
            Sacred gold + Shrine red
          </p>
        </div>

        {/* 聊天容器 */}
        <div
          className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar-shrine"
          style={{
            background: "linear-gradient(135deg, #1B4D5C 0%, #2C3E50 100%)",
          }}
        >
          {messages.map((msg, index) => (
            <div key={msg.id}>
              {/* 日期分割线 */}
              {index === 0 && (
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="flex-1 h-px"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, #D4AF37, transparent)",
                    }}
                  />
                  <div
                    className="text-xs text-amber-300 px-3 py-1 rounded relative"
                    style={{
                      background: "rgba(212, 175, 55, 0.15)",
                      border: "1px solid #D4AF37",
                    }}
                  >
                    <div className="absolute top-1 left-1/2 transform -translate-x-1/2 text-xs opacity-30">
                      ⛩️
                    </div>
                    {msg.timestamp.toLocaleDateString("zh-CN", {
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                  <div
                    className="flex-1 h-px"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, #D4AF37, transparent)",
                    }}
                  />
                </div>
              )}

              <div
                className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                  style={{
                    background:
                      msg.role === "user"
                        ? "linear-gradient(135deg, #C85A54 0%, #A0463F 100%)"
                        : "linear-gradient(135deg, #D4AF37 0%, #B8941E 100%)",
                    boxShadow:
                      msg.role === "user"
                        ? "0 4px 8px rgba(200, 90, 84, 0.4)"
                        : "0 4px 8px rgba(212, 175, 55, 0.4)",
                    border:
                      msg.role === "user"
                        ? "2px solid #C85A54"
                        : "2px solid #D4AF37",
                  }}
                >
                  {msg.role === "user" ? "U" : "AI"}
                </div>
                <div className="flex flex-col gap-1">
                  <div
                    className="rounded-lg px-4 py-3 max-w-md relative whitespace-pre-wrap"
                    style={{
                      background:
                        msg.role === "user"
                          ? "linear-gradient(135deg, rgba(200, 90, 84, 0.2) 0%, rgba(160, 70, 63, 0.2) 100%)"
                          : "linear-gradient(135deg, rgba(212, 175, 55, 0.15) 0%, rgba(184, 148, 30, 0.15) 100%)",
                      border:
                        msg.role === "user"
                          ? "2px solid #C85A54"
                          : "2px solid #D4AF37",
                      boxShadow:
                        msg.role === "user"
                          ? "0 4px 12px rgba(200, 90, 84, 0.3), inset 0 1px 0 rgba(255,255,255,0.1)"
                          : "0 4px 12px rgba(212, 175, 55, 0.3), inset 0 1px 0 rgba(255,255,255,0.1)",
                      color: msg.role === "user" ? "#FFE5E0" : "#FFF8E1",
                    }}
                  >
                    {/* 墨迹/和纸纹理 */}
                    <div
                      className="absolute inset-0 pointer-events-none rounded-lg opacity-10"
                      style={{
                        backgroundImage:
                          msg.role === "user"
                            ? "radial-gradient(circle at 20% 30%, rgba(0,0,0,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(0,0,0,0.2) 0%, transparent 50%)"
                            : "repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)",
                      }}
                    />

                    {/* 装饰纹样 */}
                    <div
                      className={`absolute top-2 text-xs opacity-50 ${msg.role === "user" ? "right-2" : "left-2"}`}
                    >
                      {msg.role === "user" ? "⛩️" : "✨"}
                    </div>

                    {msg.content}
                  </div>
                  <div
                    className={`text-xs px-1 ${msg.role === "user" ? "text-red-300 text-right" : "text-amber-300"}`}
                  >
                    {msg.timestamp.toLocaleTimeString("zh-CN", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* 正在输入指示器 */}
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
                className="rounded-lg px-4 py-3 flex items-center gap-2 relative"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(212, 175, 55, 0.15) 0%, rgba(184, 148, 30, 0.15) 100%)",
                  border: "2px solid #D4AF37",
                  boxShadow: "0 4px 12px rgba(212, 175, 55, 0.3)",
                }}
              >
                <div className="flex gap-1">
                  <span
                    className="w-2 h-2 rounded-full animate-bounce"
                    style={{
                      background: "#D4AF37",
                      boxShadow: "0 0 6px #D4AF37",
                      animationDelay: "0ms",
                    }}
                  />
                  <span
                    className="w-2 h-2 rounded-full animate-bounce"
                    style={{
                      background: "#D4AF37",
                      boxShadow: "0 0 6px #D4AF37",
                      animationDelay: "150ms",
                    }}
                  />
                  <span
                    className="w-2 h-2 rounded-full animate-bounce"
                    style={{
                      background: "#D4AF37",
                      boxShadow: "0 0 6px #D4AF37",
                      animationDelay: "300ms",
                    }}
                  />
                </div>
                <span className="text-sm text-amber-300">正在输入...</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 自定义滚动条样式 */}
      <style>{`
        .custom-scrollbar-shrine::-webkit-scrollbar {
          width: 12px;
        }
        .custom-scrollbar-shrine::-webkit-scrollbar-track {
          background: rgba(27, 77, 92, 0.5);
          border-left: 2px solid #D4AF37;
        }
        .custom-scrollbar-shrine::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #D4AF37 0%, #B8941E 100%);
          border-radius: 6px;
        }
        .custom-scrollbar-shrine::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, #E4BF47 0%, #C8A42E 100%);
        }
      `}</style>
    </div>
  );
}

/**
 * ☁️ Dreamy Lo-fi 主题
 * 抹茶绿 + 淡樱粉 + 金色 + 柔和渐变
 */
function DreamyLofiTheme({ messages }: { messages: Message[] }) {
  return (
    <div
      className="rounded-lg overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #F5F1E8 0%, #E8E4D9 100%)",
        border: "2px solid rgba(123, 160, 91, 0.5)",
        boxShadow: "0 4px 16px rgba(123, 160, 91, 0.2)",
        height: "600px",
      }}
    >
      <div className="h-full flex flex-col">
        {/* 头部 */}
        <div
          className="px-6 py-4 border-b-2 relative"
          style={{
            borderColor: "rgba(123, 160, 91, 0.5)",
            background: "rgba(123, 160, 91, 0.1)",
          }}
        >
          <h3 className="text-xl font-bold text-green-700">
            ☁️ Dreamy Lo-fi Chat
          </h3>
          <p className="text-sm text-green-600 mt-1">
            Matcha green + Soft sakura
          </p>
        </div>

        {/* 聊天容器 */}
        <div
          className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar-lofi"
          style={{
            background: "linear-gradient(135deg, #F5F1E8 0%, #E8E4D9 100%)",
          }}
        >
          {messages.map((msg, index) => (
            <div key={msg.id}>
              {/* 日期分割线 */}
              {index === 0 && (
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="flex-1 h-px"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, rgba(123, 160, 91, 0.5), transparent)",
                    }}
                  />
                  <div
                    className="text-xs text-green-700 px-3 py-1 rounded relative"
                    style={{
                      background: "rgba(123, 160, 91, 0.15)",
                      border: "1px solid rgba(123, 160, 91, 0.5)",
                    }}
                  >
                    <div className="absolute top-1 left-1/2 transform -translate-x-1/2 text-xs opacity-30">
                      ☁️
                    </div>
                    {msg.timestamp.toLocaleDateString("zh-CN", {
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                  <div
                    className="flex-1 h-px"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, rgba(123, 160, 91, 0.5), transparent)",
                    }}
                  />
                </div>
              )}

              <div
                className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                  style={{
                    background:
                      msg.role === "user"
                        ? "linear-gradient(135deg, #FFB6C1 0%, #FFA0B4 100%)"
                        : "linear-gradient(135deg, #7BA05B 0%, #6A8F4A 100%)",
                    boxShadow:
                      msg.role === "user"
                        ? "0 4px 8px rgba(255, 182, 193, 0.3)"
                        : "0 4px 8px rgba(123, 160, 91, 0.3)",
                    border:
                      msg.role === "user"
                        ? "2px solid rgba(255, 182, 193, 0.5)"
                        : "2px solid rgba(123, 160, 91, 0.5)",
                  }}
                >
                  {msg.role === "user" ? "U" : "AI"}
                </div>
                <div className="flex flex-col gap-1">
                  <div
                    className="rounded-lg px-4 py-3 max-w-md relative whitespace-pre-wrap"
                    style={{
                      background:
                        msg.role === "user"
                          ? "linear-gradient(135deg, rgba(255, 182, 193, 0.3) 0%, rgba(255, 160, 180, 0.3) 100%)"
                          : "linear-gradient(135deg, rgba(123, 160, 91, 0.2) 0%, rgba(106, 143, 74, 0.2) 100%)",
                      border:
                        msg.role === "user"
                          ? "2px solid rgba(255, 182, 193, 0.5)"
                          : "2px solid rgba(123, 160, 91, 0.5)",
                      boxShadow:
                        msg.role === "user"
                          ? "0 4px 12px rgba(255, 182, 193, 0.2)"
                          : "0 4px 12px rgba(123, 160, 91, 0.2)",
                      color: msg.role === "user" ? "#5A4A42" : "#3A4A2A",
                    }}
                  >
                    {/* 云朵/星星装饰 */}
                    <div
                      className={`absolute top-1 text-xs opacity-40 ${msg.role === "user" ? "right-2" : "left-2"}`}
                    >
                      {msg.role === "user" ? "☁️" : "✨"}
                    </div>

                    {/* 柔和渐变 */}
                    <div
                      className="absolute inset-0 pointer-events-none rounded-lg opacity-20"
                      style={{
                        background:
                          msg.role === "user"
                            ? "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.5) 0%, transparent 50%)"
                            : "radial-gradient(circle at 70% 30%, rgba(255,255,255,0.5) 0%, transparent 50%)",
                      }}
                    />

                    {msg.content}
                  </div>
                  <div
                    className={`text-xs px-1 ${msg.role === "user" ? "text-pink-600 text-right" : "text-green-700"}`}
                  >
                    {msg.timestamp.toLocaleTimeString("zh-CN", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* 正在输入指示器 */}
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
                className="rounded-lg px-4 py-3 flex items-center gap-2 relative"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(123, 160, 91, 0.2) 0%, rgba(106, 143, 74, 0.2) 100%)",
                  border: "2px solid rgba(123, 160, 91, 0.5)",
                  boxShadow: "0 4px 12px rgba(123, 160, 91, 0.2)",
                }}
              >
                <div className="flex gap-1">
                  <span
                    className="w-2 h-2 rounded-full animate-bounce"
                    style={{
                      background: "#7BA05B",
                      boxShadow: "0 0 6px rgba(123, 160, 91, 0.5)",
                      animationDelay: "0ms",
                    }}
                  />
                  <span
                    className="w-2 h-2 rounded-full animate-bounce"
                    style={{
                      background: "#7BA05B",
                      boxShadow: "0 0 6px rgba(123, 160, 91, 0.5)",
                      animationDelay: "150ms",
                    }}
                  />
                  <span
                    className="w-2 h-2 rounded-full animate-bounce"
                    style={{
                      background: "#7BA05B",
                      boxShadow: "0 0 6px rgba(123, 160, 91, 0.5)",
                      animationDelay: "300ms",
                    }}
                  />
                </div>
                <span className="text-sm text-green-700">正在输入...</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 自定义滚动条样式 */}
      <style>{`
        .custom-scrollbar-lofi::-webkit-scrollbar {
          width: 12px;
        }
        .custom-scrollbar-lofi::-webkit-scrollbar-track {
          background: rgba(245, 241, 232, 0.5);
          border-left: 2px solid rgba(123, 160, 91, 0.3);
        }
        .custom-scrollbar-lofi::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, rgba(123, 160, 91, 0.6) 0%, rgba(106, 143, 74, 0.6) 100%);
          border-radius: 6px;
        }
        .custom-scrollbar-lofi::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, rgba(123, 160, 91, 0.8) 0%, rgba(106, 143, 74, 0.8) 100%);
        }
      `}</style>
    </div>
  );
}

/**
 * 🌊 Vaporwave 主题
 * 霓虹粉 + 赛博青 + 紫色 + 三色渐变 + 网格纹理
 */
function VaporwaveTheme({ messages }: { messages: Message[] }) {
  return (
    <div
      className="rounded-lg overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #240046 0%, #3C096C 100%)",
        border: "2px solid rgba(157, 78, 221, 0.5)",
        boxShadow: "0 0 24px rgba(157, 78, 221, 0.4)",
        height: "600px",
      }}
    >
      <div className="h-full flex flex-col">
        {/* 头部 */}
        <div
          className="px-6 py-4 border-b-2 relative overflow-hidden"
          style={{
            borderColor: "rgba(157, 78, 221, 0.5)",
            background: "rgba(157, 78, 221, 0.15)",
            backdropFilter: "blur(12px)",
          }}
        >
          <div
            className="absolute top-0 left-0 right-0 h-1"
            style={{
              background:
                "linear-gradient(90deg, #FF006E 0%, #9D4EDD 50%, #00F5FF 100%)",
            }}
          />
          <h3 className="text-xl font-bold text-pink-400 font-mono">
            🌊 Vaporwave Chat
          </h3>
          <p className="text-sm text-purple-300 mt-1 font-mono">
            Neon pink + Cyber cyan + Grid texture
          </p>
        </div>

        {/* 聊天容器 */}
        <div
          className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar-vaporwave"
          style={{
            background: "linear-gradient(135deg, #240046 0%, #3C096C 100%)",
          }}
        >
          {messages.map((msg, index) => (
            <div key={msg.id}>
              {/* 日期分割线 */}
              {index === 0 && (
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="flex-1 h-px"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, rgba(157, 78, 221, 0.5), transparent)",
                    }}
                  />
                  <div
                    className="text-xs text-purple-300 px-3 py-1 rounded overflow-hidden relative font-mono"
                    style={{
                      background: "rgba(157, 78, 221, 0.2)",
                      backdropFilter: "blur(12px)",
                      border: "1px solid rgba(157, 78, 221, 0.5)",
                    }}
                  >
                    <div
                      className="absolute top-0 left-0 right-0 h-1"
                      style={{
                        background:
                          "linear-gradient(90deg, #FF006E 0%, #9D4EDD 50%, #00F5FF 100%)",
                      }}
                    />
                    {msg.timestamp.toLocaleDateString("zh-CN", {
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                  <div
                    className="flex-1 h-px"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, rgba(157, 78, 221, 0.5), transparent)",
                    }}
                  />
                </div>
              )}

              <div
                className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                  style={{
                    background:
                      msg.role === "user"
                        ? "linear-gradient(135deg, #FF006E 0%, #D90368 100%)"
                        : "linear-gradient(135deg, #00F5FF 0%, #00D4E6 100%)",
                    boxShadow:
                      msg.role === "user"
                        ? "0 0 20px rgba(255, 0, 110, 0.6)"
                        : "0 0 20px rgba(0, 245, 255, 0.6)",
                    border:
                      msg.role === "user"
                        ? "2px solid rgba(255, 0, 110, 0.5)"
                        : "2px solid rgba(0, 245, 255, 0.5)",
                  }}
                >
                  {msg.role === "user" ? "U" : "AI"}
                </div>
                <div className="flex flex-col gap-1">
                  <div
                    className="rounded-lg px-4 py-3 max-w-md relative overflow-hidden whitespace-pre-wrap"
                    style={{
                      background:
                        msg.role === "user"
                          ? "linear-gradient(135deg, rgba(255, 0, 110, 0.2) 0%, rgba(217, 3, 104, 0.2) 100%)"
                          : "linear-gradient(135deg, rgba(0, 245, 255, 0.15) 0%, rgba(0, 212, 230, 0.15) 100%)",
                      backdropFilter: "blur(12px)",
                      border:
                        msg.role === "user"
                          ? "2px solid rgba(255, 0, 110, 0.5)"
                          : "2px solid rgba(0, 245, 255, 0.5)",
                      boxShadow:
                        msg.role === "user"
                          ? "0 0 24px rgba(255, 0, 110, 0.4), inset 0 1px 0 rgba(255,255,255,0.1)"
                          : "0 0 24px rgba(0, 245, 255, 0.4), inset 0 1px 0 rgba(255,255,255,0.1)",
                      color: msg.role === "user" ? "#FFE5F0" : "#E0FFFF",
                    }}
                  >
                    {/* 网格纹理 */}
                    <div
                      className="absolute inset-0 pointer-events-none rounded-lg opacity-10"
                      style={{
                        backgroundImage:
                          msg.role === "user"
                            ? "linear-gradient(rgba(255,0,110,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,0,110,0.3) 1px, transparent 1px)"
                            : "linear-gradient(rgba(0,245,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,245,255,0.3) 1px, transparent 1px)",
                        backgroundSize: "20px 20px",
                      }}
                    />

                    {/* 三色渐变装饰 */}
                    <div
                      className="absolute top-0 left-0 right-0 h-1"
                      style={{
                        background:
                          msg.role === "user"
                            ? "linear-gradient(90deg, #FF006E 0%, #9D4EDD 50%, #00F5FF 100%)"
                            : "linear-gradient(90deg, #00F5FF 0%, #9D4EDD 50%, #FF006E 100%)",
                      }}
                    />

                    {msg.content}
                  </div>
                  <div
                    className={`text-xs px-1 font-mono ${msg.role === "user" ? "text-pink-300 text-right" : "text-cyan-300"}`}
                  >
                    {msg.timestamp.toLocaleTimeString("zh-CN", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* 正在输入指示器 */}
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
                className="rounded-lg px-4 py-3 flex items-center gap-2 relative overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(0, 245, 255, 0.15) 0%, rgba(0, 212, 230, 0.15) 100%)",
                  backdropFilter: "blur(12px)",
                  border: "2px solid rgba(0, 245, 255, 0.5)",
                  boxShadow: "0 0 24px rgba(0, 245, 255, 0.4)",
                }}
              >
                <div className="flex gap-1">
                  <span
                    className="w-2 h-2 rounded-full animate-bounce"
                    style={{
                      background: "#00F5FF",
                      boxShadow: "0 0 10px #00F5FF",
                      animationDelay: "0ms",
                    }}
                  />
                  <span
                    className="w-2 h-2 rounded-full animate-bounce"
                    style={{
                      background: "#00F5FF",
                      boxShadow: "0 0 10px #00F5FF",
                      animationDelay: "150ms",
                    }}
                  />
                  <span
                    className="w-2 h-2 rounded-full animate-bounce"
                    style={{
                      background: "#00F5FF",
                      boxShadow: "0 0 10px #00F5FF",
                      animationDelay: "300ms",
                    }}
                  />
                </div>
                <span className="text-sm text-cyan-300 font-mono">
                  正在输入...
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 自定义滚动条样式 */}
      <style>{`
        .custom-scrollbar-vaporwave::-webkit-scrollbar {
          width: 12px;
        }
        .custom-scrollbar-vaporwave::-webkit-scrollbar-track {
          background: rgba(36, 0, 70, 0.5);
          border-left: 2px solid rgba(157, 78, 221, 0.3);
        }
        .custom-scrollbar-vaporwave::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, rgba(255, 0, 110, 0.6) 0%, rgba(0, 245, 255, 0.6) 100%);
          border-radius: 6px;
          backdrop-filter: blur(12px);
        }
        .custom-scrollbar-vaporwave::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, rgba(255, 0, 110, 0.8) 0%, rgba(0, 245, 255, 0.8) 100%);
        }
      `}</style>
    </div>
  );
}
