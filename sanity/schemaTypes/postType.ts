import { defineType } from "sanity";

export const postType = defineType({
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
    list: [
      { title: 'Dinh dưỡng', value: 'nutrition' },
      { title: 'Giấc ngủ', value: 'sleep' },
      { title: 'Tập luyện', value: 'exercise' },
      { title: 'Tâm lý', value: 'mental' },
    ],
    layout: 'dropdown'
    },
    },
    {
      name: "nameCategory",
      title: "Name Category",
      type: "string",
      options: {
    list: [
      { title: 'Dinh dưỡng', value: 'dinh dưỡng' },
      { title: 'Giấc ngủ', value: 'giấc ngủ' },
      { title: 'Tập luyện', value: 'tập luyện' },
      { title: 'Tâm lý', value: 'tâm lý' },
    ],
    layout: 'dropdown'
    },
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
        name: "slug",
        title: "Slug",
        type: "slug",
        options: { source: "title", maxLength: 96 },
    },
    {
        name: "titleImage",
        title: "Title Image",
        type: "image",
    },
    {
        name: "smallDescription",
        title: "Small Description",
        type: "text",
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "author",
      title: "Author",
      type: "string",
    },
    {
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
    },
  ],
});
