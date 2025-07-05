import Image from "next/image";
import {
  Building2,
  CalendarCheck,
  Mail,
  Phone,
  School,
  Users,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { blogs } from "../blog-data/blogs";
import { domain } from "../utils/constants";

const route = "bba-admission-in-bangalore";
const blog = blogs.find((b) => b.slug === route);

export const metadata = {
  alternates: {
    canonical: `${domain}/${route}`,
  },
  title: blog?.title,
  description: blog?.description,
  keywords: blog?.keywords.join(", "),
  openGraph: {
    title: blog?.title,
    description: blog?.description,
    url: `${domain}/${route}`,
    siteName: "Danstar",
    images: [
      {
        url: "https://danstar.in/images/danstar-logo.png",
        width: 800,
        height: 600,
        alt: "Danstar Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function BBAAdmissionBangalore() {
  const colleges = [
    {
      name: "Christ University",
      admission: "Mostly entrance-based, limited management seats",
      note: "Prestigious institution with excellent placements",
    },
    {
      name: "Mount Carmel College",
      admission: "Direct admission based on Class 12 marks",
      note: "Exclusive for girls, strong business program",
    },
    {
      name: "St. Joseph's College of Commerce",
      admission: "Merit-based and limited direct admission",
      note: "Renowned faculty and industry connections",
    },
    {
      name: "Presidency College",
      admission: "Direct admission under management quota",
      note: "Value for money with quality education",
    },
    {
      name: "Kristu Jayanti College",
      admission: "Management quota seats available",
      note: "Offers specializations in HR, Finance, Marketing",
    },
    {
      name: "Jain University",
      admission: "Entrance-based only (JET exam)",
      note: "No direct admission option available",
    },
  ];

  const admissionSteps = [
    {
      step: "1",
      title: "Check Eligibility",
      description: "Most colleges require 50% in Class 12",
    },
    {
      step: "2",
      title: "Choose Admission Path",
      description: "Decide between entrance exams or direct admission",
    },
    {
      step: "3",
      title: "Prepare Documents",
      description: "Class 10 & 12 marksheets, ID proof, photos",
    },
    {
      step: "4",
      title: "Apply Early",
      description: "Direct admission seats fill quickly",
    },
    {
      step: "5",
      title: "Seek Expert Help",
      description: "Consultants can simplify the process",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="bg-indigo-50 rounded-xl p-8 mb-12 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-indigo-800 mb-4">
          BBA Admission in Bangalore: Your Gateway to Top Colleges in 2025
        </h1>
        <p className="text-lg text-gray-700 max-w-4xl mx-auto">
          Complete guide to securing BBA admission in Bangalore's top colleges
          through direct admission and entrance exams.
        </p>
      </section>

      {/* Why Bangalore */}
      <section className="mb-12">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <Image
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1469&auto=format&fit=crop"
              alt="Bangalore business students"
              className="rounded-lg shadow-md w-full"
              width={1469} // Matches the `w=` param in the URL
              height={Math.round(1469 * (2 / 3))} // Approx. 3:2 aspect ratio (common for Unsplash)
              priority={true} // Optional: Enable if this is a critical above-the-fold image
              style={{ objectFit: "cover" }} // Replaces `fit=crop` from the URL
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold text-indigo-800 mb-4">
              Why Choose Bangalore for BBA?
            </h2>
            <p className="text-gray-700 mb-4">
              Bangalore, India's Silicon Valley, offers the perfect ecosystem
              for business education:
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="bg-indigo-100 text-indigo-700 rounded-full p-1 mr-3 mt-1">
                  <Building2 size={14} />
                </span>
                Home to multinational companies and vibrant startup culture
              </li>
              <li className="flex items-start">
                <span className="bg-indigo-100 text-indigo-700 rounded-full p-1 mr-3 mt-1">
                  <School size={14} />
                </span>
                Some of the best BBA colleges in India with industry-aligned
                curriculum
              </li>
              <li className="flex items-start">
                <span className="bg-indigo-100 text-indigo-700 rounded-full p-1 mr-3 mt-1">
                  <Users size={14} />
                </span>
                Excellent internship and placement opportunities
              </li>
              <li className="flex items-start">
                <span className="bg-indigo-100 text-indigo-700 rounded-full p-1 mr-3 mt-1">
                  <CalendarCheck size={14} />
                </span>
                Diverse student community with global exposure
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Top Colleges */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-indigo-800 mb-6 text-center">
          Top BBA Colleges in Bangalore with Direct Admission Options
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {colleges.map((college, index) => (
            <Card
              key={index}
              className={`hover:shadow-md transition-shadow ${
                college.name === "Jain University"
                  ? "border-2 border-red-200"
                  : ""
              }`}
            >
              <CardHeader>
                <CardTitle className="text-lg">{college.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-3">
                  <p className="font-medium text-sm text-indigo-700">
                    Admission Process:
                  </p>
                  <p className="text-gray-700 text-sm">{college.admission}</p>
                </div>
                <div>
                  <p className="font-medium text-sm text-indigo-700">Note:</p>
                  <p className="text-gray-700 text-sm">{college.note}</p>
                </div>
                {college.name === "Jain University" && (
                  <p className="text-red-600 text-xs mt-2 font-medium">
                    * No direct admission option available
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Admission Process */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-indigo-800 mb-6 text-center">
          How to Secure BBA Admission in Bangalore
        </h2>
        <div className="grid md:grid-cols-5 gap-4">
          {admissionSteps.map((step, index) => (
            <div
              key={index}
              className="bg-indigo-50 rounded-lg p-4 text-center"
            >
              <div className="bg-indigo-100 text-indigo-700 rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-2 font-bold">
                {step.step}
              </div>
              <h3 className="font-semibold text-indigo-800 mb-1">
                {step.title}
              </h3>
              <p className="text-gray-700 text-xs">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Special Note */}
      <section className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-12">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg
              className="h-5 w-5 text-yellow-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-yellow-800">
              Important Note
            </h3>
            <div className="mt-2 text-sm text-yellow-700">
              <p>
                Direct admission seats are limited and typically available under
                management quota. Fees for these seats may be higher than
                regular admissions. Always verify admission details directly
                with the colleges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-800 text-white rounded-xl p-8 mb-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">
            Need Help with BBA Admission?
          </h2>
          <p className="mb-6">
            Confused between entrance exams and direct admissions? Our expert
            counsellors can simplify your BBA admission journey in Bangalore.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="secondary"
              className="bg-white text-indigo-800 hover:bg-gray-100"
            >
              <Phone className="mr-2" size={16} /> Call Now
            </Button>
            <Button
              variant="outline"
              className="text-white border-white hover:bg-indigo-700"
            >
              <Mail className="mr-2" size={16} /> Email Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
