import {
  Globe,
  GraduationCap,
  BookOpen,
  FileText,
  Award,
  BadgeCheck,
  Users,
  Mail,
  Phone,
} from "lucide-react";
import Image from "next/image";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Hero Image */}
      <header className="relative h-96 w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-indigo-800/80 z-10">
          <div className="container mx-auto h-full flex flex-col justify-center px-4 md:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Your Dream University Awaits
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Danstar Will Guide You!
            </p>
            <div className="flex gap-4">
              <button className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                Get Free Consultation
              </button>
              <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition">
                Our Services
              </button>
            </div>
          </div>
        </div>
        <Image
          src="/hero-image.jpg" // Replace with your actual image path
          alt="Confident student holding passport and acceptance letter"
          fill
          className="object-cover"
          priority
        />
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 md:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Best Education Consultants in India: Your Trusted Pathway to Success
          </h2>
          <div className="prose max-w-none text-gray-700">
            <p className="text-lg leading-relaxed mb-6">
              In a rapidly globalizing world, choosing the right academic path
              is more critical—and more confusing—than ever. Students and
              parents alike often feel overwhelmed by the myriad of choices in
              courses, colleges, entrance exams, scholarships, and study abroad
              destinations. This is where{" "}
              <strong>education consultants in India</strong> come in as
              game-changers.
            </p>
            <p className="text-lg leading-relaxed">
              With thousands of students securing admissions every year in India
              and abroad,{" "}
              <strong>the best education consultants in India</strong> are
              playing a vital role in shaping successful careers.
            </p>
          </div>
        </section>

        {/* Who Are Education Consultants */}
        <section className="mb-16 bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <GraduationCap className="text-blue-600" size={28} />
            Who Are Education Consultants?
          </h2>
          <div className="prose max-w-none text-gray-700">
            <p className="text-lg leading-relaxed">
              <strong>Education consultants</strong> are professionals who help
              students make informed decisions about their academic and
              professional futures. From selecting the right stream in Class 10
              or 12 to applying for top universities abroad, these experts offer
              personalized guidance based on a student's interests, aptitude,
              and career goals.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              Whether you're planning to study in India or abroad, partnering
              with experienced <strong>education consultants in India</strong>{" "}
              can streamline the process and increase your chances of success.
            </p>
          </div>
        </section>

        {/* Why You Need Education Consultants */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            Why You Need the Best Education Consultants in India
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Here's why thousands of students and parents rely on{" "}
            <strong>top education consultants in India</strong> every year:
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Award className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Expert Career Guidance
              </h3>
              <p className="text-gray-700">
                With changing job markets and emerging career options, choosing
                the right course can be tricky. The{" "}
                <strong>best education consultants in India</strong> offer
                psychometric tests, career assessments, and one-on-one
                counseling to align your choices with your personality and
                strengths.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
              <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <BookOpen className="text-indigo-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                College and Course Selection
              </h3>
              <p className="text-gray-700">
                India has over 45,000 colleges and hundreds of courses. Picking
                the right one without expert help is like finding a needle in a
                haystack. That's where the{" "}
                <strong>education consultants in India</strong> come to the
                rescue—curating options that fit your aspirations, budget, and
                eligibility.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Globe className="text-green-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Study Abroad Services
              </h3>
              <p className="text-gray-700">
                Planning to study in the USA, UK, Canada, Australia, or Europe?
                The <strong>best education consultants in India</strong> will
                help you navigate admission timelines, SOPs, visa paperwork, and
                scholarship opportunities, ensuring a smooth transition to your
                dream university.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <FileText className="text-purple-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Application & Admission Support
              </h3>
              <p className="text-gray-700">
                A perfectly crafted application can make all the difference.
                Education consultants help prepare strong Statements of Purpose
                (SOPs), Letters of Recommendation (LORs), resumes, and
                more—boosting your chances of admission to top colleges.
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
              <div className="bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <BadgeCheck className="text-amber-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Entrance Coaching & Test Prep
              </h3>
              <p className="text-gray-700">
                Many <strong>education consultants in India</strong> also offer
                coaching for exams like NEET, JEE, IELTS, TOEFL, GRE, GMAT, and
                SAT, giving you a one-stop solution for your academic journey.
              </p>
            </div>
          </div>
        </section>

        {/* Key Services */}
        <section className="mb-16 bg-blue-50 rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            Key Services Offered by the Best Education Consultants in India
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Career Counselling and Profile Analysis",
              "Course and University Shortlisting (India & Abroad)",
              "Application Form Filling and Submission",
              "SOP, LOR, and Resume Drafting Support",
              "Visa Guidance and Financial Counselling",
              "Test Prep for Entrance and Language Exams",
              "Pre-Departure and Travel Assistance",
              "Loan & Scholarship Support",
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <Check className="text-blue-600" size={18} />
                  </div>
                  <span className="font-medium text-gray-800">{service}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Danstar */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Why Danstar Is Among the Best Education Consultants in India
          </h2>
          <div className="bg-gradient-to-r from-blue-900 to-indigo-800 rounded-xl p-8 text-white">
            <p className="text-lg mb-6">
              At Danstar, we believe in empowering students to reach their full
              potential. As one of the{" "}
              <strong>best education consultants in India</strong>, our expert
              team provides personalized support for:
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {[
                "UG & PG admissions in India",
                "MBBS, Nursing, Allied Health & Pharmacy counseling",
                "Study abroad options in 20+ countries",
                "Psychometric-based career counselling",
                "Scholarship and loan application support",
                "Admission tracking and post-admit services",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check
                    className="text-green-300 mt-1 flex-shrink-0"
                    size={18}
                  />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <p className="text-lg">
              Our success stories range from students getting into AIIMS and
              Manipal to those pursuing their master's in top universities in
              Canada and the UK.
            </p>
          </div>
        </section>

        {/* Testimonial */}
        <section className="mb-16">
          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <div className="bg-gray-100 h-full rounded-lg p-6 flex flex-col items-center justify-center">
                  <Users className="text-gray-400 mb-4" size={40} />
                  <div className="text-center">
                    <p className="font-bold text-gray-900">Ananya Raj</p>
                    <p className="text-gray-600">Ranchi</p>
                  </div>
                </div>
              </div>
              <div className="md:w-2/3">
                <blockquote className="text-lg italic text-gray-700 mb-4">
                  "Danstar helped me get admission into a top Nursing college in
                  Bangalore and also guided my sister for MS in Canada. They are
                  the most genuine education consultants in India!"
                </blockquote>
                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="text-yellow-400 fill-current"
                      size={20}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Choosing the Right Consultant */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Choosing the Right Consultant: What to Look For
          </h2>
          <div className="bg-white rounded-xl shadow-md p-8">
            <p className="text-lg text-gray-700 mb-6">
              Before choosing from the many{" "}
              <strong>education consultants in India</strong>, ensure they:
            </p>

            <ul className="grid md:grid-cols-2 gap-4">
              {[
                "Are experienced and certified",
                "Offer transparent pricing and services",
                "Have a good track record and student testimonials",
                "Provide both online and offline support",
                "Are updated with current admission trends and visa policies",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle
                    className="text-green-500 mt-1 flex-shrink-0"
                    size={18}
                  />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Final Thoughts */}
        <section className="mb-16 bg-gray-100 rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Final Thoughts
          </h2>
          <div className="prose max-w-none text-gray-700">
            <p className="text-lg leading-relaxed mb-4">
              India has no shortage of educational dreams. But turning those
              dreams into reality requires the right mentorship. That's where
              the <strong>best education consultants in India</strong> step
              in—with knowledge, tools, and experience that can help you unlock
              a brighter, more successful future.
            </p>
            <p className="text-lg leading-relaxed">
              Whether you want to study in India's top colleges or aim for Ivy
              League institutions abroad,{" "}
              <strong>education consultants in India</strong> like Danstar are
              your trusted partners in the journey.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl p-8 text-white text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Contact Danstar today and take the first step towards your dream
            education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition flex items-center justify-center gap-2">
              <Mail size={18} />
              Email Us
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition flex items-center justify-center gap-2">
              <Phone size={18} />
              Call Now
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

// Helper components for icons
function Check({ className, size }: { className?: string; size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || 24}
      height={size || 24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  );
}

function Star({ className, size }: { className?: string; size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || 24}
      height={size || 24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
    </svg>
  );
}

function CheckCircle({
  className,
  size,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || 24}
      height={size || 24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
  );
}
