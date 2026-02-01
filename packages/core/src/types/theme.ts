/**
 * 主题颜色配置
 */
export interface ThemeColors {
  /**
   * 主色调
   */
  primary: string;

  /**
   * 次要色
   */
  secondary: string;

  /**
   * 强调色
   */
  accent: string;

  /**
   * 背景色
   */
  background: string;

  /**
   * 文本色
   */
  text: string;

  /**
   * 边框色
   */
  border: string;

  /**
   * 成功色
   */
  success: string;

  /**
   * 警告色
   */
  warning: string;

  /**
   * 错误色
   */
  error: string;

  /**
   * 信息色
   */
  info: string;
}

/**
 * 主题间距配置
 */
export interface ThemeSpacing {
  /**
   * 基础单位（px）
   */
  unit: number;
}

/**
 * 主题圆角配置
 */
export interface ThemeBorderRadius {
  /**
   * 小圆角
   */
  sm: string;

  /**
   * 中等圆角
   */
  md: string;

  /**
   * 大圆角
   */
  lg: string;

  /**
   * 完全圆角
   */
  full: string;
}

/**
 * 主题阴影配置
 */
export interface ThemeShadow {
  /**
   * 小阴影
   */
  sm: string;

  /**
   * 中等阴影
   */
  md: string;

  /**
   * 大阴影
   */
  lg: string;

  /**
   * 超大阴影
   */
  xl: string;
}

/**
 * 主题字体配置
 */
export interface ThemeTypography {
  /**
   * 字体族
   */
  fontFamily: string;

  /**
   * 字体大小
   */
  fontSize: {
    xs: string;
    sm: string;
    base: string;
    lg: string;
    xl: string;
    "2xl": string;
    "3xl": string;
  };

  /**
   * 字体粗细
   */
  fontWeight: {
    normal: number;
    medium: number;
    semibold: number;
    bold: number;
  };

  /**
   * 行高
   */
  lineHeight: {
    tight: number;
    normal: number;
    relaxed: number;
  };
}

/**
 * 完整的主题配置
 */
export interface ThemeConfig {
  /**
   * 颜色配置
   */
  colors: ThemeColors;

  /**
   * 间距配置
   */
  spacing: ThemeSpacing;

  /**
   * 圆角配置
   */
  borderRadius: ThemeBorderRadius;

  /**
   * 阴影配置
   */
  shadow: ThemeShadow;

  /**
   * 字体配置
   */
  typography: ThemeTypography;
}
