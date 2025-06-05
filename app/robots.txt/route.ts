export function GET() {
  const content = `User-agent: *
  Allow: /
  
  Sitemap: https://www.danstar.in/sitemap.xml
  Sitemap: https://www.danstar.co.in/sitemap.xml`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
