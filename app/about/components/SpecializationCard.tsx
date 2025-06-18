"use client";
import { motion } from "framer-motion";
import { fadeIn } from "./TestimonialCard";

export function SpecializationCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description?: string;
}) {
  return (
    <motion.div
      variants={fadeIn}
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="bg-background p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-start gap-4">
          <motion.div
            className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-1"
            whileHover={{ rotate: 15 }}
          >
            {icon}
          </motion.div>
          <div>
            <h3 className="font-semibold text-lg mb-2">{title}</h3>
            {description && (
              <p className="text-muted-foreground text-sm">{description}</p>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
