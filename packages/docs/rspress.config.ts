import { defineConfig } from "rspress/config";
// import { pluginPlayground } from "@rspress/plugin-playground";
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
  // MDX 配置
  markdown: {
    mdxRs: false, // 禁用 Rust 版 MDX 解析器，使用 JS 版本以支持 globalComponents
    // 注册全局组件 - 必须在 markdown 配置中
    globalComponents: [
      path.join(
        __dirname,
        "theme/components/DocComponents/DemoBox/DemoBox.tsx"
      ),
      path.join(
        __dirname,
        "theme/components/DocComponents/PropsTable/PropsTable.tsx"
      ),
      path.join(
        __dirname,
        "theme/components/DocComponents/CodeBlock/CodeBlock.tsx"
      ),
      path.join(__dirname, "theme/components/DocComponents/Tabs/Tabs.tsx"),
      path.join(
        __dirname,
        "theme/components/DocComponents/Callout/Callout.tsx"
      ),
      // 演示组件
      path.join(__dirname, "theme/components/demos/QuickStartHighlights.tsx"),
      path.join(__dirname, "theme/components/demos/InputValidationDemo.tsx"),
      path.join(__dirname, "theme/components/demos/StreamingMessageDemo.tsx"),
      path.join(__dirname, "theme/components/demos/BasicChatDemo.tsx"),
      path.join(__dirname, "theme/components/demos/StreamingChatDemo.tsx"),
      path.join(__dirname, "theme/components/demos/LargeMessageListDemo.tsx"),
      path.join(__dirname, "theme/components/demos/ThemedChatDemo.tsx"),
      path.join(__dirname, "theme/components/demos/MessageInputDemo.tsx"),
      path.join(__dirname, "theme/components/demos/StreamingTextDemo.tsx"),
      path.join(__dirname, "theme/components/demos/FullChatDemo.tsx"),
      path.join(__dirname, "theme/components/demos/CombinedEffectsDemo.tsx"),
      path.join(__dirname, "theme/components/demos/ThemeCustomizer.tsx"),
      path.join(__dirname, "theme/components/demos/ThemeGalleryDemo.tsx"),
      path.join(__dirname, "theme/components/demos/ParticleEffectDemo.tsx"),
      path.join(__dirname, "theme/components/demos/PixelatedImageDemo.tsx"),
      path.join(__dirname, "theme/components/demos/ImageFilterWorkshop.tsx"),
      path.join(__dirname, "theme/components/demos/NeonEffectsDemo.tsx"),
      path.join(__dirname, "theme/components/demos/GlassEffectsDemo.tsx"),
      path.join(__dirname, "theme/components/demos/DitheringEffectsDemo.tsx"),
      // @proton-ui/core 组件 - 每个组件单独包装
      path.join(__dirname, "theme/components/wrappers/Button.tsx"),
      path.join(__dirname, "theme/components/wrappers/Input.tsx"),
      path.join(__dirname, "theme/components/wrappers/Card.tsx"),
      path.join(__dirname, "theme/components/wrappers/Message.tsx"),
      path.join(__dirname, "theme/components/wrappers/ChatContainer.tsx"),
      path.join(__dirname, "theme/components/wrappers/MessageInput.tsx"),
      path.join(__dirname, "theme/components/wrappers/ParticleEffect.tsx"),
      path.join(__dirname, "theme/components/wrappers/PixelatedImage.tsx"),
      // @proton-ui/streaming 组件
      path.join(__dirname, "theme/components/wrappers/StreamingText.tsx"),
      // DocTabs 和 DocTabPanel 别名 - 每个组件单独包装
      path.join(__dirname, "theme/components/wrappers/DocTabs.tsx"),
      path.join(__dirname, "theme/components/wrappers/DocTabPanel.tsx"),
    ],
  },
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
              link: "/components/chat/message",
            },
            {
              text: "ChatContainer 对话容器",
              link: "/components/chat/chat-container",
            },
            {
              text: "StreamingText 流式文本",
              link: "/components/streaming-text",
            },
          ],
        },
        {
          text: "✨ 特效组件",
          items: [
            {
              text: "像素特效画廊",
              link: "/components/effects/pixel-effects",
            },
            {
              text: "图片滤镜工坊",
              link: "/components/effects/image-filter-workshop",
            },
          ],
        },
        {
          text: "🎨 主题系统",
          items: [
            {
              text: "主题画廊",
              link: "/components/theme/theme-gallery",
            },
            {
              text: "主题定制器",
              link: "/components/theme/theme-customizer",
            },
          ],
        },
      ],
    },
    // 启用暗色模式
    darkMode: true,
  },
  // plugins: [
  //   pluginPlayground({
  //     defaultDirection: "vertical", // 上下布局
  //     defaultEditorCollapsed: true, // 代码默认折叠
  //     include: [
  //       ["@proton-ui/core", "@proton-ui/core"],
  //       ["react", "react"],
  //       ["@proton-ui/streaming", "@proton-ui/streaming"],
  //     ],
  //   }),
  // ],
  builderConfig: {
    resolve: {
      alias: {
        "@proton-ui/core": path.resolve(__dirname, "../core/dist"),
        "@proton-ui/streaming": path.resolve(__dirname, "../streaming/dist"),
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
