"use client"
import { motion } from "framer-motion";
import { fadeIn } from "./TestimonialCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function ServiceCard({
  icon,
  title,
  description,
  cta,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  cta: string;
}) {
  return (
    <motion.div variants={fadeIn}>
      <Card className="h-full hover:shadow-lg transition-shadow group relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-primary/5 z-0"
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
        />
        <CardHeader>
          <motion.div
            className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
            whileHover={{ rotate: 15, scale: 1.1 }}
          >
            {icon}
          </motion.div>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">{description}</p>
          <Button
            variant="link"
            className="px-0 text-primary hover:text-primary/80"
          >
            {cta} →
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}
