import { ArticleInterface } from "@/lib/interface"
import { client, urlFor } from "@/lib/sanity";
import { PortableText } from "next-sanity";
import Image from "next/image";

async function getData(slug: string): Promise<ArticleInterface> {
    const query = `*[_type == 'post' && slug.current == '${slug}'] {
  title,
  content,
  "currentSlug": slug.current,
  titleImage,
}[0]`; // Add your GROQ query here
    const data = await client.fetch(query)
    return data;
}
const ptComponents = {
  types: {
    image: ({ value }: any) => <img src={value.url} alt={value.alt} className="my-4 rounded" />,
  },
  block: {
    h1: ({ children }: any) => <h1 className="text-3xl font-bold my-4">{children}</h1>,
    h2: ({ children }: any) => <h2 className="text-2xl font-semibold my-3">{children}</h2>,
    normal: ({ children }: any) => <p className="my-2 leading-relaxed">{children}</p>,
  },
  list: {
    bullet: ({ children }: any) => <ul className="list-disc ml-6 my-2">{children}</ul>,
    number: ({ children }: any) => <ol className="list-decimal ml-6 my-2">{children}</ol>,
  },
  marks: {
    strong: ({ children }: any) => <strong className="font-bold">{children}</strong>,
    em: ({ children }: any) => <em className="italic">{children}</em>,
  },
}

export default async function BlogArticle ({params}: {params: Promise<{slug: string}>}) {
    const { slug } = await params;
    const data: ArticleInterface = await getData(slug)
    return (
        <div className="p-3 max-w-2xl mx-auto py-16">
        <h1 className="text-3xl font-bold mt-2 block ">{data?.title}</h1>
        <Image 
            src={urlFor(data?.titleImage).url()} // Use the urlFor function to generate the image URL
            width={500}
            height={300}
            alt={data?.title}  
            className="h-58 w-full object-cover rounded-lg mt-4"/>
            <div className="mt-16">
        <PortableText value={data?.content} components={ptComponents}/>
            </div>
        </div>
)
}