import { Facebook } from "lucide-react";
import Link from "next/link";
import { FaFacebookF, FaTiktok, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className=" bg-gray-150 border-t border-gray-200 mt-12 text-gray-700 dark:bg-gray-950 dark:border-gray-700 dark:text-gray-300">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Cột 1: Giới thiệu */}
            <div>
            <h3 className="text-primary text-xl font-semibold mb-4">Khỏe Mãi</h3>
            <p className="text-sm leading-6">
                Nơi chia sẻ kiến thức về dinh dưỡng, giấc ngủ và lối sống lành mạnh 
                giúp bạn sống khỏe – sống vui – sống trọn vẹn mỗi ngày.
            </p>
            </div>

            {/* Cột 2: Danh mục nổi bật */}
            <div>
            <h4 className="text-primary text-lg font-semibold mb-4">Danh mục</h4>
            <ul className="space-y-2 text-sm">
                <li><Link href="/blog?category=nutrition" className="hover:text-primary">Dinh dưỡng</Link></li>
                <li><Link href="/blog?category=exercise" className="hover:text-primary">Giấc ngủ</Link></li>
                <li><Link href="/blog?category=sleep" className="hover:text-primary">Tập Luyện</Link></li>
                <li><Link href="/blog?category=mental" className="hover:text-primary">Tâm Lý</Link></li>
            </ul>
            </div>

            {/* Cột 4: Kết nối */}
            <div>
            <h4 className="text-primary text-lg font-semibold mb-4">Kết nối</h4>
            <p className="text-sm mb-4">Đăng ký nhận bài viết mới mỗi tuần:</p>
            <form className="flex items-center">
                <input
                type="email"
                placeholder="Nhập email của bạn"
                className="w-full px-3 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-sm"
                />
                <button
                type="submit"
                className="bg-primary text-white px-4 py-2 rounded-r-lg hover:bg-primary/90 transition"
                >
                Gửi
                </button>
            </form>
            <div className="flex space-x-4 mt-4 text-gray-500">
                <Link href="https://facebook.com" className="text-primary/90 hover:text-primary"><FaFacebookF className="w-6 h-6" /></Link>
                <Link href="https://youtube.com" className="text-red-600 hover:text-red-700"><FaYoutube className="w-6 h-6" /></Link>
                <Link href="https://tiktok.com" className="text-gray-600 hover:text-gray-700"><FaTiktok className="w-6 h-6" /></Link>
            </div>
            </div>
        </div>

        {/* Dòng bản quyền */}
        <div className="border-t border-gray-200 text-center py-4 text-sm text-gray-600">
            © {new Date().getFullYear()} Khỏe Mãi. All rights reserved. Designed by Khỏe Mãi.
        </div>
    </footer>
  );
}
