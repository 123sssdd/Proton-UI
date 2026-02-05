import React from "react";
import { Input } from "@proton-ui/core";

/**
 * Input 组件测试页面
 * 展示所有状态和变体
 */
export function InputTest() {
  const [value1, setValue1] = React.useState("");
  const [value2, setValue2] = React.useState("");
  const [value3, setValue3] = React.useState("");
  const [value4, setValue4] = React.useState("user@example.com");
  const [value5, setValue5] = React.useState("");
  const [value6, setValue6] = React.useState("");
  const [showError, setShowError] = React.useState(false);

  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)] p-8">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* 标题 */}
        <div className="text-center">
          <h1 className="text-2xl font-pixel text-[var(--color-text-primary)] mb-2">
            Input 组件测试
          </h1>
          <p className="text-sm text-[var(--color-text-secondary)]">
            艺术主题输入框 - 所有状态和变体
          </p>
        </div>

        {/* 基础输入框 */}
        <section className="space-y-6">
          <h2 className="text-lg font-pixel text-[var(--color-text-primary)] border-b-2 border-[var(--color-text-secondary)] pb-2">
            基础输入框 (Basic Input)
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 无标签 */}
            <div className="space-y-4 p-6 bg-[var(--color-bg-secondary)] rounded-lg border-2 border-[var(--color-text-secondary)] border-opacity-20">
              <h3 className="text-sm font-pixel text-[var(--color-text-primary)] mb-4">
                无标签
              </h3>
              <Input
                placeholder="请输入内容..."
                value={value1}
                onChange={(e) => setValue1(e.target.value)}
              />
            </div>

            {/* 带标签 */}
            <div className="space-y-4 p-6 bg-[var(--color-bg-secondary)] rounded-lg border-2 border-[var(--color-text-secondary)] border-opacity-20">
              <h3 className="text-sm font-pixel text-[var(--color-text-primary)] mb-4">
                带标签
              </h3>
              <Input
                label="用户名"
                placeholder="请输入用户名"
                value={value2}
                onChange={(e) => setValue2(e.target.value)}
              />
            </div>

            {/* 必填字段 */}
            <div className="space-y-4 p-6 bg-[var(--color-bg-secondary)] rounded-lg border-2 border-[var(--color-text-secondary)] border-opacity-20">
              <h3 className="text-sm font-pixel text-[var(--color-text-primary)] mb-4">
                必填字段
              </h3>
              <Input
                label="邮箱地址"
                placeholder="请输入邮箱"
                required
                value={value3}
                onChange={(e) => setValue3(e.target.value)}
              />
            </div>

            {/* 带辅助文本 */}
            <div className="space-y-4 p-6 bg-[var(--color-bg-secondary)] rounded-lg border-2 border-[var(--color-text-secondary)] border-opacity-20">
              <h3 className="text-sm font-pixel text-[var(--color-text-primary)] mb-4">
                带辅助文本
              </h3>
              <Input
                label="密码"
                type="password"
                placeholder="请输入密码"
                helperText="密码至少 8 个字符"
                value={value5}
                onChange={(e) => setValue5(e.target.value)}
              />
            </div>
          </div>
        </section>

        {/* 状态展示 */}
        <section className="space-y-6">
          <h2 className="text-lg font-pixel text-[var(--color-text-primary)] border-b-2 border-[var(--color-text-secondary)] pb-2">
            输入框状态 (States)
          </h2>

          <div className="space-y-6">
            {/* 默认状态 */}
            <div className="space-y-4">
              <h3 className="text-sm font-pixel text-[var(--color-text-primary)]">
                默认状态 (Default)
              </h3>
              <Input label="默认输入框" placeholder="点击聚焦查看效果" />
            </div>

            {/* 填充状态 */}
            <div className="space-y-4">
              <h3 className="text-sm font-pixel text-[var(--color-text-primary)]">
                填充状态 (Filled)
              </h3>
              <Input
                label="已填充内容"
                value={value4}
                onChange={(e) => setValue4(e.target.value)}
              />
            </div>

            {/* 错误状态 */}
            <div className="space-y-4">
              <h3 className="text-sm font-pixel text-[var(--color-text-primary)]">
                错误状态 (Error)
              </h3>
              <div className="flex gap-4 items-end">
                <div className="flex-1">
                  <Input
                    label="邮箱验证"
                    placeholder="请输入邮箱"
                    value={value6}
                    onChange={(e) => {
                      setValue6(e.target.value);
                      setShowError(
                        e.target.value.length > 0 &&
                          !e.target.value.includes("@")
                      );
                    }}
                    error={showError ? "请输入有效的邮箱地址" : undefined}
                  />
                </div>
              </div>
            </div>

            {/* 禁用状态 */}
            <div className="space-y-4">
              <h3 className="text-sm font-pixel text-[var(--color-text-primary)]">
                禁用状态 (Disabled)
              </h3>
              <Input
                label="禁用输入框"
                placeholder="此输入框已禁用"
                disabled
                value="不可编辑的内容"
              />
            </div>
          </div>
        </section>

        {/* 带图标的输入框 */}
        <section className="space-y-6">
          <h2 className="text-lg font-pixel text-[var(--color-text-primary)] border-b-2 border-[var(--color-text-secondary)] pb-2">
            带图标输入框 (With Icons)
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 左侧图标 */}
            <div className="space-y-4">
              <h3 className="text-sm font-pixel text-[var(--color-text-primary)]">
                左侧图标
              </h3>
              <Input
                label="搜索"
                placeholder="搜索内容..."
                leftIcon={
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                }
              />
            </div>

            {/* 右侧图标 */}
            <div className="space-y-4">
              <h3 className="text-sm font-pixel text-[var(--color-text-primary)]">
                右侧图标
              </h3>
              <Input
                label="邮箱"
                placeholder="your@email.com"
                type="email"
                rightIcon={
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                }
              />
            </div>

            {/* 用户名图标 */}
            <div className="space-y-4">
              <h3 className="text-sm font-pixel text-[var(--color-text-primary)]">
                用户名
              </h3>
              <Input
                label="用户名"
                placeholder="输入用户名"
                leftIcon={
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                }
              />
            </div>

            {/* 密码图标 */}
            <div className="space-y-4">
              <h3 className="text-sm font-pixel text-[var(--color-text-primary)]">
                密码
              </h3>
              <Input
                label="密码"
                type="password"
                placeholder="输入密码"
                leftIcon={
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                }
              />
            </div>
          </div>
        </section>

        {/* 不同输入类型 */}
        <section className="space-y-6">
          <h2 className="text-lg font-pixel text-[var(--color-text-primary)] border-b-2 border-[var(--color-text-secondary)] pb-2">
            输入类型 (Input Types)
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 文本 */}
            <Input label="文本 (Text)" type="text" placeholder="输入文本" />

            {/* 邮箱 */}
            <Input
              label="邮箱 (Email)"
              type="email"
              placeholder="your@email.com"
            />

            {/* 密码 */}
            <Input
              label="密码 (Password)"
              type="password"
              placeholder="输入密码"
            />

            {/* 数字 */}
            <Input label="数字 (Number)" type="number" placeholder="输入数字" />

            {/* 电话 */}
            <Input label="电话 (Tel)" type="tel" placeholder="输入电话号码" />

            {/* URL */}
            <Input
              label="网址 (URL)"
              type="url"
              placeholder="https://example.com"
            />

            {/* 日期 */}
            <Input label="日期 (Date)" type="date" />

            {/* 时间 */}
            <Input label="时间 (Time)" type="time" />
          </div>
        </section>

        {/* 全宽输入框 */}
        <section className="space-y-6">
          <h2 className="text-lg font-pixel text-[var(--color-text-primary)] border-b-2 border-[var(--color-text-secondary)] pb-2">
            全宽输入框 (Full Width)
          </h2>

          <div className="space-y-4">
            <Input label="全宽输入框" placeholder="占满容器宽度" fullWidth />
            <Input
              label="带图标的全宽输入框"
              placeholder="搜索..."
              fullWidth
              leftIcon={
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              }
            />
          </div>
        </section>

        {/* 交互说明 */}
        <section className="space-y-4 p-6 bg-[var(--color-bg-secondary)] rounded-lg border-2 border-[var(--color-accent)]">
          <h2 className="text-lg font-pixel text-[var(--color-text-primary)]">
            交互效果说明
          </h2>
          <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
            <li>
              • <strong>默认状态</strong>: 边框 text-secondary + 40% 透明度
            </li>
            <li>
              • <strong>聚焦状态</strong>: 边框变为 accent 色，显示焦点环
            </li>
            <li>
              • <strong>填充状态</strong>: 边框 text-secondary + 60% 透明度
            </li>
            <li>
              • <strong>错误状态</strong>: 边框变为 error 色，显示错误图标和消息
            </li>
            <li>
              • <strong>禁用状态</strong>: 透明度 60%，背景变为 bg-secondary
            </li>
            <li>
              • <strong>必填标记</strong>: 红色星号 (*)
            </li>
            <li>
              • <strong>像素字体</strong>: Press Start 2P，禁用抗锯齿
            </li>
            <li>
              • <strong>像素边框</strong>: 2px solid，4px 圆角
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
