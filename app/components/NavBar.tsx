"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaPhone, FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ContactFormDialog } from "@/components/ContactFormDialog";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80"
          : "bg-background/80"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2"
            onClick={closeMobileMenu}
          >
            <Image
              src="/logo2.png"
              alt="Danstar Education Logo"
              width={120}
              height={40}
              className="w-auto h-8 md:h-10"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Link
              href="/"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/courses"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Courses
            </Link>
            <Link
              href="/services"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Services
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Success Stories
            </Link>
            <Link
              href="/blogs"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Blogs
            </Link>
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              asChild
              variant="ghost"
              className="gap-2 text-foreground hover:text-primary"
            >
              <Link href="tel:+919740568622">
                <FaPhone className="h-4 w-4" />
                <span>+91 9740576722</span>
              </Link>
            </Button>
            <ContactFormDialog buttonText="Free consultation"/>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-foreground focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border/50 shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-3">
              <Link
                href="/"
                className="py-2 px-3 rounded-md text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                onClick={closeMobileMenu}
              >
                Home
              </Link>
              <Link
                href="#about"
                className="py-2 px-3 rounded-md text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                onClick={closeMobileMenu}
              >
                About Us
              </Link>
              <Link
                href="#courses"
                className="py-2 px-3 rounded-md text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                onClick={closeMobileMenu}
              >
                Courses
              </Link>
              <Link
                href="#services"
                className="py-2 px-3 rounded-md text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
              <Link
                href="#testimonials"
                className="py-2 px-3 rounded-md text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                onClick={closeMobileMenu}
              >
                Success Stories
              </Link>
            </nav>

            <div className="mt-4 pt-4 border-t border-border/50 flex flex-col gap-3">
              <Button asChild variant="outline" className="w-full gap-2">
                <Link href="tel:+919740576722" onClick={closeMobileMenu}>
                  <FaPhone className="h-4 w-4" />
                  Call Now
                </Link>
              </Button>
              <Button
                asChild
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <Link href="#contact" onClick={closeMobileMenu}>
                  Free Consultation
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
