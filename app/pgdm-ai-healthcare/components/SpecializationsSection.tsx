import {
  Rocket,
  BarChart,
  Wallet,
  Briefcase,
  HeartPulse,
  Cross,
  Stethoscope,
} from "lucide-react";
import { AccreditationBadge } from "./AccreditationBadge";
import { CountdownTimer } from "./CountdownTimer";

export function SpecializationsSection() {
  const healthcareUSPs = [
    "Healthcare CXO mentorship",
    "Digital health certifications",
    "Hospital management simulations",
    "AI in clinical decision-making",
    "Healthcare policy frameworks",
  ];

  return (
    <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center justify-center mb-4 bg-blue-100 text-blue-800 px-4 py-2 rounded-full">
            <HeartPulse className="h-5 w-5 mr-2" />
            <span className="font-medium">
              Healthcare Leadership Focus Across All Tracks
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-3">
            Specialisations Available in PGDM EDGE
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Every track includes healthcare leadership modules to prepare you
            for the future of medicine
          </p>
        </div>

        <div className="mb-10 text-center max-w-4xl mx-auto text-gray-700">
          <p className="mb-6">
            Our unique curriculum integrates{" "}
            <span className="font-semibold text-blue-600">
              healthcare leadership components
            </span>{" "}
            across all specializations. Whether you choose marketing, finance,
            or analytics, you'll gain essential skills for the evolving
            healthcare landscape.
          </p>
        </div>

        <div className="flex flex-col gap-6 md:gap-8 lg:gap-6">
          {/* Specializations Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                icon: (
                  <HeartPulse className="h-5 w-5 md:h-6 md:w-6 text-blue-600" />
                ),
                title: "Healthcare: AI & Digital Leadership",
                bg: "bg-blue-50",
                border: "border-blue-200",
                description:
                  "Become a transformational leader in digital health innovation and AI-driven care delivery.",
                highlights: [
                  "Health Systems & Policy",
                  "Clinical Operations Management",
                  "Healthcare AI Applications",
                  "Digital Health Strategy",
                  "Medical Leadership",
                ],
                featured: true,
                healthcareFocus: "Core specialization",
              },
              {
                icon: (
                  <Rocket className="h-5 w-5 md:h-6 md:w-6 text-purple-600" />
                ),
                title: "Marketing: Healthcare Growth",
                bg: "bg-purple-50",
                border: "border-purple-200",
                description:
                  "Master healthcare-specific marketing strategies for pharma, devices, and health services.",
                highlights: [
                  "Healthcare Consumer Behavior",
                  "Pharma Marketing",
                  "Digital Health Campaigns",
                  "Medical Device Commercialization",
                ],
                healthcareFocus: "Includes healthcare marketing specialization",
              },
              {
                icon: (
                  <Wallet className="h-5 w-5 md:h-6 md:w-6 text-green-600" />
                ),
                title: "Finance: Healthcare Economics",
                bg: "bg-green-50",
                border: "border-green-200",
                description:
                  "Specialize in healthcare investment, hospital finance, and medical economics.",
                highlights: [
                  "Healthcare Valuation",
                  "Hospital Financial Management",
                  "Health Insurance Models",
                  "MedTech Investments",
                ],
                healthcareFocus: "Includes healthcare finance track",
              },
              {
                icon: (
                  <BarChart className="h-5 w-5 md:h-6 md:w-6 text-orange-600" />
                ),
                title: "Health Data Science",
                bg: "bg-orange-50",
                border: "border-orange-200",
                description:
                  "Transform clinical data into insights with healthcare-specific analytics training.",
                highlights: [
                  "Clinical Data Mining",
                  "Healthcare Predictive Modeling",
                  "Medical Imaging Analytics",
                  "EHR Data Systems",
                ],
                healthcareFocus: "Includes healthcare data science focus",
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
                    Flagship Program
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

                <div className="mt-4">
                  <h4
                    className={`text-xs font-semibold uppercase tracking-wide ${
                      item.featured ? "text-blue-700" : "text-gray-500"
                    } mb-1`}
                  >
                    Healthcare Focus
                  </h4>
                  <p className="text-xs text-blue-600 font-medium mb-3">
                    {item.healthcareFocus}
                  </p>
                </div>

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

          {/* Healthcare USPs Section */}
          <div className="bg-blue-50 rounded-xl p-6 md:p-8 border border-blue-200">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="flex-shrink-0 bg-blue-100 p-4 rounded-full">
                <Stethoscope className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Healthcare Leadership USPs Across All Tracks
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">
                  {healthcareUSPs.map((usp, index) => (
                    <div
                      key={index}
                      className="flex items-start bg-white p-3 rounded-lg border border-blue-100"
                    >
                      <Cross className="h-4 w-4 text-blue-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-sm font-medium text-gray-800">
                        {usp}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Suitable For */}
          <div className="overflow-x-auto">
            <div className="bg-white flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-4 p-4 md:p-6 rounded-xl shadow-sm border border-gray-100 min-w-[320px]">
              <div className="text-lg md:text-xl font-semibold text-gray-900 flex items-center gap-2">
                <Briefcase className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />
                IDEAL FOR HEALTHCARE ROLES:
              </div>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {[
                  { text: "Doctors Transitioning to Mgmt", highlight: true },
                  { text: "Hospital Administrators", highlight: true },
                  { text: "Pharma Executives", highlight: true },
                  { text: "Health Tech Professionals", highlight: true },
                  { text: "Clinical Leaders", highlight: true },
                  { text: "Healthcare Consultants", highlight: true },
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

          <AccreditationBadge />
          <CountdownTimer />
        </div>
      </div>
    </section>
  );
}
