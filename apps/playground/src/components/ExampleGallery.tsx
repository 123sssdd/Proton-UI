import React from "react";

/**
 * 示例图片接口
 */
export interface ExampleImage {
  id: string;
  url: string;
  title: string;
  category: "portrait" | "landscape" | "ui" | "abstract";
}

/**
 * ExampleGallery 组件属性
 */
export interface ExampleGalleryProps {
  /** 示例图片列表 */
  examples: ExampleImage[];
  /** 示例选择回调 */
  onExampleSelect: (imageUrl: string) => void;
  /** 当前选中的图片 URL */
  selectedImage?: string;
}

/**
 * 默认示例图片
 */
export const DEFAULT_EXAMPLES: ExampleImage[] = [
  {
    id: "portrait-1",
    url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
    title: "人像照片",
    category: "portrait",
  },
  {
    id: "landscape-1",
    url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400",
    title: "山景风光",
    category: "landscape",
  },
  {
    id: "ui-1",
    url: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400",
    title: "UI 界面",
    category: "ui",
  },
  {
    id: "abstract-1",
    url: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=400",
    title: "抽象艺术",
    category: "abstract",
  },
];

/**
 * 示例图库组件
 *
 * 功能：
 * - 显示预加载的示例图片
 * - 响应式网格布局
 * - 点击选择图片
 * - 高亮显示当前选中的图片
 */
export const ExampleGallery: React.FC<ExampleGalleryProps> = ({
  examples,
  onExampleSelect,
  selectedImage,
}) => {
  return (
    <div className="w-full">
      <h3 className="text-xl font-bold text-white mb-4">示例图片</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {examples.map((example) => {
          const isSelected = selectedImage === example.url;
          return (
            <button
              key={example.id}
              onClick={() => onExampleSelect(example.url)}
              className={`
                group relative overflow-hidden rounded-lg border-2 transition-all
                ${
                  isSelected
                    ? "border-cyan-400 shadow-lg shadow-cyan-400/30"
                    : "border-gray-600 hover:border-cyan-400/50"
                }
              `}
            >
              {/* 图片 */}
              <div className="aspect-square overflow-hidden bg-gray-800">
                <img
                  src={example.url}
                  alt={example.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-110"
                  loading="lazy"
                  onError={(e) => {
                    // 图片加载失败时显示占位符
                    e.currentTarget.src =
                      'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect fill="%23374151" width="400" height="400"/%3E%3Ctext fill="%239CA3AF" font-family="sans-serif" font-size="24" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3E图片加载失败%3C/text%3E%3C/svg%3E';
                  }}
                />
              </div>

              {/* 标题和类别 */}
              <div
                className={`
                absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-gray-900 to-transparent
                ${isSelected ? "text-cyan-400" : "text-white"}
              `}
              >
                <p className="font-bold text-sm">{example.title}</p>
                <p className="text-xs text-gray-400 capitalize">
                  {example.category}
                </p>
              </div>

              {/* 选中指示器 */}
              {isSelected && (
                <div className="absolute top-2 right-2 bg-cyan-400 text-gray-900 rounded-full p-1">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              )}
            </button>
          );
        })}
      </div>
      <p className="mt-4 text-center text-gray-400 text-sm">
        点击任意示例图片开始体验像素化效果
      </p>
    </div>
  );
};
