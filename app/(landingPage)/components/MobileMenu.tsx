import { motion } from "framer-motion";

export function MobileMenu({
  setIsMenuOpen,
}: {
  setIsMenuOpen: (value: boolean) => void;
}) {
  return (
    <motion.div
      className="fixed inset-0 z-40 bg-white/95 backdrop-blur-md md:hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="container mx-auto px-6 py-20 flex flex-col space-y-8">
        {["Home", "Services", "Universities", "Testimonials", "Contact"].map(
          (item, i) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-2xl font-medium text-gray-800"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </motion.a>
          )
        )}
      </div>
    </motion.div>
  );
}
