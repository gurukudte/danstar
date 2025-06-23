import danstarBlogs from "../blog-data/danstarBlogs";
import { z } from "zod";

const blogSchema = z.object({
  title: z.string(),
  description: z.string(),
  slug: z.string(),
  keywords: z.array(z.string()),
});

export function getBlogBySlug(slug: string) {
  const blog = danstarBlogs.find((blog) => blog.slug === slug);
  return blog ? blogSchema.parse(blog) : undefined;
}