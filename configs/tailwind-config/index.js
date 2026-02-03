/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      /* ========== 颜色系统（使用 CSS 变量）========== */
      colors: {
        // 主色调
        "bg-primary": "var(--color-bg-primary)",
        "bg-secondary": "var(--color-bg-secondary)",
        "text-primary": "var(--color-text-primary)",
        "text-secondary": "var(--color-text-secondary)",
        accent: "var(--color-accent)",
        highlight: "var(--color-highlight)",

        // 语义色
        success: "var(--color-success)",
        warning: "var(--color-warning)",
        error: "var(--color-error)",
        info: "var(--color-info)",
      },

      /* ========== 间距系统（基于 8px）========== */
      spacing: {
        0: "var(--spacing-0)",
        1: "var(--spacing-1)",
        2: "var(--spacing-2)",
        3: "var(--spacing-3)",
        4: "var(--spacing-4)",
        6: "var(--spacing-6)",
        8: "var(--spacing-8)",
        12: "var(--spacing-12)",
        16: "var(--spacing-16)",
        20: "var(--spacing-20)",
        24: "var(--spacing-24)",
      },

      /* ========== 字体系统 ========== */
      fontSize: {
        xs: ["var(--font-size-xs)", { lineHeight: "var(--line-height-xs)" }],
        sm: ["var(--font-size-sm)", { lineHeight: "var(--line-height-sm)" }],
        base: [
          "var(--font-size-base)",
          { lineHeight: "var(--line-height-base)" },
        ],
        lg: ["var(--font-size-lg)", { lineHeight: "var(--line-height-lg)" }],
        xl: ["var(--font-size-xl)", { lineHeight: "var(--line-height-xl)" }],
        "2xl": [
          "var(--font-size-2xl)",
          { lineHeight: "var(--line-height-2xl)" },
        ],
      },

      fontFamily: {
        pixel: "var(--font-pixel)",
        mono: "var(--font-mono)",
      },

      fontWeight: {
        regular: "var(--font-weight-regular)",
        medium: "var(--font-weight-medium)",
        bold: "var(--font-weight-bold)",
      },

      /* ========== 圆角系统 ========== */
      borderRadius: {
        none: "var(--radius-none)",
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
        full: "var(--radius-full)",
      },

      /* ========== 边框宽度 ========== */
      borderWidth: {
        thin: "var(--border-thin)",
        base: "var(--border-base)",
        thick: "var(--border-thick)",
        heavy: "var(--border-heavy)",
      },

      /* ========== 像素阴影 ========== */
      boxShadow: {
        "pixel-sm": "var(--shadow-pixel-sm)",
        "pixel-md": "var(--shadow-pixel-md)",
        "pixel-lg": "var(--shadow-pixel-lg)",
        "pixel-xl": "var(--shadow-pixel-xl)",
        "accent-sm": "var(--shadow-accent-sm)",
        "accent-md": "var(--shadow-accent-md)",
        layered: "var(--shadow-layered)",
        inset: "var(--shadow-inset)",
        focus: "var(--shadow-focus)",
      },

      /* ========== 动画时长 ========== */
      transitionDuration: {
        fast: "var(--duration-fast)",
        normal: "var(--duration-normal)",
        slow: "var(--duration-slow)",
        slower: "var(--duration-slower)",
      },

      /* ========== 动画缓动 ========== */
      transitionTimingFunction: {
        "ease-in": "var(--ease-in)",
        "ease-out": "var(--ease-out)",
        "ease-in-out": "var(--ease-in-out)",
        linear: "var(--ease-linear)",
      },

      /* ========== 自定义动画 ========== */
      keyframes: {
        "pixel-blink": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
        },
        scanline: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(100vh)" },
        },
        "pulse-pixel": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.6" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-out": {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        "slide-up": {
          "0%": { transform: "translateY(10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "slide-down": {
          "0%": { transform: "translateY(-10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "scale-in": {
          "0%": { transform: "scale(0.9)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        "scale-out": {
          "0%": { transform: "scale(1)", opacity: "1" },
          "100%": { transform: "scale(0.9)", opacity: "0" },
        },
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        bounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-4px)" },
        },
      },
      animation: {
        "pixel-blink": "pixel-blink var(--blink-duration) step-end infinite",
        scanline: "scanline var(--scanline-duration) linear infinite",
        "pulse-pixel": "pulse-pixel var(--pulse-duration) ease-in-out infinite",
        "fade-in": "fade-in var(--duration-normal) var(--ease-out)",
        "fade-out": "fade-out var(--duration-normal) var(--ease-in)",
        "slide-up": "slide-up var(--duration-slow) var(--ease-out)",
        "slide-down": "slide-down var(--duration-slow) var(--ease-out)",
        "scale-in": "scale-in var(--duration-slow) var(--ease-out)",
        "scale-out": "scale-out var(--duration-normal) var(--ease-in)",
        spin: "spin 1s linear infinite",
        bounce: "bounce 0.5s ease-in-out infinite",
      },
    },
  },
  plugins: [
    // 自定义插件：像素特效
    function ({ addUtilities }) {
      const pixelEffects = {
        ".pixel-perfect": {
          "image-rendering": "pixelated",
          "-ms-interpolation-mode": "nearest-neighbor",
        },
        ".no-font-smooth": {
          "-webkit-font-smoothing": "none",
          "-moz-osx-font-smoothing": "grayscale",
          "font-smooth": "never",
        },
      };
      addUtilities(pixelEffects);
    },
  ],
};
