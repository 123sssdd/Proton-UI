import baseConfig from "../../configs/tailwind-config/index.js";

/** @type {import('tailwindcss').Config} */
export default {
  ...baseConfig,
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "../../packages/core/src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "pixel-bg": "#0a0a1a",
        "pixel-section": "#161b33",
        "pixel-card": "#222845",
        "pixel-cyan": "#0ff0fc",
        "pixel-pink": "#ff9ecd",
        "pixel-gold": "#ffd700",
        "pixel-text": "#e0e0e0",
        "pixel-muted": "#a0a0c0",
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', "monospace"],
      },
      boxShadow: {
        pixel: "4px 4px 0px 0px rgba(0, 0, 0, 0.5)",
        "pixel-sm": "2px 2px 0px 0px rgba(0, 0, 0, 0.5)",
        "pixel-lg": "6px 6px 0px 0px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [...(baseConfig.plugins || []), require("@tailwindcss/typography")],
};
