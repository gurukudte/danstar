import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden py-20 md:py-32">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            className="md:w-1/2 mb-12 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Launch Your <span className="text-blue-600">Dream Career</span>{" "}
              With Us
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              We bridge the gap between your aspirations and top global
              universities with personalized counseling and end-to-end admission
              support.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <motion.a
                href="#contact"
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg shadow-lg hover:shadow-xl transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Free Consultation
              </motion.a>
              <motion.a
                href="#services"
                className="px-8 py-3 bg-white text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Our Services
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-full h-full border-2 border-blue-300 rounded-2xl"></div>
              <div className="relative bg-white p-2 rounded-2xl shadow-2xl overflow-hidden">
                <div className="h-80 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-xl flex items-center justify-center text-white">
                  <div className="text-center p-6">
                    <div className="text-5xl mb-4">🎓</div>
                    <h3 className="text-2xl font-bold mb-2">
                      Your Future Starts Here
                    </h3>
                    <p className="opacity-90">Let us guide you to success</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
