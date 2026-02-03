export interface BackToTopProps {
  threshold?: number;
  position?: "bottom-right" | "bottom-left";
  offset?: { x: number; y: number };
  smooth?: boolean;
}

export interface BackToTopState {
  visible: boolean;
  scrollProgress: number;
}
