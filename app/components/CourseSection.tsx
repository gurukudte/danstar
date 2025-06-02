"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  BookOpen,
  Stethoscope,
  Pill,
  Activity,
  Brain,
  HeartPulse,
  Bone,
} from "lucide-react";
import Link from "next/link";

export function CourseSection() {
  const healthcareCourses = [
    {
      name: "BSc Nursing",
      icon: <Stethoscope className="w-5 h-5" />,
      duration: "4 Years",
      colleges: ["NIMHANS", "St. John's", "MS Ramaiah"],
    },
    {
      name: "Allied Health Sciences",
      icon: <Activity className="w-5 h-5" />,
      duration: "3-4 Years",
      colleges: ["Manipal", "Yenepoya", "JSS"],
    },
    {
      name: "Pharmacy",
      icon: <Pill className="w-5 h-5" />,
      duration: "4 Years",
      colleges: ["KLE", "Al-Ameen", "JSS"],
    },
    {
      name: "Physiotherapy (BPT)",
      icon: <Bone className="w-5 h-5" />,
      duration: "4.5 Years",
      colleges: ["KIMS", "SDM", "Yenepoya"],
    },
    {
      name: "Ayurveda (BAMS)",
      icon: <HeartPulse className="w-5 h-5" />,
      duration: "5.5 Years",
      colleges: ["SDM", "AYUSH", "KLE"],
    },
    {
      name: "Hospital Administration",
      icon: <BookOpen className="w-5 h-5" />,
      duration: "2 Years",
      colleges: ["TISS", "Apollo", "IIHMR"],
    },
    {
      name: "Medical Lab Technology",
      icon: <Brain className="w-5 h-5" />,
      duration: "3 Years",
      colleges: ["Manipal", "CMC Vellore", "AIIMS"],
    },
    {
      name: "MBBS",
      icon: <Stethoscope className="w-5 h-5" />,
      duration: "5.5 Years",
      colleges: ["KIMS", "MS Ramaiah", "JIPMER"],
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
            Healthcare <span className="text-primary">Courses</span>
          </motion.h2>
          <motion.div
            variants={fadeIn}
            className="w-16 h-1 bg-primary mx-auto mb-6"
          />
          <motion.p
            variants={fadeIn}
            className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Specialized admission guidance for top healthcare programs in
            Bangalore and across India
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {healthcareCourses.map((course, index) => (
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
                  <p className="text-sm text-muted-foreground mb-3">
                    Duration: {course.duration}
                  </p>
                  <div className="mt-2">
                    <h4 className="text-xs font-medium text-muted-foreground mb-1">
                      Top Colleges:
                    </h4>
                    <p className="text-sm text-secondary">
                      {course.colleges.join(", ")}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-16"
        >
          <Button asChild className="bg-primary hover:bg-primary/90 text-white">
            <Link href="#contact">Get Complete Course List</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
