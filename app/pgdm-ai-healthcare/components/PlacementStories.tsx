import { Rocket, ArrowRight } from "lucide-react";
import Link from "next/link";
import {
  FaUserTie,
  FaUserMd,
  FaChartLine,
  FaUserGraduate,
} from "react-icons/fa";

export function PlacementStories() {
  const stories = [
    {
      icon: <FaUserMd className="w-6 h-6" />,
      title: "Dr. Aarti Nair – From Clinic to Corporate Leadership",
      background: "General Physician | Specialisation: PGDM – Healthcare",
      outcome:
        "Appointed as Digital Health Strategy Lead at a global healthcare consultancy",
      quote:
        "The AI-led approach helped me bridge clinical expertise with strategic decision-making. The healthcare modules were spot on—and the CXO roundtable was a game changer.",
    },
    {
      icon: <FaChartLine className="w-6 h-6" />,
      title: "Rahul Bansal – Analytics to Action",
      background:
        "Data Analyst | Specialisation: Data Science & Business Analytics",
      outcome:
        "Promoted to Manager, Analytics Innovation, at a Fortune 500 firm",
      quote:
        "The real-world projects gave me the confidence to tackle complex forecasting and business challenges head-on. Plus, I finally cracked interviews with my new resume and mock prep!",
    },
    {
      icon: <FaUserGraduate className="w-6 h-6" />,
      title: "Meenal Verma – Marketing Made Future-Proof",
      background:
        "Marketing Executive | Specialisation: AI-Driven Marketing & Growth",
      outcome: "Hired as Growth Marketing Manager at a tech unicorn",
      quote:
        "The marketing strategy sessions, combined with AI toolkits, gave me a serious edge. I wasn't just applying for jobs—I was ready to lead.",
    },
    {
      icon: <FaUserTie className="w-6 h-6" />,
      title: "Vikram Iyer – HR with Intelligence",
      background: "HRBP | Specialisation: People & Talent Intelligence with AI",
      outcome: "Joined a fast-scaling startup as Head of Talent Strategy",
      quote:
        "Understanding HR through an AI lens helped me transform how I approached talent analytics. I found my voice as a strategic leader.",
    },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center mb-4">
            <Rocket className="w-6 h-6 mr-2 text-blue-600" />
            <span className="text-blue-600 font-semibold">
              Placement Stories That Inspire
            </span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Real Growth. Real Impact. Real Careers.
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            At keeplearning, we don't just promise transformation—we deliver it.
            Our learners come from diverse professional backgrounds, and after
            completing the PGDM EDGE, they've charted remarkable career growth
            in their industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stories.map((story, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-blue-100 text-blue-600 mr-4">
                    {story.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {story.title}
                  </h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-gray-500">
                      Background
                    </p>
                    <p className="text-gray-700">{story.background}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">
                      After PGDM EDGE
                    </p>
                    <p className="text-gray-700 font-medium">{story.outcome}</p>
                  </div>
                  <blockquote className="pl-4 border-l-4 border-blue-200 italic text-gray-600">
                    "{story.quote}"
                  </blockquote>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600 mb-6">
            These are just a few stories from a thriving community of PGDM EDGE
            alumni. With every learner, we're not just tracking placements—we're
            celebrating possibilities.
          </p>
          <Link
            href="https://application-form.keeplearning.live/pg-application-form?utm_source=tep&utm_medium=vn&utm_campaign=danstar"
            passHref
          >
            <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200">
              Explore Our Programs
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
