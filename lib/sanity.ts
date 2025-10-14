import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";


export const client = createClient({
    projectId: "xiu4ud01",
    dataset: "production",
    apiVersion: "2025-10-14",
  useCdn: false,
}); 

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}