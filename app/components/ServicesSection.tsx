"use client";
import { motion } from "framer-motion";
import {
  BookOpenCheck,
  GraduationCap,
  UserCog,
  ClipboardList,
  BadgeDollarSign,
  School,
} from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Admission Guidance",
      description:
        "Expert assistance for admissions in top nursing, medical, and paramedical colleges across India.",
    },
    {
      icon: <BookOpenCheck className="w-6 h-6" />,
      title: "Course Selection",
      description:
        "Personalized counseling to help you choose the right healthcare career path.",
    },
    {
      icon: <UserCog className="w-6 h-6" />,
      title: "Career Counseling",
      description:
        "Comprehensive career assessment with psychometric evaluation tools.",
    },
    {
      icon: <ClipboardList className="w-6 h-6" />,
      title: "Documentation Support",
      description:
        "End-to-end help with application forms, documents, and admission procedures.",
    },
    {
      icon: <BadgeDollarSign className="w-6 h-6" />,
      title: "Scholarship Assistance",
      description:
        "Guidance on available scholarships and financial aid options.",
    },
    {
      icon: <School className="w-6 h-6" />,
      title: "College Selection",
      description:
        "Recommendations based on your preferences, budget, and career goals.",
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
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
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
            Our <span className="text-primary">Services</span>
          </motion.h2>
          <motion.div
            variants={fadeIn}
            className="w-16 h-1 bg-primary mx-auto mb-6"
          />
          <motion.p
            variants={fadeIn}
            className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Comprehensive support for your educational journey from start to
            finish
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              whileHover={{ y: -5 }}
              className="bg-card p-6 sm:p-8 rounded-xl shadow-sm hover:shadow-md transition-all border border-border hover:border-primary/30"
            >
              <div className="w-12 h-12 mb-5 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
