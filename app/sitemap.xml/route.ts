import { publicRoutes } from "@/routes";

export function GET() {
  const domain = "https://www.danstar.in";
  const lastmod = new Date().toISOString();

  const xml = publicRoutes
    .map((path) => {
      let priority = "0.80";

      if (path === "/") priority = "1.00";
      else if (path.startsWith("/blogs/")) priority = "0.64";

      return `
  <url>
    <loc>${domain}${path}</loc>
    <lastmod>${lastmod}</lastmod>
    <priority>${priority}</priority>
  </url>`;
    })
    .join("");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${xml}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
