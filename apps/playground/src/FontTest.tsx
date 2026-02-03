/**
 * 字体测试页面
 * 测试不同字号的可读性
 */

export function FontTest() {
  const sampleText = "The quick brown fox jumps over the lazy dog";
  const chineseText = "快速的棕色狐狸跳过懒狗";
  const numberText = "0123456789";

  return (
    <div
      className="p-8 space-y-8"
      style={{ backgroundColor: "var(--color-bg-primary)" }}
    >
      <h1
        className="text-2xl font-bold mb-8"
        style={{ color: "var(--color-text-primary)" }}
      >
        字体可读性测试
      </h1>

      {/* 等宽字体测试 */}
      <section className="space-y-4">
        <h2
          className="text-xl font-bold"
          style={{ color: "var(--color-accent)" }}
        >
          等宽字体 (Monospace)
        </h2>

        <div className="space-y-3">
          <div>
            <p
              className="text-xs mb-1"
              style={{ color: "var(--color-text-secondary)" }}
            >
              12px (xs) - 最小字号
            </p>
            <p
              className="font-mono text-xs"
              style={{ color: "var(--color-text-primary)" }}
            >
              {sampleText}
            </p>
            <p
              className="font-mono text-xs"
              style={{ color: "var(--color-text-primary)" }}
            >
              {chineseText}
            </p>
            <p
              className="font-mono text-xs"
              style={{ color: "var(--color-text-primary)" }}
            >
              {numberText}
            </p>
          </div>

          <div>
            <p
              className="text-xs mb-1"
              style={{ color: "var(--color-text-secondary)" }}
            >
              14px (sm) - 推荐最小字号
            </p>
            <p
              className="font-mono text-sm"
              style={{ color: "var(--color-text-primary)" }}
            >
              {sampleText}
            </p>
            <p
              className="font-mono text-sm"
              style={{ color: "var(--color-text-primary)" }}
            >
              {chineseText}
            </p>
            <p
              className="font-mono text-sm"
              style={{ color: "var(--color-text-primary)" }}
            >
              {numberText}
            </p>
          </div>

          <div>
            <p
              className="text-xs mb-1"
              style={{ color: "var(--color-text-secondary)" }}
            >
              16px (base) - 标准字号
            </p>
            <p
              className="font-mono text-base"
              style={{ color: "var(--color-text-primary)" }}
            >
              {sampleText}
            </p>
            <p
              className="font-mono text-base"
              style={{ color: "var(--color-text-primary)" }}
            >
              {chineseText}
            </p>
            <p
              className="font-mono text-base"
              style={{ color: "var(--color-text-primary)" }}
            >
              {numberText}
            </p>
          </div>

          <div>
            <p
              className="text-xs mb-1"
              style={{ color: "var(--color-text-secondary)" }}
            >
              20px (lg) - 大字号
            </p>
            <p
              className="font-mono text-lg"
              style={{ color: "var(--color-text-primary)" }}
            >
              {sampleText}
            </p>
            <p
              className="font-mono text-lg"
              style={{ color: "var(--color-text-primary)" }}
            >
              {chineseText}
            </p>
          </div>
        </div>
      </section>

      {/* 像素字体测试 */}
      <section className="space-y-4">
        <h2
          className="text-xl font-bold"
          style={{ color: "var(--color-accent)" }}
        >
          像素字体 (Press Start 2P)
        </h2>
        <p className="text-sm" style={{ color: "var(--color-warning)" }}>
          ⚠️ 注意：像素字体在小尺寸下可读性较差，建议仅用于标题和强调内容
        </p>

        <div className="space-y-3">
          <div>
            <p
              className="text-xs mb-1"
              style={{ color: "var(--color-text-secondary)" }}
            >
              12px (xs) - 不推荐
            </p>
            <p
              className="font-pixel text-xs"
              style={{ color: "var(--color-text-primary)" }}
            >
              {sampleText}
            </p>
            <p
              className="font-pixel text-xs"
              style={{ color: "var(--color-text-primary)" }}
            >
              {numberText}
            </p>
          </div>

          <div>
            <p
              className="text-xs mb-1"
              style={{ color: "var(--color-text-secondary)" }}
            >
              14px (sm) - 谨慎使用
            </p>
            <p
              className="font-pixel text-sm"
              style={{ color: "var(--color-text-primary)" }}
            >
              {sampleText}
            </p>
            <p
              className="font-pixel text-sm"
              style={{ color: "var(--color-text-primary)" }}
            >
              {numberText}
            </p>
          </div>

          <div>
            <p
              className="text-xs mb-1"
              style={{ color: "var(--color-text-secondary)" }}
            >
              16px (base) - 可接受
            </p>
            <p
              className="font-pixel text-base"
              style={{ color: "var(--color-text-primary)" }}
            >
              PIXEL PERFECT
            </p>
            <p
              className="font-pixel text-base"
              style={{ color: "var(--color-text-primary)" }}
            >
              {numberText}
            </p>
          </div>

          <div>
            <p
              className="text-xs mb-1"
              style={{ color: "var(--color-text-secondary)" }}
            >
              20px (lg) - 推荐
            </p>
            <p
              className="font-pixel text-lg"
              style={{ color: "var(--color-text-primary)" }}
            >
              RETRO STYLE
            </p>
          </div>

          <div>
            <p
              className="text-xs mb-1"
              style={{ color: "var(--color-text-secondary)" }}
            >
              24px (xl) - 标题
            </p>
            <p
              className="font-pixel text-xl"
              style={{ color: "var(--color-accent)" }}
            >
              PIXEL UI
            </p>
          </div>
        </div>
      </section>

      {/* 代码块测试 */}
      <section className="space-y-4">
        <h2
          className="text-xl font-bold"
          style={{ color: "var(--color-accent)" }}
        >
          代码块
        </h2>

        <pre
          className="p-4 rounded-md overflow-x-auto"
          style={{
            backgroundColor: "var(--color-bg-secondary)",
            border: "2px solid var(--border-color-default)",
          }}
        >
          <code
            className="font-mono text-sm"
            style={{ color: "var(--color-text-primary)" }}
          >
            {`function greet(name: string) {
  return \`Hello, \${name}!\`;
}

const message = greet("World");
console.log(message);`}
          </code>
        </pre>

        <p
          className="font-mono text-sm"
          style={{ color: "var(--color-text-primary)" }}
        >
          内联代码: <code>const x = 42;</code> 和 <code>npm install</code>
        </p>
      </section>

      {/* 可读性建议 */}
      <section
        className="p-6 rounded-lg"
        style={{
          backgroundColor: "var(--color-info)",
          color: "var(--color-bg-primary)",
        }}
      >
        <h3 className="text-lg font-bold mb-3">字体使用建议</h3>
        <ul className="space-y-2 text-sm">
          <li>✅ 正文内容使用等宽字体（Courier New）14px 或以上</li>
          <li>✅ 标题和强调内容可使用像素字体（Press Start 2P）16px 或以上</li>
          <li>✅ 代码块使用等宽字体 14px</li>
          <li>⚠️ 避免在小于 14px 的尺寸使用像素字体</li>
          <li>⚠️ 移动端建议最小字号 14px</li>
          <li>❌ 不要在长文本段落中使用像素字体</li>
        </ul>
      </section>
    </div>
  );
}
