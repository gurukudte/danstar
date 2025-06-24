
import WhyBangalore from "../llb-admission-in-bangalore/components/WhyBangalore";
import CareerScope from "./components/CareerScope";
import CollegeListing from "./components/CollegeListing";
import CurriculumHighlights from "./components/CurriculumHighlights";
import HeroSection from "./components/HeroSection";
import WhyHospitalManagement from "./components/WhyHospitalManagement";

import { blogs } from "../blog-data/blogs";

const route = "hospital-management-course-in-bangalore";
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
export default function HospitalManagementCourses() {
  return (
    <div className="bg-background text-foreground">
      <HeroSection />

      <div className="flex flex-col justify-center items-center px-4 md:px-6 py-12 md:py-16 lg:py-20 space-y-20">
        <WhyHospitalManagement />

        <WhyBangalore />

        <CollegeListing />

        <CurriculumHighlights />

        <CareerScope />
      </div>
    </div>
  );
}
