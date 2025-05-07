"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Header from "./(landingPage)/components/Header";
import { HeroSection } from "./(landingPage)/components/HeroSection";
import { Features } from "./(landingPage)/components/Features";
import { Stats } from "./(landingPage)/components/Stats";
import { Testimonial } from "./(landingPage)/components/Testimonials";
import { Process } from "./(landingPage)/components/Process";
import { ContactForm } from "./(landingPage)/components/Contact";
import { MobileMenu } from "./(landingPage)/components/MobileMenu";
import { Footer } from "./(landingPage)/components/Footer";

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <AnimatePresence>
        {isMenuOpen && <MobileMenu setIsMenuOpen={setIsMenuOpen} />}
      </AnimatePresence>

      <main>
        <HeroSection />
        <Stats />
        <Features />
        <Testimonial />
        <Process />
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}
