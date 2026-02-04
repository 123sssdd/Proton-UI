import React, { useState, cloneElement, isValidElement } from "react";
import type { DemoBoxProps, PropConfig } from "./types";
import styles from "./DemoBox.module.css";
import { CodeBlock } from "../CodeBlock";

/**
 * DemoBox 组件
 *
 * 用于包装所有交互式组件演示的容器组件。
 * 提供统一的演示容器样式、代码展示和属性配置功能。
 */
export const DemoBox: React.FC<DemoBoxProps> = ({
  title,
  description,
  children,
  showCode = true,
  code,
  language = "tsx",
  showProps = false,
  propsConfig = [],
  background = "default",
  fullWidth = false,
}) => {
  // 代码显示/隐藏状态
  const [isCodeVisible, setIsCodeVisible] = useState(false);

  // 属性值状态
  const [propValues, setPropValues] = useState(() =>
    propsConfig.reduce(
      (acc, prop) => ({
        ...acc,
        [prop.name]: prop.defaultValue,
      }),
      {}
    )
  );

  // 处理属性变化
  const handlePropChange = (propName: string, value: unknown) => {
    setPropValues((prev) => ({ ...prev, [propName]: value }));
  };

  // 切换代码显示
  const toggleCode = () => {
    setIsCodeVisible((prev) => !prev);
  };

  // 渲染子组件，如果有属性配置则注入属性值
  const renderChildren = () => {
    if (showProps && isValidElement(children)) {
      return cloneElement(children, propValues);
    }
    return children;
  };

  return (
    <div className={`${styles.demoBox} ${fullWidth ? styles.fullWidth : ""}`}>
      {/* 标题和描述 */}
      {title && <h3 className={styles.title}>{title}</h3>}
      {description && <p className={styles.description}>{description}</p>}

      {/* 演示预览区域 */}
      <div className={styles.preview} data-background={background}>
        {renderChildren()}
      </div>

      {/* 属性面板 */}
      {showProps && propsConfig.length > 0 && (
        <div className={styles.propsPanel}>
          <h4 className={styles.propsPanelTitle}>属性配置</h4>
          <div className={styles.propsControls}>
            {propsConfig.map((prop) => (
              <div key={prop.name} className={styles.propControl}>
                <label
                  htmlFor={`prop-${prop.name}`}
                  className={styles.propLabel}
                >
                  {prop.label || prop.name}
                </label>
                {renderPropControl(prop, propValues[prop.name], (value) =>
                  handlePropChange(prop.name, value)
                )}
                {prop.description && (
                  <span className={styles.propDescription}>
                    {prop.description}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 代码展示区域 */}
      {showCode && code && (
        <div className={styles.codeSection}>
          <button
            className={styles.codeToggle}
            onClick={toggleCode}
            aria-expanded={isCodeVisible}
            aria-label={isCodeVisible ? "隐藏代码" : "显示代码"}
          >
            <span className={styles.codeToggleIcon}>
              {isCodeVisible ? "▼" : "▶"}
            </span>
            {isCodeVisible ? "隐藏代码" : "显示代码"}
          </button>
          {isCodeVisible && (
            <div className={styles.codeContent}>
              <CodeBlock code={code} language={language} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

/**
 * 渲染属性控制器
 */
function renderPropControl(
  prop: PropConfig,
  value: unknown,
  onChange: (value: unknown) => void
) {
  const inputId = `prop-${prop.name}`;

  switch (prop.type) {
    case "boolean":
      return (
        <input
          id={inputId}
          type="checkbox"
          checked={value}
          onChange={(e) => onChange(e.target.checked)}
          className="w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
        />
      );

    case "string":
      return (
        <input
          id={inputId}
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="px-3 py-1.5 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      );

    case "number":
      return (
        <div className="flex items-center gap-2">
          <input
            id={inputId}
            type="range"
            min={prop.min}
            max={prop.max}
            step={prop.step || 1}
            value={value}
            onChange={(e) => onChange(Number(e.target.value))}
            className="flex-1"
          />
          <span className="text-sm font-mono w-12 text-right">{value}</span>
        </div>
      );

    case "select":
      return (
        <select
          id={inputId}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="px-3 py-1.5 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          {prop.options?.map((option: unknown) => (
            <option key={String(option)} value={String(option)}>
              {String(option)}
            </option>
          ))}
        </select>
      );

    case "color":
      return (
        <div className="flex items-center gap-2">
          <input
            id={inputId}
            type="color"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-10 h-10 rounded cursor-pointer"
          />
          <span className="text-sm font-mono">{value}</span>
        </div>
      );

    default:
      return null;
  }
}
