/**
 * useParticles Hook - React Hook for particle effects
 *
 * 提供粒子效果的 React 集成
 */

import { useEffect, useRef, useState, useCallback, RefObject } from "react";

import {
  ParticleSystem,
  ParticleEmitterOptions,
  Particle,
} from "@proton-ui/utils";

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
  canvasRef: RefObject<HTMLCanvasElement>;
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

  // 初始化粒子系统（只在组件挂载时初始化一次）
  useEffect(() => {
    console.log("[useParticles] 初始化粒子系统", options);
    systemRef.current = new ParticleSystem(options);

    return () => {
      console.log("[useParticles] 销毁粒子系统");
      if (systemRef.current) {
        systemRef.current.destroy();
      }
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []); // 空依赖数组，只在挂载时初始化一次

  // 渲染粒子到 Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      console.log("[useParticles] Canvas 未找到");
      return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      console.log("[useParticles] 无法获取 Canvas 2D 上下文");
      return;
    }

    console.log("[useParticles] 开始渲染循环");

    // 设置 Canvas 尺寸
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
      console.log(
        "[useParticles] Canvas 尺寸:",
        canvas.width,
        "x",
        canvas.height
      );
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
      console.log("[useParticles] 停止渲染循环");
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
      if (!systemRef.current || !canvasRef.current) {
        console.log("[useParticles] emit 失败: 系统或 Canvas 未初始化");
        return;
      }

      const canvas = canvasRef.current;
      const x = options.x ?? canvas.width / 2;
      const y = options.y ?? canvas.height / 2;

      console.log("[useParticles] 发射粒子:", {
        x,
        y,
        type: options.type,
        count: options.count,
      });

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
