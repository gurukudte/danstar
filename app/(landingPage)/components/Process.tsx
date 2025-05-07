import { motion } from "framer-motion";

export function Process() {
  const steps = [
    {
      title: "Initial Consultation",
      description: "We understand your goals and academic background",
      icon: "🗣️",
    },
    {
      title: "University Shortlisting",
      description: "Curated list of best-fit institutions",
      icon: "🏫",
    },
    {
      title: "Application Preparation",
      description: "Crafting compelling applications",
      icon: "📄",
    },
    {
      title: "Admission & Visa",
      description: "Securing your seat and travel documents",
      icon: "✈️",
    },
  ];

  return (
    <section id="process" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our 4-Step Process
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Simple, transparent and stress-free journey to your dream university
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute top-16 left-1/2 transform -translate-x-1/2 h-1 w-3/4 bg-gradient-to-r from-blue-200 to-indigo-200"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative inline-flex items-center justify-center w-16 h-16 mb-4 text-3xl bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full">
                  {step.icon}
                  <div className="absolute -inset-2 border-2 border-blue-200 rounded-full animate-ping opacity-0"></div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
