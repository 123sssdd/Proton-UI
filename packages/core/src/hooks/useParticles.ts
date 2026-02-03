/**
 * useParticles Hook - React Hook for particle effects
 *
 * 提供粒子效果的 React 集成
 */

import { useEffect, useRef, useState, useCallback } from "react";

import {
  ParticleSystem,
  ParticleEmitterOptions,
  Particle,
} from "../utils/ParticleSystem";

export interface UseParticlesOptions {
  maxParticles?: number;
  respectMotionPreference?: boolean;
}

export interface UseParticlesReturn {
  particles: Particle[];
  emit: (
    options: Omit<ParticleEmitterOptions, "x" | "y"> & {
      x?: number;
      y?: number;
    }
  ) => void;
  emitAt: (
    x: number,
    y: number,
    options: Omit<ParticleEmitterOptions, "x" | "y">
  ) => void;
  clear: () => void;
  canvasRef: React.RefObject<HTMLCanvasElement>;
}

/**
 * useParticles Hook
 *
 * @example
 * ```tsx
 * const { particles, emit, canvasRef } = useParticles();
 *
 * const handleClick = (e) => {
 *   emit({
 *     x: e.clientX,
 *     y: e.clientY,
 *     count: 20,
 *     type: 'explosion',
 *   });
 * };
 *
 * return (
 *   <div onClick={handleClick}>
 *     <canvas ref={canvasRef} />
 *   </div>
 * );
 * ```
 */
export function useParticles(
  options: UseParticlesOptions = {}
): UseParticlesReturn {
  const systemRef = useRef<ParticleSystem | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const animationFrameRef = useRef<number | null>(null);

  // 初始化粒子系统
  useEffect(() => {
    systemRef.current = new ParticleSystem(options);

    return () => {
      if (systemRef.current) {
        systemRef.current.destroy();
      }
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [options]);

  // 渲染粒子到 Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // 设置 Canvas 尺寸
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // 渲染循环
    const render = () => {
      if (!systemRef.current) return;

      // 清空画布
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 获取当前粒子
      const currentParticles = systemRef.current.getParticles();
      setParticles([...currentParticles]);

      // 渲染每个粒子
      currentParticles.forEach((particle) => {
        ctx.save();

        // 设置透明度
        ctx.globalAlpha = particle.opacity;

        // 移动到粒子位置
        ctx.translate(particle.x, particle.y);

        // 应用旋转
        if (particle.rotation !== undefined) {
          ctx.rotate((particle.rotation * Math.PI) / 180);
        }

        // 绘制粒子（像素风格方块）
        ctx.fillStyle = particle.color;
        const halfSize = particle.size / 2;
        ctx.fillRect(-halfSize, -halfSize, particle.size, particle.size);

        ctx.restore();
      });

      animationFrameRef.current = requestAnimationFrame(render);
    };

    animationFrameRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  // 发射粒子（使用默认位置：画布中心）
  const emit = useCallback(
    (
      options: Omit<ParticleEmitterOptions, "x" | "y"> & {
        x?: number;
        y?: number;
      }
    ) => {
      if (!systemRef.current || !canvasRef.current) return;

      const canvas = canvasRef.current;
      const x = options.x ?? canvas.width / 2;
      const y = options.y ?? canvas.height / 2;

      systemRef.current.emit({
        ...options,
        x,
        y,
      } as ParticleEmitterOptions);
    },
    []
  );

  // 在指定位置发射粒子
  const emitAt = useCallback(
    (
      x: number,
      y: number,
      options: Omit<ParticleEmitterOptions, "x" | "y">
    ) => {
      if (!systemRef.current) return;

      systemRef.current.emit({
        ...options,
        x,
        y,
      } as ParticleEmitterOptions);
    },
    []
  );

  // 清除所有粒子
  const clear = useCallback(() => {
    if (!systemRef.current) return;
    systemRef.current.clear();
    setParticles([]);
  }, []);

  return {
    particles,
    emit,
    emitAt,
    clear,
    canvasRef,
  };
}
