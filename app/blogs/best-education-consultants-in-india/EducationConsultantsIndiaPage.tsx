"use client"
import {
  ArrowRight,
  BookOpen,
  Check,
  Globe,
  GraduationCap,
  Mail,
  Phone,
  School,
} from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const services = [
  {
    icon: <GraduationCap className="w-8 h-8 text-primary" />,
    title: "Career Counseling",
    description: "Psychometric tests and personalized career mapping",
  },
  {
    icon: <School className="w-8 h-8 text-primary" />,
    title: "University Selection",
    description: "India & abroad options based on your profile",
  },
  {
    icon: <BookOpen className="w-8 h-8 text-primary" />,
    title: "Application Support",
    description: "SOPs, LORs, and resume crafting",
  },
  {
    icon: <Globe className="w-8 h-8 text-primary" />,
    title: "Study Abroad Guidance",
    description: "Visa, scholarships, and pre-departure support",
  },
];

const countries = [
  { name: "USA", image: "/usa-flag.jpg" },
  { name: "UK", image: "/uk-flag.jpg" },
  { name: "Canada", image: "/canada-flag.jpg" },
  { name: "Australia", image: "/australia-flag.jpg" },
  { name: "Germany", image: "/germany-flag.jpg" },
  { name: "France", image: "/france-flag.jpg" },
];

export default function EducationConsultantsIndiaPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-800 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Best Education Consultants in India: Your Trusted Pathway to
              Success
            </h1>
            <p className="text-xl mb-8">
              Get expert guidance for admissions in India's top colleges and
              universities worldwide
            </p>
            <Button className="bg-white text-blue-800 hover:bg-gray-100 px-8 py-6 text-lg font-semibold">
              Start Your Journey <ArrowRight className="ml-2" />
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
              Why Choose Education Consultants in India?
            </h2>
            <div className="prose prose-lg text-gray-700">
              <p>
                In a rapidly globalizing world, choosing the right academic path
                is more critical—and more confusing—than ever. Students and
                parents alike often feel overwhelmed by the myriad of choices in
                courses, colleges, entrance exams, scholarships, and study
                abroad destinations. This is where{" "}
                <strong>education consultants in India</strong> come in as
                game-changers.
              </p>
              <p>
                With thousands of students securing admissions every year in
                India and abroad,{" "}
                <strong>the best education consultants in India</strong> are
                playing a vital role in shaping successful careers.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Do */}
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
              Who Are Education Consultants?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Professionals who help students make informed academic and career
              decisions
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

      {/* Benefits Section */}
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
              Why You Need the Best Education Consultants in India
            </h2>

            <div className="space-y-8">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <Check className="text-green-500 mr-2" /> Expert Career
                  Guidance
                </h3>
                <p className="text-gray-700">
                  With changing job markets and emerging career options,
                  choosing the right course can be tricky. The{" "}
                  <strong>best education consultants in India</strong> offer
                  psychometric tests, career assessments, and one-on-one
                  counseling to align your choices with your personality and
                  strengths.
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
                  <Check className="text-green-500 mr-2" /> College and Course
                  Selection
                </h3>
                <p className="text-gray-700">
                  India has over 45,000 colleges and hundreds of courses.
                  Picking the right one without expert help is like finding a
                  needle in a haystack. That's where the{" "}
                  <strong>education consultants in India</strong> come to the
                  rescue—curating options that fit your aspirations, budget, and
                  eligibility.
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
                  <Check className="text-green-500 mr-2" /> Study Abroad
                  Services
                </h3>
                <p className="text-gray-700">
                  Planning to study in the USA, UK, Canada, Australia, or
                  Europe? The{" "}
                  <strong>best education consultants in India</strong> will help
                  you navigate admission timelines, SOPs, visa paperwork, and
                  scholarship opportunities, ensuring a smooth transition to
                  your dream university.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Study Abroad Countries */}
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
              We Support Admissions Worldwide
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Partner with top education consultants in India for global
              opportunities
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
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
                src="/consulting-team.jpg"
                alt="Education Consultants Team"
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
                Why Danstar Is Among the Best Education Consultants in India
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Check className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <p>UG & PG admissions in India and abroad</p>
                </div>
                <div className="flex items-start">
                  <Check className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <p>MBBS, Nursing, Allied Health & Pharmacy counseling</p>
                </div>
                <div className="flex items-start">
                  <Check className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <p>Study abroad options in 20+ countries</p>
                </div>
                <div className="flex items-start">
                  <Check className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <p>Psychometric-based career counselling</p>
                </div>
                <div className="flex items-start">
                  <Check className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <p>Scholarship and loan application support</p>
                </div>
              </div>
              <div className="mt-8 bg-white p-6 rounded-lg shadow-sm">
                <blockquote className="italic text-gray-700">
                  "Danstar helped me get admission into a top Nursing college in
                  Bangalore and also guided my sister for MS in Canada. They are
                  the most genuine education consultants in India!"
                </blockquote>
                <p className="font-semibold mt-4">- Ananya Raj, Ranchi</p>
              </div>
            </motion.div>
          </div>
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
              Ready to Start Your Educational Journey?
            </h2>
            <p className="text-xl mb-8">
              Connect with India's best education consultants today
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

      {/* Final Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto prose prose-lg text-gray-700"
          >
            <h2 className="text-3xl font-bold text-center mb-12">
              Choosing the Right Education Consultant in India
            </h2>
            <p>
              Before choosing from the many{" "}
              <strong>education consultants in India</strong>, ensure they:
            </p>
            <ul className="space-y-3 mt-6">
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                Are experienced and certified
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                Offer transparent pricing and services
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                Have a good track record and student testimonials
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                Provide both online and offline support
              </li>
            </ul>
            <p className="mt-8 font-semibold">
              India has no shortage of educational dreams. But turning those
              dreams into reality requires the right mentorship. That's where
              the <strong>best education consultants in India</strong> step
              in—with knowledge, tools, and experience that can help you unlock
              a brighter, more successful future.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ duration: 0.8 }}
                className="md:w-1/2"
              >
                <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Phone className="text-blue-600 mr-3 mt-1" />
                    <div>
                      <p className="font-semibold">Phone</p>
                      <p>+91 9740568622</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="text-blue-600 mr-3 mt-1" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p>pradeep@danstar.in</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Globe className="text-blue-600 mr-3 mt-1" />
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
                className="md:w-1/2"
              >
                <h3 className="text-2xl font-bold mb-4">Send Us a Message</h3>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Your Message"
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                  </div>
                  <Button className="bg-blue-600 hover:bg-blue-700 px-6 py-3">
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
