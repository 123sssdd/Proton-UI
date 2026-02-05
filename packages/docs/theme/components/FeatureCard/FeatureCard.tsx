import React from "react";
import type { FeatureCardProps } from "./types";
import styles from "./FeatureCard.module.css";

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  metrics,
  highlights,
  badge,
  className = "",
}) => {
  return (
    <div className={`${styles.featureCard} ${className}`}>
      <span className={styles.icon}>{icon}</span>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>

      {metrics && metrics.length > 0 && (
        <div className={styles.metrics}>
          {metrics.map((metric, index) => (
            <div key={index} className={styles.metric}>
              <span className={styles.metricLabel}>{metric.label}</span>
              <span className={styles.metricValue}>{metric.value}</span>
            </div>
          ))}
        </div>
      )}

      {highlights && highlights.length > 0 && (
        <ul className={styles.highlights}>
          {highlights.map((highlight, index) => (
            <li key={index} className={styles.highlight}>
              {highlight}
            </li>
          ))}
        </ul>
      )}
      {badge && (
        <div
          className={`${styles.badge} ${badge.color === "red" ? styles.badgeRed : ""}`}
        >
          {badge.text}
        </div>
      )}
    </div>
  );
};
