/**
 * 属性定义接口
 */
export interface PropDefinition {
  /** 属性名称 */
  name: string;
  /** TypeScript 类型 */
  type: string;
  /** 是否必需 */
  required: boolean;
  /** 默认值 */
  defaultValue?: string;
  /** 属性描述 */
  description: string;
}

/**
 * PropsTable 组件属性接口
 */
export interface PropsTableProps {
  /** 属性定义数据 */
  data: PropDefinition[];
}
