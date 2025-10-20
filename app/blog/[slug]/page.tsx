import Breadcrumb from "@/app/components/Breadcrumb";
import { getDetailedData } from "@/lib/api";
import { ArticleInterface } from "@/lib/interface";
import { urlFor } from "@/lib/sanity";
import { capitalizeWords } from "@/lib/utils";
import { PortableText } from "next-sanity";
import Image from "next/image";
import { notFound } from "next/navigation";

const SectionWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="my-8 sm:my-12 border-t border-gray-200 pt-6">{children}</div>
);

const FeaturedArticle = ({ title, imageUrl }: { title: string; imageUrl: string }) => (
  <div className="p-4 bg-gray-50 rounded-lg shadow-sm flex flex-col sm:flex-row items-center gap-4">
    <Image src={imageUrl} width={150} height={100} alt={title} className="rounded-lg object-cover" />
    <h3 className="font-semibold text-lg sm:text-xl">{title}</h3>
  </div>
);

const CTASection = ({ message }: { message: string }) => (
  <div className="p-6 my-6 bg-blue-100 text-blue-800 text-center rounded-lg font-semibold">
    {message}
  </div>
);

export default async function BlogArticle({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data: ArticleInterface | null = await getDetailedData(slug);

  if (!data) {
    // Nếu không tìm thấy bài viết, trả về 404
    notFound();
  }

  const items = [
    { label: "Trang chủ", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: capitalizeWords(data.nameCategory) },
  ];

  return (
    <div className="mx-auto max-w-3xl px-4 md:px-0 py-6 md:py-10">
      <Breadcrumb items={items} />

      {/* Meta info */}
      <div className="text-sm text-gray-500 mb-3 flex flex-wrap items-center gap-3">
        <span>⏱ {data.readTime || "5 phút đọc"}</span>
        <span>•</span>
        <span>{data.publishedAt || "17/10/2025"}</span>
        <span>•</span>
        <span>Bởi Khỏe Mãi</span>
      </div>

      <h1 className="text-3xl md:text-4xl font-bold leading-snug mb-4 text-gray-900">{data.title}</h1>

      <Image
        src={urlFor(data.titleImage).url()}
        width={500}
        height={300}
        alt={data.title}
        className="h-58 w-full object-cover rounded-lg mt-4"
      />

      <div className="mt-16">
        {/* <SectionWrapper>
          <FeaturedArticle title="Bài viết nổi bật giữa bài" imageUrl="/placeholder.jpg" />
        </SectionWrapper> */}

        <div className="prose prose-lg max-w-none">
          <PortableText value={data.content} />
        </div>

        <SectionWrapper>
          <CTASection message="Đăng ký để nhận thêm các bài viết hữu ích!" />
        </SectionWrapper>
      </div>
    </div>
  );
}
