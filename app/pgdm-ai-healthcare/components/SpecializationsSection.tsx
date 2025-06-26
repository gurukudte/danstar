import {
  Briefcase,
  HeartPulse,
} from "lucide-react";
import { AccreditationBadge } from "./AccreditationBadge";
import { CountdownTimer } from "./CountdownTimer";

export function SpecializationsSection() {
  return (
    <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-3">
            Specialisations Available in PGDM EDGE
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Lead the Future with a Specialisation That Matches Your Ambition
          </p>
        </div>

        <div className="mb-10 text-center max-w-4xl mx-auto text-gray-700">
          <p className="mb-6">
            At the heart of the PGDM EDGE program lies a suite of future-ready
            specialisations designed to empower professionals across industries.
            Whether you're passionate about{" "}
            <span className="font-semibold text-blue-600">
              transforming healthcare
            </span>{" "}
            or driving innovation in finance, marketing, or analytics, there's a
            path tailored for you.
          </p>
        </div>

        <div className="flex flex-col gap-6 md:gap-8 lg:gap-6">
          {/* Specializations Cards */}
          <div className="flex justify-center items-center gap-4">
            {[
              {
                icon: (
                  <HeartPulse className="h-5 w-5 md:h-6 md:w-6 text-blue-600" />
                ),
                title: "Healthcare: AI & Digital Leadership",
                bg: "bg-blue-50",
                border: "border-blue-200",
                description:
                  "Step into the future of healthcare leadership with strategic, digital, and operational expertise.",
                highlights: [
                  "Health Systems & Policy",
                  "Hospital & Clinical Management",
                  "Digital Health & Informatics",
                  "Healthcare Strategy & Leadership",
                  "Health Law & Ethics",
                ],
                featured: true, // Mark healthcare as featured
              },
             
            ].map((item, index) => (
              <div
                key={index}
                className={`p-5 rounded-xl ${item.bg} border ${
                  item.featured
                    ? "border-blue-400 border-2 shadow-lg"
                    : "border-transparent hover:border-gray-200"
                } transition-all h-full flex flex-col relative group`}
              >
                {item.featured && (
                  <div className="absolute -top-3 -right-3 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    Popular
                  </div>
                )}
                <div className="flex flex-col items-center gap-3 mb-4">
                  <div
                    className={`p-3 rounded-full ${
                      item.featured
                        ? "bg-blue-100 shadow-md"
                        : "bg-white shadow-sm"
                    }`}
                  >
                    {item.icon}
                  </div>
                  <h3
                    className={`text-lg md:text-xl text-center font-bold ${
                      item.featured ? "text-blue-800" : "text-gray-900"
                    }`}
                  >
                    {item.title}
                  </h3>
                </div>
                <p
                  className={`text-sm ${
                    item.featured
                      ? "text-gray-800 font-medium"
                      : "text-gray-700"
                  }`}
                >
                  {item.description}
                </p>
                <div className="mt-auto">
                  <h4
                    className={`text-sm font-semibold ${
                      item.featured ? "text-blue-700" : "text-gray-800"
                    } mb-2`}
                  >
                    Key Highlights:
                  </h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    {item.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start">
                        <span
                          className={`mr-2 ${
                            item.featured ? "text-blue-500" : ""
                          }`}
                        >
                          •
                        </span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Features Section */}
          <div className="flex flex-col gap-6 md:gap-8 lg:gap-12">
            {/* Suitable For - with healthcare emphasis */}
            <div className="overflow-x-auto">
              <div className="bg-white flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-4 p-4 md:p-6 rounded-xl shadow-sm border border-gray-100 min-w-[320px]">
                <div className="text-lg md:text-xl font-semibold text-gray-900 flex items-center gap-2">
                  <Briefcase className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />
                  SUITABLE FOR:
                </div>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {[
                    { text: "Healthcare Professionals", highlight: true },
                    { text: "Mid-Career professionals", highlight: false },
                    { text: "Managers", highlight: false },
                    { text: "Marketing", highlight: false },
                    { text: "Sales", highlight: false },
                    { text: "HR", highlight: false },
                    { text: "Finance", highlight: false },
                    { text: "Leaders", highlight: false },
                  ].map((item, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium transition-colors whitespace-nowrap ${
                        item.highlight
                          ? "bg-blue-600 text-white shadow-md hover:bg-blue-700"
                          : "bg-gray-100 text-gray-800 hover:bg-blue-100 hover:text-blue-800"
                      }`}
                    >
                      {item.text}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Accreditation */}
            <AccreditationBadge />

            {/* Countdown + CTA */}
            <CountdownTimer />
          </div>
        </div>
      </div>
    </section>
  );
}
