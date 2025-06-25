import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import {
  FiPocket,
  FiUser,
  FiFileText,
  FiMic,
  FiBriefcase,
  FiCheckCircle,
} from "react-icons/fi";

export function CareerEngine() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-3 flex items-center justify-center gap-2">
            <span className="text-blue-600">🧠</span>
            Career Engine
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A guided journey from skill-building to placement:
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: <FiUser className="h-8 w-8 text-blue-600" />,
              title: "Personalized goal-setting & coaching",
              description: "Custom career roadmap with 1:1 mentor sessions",
            },
            {
              icon: <FiPocket className="h-8 w-8 text-blue-600" />,
              title: "Soft skill development for every career stage",
              description:
                "Communication, leadership, and emotional intelligence training",
            },
            {
              icon: <FiFileText className="h-8 w-8 text-blue-600" />,
              title: "Resume & LinkedIn polishing",
              description: "ATS-optimized profiles that get you noticed",
            },
            {
              icon: <FiMic className="h-8 w-8 text-blue-600" />,
              title: "Mock interviews & feedback",
              description: "Practice with industry experts across domains",
            },
            {
              icon: <FiBriefcase className="h-8 w-8 text-blue-600" />,
              title: "Capstone projects",
              description: "Real-world experience for your portfolio",
            },
            {
              icon: <FiCheckCircle className="h-8 w-8 text-blue-600" />,
              title: "Placement assistance",
              description: "Access to our 50+ partner network",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 rounded-full">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center flex justify-center mt-12">
          <Link
            href="https://application-form.keeplearning.live/pg-application-form?utm_source=tep&utm_medium=vn&utm_campaign=danstar"
            passHref
            legacyBehavior
          >
            <Button
              asChild
              className="bg-blue-600 max-w-min hover:bg-blue-700 text-white px-8 py-6 text-lg flex items-center gap-2 shadow-lg hover:shadow-blue-200/50 transition-all cursor-pointer"
            >
              <a target="_blank" rel="noopener noreferrer">
                Start Your Career Journey
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
          </Link>
          {/* <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg shadow-md transition-all">
            Start Your Career Journey
          </button> */}
        </div>
      </div>
    </section>
  );
}
