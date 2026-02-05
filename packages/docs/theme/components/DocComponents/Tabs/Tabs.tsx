import React, { useState, useEffect, Children, isValidElement } from "react";
import type { TabsProps, TabPanelProps } from "./types";
import styles from "./Tabs.module.css";

/**
 * Tabs 组件
 *
 * 用于组织多个示例或内容区域的标签页组件。
 * 支持键盘导航、URL 哈希同步和 ARIA 无障碍访问。
 */
export const Tabs: React.FC<TabsProps> = ({
  defaultTab,
  children,
  syncWithUrl = false,
}) => {
  const childrenArray = Children.toArray(children).filter(isValidElement);
  const firstTabId = (childrenArray[0] as React.ReactElement<TabPanelProps>)
    ?.props?.id;

  // 从 URL 哈希获取初始标签页
  const getInitialTab = () => {
    if (syncWithUrl && typeof window !== "undefined") {
      const hash = window.location.hash.slice(1);
      const tabExists = childrenArray.some(
        (child) =>
          (child as React.ReactElement<TabPanelProps>).props.id === hash
      );
      if (hash && tabExists) {
        return hash;
      }
    }
    return defaultTab || firstTabId;
  };

  const [activeTab, setActiveTab] = useState(getInitialTab);

  // 同步 URL 哈希
  useEffect(() => {
    if (syncWithUrl && typeof window !== "undefined") {
      const handleHashChange = () => {
        const hash = window.location.hash.slice(1);
        const tabExists = childrenArray.some(
          (child) =>
            (child as React.ReactElement<TabPanelProps>).props.id === hash
        );
        if (hash && tabExists) {
          setActiveTab(hash);
        }
      };

      window.addEventListener("hashchange", handleHashChange);
      return () => window.removeEventListener("hashchange", handleHashChange);
    }
  }, [syncWithUrl, childrenArray]);

  // 切换标签页
  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    if (syncWithUrl && typeof window !== "undefined") {
      window.location.hash = tabId;
    }
  };

  // 键盘导航处理
  const handleKeyDown = (
    e: React.KeyboardEvent,
    tabId: string,
    index: number
  ) => {
    if (e.key === "ArrowLeft" && index > 0) {
      const prevTab = childrenArray[
        index - 1
      ] as React.ReactElement<TabPanelProps>;
      handleTabChange(prevTab.props.id);
      // 聚焦到前一个标签
      const prevButton = document.getElementById(`tab-${prevTab.props.id}`);
      prevButton?.focus();
    } else if (e.key === "ArrowRight" && index < childrenArray.length - 1) {
      const nextTab = childrenArray[
        index + 1
      ] as React.ReactElement<TabPanelProps>;
      handleTabChange(nextTab.props.id);
      // 聚焦到后一个标签
      const nextButton = document.getElementById(`tab-${nextTab.props.id}`);
      nextButton?.focus();
    }
  };

  return (
    <div className={styles.tabs}>
      <div className={styles.tabList} role="tablist">
        {childrenArray.map((child, index) => {
          const tabChild = child as React.ReactElement<TabPanelProps>;
          const { id, label } = tabChild.props;
          const isActive = activeTab === id;

          return (
            <button
              key={id}
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${id}`}
              id={`tab-${id}`}
              className={`${styles.tab} ${isActive ? styles.tabActive : ""}`}
              onClick={() => handleTabChange(id)}
              onKeyDown={(e) => handleKeyDown(e, id, index)}
              tabIndex={isActive ? 0 : -1}
            >
              {label}
            </button>
          );
        })}
      </div>
      <div className={styles.tabPanels}>
        {childrenArray.map((child) => {
          const tabChild = child as React.ReactElement<TabPanelProps>;
          const { id, children: content } = tabChild.props;
          const isActive = activeTab === id;

          return (
            <div
              key={id}
              role="tabpanel"
              id={`panel-${id}`}
              aria-labelledby={`tab-${id}`}
              className={styles.tabPanel}
              hidden={!isActive}
            >
              {content}
            </div>
          );
        })}
      </div>
    </div>
  );
};

/**
 * TabPanel 组件
 *
 * 标签页内容容器，必须作为 Tabs 的子组件使用。
 */
export const TabPanel: React.FC<TabPanelProps> = ({ children }) => {
  return <>{children}</>;
};

// 添加 default export 以支持 Rspress globalComponents
export default Tabs;
