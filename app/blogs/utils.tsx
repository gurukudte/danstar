import fs from "fs";
import path from "path";
import matter from "gray-matter";

export function getBlogPosts() {
  const postsDirectory = path.join(process.cwd(), "path-to-your-posts");
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    const filePath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);

    return {
      slug: fileName.replace(/\.md$/, ""),
      ...data,
    };
  });
}
