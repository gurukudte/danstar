"use client"
import { Briefcase, Stethoscope, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function HeroSection() {
  const highlights = [
    { icon: <Briefcase className="w-6 h-6" />, text: "MBA Guidance" },
    { icon: <Stethoscope className="w-6 h-6" />, text: "MBBS Abroad" },
    { icon: <Star className="w-6 h-6" />, text: "Trusted Consultants" },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary to-secondary py-16 md:py-24 lg:py-32">
      <div className="flex flex-col items-center relative z-10 px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center space-y-6"
        >
          <h1 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="block">MBA & MBBS</span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-background to-primary-foreground">
              Consultants Guide 2025
            </span>
          </h1>
          <p className="text-xl text-white md:text-2xl">
            Your complete roadmap to management and medical education success
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Button
              size="lg"
              className="bg-background text-foreground hover:bg-background/90 shadow-lg"
            >
              Free Consultation
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-white border-primary-foreground hover:bg-primary-foreground/10 shadow-lg"
            >
              Download Guide
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-16 grid gap-8 sm:grid-cols-3 max-w-4xl mx-auto"
        >
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-3 text-center text-white"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-foreground/10 backdrop-blur-sm">
                {highlight.icon}
              </div>
              <p className="font-medium text-lg">{highlight.text}</p>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary-foreground/10 blur-3xl" />
        <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-secondary-foreground/10 blur-3xl" />
      </div>
    </section>
  );
}
