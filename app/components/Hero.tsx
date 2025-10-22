"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full h-[70vh] mb-3 flex items-center justify-center overflow-hidden">
      {/* Ảnh nền tối ưu */}
      <Image
        src="/images/anh-2-ba.webp"
        alt="Khỏe Mãi Hero"
        fill
        priority
        sizes="100vw"
        className="object-cover brightness-[0.8]"
        placeholder="blur"
        blurDataURL="/images/hero-blur.webp"
      />

      {/* Overlay nhẹ hơn */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/50" />

      {/* Nội dung Hero */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="relative z-10 text-center text-white max-w-2xl px-4"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Sống Khỏe Mỗi Ngày Sau Tuổi 50
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Cùng “Khỏe Mãi” khám phá bí quyết dinh dưỡng, vận động và tinh thần giúp bạn trẻ lâu hơn mỗi ngày.
        </p>
        <Button className="bg-primary text-xl hover:bg-primary/90 text-gray-200 font-semibold px-6 py-3 rounded-md shadow-md">
          <Link href="/blog">Xem bài viết mới nhất</Link>
        </Button>
      </motion.div>
    </section>
  );
}
