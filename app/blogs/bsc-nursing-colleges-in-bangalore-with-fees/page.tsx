"use client";

import {
  Building2,
  CalendarCheck,
  ClipboardList,
  DollarSign,
  GraduationCap,
  Mail,
  Phone,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function BScNursingBangalore() {
  const colleges = [
    {
      name: "St. John's Medical College",
      fee: "₹82,800/year",
      recognition: "INC, KNC, NAAC A+",
    },
    {
      name: "M.S. Ramaiah University of Applied Sciences",
      fee: "₹2,40,000/year",
      recognition: "INC, UGC, NAAC A",
    },
    {
      name: "East Point College of Medical Sciences",
      fee: "₹1,40,000/year",
      recognition: "INC, RGUHS, NAAC B++",
    },
    {
      name: "Dayananda Sagar University",
      fee: "₹92,000/year",
      recognition: "INC, UGC, NAAC A+",
    },
    {
      name: "Rajiv Gandhi College of Nursing",
      fee: "₹40,000/year",
      recognition: "INC, KNC",
    },
    {
      name: "East West College of Nursing",
      fee: "₹40,000/year",
      recognition: "INC, KNC",
    },
    {
      name: "Chinmaya Institute of Nursing",
      fee: "₹10,000 (first year)",
      recognition: "INC, KNC",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="bg-blue-50 rounded-xl p-8 mb-12 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
          Top BSc Nursing Colleges in Bangalore with Fees: 2025 Guide
        </h1>
        <p className="text-lg text-gray-700 max-w-4xl mx-auto">
          Comprehensive overview of the best BSc Nursing colleges in Bangalore
          with detailed fee structures and admission information.
        </p>
      </section>

      {/* Introduction */}
      <section className="mb-12">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1470&auto=format&fit=crop"
              alt="Nursing students in Bangalore"
              className="rounded-lg shadow-md w-full"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">
              Why Choose Bangalore for BSc Nursing?
            </h2>
            <p className="text-gray-700 mb-4">
              Bangalore, India's educational and healthcare hub, offers
              exceptional opportunities for nursing students. The city boasts:
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="bg-blue-100 text-blue-700 rounded-full p-1 mr-3 mt-1">
                  {/* <Scalpel size={14} /> */}
                </span>
                Advanced healthcare infrastructure with top-tier hospitals
              </li>
              <li className="flex items-start">
                <span className="bg-blue-100 text-blue-700 rounded-full p-1 mr-3 mt-1">
                  <GraduationCap size={14} />
                </span>
                Esteemed institutions with experienced faculty
              </li>
              <li className="flex items-start">
                <span className="bg-blue-100 text-blue-700 rounded-full p-1 mr-3 mt-1">
                  <CalendarCheck size={14} />
                </span>
                Diverse clinical exposure across multiple specialties
              </li>
              <li className="flex items-start">
                <span className="bg-blue-100 text-blue-700 rounded-full p-1 mr-3 mt-1">
                  <Building2 size={14} />
                </span>
                Strong industry connections for placements
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center">
          BSc Nursing Fees in Bangalore: 2025 Overview
        </h2>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="border-blue-200">
            <CardHeader className="bg-blue-50">
              <CardTitle className="text-blue-800 flex items-center">
                <DollarSign className="mr-2" /> Government Colleges
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="text-gray-700 mb-2">
                Typically range from{" "}
                <span className="font-semibold">₹10,000 to ₹50,000</span> per
                year
              </p>
              <p className="text-sm text-gray-600">
                Lower fees but highly competitive admissions through entrance
                exams
              </p>
            </CardContent>
          </Card>
          <Card className="border-blue-200">
            <CardHeader className="bg-blue-50">
              <CardTitle className="text-blue-800 flex items-center">
                <DollarSign className="mr-2" /> Private Colleges
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="text-gray-700 mb-2">
                Range between{" "}
                <span className="font-semibold">₹50,000 and ₹3,00,000</span>{" "}
                annually
              </p>
              <p className="text-sm text-gray-600">
                Varies based on college reputation, facilities, and location
              </p>
            </CardContent>
          </Card>
        </div>
        <p className="text-gray-600 text-center">
          Additional expenses may include hostel accommodation
          (₹60,000-₹1,20,000/year), uniforms, books, and examination fees.
        </p>
      </section>

      {/* Top Colleges */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center">
          Top BSc Nursing Colleges in Bangalore with Fees
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-50 text-blue-800">
                <th className="p-3 text-left border-b border-blue-200">
                  College Name
                </th>
                <th className="p-3 text-left border-b border-blue-200">
                  Annual Fees
                </th>
                <th className="p-3 text-left border-b border-blue-200">
                  Recognition
                </th>
              </tr>
            </thead>
            <tbody>
              {colleges.map((college, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-white" : "bg-blue-50"}
                >
                  <td className="p-3 border-b border-blue-100">
                    {college.name}
                  </td>
                  <td className="p-3 border-b border-blue-100 font-medium">
                    {college.fee}
                  </td>
                  <td className="p-3 border-b border-blue-100 text-sm">
                    {college.recognition}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Selection Tips */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center">
          How to Choose the Right BSc Nursing College
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <ClipboardList className="text-blue-700" size={20} />
              </div>
              <CardTitle className="text-lg">Accreditation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-sm">
                Ensure the college is approved by the Indian Nursing Council
                (INC) and affiliated with a reputed university.
              </p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                {/* <Scalpel className="text-blue-700" size={20} /> */}
              </div>
              <CardTitle className="text-lg">Clinical Exposure</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-sm">
                Opt for colleges with tie-ups with multi-specialty hospitals for
                practical training.
              </p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Building2 className="text-blue-700" size={20} />
              </div>
              <CardTitle className="text-lg">Placements</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-sm">
                Research the college's placement records and hospital
                partnerships.
              </p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <GraduationCap className="text-blue-700" size={20} />
              </div>
              <CardTitle className="text-lg">Infrastructure</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-sm">
                Check for modern labs, simulation centers, and library
                facilities.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-800 text-white rounded-xl p-8 mb-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">
            Need Personalized Guidance?
          </h2>
          <p className="mb-6">
            Navigating through the myriad of options can be overwhelming. Get
            expert help selecting the best BSc Nursing college in Bangalore that
            fits your budget and career goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="secondary"
              className="bg-white text-blue-800 hover:bg-gray-100"
            >
              <Phone className="mr-2" size={16} /> Call Now
            </Button>
            <Button
              variant="outline"
              className="text-white border-white hover:bg-blue-700"
            >
              <Mail className="mr-2" size={16} /> Email Us
            </Button>
          </div>
        </div>
      </section>

      
    </div>
  );
}
