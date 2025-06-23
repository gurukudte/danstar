"use client"
import {
  ArrowRight,
  BookOpen,
  GraduationCap,
  Lightbulb,
  ShieldCheck,
  Users,
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
    title: "University Selection",
    description:
      "Expert guidance to choose the perfect university based on your profile",
  },
  {
    icon: <BookOpen className="w-8 h-8 text-primary" />,
    title: "Course Counseling",
    description:
      "Personalized advice to select the right course for your career goals",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
    title: "Application Support",
    description:
      "End-to-end assistance with applications, SOPs, and recommendations",
  },
  {
    icon: <Lightbulb className="w-8 h-8 text-primary" />,
    title: "Career Planning",
    description:
      "Strategic career mapping based on your skills and market trends",
  },
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: "Interview Prep",
    description: "Comprehensive training for admission and visa interviews",
  },
];

export default function AdmissionConsultantsPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Unlock Your Future with the Best Admission Consultants in
              Bangalore
            </h1>
            <p className="text-xl mb-8">
              Expert Guidance for Higher Education Success in India and Abroad
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
              Why Choose Professional Admission Consultants in Bangalore?
            </h2>
            <div className="prose prose-lg text-gray-700">
              <p>
                Choosing the right educational path is one of the most important
                decisions in a student's life. Whether you are a school-leaver
                aspiring to join a prestigious university or a graduate seeking
                advanced studies, professional guidance can make a significant
                difference. This is where the{" "}
                <strong>best admission consultants in Bangalore</strong> come
                into play, helping you navigate the complex world of admissions,
                courses, and career planning.
              </p>
              <p>
                Bangalore, often called the "Silicon Valley of India," is not
                only a tech hub but also a premier educational center. The city
                boasts numerous universities, colleges, and training institutes
                offering diverse programs across streams like engineering,
                medicine, management, arts, and sciences. With so many options,
                students and parents often face confusion and uncertainty.
              </p>
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
              What Do Admission Consultants Do?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The <strong>best education counsellor in Bangalore</strong>{" "}
              provides comprehensive support throughout your admission journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* Why Bangalore Section */}
      <section className="py-16 bg-gray-50">
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
                src="/bangalore-education.jpg"
                alt="Education in Bangalore"
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
                Why Bangalore Is the Best Place for Education Counselling
              </h2>
              <div className="prose prose-lg text-gray-700">
                <p>
                  Bangalore's diverse student population, proximity to premier
                  educational institutes, and access to multinational companies
                  create a unique environment where education and career
                  counselling thrive.
                </p>
                <ul className="space-y-3 mt-6">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Access to expert consultants with local and global exposure
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Multilingual counselling services to cater to India's
                    diversity
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Availability of specialized services for niche fields
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Strong alumni networks that help in internships and job
                    placements
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How to Choose Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-center mb-12">
              How to Identify the Best Educational Consultants in Bangalore
            </h2>
            <div className="prose prose-lg text-gray-700">
              <p>
                With numerous options available, choosing the{" "}
                <strong>best educational consultants in Bangalore</strong>{" "}
                requires careful consideration. Here are some key factors to
                help you identify trustworthy and effective consultants:
              </p>

              <h3 className="text-xl font-semibold mt-8">
                1. Experience and Track Record
              </h3>
              <p>
                Look for consultants with a proven history of successful
                placements in reputed colleges and universities. Their
                experience across various courses and admission systems is
                invaluable.
              </p>

              <h3 className="text-xl font-semibold mt-8">
                2. Certified and Knowledgeable Team
              </h3>
              <p>
                The best consultants have trained counsellors who stay updated
                with changing admission policies, exam patterns, and visa
                regulations.
              </p>

              <h3 className="text-xl font-semibold mt-8">
                3. Transparent Process and Fees
              </h3>
              <p>
                Reliable consultants maintain clear communication regarding
                services, costs, and timelines without hidden charges.
              </p>

              <h3 className="text-xl font-semibold mt-8">
                4. Student Testimonials and Reviews
              </h3>
              <p>
                Authentic feedback from past students provides insight into the
                consultant's effectiveness and professionalism.
              </p>

              <h3 className="text-xl font-semibold mt-8">
                5. Personalized Approach
              </h3>
              <p>
                Avoid cookie-cutter solutions. The{" "}
                <strong>top education consultants in Bangalore</strong> tailor
                their services to each student's unique profile.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6">
              Ready to Take the Next Step in Your Education Journey?
            </h2>
            <p className="text-xl mb-8">
              Connect with our expert counsellors today and get personalized
              guidance for your higher education goals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-6 text-lg font-semibold">
                Book Free Consultation
              </Button>
              <Button
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-blue-900 px-8 py-6 text-lg font-semibold"
              >
                Call Now: +91 9740568622
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Conclusion */}
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
              Invest in Expert Guidance to Secure Your Future
            </h2>
            <p>
              Choosing the{" "}
              <strong>best admission consultants in Bangalore</strong> and
              partnering with the right{" "}
              <strong>education counsellor in Bangalore</strong> can be the
              difference between uncertainty and a clear, confident path to
              success. Whether your goal is to study in India or abroad, aim for
              undergraduate or postgraduate courses, or explore emerging fields,
              professional guidance is invaluable.
            </p>
            <p>
              Bangalore's educational consultancy ecosystem offers expert
              services to support you in every step—from choosing the right
              course to securing admission and beyond.
            </p>
            <p className="font-semibold">
              Ready to take charge of your educational journey? Connect with the{" "}
              <strong>best educational consultants in Bangalore</strong> today
              and step confidently into your future!
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
