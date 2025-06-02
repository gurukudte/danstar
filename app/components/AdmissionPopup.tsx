"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function AdmissionPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    if (
      typeof window !== "undefined" &&
      !sessionStorage.getItem("popupShown")
    ) {
      const timer = setTimeout(() => {
        setIsVisible(true);
        sessionStorage.setItem("popupShown", "true");
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const closePopup = () => setIsVisible(false);

  if (!isMounted || !isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[9999] flex items-center justify-center p-4 animate-fade-in">
      {/* Scrollable container that fits within viewport */}
      <div className="relative bg-white/95 rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto border-2 border-red-600/80">
        {/* Close Button */}
        <button
          onClick={closePopup}
          aria-label="Close popup"
          className="sticky top-2 right-2 float-right text-gray-500 hover:text-red-600 text-3xl z-10 bg-white/80 rounded-full w-10 h-10 flex items-center justify-center ml-2"
        >
          &times;
        </button>

        {/* Content Container */}
        <div className="p-6 space-y-6">
          {/* Header */}
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-red-700">
              🎓✨ ADMISSIONS OPEN – 2025 ✨🎓
            </h2>
            <p className="text-lg md:text-xl mt-2 text-gray-800">
              🎯 Join Top Colleges in Bangalore!
            </p>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-xl text-red-700 flex items-center gap-2">
                  📚 Courses Available:
                </h3>
                <ul className="mt-3 space-y-2 pl-5 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span>✅</span>
                    <span>BSc Nursing | Allied Health | Pharmacy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>✅</span>
                    <span>BPT | BAMS | MBBS | MHA | MDS & More</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-xl text-red-700 flex items-center gap-2">
                  🚀 Our Services:
                </h3>
                <ul className="mt-3 space-y-2 pl-5 text-gray-700">
                  {[
                    "🔹 100% Admission Guidance",
                    "🔹 Career Counseling",
                    "🔹 India & Abroad Options",
                    "🔹 Healthcare Course Experts",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-xl text-red-700 flex items-center gap-2">
                  📌 Why Choose Danstar?
                </h3>
                <ul className="mt-3 space-y-2 pl-5 text-gray-700">
                  {[
                    "⭐ 9+ Years of Expert Counseling",
                    "⭐ Trusted by 1000s of Students",
                    "⭐ Smooth, Hassle-Free Admission",
                    "⭐ Scholarships & Loan Guidance",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-yellow-50/70 p-4 rounded-lg border border-yellow-200">
                <p className="text-center font-bold text-red-700">
                  🚨 Seats Filling Fast – Apply Today!
                </p>
                <p className="text-center mt-2">
                  🟥 DANSTAR – Your Career, Our Mission
                </p>
              </div>
            </div>
          </div>

          {/* Footer CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link
              href="https://wa.me/919740568622"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              📱 WhatsApp
            </Link>
            <Link
              href="tel:9740568622"
              className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              📞 Call Now
            </Link>
          </div>
          <p className="text-center text-sm text-gray-600 mt-3">
            🔗 Visit:{" "}
            <Link
              href="https://www.danstar.in"
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              www.danstar.in
            </Link>{" "}
            | 📞 97405 68622
          </p>
        </div>
      </div>
    </div>
  );
}
