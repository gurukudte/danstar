"use client";
import { motion } from "framer-motion";
import {
  GraduationCap,
  BookOpen,
  Users,
  BadgeCheck,
  ShieldCheck,
  Handshake,
} from "lucide-react";

const AboutUs = () => {
  const features = [
    {
      icon: <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />,
      title: "Healthcare Admission Specialists",
      description:
        "Experts in nursing, medical, and paramedical course admissions",
    },
    {
      icon: <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />,
      title: "Established in 2015",
      description: "9+ years of trusted educational consultancy",
    },
    {
      icon: <Users className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />,
      title: "1000+ Successful Admissions",
      description: "Students placed in top healthcare colleges",
    },
    {
      icon: <BadgeCheck className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />,
      title: "50+ Partner Institutions",
      description: "Strong network with leading medical colleges",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />,
      title: "Ethical Counseling",
      description: "No false promises - only genuine guidance",
    },
    {
      icon: <Handshake className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />,
      title: "End-to-End Support",
      description: "From application to enrollment",
    },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section
      id="about"
      className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-background"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.h2
            variants={fadeIn}
            className="text-3xl sm:text-4xl font-bold text-secondary mb-4"
          >
            About <span className="text-primary">Danstar</span>
          </motion.h2>
          <motion.div
            variants={fadeIn}
            className="w-16 sm:w-20 h-1 bg-primary mx-auto mb-6"
          />
          <motion.p
            variants={fadeIn}
            className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Bangalore's most trusted consultancy for healthcare education
            admissions
          </motion.p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-10 sm:gap-14">
          {/* Left Column - Content (now full width on mobile) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:w-1/2 space-y-6 sm:space-y-8"
          >
            <h3 className="text-2xl sm:text-3xl font-semibold text-secondary">
              Your Pathway to Healthcare Education
            </h3>
            <p className="text-muted-foreground text-base sm:text-lg">
              Founded in 2015, Danstar Education has become Bangalore's leading
              educational consultancy specializing in admissions for Nursing
              (BSc, GNM, ANM), Allied Health Sciences, Pharmacy, Physiotherapy
              (BPT), Ayurveda (BAMS), and Medical (MBBS) programs.
            </p>
            <p className="text-muted-foreground text-base sm:text-lg">
              Our team of experienced counselors understands the complexities of
              healthcare education admissions and provides personalized guidance
              to help students secure seats in top colleges across India.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                { value: "9+", label: "Years Experience" },
                { value: "1000+", label: "Students Guided" },
                { value: "50+", label: "Partner Colleges" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-primary/5 p-4 rounded-lg text-center border border-border"
                >
                  <p className="text-2xl sm:text-3xl font-bold text-primary">
                    {stat.value}
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="flex items-start gap-3 bg-secondary/5 p-4 rounded-lg border border-border hover:border-primary/30 transition-all"
                >
                  <div className="bg-primary/10 p-2 rounded-full">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary text-base sm:text-lg">
                      {feature.title}
                    </h4>
                    <p className="text-muted-foreground text-sm sm:text-base">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
