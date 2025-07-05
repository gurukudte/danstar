import ConsultantComparison from "./components/ConsultantComparison";
import CountryGuide from "./components/CountryGuide";
import HeroSection from "./components/HeroSection";
import MBAConsultantBenefits from "./components/MBAConsultantBenefits";
import MBBSConsultantBenefits from "./components/MBBSConsultantBenefits";
import SuccessStories from "./components/SuccessStories";
import WhyConsultants from "./components/WhyConsultants";

import { blogs } from "../blog-data/blogs";
import { domain } from "../utils/constants";

const route = "mba-and-mbbs-consultant";  
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
export default function ConsultantsGuide() {
  return (
    <div className="bg-background text-foreground">
      <HeroSection />

      <div className="flex flex-col justify-center items-center px-4 md:px-6 py-12 md:py-16 lg:py-20 space-y-20">
        <WhyConsultants />

        <MBAConsultantBenefits />

        <MBBSConsultantBenefits />

        <SuccessStories />

        <ConsultantComparison />

        <CountryGuide />
      </div>
    </div>
  );
}
