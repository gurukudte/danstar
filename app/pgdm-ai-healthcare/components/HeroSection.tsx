"use client";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight, Trophy, Calendar, Monitor } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const images = [
    {
      src: "/images/7.jpg",
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
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Content - Text */}
          <div className="lg:w-1/2 space-y-8">
            {/* Logo and Program Name */}
            <div className="flex flex-col justify-center items-start gap-3">
              <div className="flex items-center gap-8 mb-4">
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
                    width={100}
                    height={40}
                    className="h-9 w-auto"
                  />
                ))}
              </div>
              <h2 className="text-5xl font-bold text-gray-900 tracking-tight">
                PGDM <span className="text-blue-600">EDGE</span> - Healthcare
              </h2>
            </div>

            {/* Main Heading */}
            <h1 className="text-2xl font-semibold text-gray-900 leading-tight">
              Lead the Future of Healthcare with AI, digital innovation, and
              strategic leadership skills
            </h1>

            {/* Rankings and Details */}
            <div className="text-2xl font-semibold text-gray-900 leading-tight">
              <h2>
                India's top-ranked B-school (Top 30, Business Today), Globally
                ranked by QS in Healthcare
              </h2>
            </div>

            {/* Program Duration */}
            <div className="grid grid-cols-3 gap-4 max-w-xl">
              {[
                {
                  icon: <Calendar className="h-10 w-10 text-blue-600" />,
                  label: "24 Months",
                },
                {
                  icon: <Trophy className="h-10 w-10 text-blue-600" />,
                  label: "Full Time PGDM",
                },
                {
                  icon: <Monitor className="h-10 w-10 text-blue-600" />,
                  label: "Virtual+On campus",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-4 rounded-lg shadow-sm border border-gray-100"
                >
                  <div className="flex flex-col justify-start items-start gap-2">
                    {item.icon}
                    <span className="text-md font-bold">{item.label}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="https://application-form.keeplearning.live/pg-application-form?utm_source=tep&utm_medium=vn&utm_campaign=danstar"
                passHref
                legacyBehavior
              >
                <Button
                  asChild
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg flex items-center gap-2 shadow-lg hover:shadow-blue-200/50 transition-all cursor-pointer"
                >
                  <a target="_blank" rel="noopener noreferrer">
                    Apply Now
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </Button>
              </Link>
              <Button
                variant="outline"
                className="px-8 py-6 text-lg border-blue-600 text-blue-600 hover:bg-blue-50 flex items-center gap-2 transition-all"
              >
                <Download className="h-5 w-5" />
                Download Brochure
              </Button>
            </div>

            {/* Deadline Notice */}
            <div className="flex items-center gap-2 pt-2">
              <div className="h-3 w-3 rounded-full bg-red-500 animate-pulse"></div>
              <p className="text-red-600 font-medium">
                Application closes soon
              </p>
            </div>
          </div>

          {/* Right Content - Image Carousel */}
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <div className="relative rounded-xl overflow-hidden shadow-2xl h-[500px]">
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

                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent flex items-end p-6">
                    <p className="text-white text-xl font-medium">
                      {image.overlayText}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation dots */}
            <div className="flex justify-center mt-4 space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-blue-600 w-6"
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
