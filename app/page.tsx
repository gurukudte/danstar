"use client";

import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import { LeadForm } from "./components/LeadForm";
import { ServicesSection } from "./components/ServicesSection";
import { WhyChoose } from "./components/WhyChoose";
import { CourseSection } from "./components/CourseSection";
import AboutUs from "./components/AboutUs";
import { Testimonials } from "./components/Testimonials";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <HeroSection />
      <AboutUs />
      <ServicesSection />
      <CourseSection />
      <WhyChoose />
      <Testimonials />
      <LeadForm />
      <Footer />
    </div>
  );
}
