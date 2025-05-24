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

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/0.5 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent lg:hidden" />
      </div>

      {/* Content Container */}
      <div className="container relative z-10 mx-auto flex h-full min-h-screen px-4 sm:px-6 lg:px-8 ">
        <div className="flex w-full flex-col items-center lg:flex-row lg:items-center">
          {/* Text Content - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full py-24 lg:w-1/2 lg:py-32 xl:pr-16"
          >
            <div className="max-w-2xl space-y-6">
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
              >
                EMPOWERING THE FUTURE{" "}
                <span className="text-primary">OF HEALTHCARE</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg leading-8 text-secondary-foreground md:text-xl"
              >
                Comprehensive solutions to empower healthcare organizations,
                institutions, and professionals to excel.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col gap-4 sm:flex-row sm:items-center"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="cursor-pointer group text-lg font-semibold hover:text-primary"
                >
                  <Link href="#services">Explore Services</Link>
                  <IoMdArrowForward className="ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button asChild className=" hover:bg-secondary text-white">
                  <Link href="#contact">Contact Us</Link>
                </Button>
                {/* <Button
                  size="lg"
                  className="cursor-pointer text-lg font-semibold text-background"
                >
                  Contact Us
                </Button> */}
              </motion.div>
            </div>
          </motion.div>

          {/* Spacer for Right Side - Shows blended background */}
          {/* <div className="hidden w-full lg:block lg:w-1/2" /> */}
        </div>
      </div>
    </section>
  );
}
