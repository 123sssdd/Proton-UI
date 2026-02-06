> 🚧 **维护中警告**：本组件库目前由我单人高强度迭代维护中，API 可能会有 Breaking Changes，暂未发布至 NPM，仅供尝鲜和学习使用！

直奔主题：我开源了 **[Proton UI](https://github.com/123sssdd/Proton-UI)**，这是一个**AI 原生**的**赛博朋克风（或许） React 组件库**。

目前项目**只有我一个人在维护**（是的，One Man Army 🫡），发出来是想看看有没有志同道合的佬感兴趣，求个 Star ⭐️ 或者一起以此为基础搞点事情！


💡Tip：因为是 headless 架构，佬们也可以只导入 hooks 和 streaming 包（基础组件逻辑&流式输出&虚拟补全&RAF节流），自己写UI定制组件，playground 的赛博朋克风 只是一个范例

---

目前 部分效果：

![1770370015814_960x621](https://github.com/user-attachments/assets/6bb69cf3-e663-44dc-bafa-57ce59394cbb)

![1770370205884_738x477](https://github.com/user-attachments/assets/93be6517-1cb7-4c31-9493-1c8c6b9d7279)

<img width="632" height="408" alt="image" src="https://github.com/user-attachments/assets/88b26486-4ea1-487e-97ff-334cfdcea8b6" />

![1770368146214_960x621](https://github.com/user-attachments/assets/50095290-1959-4a77-ac88-8ca776e5d5e8)


# **⚠️⚠️⚠️风格倾向： 赛博朋克风 + 部分像素化处理，佬们可以提提建议！！！（技术力有限，正在尝试）**

----


🕹️ **Playground（网页端预览组件效果，移动端暂时不适配）**: [https://proton-ui-playground.vercel.app](https://proton-ui-playground.vercel.app) 
（请开clash代理访问，因为是用vercel 部署的）
（正在向 赛博朋克风 + 部分像素化调整）（同时尝试增加更多基础组件）

🔗 **GitHub**: [https://github.com/123sssdd/Proton-UI](https://github.com/123sssdd/Proton-UI)



📚 **文档**: [https://proton-ui.vercel.app](https://proton-ui.vercel.app) (组件效果预览 修复中，可以先看看架构和组件介绍)

国内访问：正在部署中🚧

---


## 缘起：一个人的"叛逆"重构

之前在实验室做科研 AI 项目的时候，因为要处理海量的气象原始数据、模拟仿真视频，还要跑各种 Agent 模型。我发现市面上的组件库要么"太严肃"，要么在处理 AI 流式输出和 GB 级数据传输时"太拉胯"。

索性我就把整个项目重构了，并把这套 **"扛得住大数据传输，又兼顾 审美"** 的组件库单独抽离了出来，也就是现在的 **Proton UI**。

我不想做一个"平平无奇"的 B 端组件库。为此，我进行了赛博朋克+现代交互+像素风体验的尝试：

- **赛博朋克**：粒子特效、玻璃拟态、霓虹色+多层发光、装饰性边框

- **像素化处理**：CRT 扫描线、文泉驿点阵字体

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

项目现在只有我一个人在肝（看那醒目的 🚧 标志），非常欢迎各位佬来 **Star** ⭐️，提 Issue，或者 Pr！

> 🚧 **再次提醒**：组件库维护中，暂未发布至 npm，生产环境请谨慎使用。

---

*Made with ❤️ by 123sssdd*
