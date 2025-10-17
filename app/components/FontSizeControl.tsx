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
    const newSize = Math.min(Math.max(fontSize + delta, 80), 180); // Giới hạn 80–180%
    setFontSize(newSize);
    document.documentElement.style.fontSize = `${newSize}%`;
    localStorage.setItem("fontSize", newSize.toString());
  };

  return (
    <div
      className="
        fixed bottom-1/4 right-4 z-50
        flex gap-2 bg-white/80 backdrop-blur-md
        border border-gray-200 rounded-full px-3 py-2
        shadow-lg
        font-medium
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
