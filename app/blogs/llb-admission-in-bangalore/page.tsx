
import {
  Scale,
  Landmark,
  Briefcase,
  GraduationCap,
} from "lucide-react";
import HeroSection from "./components/HeroSection";
import WhyBangalore from "./components/WhyBangalore";
import AdmissionSteps from "./components/AdmissionSteps";
import CollegeCard from "./components/CollegeCard";
import CareerPathways from "./components/CareerPathways";
import EligibilityCriteria from "./components/EligibilityCriteria";
import { blogs } from "../blog-data/blogs";

const route = "llb-admission-in-bangalore";
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
function LLBAdmissionBangalore() {
  return (
    <div className=" bg-background text-white">
      <HeroSection />

      <div className="flex flex-col justify-center px-4 md:px-6 py-12 md:py-16 lg:py-20 space-y-20">
        <WhyBangalore />

        <EligibilityCriteria />

        <CareerPathways />

        <section className="space-y-12">
          <div className="mx-auto max-w-4xl text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Top Law Colleges in Bangalore (2025)
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Premier institutions shaping the next generation of legal
              professionals
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:gap-10 text-primary">
            <CollegeCard
              name="Christ University"
              features={[
                "NAAC A+",
                "Strong placements",
                "Well-rounded curriculum",
              ]}
              icon={<GraduationCap className="w-6 h-6" />}
              badge="Most Popular"
            />
            <CollegeCard
              name="KLE Law College"
              features={[
                "50+ years legacy",
                "Top-notch faculty",
                "Excellent moot court",
              ]}
              icon={<Scale className="w-6 h-6" />}
            />
            <CollegeCard
              name="IFIM Law School"
              features={[
                "Corporate law focus",
                "Global exposure",
                "Tech integration",
              ]}
              icon={<Briefcase className="w-6 h-6" />}
              badge="Emerging"
            />
            <CollegeCard
              name="Presidency University"
              features={[
                "Moot court culture",
                "Research focus",
                "Industry connections",
              ]}
              icon={<Landmark className="w-6 h-6" />}
            />
          </div>
        </section>

        <AdmissionSteps />
      </div>
    </div>
  );
}



export default LLBAdmissionBangalore;