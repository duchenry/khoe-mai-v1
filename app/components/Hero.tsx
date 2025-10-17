import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full h-[70vh] mb-3 flex items-center justify-center">
        <Image
            src="/images/anh-2-ba.jpg"
            alt="Khỏe Mãi Hero"
            fill
            className="object-cover brightness-75"
            priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70"></div>
        
        <div className="relative z-10 text-center text-white max-w-2xl px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Sống Khỏe Mỗi Ngày Sau Tuổi 50</h1>
            <p className="text-lg md:text-xl mb-6">
            Cùng “Khỏe Mãi” khám phá bí quyết dinh dưỡng, vận động và tinh thần giúp bạn trẻ lâu hơn mỗi ngày.
            </p>
            <Button className="bg-primary text-xl hover:bg-primary/90 text-gray-200 font-semibold px-6 py-3 focus:outline-none hover:cursor-pointer transition rounded-md">
              <Link href="/blog" className="dark:text-gray-200">
                Xem bài viết mới nhất
              </Link>
            </Button>
        </div>
    </section>

  )
}