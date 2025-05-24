"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { TESTIMONIALS } from "@/lib/constants";

export const Testimonials = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <section
      ref={ref}
      className="relative w-full  flex justify-center py-10 overflow-hidden "
    >
      <div className="relative z-10 container px-4 md:px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-secondary">
            Trusted by Healthcare Institutions
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-secondary-foreground">
            Join hundreds of organizations who transformed their outcomes with
            Danstar
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          style={{ y }}
        >
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-blue-100">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-secondary">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-secondary">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-secondary-foreground italic relative pl-6 before:absolute before:left-0 before:text-5xl before:leading-none before:top-0 before:text-blue-200 before:font-serif">
                {testimonial.content}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
