import { motion } from "framer-motion";
import * as React from "react";
import {
  FaCogs,
  FaCommentAlt,
  FaEnvelope,
  FaLaptop,
  FaLayerGroup,
  FaMobileAlt,
} from "react-icons/fa";

const marketingServices = [
  { icon: <FaLaptop className="w-5 h-5" />, name: "SEO" },
  {
    icon: <FaCommentAlt className="w-5 h-5" />,
    name: "Social Media Marketing",
  },
  { icon: <FaEnvelope className="w-5 h-5" />, name: "Email Marketing" },
  { icon: <FaMobileAlt className="w-5 h-5" />, name: "SMS Marketing" },
  { icon: <FaLayerGroup className="w-5 h-5" />, name: "Web Development" },
  { icon: <FaCogs className="w-5 h-5" />, name: "App Development" },
];

export function MarketingServices() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl font-bold text-secondary">
          Digital Marketing Services
        </h2>
        <p className="mt-4 text-lg text-secondary-foreground max-w-3xl mx-auto">
          Comprehensive marketing solutions to elevate your brand and enhance
          digital presence.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
        {marketingServices.map((service, index) => (
          <motion.div
            key={service.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
          >
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary-foreground flex items-center justify-center text-primary">
              {service.icon}
            </div>
            <span className="font-medium text-secondary">{service.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
