import { motion } from "framer-motion";

export function Footer() {
  const socialLinks = [
    { icon: "📱", label: "Instagram" },
    { icon: "💬", label: "WhatsApp" },
    { icon: "👔", label: "LinkedIn" },
    { icon: "📘", label: "Facebook" },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-4">
              Danstart
            </h3>
            <p className="text-gray-400 mb-6">
              Your trusted partner for global education opportunities and career
              success.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-lg hover:bg-blue-600 transition-colors"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {["Services", "Universities", "Resources", "Company"].map(
            (section, i) => (
              <motion.div
                key={section}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 + 0.2 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold mb-4">{section}</h4>
                <ul className="space-y-2">
                  {Array(3)
                    .fill(0)
                    .map((_, j) => (
                      <li key={j}>
                        <a
                          href="#"
                          className="text-gray-400 hover:text-blue-400 transition-colors"
                        >
                          {section} Link {j + 1}
                        </a>
                      </li>
                    ))}
                </ul>
              </motion.div>
            )
          )}
        </div>

        <motion.div
          className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p>
            &copy; {new Date().getFullYear()} Danstart. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
