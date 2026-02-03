import baseConfig from "../../configs/tailwind-config/index.js";

/** @type {import('tailwindcss').Config} */
export default {
  ...baseConfig,
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "../../packages/core/src/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [...(baseConfig.plugins || []), require("@tailwindcss/typography")],
};
