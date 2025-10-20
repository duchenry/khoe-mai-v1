"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const tips = [
  { icon: "💧", text: "Uống đủ 6–8 ly nước mỗi ngày để giữ cơ thể khỏe mạnh." },
  { icon: "🥦", text: "Ăn thêm rau xanh và trái cây giúp xương khớp dẻo dai hơn." },
  { icon: "🚶‍♂️", text: "Đi bộ nhẹ 15 phút mỗi sáng để cải thiện tuần hoàn máu." },
  { icon: "😴", text: "Ngủ đủ 7 tiếng giúp phục hồi cơ bắp và trí nhớ tốt hơn." },
  { icon: "🧘‍♀️", text: "Thư giãn 10 phút mỗi ngày để giảm căng thẳng và lo âu." },
  { icon: "☀️", text: "Tắm nắng sáng giúp hấp thu vitamin D, tốt cho xương." },
];

export default function DailyHealthTips() {
  const [index, setIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 640) setVisibleCount(1);
      else if (window.innerWidth < 1024) setVisibleCount(2);
      else setVisibleCount(3);
    };
    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const nextSlide = () => setIndex((prev) => (prev + 1) % tips.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + tips.length) % tips.length);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  const visibleTips = Array.from(
    { length: visibleCount },
    (_, i) => tips[(index + i) % tips.length]
  );

  return (
    <section className="py-10 mt-3 pb-12 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-primary text-3xl font-semibold text-center mb-2 dark:text-primary">
            Góc sức khỏe
          </h2>
          <p className="text-2xl text-center text-gray-700 mb-6 dark:text-gray-200">
            Mẹo nhỏ mỗi ngày
          </p>

          <div className="relative flex items-center justify-center">
            <div className="w-full max-w-5xl px-12 mb-3">
              <div className="overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={index}
                    initial={{ x: 80, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -80, opacity: 0 }}
                    transition={{ duration: 0.45 }}
                    className="flex gap-6"
                  >
                    {visibleTips.map((tip, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ scale: 1.05, rotate: 0.3 }}
                        transition={{ type: "spring", stiffness: 250 }}
                        className="bg-primary p-5 rounded-2xl shadow-md flex-1 min-w-[220px] sm:min-w-[260px] text-center"
                      >
                        <div className="text-4xl mb-3">{tip.icon}</div>
                        <p className="text-gray-100 text-base leading-relaxed">
                          {tip.text}
                        </p>
                      </motion.div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Nút trái */}
            <button
              onClick={prevSlide}
              aria-label="Trước"
              className="hidden sm:flex items-center justify-center absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-primary shadow hover:bg-primary/90 focus:outline-none text-white"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Nút phải */}
            <button
              onClick={nextSlide}
              aria-label="Sau"
              className="hidden sm:flex items-center justify-center absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-primary shadow hover:bg-primary/90 focus:outline-none text-white"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Mobile buttons */}
            <div className="sm:hidden absolute bottom-[-2.25rem] flex gap-3 z-20">
              <button
                onClick={prevSlide}
                aria-label="Trước"
                className="w-9 h-9 rounded-full bg-primary shadow hover:bg-primary/90 text-white flex items-center justify-center"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextSlide}
                aria-label="Sau"
                className="w-9 h-9 rounded-full bg-primary shadow hover:bg-primary/90 text-white flex items-center justify-center"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
