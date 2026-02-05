# 像素风主题系统

## 使用方法

### 1. 在应用根部添加 PixelThemeProvider

```tsx
import { PixelThemeProvider } from '@Proton-ui/core';
import '@Proton-ui/core/styles'; // 导入样式

function App() {
  return (
    <PixelThemeProvider>
      <YourApp />
    </PixelThemeProvider>
  );
}
```

### 2. 使用 useTheme Hook

```tsx
import { useTheme } from '@Proton-ui/core';

function ThemeToggle() {
  const { theme, resolvedTheme, toggleTheme, setTheme } = useTheme();
  
  return (
    <div>
      <p>当前主题: {resolvedTheme}</p>
      <button onClick={toggleTheme}>切换主题</button>
      <button onClick={() => setTheme('light')}>亮色</button>
      <button onClick={() => setTheme('dark')}>暗色</button>
      <button onClick={() => setTheme('system')}>跟随系统</button>
    </div>
  );
}
```

### 3. 直接使用工具函数

```tsx
import { setTheme, toggleTheme, getCurrentTheme } from '@Proton-ui/core';

// 设置主题
setTheme('dark');

// 切换主题
toggleTheme();

// 获取当前主题
const theme = getCurrentTheme();
```

## 主题类型

- `light`: 亮色主题（米白纸感 + 抹茶绿）
- `dark`: 暗色主题（深色夜景 + 霓虹青）
- `system`: 跟随系统主题

## CSS 变量

所有颜色、间距、字体等都通过 CSS 变量定义，可以在任何地方使用：

```css
.my-component {
  background-color: var(--color-bg-primary);
  color: var(--color-text-primary);
  padding: var(--spacing-4);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-pixel-md);
}
```

## Tailwind 工具类

配置已更新，可以直接使用 Tailwind 工具类：

```tsx
<div className="bg-bg-primary text-text-primary p-4 rounded-md shadow-pixel-md">
  Hello, Pixel World!
</div>
```

## 主题持久化

主题选择会自动保存到 localStorage，下次访问时会自动恢复。

## 系统主题监听

当设置为 `system` 时，会自动监听系统主题变化并实时切换。
