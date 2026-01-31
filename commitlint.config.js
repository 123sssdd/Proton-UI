const fs = require("fs");
const path = require("path");

// 动态获取 packages 目录下的所有包名作为 scope
function getPackageScopes() {
  const packagesDir = path.resolve(__dirname, "packages");
  const configsDir = path.resolve(__dirname, "configs");
  const appsDir = path.resolve(__dirname, "apps");

  const scopes = ["config", "ci", "deps", "release"];

  // 扫描 packages 目录
  if (fs.existsSync(packagesDir)) {
    const packages = fs.readdirSync(packagesDir);
    packages.forEach((pkg) => {
      if (fs.statSync(path.join(packagesDir, pkg)).isDirectory()) {
        scopes.push(pkg);
      }
    });
  }

  // 扫描 configs 目录
  if (fs.existsSync(configsDir)) {
    const configs = fs.readdirSync(configsDir);
    configs.forEach((cfg) => {
      if (fs.statSync(path.join(configsDir, cfg)).isDirectory()) {
        scopes.push(cfg);
      }
    });
  }

  // 扫描 apps 目录
  if (fs.existsSync(appsDir)) {
    const apps = fs.readdirSync(appsDir);
    apps.forEach((app) => {
      if (fs.statSync(path.join(appsDir, app)).isDirectory()) {
        scopes.push(app);
      }
    });
  }

  return scopes;
}

module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat",
        "fix",
        "docs",
        "style",
        "refactor",
        "perf",
        "test",
        "build",
        "ci",
        "chore",
        "revert",
      ],
    ],
    "scope-enum": [2, "always", getPackageScopes()],
    "subject-case": [2, "never", ["upper-case"]],
    "header-max-length": [2, "always", 100],
  },
  prompt: {
    // cz-git 配置
    alias: { fd: "docs: fix typos" },
    messages: {
      type: "选择你要提交的类型 :",
      scope: "选择一个提交范围（可选）:",
      customScope: "请输入自定义的提交范围 :",
      subject: "填写简短精炼的变更描述 :\n",
      body: '填写更加详细的变更描述（可选）。使用 "|" 换行 :\n',
      breaking: '列举非兼容性重大的变更（可选）。使用 "|" 换行 :\n',
      footerPrefixesSelect: "选择关联issue前缀（可选）:",
      customFooterPrefix: "输入自定义issue前缀 :",
      footer: "列举关联issue (可选) 例如: #31, #I3244 :\n",
      confirmCommit: "是否提交或修改commit ?",
    },
    types: [
      {
        value: "feat",
        name: "feat:     ✨  新增功能 | A new feature",
        emoji: ":sparkles:",
      },
      {
        value: "fix",
        name: "fix:      🐛  修复缺陷 | A bug fix",
        emoji: ":bug:",
      },
      {
        value: "docs",
        name: "docs:     📝  文档更新 | Documentation only changes",
        emoji: ":memo:",
      },
      {
        value: "style",
        name: "style:    💄  代码格式 | Changes that do not affect the meaning of the code",
        emoji: ":lipstick:",
      },
      {
        value: "refactor",
        name: "refactor: ♻️   代码重构 | A code change that neither fixes a bug nor adds a feature",
        emoji: ":recycle:",
      },
      {
        value: "perf",
        name: "perf:     ⚡️  性能提升 | A code change that improves performance",
        emoji: ":zap:",
      },
      {
        value: "test",
        name: "test:     ✅  测试相关 | Adding missing tests or correcting existing tests",
        emoji: ":white_check_mark:",
      },
      {
        value: "build",
        name: "build:    📦️  构建相关 | Changes that affect the build system or external dependencies",
        emoji: ":package:",
      },
      {
        value: "ci",
        name: "ci:       🎡  持续集成 | Changes to our CI configuration files and scripts",
        emoji: ":ferris_wheel:",
      },
      {
        value: "chore",
        name: "chore:    🔨  其他修改 | Other changes that don't modify src or test files",
        emoji: ":hammer:",
      },
      {
        value: "revert",
        name: "revert:   ⏪️  回退代码 | Reverts a previous commit",
        emoji: ":rewind:",
      },
    ],
    useEmoji: true,
    emojiAlign: "center",
    useAI: false,
    aiNumber: 1,
    themeColorCode: "",
    scopes: getPackageScopes(),
    allowCustomScopes: true,
    allowEmptyScopes: false,
    customScopesAlign: "bottom",
    customScopesAlias: "custom",
    emptyScopesAlias: "empty",
    upperCaseSubject: false,
    markBreakingChangeMode: false,
    allowBreakingChanges: ["feat", "fix"],
    breaklineNumber: 100,
    breaklineChar: "|",
    skipQuestions: [],
    issuePrefixes: [
      { value: "closed", name: "closed:   ISSUES has been processed" },
    ],
    customIssuePrefixAlign: "top",
    emptyIssuePrefixAlias: "skip",
    customIssuePrefixAlias: "custom",
    allowCustomIssuePrefix: true,
    allowEmptyIssuePrefix: true,
    confirmColorize: true,
    maxHeaderLength: Infinity,
    maxSubjectLength: Infinity,
    minSubjectLength: 0,
    scopeOverrides: undefined,
    defaultBody: "",
    defaultIssues: "",
    defaultScope: "",
    defaultSubject: "",
  },
};
