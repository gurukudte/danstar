"use client"
import { motion } from "framer-motion";
export const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function TestimonialCard({
  quote,
  author,
  role,
}: {
  quote: string;
  author: string;
  role: string;
}) {
  return (
    <motion.div variants={fadeIn}>
      <div className="bg-background p-6 rounded-lg border border-border h-full">
        <motion.div
          className="mb-4 text-primary text-4xl font-serif"
          initial={{ opacity: 0.5 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          "
        </motion.div>
        <p className="text-muted-foreground mb-6 italic">{quote}</p>
        <div>
          <p className="font-semibold">{author}</p>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>
    </motion.div>
  );
}
