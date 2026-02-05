# 🎮 Proton UI：我把实验室的科研 AI 项目重构开源了

> 🚧 **维护中警告**：本组件库目前由我单人高强度迭代维护中，API 可能会有 Breaking Changes，暂未发布至 NPM，仅供尝鲜和学习使用！

直奔主题：我开源了 **[Proton UI](https://github.com/123sssdd/Proton-UI)**，这是一个**AI 原生**的**像素风 React 组件库**。

目前项目**只有我一个人在维护**（是的，One Man Army 🫡），发出来是想看看有没有志同道合的佬感兴趣，求个 Star ⭐️ 或者一起以此为基础搞点事情！

🔗 **GitHub**: [https://github.com/123sssdd/Proton-UI](https://github.com/123sssdd/Proton-UI)  
🕹️ **Playground**: [https://proton-ui-playground.vercel.app](https://proton-ui-playground.vercel.app) (施工中)  
📚 **文档**: [https://proton-ui.vercel.app](https://proton-ui.vercel.app) (施工中)

## 缘起：一个人的"叛逆"重构

之前在实验室做科研 AI 项目的时候，因为要处理海量的气象原始数据、模拟仿真视频，还要跑各种 Agent 模型。我发现市面上的组件库要么"太严肃"，要么在处理 AI 流式输出和 GB 级数据传输时"太拉胯"。

索性我就把整个项目重构了，并把这套 **"扛得住大数据传输，又兼顾二次元审美"** 的组件库单独抽离了出来，也就是现在的 **Proton UI**。

## 🎨 不只是复古：现代化像素美学

我不想做一个"平平无奇"的 B 端组件库。为此，我设计了一套完整的 **Pixel Art Design System**。
这可不是简单的贴图，而是融合了赛博朋克与现代交互体验的尝试：

- **CSS 像素化渲染**：`image-rendering: pixelated` 原生支持，清晰锐利。
- **高帧率动画**：拒绝卡顿，像素粒子也能丝滑流动。
- **多主题支持**：Retro Futurism, Neo Tokyo, Cyber Shrine... 总有一款击中你的审美。

## 🚀 硬核技术栈：为 AI 而生

好看的皮囊千篇一律，强悍的灵魂万里挑一。既然是科研出身，性能优化方面我绝对是认真的：

### 1. 🤖 AI 流式交互 (Seamless Streaming)
专为 LLM 设计。我自研了 **增量渲染方案 (React.memo + RAF)**，配合深度管控的 SSE 状态机，让 AI 吐字如丝般顺滑。
更有独家 **虚拟补全算法**，完美解决 Markdown 标签未闭合导致的布局跳变问题。再也不用看 AI 输出到一半时页面疯狂抖动了！

### 2. ⚡️ 零拷贝大文件链路
搞科研留下的"职业病"。面对 GB 级的大文件，我利用 **Web Worker + Transferable Objects** 实现了零拷贝通信。
MD5 抽样哈希计算，特征值提取从 10s+ 优化到 200ms 以内！主线程 UI 绝对不卡，顺滑得像德芙。

### 3. 🏗️ 高性能工具链与架构
- **Monorepo 治理**：基于 **pnpm Workspaces** 的单仓多包架构，模块化布局高内聚低耦合。
- **Rust 驱动**：文档构建迁移到了基于 Rust 的 **Rspress**，毫秒级热启动，开发体验拉满。
- **极速构建**：**tsup** 极速产出 ESM/CJS 双格式，**Turborepo** 并行编排任务，构建效率提升 5 倍！

## 🛡️ AI 友好 & 严谨工程

- **Headless UI 驱动**：逻辑与样式解耦，配合 Tailwind CSS原子化 Token，给 AI 辅助编程（Cursor/Copilot）喂饭吃，代码生成准确度提升 40%。
- **全局依赖管理**：通过 **pnpm Catalog** 统一管理依赖版本，拒绝版本碎片化。

## 🤝 欢迎加入

项目虽然现在只有我一个人在肝（看那醒目的 🚧 标志），但我相信它有潜力成为最酷的 AI 原生组件库。

非常欢迎各位佬来 **Star** ⭐️，提 Issue，或者 Pr！

> 🚧 **再次提醒**：组件库维护中，暂未发布至 npm，生产环境请谨慎使用。

---
*Made with ❤️ by Proton UI*
