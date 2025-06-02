"use client";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import Image from "next/image";

const services = [
  { name: "Admission Guidance", href: "#services" },
  { name: "Career Counseling", href: "#services" },
  { name: "Scholarship Assistance", href: "#services" },
  { name: "Documentation Support", href: "#services" },
];

export default function Footer() {
  return (
    <footer className="bg-secondary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="mb-4 flex items-center space-x-2">
              {/* <span className="text-xl font-bold text-[#034D7A]">DANSTAR</span> */}
              <Image
                src="/logo2.png" // Note: path is relative to public folder
                alt="logo"
                width={200}
                height={150}
              />
            </Link>
            <p className="text-gray-400">
              Your trusted partner for healthcare education admissions in
              Bangalore and across India.
            </p>
            <div className="flex space-x-4 mt-4">
              <Link href="#contact" className="text-gray-400 hover:text-white">
                <FaFacebook className="h-5 w-5" />
              </Link>
              <Link href="#contact" className="text-gray-400 hover:text-white">
                <FaTwitter className="h-5 w-5" />
              </Link>
              <Link href="#contact" className="text-gray-400 hover:text-white">
                <FaLinkedin className="h-5 w-5" />
              </Link>
              <Link href="#contact" className="text-gray-400 hover:text-white">
                <FaInstagram className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-gray-400 hover:text-white"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <address className="text-gray-400 not-italic">
              <p>Email: info@danstar.in</p>
              <p>Phone: +91 9740568622</p>
              <p>Website: www.danstar.in</p>
            </address>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Danstar OPC Pvt Ltd. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
