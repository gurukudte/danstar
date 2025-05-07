import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  resetForm,
  setContactData,
  setError,
  setStatus,
} from "@/store/slices/contactSlice";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export function ContactForm() {
  const dispatch = useAppDispatch();
  const { name, email, phone, message, status, error } = useAppSelector(
    (state) => state.contact
  );
  const router = useRouter();

  const handleChange = (e: { target: { name: string; value: string } }) => {
    dispatch(setContactData({ [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    dispatch(setStatus("loading"));

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      dispatch(setStatus("succeeded"));
      dispatch(resetForm());

      // Redirect to thank you page after 2 seconds
      setTimeout(() => {
        router.push("/thank-you");
      }, 2000);
    } catch (err) {
      console.log("Something went wrong", err);
      dispatch(setError("Submission failed. Please try again."));
      dispatch(setStatus("failed"));
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Schedule a free consultation with our experts today
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div whileHover={{ scale: 1.01 }}>
                <label className="block text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  required
                />
              </motion.div>

              <motion.div whileHover={{ scale: 1.01 }}>
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  required
                />
              </motion.div>
            </div>

            <motion.div whileHover={{ scale: 1.01 }}>
              <label className="block text-gray-700 mb-2">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                required
              />
            </motion.div>

            <motion.div whileHover={{ scale: 1.01 }}>
              <label className="block text-gray-700 mb-2">
                Your Educational Goals
              </label>
              <textarea
                name="message"
                value={message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                required
              ></textarea>
            </motion.div>

            <motion.button
              type="submit"
              disabled={status === "loading"}
              className={`w-full py-4 px-6 rounded-lg text-white font-medium text-lg ${
                status === "loading"
                  ? "bg-blue-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
              } transition-all shadow-lg hover:shadow-xl`}
              whileTap={{ scale: status === "loading" ? 1 : 0.98 }}
            >
              {status === "loading" ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Processing...
                </span>
              ) : (
                "Book Free Consultation"
              )}
            </motion.button>

            {status === "succeeded" && (
              <motion.div
                className="p-4 bg-green-50 text-green-700 rounded-lg text-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Thank you! Redirecting to confirmation page...
              </motion.div>
            )}

            {error && (
              <motion.div
                className="p-4 bg-red-50 text-red-700 rounded-lg text-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {error}
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
