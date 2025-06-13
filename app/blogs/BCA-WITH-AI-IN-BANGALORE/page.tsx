import CareerScope from "./components/CareerScope";
import HeroSection from "./components/HeroSection";
import TopColleges from "./components/TopColleges";
import WhatIsBCAAI from "./components/WhatIsBCAAI";
import WhoShouldApply from "./components/WhoShouldApply";
import WhyBangalore from "./components/WhyBangalore";

export default function BCAAI() {
  return (
    <div className="bg-background text-foreground">
      <HeroSection />

      <div className="flex flex-col items-center px-4 md:px-6 py-12 md:py-16 lg:py-20 space-y-20">
        <WhatIsBCAAI />

        <WhyBangalore />

        <CareerScope />

        <WhoShouldApply />

        <TopColleges />
      </div>
    </div>
  );
}
