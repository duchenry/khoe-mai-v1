import { client } from "../lib/sanity";
import { CardInterface } from "@/lib/interface";
import BlogList from "./components/BlogList";

async function getData() {
  const query = `*[_type == 'post'] | order(_createdAt desc) {
  title,
  smallDescription,
  "currentSlug": slug.current,
  titleImage,
  category,
  nameCategory
}`; // Add your GROQ query here
  const data = await client.fetch(query)

  return data;
}

export default async function Home() {
  const data: CardInterface[] = await getData();

  return (
    <div>
        <BlogList list={data} />
    </div>
  );
}
