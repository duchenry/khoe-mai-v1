"use client";
import Link from "next/link";
import Image from "next/image";

const topics = [
  {
    name: "Dinh dưỡng và Ăn uống lành mạnh",
    slug: "nutrition",
    image: "/images/anh-dinh-duong.jpg",
  },
  {
    name: "Giấc ngủ và Tinh thần",
    slug: "sleep",
    image: "/images/giac-ngu-ngon.jpg",
  },
  {
    name: "Tập luyện và Vận động",
    slug: "exercise",
    image: "/images/anh-tap-luyen.jpg",
  },
  {
    name: "Tâm lý và Cảm xúc",
    slug: "mental",
    image: "/images/anh-tam-ly.jpg",
  },
  // {
  //   name: "Mẹo sống khỏe sau 50+",
  //   slug: "song-khoe",
  //   image: "/images/topics/lifestyle.jpg",
  // },
];

export default function HealthTopics() {
  return (
    <section className="py-10 px-4">
      <div className="max-w-6xl mx-auto text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-2">
          Khám phá các chủ đề sức khỏe nổi bật
        </h2>
        <p className="text-2xl text-gray-700 mt-2 dark:text-gray-100">Lựa chọn chủ đề bạn quan tâm để đọc thêm</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {topics.map((topic) => (
          <Link
            key={topic.slug}
            href={`/blog?category=${topic.slug}`}
            className="relative group overflow-hidden rounded-2xl shadow-md cursor-pointer"
          >
            <Image
              src={topic.image}
              alt={topic.name}
              width={600}
              height={400}
              className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition"></div>
            <h3 className="absolute inset-0 flex items-center justify-center text-gray-300 font-semibold text-lg md:text-xl text-center px-4">
              {topic.name}
            </h3>
          </Link>
        ))}
      </div>
    </section>
  );
}
