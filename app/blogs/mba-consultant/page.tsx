import ConsultantComparison from "./components/ConsultantComparison";
import CountryGuide from "./components/CountryGuide";
import HeroSection from "./components/HeroSection";
import MBAConsultantBenefits from "./components/MBAConsultantBenefits";
import MBBSConsultantBenefits from "./components/MBBSConsultantBenefits";
import SuccessStories from "./components/SuccessStories";
import WhyConsultants from "./components/WhyConsultants";
export const metadata = {
  alternates: {
    canonical: "https://www.danstar.in/blogs/mba-consultant",
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
