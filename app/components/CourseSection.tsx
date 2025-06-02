"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Stethoscope,
  Pill,
  Activity,
  Bone,
  Cpu,
  Database,
  Leaf,
  Armchair,
  TestTube2,
  Microscope,
} from "lucide-react";
import Link from "next/link";

export function CourseSection() {
  const healthcareCourses = [
    // Traditional Healthcare Courses
    {
      name: "BSc Nursing",
      icon: <Stethoscope className="w-5 h-5" />,
      duration: "4 Years",
      category: "Healthcare Programs",
    },
    {
      name: "Allied Health Sciences",
      icon: <Activity className="w-5 h-5" />,
      duration: "3-4 Years",
      category: "Healthcare Programs",
    },
    {
      name: "Pharmacy",
      icon: <Pill className="w-5 h-5" />,
      duration: "4 Years",
      category: "Healthcare Programs",
    },
    {
      name: "Physiotherapy (BPT)",
      icon: <Bone className="w-5 h-5" />,
      duration: "4.5 Years",
      category: "Healthcare Programs",
    },
    {
      name: "Ayurveda (BAMS)",
      icon: <Leaf className="w-5 h-5" />,
      duration: "5.5 Years",
      category: "Healthcare Programs",
    },
    {
      name: "Medical Lab Technology",
      icon: <Microscope className="w-5 h-5" />,
      duration: "3 Years",
      category: "Healthcare Programs",
    },

    // AI and Specialized Courses
    {
      name: "AI for Drug Discovery",
      icon: <TestTube2 className="w-5 h-5" />,
      duration: "6 Months",
      category: "AI Courses",
    },
    {
      name: "AI for Ayurveda",
      icon: <Leaf className="w-5 h-5" />,
      duration: "4 Months",
      category: "AI Courses",
    },
    {
      name: "AI for Physiotherapists",
      icon: <Armchair className="w-5 h-5" />,
      duration: "3 Months",
      category: "AI Courses",
    },
    {
      name: "Nursing Informatics",
      icon: <Database className="w-5 h-5" />,
      duration: "5 Months",
      category: "Specialized Courses",
    },
    {
      name: "Nursing Forensics",
      icon: <Microscope className="w-5 h-5" />,
      duration: "4 Months",
      category: "Specialized Courses",
    },
    {
      name: "AI for Beginners",
      icon: <Cpu className="w-5 h-5" />,
      duration: "3 Months",
      category: "AI Courses",
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
    <section id="courses" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
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
            Healthcare <span className="text-primary">Programs & Courses</span>
          </motion.h2>
          <motion.div
            variants={fadeIn}
            className="w-16 h-1 bg-primary mx-auto mb-6"
          />
          <motion.p
            variants={fadeIn}
            className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Comprehensive healthcare education programs and cutting-edge AI
            courses for modern healthcare professionals
          </motion.p>
        </motion.div>

        {/* Course Categories */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-secondary mb-6">
            Healthcare Degree Programs
          </h3>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          >
            {healthcareCourses
              .filter((c) => c.category === "Healthcare Programs")
              .map((course, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  whileHover={{ y: -5 }}
                  className="bg-card p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-border hover:border-primary/30"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      {course.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-secondary mb-1">
                        {course.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Duration: {course.duration}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
          </motion.div>

          <h3 className="text-xl font-semibold text-secondary mb-6">
            AI & Specialized Courses
          </h3>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {healthcareCourses
              .filter((c) => c.category !== "Healthcare Programs")
              .map((course, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  whileHover={{ y: -5 }}
                  className="bg-card p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-border hover:border-primary/30"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      {course.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-secondary mb-1">
                        {course.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Duration: {course.duration}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-8"
        >
          <Button asChild className="bg-primary hover:bg-primary/90 text-white">
            <Link href="#contact">Explore All Courses & Programs</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
