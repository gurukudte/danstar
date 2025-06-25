"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export function JagsomCarousel() {
  const images = [
    {
      src: "/images/7.jpg", // Replace with your actual image paths
      alt: "PGDM in Healthcare Management with AI specialization",
      keyPoints: [
        "India's first Post Graduate Diploma in Healthcare Management with AI specialization",
        "Applications Close: 25th July",
      ],
    },
    {
      src: "/images/8.png",
      alt: "Healthcare Management program features",
      keyPoints: [
        "Commercial Tracks",
        "Healthcare Operations",
        "Leadership & Consulting",
        "Data & Digital Analytics",
        "Quality & Compliance",
      ],
    },
    {
      src: "/images/9.png",
      alt: "Create a future in Healthcare Management",
      keyPoints: [
        "Create A Future In HEALTHCARE MANAGEMENT",
        "50+ partner institutions",
        "1000+ professionals trained",
      ],
    },
    {
      src: "/images/10.png",
      alt: "Learn what tomorrow demands in healthcare",
      keyPoints: [
        "Learn What Tomorrow Demands In Healthcare",
        "What You Will Learn",
        "Know More",
      ],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-rotate slides every 5 seconds
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
    // Resume auto-play after manual navigation
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto overflow-hidden rounded-xl shadow-xl">
      {/* Carousel container */}
      <div className="relative h-[500px] md:h-[600px]">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />

            {/* Text overlay */}
            <div className="absolute inset-0 bg-black/30 flex items-center">
              <div className="max-w-2xl mx-auto text-center p-6 text-white">
                <div className="mb-6 flex justify-center space-x-4">
                  <Image
                    src="/jagsom-logo.png"
                    alt="JAGSoM Logo"
                    width={120}
                    height={60}
                    className="h-12 w-auto"
                  />
                  <span className="text-lg font-medium self-center">
                    keeplearning
                  </span>
                </div>

                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                  PGDM EDGE
                </h2>

                <ul className="space-y-2 text-lg md:text-xl mb-6">
                  {image.keyPoints.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>

                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium">
                  Know More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex
                ? "bg-white w-6"
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={() =>
          goToSlide((currentIndex - 1 + images.length) % images.length)
        }
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full"
        aria-label="Previous slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        onClick={() => goToSlide((currentIndex + 1) % images.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full"
        aria-label="Next slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
}
