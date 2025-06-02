"use client";
import { motion } from "framer-motion";
import {
  GraduationCap,
  UserCog,
  Briefcase,
  Laptop,
  BarChart2,
  HeartPulse,
  Globe,
  Lightbulb,
  Users,
} from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Admission Support",
      description:
        "Innovative recruitment strategies for healthcare institutions to connect with passionate students.",
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Internship Placement",
      description:
        "Curated internships across healthcare industries to build competitive resumes.",
    },
    {
      icon: <UserCog className="w-6 h-6" />,
      title: "Consultancy Services",
      description:
        "Strategic guidance for healthcare organizations to achieve measurable improvements.",
    },
    {
      icon: <HeartPulse className="w-6 h-6" />,
      title: "Training & Soft Skills",
      description:
        "Comprehensive upskilling solutions for healthcare professionals to excel in their careers.",
    },
    {
      icon: <Laptop className="w-6 h-6" />,
      title: "Digital Marketing",
      description:
        "Elevate your healthcare brand with strategic digital campaigns and enhanced online presence.",
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "AI Courses",
      description:
        "Specialized training in AI applications for healthcare including drug discovery and Ayurveda.",
    },
    {
      icon: <BarChart2 className="w-6 h-6" />,
      title: "Placement Assistance",
      description:
        "Direct connections with top healthcare companies to accelerate career growth.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Workshops",
      description:
        "Interactive sessions providing practical tools for professional development in healthcare.",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Study Abroad",
      description:
        "Global opportunities and guidance for healthcare education overseas.",
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
            Comprehensive solutions for healthcare education, career
            development, and institutional growth
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
