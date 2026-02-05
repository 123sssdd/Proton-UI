import React from "react";
import { FeatureCard } from "../FeatureCard";
import styles from "./CoreFeatures.module.css";

const coreFeatures = [
  {
    icon: "⚡",
    title: "流式交互性能与状态机治理",
    description:
      "自研增量渲染方案，深度管控 SSE 状态机，虚拟补全算法解决 Markdown 解析跳变问题。",
    metrics: [
      { label: "延迟和跳变减少", value: "95%" },
      { label: "渲染效率提升", value: "43%" },
    ],
    highlights: [
      "自研增量渲染方案（React.memo + RAF）",
      "SSE 状态机深度管控",
      "虚拟补全算法解决 Markdown 解析跳变",
    ],
  },
  {
    icon: "🚀",
    title: "零拷贝大文件链路",
    description:
      "基于 Web Worker + Transferable Objects 实现零拷贝大文件处理，消除 UI 阻塞。",
    metrics: [
      { label: "特征值提取优化", value: "10s+ → 200ms" },
      { label: "UI 阻塞", value: "完全消除" },
    ],
    highlights: [
      "Web Worker + Transferable Objects",
      "MD5 抽样哈希计算",
      "带优先级的并发调度器",
      "IndexedDB 状态机实现断点续传",
    ],
    highlight: true,
    badge: {
      text: "🚧 施工中",
      color: "red",
    },
  },
  {
    icon: "⚙️",
    title: "高性能工具链与架构演进",
    description:
      "基于 Rust 的 Rspress 实现毫秒级热启动，tsup 极速产出 ESM/CJS 双格式，Turborepo 任务编排并行化。",
    metrics: [
      { label: "热启动速度", value: "毫秒级" },
      { label: "构建效率提升", value: "约 5 倍" },
    ],
    highlights: [
      "基于 Rust 的 Rspress",
      "tsup 极速产出 ESM/CJS 双格式",
      "Turborepo 任务编排并行化",
    ],
  },
  {
    icon: "🏗️",
    title: "AI 原生驱动的 Monorepo 架构治理",
    description:
      "pnpm Workspaces 单仓多包架构，高内聚、低耦合的模块化布局，pnpm Catalog 全局依赖管理。",
    metrics: [
      { label: "AI 代码生成准确度提升", value: "约 40%" },
      { label: "上下文污染", value: "显著减少" },
    ],
    highlights: [
      "pnpm Workspaces 单仓多包架构",
      "高内聚、低耦合的模块化布局",
      "pnpm Catalog 全局依赖管理",
    ],
  },
  {
    icon: "🎨",
    title: "Headless UI 驱动与 AI 友好",
    description:
      "Headless UI 模式逻辑与样式解耦，Tailwind CSS 原子化 Token，为 AI 辅助编程提供高确定性描述。",
    metrics: [{ label: "代码生成准确度提升", value: "约 40%" }],
    highlights: [
      "Headless UI 模式逻辑与样式解耦",
      "Tailwind CSS 原子化 Token",
      "为 AI 辅助编程提供高确定性描述",
    ],
  },
  {
    icon: "🔄",
    title: "规范化提交流水线与自动化发布",
    description:
      "Husky + CommitLint (cz-git) 规范提交，Changesets 自动版本管理，自动生成 CHANGELOG。",
    metrics: [
      { label: "工程化闭环", value: "完整实现" },
      { label: "多包环境发布", value: "严谨可靠" },
    ],
    highlights: [
      "Husky + CommitLint (cz-git)",
      "Changesets 自动版本管理",
      "自动生成 CHANGELOG",
    ],
  },
  {
    icon: "🧪",
    title: "自动化测试与视觉质量工程",
    description:
      "构建基于 Vitest 的单元测试体系，确保 Headless Hooks 逻辑覆盖率；引入 Playwright 视觉回归测试，通过像素级快照对比保障 UI 组件在复杂迭代下的样式一致性。",
    metrics: [
      { label: "CI 流程耗时缩短", value: "70%" },
      { label: "视觉回归测试", value: "像素级" },
    ],
    highlights: [
      "Vitest 单元测试体系",
      "Playwright 视觉回归测试",
      "Turborepo 缓存实现增量测试",
      "像素级快照对比保障样式一致性",
    ],
  },
  {
    icon: "🛡️",
    title: "架构边界守卫与依赖一致性",
    description:
      "集成 eslint-plugin-boundaries 强制执行架构分层（如禁止 Hooks 包依赖 UI 包）。配合 pnpm Catalog 特性建立全局依赖索引，强制执行单一版本策略。",
    metrics: [
      { label: "版本碎片化", value: "完全杜绝" },
      { label: "循环依赖问题", value: "零发生" },
    ],
    highlights: [
      "eslint-plugin-boundaries 强制架构分层",
      "pnpm Catalog 全局依赖索引",
      "单一版本策略",
      "杜绝跨包协作中的版本碎片化",
    ],
  },
  {
    icon: "🎮",
    title: "现代化像素设计系统",
    description:
      "不仅仅是复古！融合赛博朋克与现代交互体验的新一代像素设计语言。通过 CSS 像素化渲染、像素字体与高帧率动画，打造既有怀旧情怀又具未来感的视觉冲击。",
    metrics: [
      { label: "视觉识别度", value: "极高" },
      { label: "交互体验", value: "AI Native" },
    ],
    highlights: [
      "CSS image-rendering: pixelated",
      "Modern + Retro 融合设计",
      "高帧率像素动画",
      "复古未来主义 (Retro Futurism)",
    ],
  },
];

export const CoreFeatures: React.FC = () => {
  return (
    <section
      className={`${styles.coreFeaturesSection} core-features-container`}
    >
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>🎯 核心技术亮点</h2>
        <p className={styles.sectionDescription}>
          解决 AI 流式交互与海量数据渲染的性能瓶颈，展示工程深度和架构思维
        </p>
        <div className={styles.grid}>
          {coreFeatures.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};
