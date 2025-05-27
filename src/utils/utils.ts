import clsx, { ClassValue } from "clsx";

import { twMerge } from "tailwind-merge";

export function capitalize(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function cn(...classes: ClassValue[]) {
  return twMerge(clsx(classes));
}
