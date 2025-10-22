"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const topics = [
  {
    name: "Dinh dưỡng và Ăn uống lành mạnh",
    slug: "nutrition",
    image: "/images/anh-dinh-duong.webp",
  },
  {
    name: "Giấc ngủ và Tinh thần",
    slug: "sleep",
    image: "/images/giac-ngu-ngon.webp",
  },
  {
    name: "Tập luyện và Vận động",
    slug: "exercise",
    image: "/images/anh-tap-luyen.webp",
  },
  {
    name: "Tâm lý và Cảm xúc",
    slug: "mental",
    image: "/images/anh-tam-ly.webp",
  },
];

export default function HealthTopics() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto text-center mb-8">
        <h2
          className="text-3xl md:text-4xl font-semibold text-primary mb-3 animate-fade-up"
        >
          Khám phá các chủ đề sức khỏe nổi bật
        </h2>

        <p
          className="text-lg md:text-xl text-gray-700 dark:text-gray-200 animate-fade-out"
        >
          Lựa chọn chủ đề bạn quan tâm để đọc thêm
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {topics.map((topic, index) => (
          <motion.div
            key={topic.slug}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link
              href={`/blog?category=${topic.slug}`}
              className="relative group overflow-hidden rounded-2xl shadow-md cursor-pointer block"
            >
              <Image
                src={topic.image}
                alt={topic.name}
                width={600}
                height={400}
                loading="lazy"
                className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/55 transition duration-300"></div>
              <h3 className="absolute inset-0 flex items-center justify-center text-gray-100 font-semibold text-lg md:text-xl text-center px-4 transition-all duration-500 group-hover:scale-105 group-hover:text-white">
                {topic.name}
              </h3>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
