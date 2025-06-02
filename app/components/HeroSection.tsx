"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, MessageSquare, ChevronRight } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  // const institutions = [
  //   { name: "MS Ramaiah", logo: "/logos/ramaiah.png" },
  //   { name: "NIMHANS", logo: "/logos/nimhans.svg" },
  //   // { name: "Manipal", logo: "/logos/manipal.svg" },
  //   // { name: "St. John's", logo: "/logos/stjohns.png" },
  //   // { name: "KIMS", logo: "/logos/kims.png" },
  //   // { name: "Yenepoya", logo: "/logos/yenepoya.png" },
  //   // { name: "JSS", logo: "/logos/jss.png" },
  //   // { name: "KLE", logo: "/logos/kle.png" },
  // ];

  return (
    <section className="relative w-full overflow-hidden h-screen max-h-[1000px] min-h-[600px]">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Suggested free image from Unsplash: Medical students in classroom */}
        <Image
          src="/hero-bg.jpg" // Replace with your image path
          alt="Medical students learning"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-secondary/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/50 to-transparent" />
      </div>

      {/* Subtle Pattern */}
      <div
        className="absolute inset-0 opacity-10 z-0"
        style={{
          backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      {/* Content Container */}
      <div className="container relative z-10 h-full mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="w-full py-16 md:py-24">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full max-w-3xl text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center rounded-full bg-primary px-4 py-2 text-sm font-medium text-white mb-6"
            >
              🎓 Admissions Open 2025-26 🎓
            </motion.div>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl"
            >
              <span className="text-primary">Your Dream College</span> Awaits in
              Bangalore
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 text-lg leading-8 text-white/90 sm:text-xl max-w-2xl mx-auto lg:mx-0"
            >
              Expert guidance for admissions in Nursing, Medical, and
              Paramedical courses at top colleges across India. 100% admission
              assistance with 9+ years of experience.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start"
            >
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white text-base font-semibold px-8 py-6"
              >
                <Link href="#contact">
                  Apply Now <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              <Button
                asChild
                variant="ghost"
                className=" gap-2 hover:gap-4 text-white hover:text-secondary hover:bg-white border-white/30 px-8 py-6"
              >
                <Link href="#courses">
                  Explore Courses <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              {/* <Button
                asChild
                size="lg"
                variant="outline"
                className="text-white hover:bg-primary/20 hover:text-white border-white/30 px-8 py-6"
              >
                <Link href="#courses">
                  Explore Courses <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button> */}
            </motion.div>

            {/* Quick Contact Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-12 flex flex-wrap justify-center gap-6 lg:justify-start"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-white/80">Call us</p>
                  <p className="text-lg font-medium text-white">
                    +91 97405 68622
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                  <MessageSquare className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-white/80">Chat on WhatsApp</p>
                  <p className="text-lg font-medium text-white">Chat Now</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Institution Logos - Desktop */}
      {/* <div className="absolute bottom-8 left-0 right-0 hidden lg:block">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex flex-wrap items-center justify-center gap-6 xl:gap-12 opacity-90"
          >
            {institutions.map((institution, index) => (
              <motion.div
                key={institution.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                className="h-10 w-auto grayscale contrast-200 brightness-0 invert transition-all hover:grayscale-0 hover:brightness-100 hover:invert-0 hover:scale-110"
                title={institution.name}
              >
                <img
                  src={institution.logo}
                  alt={institution.name}
                  className="h-full w-full object-contain"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div> */}

      {/* Institution Logos - Mobile - Looping Marquee */}
      {/* <div className="absolute bottom-8 left-0 right-0 lg:hidden overflow-hidden">
        <div className="relative"> */}
      {/* First set of logos (visible) */}
      {/* <div className="flex items-center py-4 animate-marquee whitespace-nowrap">
            {institutions.map((institution, index) => (
              <motion.div
                key={`first-${institution.name}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                className="inline-flex flex-shrink-0 h-8 w-auto grayscale contrast-200 brightness-0 invert mx-6"
                title={institution.name}
              >
                <img
                  src={institution.logo}
                  alt={institution.name}
                  className="h-full w-full object-contain"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div> */}

      {/* Second set of logos (for seamless looping) */}
      {/* <div className="flex items-center py-4 absolute top-0 animate-marquee2 whitespace-nowrap">
            {institutions.map((institution, index) => (
              <motion.div
                key={`second-${institution.name}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                className="inline-flex flex-shrink-0 h-8 w-auto grayscale contrast-200 brightness-0 invert mx-6"
                title={institution.name}
              >
                <img
                  src={institution.logo}
                  alt={institution.name}
                  className="h-full w-full object-contain"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div> */}
      {/* </div>
      </div> */}
    </section>
  );
}
