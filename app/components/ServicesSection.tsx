import { motion } from "framer-motion";
import * as React from "react";
import { services } from "./LeadForm";

export function ServicesSection() {
  return (
    <section
      id="services"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl font-bold text-secondary">Our Services</h2>
        <p className="mt-4 text-lg text-secondary-foreground max-w-3xl mx-auto">
          We offer a comprehensive range of services to support healthcare
          education and career development.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-primary"
          >
            <div className="w-14 h-14 mb-6 rounded-full bg-primary-foreground flex items-center justify-center text-primary">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold text-secondary mb-3">
              {service.title}
            </h3>
            <p className="text-secondary-foreground">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
