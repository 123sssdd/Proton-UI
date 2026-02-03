import React, { useRef, useState } from "react";

/**
 * ImageUploader 组件属性
 */
export interface ImageUploaderProps {
  /** 图片加载成功回调 */
  onImageLoad: (dataUrl: string) => void;
  /** 错误回调 */
  onError: (error: string) => void;
  /** 最大文件大小（字节），默认 10MB */
  maxSizeBytes?: number;
  /** 接受的文件格式 */
  acceptedFormats?: string[];
}

/**
 * 图片上传组件
 *
 * 功能：
 * - 文件类型验证（JPEG, PNG, WebP, GIF）
 * - 文件大小验证（默认最大 10MB）
 * - 自动转换为 Data URL
 * - 超大图片自动缩放
 */
export const ImageUploader: React.FC<ImageUploaderProps> = ({
  onImageLoad,
  onError,
  maxSizeBytes = 10 * 1024 * 1024, // 10MB
  acceptedFormats = ["image/jpeg", "image/png", "image/webp", "image/gif"],
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  /**
   * 验证文件类型
   */
  const validateFileType = (file: File): boolean => {
    if (!acceptedFormats.includes(file.type)) {
      onError(
        `不支持的文件格式。请上传以下格式之一：${acceptedFormats
          .map((f) => f.replace("image/", "").toUpperCase())
          .join(", ")}`
      );
      return false;
    }
    return true;
  };

  /**
   * 验证文件大小
   */
  const validateFileSize = (file: File): boolean => {
    if (file.size > maxSizeBytes) {
      const maxSizeMB = (maxSizeBytes / (1024 * 1024)).toFixed(1);
      onError(`文件过大。最大支持 ${maxSizeMB}MB`);
      return false;
    }
    return true;
  };

  /**
   * 缩放图片（如果需要）
   */
  const resizeImageIfNeeded = (
    img: HTMLImageElement,
    maxWidth = 2000,
    maxHeight = 2000
  ): string => {
    const canvas = document.createElement("canvas");
    let { width, height } = img;

    // 计算缩放比例
    if (width > maxWidth || height > maxHeight) {
      const ratio = Math.min(maxWidth / width, maxHeight / height);
      width = Math.floor(width * ratio);
      height = Math.floor(height * ratio);
    }

    canvas.width = width;
    canvas.height = height;

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      throw new Error("无法创建 Canvas 上下文");
    }

    ctx.drawImage(img, 0, 0, width, height);
    return canvas.toDataURL("image/png");
  };

  /**
   * 处理文件选择
   */
  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // 验证文件
    if (!validateFileType(file) || !validateFileSize(file)) {
      // 重置 input，允许重新选择相同文件
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
      return;
    }

    setIsProcessing(true);

    try {
      // 读取文件
      const reader = new FileReader();

      reader.onload = (e) => {
        const dataUrl = e.target?.result as string;
        if (!dataUrl) {
          onError("无法读取图片文件");
          setIsProcessing(false);
          return;
        }

        // 加载图片以检查尺寸
        const img = new Image();
        img.onload = () => {
          try {
            // 如果图片过大，进行缩放
            const finalDataUrl =
              img.width > 2000 || img.height > 2000
                ? resizeImageIfNeeded(img)
                : dataUrl;

            onImageLoad(finalDataUrl);
            setIsProcessing(false);

            // 重置 input
            if (fileInputRef.current) {
              fileInputRef.current.value = "";
            }
          } catch (error) {
            onError("处理图片时出错");
            setIsProcessing(false);
          }
        };

        img.onerror = () => {
          onError("无法加载图片");
          setIsProcessing(false);
        };

        img.src = dataUrl;
      };

      reader.onerror = () => {
        onError("读取文件失败");
        setIsProcessing(false);
      };

      reader.readAsDataURL(file);
    } catch (error) {
      onError("上传过程中发生错误");
      setIsProcessing(false);
    }
  };

  /**
   * 触发文件选择
   */
  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
        disabled={isProcessing}
      />
      <button
        onClick={handleButtonClick}
        disabled={isProcessing}
        className={`
          px-6 py-3 rounded-lg border-2 font-bold transition-all
          ${
            isProcessing
              ? "border-gray-600 text-gray-500 cursor-not-allowed"
              : "border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 hover:shadow-lg hover:shadow-cyan-400/50"
          }
        `}
      >
        {isProcessing ? "处理中..." : "📁 上传图片"}
      </button>
      <p className="text-gray-400 text-sm text-center">
        支持 JPEG, PNG, WebP, GIF 格式，最大 10MB
      </p>
    </div>
  );
};
