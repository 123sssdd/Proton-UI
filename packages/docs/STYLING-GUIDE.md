# Proton UI 文档站样式规范

## 📋 目录结构

```
packages/docs/
├── docs/public/          # 静态资源和全局样式
│   ├── custom.css       # 主样式文件（入口）
│   ├── hero-config.css  # Hero 区域专用样式
│   ├── fonts.css        # 字体定义
│   └── logo-animation.css # Logo 动画
├── theme/               # 主题自定义
│   ├── global.css       # Rspress 主题覆盖
│   ├── index.tsx        # 主题入口（包含动态样式）
│   └── components/      # 组件样式（CSS Modules）
└── rspress.config.ts    # Rspress 配置
```

## 🎨 样式层级架构

### 1. 全局样式层（优先级：低）
**文件**: `docs/public/custom.css`
**职责**: 
- CSS 变量定义
- 基础样式重置
- Rspress 默认组件样式覆盖
- 全局通用样式

**导入顺序**:
```css
@import url("https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap");
@import url("/fonts.css");
@import url("/hero-config.css");
```

### 2. 区域样式层（优先级：中）
**文件**: `docs/public/hero-config.css`, `theme/global.css`
**职责**:
- 特定区域的布局和样式
- Hero 区域配置
- 响应式布局

### 3. 组件样式层（优先级：中高）
**文件**: `theme/components/**/*.module.css`
**职责**:
- 组件级别的样式隔离
- 使用 CSS Modules 避免冲突
- 组件内部状态样式

### 4. 动态样式层（优先级：最高）
**文件**: `theme/index.tsx`
**职责**:
- JavaScript 动态创建的样式
- 运行时样式注入
- 交互状态样式

## 🎯 样式优先级规则

1. **动态 inline 样式** (JavaScript `element.style`) - 最高优先级
2. **CSS Modules** (`.module.css`) - 组件级隔离
3. **区域样式** (`hero-config.css`, `global.css`) - 特定区域
4. **全局样式** (`custom.css`) - 基础样式
5. **Rspress 默认样式** - 最低优先级

## 📐 设计系统

### 颜色变量
```css
:root {
  /* 主色调 - 蓝色系 */
  --pixel-primary: #58a6ff;
  --pixel-secondary: #79c0ff;
  --pixel-tertiary: #a5d6ff;
  --pixel-glow: #1f6feb;
  
  /* 阴影 */
  --pixel-shadow: rgba(88, 166, 255, 0.3);
  --pixel-shadow-strong: rgba(88, 166, 255, 0.6);
  
  /* Rspress 品牌色 */
  --rp-c-brand: #58a6ff;
  --rp-c-brand-dark: #1f6feb;
  --rp-c-brand-light: #79c0ff;
}
```

### 字体系统
- **主字体**: Ark Pixel 16px (像素风格中文字体)
- **备用字体**: Press Start 2P (英文像素字体)
- **基础字号**: 23px
- **字重**: normal (400), bold (600), extra-bold (700)

### 间距系统
- **xs**: 4px
- **sm**: 8px
- **md**: 16px
- **lg**: 24px
- **xl**: 32px
- **2xl**: 48px
- **3xl**: 64px

### 圆角系统
- **小**: 3px-4px (标签、小按钮)
- **中**: 6px-8px (按钮、卡片)
- **大**: 12px-16px (大卡片)
- **圆形**: 50% (圆形按钮)

## 🔧 样式修改流程

### 修改前检查清单
1. ✅ 确定要修改的元素属于哪个层级
2. ✅ 检查是否有现有样式冲突
3. ✅ 确认修改范围（全局 vs 局部）
4. ✅ 考虑响应式影响

### 修改步骤

#### 1. 全局样式修改
**场景**: 修改颜色变量、基础字体、通用组件样式
**文件**: `docs/public/custom.css`
**示例**:
```css
/* 修改主色调 */
:root {
  --pixel-primary: #新颜色;
}
```

#### 2. Hero 区域修改
**场景**: 修改首页 Hero 布局、标题样式
**文件**: `docs/public/hero-config.css`
**示例**:
```css
.rspress-home-hero-title {
  font-size: 6rem !important;
}
```

#### 3. 组件样式修改
**场景**: 修改特定组件的样式
**文件**: `theme/components/[ComponentName]/[ComponentName].module.css`
**示例**:
```css
.componentClass {
  padding: 16px;
}
```

#### 4. 动态样式修改
**场景**: 修改 JavaScript 动态创建的元素（如技术栈标签）
**文件**: `theme/index.tsx`
**示例**:
```typescript
tag.style.background = "#0d1117";
tag.style.color = "#f0f6fc";
```

## ⚠️ 常见问题和解决方案

### 问题 1: 样式不生效
**原因**: 优先级不够或被覆盖
**解决**:
1. 检查是否有更高优先级的样式
2. 使用 `!important` (谨慎使用)
3. 提高选择器特异性
4. 使用动态 inline 样式

### 问题 2: 样式冲突
**原因**: 多个文件定义了相同的样式
**解决**:
1. 检查 `custom.css` 和组件 CSS
2. 使用 CSS Modules 隔离
3. 使用更具体的选择器
4. 移除重复定义

### 问题 3: 响应式失效
**原因**: 媒体查询被覆盖或顺序错误
**解决**:
1. 确保媒体查询在文件末尾
2. 检查断点是否正确
3. 使用 `!important` 在媒体查询中

## 📝 样式命名规范

### CSS 类名
- **BEM 命名**: `.block__element--modifier`
- **CSS Modules**: `.componentName` (自动生成唯一类名)
- **Rspress 类**: `.rspress-*` (框架类，不要修改)

### 变量命名
- **CSS 变量**: `--pixel-*`, `--rp-*`
- **颜色**: `--pixel-primary`, `--pixel-secondary`
- **间距**: `--spacing-*`
- **字体**: `--font-*`

## 🎨 技术栈标签样式规范

### 当前实现
**位置**: `theme/index.tsx` (动态创建)
**样式**:
```typescript
{
  background: "#0d1117",           // 纯黑背景 (GitHub 深色)
  color: "#f0f6fc",                // 亮白色文字
  border: "2px solid #21262d",     // 深灰边框 (2px 粗)
  borderRadius: "6px",             // 中等圆角
  padding: "6px 14px",             // 饱满内边距
  fontSize: "0.75rem",             // 小字号
  fontWeight: "700",               // 加粗字体
  gap: "10px",                     // 标签间距
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)" // 双层阴影
}
```

### 修改方法
1. 打开 `theme/index.tsx`
2. 找到 `addTechStackTags` 函数
3. 修改 `tag.style.cssText` 中的样式
4. 保存后刷新浏览器（Cmd+Shift+R 硬刷新）

## 🎮 组件演示配置

### Playground 插件
**配置文件**: `rspress.config.ts`
**当前配置**:
```typescript
plugins: [
  pluginPlayground({
    render: {
      react: true,
    },
  }),
]
```

### 代码块格式
组件文档中的代码块需要使用以下格式才能渲染为可交互演示：

```tsx
import { Button } from "@proton-ui/core";

export default () => (
  <Button>点击我</Button>
);
```

**注意事项**:
- 必须使用 `tsx` 或 `jsx` 语言标记
- 必须有 `export default` 导出
- 导出的必须是一个 React 组件（函数或箭头函数）
- 演示会自动显示在上方，代码默认折叠在下方

## 🔄 样式更新检查表

修改样式后，请检查：
- [ ] 桌面端显示正常
- [ ] 移动端响应式正常
- [ ] 深色模式兼容（如适用）
- [ ] 浏览器兼容性
- [ ] 性能影响（避免过多 `!important`）
- [ ] 无样式冲突
- [ ] 代码可维护性

## 📚 参考资源

- [Rspress 文档](https://rspress.dev/)
- [Rspress Playground 插件](https://rspress.dev/plugin/official-plugins/playground)
- [CSS Modules 文档](https://github.com/css-modules/css-modules)
- [Ark Pixel 字体](https://github.com/TakWolf/ark-pixel-font)
- [GitHub Primer 设计系统](https://primer.style/)

## 🚀 快速修改指南

### 修改主色调
```css
/* docs/public/custom.css */
:root {
  --pixel-primary: #新颜色;
}
```

### 修改 Hero 标题大小
```css
/* docs/public/hero-config.css */
.rspress-home-hero-title {
  font-size: 新大小 !important;
}
```

### 修改技术栈标签
```typescript
// theme/index.tsx - addTechStackTags 函数
tag.style.cssText = `
  background: #新背景色 !important;
  color: #新文字色 !important;
  font-weight: 700 !important;
  ...
`;
```

### 修改组件样式
```css
/* theme/components/[Component]/[Component].module.css */
.className {
  /* 新样式 */
}
```

---

**最后更新**: 2024-02-03
**维护者**: Proton UI Team
