import { motion } from "framer-motion";
import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  FaBookOpen,
  FaBriefcase,
  FaClipboardList,
  FaEnvelope,
  FaGraduationCap,
  FaPhone,
  FaRocket,
  FaUser,
  FaUsers,
} from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useAppDispatch } from "@/redux/hooks";
import { addLead } from "../dashboard/leads/leadSlice";
// Form validation schema
const leadFormSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().min(10, { message: "Phone must be at least 10 digits" }),
  serviceType: z.string().min(1, { message: "Please select a service" }),
  message: z.string().optional(),
});

type LeadFormValues = z.infer<typeof leadFormSchema>;

export const services = [
  {
    icon: <FaGraduationCap className="w-6 h-6" />,
    title: "Admission Support",
    description:
      "Innovative recruitment strategies and targeted marketing campaigns designed to connect you with passionate students.",
  },
  {
    icon: <FaBriefcase className="w-6 h-6" />,
    title: "Internship Placement",
    description:
      "Diverse internships across industries matching your skills with leading companies.",
  },
  {
    icon: <FaUsers className="w-6 h-6" />,
    title: "Consultancy",
    description:
      "Strategic guidance delivering measurable improvements and long-term value.",
  },
  {
    icon: <FaRocket className="w-6 h-6" />,
    title: "Training & Soft Skills",
    description:
      "Comprehensive upskilling to boost confidence and embrace continuous learning.",
  },
  {
    icon: <FaClipboardList className="w-6 h-6" />,
    title: "Placement Assistance",
    description:
      "Connecting you with top companies to accelerate your career growth.",
  },
  {
    icon: <FaBookOpen className="w-6 h-6" />,
    title: "Dissertation Guidance",
    description:
      "Meticulous editing, statistical analysis, and research support.",
  },
];

export function LeadForm() {
  const dispatch = useAppDispatch();
  const form = useForm<LeadFormValues>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      serviceType: "",
      message: "",
    },
  });
  const onSubmit = async (data: LeadFormValues) => {
    try {
      // Dispatch the addLead action and unwrap the result
      await dispatch(addLead(data)).unwrap();

      // Only show success toast and reset if the API call succeeds
      toast.success("Thank you for your interest! We will contact you soon.");
      form.reset();
    } catch (err) {
      const error = err as { message?: string };
      toast.error(error.message || "Failed to submit form. Please try again.");
    }
  };
  return (
    <section id="contact" className="py-20 bg-secondary-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 sm:p-10 rounded-xl shadow-lg"
        >
          <h2 className="text-3xl font-bold text-secondary mb-6 text-center">
            Get in Touch
          </h2>
          <p className="text-lg text-secondary-foreground mb-8 text-center">
            Fill out the form below and our team will contact you shortly.
          </p>

          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-secondary">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-secondary mb-1"
                >
                  Full Name <span className="text-primary">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-secondary-400">
                    <FaUser className="h-5 w-5" />
                  </div>
                  <input
                    id="name"
                    type="text"
                    {...form.register("fullName")}
                    className="pl-10 block w-full rounded-md  shadow-sm  py-3"
                    placeholder="John Doe"
                  />
                </div>
                {form.formState.errors.fullName && (
                  <p className="mt-1 text-sm text-destructive">
                    {form.formState.errors.fullName.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-secondary mb-1"
                >
                  Email <span className="text-primary">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-secondary-400">
                    <FaEnvelope className="h-5 w-5" />
                  </div>
                  <input
                    id="email"
                    type="email"
                    {...form.register("email")}
                    className="pl-10 block w-full rounded-md shadow-sm py-3"
                    placeholder="john@example.com"
                  />
                </div>
                {form.formState.errors.email && (
                  <p className="mt-1 text-sm text-destructive">
                    {form.formState.errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-secondary mb-1"
                >
                  Phone <span className="text-primary">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center justify-center gap-2 pointer-events-none text-secondary-400">
                    <FaPhone className="h-5 w-5" />
                    <span>+91</span>
                  </div>
                  <input
                    id="phone"
                    type="number"
                    maxLength={10}
                    {...form.register("phone")}
                    className=" pl-18 block w-full rounded-md shadow-sm  py-3"
                    placeholder="9876543210"
                  />
                </div>
                {form.formState.errors.phone && (
                  <p className="mt-1 text-sm text-destructive">
                    {form.formState.errors.phone.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="serviceInterest"
                className="block text-sm font-medium text-secondary mb-1"
              >
                Service of Interest <span className="text-primary">*</span>
              </label>
              <select
                id="serviceType"
                {...form.register("serviceType")}
                className="block w-full rounded-md shadow-sm py-3"
              >
                <option value="">Select a service</option>
                {services.map((service) => (
                  <option
                    className="p-4"
                    key={service.title}
                    value={service.title}
                  >
                    {service.title}
                  </option>
                ))}
              </select>
              {form.formState.errors.serviceType && (
                <p className="mt-1 text-sm text-destructive">
                  {form.formState.errors.serviceType.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-secondary mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                {...form.register("message")}
                className="p-4 block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                placeholder="Tell us about your requirements..."
              ></textarea>
            </div>

            <div className="flex justify-center">
              <Button
                variant="default"
                type="submit"
                className="w-full text-background bg-primary hover:bg-primary-700 py-4 px-8 font-semibold "
                disabled={form.formState.isSubmitting}
              >
                {form.formState.isSubmitting
                  ? "Submitting..."
                  : "Submit Request"}
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
