import {
  FiAward,
  FiTrendingUp,
  FiUsers,
  FiShield,
  FiBriefcase,
  FiBarChart2,
} from "react-icons/fi";
import Image from "next/image";

export function LearningOutcomes() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header with decorative elements */}
        <div className="text-center mb-16 relative">
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-blue-600 rounded-full"></div>
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            WHAT YOU'LL LEARN
          </h2>
          <h3 className="text-2xl font-semibold text-blue-600">Key Outcomes</h3>
        </div>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column - Image */}
          <div className="relative h-full min-h-[400px] rounded-xl overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
              alt="Business professionals learning"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>

          {/* Right Column - Outcomes */}
          <div className="space-y-8">
            {[
              {
                icon: <FiTrendingUp className="w-6 h-6 text-blue-600" />,
                text: "Transition into leadership roles across domains",
              },
              {
                icon: <FiBarChart2 className="w-6 h-6 text-blue-600" />,
                text: "Use AI tools and data to drive strategic business decisions",
              },
              {
                icon: <FiAward className="w-6 h-6 text-blue-600" />,
                text: "Gain executive presence with guidance on communication, change management and negotiation",
              },
              {
                icon: <FiUsers className="w-6 h-6 text-blue-600" />,
                text: "Join a powerful peer network across industries",
              },
              {
                icon: <FiShield className="w-6 h-6 text-blue-600" />,
                text: "Future proof career with in-demand AI skills applied to traditional decisions",
              },
              {
                icon: <FiBriefcase className="w-6 h-6 text-blue-600" />,
                text: "Receive tailored career support and placement guidance",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="p-2 bg-blue-50 rounded-full">{item.icon}</div>
                <p className="text-lg text-gray-700 flex-1">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
