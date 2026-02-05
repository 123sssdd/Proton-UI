/**
 * 粒子系统 - 像素风格粒子效果引擎
 *
 * 功能：
 * - 粒子生命周期管理
 * - 粒子池优化
 * - 支持多种粒子效果（爆炸、漂浮、闪烁、飘落）
 * - 支持 prefers-reduced-motion
 */

export interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number; // x 方向速度
  vy: number; // y 方向速度
  size: number;
  color: string;
  life: number; // 生命值 (0-1)
  maxLife: number; // 最大生命值（毫秒）
  opacity: number;
  rotation: number;
  rotationSpeed: number;
}

export type ParticleEffectType = "explosion" | "float" | "sparkle" | "snow";

export interface ParticleSystemOptions {
  maxParticles?: number; // 最大粒子数
  respectMotionPreference?: boolean; // 是否遵循 prefers-reduced-motion
}

export interface ParticleEmitterOptions {
  x: number;
  y: number;
  count: number;
  type: ParticleEffectType;
  colors?: string[];
  size?: { min: number; max: number };
  speed?: { min: number; max: number };
  life?: { min: number; max: number };
  angle?: { min: number; max: number }; // 发射角度（度）
  spread?: number; // 扩散范围（度）
}

export class ParticleSystem {
  private particles: Particle[] = [];
  private particlePool: Particle[] = [];
  private nextId = 0;
  private maxParticles: number;
  private respectMotionPreference: boolean;
  private animationFrameId: number | null = null;
  private lastUpdateTime = 0;
  private isRunning = false;

  constructor(options: ParticleSystemOptions = {}) {
    this.maxParticles = options.maxParticles || 500;
    this.respectMotionPreference = options.respectMotionPreference !== false;
  }

  /**
   * 检查是否应该禁用动画（基于 prefers-reduced-motion）
   */
  private shouldReduceMotion(): boolean {
    if (!this.respectMotionPreference) return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  /**
   * 从粒子池获取粒子（对象池优化）
   */
  private getParticleFromPool(): Particle {
    const pooledParticle = this.particlePool.pop();
    if (pooledParticle) {
      return pooledParticle;
    }
    return {
      id: this.nextId++,
      x: 0,
      y: 0,
      vx: 0,
      vy: 0,
      size: 2,
      color: "#ffffff",
      life: 1,
      maxLife: 1000,
      opacity: 1,
      rotation: 0,
      rotationSpeed: 0,
    };
  }

  /**
   * 将粒子归还到粒子池
   */
  private returnParticleToPool(particle: Particle): void {
    if (this.particlePool.length < this.maxParticles) {
      this.particlePool.push(particle);
    }
  }

  /**
   * 发射粒子
   */
  emit(options: ParticleEmitterOptions): void {
    if (this.shouldReduceMotion()) {
      console.log("[ParticleSystem] 用户偏好减少动画，跳过粒子发射");
      return; // 如果用户偏好减少动画，则不发射粒子
    }

    const {
      x,
      y,
      count,
      type,
      colors = ["#4ECDC4", "#FF6B9D", "#FFB86C", "#7FD99F"],
      size = { min: 2, max: 4 },
      speed = { min: 50, max: 150 },
      life = { min: 500, max: 1500 },
      angle = { min: 0, max: 360 },
      spread = 360,
    } = options;

    // 限制粒子数量
    const actualCount = Math.min(
      count,
      this.maxParticles - this.particles.length
    );

    console.log("[ParticleSystem] 发射粒子:", {
      type,
      count: actualCount,
      position: { x, y },
      currentParticles: this.particles.length,
    });

    for (let i = 0; i < actualCount; i++) {
      const particle = this.getParticleFromPool();

      // 基础属性
      particle.x = x;
      particle.y = y;
      particle.size = this.random(size.min, size.max);
      const colorIndex = Math.floor(Math.random() * colors.length);
      particle.color = colors[colorIndex] || colors[0] || "#ffffff";
      particle.life = 1;
      particle.maxLife = this.random(life.min, life.max);
      particle.opacity = 1;

      // 根据效果类型设置速度和行为
      switch (type) {
        case "explosion":
          this.initExplosionParticle(particle, angle, spread, speed);
          break;
        case "float":
          this.initFloatParticle(particle, speed);
          break;
        case "sparkle":
          this.initSparkleParticle(particle);
          break;
        case "snow":
          this.initSnowParticle(particle, speed);
          break;
      }

      this.particles.push(particle);
    }

    // 启动更新循环
    if (!this.isRunning) {
      this.start();
    }
  }

  /**
   * 初始化爆炸效果粒子
   */
  private initExplosionParticle(
    particle: Particle,
    angleRange: { min: number; max: number },
    spread: number,
    speedRange: { min: number; max: number }
  ): void {
    const baseAngle = this.random(angleRange.min, angleRange.max);
    const angle = baseAngle + this.random(-spread / 2, spread / 2);
    const speed = this.random(speedRange.min, speedRange.max);
    const rad = (angle * Math.PI) / 180;

    particle.vx = Math.cos(rad) * speed;
    particle.vy = Math.sin(rad) * speed;
    particle.rotation = this.random(0, 360);
    particle.rotationSpeed = this.random(-180, 180);
  }

  /**
   * 初始化漂浮效果粒子
   */
  private initFloatParticle(
    particle: Particle,
    speedRange: { min: number; max: number }
  ): void {
    particle.vx = this.random(-20, 20);
    particle.vy = -this.random(speedRange.min, speedRange.max); // 向上漂浮
    particle.rotation = 0;
    particle.rotationSpeed = this.random(-45, 45);
  }

  /**
   * 初始化闪烁效果粒子
   */
  private initSparkleParticle(particle: Particle): void {
    particle.vx = 0;
    particle.vy = 0;
    particle.rotation = this.random(0, 360);
    particle.rotationSpeed = 0;
    // 闪烁效果通过 opacity 变化实现
  }

  /**
   * 初始化雪花飘落效果粒子
   */
  private initSnowParticle(
    particle: Particle,
    speedRange: { min: number; max: number }
  ): void {
    particle.vx = this.random(-30, 30); // 轻微左右摆动
    particle.vy = this.random(speedRange.min, speedRange.max); // 向下飘落
    particle.rotation = this.random(0, 360);
    particle.rotationSpeed = this.random(-30, 30);
  }

  /**
   * 更新粒子状态
   */
  private update(deltaTime: number): void {
    const dt = deltaTime / 1000; // 转换为秒

    for (let i = this.particles.length - 1; i >= 0; i--) {
      const particle = this.particles[i];
      if (!particle) continue;

      // 更新位置
      particle.x += particle.vx * dt;
      particle.y += particle.vy * dt;

      // 更新旋转
      particle.rotation += particle.rotationSpeed * dt;

      // 更新生命值
      particle.life -= deltaTime / particle.maxLife;

      // 更新透明度（基于生命值）
      particle.opacity = Math.max(0, particle.life);

      // 应用重力（爆炸和雪花效果）
      particle.vy += 98 * dt; // 重力加速度

      // 移除死亡粒子
      if (particle.life <= 0) {
        this.returnParticleToPool(particle);
        this.particles.splice(i, 1);
      }
    }

    // 如果没有粒子了，停止更新循环
    if (this.particles.length === 0) {
      this.stop();
    }
  }

  /**
   * 启动更新循环
   */
  private start(): void {
    if (this.isRunning) return;

    console.log("[ParticleSystem] 启动更新循环");
    this.isRunning = true;
    this.lastUpdateTime = performance.now();

    const updateLoop = (currentTime: number) => {
      if (!this.isRunning) return;

      const deltaTime = currentTime - this.lastUpdateTime;
      this.lastUpdateTime = currentTime;

      this.update(deltaTime);

      this.animationFrameId = requestAnimationFrame(updateLoop);
    };

    this.animationFrameId = requestAnimationFrame(updateLoop);
  }

  /**
   * 停止更新循环
   */
  private stop(): void {
    this.isRunning = false;
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }
  }

  /**
   * 获取当前所有粒子
   */
  getParticles(): Particle[] {
    return this.particles;
  }

  /**
   * 清除所有粒子
   */
  clear(): void {
    this.particles.forEach((particle) => this.returnParticleToPool(particle));
    this.particles = [];
    this.stop();
  }

  /**
   * 销毁粒子系统
   */
  destroy(): void {
    this.clear();
    this.particlePool = [];
  }

  /**
   * 生成随机数（辅助方法）
   */
  private random(min: number, max: number): number {
    return Math.random() * (max - min) + min;
  }
}
