import React from "react";
import type { CalloutProps } from "./types";
import styles from "./Callout.module.css";

/**
 * Callout 组件
 *
 * 用于突出显示重要信息、提示或警告的提示框组件。
 * 支持多种类型：info、warning、error、success、tip。
 */
export const Callout: React.FC<CalloutProps> = ({ type, title, children }) => {
  // 根据类型选择图标
  const getIcon = () => {
    switch (type) {
      case "info":
        return "ℹ️";
      case "warning":
        return "⚠️";
      case "error":
        return "❌";
      case "success":
        return "✅";
      case "tip":
        return "💡";
      default:
        return "ℹ️";
    }
  };

  return (
    <div className={`${styles.callout} ${styles[type]}`} role="alert">
      <div className={styles.header}>
        <span className={styles.icon}>{getIcon()}</span>
        {title && <span className={styles.title}>{title}</span>}
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};
