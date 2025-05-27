import { cn } from "@/utils/utils";
import React from "react";
import { twMerge } from "tailwind-merge";

export default function H1({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h1
      className={cn(
        "text-3xl lg:text-6xl  font-bold tracking-tight",
        className
      )}
    >
      {children}
    </h1>
  );
}
