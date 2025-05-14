"use client";
import { motion } from "framer-motion";
import * as React from "react";
import { FaBookOpen } from "react-icons/fa";

const courses = [
  "Nursing Informatics",
  "Nursing Forensics",
  "AI for Cheminformatics",
  "AI for Drug Discovery",
  "AI for Ayurveda",
  "AI for Physiotherapists",
  "AI for Beginners",
];

export function CourseSection() {
  return (
    <section id="courses" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-secondary">Add-on Courses</h2>
          <p className="mt-4 text-lg text-secondary-foreground max-w-3xl mx-auto">
            Specialized courses to enhance your skills and knowledge in emerging
            healthcare technologies.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {courses.map((course, index) => (
            <motion.div
              key={course}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-center"
            >
              <div className="w-10 h-10 mr-4 rounded-full bg-secondary-100 flex items-center justify-center text-primary">
                <FaBookOpen className="w-5 h-5" />
              </div>
              <span className="font-medium text-secondary">{course}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
