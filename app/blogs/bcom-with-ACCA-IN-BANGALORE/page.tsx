import AccaBenefits from "./components/AccaBenefits";
import HeroSection from "./components/HeroSection";
import KpmgBenefits from "./components/KpmgBenefits";
import ProgramIntro from "./components/ProgramIntro";
import StudentTestimonials from "./components/StudentTestimonials";
import WhyBangalore from "./components/WhyBangalore";

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
