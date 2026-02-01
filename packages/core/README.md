# @proton-ui/core

Proton UI 核心组件库 - AI 原生 React 组件库

## 特性

- 🎨 **现代设计**：基于 Tailwind CSS 的样式系统
- 🎯 **TypeScript**：完整的类型定义
- 🎭 **主题定制**：灵活的主题配置系统
- ♿ **无障碍**：完整的 ARIA 支持
- 📦 **Tree-shaking**：优化的包体积
- 🚀 **高性能**：优化的渲染性能

## 安装

```bash
npm install @proton-ui/core
# 或
pnpm add @proton-ui/core
# 或
yarn add @proton-ui/core
```

## 使用

### 基础用法

```tsx
import { Button, Input, Card } from "@proton-ui/core";

function App() {
  return (
    <div>
      <Button variant="primary">点击我</Button>
      <Input label="用户名" placeholder="请输入用户名" />
      <Card>
        <Card.Header title="卡片标题" />
        <Card.Body>卡片内容</Card.Body>
      </Card>
    </div>
  );
}
```

### 主题定制

```tsx
import { ThemeProvider } from "@proton-ui/core";

const customTheme = {
  colors: {
    primary: "#ff6b6b",
    secondary: "#4ecdc4",
  },
};

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <YourApp />
    </ThemeProvider>
  );
}
```

## 组件

### Button

按钮组件，支持多种变体和状态。

```tsx
<Button variant="primary" size="md" loading={false}>
  按钮
</Button>
```

**Props:**
- `variant`: 'primary' | 'secondary' | 'ghost' | 'danger'
- `size`: 'sm' | 'md' | 'lg'
- `loading`: boolean
- `icon`: ReactNode
- `fullWidth`: boolean

### Input

输入框组件，支持受控和非受控模式。

```tsx
<Input
  label="邮箱"
  placeholder="请输入邮箱"
  error="邮箱格式不正确"
  leftIcon={<MailIcon />}
/>
```

**Props:**
- `label`: string
- `error`: string
- `helperText`: string
- `leftIcon`: ReactNode
- `rightIcon`: ReactNode
- `fullWidth`: boolean

### Card

卡片组件，采用组合式 API。

```tsx
<Card padding="md" shadow="md">
  <Card.Header title="标题" subtitle="副标题" action={<Button />} />
  <Card.Body>内容</Card.Body>
  <Card.Footer>操作按钮</Card.Footer>
</Card>
```

**Props:**
- `padding`: 'none' | 'sm' | 'md' | 'lg'
- `shadow`: 'none' | 'sm' | 'md' | 'lg'

## 主题系统

### ThemeProvider

提供主题配置的上下文。

```tsx
<ThemeProvider theme={customTheme}>
  <App />
</ThemeProvider>
```

### useTheme

获取当前主题配置的 Hook。

```tsx
import { useTheme } from "@proton-ui/core";

function MyComponent() {
  const theme = useTheme();
  return <div style={{ color: theme.colors.primary }}>文本</div>;
}
```

## 构建信息

- **包大小**：~10KB (未压缩)
- **Gzipped**：~3KB
- **格式**：ESM + CJS
- **类型**：完整的 TypeScript 类型定义

## 开发

```bash
# 安装依赖
pnpm install

# 开发模式
pnpm dev

# 构建
pnpm build

# 类型检查
pnpm type-check

# 代码检查
pnpm lint
```

## License

MIT
