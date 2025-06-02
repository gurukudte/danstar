import { motion } from "framer-motion";
import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  FaBrain,
  FaBriefcase,
  FaClipboardList,
  FaEnvelope,
  FaGlobe,
  FaGraduationCap,
  FaLaptopMedical,
  FaMicroscope,
  FaPhone,
  FaUser,
  FaUsers,
} from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useAppDispatch } from "@/redux/hooks";
import { addLead } from "../dashboard/leads/leadSlice";

// Enhanced form validation schema
const leadFormSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(50, { message: "Name must be less than 50 characters" })
    .regex(/^[a-zA-Z\s]+$/, {
      message: "Name can only contain letters and spaces",
    }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z
    .string()
    .min(10, { message: "Phone must be at least 10 digits" })
    .max(15, { message: "Phone must be less than 15 digits" })
    .regex(/^[0-9]+$/, { message: "Phone can only contain numbers" }),
  serviceType: z.string().min(1, { message: "Please select a service" }),
  message: z
    .string()
    .max(500, { message: "Message must be less than 500 characters" })
    .optional(),
});

type LeadFormValues = z.infer<typeof leadFormSchema>;

export const services = [
  {
    icon: <FaGraduationCap className="w-6 h-6" />,
    title: "Admission Support",
    description:
      "Specialized in innovative recruitment strategies for healthcare education",
  },
  {
    icon: <FaBriefcase className="w-6 h-6" />,
    title: "Internship Placement",
    description:
      "Diverse healthcare internships matching your skills with leading organizations",
  },
  {
    icon: <FaUsers className="w-6 h-6" />,
    title: "Healthcare Consultancy",
    description:
      "Strategic guidance for institutions and professionals in the healthcare sector",
  },
  {
    icon: <FaLaptopMedical className="w-6 h-6" />,
    title: "AI Healthcare Courses",
    description:
      "Cutting-edge training in AI applications for drug discovery, Ayurveda, and more",
  },
  {
    icon: <FaClipboardList className="w-6 h-6" />,
    title: "Placement Assistance",
    description:
      "Connecting healthcare professionals with top employers in the industry",
  },
  {
    icon: <FaGlobe className="w-6 h-6" />,
    title: "Study Abroad",
    description:
      "Global opportunities for healthcare education and career advancement",
  },
  {
    icon: <FaBrain className="w-6 h-6" />,
    title: "Upskilling Programs",
    description:
      "Comprehensive training in nursing informatics, forensics, and soft skills",
  },
  {
    icon: <FaMicroscope className="w-6 h-6" />,
    title: "Dissertation Guidance",
    description:
      "Research support and statistical analysis for healthcare academics",
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
    mode: "onChange", // Validate on change for better UX
  });

  const onSubmit = async (data: LeadFormValues) => {
    try {
      // Dispatch the addLead action and unwrap the result
      await dispatch(addLead(data)).unwrap();

      // Show success toast and reset if the API call succeeds
      toast.success("Thank you for your interest! We will contact you soon.", {
        position: "top-center",
        duration: 5000,
      });
      form.reset();
    } catch (err) {
      const error = err as { message?: string };
      toast.error(error.message || "Failed to submit form. Please try again.", {
        position: "top-center",
      });
    }
  };

  return (
    <section id="contact" className="py-20 bg-secondary-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 sm:p-10 rounded-xl shadow-lg"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-secondary mb-2">
              Get in Touch
            </h2>
            <p className="text-lg text-secondary-foreground">
              Fill out the form below and our team will contact you shortly.
            </p>
          </div>

          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name Field */}
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-secondary mb-1"
                >
                  Full Name <span className="text-destructive">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-muted-foreground">
                    <FaUser className="h-5 w-5" />
                  </div>
                  <input
                    id="fullName"
                    type="text"
                    {...form.register("fullName")}
                    className="pl-10 block w-full rounded-md border border-input bg-background shadow-sm py-3 focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                    placeholder="John Doe"
                  />
                </div>
                {form.formState.errors.fullName && (
                  <p className="mt-1 text-sm text-destructive">
                    {form.formState.errors.fullName.message}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-secondary mb-1"
                >
                  Email <span className="text-destructive">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-muted-foreground">
                    <FaEnvelope className="h-5 w-5" />
                  </div>
                  <input
                    id="email"
                    type="email"
                    {...form.register("email")}
                    className="pl-10 block w-full rounded-md border border-input bg-background shadow-sm py-3 focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                {form.formState.errors.email && (
                  <p className="mt-1 text-sm text-destructive">
                    {form.formState.errors.email.message}
                  </p>
                )}
              </div>

              {/* Phone Field */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-secondary mb-1"
                >
                  Phone <span className="text-destructive">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center gap-2 pointer-events-none text-muted-foreground">
                    <FaPhone className="h-5 w-5" />
                    <span>+91</span>
                  </div>
                  <input
                    id="phone"
                    type="tel"
                    {...form.register("phone")}
                    className="pl-20 block w-full rounded-md border border-input bg-background shadow-sm py-3 focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                    placeholder="9876543210"
                    maxLength={10}
                  />
                </div>
                {form.formState.errors.phone && (
                  <p className="mt-1 text-sm text-destructive">
                    {form.formState.errors.phone.message}
                  </p>
                )}
              </div>

              {/* Service Type Field */}
              <div>
                <label
                  htmlFor="serviceType"
                  className="block text-sm font-medium text-secondary mb-1"
                >
                  Service of Interest{" "}
                  <span className="text-destructive">*</span>
                </label>
                <select
                  id="serviceType"
                  {...form.register("serviceType")}
                  className="block w-full rounded-md border border-input bg-background shadow-sm py-3 focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                >
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service.title} value={service.title}>
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
            </div>

            {/* Message Field */}
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
                className="block w-full rounded-md border border-input bg-background shadow-sm p-4 focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                placeholder="Tell us about your requirements..."
                maxLength={500}
              ></textarea>
              <div className="text-xs text-muted-foreground mt-1 text-right">
                {form.watch("message")?.length || 0}/500 characters
              </div>
              {form.formState.errors.message && (
                <p className="mt-1 text-sm text-destructive">
                  {form.formState.errors.message.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-4">
              <Button
                type="submit"
                size="lg"
                className="w-full md:w-auto min-w-[200px] py-6 px-8 font-semibold text-lg text-white"
                disabled={
                  form.formState.isSubmitting || !form.formState.isValid
                }
              >
                {form.formState.isSubmitting ? (
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
                  "Submit Request"
                )}
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
