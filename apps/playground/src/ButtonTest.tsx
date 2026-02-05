import React from "react";
import { Button } from "@proton-ui/components";

/**
 * Button 组件测试页面
 * 展示所有变体、尺寸和状态
 */
export function ButtonTest() {
  const [loading, setLoading] = React.useState(false);

  const handleClick = () => {
    console.log("Button clicked!");
  };

  const handleLoadingClick = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)] p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* 标题 */}
        <div className="text-center">
          <h1 className="text-2xl font-pixel text-[var(--color-text-primary)] mb-2">
            Button 组件测试
          </h1>
          <p className="text-sm text-[var(--color-text-secondary)]">
            像素风格按钮 - 所有变体和状态
          </p>
        </div>

        {/* 变体展示 */}
        <section className="space-y-6">
          <h2 className="text-lg font-pixel text-[var(--color-text-primary)] border-b-2 border-[var(--color-text-secondary)] pb-2">
            按钮变体 (Variants)
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Primary */}
            <div className="space-y-4 p-6 bg-[var(--color-bg-secondary)] rounded-lg border-2 border-[var(--color-text-secondary)] border-opacity-20">
              <h3 className="text-sm font-pixel text-[var(--color-text-primary)] mb-4">
                Primary
              </h3>
              <Button variant="primary" onClick={handleClick}>
                Primary Button
              </Button>
              <Button variant="primary" disabled>
                Disabled
              </Button>
              <Button
                variant="primary"
                loading={loading}
                onClick={handleLoadingClick}
              >
                {loading ? "Loading..." : "Click to Load"}
              </Button>
            </div>

            {/* Secondary */}
            <div className="space-y-4 p-6 bg-[var(--color-bg-secondary)] rounded-lg border-2 border-[var(--color-text-secondary)] border-opacity-20">
              <h3 className="text-sm font-pixel text-[var(--color-text-primary)] mb-4">
                Secondary
              </h3>
              <Button variant="secondary" onClick={handleClick}>
                Secondary Button
              </Button>
              <Button variant="secondary" disabled>
                Disabled
              </Button>
              <Button
                variant="secondary"
                loading={loading}
                onClick={handleLoadingClick}
              >
                {loading ? "Loading..." : "Click to Load"}
              </Button>
            </div>

            {/* Danger */}
            <div className="space-y-4 p-6 bg-[var(--color-bg-secondary)] rounded-lg border-2 border-[var(--color-text-secondary)] border-opacity-20">
              <h3 className="text-sm font-pixel text-[var(--color-text-primary)] mb-4">
                Danger
              </h3>
              <Button variant="danger" onClick={handleClick}>
                Danger Button
              </Button>
              <Button variant="danger" disabled>
                Disabled
              </Button>
              <Button
                variant="danger"
                loading={loading}
                onClick={handleLoadingClick}
              >
                {loading ? "Loading..." : "Click to Load"}
              </Button>
            </div>

            {/* Ghost */}
            <div className="space-y-4 p-6 bg-[var(--color-bg-secondary)] rounded-lg border-2 border-[var(--color-text-secondary)] border-opacity-20">
              <h3 className="text-sm font-pixel text-[var(--color-text-primary)] mb-4">
                Ghost
              </h3>
              <Button variant="ghost" onClick={handleClick}>
                Ghost Button
              </Button>
              <Button variant="ghost" disabled>
                Disabled
              </Button>
              <Button
                variant="ghost"
                loading={loading}
                onClick={handleLoadingClick}
              >
                {loading ? "Loading..." : "Click to Load"}
              </Button>
            </div>
          </div>
        </section>

        {/* 尺寸展示 */}
        <section className="space-y-6">
          <h2 className="text-lg font-pixel text-[var(--color-text-primary)] border-b-2 border-[var(--color-text-secondary)] pb-2">
            按钮尺寸 (Sizes)
          </h2>

          <div className="space-y-8">
            {/* Small */}
            <div className="space-y-4">
              <h3 className="text-sm font-pixel text-[var(--color-text-primary)]">
                Small (32px)
              </h3>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary" size="sm">
                  Small Primary
                </Button>
                <Button variant="secondary" size="sm">
                  Small Secondary
                </Button>
                <Button variant="danger" size="sm">
                  Small Danger
                </Button>
                <Button variant="ghost" size="sm">
                  Small Ghost
                </Button>
              </div>
            </div>

            {/* Medium */}
            <div className="space-y-4">
              <h3 className="text-sm font-pixel text-[var(--color-text-primary)]">
                Medium (40px) - Default
              </h3>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary" size="md">
                  Medium Primary
                </Button>
                <Button variant="secondary" size="md">
                  Medium Secondary
                </Button>
                <Button variant="danger" size="md">
                  Medium Danger
                </Button>
                <Button variant="ghost" size="md">
                  Medium Ghost
                </Button>
              </div>
            </div>

            {/* Large */}
            <div className="space-y-4">
              <h3 className="text-sm font-pixel text-[var(--color-text-primary)]">
                Large (48px)
              </h3>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary" size="lg">
                  Large Primary
                </Button>
                <Button variant="secondary" size="lg">
                  Large Secondary
                </Button>
                <Button variant="danger" size="lg">
                  Large Danger
                </Button>
                <Button variant="ghost" size="lg">
                  Large Ghost
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 带图标的按钮 */}
        <section className="space-y-6">
          <h2 className="text-lg font-pixel text-[var(--color-text-primary)] border-b-2 border-[var(--color-text-secondary)] pb-2">
            带图标按钮 (With Icons)
          </h2>

          <div className="flex flex-wrap gap-4">
            <Button
              variant="primary"
              icon={
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              }
            >
              Add Item
            </Button>
            <Button
              variant="secondary"
              icon={
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
              }
            >
              Edit
            </Button>
            <Button
              variant="danger"
              icon={
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              }
            >
              Delete
            </Button>
            <Button
              variant="ghost"
              icon={
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              }
            >
              Settings
            </Button>
          </div>
        </section>

        {/* 全宽按钮 */}
        <section className="space-y-6">
          <h2 className="text-lg font-pixel text-[var(--color-text-primary)] border-b-2 border-[var(--color-text-secondary)] pb-2">
            全宽按钮 (Full Width)
          </h2>

          <div className="space-y-4 max-w-md">
            <Button variant="primary" fullWidth>
              Full Width Primary
            </Button>
            <Button variant="secondary" fullWidth>
              Full Width Secondary
            </Button>
            <Button variant="danger" fullWidth>
              Full Width Danger
            </Button>
          </div>
        </section>

        {/* 交互说明 */}
        <section className="space-y-4 p-6 bg-[var(--color-bg-secondary)] rounded-lg border-2 border-[var(--color-accent)]">
          <h2 className="text-lg font-pixel text-[var(--color-text-primary)]">
            交互效果说明
          </h2>
          <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
            <li>
              • <strong>悬停 (Hover)</strong>: 背景颜色加深 10%
            </li>
            <li>
              • <strong>按下 (Active)</strong>: 向下位移 2px，阴影减小
            </li>
            <li>
              • <strong>聚焦 (Focus)</strong>: 显示 2px 焦点环
            </li>
            <li>
              • <strong>禁用 (Disabled)</strong>: 透明度 60%，禁止点击
            </li>
            <li>
              • <strong>加载 (Loading)</strong>: 显示旋转图标，禁止点击
            </li>
            <li>
              • <strong>像素阴影</strong>: 4px 偏移，无模糊
            </li>
            <li>
              • <strong>像素字体</strong>: Press Start 2P，禁用抗锯齿
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
