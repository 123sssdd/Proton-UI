/**
 * 文档组件导出
 *
 * 这些组件用于在 MDX 文档中创建交互式演示和文档内容。
 */

// DemoBox - 演示容器组件
export { DemoBox } from "./DemoBox";
export type { DemoBoxProps, PropConfig } from "./DemoBox";

// PropsTable - 属性表格组件
export { PropsTable } from "./PropsTable";
export type { PropsTableProps, PropDefinition } from "./PropsTable";

// CodeBlock - 代码块组件
export { CodeBlock } from "./CodeBlock";
export type { CodeBlockProps } from "./CodeBlock";

// Tabs - 标签页组件
export { Tabs, TabPanel } from "./Tabs";
export type { TabsProps, TabPanelProps } from "./Tabs";

// Callout - 提示框组件
export { Callout } from "./Callout";
export type { CalloutProps, CalloutType } from "./Callout";
