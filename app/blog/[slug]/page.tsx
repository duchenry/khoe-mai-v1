import { ArticleInterface } from "@/lib/interface"
import { client, urlFor } from "@/lib/sanity";
import { PortableText } from "next-sanity";
import Image from "next/image";

async function getData(slug: string) {
    const query = `*[_type == 'post' && slug.current == '${slug}'] {
  title,
  content,
  "currentSlug": slug.current,
  titleImage,
}[0]`; // Add your GROQ query here
    const data = await client.fetch(query)
    return data;
}

export default async function BlogArticle ({params}: {params: {slug: string}}) {
    const data: ArticleInterface = await getData(params.slug)
    console.log("data", data)
    return (
        <div className="max-w-2xl prose lg:prose-xl mx-auto py-16">
        <h1 className="text-3xl font-bold mt-2 block ">{data?.title}</h1>
        <Image 
            src={urlFor(data?.titleImage).url()} // Use the urlFor function to generate the image URL
            width={500}
            height={300}
            alt={data?.title}  
            className="h-58 object-cover rounded-lg"/>
            <div className="mt-16">
        <PortableText value={data?.content} />
            </div>
        </div>
)
}