import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function capitalizeWords(str: string) {
  return str.replace(/(^|[\s-])(\S)/g, (_match, sep, ch) => {
    // dùng toLocaleUpperCase để hỗ trợ Unicode (ví dụ tiếng Việt)
    return sep + ch.toLocaleUpperCase('vi');
  });
}

