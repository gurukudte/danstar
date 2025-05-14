import { motion } from "framer-motion";
import * as React from "react";
import { FaShieldAlt } from "react-icons/fa";

const features = [
  {
    title: "Proven Expertise",
    description:
      "Team of experienced professionals with deep healthcare education understanding",
  },
  {
    title: "Comprehensive Solutions",
    description:
      "Wide range of services to meet your institution's unique needs",
  },
  {
    title: "Commitment to Excellence",
    description: "High-quality services that exceed your expectations",
  },
  {
    title: "Focus on Innovation",
    description:
      "Constantly exploring new ways to improve healthcare education",
  },
];

export function WhyChoose() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-50 to-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-primary">
            Why Choose DANSTAR?
          </h2>
          <p className="mt-4 text-lg text-primary-fr max-w-3xl mx-auto">
            We are committed to providing exceptional services that make a real
            difference.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-14 h-14 mb-6 rounded-full  flex items-center justify-center text-secondary">
                <FaShieldAlt className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">
                {feature.title}
              </h3>
              <p className="text-secondary-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
