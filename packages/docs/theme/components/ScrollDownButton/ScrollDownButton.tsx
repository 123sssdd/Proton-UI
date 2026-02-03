import React from "react";
import styles from "./ScrollDownButton.module.css";

export const ScrollDownButton: React.FC = () => {
  const handleClick = () => {
    const coreFeaturesSection = document.querySelector(
      ".core-features-container"
    );
    if (coreFeaturesSection) {
      coreFeaturesSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <button
      className={styles.scrollDownButton}
      onClick={handleClick}
      aria-label="滚动到核心技术亮点"
    >
      <div className={styles.content}>
        <span className={styles.icon}>🎯</span>
        <span className={styles.text}>核心技术亮点</span>
        <svg
          className={styles.arrow}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 5V19M12 19L5 12M12 19L19 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </button>
  );
};
