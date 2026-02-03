import React from "react";
import styles from "./TechStack.module.css";

const techStacks = [
  { name: "React 18", category: "框架" },
  { name: "TypeScript", category: "语言" },
  { name: "Tailwind CSS", category: "样式" },
  { name: "Rspress", category: "文档" },
  { name: "tsup", category: "构建" },
  { name: "Vite", category: "构建" },
  { name: "Vitest", category: "测试" },
  { name: "Playwright", category: "测试" },
  { name: "pnpm Workspaces", category: "包管理" },
  { name: "Turborepo", category: "构建" },
  { name: "Changesets", category: "版本" },
];

export const TechStack: React.FC = () => {
  return (
    <div className={styles.techStackSection}>
      <div className={styles.container}>
        <h3 className={styles.title}>
          <span className={styles.icon}>🛠️</span>
          技术栈
        </h3>
        <div className={styles.grid}>
          {techStacks.map((tech, index) => (
            <div key={index} className={styles.techItem}>
              <span className={styles.techName}>{tech.name}</span>
              <span className={styles.techCategory}>{tech.category}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
