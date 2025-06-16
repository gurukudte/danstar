
import WhyBangalore from "../llb-admission-in-bangalore/components/WhyBangalore";
import AdmissionProcess from "./components/AdmissionProcess";
import CareerScope from "./components/CareerScope";
import CollegeListing from "./components/CollegeListing";
import FeeStructure from "./components/FeeStructure";
import HeroSection from "./components/HeroSection";
export const metadata = {
  alternates: {
    canonical:
      "https://www.danstar.in/blogs/physiotherapy-colleges-in-bangalore-fee-structure",
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