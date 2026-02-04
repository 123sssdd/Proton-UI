import React, { useState } from "react";
import { Input } from "@proton-ui/core";

/**
 * 表单验证演示组件
 *
 * 展示实时表单验证功能，包括：
 * - 用户名验证（长度检查）
 * - 邮箱验证（格式检查）
 * - 密码验证（长度和强度检查）
 */
export const InputValidationDemo: React.FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 用户名验证逻辑
  const validateUsername = (value: string): string => {
    if (!value) return "";
    if (value.length < 3) {
      return "用户名长度至少为 3 个字符";
    }
    if (value.length > 20) {
      return "用户名长度不能超过 20 个字符";
    }
    if (!/^[a-zA-Z0-9_]+$/.test(value)) {
      return "用户名只能包含字母、数字和下划线";
    }
    return "";
  };

  // 邮箱验证逻辑
  const validateEmail = (value: string): string => {
    if (!value) return "";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      return "请输入有效的邮箱地址";
    }
    return "";
  };

  // 密码验证逻辑
  const validatePassword = (value: string): string => {
    if (!value) return "";
    if (value.length < 8) {
      return "密码长度至少为 8 个字符";
    }
    if (value.length > 50) {
      return "密码长度不能超过 50 个字符";
    }
    if (!/[a-z]/.test(value)) {
      return "密码必须包含至少一个小写字母";
    }
    if (!/[A-Z]/.test(value)) {
      return "密码必须包含至少一个大写字母";
    }
    if (!/[0-9]/.test(value)) {
      return "密码必须包含至少一个数字";
    }
    return "";
  };

  // 获取密码强度
  const getPasswordStrength = (value: string): string => {
    if (!value) return "";
    const error = validatePassword(value);
    if (error) return "";

    let strength = 0;
    if (value.length >= 12) strength++;
    if (/[a-z]/.test(value)) strength++;
    if (/[A-Z]/.test(value)) strength++;
    if (/[0-9]/.test(value)) strength++;
    if (/[^a-zA-Z0-9]/.test(value)) strength++;

    if (strength <= 2) return "密码强度：弱";
    if (strength <= 4) return "密码强度：中";
    return "密码强度：强";
  };

  const usernameError = validateUsername(username);
  const emailError = validateEmail(email);
  const passwordError = validatePassword(password);
  const passwordStrength = getPasswordStrength(password);

  return (
    <div className="space-y-4 max-w-md">
      <Input
        label="用户名"
        placeholder="请输入用户名"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        error={usernameError}
        helperText={
          !usernameError && username
            ? "✓ 用户名可用"
            : "3-20 个字符，只能包含字母、数字和下划线"
        }
        required
        fullWidth
      />

      <Input
        label="邮箱"
        type="email"
        placeholder="example@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={emailError}
        helperText={
          !emailError && email ? "✓ 邮箱格式正确" : "请输入有效的邮箱地址"
        }
        required
        fullWidth
      />

      <Input
        label="密码"
        type="password"
        placeholder="请输入密码"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        error={passwordError}
        helperText={
          !passwordError && password
            ? passwordStrength
            : "至少 8 个字符，包含大小写字母和数字"
        }
        required
        fullWidth
      />

      {/* 验证状态总结 */}
      {username && email && password && (
        <div className="mt-6 p-4 rounded-md border-base bg-[var(--color-bg-secondary)]">
          <h4 className="text-sm font-pixel font-semibold mb-2 text-[var(--color-text-primary)]">
            表单验证状态
          </h4>
          <div className="space-y-1 text-xs font-pixel">
            <div className="flex items-center gap-2">
              <span
                className={
                  usernameError ? "text-[var(--color-error)]" : "text-green-500"
                }
              >
                {usernameError ? "✗" : "✓"}
              </span>
              <span className="text-[var(--color-text-secondary)]">
                用户名{usernameError ? "无效" : "有效"}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span
                className={
                  emailError ? "text-[var(--color-error)]" : "text-green-500"
                }
              >
                {emailError ? "✗" : "✓"}
              </span>
              <span className="text-[var(--color-text-secondary)]">
                邮箱{emailError ? "无效" : "有效"}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span
                className={
                  passwordError ? "text-[var(--color-error)]" : "text-green-500"
                }
              >
                {passwordError ? "✗" : "✓"}
              </span>
              <span className="text-[var(--color-text-secondary)]">
                密码{passwordError ? "无效" : "有效"}
              </span>
            </div>
          </div>
          {!usernameError && !emailError && !passwordError && (
            <div className="mt-3 pt-3 border-t border-[var(--color-text-secondary)] border-opacity-20">
              <p className="text-xs text-green-500 font-pixel">
                ✓ 所有字段验证通过，可以提交表单
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default InputValidationDemo;
