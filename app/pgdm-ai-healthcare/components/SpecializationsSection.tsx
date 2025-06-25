
import {
  Rocket,
  BarChart,
  Wallet,
  Briefcase,
  UserCog,
} from "lucide-react";
import { AccreditationBadge } from "./AccreditationBadge";
import { CountdownTimer } from "./CountdownTimer";

export function SpecializationsSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            Specialisations Available
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Future-ready specialisations blending AI with marketing, finance and
            analytics.
          </p>
        </div>

        <div className="flex flex-col lg:flex-col min-h-max gap-8 lg:gap-6">
          {/* Specializations Cards */}
          <div className="flex flex-row gap-4 space-y-6">
            {[
              {
                icon: <Rocket className="h-6 w-6 text-blue-600" />,
                title: "AI-Driven Marketing & Growth",
                bg: "bg-blue-50",
              },
              {
                icon: <Wallet className="h-6 w-6 text-purple-600" />,
                title: "Smart Finance with AI",
                bg: "bg-purple-50",
              },
              {
                icon: <UserCog className="h-6 w-6 text-green-600" />,
                title: "People & Talent Intelligence with AI",
                bg: "bg-green-50",
              },
              {
                icon: <BarChart className="h-6 w-6 text-orange-600" />,
                title: "Business Analytics & Data Science with AI",
                bg: "bg-orange-50",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`p-5 h-full w-1/4 rounded-xl ${item.bg} border border-transparent hover:border-gray-200 transition-all`}
              >
                <div className="flex flex-col justify-center items-center gap-4">
                  <div className="p-3 rounded-full bg-white shadow-sm">
                    {item.icon}
                  </div>
                  <h3 className="text-xl w-3/4 text-center font-semibold text-gray-900">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Features Section */}
          <div className="flex flex-col lg:flex-col gap-8 lg:gap-12">
            {/* Suitable For */}
            <div className="bg-white flex items-center gap-4 p-6 rounded-xl shadow-sm border border-gray-100 mb-8">
              <div className="text-xl text-center font-semibold text-gray-900 mb-4 h-full flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-blue-600" />
                SUITABLE FOR:
              </div>
              <div className="flex flex-wrap gap-3">
                {[
                  "Mid-Career professionals",
                  "Managers",
                  "Marketing",
                  "Sales",
                  "HR",
                  "Finance",
                  "Leaders",
                ].map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium hover:bg-blue-100 hover:text-blue-800 transition-colors"
                  >
                    {item}
                  </span>
                ))}
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
