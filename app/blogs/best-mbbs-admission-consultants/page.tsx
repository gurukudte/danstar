"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  ClipboardList,
  Globe,
  GraduationCap,
  Mail,
  Phone,
  Stethoscope,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import TestimonialCarousel from "./TestimonialCarousel";


const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const services = [
  {
    icon: <ClipboardList className="w-8 h-8 text-primary" />,
    title: "NEET Guidance",
    description: "Expert advice on NEET preparation and cut-off analysis",
  },
  {
    icon: <GraduationCap className="w-8 h-8 text-primary" />,
    title: "College Selection",
    description: "Personalized recommendations based on your score and budget",
  },
  {
    icon: <Globe className="w-8 h-8 text-primary" />,
    title: "Abroad Admissions",
    description: "Assistance for MBBS in Russia, Ukraine, Georgia, etc.",
  },
  {
    icon: <Stethoscope className="w-8 h-8 text-primary" />,
    title: "Career Counseling",
    description: "Guidance on medical specializations and future pathways",
  },
];

const countries = [
  { name: "Russia", image: "/russia-flag.jpg" },
  { name: "Ukraine", image: "/ukraine-flag.jpg" },
  { name: "Georgia", image: "/georgia-flag.jpg" },
  { name: "Philippines", image: "/philippines-flag.jpg" },
  { name: "Kazakhstan", image: "/kazakhstan-flag.jpg" },
  { name: "Bangladesh", image: "/bangladesh-flag.jpg" },
];

const testimonials = [
  {
    quote:
      "I was confused about which medical college to choose after NEET. Danstar helped me shortlist the best ones under my budget and secure admission smoothly.",
    author: "Priya S., Karnataka",
  },
  {
    quote:
      "I never thought studying MBBS in Georgia would be so easy. Thanks to Danstar for helping me with everything from admission to visa!",
    author: "Arjun M., Kerala",
  },
];

export default function MBBSAdmissionConsultants() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Find the Best MBBS Admission Consultants in India
            </h1>
            <p className="text-xl mb-8">
              Your Gateway to a Successful Medical Career in India and Abroad
            </p>
            <Button className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-6 text-lg font-semibold">
              Get Free Consultation <ArrowRight className="ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-center mb-12">
              Why You Need MBBS Admission Consultants in India
            </h2>
            <div className="prose prose-lg text-gray-700">
              <p>
                India has long been a hub for aspiring doctors. Every year,
                lakhs of students dream of becoming medical professionals, and
                the journey begins with securing a seat in a reputable MBBS
                college. However, navigating through the admission process can
                be confusing and overwhelming. That's where{" "}
                <strong>MBBS admission consultants in India</strong> come into
                the picture.
              </p>
              <p>
                The admission process for MBBS is competitive, multi-layered,
                and time-sensitive. From qualifying entrance exams like NEET to
                selecting the right college, every decision matters. This is
                where <strong>MBBS admission consultants in India</strong> offer
                value:
              </p>
              <ul className="space-y-3 mt-6">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Up-to-date information on NEET and other entrance exams
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Guidance on filling applications correctly and timely
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Personalized college selection based on budget and merit
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Document verification and admission support
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">
              Our Comprehensive MBBS Admission Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              What the <strong>best MBBS admission consultants in India</strong>{" "}
              offer
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-center mb-4">
                      {service.icon}
                    </div>
                    <CardTitle className="text-center">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p>{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Qualities Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-center mb-12">
              Qualities of the Best MBBS Admission Consultants in India
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <Check className="text-green-500 mr-2" /> Transparency
                </h3>
                <p className="text-gray-700">
                  The <strong>best MBBS admission consultants in India</strong>{" "}
                  maintain complete transparency with no hidden costs or
                  misleading promises about admissions.
                </p>
              </motion.div>

              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <Check className="text-green-500 mr-2" /> Experience
                </h3>
                <p className="text-gray-700">
                  Years of successfully placing students in top MBBS colleges
                  across India and abroad sets the best consultants apart.
                </p>
              </motion.div>

              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <Check className="text-green-500 mr-2" /> Network
                </h3>
                <p className="text-gray-700">
                  Strong ties with reputable medical colleges and universities
                  ensure better admission opportunities for students.
                </p>
              </motion.div>

              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <Check className="text-green-500 mr-2" /> Reviews
                </h3>
                <p className="text-gray-700">
                  Positive testimonials from students and parents demonstrate a
                  consultant's track record and reliability.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Study Abroad Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">
              MBBS Abroad with India's Top Consultants
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We facilitate admissions in top medical universities worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mb-12">
            {countries.map((country, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-200">
                  <Image
                    src={country.image}
                    alt={country.name}
                    width={96}
                    height={96}
                    className="object-cover w-full h-full"
                  />
                </div>
                <p className="mt-2 font-medium">{country.name}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto bg-blue-50 p-8 rounded-lg"
          >
            <h3 className="text-xl font-semibold mb-4">
              How We Help with International MBBS Admissions
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                University shortlisting based on your NEET score and budget
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                Complete documentation and application support
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                Visa assistance and interview preparation
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                Hostel and travel arrangements
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                Post-arrival services and local support
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
              <Image
                src="/mbbs-consulting-team.jpg"
                alt="MBBS Admission Consultants Team"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </motion.div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl font-bold mb-6">
                Why Choose Danstar for MBBS Admissions?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Check className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <p>Personalized one-on-one guidance for each student</p>
                </div>
                <div className="flex items-start">
                  <Check className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <p>Free initial consultation to understand your needs</p>
                </div>
                <div className="flex items-start">
                  <Check className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <p>Transparent fee structure with no hidden charges</p>
                </div>
                <div className="flex items-start">
                  <Check className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <p>Multilingual support for students across India</p>
                </div>
                <div className="flex items-start">
                  <Check className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <p>Admissions in both Indian & international universities</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Student Success Stories</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              What our students say about our MBBS admission services
            </p>
          </motion.div>

          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6">
              Ready to Begin Your MBBS Journey?
            </h2>
            <p className="text-xl mb-8">
              Connect with India's top MBBS admission consultants today
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-white text-blue-800 hover:bg-gray-100 px-8 py-6 text-lg font-semibold">
                Book Free Consultation
              </Button>
              <Button
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-blue-800 px-8 py-6 text-lg font-semibold"
              >
                Call Now: +91 9740568622
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            <div className="md:flex">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ duration: 0.8 }}
                className="md:w-1/2 bg-blue-800 text-white p-8"
              >
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Phone className="text-white mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Phone/WhatsApp</p>
                      <p>+91 9740568622</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="text-white mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p>pradeep@danstar.in</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Globe className="text-white mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Website</p>
                      <p>www.danstar.in</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="md:w-1/2 p-8"
              >
                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Your Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700"
                  >
                    Send Message
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
