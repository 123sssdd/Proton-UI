/**
 * CodeBlock 组件属性接口
 */
export interface CodeBlockProps {
  /** 代码内容 */
  code: string;
  /** 代码语言 */
  language: string;
  /** 是否显示行号 */
  showLineNumbers?: boolean;
  /** 高亮的行号数组 */
  highlightLines?: number[];
  /** 文件名 */
  filename?: string;
}
