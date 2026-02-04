import type { ReactElement, ReactNode } from "react";

/**
 * TabPanel 组件属性接口
 */
export interface TabPanelProps {
  /** 标签页唯一标识 */
  id: string;
  /** 标签页显示标签 */
  label: string;
  /** 标签页内容 */
  children: ReactNode;
}

/**
 * Tabs 组件属性接口
 */
export interface TabsProps {
  /** 默认激活的标签页 ID */
  defaultTab?: string;
  /** 是否与 URL 哈希同步 */
  syncWithUrl?: boolean;
  /** TabPanel 子组件 */
  children: ReactElement<TabPanelProps> | ReactElement<TabPanelProps>[];
}
