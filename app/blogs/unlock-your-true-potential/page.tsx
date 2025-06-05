"use client";

// app/blog/career-counselling-in-bangalore/page.tsx
import {
  MapPin,
  GraduationCap,
  Briefcase,
  BookOpen,
  CheckCircle,
  ArrowRight,
  MessageSquare,
  Phone,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

function CareerCounsellingBlog() {
  const reasons = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      text: "Overcome career confusion",
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      text: "Identify your true passion",
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      text: "Get access to expert career consultants in Bangalore",
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      text: "Receive data-driven psychometric assessments",
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      text: "Personalized career roadmap",
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      text: "Explore local & international opportunities",
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      text: "Save money by avoiding wrong decisions",
    },
    { icon: <CheckCircle className="w-6 h-6" />, text: "Build confidence" },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      text: "Boost academic or professional performance",
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      text: "Stay ahead in a competitive world",
    },
  ];

  const successStories = [
    {
      name: "Arjun, 24",
      quote:
        "Danstar helped me move from engineering confusion to UX design clarity!",
    },
    {
      name: "Sneha, 17",
      quote:
        "I thought NEET was my only path. Now I'm happily studying Psychology!",
    },
  ];

  const areasServed = [
    "Koramangala",
    "Whitefield",
    "Jayanagar",
    "JP Nagar",
    "Electronic City",
    "Yelahanka",
    "Indiranagar",
    "Marathahalli",
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative rounded-xl overflow-hidden mb-16 h-96"
      >
        <Image
          src="/career-counselling-bangalore.jpg"
          alt="Career Counselling in Bangalore"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/80 to-transparent flex items-center p-8 md:p-12">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Unlock Your True Potential: Best Career Counselling in Bangalore
              for Students and Professionals
            </h1>
            <p className="text-xl text-white bg-red-600 inline-block px-4 py-2 rounded-lg">
              Career Confusion? Danstar Has the Answer!
            </p>
          </div>
        </div>
      </motion.section>

      {/* Section 1: Why Career Counselling in Bangalore Matters */}
      <motion.section
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <Image
              src="/bangalore-map.jpg"
              alt="Map of Bangalore"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
            <p className="text-center mt-4 text-lg font-medium italic text-gray-600">
              "In a city of dreams, find your true calling."
            </p>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-red-600 mb-6">
              Why Career Counselling in Bangalore Matters
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Bangalore is a city full of opportunities, but with so many
              options, choosing the right career can be overwhelming. The IT
              capital of India offers countless career paths in technology,
              healthcare, finance, and creative fields, making decision-making
              particularly challenging.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              That's why career counselling in Bangalore is essential. It brings
              clarity, confidence, and the right direction—whether you're a
              student or a professional looking for a change. With the rapid
              changes in the job market and emerging new careers, having expert
              guidance can make all the difference in your professional journey.
            </p>
            <p className="text-lg text-gray-700">
              The best career counselling in Bangalore helps you navigate
              through these options by matching your unique skills, personality,
              and aspirations with the right career path, ensuring long-term
              satisfaction and success.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Section 2: What Is Career Counselling and Who Needs It? */}
      <motion.section
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="mb-16 bg-gray-50 rounded-xl p-8"
      >
        <h2 className="text-3xl font-bold text-red-600 mb-8 text-center">
          What Is Career Counselling and Who Needs It?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-red-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
              <BookOpen className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">
              Students (Class 8-12)
            </h3>
            <p className="text-gray-600">
              Confused about choosing the right stream (Science, Commerce,
              Arts)? Career counselling helps identify your strengths and
              interests early.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-red-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
              <GraduationCap className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Graduates</h3>
            <p className="text-gray-600">
              Uncertain about higher education options or career paths? Get
              guidance on MBA, MS, or other specialized courses that match your
              profile.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-red-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
              <Briefcase className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">
              Working Professionals
            </h3>
            <p className="text-gray-600">
              Feeling stuck in your current job? Career counselling helps with
              career transitions, upskilling, and finding more fulfilling
              opportunities.
            </p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-lg text-gray-700">
            Career counselling is a structured process that helps individuals
            understand their personality, skills, and interests—and align them
            with suitable career paths. Whether you're a student in Class 10 or
            a software engineer planning a switch, expert career guidance in
            Bangalore can make all the difference.
          </p>
        </div>
      </motion.section>

      {/* Section 3: Top 10 Reasons */}
      <motion.section
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-red-600 mb-8 text-center">
          Top 10 Reasons to Choose the Best Career Counselling in Bangalore
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="flex items-start gap-4 bg-white p-4 rounded-lg shadow-sm border border-gray-100"
            >
              <div className="text-red-600 mt-1">{reason.icon}</div>
              <p className="text-lg font-medium text-gray-800">{reason.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Section 4: Meet Danstar */}
      <motion.section
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-16 bg-red-600 rounded-xl p-8 text-white"
      >
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <Image
              src="/danstar-team.jpg"
              alt="Danstar Counsellors"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">
              Meet Danstar – The Best Career Counselling in Bangalore
            </h2>
            <p className="text-lg mb-6">
              Danstar offers one of the most trusted career counselling in
              Bangalore for students. With 10+ years of expertise, certified
              professionals, and multi-language support, we help you choose the
              right stream, course, college, or career based on YOUR unique
              profile.
            </p>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3">Features:</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" /> Free discovery session
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" /> Career Interest & Aptitude
                  tests
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" /> Personalized reports
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" /> Online & Offline
                  counselling
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" /> Study in India & Abroad
                  guidance
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a
                href="https://wa.me/919740568622"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-red-600 px-6 py-3 rounded-lg font-medium flex items-center gap-2 justify-center hover:bg-gray-100 transition"
              >
                <MessageSquare className="w-5 h-5" /> WhatsApp Us
              </a>
              <a
                href="tel:+919740568622"
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 justify-center hover:bg-green-700 transition"
              >
                <Phone className="w-5 h-5" /> Call Now
              </a>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Section 5: Counselling Process */}
      <motion.section
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-red-600 mb-8 text-center">
          What to Expect in a Danstar Counselling Session
        </h2>
        <div className="flex justify-center">
          <div className="max-w-4xl w-full">
            <div className="relative">
              <div className="absolute left-5 top-0 h-full w-0.5 bg-red-200 transform -translate-x-1/2"></div>
              <div className="space-y-8">
                {[
                  "Discovery Call: Understand your needs and expectations",
                  "Career Test: Comprehensive psychometric assessments",
                  "Report: Detailed analysis of your skills and interests",
                  "1-on-1 Discussion: Personalized career exploration",
                  "Career Plan: Actionable roadmap for your future",
                  "Follow-up: Ongoing support and guidance",
                ].map((step, index) => (
                  <div key={index} className="relative pl-16">
                    <div className="absolute left-5 top-0 h-10 w-10 rounded-full bg-red-600 flex items-center justify-center text-white font-bold transform -translate-x-1/2">
                      {index + 1}
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                      <p className="text-lg font-medium">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <p className="text-center mt-8 text-lg text-gray-700 max-w-3xl mx-auto">
          From the moment you connect with Danstar, we make career counselling a
          fun, easy, and transformative experience. We blend technology,
          psychology, and years of counselling expertise to help you find your
          perfect path.
        </p>
      </motion.section>

      {/* Section 6: Success Stories */}
      <motion.section
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-16 bg-gray-50 rounded-xl p-8"
      >
        <h2 className="text-3xl font-bold text-red-600 mb-8 text-center">
          Student Success Stories
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {successStories.map((story, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-600 relative"
            >
              <div className="absolute -top-5 -left-5 bg-white p-2 rounded-full shadow-md">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-red-600" />
                </div>
              </div>
              <p className="text-lg italic text-gray-700 mb-4">
                "{story.quote}"
              </p>
              <p className="font-medium text-red-600">— {story.name}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Section 7: Areas Served */}
      <motion.section
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-red-600 mb-8 text-center">
          Areas We Serve in Bangalore
        </h2>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <Image
              src="/bangalore-areas.jpg"
              alt="Bangalore Areas"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <p className="text-lg text-gray-700 mb-6">
              Whether you're in Whitefield or Yelahanka, Danstar offers career
              guidance in Bangalore across all neighborhoods—both in person and
              online.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {areasServed.map((area, index) => (
                <div key={index} className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-red-600" />
                  <span className="text-gray-800">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Section 8: CTA */}
      <motion.section
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-16 bg-gradient-to-r from-red-600 to-red-700 rounded-xl p-8 text-center text-white"
      >
        <h2 className="text-3xl font-bold mb-4">
          Try a Free Career Quiz Today!
        </h2>
        <p className="text-xl mb-8">🎯 Discover Your Top 3 Career Matches!</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://danstar.in"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-red-600 px-6 py-3 rounded-lg font-medium flex items-center gap-2 justify-center hover:bg-gray-100 transition"
          >
            Take the FREE Career Interest Test{" "}
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="https://wa.me/919740568622"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 justify-center hover:bg-green-700 transition"
          >
            <MessageSquare className="w-5 h-5" /> WhatsApp Us
          </a>
        </div>
      </motion.section>

      {/* Section 9: Final Word */}
      <motion.section
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <div className="bg-gray-100 p-8 rounded-xl mb-8">
          <p className="text-2xl font-bold text-red-600 mb-4">
            "Your future isn't found, it's created. Start now."
          </p>
        </div>
        <p className="text-lg text-gray-700 mb-6">
          The best investment you can make is in yourself. Let Danstar's expert
          career consultants in Bangalore guide you toward a bright, meaningful
          future. Don't leave your career to chance—get the clarity and
          direction you deserve.
        </p>
        <div className="flex flex-wrap gap-2 justify-center">
          {[
            "#CareerCounsellingInBangalore",
            "#CareerGuidanceInBangalore",
            "#DanstarCareers",
            "#FindYourPath",
            "#StudyAbroad",
            "#AdmissionsHelp",
          ].map((tag, index) => (
            <span
              key={index}
              className="bg-gray-200 px-3 py-1 rounded-full text-sm text-gray-700"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.section>
    </div>
  );
}


export default CareerCounsellingBlog;