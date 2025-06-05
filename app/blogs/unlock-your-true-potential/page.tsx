"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  GraduationCap,
  Briefcase,
  BookOpen,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { FaWhatsapp} from "react-icons/fa";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const CareerCounsellingBangalore = () => {
  const reasons = [
    {
      icon: <CheckCircle className="w-5 h-5" />,
      text: "Overcome career confusion",
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      text: "Identify your true passion",
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      text: "Get access to expert career consultants in Bangalore",
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      text: "Receive data-driven psychometric assessments",
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      text: "Personalized career roadmap",
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      text: "Explore local & international opportunities",
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      text: "Save money by avoiding wrong decisions",
    },
    { icon: <CheckCircle className="w-5 h-5" />, text: "Build confidence" },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      text: "Boost academic or professional performance",
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="relative rounded-xl overflow-hidden my-8">
        <div className="relative h-96 w-full">
          <Image
            src="/career-counselling-bangalore.jpg"
            alt="Career Counselling in Bangalore"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/80 to-transparent flex items-center">
            <div className="max-w-2xl px-8 text-white">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-bold mb-4"
              >
                Unlock Your True Potential
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl md:text-2xl font-semibold mb-6"
              >
                Best Career Counselling in Bangalore for Students and
                Professionals
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Button
                  size="lg"
                  className="bg-white text-red-600 hover:bg-gray-100 font-bold"
                  asChild
                >
                  <a
                    href="https://wa.me/919740568622"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp className="mr-2" /> Get Free Consultation
                  </a>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Career Counselling Matters */}
      <section className="my-16">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <div className="relative h-80 w-full rounded-xl overflow-hidden">
              <Image
                src="/bangalore-map.jpg"
                alt="Map of Bangalore"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <p className="text-white text-xl font-bold text-center p-4">
                  "In a city of dreams, find your true calling."
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Why Career Counselling in Bangalore Matters
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Bangalore is a city full of opportunities, but with so many
              options, choosing the right career can be overwhelming. That's why
              career counselling in Bangalore is essential. It brings clarity,
              confidence, and the right direction—whether you're a student or a
              professional looking for a change.
            </p>
            <p className="text-lg text-gray-700">
              As the IT capital of India with numerous educational institutions
              and multinational companies, Bangalore offers countless career
              paths. However, this abundance of choices often leads to confusion
              and indecision. Professional career guidance helps you navigate
              this complex landscape effectively.
            </p>
          </div>
        </div>
      </section>

      {/* What Is Career Counselling */}
      <section className="my-16 bg-gray-50 rounded-xl p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          What Is Career Counselling and Who Needs It?
        </h2>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-red-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
              <BookOpen className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Students</h3>
            <p className="text-gray-600">
              For students in Class 8-12 facing stream selection or college
              decisions, career counselling provides clarity and direction.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-red-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
              <GraduationCap className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Graduates</h3>
            <p className="text-gray-600">
              Recent graduates unsure about job options or higher studies
              benefit from expert guidance on career paths.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-red-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
              <Briefcase className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Professionals</h3>
            <p className="text-gray-600">
              Working professionals considering career changes or skill upgrades
              get strategic advice for growth.
            </p>
          </div>
        </div>
        <p className="text-lg text-gray-700 mt-12">
          Career counselling is a structured process that helps individuals
          understand their personality, skills, and interests—and align them
          with suitable career paths. Whether you're a student in Class 10 or a
          software engineer planning a switch, expert career guidance in
          Bangalore can make all the difference.
        </p>
      </section>

      {/* Top 10 Reasons */}
      <section className="my-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Top 10 Reasons to Choose the Best Career Counselling in Bangalore
        </h2>
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start gap-4 bg-white p-4 rounded-lg shadow-sm border border-gray-100"
            >
              <span className="text-red-600 mt-1">{reason.icon}</span>
              <p className="text-gray-800 font-medium">{reason.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Meet Danstar */}
      <section className="my-16 bg-red-600 rounded-xl overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 p-8 md:p-12 text-white">
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
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm">
                <p className="font-semibold">Free discovery session</p>
              </div>
              <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm">
                <p className="font-semibold">
                  Career Interest & Aptitude tests
                </p>
              </div>
              <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm">
                <p className="font-semibold">Personalized reports</p>
              </div>
              <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm">
                <p className="font-semibold">Online & Offline counselling</p>
              </div>
            </div>
            <Button
              size="lg"
              className="bg-white text-red-600 hover:bg-gray-100 font-bold"
              asChild
            >
              <a
                href="https://wa.me/919740568622"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="mr-2" /> WhatsApp Now
              </a>
            </Button>
          </div>
          <div className="md:w-1/2 relative h-96">
            <Image
              src="/danstar-team.jpg"
              alt="Danstar Counsellors"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4 text-center">
              <p>
                "Danstar changed my career perspective completely!" - Rohan, 19
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Counselling Process */}
      <section className="my-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          What to Expect in a Danstar Counselling Session
        </h2>
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-red-100 transform -translate-x-1/2"></div>
          <div className="space-y-12">
            {[
              {
                step: "1",
                title: "Discovery Call",
                desc: "Initial conversation to understand your needs and expectations",
              },
              {
                step: "2",
                title: "Career Test",
                desc: "Comprehensive psychometric and aptitude assessments",
              },
              {
                step: "3",
                title: "Report Generation",
                desc: "Detailed analysis of your skills, interests, and personality",
              },
              {
                step: "4",
                title: "1-on-1 Discussion",
                desc: "In-depth session with our career experts",
              },
              {
                step: "5",
                title: "Career Plan",
                desc: "Personalized roadmap with short-term and long-term goals",
              },
              {
                step: "6",
                title: "Follow-up",
                desc: "Ongoing support and guidance as you progress",
              },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div
                  className={`flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-red-600 text-white font-bold text-xl z-10 mx-auto md:mx-0">
                    {item.step}
                  </div>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex-1 bg-white p-6 rounded-lg shadow-md md:mx-8 mt-4 md:mt-0"
                  >
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <p className="text-lg text-gray-700 mt-12 text-center max-w-3xl mx-auto">
          From the moment you connect with Danstar, we make career counselling a
          fun, easy, and transformative experience. We blend technology,
          psychology, and years of counselling expertise to help you find your
          perfect path.
        </p>
      </section>

      {/* Success Stories */}
      <section className="my-16 bg-gray-50 rounded-xl p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Student Success Stories
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {successStories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 relative"
            >
              <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-md">
                <Image
                  src={`/student-${index + 1}.jpg`}
                  alt={story.name}
                  width={64}
                  height={64}
                  className="object-cover"
                />
              </div>
              <blockquote className="pl-12">
                <p className="text-lg italic text-gray-700 mb-4">
                  "{story.quote}"
                </p>
                <footer className="font-semibold text-red-600">
                  — {story.name}
                </footer>
              </blockquote>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Areas Served */}
      <section className="my-16">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Areas We Serve in Bangalore
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Whether you're in Whitefield or Yelahanka, Danstar offers career
              guidance in Bangalore across all neighborhoods—both in person and
              online.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {areasServed.map((area, index) => (
                <div key={index} className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-red-600" />
                  <span className="font-medium">{area}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative h-80 w-full rounded-xl overflow-hidden">
              <Image
                src="/bangalore-areas.jpg"
                alt="Bangalore Areas"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="my-16 bg-gradient-to-r from-red-600 to-red-700 rounded-xl p-8 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">
          Try a Free Career Quiz Today!
        </h2>
        <p className="text-xl mb-8">🎯 Discover Your Top 3 Career Matches!</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-white text-red-600 hover:bg-gray-100 font-bold"
            asChild
          >
            <a
              href="https://danstar.in"
              target="_blank"
              rel="noopener noreferrer"
            >
              Take FREE Career Test <ArrowRight className="ml-2" />
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-white border-white hover:bg-white/10 font-bold"
            asChild
          >
            <a
              href="https://wa.me/919740568622"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="mr-2" /> WhatsApp Us
            </a>
          </Button>
        </div>
      </section>

      {/* Final Word */}
      <section className="my-16 text-center">
        <div className="bg-gray-100 rounded-xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-red-600 mb-4">
            "Your future isn't found, it's created. Start now."
          </h3>
        </div>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
          The best investment you can make is in yourself. Let Danstar's expert
          career consultants in Bangalore guide you toward a bright, meaningful
          future. Don't leave your career to chance—get the clarity and
          direction you deserve.
        </p>
        <Button
          size="lg"
          className="bg-red-600 hover:bg-red-700 font-bold"
          asChild
        >
          <a
            href="https://wa.me/919740568622"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book Your Session Now
          </a>
        </Button>
      </section>

     
    </div>
  );
};

export default CareerCounsellingBangalore;
