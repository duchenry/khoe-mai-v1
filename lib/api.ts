import { ArticleInterface } from "./interface";
import { client } from "./sanity";

export async function getAllData(): Promise<ArticleInterface[]> {
  const query = `*[_type == 'post'] | order(_createdAt desc) {
    title,
    smallDescription,
    "currentSlug": slug.current,
    titleImage,
    category,
    nameCategory
  }`;
  return await client.fetch(query);
}

export async function getFilterData({ category }: { category?: string } = {}): Promise<ArticleInterface[]> {
  if (!category) return getAllData();
  const query = `*[_type == 'post' && category == $category] | order(_createdAt desc) {
    title,
    smallDescription,
    "currentSlug": slug.current,
    titleImage,
    category,
    nameCategory
  }`;
  return await client.fetch(query, { category });
}

export async function getDetailedData(slug: string): Promise<ArticleInterface | null> {
  const query = `*[_type == 'post' && slug.current == $slug]{
    title,
    content,
    "currentSlug": slug.current,
    titleImage,
    category,
    nameCategory,
    readTime,
    publishedAt
  }[0]`;
  return await client.fetch(query, { slug });
}