export interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  metrics?: {
    label: string;
    value: string;
  }[];
  highlights?: string[];
  className?: string;
}
