// app/blogs/page.tsx

"use client";

import { FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function BlogPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12 text-base leading-relaxed">
      <h1 className="text-4xl font-bold text-primary mb-6">
        Unlock Your True Potential: Best Career Counselling in Bangalore for
        Students and Professionals
      </h1>

      {/* Header Image Placeholder */}
      <div className="relative w-full h-60 bg-gradient-to-r from-red-500 to-pink-500 flex items-center justify-center text-white text-xl font-semibold mb-10 rounded-lg">
        Career Confusion? Danstar Has the Answer!
      </div>

      {/* Section 1 */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">
          Why Career Counselling in Bangalore Matters
        </h2>
        <p>
          Bangalore is a city full of opportunities, but with so many options,
          choosing the right career can be overwhelming. That’s why{" "}
          <strong>career counselling in Bangalore</strong> is essential. It
          brings clarity, confidence, and direction—whether you’re a student or
          a professional.
        </p>
      </section>

      {/* Section 2 */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">
          What Is Career Counselling and Who Needs It?
        </h2>
        <p>
          <strong>Career guidance in Bangalore</strong> is a structured process
          that helps you understand your interests, values, and abilities to
          make the right career decisions. Whether you're in Class 10,
          graduating, or switching careers, the{" "}
          <strong>best career counselling in Bangalore</strong> helps avoid
          costly mistakes.
        </p>
      </section>

      {/* Section 3 */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          Top 10 Reasons to Choose the Best Career Counselling in Bangalore
        </h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>Overcome career confusion</li>
          <li>Identify your true passion</li>
          <li>
            Get access to expert{" "}
            <strong>career consultants in Bangalore</strong>
          </li>
          <li>Receive data-driven psychometric assessments</li>
          <li>Personalized career roadmap</li>
          <li>Explore local & international opportunities</li>
          <li>Save money by avoiding wrong decisions</li>
          <li>Build confidence</li>
          <li>Boost academic or professional performance</li>
          <li>Stay ahead in a competitive world</li>
        </ol>
      </section>

      {/* Section 4 */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">
          Meet Danstar – The Best Career Counselling in Bangalore
        </h2>
        <p>
          Danstar offers personalized{" "}
          <strong>career counselling in Bangalore for students</strong>. With
          certified counsellors and 10+ years of experience, we guide you
          through choosing the right stream, course, or career.
        </p>
        <ul className="list-disc list-inside mt-3 space-y-1">
          <li>Free discovery session</li>
          <li>Career Interest & Aptitude tests</li>
          <li>Personalized reports</li>
          <li>Online & Offline counselling</li>
          <li>Study in India & Abroad guidance</li>
        </ul>
      </section>

      {/* Section 5 */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">
          What to Expect in a Danstar Counselling Session
        </h2>
        <p>
          From the moment you reach out, our{" "}
          <strong>career counselling in Bangalore</strong> is smooth,
          interactive, and effective.
        </p>
        <p className="mt-2">Steps:</p>
        <ul className="list-decimal list-inside ml-4 space-y-1">
          <li>Discovery Call</li>
          <li>Career Test</li>
          <li>Report Analysis</li>
          <li>1-on-1 Discussion</li>
          <li>Personalized Career Plan</li>
          <li>Follow-up Support</li>
        </ul>
      </section>

      {/* Section 6 */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Student Success Stories</h2>
        <blockquote className="border-l-4 border-primary pl-4 italic mb-3">
          "Danstar helped me move from engineering confusion to UX design
          clarity!" – Arjun, 24
        </blockquote>
        <blockquote className="border-l-4 border-primary pl-4 italic">
          "I thought NEET was my only path. Now I’m happily studying
          Psychology!" – Sneha, 17
        </blockquote>
      </section>

      {/* Section 7 */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">
          Areas We Serve in Bangalore
        </h2>
        <p>
          From <strong>Koramangala</strong> to <strong>Whitefield</strong>,{" "}
          <strong>JP Nagar</strong> to <strong>Electronic City</strong>, Danstar
          provides both in-person and online{" "}
          <strong>career guidance in Bangalore</strong>.
        </p>
        <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
          <FaMapMarkerAlt className="text-primary" />
          Serving all major areas of Bangalore
        </div>
      </section>

      {/* Section 8 */}
      <section className="mb-10">
        <div className="p-6 bg-secondary rounded-lg text-center text-white space-y-4">
          <h2 className="text-xl font-semibold">
            🎯 Discover Your Top 3 Career Matches!
          </h2>
          <div className="flex gap-4 justify-center">
            <Button asChild variant="default">
              <Link href="https://danstar.in" target="_blank">
                Take the FREE Career Interest Test
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link
                href="https://wa.me/919740568622"
                target="_blank"
                className="flex items-center gap-2"
              >
                <FaWhatsapp className="w-4 h-4" />
                Chat on WhatsApp
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Section 9 */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-2">Final Word</h2>
        <p>
          The best investment you can make is in yourself. Let Danstar’s expert{" "}
          <strong>career consultants in Bangalore</strong>
          help you unlock your potential. Don't leave your future to chance—take
          control today.
        </p>
      </section>
    </main>
  );
}
