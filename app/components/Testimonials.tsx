"use client";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import {
  FaUserNurse,
  FaUserMd,
  FaLaptopCode,
  FaUserTie,
  FaGlobe,
  FaChartLine,
} from "react-icons/fa";

export const Testimonials = () => {
  const TESTIMONIALS = [
    {
      id: 1,
      name: "Dr. Priya Sharma",
      role: "Nursing Informatics Specialist",
      content:
        "Danstar's AI for Healthcare course transformed my career. I now implement digital solutions in my hospital, improving patient care through technology.",
      rating: 5,
      icon: FaUserNurse,
      iconColor: "text-pink-500",
      bgColor: "bg-pink-100",
    },
    {
      id: 2,
      name: "Rahul Patel",
      role: "Clinical Research Associate",
      content:
        "The AI for Drug Discovery program gave me cutting-edge skills that helped me transition from pharmacy to a high-growth research role.",
      rating: 5,
      icon: FaUserMd,
      iconColor: "text-blue-500",
      bgColor: "bg-blue-100",
    },
    {
      id: 3,
      name: "Ananya Gupta",
      role: "Healthcare Administrator (UK)",
      content:
        "Danstar's study abroad guidance and internship placement helped me build an international career in hospital management.",
      rating: 5,
      icon: FaGlobe,
      iconColor: "text-purple-500",
      bgColor: "bg-purple-100",
    },
    {
      id: 4,
      name: "Arjun Reddy",
      role: "Physiotherapy AI Specialist",
      content:
        "The AI for Physiotherapists course revolutionized my practice. I now use motion analysis software to enhance treatment plans.",
      rating: 5,
      icon: FaLaptopCode,
      iconColor: "text-green-500",
      bgColor: "bg-green-100",
    },
    {
      id: 5,
      name: "Meera Desai",
      role: "Nursing Director",
      content:
        "Danstar's digital marketing services helped our college increase enrollment by 40% through targeted campaigns and SEO optimization.",
      rating: 5,
      icon: FaUserTie,
      iconColor: "text-orange-500",
      bgColor: "bg-orange-100",
    },
    {
      id: 6,
      name: "Dr. Vikram Joshi",
      role: "Ayurveda AI Researcher",
      content:
        "The AI for Ayurveda course helped me bridge traditional medicine with modern technology. We're now developing diagnostic tools using Danstar's training.",
      rating: 5,
      icon: FaChartLine,
      iconColor: "text-red-500",
      bgColor: "bg-red-100",
    },
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 md:mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-secondary mb-4">
            Healthcare <span className="text-primary">Success Stories</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Hear how we're transforming healthcare careers through education,
            technology, and global opportunities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => {
            const Icon = testimonial.icon;
            return (
              <motion.div
                key={testimonial.id}
                className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-border"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <Quote className="w-8 h-8 text-gray-300 mb-4" />
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-full ${testimonial.bgColor} flex items-center justify-center`}
                  >
                    <Icon className={`w-6 h-6 ${testimonial.iconColor}`} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                    <div className="flex mt-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
