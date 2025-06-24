
import WhyBangalore from "../llb-admission-in-bangalore/components/WhyBangalore";
import AdmissionProcess from "./components/AdmissionProcess";
import CareerScope from "./components/CareerScope";
import CollegeListing from "./components/CollegeListing";
import FeeStructure from "./components/FeeStructure";
import HeroSection from "./components/HeroSection";

import { blogs } from "../blog-data/blogs";

const route = "physiotherapy-colleges-in-bangalore-fee-structure";
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
export default function PhysiotherapyColleges() {
  return (
    <div className="bg-background text-foreground">
      <HeroSection />

      <div className="flex flex-col justify-center px-4 md:px-6 py-12 md:py-16 lg:py-20 space-y-20">
        <WhyBangalore />

        <CollegeListing />

        <FeeStructure />

        <AdmissionProcess />

        <CareerScope />
      </div>
    </div>
  );
}