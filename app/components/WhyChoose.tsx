"use client";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  Handshake,
  BarChart2,
  Lightbulb,
  Briefcase,
  Globe,
  Cpu,
  HeartPulse,
} from "lucide-react";

export function WhyChoose() {
  const benefits = [
    {
      icon: <BadgeCheck className="w-6 h-6" />,
      title: "Proven Expertise",
      description: "9+ years transforming healthcare education and careers",
    },
    {
      icon: <HeartPulse className="w-6 h-6" />,
      title: "Healthcare Focus",
      description: "Specialized in nursing, medical, and allied health fields",
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Innovative Solutions",
      description: "AI-powered courses and cutting-edge training programs",
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "End-to-End Support",
      description: "From admissions to internships and placements",
    },
    {
      icon: <Handshake className="w-6 h-6" />,
      title: "Ethical Practices",
      description: "Transparent guidance with measurable results",
    },
    {
      icon: <BarChart2 className="w-6 h-6" />,
      title: "95% Success Rate",
      description: "High placement and admission success rates",
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Future-Ready Skills",
      description: "Upskilling in AI and digital healthcare technologies",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Opportunities",
      description: "Study abroad and international career pathways",
    },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section
      id="why-choose"
      className="py-20 bg-gradient-to-b from-secondary/5 to-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeIn}
            className="text-3xl sm:text-4xl font-bold text-secondary mb-4"
          >
            Why Choose <span className="text-primary">Danstar?</span>
          </motion.h2>
          <motion.div
            variants={fadeIn}
            className="w-16 h-1 bg-primary mx-auto mb-6"
          />
          <motion.p
            variants={fadeIn}
            className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Comprehensive solutions that empower healthcare professionals and
            institutions
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              whileHover={{ y: -5 }}
              className="bg-card p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-border hover:border-primary/30"
            >
              <div className="w-12 h-12 mb-4 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-semibold text-secondary mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 bg-primary/5 rounded-xl p-8 border border-primary/10"
        >
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-primary mb-2">9+</p>
              <p className="text-secondary font-medium">Years Experience</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary mb-2">1000+</p>
              <p className="text-secondary font-medium">
                Professionals Trained
              </p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary mb-2">50+</p>
              <p className="text-secondary font-medium">Partner Institutions</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary mb-2">15+</p>
              <p className="text-secondary font-medium">AI & Digital Courses</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
