/**
 * 图片像素化处理工具
 *
 * 将图片转换为像素风格，支持可调像素大小和色彩保持
 */

export interface PixelateOptions {
  /** 像素块大小（默认 8px） */
  pixelSize?: number;
  /** 是否保持原始色彩（默认 true） */
  preserveColor?: boolean;
  /** 色彩量化级别（1-256，默认 256 表示不量化） */
  colorLevels?: number;
  /** 输出图片质量（0-1，默认 0.92） */
  quality?: number;
}

/**
 * 像素化图片处理函数
 *
 * @param imageSource - 图片源（URL、File 或 HTMLImageElement）
 * @param options - 像素化选项
 * @returns Promise<string> - 返回像素化后的 Data URL
 */
export async function pixelateImage(
  imageSource: string | File | HTMLImageElement,
  options: PixelateOptions = {}
): Promise<string> {
  const {
    pixelSize = 8,
    preserveColor = true,
    colorLevels = 256,
    quality = 0.92,
  } = options;

  // 加载图片
  const img = await loadImage(imageSource);

  // 创建 canvas
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d", { willReadFrequently: true });

  if (!ctx) {
    throw new Error("无法创建 Canvas 上下文");
  }

  // 设置 canvas 尺寸
  canvas.width = img.width;
  canvas.height = img.height;

  // 绘制原始图片
  ctx.drawImage(img, 0, 0);

  // 禁用图像平滑以获得像素化效果
  ctx.imageSmoothingEnabled = false;

  // 计算缩小后的尺寸
  const scaledWidth = Math.ceil(img.width / pixelSize);
  const scaledHeight = Math.ceil(img.height / pixelSize);

  // 创建临时 canvas 用于缩小
  const tempCanvas = document.createElement("canvas");
  const tempCtx = tempCanvas.getContext("2d", { willReadFrequently: true });

  if (!tempCtx) {
    throw new Error("无法创建临时 Canvas 上下文");
  }

  tempCanvas.width = scaledWidth;
  tempCanvas.height = scaledHeight;
  tempCtx.imageSmoothingEnabled = false;

  // 缩小图片
  tempCtx.drawImage(img, 0, 0, scaledWidth, scaledHeight);

  // 如果需要色彩量化
  if (!preserveColor && colorLevels < 256) {
    quantizeColors(tempCtx, scaledWidth, scaledHeight, colorLevels);
  }

  // 清空主 canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // 放大回原始尺寸
  ctx.drawImage(
    tempCanvas,
    0,
    0,
    scaledWidth,
    scaledHeight,
    0,
    0,
    img.width,
    img.height
  );

  // 返回 Data URL
  return canvas.toDataURL("image/png", quality);
}

/**
 * 加载图片
 */
function loadImage(
  source: string | File | HTMLImageElement
): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    if (source instanceof HTMLImageElement) {
      if (source.complete) {
        resolve(source);
      } else {
        source.onload = () => resolve(source);
        source.onerror = reject;
      }
      return;
    }

    const img = new Image();
    img.crossOrigin = "anonymous"; // 支持跨域图片

    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error("图片加载失败"));

    if (typeof source === "string") {
      img.src = source;
    } else {
      // File 对象
      const reader = new FileReader();
      reader.onload = (e) => {
        img.src = e.target?.result as string;
      };
      reader.onerror = reject;
      reader.readAsDataURL(source);
    }
  });
}

/**
 * 色彩量化处理
 *
 * 将图片的颜色数量减少到指定级别，营造复古像素风格
 */
function quantizeColors(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  levels: number
): void {
  const imageData = ctx.getImageData(0, 0, width, height);
  const data = imageData.data;

  // 计算每个颜色通道的量化步长
  const step = 256 / levels;

  for (let i = 0; i < data.length; i += 4) {
    // 量化 RGB 通道
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];

    if (r !== undefined) data[i] = Math.floor(r / step) * step;
    if (g !== undefined) data[i + 1] = Math.floor(g / step) * step;
    if (b !== undefined) data[i + 2] = Math.floor(b / step) * step;
    // Alpha 通道保持不变
  }

  ctx.putImageData(imageData, 0, 0);
}

/**
 * 批量像素化处理
 *
 * @param images - 图片源数组
 * @param options - 像素化选项
 * @returns Promise<string[]> - 返回像素化后的 Data URL 数组
 */
export async function pixelateImages(
  images: (string | File | HTMLImageElement)[],
  options: PixelateOptions = {}
): Promise<string[]> {
  return Promise.all(images.map((img) => pixelateImage(img, options)));
}

/**
 * 预设像素化配置
 */
export const PIXELATE_PRESETS = {
  /** 8-bit 风格（8x8 像素块，16 色） */
  retro8bit: {
    pixelSize: 8,
    preserveColor: false,
    colorLevels: 16,
  },
  /** 16-bit 风格（4x4 像素块，256 色） */
  retro16bit: {
    pixelSize: 4,
    preserveColor: false,
    colorLevels: 256,
  },
  /** 现代像素风（8x8 像素块，保持原色） */
  modernPixel: {
    pixelSize: 8,
    preserveColor: true,
    colorLevels: 256,
  },
  /** 粗糙像素（16x16 像素块） */
  coarsePixel: {
    pixelSize: 16,
    preserveColor: true,
    colorLevels: 256,
  },
  /** 精细像素（4x4 像素块） */
  finePixel: {
    pixelSize: 4,
    preserveColor: true,
    colorLevels: 256,
  },
} as const;
