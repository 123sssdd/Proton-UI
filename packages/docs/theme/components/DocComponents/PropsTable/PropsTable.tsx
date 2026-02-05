import React from "react";
import type { PropsTableProps } from "./types";
import styles from "./PropsTable.module.css";

/**
 * PropsTable 组件
 *
 * 以表格形式展示组件属性文档。
 * 支持响应式布局，在移动端使用卡片式布局。
 */
export const PropsTable: React.FC<PropsTableProps> = ({ data }) => {
  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>属性名</th>
            <th>类型</th>
            <th>必需</th>
            <th>默认值</th>
            <th>描述</th>
          </tr>
        </thead>
        <tbody>
          {data.map((prop) => (
            <tr key={prop.name}>
              <td className={styles.propName} data-label="属性名">
                {prop.name}
              </td>
              <td className={styles.propType} data-label="类型">
                <code>{prop.type}</code>
              </td>
              <td className={styles.propRequired} data-label="必需">
                {prop.required ? "是" : "否"}
              </td>
              <td className={styles.propDefault} data-label="默认值">
                {prop.defaultValue ? <code>{prop.defaultValue}</code> : "-"}
              </td>
              <td className={styles.propDescription} data-label="描述">
                {prop.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// 添加 default export 以支持 Rspress globalComponents
export default PropsTable;
