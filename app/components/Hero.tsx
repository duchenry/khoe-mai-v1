"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full h-[70vh] mb-3 flex items-center justify-center overflow-hidden">
      {/* Ảnh nền có motion nhanh hơn */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0.7 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src="/images/anh-2-ba.jpg"
          alt="Khỏe Mãi Hero"
          fill
          className="object-cover brightness-75"
          priority
        />
      </motion.div>

      {/* Overlay gradient — nhẹ hơn và không bị tối */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60"
        initial={{ opacity: 0.6 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      />

      {/* Nội dung chính */}
      <motion.div
        className="relative z-10 text-center text-white max-w-2xl px-4"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Sống Khỏe Mỗi Ngày Sau Tuổi 50
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Cùng “Khỏe Mãi” khám phá bí quyết dinh dưỡng, vận động và tinh thần giúp bạn trẻ lâu hơn mỗi ngày.
        </p>
        <Button className="bg-primary text-xl hover:bg-primary/90 text-gray-200 font-semibold px-6 py-3 focus:outline-none hover:cursor-pointer transition rounded-md shadow-md">
          <Link href="/blog" className="dark:text-gray-200">
            Xem bài viết mới nhất
          </Link>
        </Button>
      </motion.div>
    </section>
  );
}
