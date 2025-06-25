"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CountdownTimer() {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2025-07-01T10:20:00");
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-lg border border-gray-100">
      <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
        {/* Left Content */}
        <div className="lg:w-1/2 space-y-4 md:space-y-6">
          <div className="space-y-2 md:space-y-4">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Secure your spot now!
            </h3>
            <p className="text-red-500 text-sm md:text-base font-medium flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse"></span>
              Application closes soon
            </p>
            <p className="text-gray-600 text-sm md:text-base">
              Don't miss this opportunity to join our exclusive program. Limited
              seats available for the upcoming batch.
            </p>
          </div>
          <Link
            href="https://application-form.keeplearning.live/pg-application-form?utm_source=tep&utm_medium=vn&utm_campaign=danstar"
            passHref
          >
            <Button
              className="w-full sm:w-auto cursor-pointer bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-4 md:py-6 px-6 md:px-8 text-base md:text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
              size="lg"
            >
              Apply Now
            </Button>
          </Link>
        </div>

        {/* Right Timer */}
        <div className="lg:w-1/2 bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-600 p-4 sm:p-6 rounded-xl shadow-lg relative overflow-hidden">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-radial-gradient from-white/10 to-transparent opacity-30"></div>

          {/* Metallic border effect */}
          <div className="absolute inset-0 rounded-xl border border-white/10 pointer-events-none"></div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 md:gap-4 h-full relative z-10">
            {[
              { value: timeLeft.days, label: "DAYS" },
              { value: timeLeft.hours, label: "HOURS" },
              { value: timeLeft.minutes, label: "MINUTES" },
              { value: timeLeft.seconds, label: "SECONDS" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-2"
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tabular-nums drop-shadow-md">
                  {item.value.toString().padStart(2, "0")}
                </div>
                <div className="text-xs text-white/80 uppercase tracking-wider mt-1 md:mt-2 font-medium">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
