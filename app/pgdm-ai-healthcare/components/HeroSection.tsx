"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, Trophy, Calendar, Monitor } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const images = [
    {
      src: "/images/7.png",
      alt: "PGDM Healthcare Management with AI specialization",
      overlayText:
        "India's first Post Graduate Diploma in Healthcare Management with AI specialization",
    },
    {
      src: "/images/8.png",
      alt: "Healthcare Management program tracks",
      overlayText:
        "Commercial Tracks | Healthcare Operations | Leadership & Consulting",
    },
    {
      src: "/images/9.png",
      alt: "Create future in Healthcare Management",
      overlayText: "Create A Future In HEALTHCARE MANAGEMENT",
    },
    {
      src: "/images/10.png",
      alt: "Learn healthcare demands of tomorrow",
      overlayText: "Learn What Tomorrow Demands In Healthcare",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, images.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="relative py-6 sm:py-12 px-4 sm:px-6 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-12">
          {/* Left Content - Text */}
          <div className="lg:w-1/2 space-y-4 sm:space-y-6">
            {/* Logo and Program Name */}
            <div className="flex flex-col justify-center items-start gap-2">
              <div className="flex flex-wrap items-center gap-3 sm:gap-6 mb-1 sm:mb-3">
                {[
                  {
                    src: "/logos/jagsom.svg",
                    alt: "JAGSoM Logo",
                  },
                  {
                    src: "/images/KL_Colour_Horizontal.svg",
                    alt: "KL University Logo",
                  },
                  {
                    src: "/logo2.png",
                    alt: "Danstar Logo",
                  },
                ].map((logo, idx) => (
                  <Image
                    key={idx}
                    src={logo.src}
                    alt={logo.alt}
                    width={80}
                    height={32}
                    className="h-6 sm:h-8 w-auto"
                  />
                ))}
              </div>
              <h2 className="my-4 text-2xl sm:text-4xl font-bold text-gray-900 tracking-tight">
                PGDM <span className="text-blue-600">EDGE</span> - Healthcare
              </h2>
            </div>

            {/* Main Heading */}
            <h1 className="text-lg sm:text-xl font-semibold text-gray-900 leading-tight">
              Lead the Future of Healthcare with AI, digital innovation, and
              strategic leadership skills
            </h1>

            {/* Rankings and Details */}
            <div className="text-base sm:text-xl font-semibold text-gray-900 leading-tight">
              <h2>
                India's top-ranked B-school (Top 30, Business Today), Globally
                ranked by QS in Healthcare
              </h2>
            </div>

            {/* Program Duration */}
            <div className="flex gap-2 sm:gap-3 max-w-xl">
              {[
                {
                  icon: (
                    <Calendar className="h-6 sm:h-8 w-6 sm:w-8 text-blue-600" />
                  ),
                  label: "24 Months",
                },
                {
                  icon: (
                    <Trophy className="h-6 sm:h-8 w-6 sm:w-8 text-blue-600" />
                  ),
                  label: "Full Time PGDM",
                },
                {
                  icon: (
                    <Monitor className="h-6 sm:h-8 w-6 sm:w-8 text-blue-600" />
                  ),
                  label: "Virtual+On campus",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-2 sm:p-3 rounded-lg shadow-sm border border-gray-100"
                >
                  <div className="flex flex-col justify-center lg:items-start items-center gap-1">
                    {item.icon}
                    <span className="text-xs sm:text-sm font-bold">
                      {item.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-2 sm:gap-3 pt-1 sm:pt-3">
              <Link
                href="https://application-form.keeplearning.live/pg-application-form?utm_source=tep&utm_medium=vn&utm_campaign=danstar"
                passHref
              >
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base flex items-center gap-2 shadow-lg hover:shadow-blue-200/50 transition-all">
                  Apply Now
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>

            {/* Deadline Notice */}
            <div className="flex items-center gap-2 pt-1">
              <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse"></div>
              <p className="text-red-600 font-medium text-xs sm:text-sm">
                Application closes soon
              </p>
            </div>
          </div>

          {/* Right Content - Image Carousel */}
          <div className="lg:w-1/2 mt-4 sm:mt-6 lg:mt-0 w-full">
            <div className="relative rounded-xl overflow-hidden shadow-xl h-[250px] sm:h-[350px] md:h-[450px]">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentIndex ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {/* Background blurred image for seamless blend */}
                  <Image
                    src={image.src}
                    alt={`${image.alt} blurred background`}
                    fill
                    className="object-cover blur-md scale-105"
                    aria-hidden
                  />

                  {/* Foreground clean image that fits */}
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-contain"
                    priority={index === 0}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent flex items-end p-3 sm:p-4">
                    <p className="text-white text-sm sm:text-base font-medium">
                      {image.overlayText}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation dots */}
            <div className="flex justify-center mt-2 sm:mt-3 space-x-1 sm:space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-blue-600 w-3 sm:w-5"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
