
import HeroSection from "./components/HeroSection";
import { SpecializationsSection } from "./components/SpecializationsSection";
import { LearningOutcomes } from "./components/LearningOutcomes";
import { ProgramExperience } from "./components/ProgramExperience";
import CampusImmersions from "./components/CampusImmersions";
import CurriculumComponent from "./components/CurriculumComponent";
import WidgetLoader from "./components/WidgetLoader";
import { Metadata } from "next";
import { CareerEngine } from "./components/CareerEngine";

export const metadata: Metadata = {
  title: "PGDM EDGE in Healthcare Management with AI Specialization | JAGSoM | Danstar | Keep Learning",
  description:
    "India's first Post Graduate Diploma in Healthcare Management with AI specialization. Develop skills in healthcare operations, data analytics, quality compliance, and leadership. 50+ partner institutions, 1000+ professionals trained.",
  keywords: [
    "PGDM in Healthcare Management",
    "Healthcare Management with AI",
    "AI in Healthcare course",
    "Post Graduate Diploma Healthcare",
    "Healthcare Operations Management",
    "Healthcare Data Analytics",
    "Healthcare Leadership Program",
    "JAGSoM Healthcare Management",
    "Healthcare Quality Compliance",
    "Healthcare Commercial Tracks",
  ],
  alternates: {
    canonical: "https://www.danstar.in/pgdm-ai-healthcare",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col gap-4">
      {/* Hero Section */}
      <HeroSection />
      <SpecializationsSection />
      <LearningOutcomes />
      <CurriculumComponent />
      <CampusImmersions />
      <CareerEngine />
      <ProgramExperience />
      <WidgetLoader />
    </div>
  );
}
