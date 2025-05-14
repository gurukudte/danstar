"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaPhone } from "react-icons/fa";
import Image from "next/image";

export default function Navbar() {
  const linkStyle =
    "text-sm font-medium text-primary hover:text-secondary transition-colors";
  return (
    <header className="px-4 sticky top-0 z-50 w-full border-b bg-[#FEFEFE]/95 backdrop-blur supports-[backdrop-filter]:bg-[#FEFEFE]/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="p-4 flex items-center space-x-2">
          {/* <span className="text-xl font-bold text-[#034D7A]">DANSTAR</span> */}
          <Image
            src="/logo.png" // Note: path is relative to public folder
            alt="logo"
            width={100}
            height={50}
          />
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className={linkStyle}>
            Home
          </Link>
          <Link href="#services" className={linkStyle}>
            Services
          </Link>
          <Link href="#about" className={linkStyle}>
            About
          </Link>
          <Link href="#contact" className={linkStyle}>
            Contact
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Button asChild variant="outline" className="hidden md:flex ">
            <Link
              href="tel:+919633346168"
              className="flex items-center gap-2 text-primary"
            >
              <FaPhone className="h-4 w-4" />
              <span>+91 9633346168</span>
            </Link>
          </Button>
          <Button asChild className=" hover:bg-secondary text-white">
            <Link href="#contact">Get Started</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
