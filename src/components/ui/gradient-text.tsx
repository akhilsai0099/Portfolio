"use client";

import { cn } from "@/lib/utils";

export function GradientText({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500",
        className
      )}
    >
      {children}
    </span>
  );
}
