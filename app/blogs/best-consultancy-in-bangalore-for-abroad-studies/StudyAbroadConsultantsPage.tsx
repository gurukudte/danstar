"use client"
import { motion } from "framer-motion";
import {
  GraduationCap,
  Globe,
  Check,
  Users,
  MapPin,
  MessageSquare,
  Star,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const StudyAbroadConsultantsPage = () => {
  const services = [
    {
      icon: <GraduationCap />,
      title: "UG & PG Admissions",
      description: "Guidance for India & Abroad",
    },
    {
      icon: <Check />,
      title: "Career Assessment",
      description: "Psychometric tests for right career path",
    },
    {
      icon: <Globe />,
      title: "Study Abroad",
      description: "UK, Canada, Australia, Europe & more",
    },
    {
      icon: <MessageSquare />,
      title: "Visa Support",
      description: "Counselling & Interview Prep",
    },
  ];

  const teamMembers = [
    {
      name: "Pradeep Kumar",
      role: "Founder & Lead Counsellor",
      languages: "English, Hindi, Kannada",
      image: "/images/counsellors/counsellor1.jpg",
    },
    // {
    //   name: "Ananya Sharma",
    //   role: "Study Abroad Specialist",
    //   languages: "English, Hindi, French",
    //   image: "/images/counsellors/counsellor2.jpg",
    // },
  ];

  const testimonials = [
    {
      quote:
        "Danstar helped me secure a scholarship in the UK! I couldn't have done it alone.",
      author: "Varsha, M.Sc. in Data Science",
    },
    {
      quote:
        "From confusion to clarity—Danstar gave me a roadmap and confidence to chase my dream career in Canada.",
      author: "Suraj, PG Diploma in Healthcare",
    },
  ];

  const areasServed = [
    "Indiranagar",
    "Malleswaram",
    "Jayanagar",
    "Koramangala",
    "Hebbal",
    "Whitefield",
    "Banashankari",
    "Yelahanka",
  ];

  return (
    <div className="bg-white">
      {/* Header Section */}
      <div className="relative h-96 w-full">
        <Image
          src="/images/header-image.jpg"
          alt="Students consulting experts"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/70 to-red-800/50 flex items-center justify-center">
          <div className="text-center px-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              Best Admission Consultants in Bangalore
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-white mb-8"
            >
              Danstar Makes It Easy!
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link
                href="https://wa.me/919740568622"
                className="bg-yellow-500 hover:bg-yellow-600 text-red-900 font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 inline-flex items-center"
              >
                <MessageSquare className="mr-2" /> Book Free Consultation
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Why You Need a Consultant */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2 relative h-80 rounded-xl overflow-hidden">
            <Image
              src="/images/classroom-journey.jpg"
              alt="Classroom to campus journey"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <p className="text-white text-2xl font-medium px-8 text-center">
                "Right guidance leads to the right future."
              </p>
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-red-900 mb-6">
              Why You Need an Education Consultant in Bangalore
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              With over 800 colleges and thousands of course options, Bangalore
              is one of India's top educational hubs. However, choosing the
              right course, college, or even country for higher studies is a
              daunting task.
            </p>
            <p className="text-lg text-gray-700">
              This is where the role of an{" "}
              <strong>education counsellor in Bangalore</strong> becomes
              invaluable. Whether you're planning to study in India or abroad, a
              good consultant simplifies the journey, providing insights,
              guidance, and access to the best institutions.
            </p>
          </div>
        </div>
      </section>

      {/* What Makes a Good Consultant */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-red-900 mb-12">
            What Makes a Good Educational Consultant?
          </h2>
          <div className="flex justify-center mb-12">
            <Image
              src="/images/checklist-graphic.png"
              alt="Checklist of consultant qualities"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg text-gray-700 mb-6">
                When searching for the{" "}
                <strong>best educational consultants in Bangalore</strong>, make
                sure they offer:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="text-green-600 mt-1 mr-2 flex-shrink-0" />
                  <span>
                    <strong>Experience</strong> with UG, PG, and international
                    admissions
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-600 mt-1 mr-2 flex-shrink-0" />
                  <span>
                    A <strong>track record</strong> of successful placements
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-600 mt-1 mr-2 flex-shrink-0" />
                  <span>
                    <strong>Transparent processes</strong> with no hidden costs
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-600 mt-1 mr-2 flex-shrink-0" />
                  <span>
                    <strong>Personalized counselling</strong> tailored to each
                    student
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-red-900 mb-4">
                Danstar Ticks All These Boxes—And More
              </h3>
              <p className="text-gray-700 mb-6">
                Our comprehensive approach ensures you get the best guidance for
                your academic journey, whether in India or abroad.
              </p>
              <div className="flex items-center">
                <div className="flex -space-x-2 mr-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-red-100 border-2 border-white"
                    ></div>
                  ))}
                </div>
                <div>
                  <p className="font-bold">10,000+ Students Guided</p>
                  <div className="flex items-center mt-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-500 text-yellow-500"
                      />
                    ))}
                    <span className="ml-2 text-sm">5.0 Rating</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-red-900 mb-4">
          Top Services Offered by Danstar
        </h2>
        <p className="text-xl text-center text-gray-600 mb-12">
          A Leading Higher Studies Consultancy in Bangalore
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              
                  transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className="text-red-900 mb-4">
                {React.cloneElement(service.icon, { className: "w-10 h-10" })}
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-red-900 to-red-700 rounded-xl p-8 text-white">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Complete Study Abroad Support
            </h3>
            <ul className="grid md:grid-cols-2 gap-4 mb-6">
              <li className="flex items-start">
                <Check className="text-yellow-400 mt-1 mr-2 flex-shrink-0" />
                <span>Choose the right country and university</span>
              </li>
              <li className="flex items-start">
                <Check className="text-yellow-400 mt-1 mr-2 flex-shrink-0" />
                <span>Prepare documents and SOPs</span>
              </li>
              <li className="flex items-start">
                <Check className="text-yellow-400 mt-1 mr-2 flex-shrink-0" />
                <span>Handle visa and financial guidance</span>
              </li>
              <li className="flex items-start">
                <Check className="text-yellow-400 mt-1 mr-2 flex-shrink-0" />
                <span>Connect with student communities abroad</span>
              </li>
            </ul>
            <p className="text-lg">
              Our <strong>higher studies consultancy in Bangalore</strong>{" "}
              provides end-to-end support for your international education
              dreams.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Danstar */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-red-900 mb-12">
            Best Admission Consultants in Bangalore – Why Choose Danstar?
          </h2>

          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
                <h3 className="text-2xl font-bold text-red-900 mb-4">
                  Finding the best means finding someone who treats your dream
                  like their own
                </h3>
                <p className="text-gray-700 mb-6">
                  At Danstar, we've helped over 10,000 students succeed in their
                  academic journeys. Our counsellors are certified, friendly,
                  and multilingual, ensuring you get the best possible guidance.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Users className="text-red-900 mr-3" />
                    <span>In-person and online support across Bangalore</span>
                  </div>
                  <div className="flex items-center">
                    <Globe className="text-red-900 mr-3" />
                    <span>Global network of educational institutions</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="text-red-900 mr-3" />
                    <span>100% transparent processes</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 relative h-96 rounded-xl overflow-hidden">
              <Image
                src="/images/success-stories.jpg"
                alt="Happy students"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-red-900 mb-4">
          Meet Our Expert Education Counsellors
        </h2>
        <p className="text-xl text-center text-gray-600 mb-12">
          The best education counsellors in Bangalore
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <div className="md:flex">
                <div className="md:w-1/3">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={300}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-red-900 font-medium mb-4">{member.role}</p>
                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-500 mb-1">
                      Languages:
                    </p>
                    <p>{member.languages}</p>
                  </div>
                  <Link
                    href="https://wa.me/919740568622"
                    className="inline-flex items-center text-red-900 font-medium hover:text-red-700"
                  >
                    <MessageSquare className="mr-2" /> Book a Session
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-red-900 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Real Success Stories – Bangalore Students Who Made It Big
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white/10 p-8 rounded-xl backdrop-blur-sm"
              >
                <blockquote className="text-lg italic mb-6">
                  "{testimonial.quote}"
                </blockquote>
                <p className="font-bold text-yellow-300">
                  — {testimonial.author}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2 relative h-96 rounded-xl overflow-hidden">
            <Image
              src="/images/bangalore-map.jpg"
              alt="Bangalore map with service areas"
              fill
              className="object-cover"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-red-900 mb-6">
              Service Areas in Bangalore – We're Near You
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Danstar serves students from every corner of Bangalore—whether
              you're in Hebbal, Whitefield, Banashankari, or Yelahanka. Our team
              is available for both physical appointments and virtual sessions.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {areasServed.map((area, index) => (
                <div key={index} className="flex items-center">
                  <MapPin className="text-red-900 mr-2" />
                  <span>{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-red-900 to-red-700">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Take the First Step?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Book your free career counselling session today and start your
            journey to academic success
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="https://wa.me/919740568622"
              className="bg-yellow-500 hover:bg-yellow-600 text-red-900 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 inline-flex items-center justify-center"
            >
              <MessageSquare className="mr-2" /> WhatsApp Us
            </Link>
            <Link
              href="https://www.danstar.in"
              className="bg-white hover:bg-gray-100 text-red-900 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 inline-flex items-center justify-center"
            >
              Visit Our Website
            </Link>
          </div>
        </div>
      </section>

      {/* Final Word */}
      <section className="py-16 px-4 max-w-3xl mx-auto text-center">
        <div className="bg-gray-50 p-8 rounded-xl">
          <h2 className="text-2xl font-bold text-red-900 mb-6">
            "Education is the passport to the future."
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            With so many options and opinions, it's easy to get lost. But with
            the <strong>best education counsellor in Bangalore</strong> by your
            side, the path becomes clear.
          </p>
          <p className="text-lg text-gray-700">
            Danstar is your trusted partner for UG, PG, and global admissions.
            Make the smart choice—choose Danstar.
          </p>
        </div>
      </section>

     
    </div>
  );
};

export default StudyAbroadConsultantsPage;
