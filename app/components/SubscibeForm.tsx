"use client";
import { useState } from "react";
import SuccessPopup from "./SuccessPopup";

export default function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/newsletter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();
    setLoading(false);

    if (data.message?.includes("success")) {
      setShowPopup(true);
      setEmail("");
    } else {
      alert(data.error || data.message);
    }
  };

  return (
    <>
      <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md mx-auto mt-8 text-center">
        <h3 className="text-lg font-semibold mb-3">
          Nhận bài viết sức khỏe mới nhất mỗi tuần 🌿
        </h3>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="email"
            placeholder="Nhập email của bạn"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all"
          >
            {loading ? "Đang đăng ký..." : "Đăng ký ngay"}
          </button>
        </form>
      </div>

      {/* Popup chúc mừng */}
      <SuccessPopup show={showPopup} onClose={() => setShowPopup(false)} />
    </>
  );
}
