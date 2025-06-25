import {
  FiZap,
  FiBook,
  FiTool,
  FiBriefcase,
  FiUsers,
  FiTrendingUp,
} from "react-icons/fi";

export function HealthcareExperience() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-4 text-blue-600">
            <FiZap className="w-6 h-6 mr-2" />
            <span className="font-semibold">What You'll Experience</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            A Transformative Journey for Healthcare Trailblazers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The PGDM EDGE – Healthcare Specialisation isn't just a degree—it's a
            guided experience that prepares you to lead the AI-powered
            revolution in healthcare.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: <FiBook className="w-6 h-6" />,
              title: "Learn with Purpose",
              desc: "Dive into healthcare systems, strategy, and AI-led clinical innovation through a carefully designed curriculum. Master digital tools and policy frameworks shaping healthcare management.",
            },
            {
              icon: <FiTool className="w-6 h-6" />,
              title: "Build Future-Ready Skills",
              desc: "Get hands-on with AI and digital health platforms—understand informatics, risk analytics, and hospital operations. Develop strategic decision-making and leadership skills.",
            },
            {
              icon: <FiBriefcase className="w-6 h-6" />,
              title: "Engage with the Industry",
              desc: "Gain insights directly from CXOs during immersive roundtables. Participate in capstone boardroom simulations pitching real-world healthcare solutions.",
            },
            {
              icon: <FiUsers className="w-6 h-6" />,
              title: "Collaborate, Lead, Grow",
              desc: "Connect with a diverse peer group from healthcare sectors. Take ownership through student-led events and workshops fostering creative leadership.",
            },
            {
              icon: <FiTrendingUp className="w-6 h-6" />,
              title: "Activate Your Career",
              desc: "Access a dedicated Career Engine™ for resume polishing, AI-assisted interview prep, and placement support in top healthcare organizations.",
            },
            {
              icon: <FiZap className="w-6 h-6" />,
              title: "Live Transformation",
              desc: "Work on live capstone projects that become launchpads for roles in strategy, consulting, digital health, and policy. Experience education that transforms.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 flex flex-col h-full"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-900">
                  {feature.title}
                </h4>
              </div>
              <p className="text-gray-600 flex-grow">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
