"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export default function TestimonialCarousel({
  testimonials,
}: {
  testimonials: { quote: string; author: string }[];
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <div className="relative max-w-3xl mx-auto">
      <motion.div
        key={currentIndex}
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.5 }}
        className="bg-blue-50 p-8 rounded-lg text-center"
      >
        <blockquote className="italic text-gray-700 text-lg mb-4">
          "{testimonials[currentIndex].quote}"
        </blockquote>
        <p className="font-semibold">— {testimonials[currentIndex].author}</p>
      </motion.div>

      <div className="flex justify-center mt-6 space-x-4">
        <Button variant="outline" size="icon" onClick={prevTestimonial}>
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon" onClick={nextTestimonial}>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
