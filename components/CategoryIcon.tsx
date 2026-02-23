"use client";

import {
  TestTube,
  Coffee,
  TreePine,
  Code2,
  Mail,
  CheckCircle,
  type LucideIcon,
} from "lucide-react";

const slugToIcon: Record<string, LucideIcon> = {
  manual: TestTube,
  "rest-assured": Coffee,
  cypress: TreePine,
  python: Code2,
  postman: Mail,
  "test-cases": CheckCircle,
};

interface CategoryIconProps {
  slug: string;
  size?: number;
  className?: string;
}

export default function CategoryIcon({ slug, size = 24, className = "text-white" }: CategoryIconProps) {
  const Icon = slugToIcon[slug] ?? Code2;
  return <Icon size={size} className={className} strokeWidth={2} />;
}
