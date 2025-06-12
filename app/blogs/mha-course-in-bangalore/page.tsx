import CurriculumHighlights from "../hospital-management-course-in-bangalore/components/CurriculumHighlights";
import CareerScope from "./components/CareerScope";
import HeroSection from "./components/HeroSection";
import TopInstitutes from "./components/TopInstitutes";
import WhatIsMHA from "./components/WhatIsMHA";


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
