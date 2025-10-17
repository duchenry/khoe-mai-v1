import { ArticleInterface } from "./interface";
import { client } from "./sanity";


export async function getAllData() {
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

export async function getFilterData({ category }: { category?: string } = {}) {
  const query = `*[_type == 'post' && category == '${category}'] | order(_createdAt desc) {
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
export async function getDetailedData(slug: string): Promise<ArticleInterface> {
    const query = `*[_type == 'post' && slug.current == '${slug}'] {
  title,
  content,
  "currentSlug": slug.current,
  titleImage,
  category,
  nameCategory,
  readTime,
  publishedAt
}[0]`; // Add your GROQ query here
    const data = await client.fetch(query)
    return data;
}