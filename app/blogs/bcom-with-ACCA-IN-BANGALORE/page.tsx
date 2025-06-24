import AccaBenefits from "./components/AccaBenefits";
import HeroSection from "./components/HeroSection";
import KpmgBenefits from "./components/KpmgBenefits";
import ProgramIntro from "./components/ProgramIntro";
import StudentTestimonials from "./components/StudentTestimonials";
import WhyBangalore from "./components/WhyBangalore";

import { blogs } from "../blog-data/blogs";

const route = "bcom-with-ACCA-IN-BANGALORE";  
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
export default function BComACCAKPMG() {
  return (
    <div className="bg-background text-foreground">
      <HeroSection />

      <div className="flex flex-col items-center px-4 md:px-6 py-12 md:py-16 lg:py-20 space-y-20">
        <ProgramIntro />

        <AccaBenefits />

        <KpmgBenefits />

        <WhyBangalore />

        <StudentTestimonials />
      </div>
    </div>
  );
}
