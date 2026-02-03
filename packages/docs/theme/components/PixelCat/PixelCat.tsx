import React, { useState, useEffect } from "react";
import type { PixelCatProps, PixelCatState } from "./types";

const defaultAnimations = [
  {
    name: "idle",
    frames: ["/pixel-cat/idle-1-blue.svg", "/pixel-cat/idle-2-blue.svg"],
    duration: 1000,
    loop: true,
  },
  {
    name: "wave",
    frames: [
      "/pixel-cat/wave-1.svg",
      "/pixel-cat/wave-2.svg",
      "/pixel-cat/wave-3.svg",
    ],
    duration: 600,
    loop: false,
  },
  {
    name: "jump",
    frames: [
      "/pixel-cat/jump-1.svg",
      "/pixel-cat/jump-2.svg",
      "/pixel-cat/jump-3.svg",
    ],
    duration: 450,
    loop: false,
  },
];

export const PixelCat: React.FC<PixelCatProps> = ({
  position = "wandering",
  size = "small",
  animations = defaultAnimations,
  onClick,
  onHover,
}) => {
  const [state, setState] = useState<PixelCatState>({
    currentAnimation: "idle",
    isHovered: false,
    isClicked: false,
  });

  const [currentFrame, setCurrentFrame] = useState(0);
  const [catPosition, setCatPosition] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // 客户端挂载检测
  useEffect(() => {
    setIsMounted(true);
    if (typeof window !== "undefined") {
      setCatPosition({
        x: window.innerWidth - 200,
        y: window.innerHeight - 200,
      });
    }
  }, []);

  // 动画帧切换
  useEffect(() => {
    const animation = animations.find((a) => a.name === state.currentAnimation);
    if (!animation) return;

    const frameInterval = animation.duration / animation.frames.length;
    const interval = setInterval(() => {
      setCurrentFrame((prev) => {
        const next = prev + 1;
        if (next >= animation.frames.length) {
          if (animation.loop) {
            return 0;
          } else {
            setState((prevState) => ({
              ...prevState,
              currentAnimation: "idle",
            }));
            return 0;
          }
        }
        return next;
      });
    }, frameInterval);

    return () => clearInterval(interval);
  }, [state.currentAnimation, animations]);

  // 随机移动逻辑
  useEffect(() => {
    if (!isMounted || typeof window === "undefined") return;

    const moveRandomly = () => {
      if (isMoving) return;

      setIsMoving(true);
      setState((prev) => ({ ...prev, currentAnimation: "jump" }));

      // 随机目标位置（避开右下角的回到顶部按钮区域）
      const maxX = window.innerWidth - 150;
      const maxY = window.innerHeight - 150;
      const minX = 50;
      const minY = 50;

      const targetX = Math.random() * (maxX - minX) + minX;
      const targetY = Math.random() * (maxY - minY) + minY;

      // 避开右下角 100x100 的区域（回到顶部按钮）
      const avoidX = window.innerWidth - 150;
      const avoidY = window.innerHeight - 150;

      const finalX =
        targetX > avoidX && targetY > avoidY
          ? Math.random() * (maxX - 200) + minX
          : targetX;
      const finalY =
        targetX > avoidX && targetY > avoidY
          ? Math.random() * (maxY - 200) + minY
          : targetY;

      // 平滑移动
      setCatPosition({ x: finalX, y: finalY });

      setTimeout(() => {
        setIsMoving(false);
        setState((prev) => ({ ...prev, currentAnimation: "idle" }));
      }, 2000);
    };

    // 每 5-10 秒随机移动一次
    const randomInterval = Math.random() * 5000 + 5000;
    const timer = setTimeout(moveRandomly, randomInterval);

    return () => clearTimeout(timer);
  }, [isMoving, catPosition, isMounted]);

  const handleClick = () => {
    setState((prev) => ({
      ...prev,
      isClicked: true,
      currentAnimation: "jump",
    }));
    onClick?.();
    setTimeout(() => {
      setState((prev) => ({ ...prev, isClicked: false }));
    }, 500);
  };

  const handleMouseEnter = () => {
    setState((prev) => ({
      ...prev,
      isHovered: true,
      currentAnimation: "wave",
    }));
    onHover?.();
  };

  const handleMouseLeave = () => {
    setState((prev) => ({
      ...prev,
      isHovered: false,
      currentAnimation: "idle",
    }));
  };

  const animation = animations.find((a) => a.name === state.currentAnimation);
  const currentFrameSrc =
    animation?.frames[currentFrame] || animations[0]?.frames[0];

  // 判断是否在首页
  const isHomePage =
    typeof window !== "undefined" &&
    (window.location.pathname === "/" ||
      window.location.pathname === "/index.html");

  // 只在首页且客户端挂载后显示
  if (!isHomePage || !isMounted) {
    return null;
  }

  return (
    <div
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      role="button"
      aria-label="像素猫助手"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleClick();
        }
      }}
      style={{
        position: "fixed",
        left: `${catPosition.x}px`,
        top: `${catPosition.y}px`,
        width: "120px",
        height: "120px",
        cursor: "pointer",
        transition: "all 2s ease-in-out",
        zIndex: 998,
        filter:
          "drop-shadow(0 0 25px rgba(88, 166, 255, 0.8)) drop-shadow(0 0 50px rgba(88, 166, 255, 0.6))",
      }}
      className="pixel-cat-wandering"
    >
      <img
        src={currentFrameSrc}
        alt="Pixel Cat"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
          imageRendering: "pixelated",
        }}
      />
    </div>
  );
};
