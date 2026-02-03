import React, { useState, useEffect } from "react";
import { useScrollPosition } from "../../hooks/useScrollPosition";
import type { BackToTopProps } from "./types";

export const BackToTop: React.FC<BackToTopProps> = ({
  threshold = 300,
  position = "bottom-right",
  offset = { x: 24, y: 100 },
  smooth = true,
}) => {
  const scrollPosition = useScrollPosition();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(scrollPosition > threshold);
  }, [scrollPosition, threshold]);

  const scrollToTop = () => {
    if (smooth) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo(0, 0);
    }
  };

  if (!visible) return null;

  const buttonStyles: React.CSSProperties = {
    position: "fixed",
    zIndex: 1000,
    width: "48px",
    height: "48px",
    border: "2px solid var(--rp-c-divider, #e5e7eb)",
    borderRadius: "4px",
    background: "var(--pixel-primary, #58a6ff)",
    color: "white",
    boxShadow:
      "2px 2px 0px var(--pixel-shadow, rgba(88, 166, 255, 0.3)), 0 0 10px var(--pixel-glow, #1f6feb)",
    cursor: "pointer",
    transition: "all 0.2s ease",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "24px",
    fontWeight: "bold",
  };

  if (position.includes("right")) {
    buttonStyles.right = `${offset.x}px`;
  } else {
    buttonStyles.left = `${offset.x}px`;
  }
  buttonStyles.bottom = `${offset.y}px`;

  return (
    <button
      onClick={scrollToTop}
      style={buttonStyles}
      aria-label="返回顶部"
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translate(-2px, -2px)";
        e.currentTarget.style.boxShadow =
          "4px 4px 0px var(--pixel-shadow, rgba(88, 166, 255, 0.3)), 0 0 20px var(--pixel-glow, #1f6feb), 0 0 30px var(--pixel-neon-mid, #79c0ff)";
        e.currentTarget.style.background = "var(--pixel-secondary, #79c0ff)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translate(0, 0)";
        e.currentTarget.style.boxShadow =
          "2px 2px 0px var(--pixel-shadow, rgba(88, 166, 255, 0.3)), 0 0 10px var(--pixel-glow, #1f6feb)";
        e.currentTarget.style.background = "var(--pixel-primary, #58a6ff)";
      }}
    >
      <span>↑</span>
    </button>
  );
};
