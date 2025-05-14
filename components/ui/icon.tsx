import * as LucideIcons from "lucide-react";
import { cn } from "@/lib/utils"; // Your Tailwind class merger utility

interface IconProps extends React.SVGAttributes<SVGElement> {
  name: keyof typeof LucideIcons;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  color?: string;
  strokeWidth?: number;
  className?: string;
}

export const Icon = ({
  name,
  size = "md",
  color = "currentColor",
  strokeWidth = 2,
  className,
  ...props
}: IconProps) => {
  const LucideIcon = LucideIcons[name] as React.ElementType | undefined;

  if (!LucideIcon || typeof LucideIcon !== "function") {
    console.error(
      `Icon "${name}" not found or is not a valid React component in Lucide Icons`
    );
    return null;
  }

  const sizeClasses = {
    xs: "h-3 w-3",
    sm: "h-4 w-4",
    md: "h-5 w-5",
    lg: "h-6 w-6",
    xl: "h-8 w-8",
  };

  return (
    <LucideIcon
      className={cn(sizeClasses[size], className)}
      color={color}
      strokeWidth={strokeWidth}
      {...props}
    />
  );
};

// Type helper for autocomplete
export type IconName = keyof typeof LucideIcons;
