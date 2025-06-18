"use client"
import { motion } from "framer-motion";
import Link from "next/link";

export function ContactMethod({
  icon,
  title,
  detail,
  link,
}: {
  icon: React.ReactNode;
  title: string;
  detail: string;
  link: string;
}) {
  return (
    <motion.div
      whileHover={{ x: 5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-background/20 flex items-center justify-center">
          {icon}
        </div>
        <div>
          <p className="text-sm font-medium">{title}</p>
          <Link href={link} className="font-semibold hover:underline">
            {detail}
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
