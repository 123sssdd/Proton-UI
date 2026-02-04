export { PixelCat } from "./PixelCat";
export { BackToTop } from "./BackToTop";
export { LoadingIndicator } from "./LoadingIndicator";
export { LogoCat } from "./LogoCat";
export { FeatureCard } from "./FeatureCard";
export { CoreFeatures } from "./CoreFeatures";
export { ScrollDownButton } from "./ScrollDownButton";
export { TechStack } from "./TechStack";
export { TechStackTags } from "./TechStackTags";

export type {
  PixelCatProps,
  PixelCatAnimation,
  PixelCatState,
} from "./PixelCat";
export type { BackToTopProps, BackToTopState } from "./BackToTop";
export type { LoadingIndicatorProps } from "./LoadingIndicator";
export type { FeatureCardProps } from "./FeatureCard";

// 文档组件导出 - 使用命名导出避免与 Rspress 主题冲突
export { DemoBox } from "./DocComponents";
export { PropsTable } from "./DocComponents";
export { CodeBlock } from "./DocComponents";
export { Tabs as DocTabs, TabPanel as DocTabPanel } from "./DocComponents";
export { Callout } from "./DocComponents";

export type {
  DemoBoxProps,
  PropConfig,
  PropsTableProps,
  PropDefinition,
  CodeBlockProps,
  TabsProps,
  TabPanelProps,
  CalloutProps,
  CalloutType,
} from "./DocComponents";

// 演示组件导出
export { InputValidationDemo } from "./demos";
