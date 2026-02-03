import React from "react";
import type { LoadingIndicatorProps } from "./types";
import styles from "./LoadingIndicator.module.css";

export const LoadingIndicator: React.FC<LoadingIndicatorProps> = ({
  size = "medium",
  color,
  text = "Loading...",
}) => {
  return (
    <div className={`${styles.loadingContainer} ${styles[size]}`}>
      <div
        className={styles.pixelSpinner}
        style={color ? { borderColor: color } : undefined}
      >
        <div className={styles.pixel1}></div>
        <div className={styles.pixel2}></div>
        <div className={styles.pixel3}></div>
        <div className={styles.pixel4}></div>
      </div>
      {text && <p className={styles.loadingText}>{text}</p>}
    </div>
  );
};
