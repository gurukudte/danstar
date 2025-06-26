"use client";
import Link from "next/link";
import { useState } from "react";
import {
  FiDollarSign,
  FiHome,
  FiGlobe,
  FiUsers,
  FiCalendar,
} from "react-icons/fi";

export default function PricingOptions() {
  const [activePlan, setActivePlan] = useState<"standard" | "immersion">(
    "standard"
    );
    const downloadBrochure = () => {
      const brochureUrl = "/docs/Healthcare-Brochure.pdf";
      const link = document.createElement("a");
      link.href = brochureUrl;
      link.download = "Healthcare-Brochure.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };

  const plans = {
    standard: {
      title: "Standard Plan",
      icon: <FiHome className="text-blue-600" size={24} />,
      totalFee: "₹4,00,000",
      features: [
        {
          icon: <FiGlobe size={18} />,
          text: "100% remote learning experience",
        },
        {
          icon: <FiUsers size={18} />,
          text: "Virtual networking opportunities",
        },
        {
          icon: <FiCalendar size={18} />,
          text: "Flexible schedule for working professionals",
        },
      ],
      fees: [
        {
          label: "Application Fee",
          amount: "₹1,000",
          note: "(non-refundable)",
        },
        { label: "Registration Fee", amount: "₹30,000" },
      ],
      installments: [
        { label: "At batch start", amount: "₹1,84,500" },
        { label: "Beginning of Term 3", amount: "₹1,84,500" },
      ],
      description: "Ideal for learners opting for a complete remote experience",
    },
    immersion: {
      title: "Immersion Plan",
      icon: <FiUsers className="text-green-600" size={24} />,
      totalFee: "₹5,00,000",
      features: [
        {
          icon: <FiHome size={18} />,
          text: "8 days of on-campus immersion at JAGSOM, Bangalore",
        },
        {
          icon: <FiUsers size={18} />,
          text: "In-person networking and workshops",
        },
        {
          icon: <FiCalendar size={18} />,
          text: "Hands-on learning experiences",
        },
      ],
      fees: [
        {
          label: "Application Fee",
          amount: "₹1,000",
          note: "(non-refundable)",
        },
        { label: "Registration Fee", amount: "₹30,000" },
      ],
      installments: [
        { label: "At batch start", amount: "₹2,34,500" },
        { label: "Beginning of Term 3", amount: "₹2,34,500" },
      ],
      description:
        "Best for those seeking hybrid learning with in-person networking",
    },
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center mb-4 bg-blue-100 text-blue-800 px-4 py-2 rounded-full">
          <FiDollarSign className="h-5 w-5 mr-2" />
          <span className="font-medium">
            PGDM in Healthcare – Pricing Options
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Choose Your Learning Experience
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Flexible payment options designed for different learning preferences
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <button
          onClick={() => setActivePlan("standard")}
          className={`p-6 rounded-xl text-left transition-all ${
            activePlan === "standard"
              ? "bg-blue-50 border-2 border-blue-300 shadow-md"
              : "bg-white border border-gray-200 hover:border-blue-200"
          }`}
        >
          <div className="flex items-center gap-4 mb-4">
            <div
              className={`p-3 rounded-full ${
                activePlan === "standard"
                  ? "bg-blue-100 text-blue-600"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              <FiHome size={24} />
            </div>
            <h3
              className={`text-xl font-bold ${
                activePlan === "standard" ? "text-blue-800" : "text-gray-800"
              }`}
            >
              Standard Plan
            </h3>
          </div>
          <div className="flex items-baseline gap-2 mb-4">
            <span className="text-3xl font-bold text-gray-900">₹4,00,000</span>
          </div>
          <p className="text-gray-600 mb-4">
            Ideal for learners opting for a 100% remote experience
          </p>
        </button>

        <button
          onClick={() => setActivePlan("immersion")}
          className={`p-6 rounded-xl text-left transition-all ${
            activePlan === "immersion"
              ? "bg-green-50 border-2 border-green-300 shadow-md"
              : "bg-white border border-gray-200 hover:border-green-200"
          }`}
        >
          <div className="flex items-center gap-4 mb-4">
            <div
              className={`p-3 rounded-full ${
                activePlan === "immersion"
                  ? "bg-green-100 text-green-600"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              <FiUsers size={24} />
            </div>
            <h3
              className={`text-xl font-bold ${
                activePlan === "immersion" ? "text-green-800" : "text-gray-800"
              }`}
            >
              Immersion Plan
            </h3>
          </div>
          <div className="flex items-baseline gap-2 mb-4">
            <span className="text-3xl font-bold text-gray-900">₹5,00,000</span>
          </div>
          <p className="text-gray-600 mb-4">
            Includes 8 days of on-campus immersion at JAGSOM, Bangalore
          </p>
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 border border-gray-100">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Plan Details */}
          <div className="md:w-2/3">
            <div className="flex items-center gap-4 mb-6">
              <div
                className={`p-3 rounded-full ${
                  activePlan === "standard"
                    ? "bg-blue-100 text-blue-600"
                    : "bg-green-100 text-green-600"
                }`}
              >
                {activePlan === "standard" ? (
                  <FiHome size={24} />
                ) : (
                  <FiUsers size={24} />
                )}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {plans[activePlan].title}
                </h3>
                <p className="text-gray-600">{plans[activePlan].description}</p>
              </div>
            </div>

            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">
                Program Features
              </h4>
              <ul className="space-y-3">
                {plans[activePlan].features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-0.5 text-blue-500">{feature.icon}</span>
                    <span className="text-gray-700">{feature.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-4">
                Payment Structure
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-medium text-gray-700 mb-2">Fees</h5>
                  <ul className="space-y-2">
                    {plans[activePlan].fees.map((fee, index) => (
                      <li key={index} className="flex justify-between">
                        <span className="text-gray-600">{fee.label}</span>
                        <span className="font-medium">
                          {fee.amount}{" "}
                          {fee.note && (
                            <span className="text-gray-500">{fee.note}</span>
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-gray-700 mb-2">
                    Installments
                  </h5>
                  <ul className="space-y-2">
                    {plans[activePlan].installments.map(
                      (installment, index) => (
                        <li key={index} className="flex justify-between">
                          <span className="text-gray-600">
                            {installment.label}
                          </span>
                          <span className="font-medium">
                            {installment.amount}
                          </span>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className="md:w-1/3">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 sticky top-4">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">
                Plan Summary
              </h4>
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium text-gray-700 mb-2">
                    Total Program Fee
                  </h5>
                  <p className="text-2xl font-bold text-gray-900">
                    {plans[activePlan].totalFee}
                  </p>
                </div>
                <div>
                  <h5 className="font-medium text-gray-700 mb-2">
                    Payment Option
                  </h5>
                  <p className="text-gray-700">2 Installments</p>
                </div>
                <div>
                  <h5 className="font-medium text-gray-700 mb-2">
                    Key Benefit
                  </h5>
                  <p className="text-gray-700">
                    {activePlan === "standard"
                      ? "Complete remote learning flexibility"
                      : "On-campus immersion experience"}
                  </p>
                </div>
                <Link
                  href="https://application-form.keeplearning.live/pg-application-form?utm_source=tep&utm_medium=vn&utm_campaign=danstar"
                  passHref
                >
                  <button className="cursor-pointer w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors mt-4">
                    Apply Now
                  </button>
                </Link>
                <button
                  className="cursor-pointer w-full border border-blue-600 text-blue-600 font-medium py-3 px-4 rounded-lg transition-colors hover:bg-blue-50"
                  onClick={downloadBrochure}
                >
                  Download Brochure
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
