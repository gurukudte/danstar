import BlogDashboardPage from "./BlogPage";

export const metadata = {
  alternates: {
    canonical: "https://www.danstar.in/blogs",
  },
};
export default function BlogsPage () {
  return (
    <BlogDashboardPage/>
  );
}
// app/blogs/page.tsx

// import Link from 'next/link';
// import danstarBlogs from './blog-data/danstarBlogs';

// export default function BlogListPage() {
//   const validBlogs = danstarBlogs.filter(blog => blog.slug !== 'No Need');

//   return (
//     <div className="max-w-4xl mx-auto py-12 px-4">
//       <h1 className="text-3xl font-bold mb-8">Our Blogs</h1>
//       <div className="space-y-6">
//         {validBlogs.map(blog => (
//           <article key={blog.slug} className="border-b pb-6">
//             <Link href={`/blogs/${blog.slug}`} className="group">
//               <h2 className="text-2xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
//                 {blog.title}
//               </h2>
//             </Link>
//             <p className="text-gray-600 mb-3">{blog.description}</p>
//             <Link 
//               href={`/blogs/${blog.slug}`} 
//               className="text-blue-600 hover:underline"
//             >
//               Read more →
//             </Link>
//           </article>
//         ))}
//       </div>
//     </div>
//   );
// }
