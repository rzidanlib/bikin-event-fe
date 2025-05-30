import { Sticker } from "lucide-react";
import { cn } from "@/utils/cn";
import Link from "next/link";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  variant?: "text" | "icon" | "full";
  className?: string;
}

export function Logo({ size = "md", variant = "icon", className }: LogoProps) {
  const sizeClasses = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
  };

  const iconSizes = {
    sm: "h-6 w-6",
    md: "h-8 w-8",
    lg: "h-10 w-10",
  };

  if (variant === "text") {
    return (
      <Link href="/" className={cn("font-bold", sizeClasses[size], className)}>
        EventHub
      </Link>
    );
  }

  if (variant === "icon") {
    return (
      <Link href="/" className={cn("flex items-center gap-2", className)}>
        <Sticker className={cn("text-primary", iconSizes[size])} />
        <span className={cn("font-bold", sizeClasses[size])}>EventHub</span>
      </Link>
    );
  }

  return (
    <Link href="/" className={cn("flex items-center gap-2", className)}>
      <Sticker className={cn("text-primary", iconSizes[size])} />
      <span className={cn("font-bold", sizeClasses[size])}>EventHub</span>
    </Link>
  );
}
