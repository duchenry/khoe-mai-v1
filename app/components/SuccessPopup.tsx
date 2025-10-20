"use client";
import { motion } from "framer-motion";

export default function SuccessPopup({ show, onClose }: { show: boolean; onClose: () => void }) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ opacity: 0 }}
        className="bg-white rounded-2xl p-6 shadow-lg text-center max-w-sm"
      >
        <h2 className="text-xl font-semibold text-green-600 mb-2">🎉 Đăng ký thành công!</h2>
        <p className="text-gray-700 mb-4">
          Cảm ơn bạn đã đăng ký. Vui lòng kiểm tra email để nhận tài liệu.
        </p>
        <button
          onClick={onClose}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all"
        >
          Đóng
        </button>
      </motion.div>
    </div>
  );
}
