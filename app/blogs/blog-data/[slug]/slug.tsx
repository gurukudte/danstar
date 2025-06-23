// app/blogs/[slug]/page.tsx
import { Metadata } from "next";
import { getBlogBySlug } from "../../utils/getBlogBySlug";
import danstarBlogs from "../danstarBlogs";

// Define a type for your blog data
// interface BlogData {
//   title: string;
//   description: string;
//   slug: string;
//   keywords: string[];
// }

// Use Next.js's built-in types for page props
type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const blog = getBlogBySlug(params.slug);

  if (!blog) {
    return {
      title: "Blog Not Found",
      description: "The blog post you are looking for does not exist.",
    };
  }

  return {
    title: blog.title,
    description: blog.description,
    keywords: blog.keywords.join(", "),
    openGraph: {
      title: blog.title,
      description: blog.description,
      url: `https://yourdomain.com/blogs/${blog.slug}`,
      type: "article",
    },
  };
}

export async function generateStaticParams() {
  return danstarBlogs
    .filter((blog) => blog.slug !== "No Need")
    .map((blog) => ({
      slug: blog.slug,
    }));
}

export default function BlogPage({ params }: { params: { slug: string } }) {
  const blog = getBlogBySlug(params.slug);

  if (!blog) {
    return (
      <div className="max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-6">Blog Not Found</h1>
        <p>The blog post you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">{blog.title}</h1>
      <p className="text-lg mb-8">{blog.description}</p>

      <div className="prose max-w-none">
        <p>This is where your detailed blog content would appear.</p>
      </div>
    </article>
  );
}
