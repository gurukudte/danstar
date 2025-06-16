"use client";
import { HeartPulse, Stethoscope, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function HeroSection() {
  const features = [
    { icon: <HeartPulse className="w-6 h-6" />, text: "Hands-on Training" },
    { icon: <Stethoscope className="w-6 h-6" />, text: "Clinical Exposure" },
    { icon: <Activity className="w-6 h-6" />, text: "Sports Rehab Focus" },
  ];

  return (
    <section className="relative flex justify-center items-center overflow-hidden bg-gradient-to-br from-primary to-secondary py-16 md:py-24 lg:py-32">
      <div className="container relative z-10 px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center space-y-6"
        >
          <h1 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="block">Physiotherapy Colleges</span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-background to-primary-foreground">
              Bangalore 2025
            </span>
          </h1>
          <p className="text-xl text-white md:text-2xl">
            Complete guide to BPT admissions, fee structure & career
            opportunities
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Button
              size="lg"
              className="bg-background text-foreground hover:bg-background/90 shadow-lg"
            >
              Check Eligibility
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10 shadow-lg"
            >
              Download Fee Brochure
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-16 grid gap-8 sm:grid-cols-3 max-w-4xl mx-auto text-white"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-3 text-center text-primary-foreground"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-foreground/10 backdrop-blur-sm">
                {feature.icon}
              </div>
              <p className="font-medium text-lg">{feature.text}</p>
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
