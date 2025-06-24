import CurriculumHighlights from "../hospital-management-course-in-bangalore/components/CurriculumHighlights";
import CareerScope from "./components/CareerScope";
import HeroSection from "./components/HeroSection";
import TopInstitutes from "./components/TopInstitutes";
import WhatIsMHA from "./components/WhatIsMHA";

import { blogs } from "../blog-data/blogs";

const route = "mha-course-in-bangalore";  
const blog = blogs.find((b) => b.slug === route);

export const metadata = {
  alternates: {
    canonical: `https://danstar.in/blogs/${route}`,
  },
  title: blog?.title,
  description: blog?.description,
  keywords: blog?.keywords.join(", "),
  openGraph: {
    title: blog?.title,
    description: blog?.description,
    url: `https://danstar.in/blogs/${route}`,
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

export default function MHACourse() {
    return (
        <div className="bg-background text-foreground">
            <HeroSection />

            <div className="flex flex-col items-center px-4 md:px-6 py-12 md:py-16 lg:py-20 space-y-20">
                <WhatIsMHA />
                <TopInstitutes />
                <CurriculumHighlights />
                <CareerScope />
            </div>
        </div>
    );
}
