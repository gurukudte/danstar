import CareerGuide from "./CareerGuide";


import { blogs } from "../blog-data/blogs";
import { domain } from "../utils/constants";

const route = "best-career-after-12th-in-india";
const blog = blogs.find((b) => b.slug === route);

export const metadata = {
  alternates: {
   canonical: `${domain}/${route}`,
  },
  title: blog?.title,
  description: blog?.description,
  keywords: blog?.keywords.join(", "),
  openGraph: {
    title: blog?.title,
    description: blog?.description,
    url: `${domain}/${route}`,
    siteName: "Danstar",
    images: [
      {
        url: "https://danstar.in/images/danstar-logo.png",
        width: 800,
        height: 600,
        alt: "Danstar Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};
export default function CareerGuidePage() {
  return <CareerGuide />;
}
