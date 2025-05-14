import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import * as React from "react";
import { IoMdArrowForward } from "react-icons/io";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-secondary">
            EMPOWERING THE FUTURE{" "}
            <span className="text-secondary-600">OF HEALTHCARE</span>
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 text-lg md:text-xl text-secondary-foreground max-w-3xl mx-auto"
          >
            Comprehensive solutions to empower healthcare organizations,
            institutions, and professionals to excel.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
          >
            <Button
              variant="outline"
              className="text-primary hover:bg-primary-700 px-8 py-6 text-lg font-semibold"
            >
              Explore Services <IoMdArrowForward className="ml-2" />
            </Button>
            <Button
              //   variant="outline"
              className="text-background hover:bg-primary-50 px-8 py-6 text-lg font-semibold"
            >
              Contact Us
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
