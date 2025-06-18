"use client";
import { motion } from "framer-motion";
import { fadeIn } from "./TestimonialCard";

export function StatItem({ number, label }: { number: string; label: string }) {
  return (
    <motion.div variants={fadeIn}>
      <motion.p
        className="text-4xl font-bold mb-2"
        initial={{ scale: 0.8 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        {number}
      </motion.p>
      <p className="text-sm uppercase tracking-wider">{label}</p>
    </motion.div>
  );
}
