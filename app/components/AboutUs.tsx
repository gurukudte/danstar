"use client";
import { motion } from "framer-motion";
import {
  BookOpen,
  HeartPulse,
  Lightbulb,
  ShieldCheck,
  Users,
} from "lucide-react";

const AboutUs = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const features = [
    {
      icon: <HeartPulse className="w-8 h-8 text-blue-600" />,
      title: "Healthcare Focus",
      description:
        "Specialized solutions for healthcare education institutions",
    },
    {
      icon: <BookOpen className="w-8 h-8 text-blue-600" />,
      title: "Decade of Experience",
      description: "10+ years collective expertise in education and healthcare",
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "End-to-End Services",
      description: "Comprehensive solutions under one roof",
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-blue-600" />,
      title: "Innovation Driven",
      description: "Forward-looking approaches for education excellence",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
      title: "Quality & Integrity",
      description: "Core values guiding all our operations",
    },
  ];

  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-4"
        >
          <motion.h2
            variants={fadeIn}
            className="text-4xl font-bold text-secondary mb-4"
          >
            About <span className="text-primary">DANSTAR</span>
          </motion.h2>
          <motion.div
            variants={fadeIn}
            className="w-20 h-1 bg-secondary mx-auto mb-6"
          ></motion.div>
          <motion.p
            variants={fadeIn}
            className="text-xl text-secondary-foreground max-w-3xl mx-auto"
          >
            Your trusted partner in healthcare education solutions
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-secondary">
              Transforming Healthcare Education
            </h3>
            <p className="text-secondary-foreground">
              DANSTAR WLP (OPC) Private Limited is a dynamic organization
              committed to being a one-stop solution provider in the education
              sector, with a specialized focus on healthcare. Headquartered in
              Bangalore, India, our core mission is to support educational
              institutions by delivering integrated, strategic, and
              results-driven services.
            </p>
            <p className="text-secondary-foreground">
              With over a decade of collective experience, our team brings deep
              expertise in education, healthcare, research, and marketing. This
              extensive background equips us with a nuanced understanding of the
              sector's evolving needs.
            </p>
            <div className="flex flex-wrap gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="flex items-center w-[30rem] gap-3 bg-gray-50 p-4 rounded-lg border border-gray-100 shadow-sm text-primary"
                >
                  {feature.icon}
                  <div>
                    <h4 className="font-medium text-secondary">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-blue-50 rounded-xl p-8 space-y-6 border border-blue-100 shadow-sm">
              <h3 className="text-2xl font-semibold text-gray-800">
                Our Vision & Values
              </h3>
              <p className="text-gray-600">
                Driven by a forward-looking vision, DANSTAR aims to be a
                catalyst for innovation and excellence in education. Our core
                values guide every aspect of our operations:
              </p>
              <ul className="space-y-4">
                {[
                  "Quality in every service we deliver",
                  "Integrity in all our relationships",
                  "Innovation to drive sector transformation",
                  "Client-centric solutions tailored to your needs",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <span className="text-blue-600 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </span>
                    <span className="text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -z-10 w-32 h-32 bg-blue-100 rounded-full -top-10 -left-10 opacity-70"
            ></motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              className="absolute -z-10 w-40 h-40 bg-blue-100 rounded-full -bottom-10 -right-10 opacity-70"
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
