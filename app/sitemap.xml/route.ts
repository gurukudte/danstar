export function GET() {
  const baseUrls = ["https://www.danstar.in", "https://www.danstar.co.in"];
  const paths = ["", "/about", "/services", "/contact"];

  const xml = baseUrls
    .map((domain) => {
      return paths
        .map(
          (path) => `
    <url>
      <loc>${domain}${path}</loc>
      <changefreq>monthly</changefreq>
      <priority>0.8</priority>
    </url>`
        )
        .join("");
    })
    .join("");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${xml}
  </urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
