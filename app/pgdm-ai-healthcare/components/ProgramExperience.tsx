import {
  FiCalendar,
  FiLayers,
  FiUsers,
  FiHome,
  FiTool,
  FiUser,
  FiClock,
} from "react-icons/fi";

export function ProgramExperience() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            WHAT YOU'LL EXPERIENCE
          </h2>
          <h3 className="text-2xl font-semibold text-blue-600">
            Program Features
          </h3>
          <div className="w-24 h-1 bg-blue-400 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: <FiCalendar className="w-6 h-6" />,
              title: "Format",
              desc: "Rigourous weekend classes through e-learning, manageable with on-going professional commitment.",
            },
            {
              icon: <FiLayers className="w-6 h-6" />,
              title: "Simulation-Based Masterclasses",
              desc: "Go beyond theoretical learning with case-study & real-world decision making through high impact simulations.",
            },
            {
              icon: <FiHome className="w-6 h-6" />,
              title: "In-Person Experience",
              desc: "Unique pedagogy that offers immersive classroom-like experiential learning with M Learning Studio.",
            },
            {
              icon: <FiUsers className="w-6 h-6" />,
              title: "Peer Networking",
              desc: "Build valuable connections with JAGSoM alumni and in-cohort peers on the same professional journey as you.",
            },
            {
              icon: <FiHome className="w-6 h-6" />,
              title: "On Campus Experience",
              desc: "Optional immersion at the Jagdish Sheth of School of Management for a holistic learning and networking experience.",
            },
            {
              icon: <FiTool className="w-6 h-6" />,
              title: "Key Tools",
              desc: "Learn and master in-demand tools like ChatGPT, Notion AI, Data Platforms, Project Simulator.",
            },
            {
              icon: <FiUser className="w-6 h-6" />,
              title: "1:1 Mentorship",
              desc: "Personalised guidance from industry stalwarts and C Suite Executives with rich domain expertise.",
            },
            {
              icon: <FiClock className="w-6 h-6" />,
              title: "Weekly Commitment",
              desc: "6-8 hours classes for weekends, 24 hours weekly courseware.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-900">
                  {feature.title}
                </h4>
              </div>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
