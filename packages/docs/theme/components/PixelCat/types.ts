export interface PixelCatProps {
  position?: "bottom-right" | "bottom-left" | "hero-center";
  size?: "small" | "medium" | "large" | "hero";
  animations?: PixelCatAnimation[];
  onClick?: () => void;
  onHover?: () => void;
}

export interface PixelCatAnimation {
  name: string;
  frames: string[];
  duration: number;
  loop?: boolean;
}

export interface PixelCatState {
  currentAnimation: string;
  isHovered: boolean;
  isClicked: boolean;
}
