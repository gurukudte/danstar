"use client"
import WhyBangalore from "../llb-admission-in-bangalore/components/WhyBangalore";
import CareerScope from "./components/CareerScope";
import CollegeListing from "./components/CollegeListing";
import CurriculumHighlights from "./components/CurriculumHighlights";
import HeroSection from "./components/HeroSection";
import WhyHospitalManagement from "./components/WhyHospitalManagement";


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
