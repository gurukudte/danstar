import { Button } from "@/components/ui/button";
import {
  Download,
  ArrowRight,
  Trophy,
  Calendar,
  Monitor,
} from "lucide-react";
import Image from "next/image";
import ContactFormDialog from "./ContactForm";

export default function HeroSection() {
  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Content - Text */}
          <div className="lg:w-1/2 space-y-8">
            {/* Logo and Program Name */}
            <div className="flex flex-col items-start gap-3">
              <Image
                src="/logos/jagsom.svg"
                alt="JAGSoM Logo"
                width={160}
                height={40}
                className="h-16 w-auto"
              />
              <h2 className="text-7xl font-bold text-gray-900 tracking-tight">
                PGDM <span className="text-blue-600">EDGE</span>
              </h2>
            </div>

            {/* Main Heading */}
            <h1 className="text-2xl font-semibold text-gray-900 leading-tight">
              Go from{" "}
              <span className="relative inline-block">
                <span className="font-extrabold z-10">Manager to a Leader</span>
              </span>{" "}
              in an AI-First World
            </h1>

            {/* Rankings and Details */}
            <div className="text-2xl font-semibold text-gray-900 leading-tight">
              <h2>
                India’s top-ranked B-school (Top 30, Business Today), Globally
                ranked by QS in Marketing, Finance & Analytics
              </h2>
            </div>

            {/* Program Duration */}
            <div className="grid grid-cols-3 gap-4 max-w-xl">
              {[
                {
                  icon: <Calendar className="h-10 w-10 text-blue-600" />,
                  label: "24 Months",
                },
                {
                  icon: <Trophy className="h-10 w-10 text-blue-600" />,
                  label: "Full Time PGDM",
                },
                {
                  icon: <Monitor className="h-10 w-10 text-blue-600" />,
                  label: "Virtual+On campus",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-4 rounded-lg shadow-sm border border-gray-100"
                >
                  <div className="flex flex-col justify-start items-start gap-2">
                    {item.icon}
                    <span className="text-md font-bold">{item.label}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg flex items-center gap-2 shadow-lg hover:shadow-blue-200/50 transition-all">
                <Download className="h-5 w-5" />
                Download Brochure
              </Button>
              <ContactFormDialog
                buttonProp={
                  <Button
                    variant="outline"
                    className="px-8 py-6 text-lg border-blue-600 text-blue-600 hover:bg-blue-50 flex items-center gap-2 transition-all"
                  >
                    Apply Now
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                }
              />
            </div>

            {/* Deadline Notice */}
            <div className="flex items-center gap-2 pt-2">
              <div className="h-3 w-3 rounded-full bg-red-500 animate-pulse"></div>
              <p className="text-red-600 font-medium">
                Application closes soon
              </p>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Business professionals in AI meeting"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-black/10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
