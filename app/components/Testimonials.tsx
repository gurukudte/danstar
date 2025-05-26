"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Medical Student, AIIMS Delhi",
    content:
      "Danstar revolutionized how I prepare for my exams. The AI-powered explanations make complex concepts so much easier to understand. My grades have improved significantly since I started using it!",
    avatar: "/avatars/indian-student-1.jpg",
  },
  {
    id: 2,
    name: "Rahul Patel",
    role: "Engineering Student, IIT Bombay",
    content:
      "As someone who struggled with time management, Danstar's personalized study plans have been a game-changer. I've reduced my study time while improving retention. Highly recommended!",
    avatar: "/avatars/indian-student-2.jpg",
  },
  {
    id: 3,
    name: "Ananya Gupta",
    role: "NEET Aspirant, Kota",
    content:
      "The interactive quizzes and instant feedback helped me identify my weak areas quickly. I've seen a 30% improvement in my mock test scores within just 2 months of using Danstar.",
    avatar: "/avatars/indian-student-3.jpg",
  },
  {
    id: 4,
    name: "Arjun Singh",
    role: "JEE Advanced Student",
    content:
      "Danstar's adaptive learning technology is phenomenal. It adjusts to my learning pace and focuses exactly where I need improvement. The mobile app makes studying on the go so convenient.",
    avatar: "/avatars/indian-student-4.jpg",
  },
  {
    id: 5,
    name: "Meera Desai",
    role: "UPSC Aspirant, Delhi",
    content:
      "The comprehensive study materials and regular progress tracking have made my UPSC preparation much more structured. I feel more confident about my preparation strategy now.",
    avatar: "/avatars/indian-student-5.jpg",
  },
  {
    id: 6,
    name: "Vikram Joshi",
    role: "CA Student, Mumbai",
    content:
      "Danstar simplified complex accounting concepts through visual learning. The video explanations and practice problems are exactly what I needed to clear my CA foundation exams.",
    avatar: "/avatars/indian-student-6.jpg",
  },
];

export const Testimonials = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section
      ref={ref}
      className="relative w-full flex justify-center py-12 md:py-24 bg-gray-50"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-transparent opacity-70" />

      <div className="relative z-10 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 md:mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-gray-900">
            Trusted by Indian Students
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-gray-600">
            Join thousands of Indian students who transformed their learning
            with Danstar
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          style={{ y }}
        >
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-200"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-4 mb-4 md:mb-6">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-blue-100">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm md:text-base">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs md:text-sm text-gray-500">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <p className="text-gray-600 text-sm md:text-base italic relative pl-5 md:pl-6 before:absolute before:left-0 before:text-4xl md:before:text-5xl before:leading-none before:top-0 before:text-blue-100 before:font-serif before:content-['\\0022']">
                {testimonial.content}
              </p>
              <div className="mt-4 flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 md:w-5 md:h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
