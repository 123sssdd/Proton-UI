/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./docs/**/*.{js,ts,jsx,tsx,mdx}",
    "./theme/**/*.{js,ts,jsx,tsx}",
    "../core/src/**/*.{js,ts,jsx,tsx}",
    "../streaming/src/**/*.{js,ts,jsx,tsx}",
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
        "pixel-border": "#333355", // Added specific border color
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
  plugins: [],
};
