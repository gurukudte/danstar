"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { IoMdArrowForward } from "react-icons/io";

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Blended Background Container */}
      <div className="absolute inset-0 z-0">
        {/* Background Image */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute inset-0 bg-[url('/hero.jpg')] bg-cover bg-center bg-no-repeat"
          aria-hidden="true"
        ></motion.div>

        {/* Responsive Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent md:via-background/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent md:via-background/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/50 to-background/80 sm:hidden" />
      </div>

      {/* Content Container */}
      <div className="container relative z-10 mx-auto flex h-full min-h-[70vh] px-4 sm:min-h-[90vh] sm:px-6 lg:px-8">
        <div className="flex w-full flex-col items-center justify-center py-12 lg:flex-row lg:items-center lg:justify-start">
          {/* Text Content - Left Side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2 xl:pr-16"
          >
            <div className="max-w-2xl space-y-4 sm:space-y-6">
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl"
              >
                EMPOWERING THE FUTURE{" "}
                <span className="text-primary">OF HEALTHCARE</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-base leading-7 text-secondary-foreground sm:text-lg sm:leading-8 md:text-xl"
              >
                Comprehensive solutions to empower healthcare organizations,
                institutions, and professionals to excel.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col gap-3 sm:flex-row sm:gap-4 sm:items-center"
              >
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="group text-base font-semibold hover:text-primary sm:text-lg"
                >
                  <Link href="#services">
                    Explore Services
                    <IoMdArrowForward className="ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="text-white font-semibold hover:bg-secondary sm:text-lg"
                >
                  <Link href="#contact">Contact Us</Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
