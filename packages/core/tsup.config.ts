import { copyFileSync, mkdirSync, readdirSync, statSync } from "fs";
import { join } from "path";

import { defineConfig } from "tsup";

// 递归复制目录
function copyDir(src: string, dest: string) {
  mkdirSync(dest, { recursive: true });
  const entries = readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = join(src, entry.name);
    const destPath = join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      copyFileSync(srcPath, destPath);
    }
  }
}

export default defineConfig({
  // 入口文件
  entry: ["src/index.ts"],

  // 输出格式：ESM 和 CJS
  format: ["esm", "cjs"],

  // 确保 ESM 格式由于给浏览器使用，排除 Node.js 内置模块
  platform: "browser",

  // 生成类型声明文件
  dts: {
    compilerOptions: {
      incremental: false,
      composite: false,
    },
  },

  // 代码分割（关闭以生成单个文件）
  splitting: false,

  // 生成 sourcemap
  sourcemap: true,

  // 构建前清理输出目录
  clean: true,

  // 外部依赖（不打包进 bundle）
  external: ["react", "react-dom"],

  // 强制打包内部工作区依赖，解决文档链接导出问题
  noExternal: ["@proton-ui/utils", "@proton-ui/hooks", "@proton-ui/components"],

  // Tree-shaking（移除未使用的代码）
  treeshake: true,

  // 生产环境压缩代码
  minify: process.env.NODE_ENV === "production",

  // 目标环境
  target: "es2020",

  // 输出目录
  outDir: "dist",

  // 保留原始文件名
  outExtension({ format }) {
    return {
      js: format === "cjs" ? ".cjs" : ".js",
    };
  },

  // 构建完成后的回调
  onSuccess: async () => {
    console.log("✅ Build completed successfully!");
    console.log("📦 Copying CSS files...");

    try {
      // 复制整个 styles 目录到 dist
      copyDir("src/styles", "dist/styles");
      console.log("✅ CSS files copied successfully!");
    } catch (error) {
      console.error("❌ Failed to copy CSS files:", error);
      throw error;
    }
  },
});
