// components/contact-form.tsx
"use client";

import { motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

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

export function ContactForm() {
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
              className="w-full text-white"
            >
              Submit Inquiry
            </Button>
          </motion.div>
        </motion.div>
      </motion.form>
    </Form>
  );
}
