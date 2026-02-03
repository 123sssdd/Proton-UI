import { usePixelTheme } from "@proton-ui/core";

export function ThemeToggle() {
  const { resolvedTheme, toggleTheme } = usePixelTheme();

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 rounded-lg border-2 transition-colors"
      style={{
        backgroundColor: "var(--color-bg-secondary)",
        color: "var(--color-text-primary)",
        borderColor: "var(--color-accent)",
      }}
    >
      {resolvedTheme === "dark" ? "🌙 暗色" : "☀️ 亮色"}
    </button>
  );
}
