"use client";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  Users,
  ClipboardCheck,
  Handshake,
  BarChart2,
  Award,
  BookOpenCheck,
  Shield,
} from "lucide-react";

export function WhyChoose() {
  const benefits = [
    {
      icon: <BadgeCheck className="w-6 h-6" />,
      title: "9+ Years Experience",
      description:
        "Trusted by 1000+ students for admission guidance since 2015",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Healthcare Specialists",
      description: "Experts in medical and paramedical course admissions",
    },
    {
      icon: <ClipboardCheck className="w-6 h-6" />,
      title: "100% Admission Support",
      description: "From application to enrollment - we handle it all",
    },
    {
      icon: <Handshake className="w-6 h-6" />,
      title: "Ethical Practices",
      description: "No false promises - only genuine guidance and support",
    },
    {
      icon: <BarChart2 className="w-6 h-6" />,
      title: "95% Success Rate",
      description: "Majority of our students get into their preferred colleges",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Scholarship Assistance",
      description: "Help securing financial aid and education loans",
    },
    {
      icon: <BookOpenCheck className="w-6 h-6" />,
      title: "Free Career Counseling",
      description: "Personalized guidance to choose the right path",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Direct College Tie-ups",
      description: "Strong relationships with top institutions across India",
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
            Our unique approach makes us Bangalore's most trusted education
            consultancy
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
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-primary mb-2">9+</p>
              <p className="text-secondary font-medium">Years Experience</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary mb-2">1000+</p>
              <p className="text-secondary font-medium">Students Guided</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary mb-2">50+</p>
              <p className="text-secondary font-medium">Partner Colleges</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
