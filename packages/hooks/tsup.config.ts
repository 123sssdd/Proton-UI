import { defineConfig } from "tsup";

export default defineConfig({
  // 入口文件
  entry: ["src/index.ts"],

  // 输出格式：ESM 和 CJS
  format: ["esm", "cjs"],

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
  },
});
