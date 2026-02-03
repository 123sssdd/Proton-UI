import { defineConfig } from "rspress/config";
import { pluginPlayground } from "@rspress/plugin-playground";
import path from "path";
import { fileURLToPath } from "url";
// --- ESM 路径兼容处理 ---
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  root: path.join(__dirname, "docs"),
  title: "Proton UI",
  description: "面向 AI 对话场景的现代化 React 组件库 🎮",
  icon: "/logo.svg",
  logo: {
    light: "/logo.svg",
    dark: "/logo.svg",
  },
  // 使用自定义主题
  themeDir: path.join(__dirname, "theme"),
  themeConfig: {
    socialLinks: [
      {
        icon: "github",
        mode: "link",
        content: "https://github.com/123sssdd/Proton-UI",
      },
    ],
    nav: [
      {
        text: "📖 指南",
        link: "/guide/getting-started",
      },
      {
        text: "🎨 组件",
        link: "/components/button",
      },
      {
        text: "📚 API",
        link: "/api/overview",
      },
    ],
    sidebar: {
      "/guide/": [
        {
          text: "🚀 开始",
          items: [
            {
              text: "快速开始",
              link: "/guide/getting-started",
            },
            {
              text: "架构设计",
              link: "/guide/architecture",
            },
            {
              text: "流式渲染原理",
              link: "/guide/streaming",
            },
          ],
        },
      ],
      "/components/": [
        {
          text: "🎯 基础组件",
          items: [
            {
              text: "Button 按钮",
              link: "/components/button",
            },
            {
              text: "Input 输入框",
              link: "/components/input",
            },
            {
              text: "Card 卡片",
              link: "/components/card",
            },
          ],
        },
        {
          text: "💬 对话组件",
          items: [
            {
              text: "Message 消息",
              link: "/components/message",
            },
            {
              text: "ChatContainer 对话容器",
              link: "/components/chat-container",
            },
            {
              text: "StreamingText 流式文本",
              link: "/components/streaming-text",
            },
          ],
        },
      ],
    },
    // 启用暗色模式
    darkMode: true,
  },
  plugins: [
    pluginPlayground({
      defaultDirection: "vertical", // 上下布局
      defaultEditorCollapsed: true, // 代码默认折叠
    }),
  ],
  builderConfig: {
    resolve: {
      alias: {
        "@proton-ui/core": path.resolve(__dirname, "../core/src"),
        "@proton-ui/streaming": path.resolve(__dirname, "../streaming/src"),
      },
    },
    html: {
      tags: [
        {
          tag: "link",
          attrs: {
            rel: "stylesheet",
            href: "/custom.css",
          },
        },
      ],
    },
  },
});
