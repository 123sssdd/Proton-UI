#!/usr/bin/env node

import { readFileSync, statSync } from "fs";
import { join } from "path";
import { gzipSync } from "zlib";

interface BundleInfo {
  file: string;
  size: number;
  gzipSize: number;
}

/**
 * 格式化文件大小
 */
function formatSize(bytes: number): string {
  if (bytes < 1024) {
    return `${bytes} B`;
  } else if (bytes < 1024 * 1024) {
    return `${(bytes / 1024).toFixed(2)} KB`;
  } else {
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  }
}

/**
 * 分析单个文件
 */
function analyzeFile(filePath: string): BundleInfo {
  const content = readFileSync(filePath);
  const stats = statSync(filePath);
  const gzipped = gzipSync(content);

  return {
    file: filePath,
    size: stats.size,
    gzipSize: gzipped.length,
  };
}

/**
 * 主函数
 */
function main() {
  const distPath = join(process.cwd(), "packages/core/dist");

  console.log("\n📦 Bundle Size Analysis\n");
  console.log("=".repeat(60));

  const files = ["index.js", "index.cjs"];

  files.forEach((file) => {
    const filePath = join(distPath, file);
    try {
      const info = analyzeFile(filePath);
      console.log(`\n${file}:`);
      console.log(`  Original: ${formatSize(info.size)}`);
      console.log(`  Gzipped:  ${formatSize(info.gzipSize)}`);
    } catch (error) {
      console.error(`  Error analyzing ${file}:`, error);
    }
  });

  console.log("\n" + "=".repeat(60));
  console.log("\n✅ Analysis complete!\n");
}

main();
