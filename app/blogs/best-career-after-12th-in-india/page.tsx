"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BookText,
  Briefcase,
  GraduationCap,
  LayoutDashboard,
  Lightbulb,
  LineChart,
  Share2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function CareerGuide() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative h-96 md:h-[500px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-700/90 to-red-600/80 z-10" />
        <div
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1470&auto=format&fit=crop')] bg-cover bg-center"
          style={{ backgroundPosition: "center 30%" }}
        />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 max-w-3xl">
            Discover the Best Career After 12th in India with Danstar
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
            Your Ultimate Guide to Success in Choosing the Right Path
          </p>
          <Button
            size="lg"
            className="bg-white text-red-700 hover:bg-gray-100 font-semibold text-lg"
          >
            Explore Career Options <ArrowRight className="ml-2" />
          </Button>
        </motion.div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="flex flex-col md:flex-row gap-8 items-center"
        >
          <div className="md:w-1/2">
            <motion.div
              animate={{
                x: [0, 5, -5, 5, -5, 0],
                transition: { duration: 6, repeat: Infinity },
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1470&auto=format&fit=crop"
                alt="Career paths"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6 text-red-700">
              Choosing Your Path After 12th
            </h2>
            <p className="text-lg mb-4">
              Selecting the{" "}
              <span className="font-semibold">
                best career after 12th in India
              </span>{" "}
              is a life-changing decision. With so many options available, it
              can feel overwhelming, but Danstar is here to guide you every step
              of the way.
            </p>
            <p className="text-lg">
              Explore the{" "}
              <span className="font-semibold">
                best career in India after 12th
              </span>{" "}
              and unlock your true potential with smart choices and expert
              advice tailored to your strengths and interests.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Why Career Choice Matters */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-red-700">
              Why Your Career Choice After 12th Matters
            </h2>
            <p className="text-lg max-w-3xl mx-auto">
              Your career sets the tone for your future. The right path ensures
              professional growth, financial security, and personal happiness.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeIn}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-red-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <LineChart className="text-red-700" size={24} />
                  </div>
                  <CardTitle>Professional Growth</CardTitle>
                </CardHeader>
                <CardContent>
                  Choosing the right career leads to continuous learning, skill
                  development, and advancement opportunities in your field.
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-red-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Briefcase className="text-red-700" size={24} />
                  </div>
                  <CardTitle>Financial Security</CardTitle>
                </CardHeader>
                <CardContent>
                  The best career options after 12th in India provide stable
                  income and benefits that support your lifestyle and future
                  goals.
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-red-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Lightbulb className="text-red-700" size={24} />
                  </div>
                  <CardTitle>Personal Fulfillment</CardTitle>
                </CardHeader>
                <CardContent>
                  When your career aligns with your passions and values, you
                  experience greater satisfaction and happiness in your daily
                  life.
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stream-wise Career Options */}
      <section className="py-16 max-w-6xl mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 text-red-700">
            Stream-Wise Best Career Options After 12th
          </h2>
          <p className="text-lg max-w-3xl mx-auto">
            India offers diverse career paths based on your 12th stream. Here
            are the top choices:
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Science Stream */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <Card className="h-full border-red-200 hover:border-red-500 transition-colors">
              <CardHeader>
                <div className="bg-red-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <GraduationCap className="text-red-700" size={24} />
                </div>
                <CardTitle className="text-red-700">Science Stream</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="bg-red-100 text-red-700 rounded-full p-1 mr-2">
                      <Share2 size={14} />
                    </span>
                    Engineering (Various Specializations)
                  </li>
                  <li className="flex items-start">
                    <span className="bg-red-100 text-red-700 rounded-full p-1 mr-2">
                      <Share2 size={14} />
                    </span>
                    Medicine (MBBS, BDS, Nursing)
                  </li>
                  <li className="flex items-start">
                    <span className="bg-red-100 text-red-700 rounded-full p-1 mr-2">
                      <Share2 size={14} />
                    </span>
                    Information Technology
                  </li>
                  <li className="flex items-start">
                    <span className="bg-red-100 text-red-700 rounded-full p-1 mr-2">
                      <Share2 size={14} />
                    </span>
                    Biotechnology
                  </li>
                  <li className="flex items-start">
                    <span className="bg-red-100 text-red-700 rounded-full p-1 mr-2">
                      <Share2 size={14} />
                    </span>
                    Data Science & AI
                  </li>
                </ul>
                <p className="mt-4 text-sm text-gray-600">
                  Engineering remains one of the top best career after 12th in
                  India due to the IT and infrastructure boom.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Commerce Stream */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ delay: 0.2 }}
          >
            <Card className="h-full border-blue-200 hover:border-blue-500 transition-colors">
              <CardHeader>
                <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <LayoutDashboard className="text-blue-700" size={24} />
                </div>
                <CardTitle className="text-blue-700">Commerce Stream</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-700 rounded-full p-1 mr-2">
                      <Share2 size={14} />
                    </span>
                    Chartered Accountancy (CA)
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-700 rounded-full p-1 mr-2">
                      <Share2 size={14} />
                    </span>
                    Company Secretary (CS)
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-700 rounded-full p-1 mr-2">
                      <Share2 size={14} />
                    </span>
                    Banking & Finance
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-700 rounded-full p-1 mr-2">
                      <Share2 size={14} />
                    </span>
                    Business Management
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-700 rounded-full p-1 mr-2">
                      <Share2 size={14} />
                    </span>
                    Economics & Statistics
                  </li>
                </ul>
                <p className="mt-4 text-sm text-gray-600">
                  Commerce opens doors to some of the highest-paying professions
                  in India with excellent growth potential.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Arts Stream */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ delay: 0.4 }}
          >
            <Card className="h-full border-purple-200 hover:border-purple-500 transition-colors">
              <CardHeader>
                <div className="bg-purple-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <BookText className="text-purple-700" size={24} />
                </div>
                <CardTitle className="text-purple-700">Arts Stream</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="bg-purple-100 text-purple-700 rounded-full p-1 mr-2">
                      <Share2 size={14} />
                    </span>
                    Law (LLB)
                  </li>
                  <li className="flex items-start">
                    <span className="bg-purple-100 text-purple-700 rounded-full p-1 mr-2">
                      <Share2 size={14} />
                    </span>
                    Journalism & Mass Communication
                  </li>
                  <li className="flex items-start">
                    <span className="bg-purple-100 text-purple-700 rounded-full p-1 mr-2">
                      <Share2 size={14} />
                    </span>
                    Psychology & Sociology
                  </li>
                  <li className="flex items-start">
                    <span className="bg-purple-100 text-purple-700 rounded-full p-1 mr-2">
                      <Share2 size={14} />
                    </span>
                    Design (Fashion, Interior, Graphic)
                  </li>
                  <li className="flex items-start">
                    <span className="bg-purple-100 text-purple-700 rounded-full p-1 mr-2">
                      <Share2 size={14} />
                    </span>
                    Civil Services (UPSC)
                  </li>
                </ul>
                <p className="mt-4 text-sm text-gray-600">
                  With the growth of media and digital industries, arts have
                  become some of the most exciting best career options after
                  12th in India.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Emerging Career Paths */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-red-700">
              Emerging Career Paths to Watch
            </h2>
            <p className="text-lg max-w-3xl mx-auto">
              The job market is evolving rapidly with new opportunities emerging
              across sectors.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                title: "Digital Marketing",
                desc: "SEO, Social Media, Content Marketing roles are in high demand",
                color: "bg-orange-100 text-orange-700",
              },
              {
                title: "Data Science",
                desc: "Big data analytics and AI/ML specialists needed across industries",
                color: "bg-blue-100 text-blue-700",
              },
              {
                title: "Environmental Science",
                desc: "Sustainability experts for green energy and conservation",
                color: "bg-green-100 text-green-700",
              },
              {
                title: "Aviation & Hospitality",
                desc: "Growing travel industry creating numerous opportunities",
                color: "bg-purple-100 text-purple-700",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                <div
                  className={`${item.color} p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4`}
                >
                  <Lightbulb size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How Danstar Helps */}
      <section className="py-16 max-w-6xl mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="flex flex-col md:flex-row gap-8 items-center"
        >
          <div className="md:w-1/2 order-2 md:order-1">
            <h2 className="text-3xl font-bold mb-6 text-red-700">
              How Danstar Helps You Choose the Best Career in India After 12th
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="bg-red-100 text-red-700 rounded-full p-1 mr-3 mt-1">
                  <Share2 size={14} />
                </span>
                <span>
                  <strong>Personalized Career Assessment:</strong> Our expert
                  counselors help you identify your strengths and interests
                  using psychometric tests.
                </span>
              </li>
              <li className="flex items-start">
                <span className="bg-red-100 text-red-700 rounded-full p-1 mr-3 mt-1">
                  <Share2 size={14} />
                </span>
                <span>
                  <strong>Comprehensive Guidance:</strong> We provide detailed
                  information about all available best career options after 12th
                  in India.
                </span>
              </li>
              <li className="flex items-start">
                <span className="bg-red-100 text-red-700 rounded-full p-1 mr-3 mt-1">
                  <Share2 size={14} />
                </span>
                <span>
                  <strong>Education Planning:</strong> We help map out the
                  educational path needed for your chosen career.
                </span>
              </li>
              <li className="flex items-start">
                <span className="bg-red-100 text-red-700 rounded-full p-1 mr-3 mt-1">
                  <Share2 size={14} />
                </span>
                <span>
                  <strong>Ongoing Support:</strong> Our relationship doesn't end
                  with counseling - we're with you throughout your career
                  journey.
                </span>
              </li>
            </ul>
          </div>
          <div className="md:w-1/2 order-1 md:order-2">
            <img
              src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1470&auto=format&fit=crop"
              alt="Career counseling"
              className="rounded-lg shadow-xl"
            />
            <div className="mt-6 bg-gray-100 p-4 rounded-lg text-center">
              <p className="font-semibold mb-2">
                Scan to connect with our career counselor
              </p>
              <div className="bg-white p-2 inline-block rounded">
                <div className="w-32 h-32 bg-gray-300 flex items-center justify-center">
                  <span className="text-xs">QR Code Placeholder</span>
                </div>
              </div>
              <p className="mt-2 text-sm">OR WhatsApp us at +91 9740568622</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Steps to Choose Right Career */}
      <section className="py-16 bg-red-700 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">
              Steps to Choose the Right Career After 12th
            </h2>
            <p className="text-lg max-w-3xl mx-auto">
              Follow this proven process to make an informed decision about your
              future.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-6"
          >
            {[
              {
                step: "1",
                title: "Self-Assessment",
                desc: "Identify your interests, skills, and personality traits",
              },
              {
                step: "2",
                title: "Research Options",
                desc: "Explore all best career in India after 12th possibilities",
              },
              {
                step: "3",
                title: "Expert Counseling",
                desc: "Get professional guidance from Danstar's career experts",
              },
              {
                step: "4",
                title: "Decision Making",
                desc: "Choose the path that aligns with your goals and abilities",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-white/10 p-6 rounded-lg backdrop-blur-sm border border-white/20"
              >
                <div className="text-2xl font-bold mb-2">{item.step}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold mb-6">
              Ready to Discover Your Ideal Career Path?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Take the first step towards your dream career with Danstar's
              expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-700 font-semibold text-lg"
              >
                Take Our Free Career Test
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="font-semibold text-lg border-white text-white hover:bg-white/10"
              >
                Book Counseling Session
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="bg-gray-50 p-8 rounded-xl text-center"
        >
          <h3 className="text-2xl font-bold mb-2">
            Stay Updated on Career Opportunities
          </h3>
          <p className="text-gray-600 mb-6">
            Subscribe to our newsletter for the latest on best career options
            after 12th in India
          </p>
          <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <Input placeholder="Your email address" className="py-6 px-4" />
            <Button className="bg-red-700 hover:bg-red-800 py-6">
              Subscribe
            </Button>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
