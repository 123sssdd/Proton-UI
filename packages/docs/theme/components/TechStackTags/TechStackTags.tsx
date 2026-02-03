import React from "react";
import styles from "./TechStackTags.module.css";

const techStacks = [
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Rspress",
  "tsup",
  "Vite",
  "Vitest",
  "Playwright",
  "pnpm",
  "Turborepo",
  "Changesets",
];

export const TechStackTags: React.FC = () => {
  return (
    <div className={styles.techStackTags}>
      {techStacks.map((tech, index) => (
        <span key={index} className={styles.tag}>
          {tech}
        </span>
      ))}
    </div>
  );
};
