"use client";

import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import { LeadForm } from "./components/LeadForm";
import { ServicesSection } from "./components/ServicesSection";
import { WhyChoose } from "./components/WhyChoose";
import { MarketingServices } from "./components/MarketingServices";
import { CourseSection } from "./components/CourseSection";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <CourseSection />
      <MarketingServices />
      <WhyChoose />
      <LeadForm />
      <Footer />
    </div>
  );
}
