"use client"
import { motion } from "framer-motion";
import {
  GraduationCap,
  Briefcase,
  Users,
  BookOpen,
  BarChart,
  TrendingUp,
  ClipboardList,
  Mic,
  Globe,
  BrainCircuit,
  HeartPulse,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ServicesPage = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const coreServices = [
    {
      title: "Admission Support",
      description:
        "Specialized in innovative recruitment strategies and targeted marketing campaigns designed to connect you with highly passionate students.",
      icon: <GraduationCap className="w-6 h-6" />,
      features: [
        "Maximize your enrollment",
        "Build thriving academic communities",
        "Targeted student outreach programs",
      ],
    },
    {
      title: "Internship Placement",
      description:
        "A diverse range of internships curated across various industries, matching your skills and interests with leading companies.",
      icon: <Briefcase className="w-6 h-6" />,
      features: [
        "Gain hands-on experience",
        "Build competitive resumes",
        "Industry-specific placements",
      ],
    },
    {
      title: "Consultancy",
      description:
        "Partner with us for strategic guidance and impactful results. We offer personalized consultancy services delivering measurable improvements.",
      icon: <Users className="w-6 h-6" />,
      features: [
        "Strategic business guidance",
        "Performance optimization",
        "Long-term value creation",
      ],
    },
    {
      title: "Training & Soft Skills",
      description:
        "Comprehensive upskilling solutions to expand knowledge, boost confidence, and embrace continuous learning.",
      icon: <BookOpen className="w-6 h-6" />,
      features: [
        "Professional communication",
        "Leadership development",
        "Adaptability training",
      ],
    },
    {
      title: "Placement Assistance",
      description:
        "Expert services connecting you directly with top companies, matching your skills to accelerate career growth.",
      icon: <TrendingUp className="w-6 h-6" />,
      features: [
        "Career matching algorithms",
        "Interview preparation",
        "Corporate networking",
      ],
    },
    {
      title: "Dissertation Guidance",
      description:
        "Streamline your research with comprehensive assistance including editing, statistical analysis, and research support.",
      icon: <ClipboardList className="w-6 h-6" />,
      features: [
        "Methodology support",
        "Data analysis services",
        "Academic editing",
      ],
    },
    {
      title: "Workshops",
      description:
        "Interactive sessions providing practical tools and expert insights to elevate your professional development.",
      icon: <Mic className="w-6 h-6" />,
      features: [
        "Hands-on learning",
        "Industry expert sessions",
        "Skill certification",
      ],
    },
    {
      title: "Marketing Solutions",
      description:
        "Comprehensive services to elevate brands, enhance digital presence, and ensure standout visibility.",
      icon: <BarChart className="w-6 h-6" />,
      features: [
        "Digital strategy development",
        "Brand positioning",
        "Performance analytics",
      ],
    },
  ];

  const specializedServices = [
    {
      title: "Study Abroad",
      description:
        "End-to-end guidance for international education opportunities with partner institutions worldwide.",
      icon: <Globe className="w-5 h-5" />,
    },
    {
      title: "Career Counselling",
      description:
        "Personalized career path recommendations with aptitude assessment and industry alignment.",
      icon: <TrendingUp className="w-5 h-5" />,
    },
    {
      title: "De-addiction Counselling",
      description:
        "Professional support programs for substance abuse recovery and rehabilitation.",
      icon: <HeartPulse className="w-5 h-5" />,
    },
  ];

  const aiCourses = [
    "AI for Cheminformatics",
    "AI for Drug Discovery",
    "AI for Ayurveda",
    "AI for Physiotherapists",
    "AI for Beginners",
  ];

  const nursingCourses = ["Nursing Informatics", "Nursing Forensics"];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
          EMPOWERING THE FUTURE OF HEALTHCARE
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Comprehensive solutions to empower healthcare organizations,
          institutions, and professionals to excel.
        </p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 flex justify-center gap-4"
        >
          <Button className="bg-primary hover:bg-primary/90 text-white cursor-pointer">
            Explore All Services
          </Button>
          <Button
            variant="outline"
            className="border-secondary text-secondary-foreground cursor-pointer"
          >
            Contact Our Experts
          </Button>
        </motion.div>
      </motion.section>

      {/* Core Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Our Comprehensive Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tailored solutions designed for healthcare education and
            professional excellence.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {coreServices.map((service, index) => (
            <motion.div key={index} variants={item}>
              <Card className="hover:shadow-lg transition-all duration-300 h-full flex flex-col border-border hover:border-primary/30">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-secondary/10 rounded-full text-secondary">
                      {service.icon}
                    </div>
                    <CardTitle className="text-foreground">
                      {service.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="mb-4 text-muted-foreground">
                    {service.description}
                  </CardDescription>
                  <ul className="space-y-2 text-sm text-foreground">
                    {service.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        whileHover={{ x: 5 }}
                        className="flex items-start"
                      >
                        <span className="text-primary mr-2">•</span>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Specialized Services & Courses */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-card rounded-xl border border-border"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Specialized Offerings
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Additional services tailored to specific needs in healthcare
            education.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {specializedServices.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-muted p-6 rounded-lg hover:bg-secondary/10 transition-colors border border-border"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-primary/10 rounded-full text-primary mr-3">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {service.title}
                </h3>
              </div>
              <p className="text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* AI Courses */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
            <BrainCircuit className="w-5 h-5 mr-2 text-primary" />
            AI & Technology Courses
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {aiCourses.map((course, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="p-3 bg-muted rounded-md text-center text-sm font-medium border border-border"
              >
                {course}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Nursing Courses */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
            <HeartPulse className="w-5 h-5 mr-2 text-primary" />
            Nursing Specializations
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {nursingCourses.map((course, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="p-3 bg-muted rounded-md text-center text-sm font-medium border border-border"
              >
                {course}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.section>

      {/* Why Choose Us */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-secondary text-white rounded-xl"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Why Choose DANSTAR OPC PVT LTD?
          </h2>
          <p className="text-secondary-foreground/80 max-w-2xl mx-auto">
            We stand out through our commitment to excellence and innovation in
            healthcare education.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Proven Expertise",
              description:
                "Team of experienced professionals with deep understanding of healthcare education landscape.",
              icon: <Users className="w-8 h-8" />,
            },
            {
              title: "Comprehensive Solutions",
              description:
                "Wide range of services to meet your institution's unique needs.",
              icon: <BookOpen className="w-8 h-8" />,
            },
            {
              title: "Commitment to Excellence",
              description:
                "Dedicated to providing high-quality services that exceed expectations.",
              icon: <TrendingUp className="w-8 h-8" />,
            },
            {
              title: "Focus on Innovation",
              description:
                "Constantly exploring new ways to improve healthcare education for the future.",
              icon: <BrainCircuit className="w-8 h-8" />,
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="text-center p-6 bg-secondary/80 rounded-lg border border-secondary"
            >
              <motion.div
                whileHover={{ rotate: 10 }}
                className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4"
              >
                {item.icon}
              </motion.div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-secondary-foreground/80">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default ServicesPage;
