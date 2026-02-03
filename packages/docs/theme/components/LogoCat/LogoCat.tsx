import React, { useState, useEffect } from "react";

const logoAnimations = [
  {
    name: "idle",
    frames: ["/pixel-cat/idle-1-blue.svg", "/pixel-cat/idle-2-blue.svg"],
    duration: 1000,
    loop: true,
  },
];

export const LogoCat: React.FC = () => {
  const [currentFrame, setCurrentFrame] = useState(0);

  useEffect(() => {
    const animation = logoAnimations[0];
    const frameInterval = animation.duration / animation.frames.length;

    const interval = setInterval(() => {
      setCurrentFrame((prev) => {
        const next = prev + 1;
        if (next >= animation.frames.length) {
          return 0;
        }
        return next;
      });
    }, frameInterval);

    return () => clearInterval(interval);
  }, []);

  const currentFrameSrc = logoAnimations[0].frames[currentFrame];

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "14px",
        cursor: "pointer",
      }}
    >
      <img
        src={currentFrameSrc}
        alt="Proton UI Logo"
        style={{
          width: "52px",
          height: "52px",
          imageRendering: "pixelated",
          filter: "drop-shadow(0 0 12px rgba(88, 166, 255, 0.8))",
          transition: "all 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.1) rotate(5deg)";
          e.currentTarget.style.filter =
            "drop-shadow(0 0 20px rgba(52, 211, 153, 1))";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1) rotate(0deg)";
          e.currentTarget.style.filter =
            "drop-shadow(0 0 12px rgba(88, 166, 255, 0.8))";
        }}
      />
      <span
        style={{
          fontFamily: '"Ark Pixel", monospace',
          fontSize: "1.5rem",
          fontWeight: "bold",
          background: "linear-gradient(135deg, #58a6ff 0%, #79c0ff 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          letterSpacing: "1.5px",
        }}
      >
        Proton UI
      </span>
    </div>
  );
};
