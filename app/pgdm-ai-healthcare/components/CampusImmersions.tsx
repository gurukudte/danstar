"use client"
import { FiUsers, FiCpu, FiMic, FiBriefcase, FiAward } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const CampusImmersions = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-6 bg-white rounded-xl shadow-sm">
      {/* Main Title with Decorative Element */}
      <div className="text-center mb-12 relative">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Key Campus Immersions{" "}
          <span className="font-normal text-blue-600">(8 Days)</span>
        </h1>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-10 mb-14">
        {/* Year 1 Highlights */}
        <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100">
          <div className="flex items-center mb-6">
            <div className="w-2 h-10 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full mr-4"></div>
            <h2 className="text-2xl font-bold text-gray-800">
              Year 1 Highlights
            </h2>
          </div>

          <ul className="space-y-4 pl-2">
            {[
              {
                icon: <FiUsers className="text-blue-500" />,
                text: "Icebreaker Session",
              },
              {
                icon: <FiCpu className="text-blue-500" />,
                text: "AI Tools for Managers – Hands-on with ChatGPT, Notion AI & other emerging techs.",
              },
              {
                icon: <FiMic className="text-blue-500" />,
                text: "Negotiation & Change Management – Simulations with Renowned faculty",
              },
              {
                icon: <FiBriefcase className="text-blue-500" />,
                text: "Student-Led Event – Own, plan and run a professional event",
              },
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="mt-1 text-blue-500">{item.icon}</span>
                <span className="text-gray-700">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Year 2 Highlights */}
        <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl border border-purple-100">
          <div className="flex items-center mb-6">
            <div className="w-2 h-10 bg-gradient-to-b from-purple-500 to-purple-600 rounded-full mr-4"></div>
            <h2 className="text-2xl font-bold text-gray-800">
              Year 2 Highlights
            </h2>
          </div>

          <ul className="space-y-4 pl-2">
            {[
              {
                icon: <FiUsers className="text-purple-500" />,
                text: "CXO Roundtable & Industry Talks – Learn from real-world leaders",
              },
              {
                icon: <FiMic className="text-purple-500" />,
                text: "Live Case Presentations – Pitch to industry judges to experience corporate review.",
              },
              {
                icon: <FiBriefcase className="text-purple-500" />,
                text: "Career Workshop – Build your brand, plan your path",
              },
              {
                icon: <FiAward className="text-purple-500" />,
                text: "Capstone + Celebration – Final boardroom presentation & networking night",
              },
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="mt-1 text-purple-500">{item.icon}</span>
                <span className="text-gray-700">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="relative my-10">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200"></div>
        </div>
        <div className="relative flex justify-center">
          <span className="px-4 bg-white text-gray-500 text-sm">
            Ready to begin your journey?
          </span>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center">
        <p className="text-xl font-medium text-gray-800 mb-6">
          Take Your First Step Towards Global Career Excellence today
        </p>

        <div className="flex justify-center items-center gap-4">

        <Link
          href="https://application-form.keeplearning.live/pg-application-form?utm_source=tep&utm_medium=vn&utm_campaign=danstar"
          passHref
        >
          <Button
            className="bg-blue-600 max-w-min hover:bg-blue-700 text-white px-8 py-6 text-lg flex items-center gap-2 shadow-lg hover:shadow-blue-200/50 transition-all cursor-pointer"
          >
            Enquire Now
          </Button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default CampusImmersions;
