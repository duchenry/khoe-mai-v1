"use client";
import { useEffect, useState } from "react";

export default function FontSizeControl() {
  const [fontSize, setFontSize] = useState(100); // mặc định 100%

  useEffect(() => {
    // load font size nếu người dùng đã chọn trước đó
    const saved = localStorage.getItem("fontSize");
    if (saved) {
      const size = parseInt(saved);
      setFontSize(size);
      document.documentElement.style.fontSize = `${size}%`;
    }
  }, []);

  const changeFont = (delta: number) => {
    const newSize = Math.min(Math.max(fontSize + delta, 90), 160); // Giới hạn 80–180%
    setFontSize(newSize);
    document.documentElement.style.fontSize = `${newSize}%`;
    localStorage.setItem("fontSize", newSize.toString());
  };

  return (
    <div
      className="
        fixed bottom-6 right-1/8 transform -translate-x-1/2
        sm:left-auto sm:right-1/7 sm:transform-none
        z-50
        flex flex-col gap-2
        bg-white/90 backdrop-blur-md
        border border-gray-200 rounded-full px-3 py-2
        shadow-lg font-medium
        max-w-[calc(100vw-2rem)]
        safe-bottom
        touch-none
        dark:bg-gray-800/90 dark:border-gray-700 dark:text-gray-200
      "
    >
      <button
        onClick={() => changeFont(-10)}
        className="px-2 py-1 hover:bg-gray-100 rounded"
      >
        A-
      </button>
      <button
        onClick={() => changeFont(0)}
        className="px-2 py-1 hover:bg-gray-100 rounded font-semibold"
      >
        A
      </button>
      <button
        onClick={() => changeFont(+10)}
        className="px-2 py-1 hover:bg-gray-100 rounded"
      >
        A+
      </button>
    </div>
  );
}
