export interface CardInterface {
  title: string;
  smallDescription: string;
  currentSlug: string;
  titleImage: any;
}

export interface ArticleInterface {
  title: string;
  content: any;
  currentSlug: string;
  titleImage: any;
  nameCategory: string;
  category: string;
  readTime: string;
  publishedAt: string;
}

export interface BreadcrumbInterface {
  label: string;
  href?: string;
}