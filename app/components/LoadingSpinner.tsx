// ...existing code...
"use client";
import React from "react";

export default function LoadingSpinner({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sz = size === "sm" ? "w-5 h-5" : size === "lg" ? "w-10 h-10" : "w-8 h-8";
  const textClass = size === "sm" ? "text-xs" : "text-sm";
  return (
    <div role="status" aria-live="polite" className="flex items-center gap-3">
      <svg className={`${sz} text-indigo-500 animate-spin`} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle className="opacity-20" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
        <path className="opacity-80" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
      </svg>
      <span className={`${textClass} text-gray-600 dark:text-gray-300`}>Loading…</span>
    </div>
  );
}
// ...existing code...