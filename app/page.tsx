import { ModeToggle } from "./components/ModeToggle";
import { client, urlFor } from "../lib/sanity";
import { CardInterface } from "@/lib/interface";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

async function getData() {
  const query = `*[_type == 'post'] | order(_createdAt desc) {
  title,
  smallDescription,
  "currentSlug": slug.current,
  titleImage,
}`; // Add your GROQ query here
  const data = await client.fetch(query)

  return data;
}

export default async function Home() {
  const data: CardInterface[] = await getData();
  return (
    <div className="flex p-6 items-center justify-between">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((post: any) => (
          <Card key={post?.currentSlug} className="pt-0 w-78 hover:shadow-md hover:shadow-gray-300 dark:hover:shadow-gray-800 transition duration-300">
            <Image
              src={urlFor(post?.titleImage).url()} // Use the urlFor function to generate the image URL
              width={500}
              height={300}
              alt={post?.title}  
              className="h-58 object-cover rounded-lg"
            />
            <CardContent>
              <h2 className="text-xl line-clamp-2 font-semibold">{post?.title}</h2>
              <p className="line-clamp-3 text-lg mt-2 text-gray-600 dark:text-gray-300">{post?.smallDescription}</p>
              <Button asChild className="w-full mt-7">
                <Link className="dark:text-gray-200" href={`/blog/${post?.currentSlug}`}>Read More</Link>
              </Button>
            </CardContent>
          </Card>
      ))}
      </div>
        <ModeToggle />
      </div>
  );
}
