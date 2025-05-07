import { motion } from "framer-motion";

export function Features() {
  const features = [
    {
      icon: "🎯",
      title: "Personalized Roadmap",
      description:
        "Tailored education plan matching your goals, skills and budget",
    },
    {
      icon: "🌍",
      title: "Global Opportunities",
      description: "Access to top universities across 25+ countries",
    },
    {
      icon: "📝",
      title: "Application Crafting",
      description:
        "Expert help with essays, resumes and recommendation letters",
    },
    {
      icon: "💼",
      title: "Career Alignment",
      description: "Programs selected for maximum career potential",
    },
    {
      icon: "💰",
      title: "Scholarship Access",
      description: "Exclusive scholarship opportunities for our students",
    },
    {
      icon: "🛂",
      title: "Visa Assistance",
      description: "Complete guidance through the visa application process",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Comprehensive Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need for successful university admissions in one
            place
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
