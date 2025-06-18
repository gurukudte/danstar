"use client"
import { motion } from "framer-motion";
import { fadeIn, TestimonialCard } from "./TestimonialCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Briefcase, GraduationCap, Lightbulb, Mail, Phone, ShieldCheck, Users } from "lucide-react";
import { StatItem } from "./StatItem";
import { ServiceCard } from "./ServiceCard";
import { FaChartLine, FaGlobe, FaHandsHelping, FaLaptopCode } from "react-icons/fa";
import { SpecializationCard } from "./SpecializationCard";
import { MdHealthAndSafety, MdOutlineScience } from "react-icons/md";
import { ContactMethod } from "./ContactMethod";
import { ContactForm } from "./ContactForm";
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

export default function About() {
  return (
    <div className="bg-background overflow-hidden">
      {/* Hero Section */}
      <motion.section
        className="relative py-20 md:py-28"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.div
          className="absolute inset-0 bg-primary/10 z-0"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            variants={fadeIn}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              Empowering{" "}
              <span className="text-secondary">Healthcare’s Future</span> with
              Innovation & Impact
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              <strong>Danstar OPC Pvt Ltd</strong> is a leading force in
              healthcare education, training, and digital innovation. We
              specialize in admissions, placements, upskilling, marketing, and
              consultancy—serving institutions, professionals, and students with
              solutions that bridge academia and industry.
            </p>
            <motion.div className="flex gap-4 justify-center" variants={fadeIn}>
              <Button asChild className="text-white">
                <Link href="#services">Our Services</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="#contact">
                  <Phone className="w-4 h-4 mr-2" />
                  Contact Us
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* What is Danstar Section */}
      <motion.section
        className="py-16 bg-background"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-12" variants={fadeIn}>
            <h2 className="text-3xl font-bold mb-4">What is Danstar?</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Danstar OPC Pvt Ltd is a dynamic organization at the intersection
              of healthcare, education, and digital strategy. We empower
              colleges, healthcare institutions, and individuals through
              tailored services that include admission support, internship
              placements, professional training, consultancy, and cutting-edge
              digital marketing.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Mission Section */}
      <motion.section
        className="py-16 bg-secondary text-secondary-foreground"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              className="text-3xl font-bold mb-6"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Our Mission
            </motion.h2>
            <motion.p
              className="text-xl"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              At Danstar, our mission is to bridge the gap between healthcare
              education and industry readiness. We deliver future-forward
              solutions—from admissions and upskilling to tech-driven marketing
              and consultancy—ensuring individuals and institutions adapt, grow,
              and lead with confidence.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Stats */}
      <motion.section
        className="py-16 bg-primary/30 text-primary-foreground"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <StatItem number="50+" label="Institutions" />
            <StatItem number="1000+" label="Students" />
            <StatItem number="200+" label="Connections" />
            <StatItem number="9+" label="Years Experience" />
          </div>
        </div>
      </motion.section>

      {/* Services */}
      <motion.section
        id="services"
        className="py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-12" variants={fadeIn}>
            <h2 className="text-3xl font-bold mb-4">
              Our Comprehensive Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              End-to-end solutions designed to meet every need in healthcare
              education
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<GraduationCap className="w-8 h-8" />}
              title="Admission Support"
              description="Specialized recruitment strategies and targeted marketing campaigns."
              cta="Boost enrollments"
            />
            <ServiceCard
              icon={<Briefcase className="w-8 h-8" />}
              title="Internship Placement"
              description="Diverse internships across top healthcare organizations."
              cta="Find internships"
            />
            <ServiceCard
              icon={<FaHandsHelping className="w-8 h-8" />}
              title="Strategic Consultancy"
              description="Data-driven guidance for healthcare institutions."
              cta="Get consultancy"
            />
            <ServiceCard
              icon={<Users className="w-8 h-8" />}
              title="Professional Training"
              description="Upskilling programs covering clinical skills."
              cta="Explore training"
            />
            <ServiceCard
              icon={<Lightbulb className="w-8 h-8" />}
              title="Innovation Workshops"
              description="Hands-on sessions in AI applications."
              cta="Join workshops"
            />
            <ServiceCard
              icon={<FaLaptopCode className="w-8 h-8" />}
              title="Digital Solutions"
              description="Marketing and web services for healthcare."
              cta="Digital transformation"
            />
          </div>
        </div>
      </motion.section>

      {/* Specializations */}
      <motion.section
        className="py-16 bg-muted relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="absolute inset-0 bg-secondary/5 z-0"
          initial={{ scale: 1.2 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2
            className="text-3xl font-bold text-center mb-12"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            Cutting-Edge Specializations
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <SpecializationCard
              icon={<MdHealthAndSafety className="w-6 h-6" />}
              title="Global Education"
              description="Study abroad programs for healthcare"
            />
            <SpecializationCard
              icon={<FaChartLine className="w-6 h-6" />}
              title="Career Advancement"
              description="Personalized counseling for careers"
            />
            <SpecializationCard
              icon={<ShieldCheck className="w-6 h-6" />}
              title="Wellness Programs"
              description="Specialized mental health support"
            />
            <SpecializationCard
              icon={<MdOutlineScience className="w-6 h-6" />}
              title="AI in Healthcare"
              description="Training in AI applications"
            />
          </div>
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section
        className="py-20 bg-background"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-12"
            variants={fadeIn}
          >
            Success Stories
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="Danstar's admission support helped us increase enrollment by 40% in one year."
              author="Dr. Priya Sharma"
              role="Dean, College of Nursing"
            />
            <TestimonialCard
              quote="The internship program gave me experience that led to a full-time job offer."
              author="Rahul Patel"
              role="Nursing Graduate"
            />
            <TestimonialCard
              quote="Their AI workshop transformed how we approach patient data analysis."
              author="Prof. Amit Desai"
              role="Healthcare Educator"
            />
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="py-16 bg-primary/10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="text-3xl font-bold mb-6"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            Ready to Transform Healthcare Education?
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Partner with Danstar to access innovative solutions
          </motion.p>
          <motion.div
            className="flex gap-4 justify-center"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Button asChild className="bg-primary hover:bg-primary text-white">
              <Link href="#contact">
                <Mail className="w-4 h-4 mr-2" />
                Get Started
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="tel:+919633346168">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="py-16 bg-secondary text-secondary-foreground"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeIn}>
                <h2 className="text-3xl font-bold mb-4 text-white">
                  Let's Connect
                </h2>
                <p className="text-lg mb-6 text-white/80">
                  Whether you're an institution or student, our team is ready to
                  assist you.
                </p>
                <div className="space-y-6 text-white">
                  <ContactMethod
                    icon={<Phone className="w-5 h-5" />}
                    title="Call Us"
                    detail="+91 9633346168"
                    link="tel:+919633346168"
                  />
                  <ContactMethod
                    icon={<Mail className="w-5 h-5" />}
                    title="Email Us"
                    detail="info@danstar.in"
                    link="mailto:info@danstar.in"
                  />
                  <ContactMethod
                    icon={<FaGlobe className="w-5 h-5" />}
                    title="Visit Us"
                    detail="www.danstar.in"
                    link="https://www.danstar.in"
                  />
                </div>
              </motion.div>
              <motion.div
                className="bg-background p-8 rounded-lg shadow-lg"
                variants={fadeIn}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="text-2xl font-bold mb-6 text-foreground">
                  Send Us a Message
                </h3>
                <ContactForm />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
