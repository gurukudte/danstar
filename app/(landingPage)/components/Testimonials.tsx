import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const testimonials = [
  {
    quote:
      "Danstart helped me get into my dream university with a full scholarship. Their guidance was invaluable throughout the entire process.",
    name: "Priya Sharma",
    university: "Stanford University",
    image: "👩‍🎓",
  },
  {
    quote:
      "The counselors understood my career goals and matched me with perfect programs. I'm now studying at Cambridge thanks to Danstart!",
    name: "Rahul Patel",
    university: "University of Cambridge",
    image: "👨‍🎓",
  },
  {
    quote:
      "From application to visa, Danstart handled everything professionally. I couldn't have managed this complex process alone.",
    name: "Ananya Gupta",
    university: "University of Toronto",
    image: "👩‍💼",
  },
];

export function Testimonial() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Success Stories
        </h2>

        <div className="relative h-64 md:h-80">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-16"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-6xl mb-6">
                {testimonials[currentTestimonial].image}
              </div>
              <p className="text-xl md:text-2xl mb-8 italic max-w-4xl">
                {testimonials[currentTestimonial].quote}
              </p>
              <div>
                <p className="font-bold text-lg">
                  {testimonials[currentTestimonial].name}
                </p>
                <p className="text-blue-100">
                  {testimonials[currentTestimonial].university}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              // onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full ${
                currentTestimonial === index ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
