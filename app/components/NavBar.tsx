"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaPhone, FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const linkStyle =
    "text-sm font-medium text-primary hover:text-secondary transition-colors";

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="px-4 sticky top-0 z-50 w-full border-b bg-[#FEFEFE]/95 backdrop-blur supports-[backdrop-filter]:bg-[#FEFEFE]/60">
      <div className="flex h-16 items-center justify-between">
        <Link href="/" className="p-4 flex items-center space-x-2">
          <Image
            src="/logo2.png"
            alt="logo"
            width={100}
            height={50}
            className="w-auto h-8 md:h-10" // Responsive logo sizing
          />
        </Link>

        {/* Mobile menu button (hidden on desktop) */}
        <button
          className="md:hidden p-2 rounded-md text-primary focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>

        {/* Desktop Navigation (hidden on mobile) */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-12">
          <Link href="/" className={linkStyle}>
            Home
          </Link>
          <Link href="#about" className={linkStyle}>
            About us
          </Link>
          <Link href="#services" className={linkStyle}>
            Services
          </Link>
          <Link href="#contact" className={linkStyle}>
            Contact
          </Link>
        </nav>

        {/* Desktop Buttons (hidden on mobile) */}
        <div className="hidden md:flex items-center space-x-4">
          <Button asChild variant="outline">
            <Link
              href="tel:+919740568622"
              className="flex items-center gap-2 text-primary"
            >
              <FaPhone className="h-4 w-4" />
              <span>+91 9740568622</span>
            </Link>
          </Button>
          <Button asChild className="hover:bg-secondary text-white">
            <Link href="#contact">Get Started</Link>
          </Button>
        </div>
      </div>

      {/* Mobile Menu (shown when toggled) */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white pb-4 px-4 shadow-lg">
          <nav className="flex flex-col space-y-4">
            <Link href="/" className={linkStyle} onClick={toggleMobileMenu}>
              Home
            </Link>
            <Link
              href="#about"
              className={linkStyle}
              onClick={toggleMobileMenu}
            >
              About us
            </Link>
            <Link
              href="#services"
              className={linkStyle}
              onClick={toggleMobileMenu}
            >
              Services
            </Link>
            <Link
              href="#contact"
              className={linkStyle}
              onClick={toggleMobileMenu}
            >
              Contact
            </Link>
          </nav>

          <div className="mt-4 flex flex-col space-y-3">
            <Button asChild variant="outline" className="w-full">
              <Link
                href="tel:+919740568622"
                className="flex items-center justify-center gap-2 text-primary"
                onClick={toggleMobileMenu}
              >
                <FaPhone className="h-4 w-4" />
                <span>Call Us</span>
              </Link>
            </Button>
            <Button asChild className="w-full hover:bg-secondary text-white">
              <Link href="#contact" onClick={toggleMobileMenu}>
                Get Started
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
