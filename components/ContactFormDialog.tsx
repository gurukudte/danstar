// components/ContactFormDialog.tsx
"use client";

import { motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";

const formSchema = z.object({
  fullName: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Phone number must be at least 10 digits.",
  }),
  interest: z.string().min(1, {
    message: "Please select your area of interest.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

const formFields = [
  {
    name: "fullName",
    label: "Full Name*",
    placeholder: "Your name",
    type: "input",
  },
  {
    name: "email",
    label: "Email*",
    placeholder: "your@email.com",
    type: "input",
  },
  {
    name: "phone",
    label: "Phone*",
    placeholder: "+91 ",
    type: "input",
  },
  {
    name: "interest",
    label: "I'm interested in*",
    type: "select",
    options: [
      "Admission Support",
      "Internship Placement",
      "Consultancy Services",
      "Training Programs",
      "Workshops",
      "Other Inquiry",
    ],
  },
  {
    name: "message",
    label: "Your Message*",
    placeholder: "Tell us about your needs...",
    type: "textarea",
  },
];

interface ContactFormDialogProps {
  buttonText?: string;
}

export function ContactFormDialog({ buttonText = "Contact Us" }: ContactFormDialogProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      interest: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      // Send to your CRM/backend
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        toast("Thank you! Our team will contact you shortly.");
        form.reset();
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      if (error) {
        toast("There was an error submitting your form.", {
          style: { background: "#f87171", color: "#fff" },
        });
      }
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default" className="text-white">
          {buttonText}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Contact Information Card */}
          <Card className="p-6 bg-muted/50 h-full">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold mb-6">
                Contact Information
              </DialogTitle>
            </DialogHeader>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <FaPhone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-muted-foreground">
                    <a href="tel:+919740576722" className="hover:text-primary transition-colors">
                      +91 9740576722
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <FaEnvelope className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-muted-foreground">
                    <a href="mailto:info@danstareducation.com" className="hover:text-primary transition-colors">
                      info@danstareducation.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <FaMapMarkerAlt className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p className="text-muted-foreground">
                    #123, Education Street,<br />
                    Bangalore, Karnataka 560001
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <FaClock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Working Hours</h3>
                  <p className="text-muted-foreground">
                    Mon-Fri: 9:00 AM - 6:00 PM<br />
                    Sat: 10:00 AM - 4:00 PM
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Contact Form */}
          <div className="h-full">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold mb-2">
                Get in Touch
              </DialogTitle>
              <p className="text-sm text-muted-foreground mb-6">
                Fill out the form and our team will get back to you within 24 hours.
              </p>
            </DialogHeader>
            <Form {...form}>
              <motion.form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                {formFields.map((field, index) => (
                  <motion.div
                    key={field.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <FormField
                      control={form.control}
                      name={field.name as keyof z.infer<typeof formSchema>}
                      render={({ field: formField }) => (
                        <FormItem>
                          <FormLabel>{field.label}</FormLabel>
                          <FormControl>
                            {field.type === "select" ? (
                              <Select
                                onValueChange={formField.onChange}
                                defaultValue={formField.value}
                              >
                                <SelectTrigger>
                                  <SelectValue placeholder="Select an option" />
                                </SelectTrigger>
                                <SelectContent className="bg-white">
                                  {field.options?.map((option) => (
                                    <SelectItem key={option} value={option}>
                                      {option}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            ) : field.type === "textarea" ? (
                              <Textarea
                                placeholder={field.placeholder}
                                {...formField}
                              />
                            ) : (
                              <Input
                                placeholder={field.placeholder}
                                {...formField}
                                type={field.name === "email" ? "email" : "text"}
                              />
                            )}
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: formFields.length * 0.1 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      className="w-full text-white cursor-pointer"
                    >
                      Submit Inquiry
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.form>
            </Form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}