/**
 * ParticleEffect 组件 - 像素风格粒子效果
 *
 * 提供多种粒子效果：
 * - explosion: 爆炸效果
 * - float: 漂浮效果
 * - sparkle: 闪烁效果
 * - snow: 雪花飘落效果
 */

import React, { useEffect, useRef } from "react";

import { useParticles } from "../../hooks/useParticles";
import type { ParticleEffectType } from "../../utils/ParticleSystem";

export interface ParticleEffectProps {
  /**
   * 粒子效果类型
   */
  type: ParticleEffectType;

  /**
   * 是否自动触发效果
   */
  autoTrigger?: boolean;

  /**
   * 自动触发间隔（毫秒）
   */
  triggerInterval?: number;

  /**
   * 每次发射的粒子数量
   */
  count?: number;

  /**
   * 粒子颜色数组
   */
  colors?: string[];

  /**
   * 粒子大小范围
   */
  size?: { min: number; max: number };

  /**
   * 粒子速度范围
   */
  speed?: { min: number; max: number };

  /**
   * 粒子生命周期范围（毫秒）
   */
  life?: { min: number; max: number };

  /**
   * 最大粒子数
   */
  maxParticles?: number;

  /**
   * 是否遵循 prefers-reduced-motion
   */
  respectMotionPreference?: boolean;

  /**
   * Canvas 样式类名
   */
  className?: string;

  /**
   * Canvas 样式
   */
  style?: React.CSSProperties;

  /**
   * 点击时触发粒子效果
   */
  onClickEmit?: boolean;
}

export const ParticleEffect: React.FC<ParticleEffectProps> = ({
  type,
  autoTrigger = false,
  triggerInterval = 2000,
  count = 20,
  colors,
  size,
  speed,
  life,
  maxParticles = 500,
  respectMotionPreference = true,
  className = "",
  style = {},
  onClickEmit = false,
}) => {
  console.log("[ParticleEffect] 渲染:", { type, autoTrigger, count });

  const { emit, emitAt, canvasRef } = useParticles({
    maxParticles,
    respectMotionPreference,
  });

  const intervalRef = useRef<number | null>(null);

  // 自动触发效果
  useEffect(() => {
    if (!autoTrigger) {
      console.log("[ParticleEffect] autoTrigger 为 false，跳过自动触发");
      return;
    }

    console.log("[ParticleEffect] 设置自动触发:", {
      type,
      count,
      triggerInterval,
    });

    const triggerEffect = () => {
      console.log("[ParticleEffect] 触发粒子效果");
      emit({
        count,
        type,
        colors,
        size,
        speed,
        life,
      });
    };

    // 立即触发一次
    triggerEffect();

    // 设置定时器
    intervalRef.current = window.setInterval(triggerEffect, triggerInterval);

    return () => {
      console.log("[ParticleEffect] 清理定时器");
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
    };
  }, [
    autoTrigger,
    triggerInterval,
    count,
    type,
    colors,
    size,
    speed,
    life,
    emit,
  ]);

  // 点击触发效果
  const handleClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!onClickEmit) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    emitAt(x, y, {
      count,
      type,
      colors,
      size,
      speed,
      life,
    });
  };

  return (
    <canvas
      ref={canvasRef}
      className={`particle-effect ${className}`}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: onClickEmit ? "auto" : "none",
        ...style,
      }}
      onClick={handleClick}
    />
  );
};

ParticleEffect.displayName = "ParticleEffect";
