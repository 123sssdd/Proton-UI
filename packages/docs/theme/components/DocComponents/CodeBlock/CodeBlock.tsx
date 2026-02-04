import React, { useState } from "react";
import type { CodeBlockProps } from "./types";
import styles from "./CodeBlock.module.css";

/**
 * CodeBlock 组件
 *
 * 显示带语法高亮的代码块。
 * 支持代码复制、行号显示、特定行高亮等功能。
 */
export const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language,
  showLineNumbers = false,
  highlightLines = [],
  filename,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // 降级方案：使用 document.execCommand
      const textarea = document.createElement("textarea");
      textarea.value = code;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      const success = document.execCommand("copy");
      document.body.removeChild(textarea);
      if (success) {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    }
  };

  // 渲染带行号和高亮的代码
  const renderCodeWithFeatures = () => {
    const lines = code.split("\n");

    if (!showLineNumbers && highlightLines.length === 0) {
      // 简单模式：直接渲染代码
      return <code className={`language-${language}`}>{code}</code>;
    }

    // 高级模式：渲染带行号和高亮的代码
    return (
      <code className={`language-${language}`}>
        {lines.map((line, index) => {
          const lineNumber = index + 1;
          const isHighlighted = highlightLines.includes(lineNumber);

          return (
            <div
              key={lineNumber}
              className={`${styles.codeLine} ${
                isHighlighted ? styles.highlightedLine : ""
              }`}
            >
              {showLineNumbers && (
                <span className={styles.lineNumber}>{lineNumber}</span>
              )}
              <span className={styles.lineContent}>{line || "\n"}</span>
            </div>
          );
        })}
      </code>
    );
  };

  return (
    <div className={styles.codeBlock}>
      {filename && <div className={styles.filename}>{filename}</div>}
      <div className={styles.codeWrapper}>
        <pre className={styles.pre}>{renderCodeWithFeatures()}</pre>
        <button
          className={styles.copyButton}
          onClick={handleCopy}
          aria-label={copied ? "已复制" : "复制代码"}
        >
          {copied ? "✓ 已复制" : "复制"}
        </button>
      </div>
    </div>
  );
};
