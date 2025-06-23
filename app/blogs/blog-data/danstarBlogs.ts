import { ReactNode } from "react";

interface Blog {
  title: string;
  description: string;
  slug: string;
  keywords: string[];
  blogComponent?: ReactNode;
 }

const danstarBlogs:Blog[] = [
  {
    title: "best career counselling in Bangalore | guidance in Bangalore",
    description:
      "Unlock your future with the best career counselling in Bangalore. Expert career consultant in Bangalore for students. Start your journey today!",
    slug: "best-career-counselling-in-bangalore",
    keywords: [
      "career counselling in bangalore",
      "best career counselling in bangalore",
      "career consultant in bangalore",
      "career counselling in bangalore for students",
      "Career guidance in Bangalore",
    ],
  },
  {
    title: "Best Educational Consultants in Bangalore and Counsellor",
    description:
      "Get expert guidance from the best educational consultants in Bangalore. Trusted admission & higher education consultants in Bangalore for your success!",
    slug: "best-educational-consultants-in-bangalore",
    keywords: [
      "best admission consultants in bangalore",
      "education counsellor in bangalore",
      "best educational consultants in bangalore",
      "top education consultants in bangalore",
      "best education counsellor in bangalore",
      "higher education consultants in bangalore",
      "higher studies consultancy in bangalore",
    ],
  },
  {
    title: "Best Education Consultants in India | Call Now- 9740568622",
    description:
      "Connect with top education consultants in India. Get expert advice from the best education consultants in India for your academic and career success!",
    slug: "No Need",
    keywords: [
      "education consultants in india",
      "best education consultants in india",
    ],
  },
  {
    title: "Best Mbbs Admission Consultants in India | Call - 9740568622",
    description:
      "Secure your medical future with top MBBS admission consultants in India. Get expert help from the best MBBS admission consultants in India today!",
    slug: "best-mbbs-admission-consultants-in-india",
    keywords: [
      "mbbs admission consultants in india",
      "best mbbs admission consultants in india",
    ],
  },
  {
    title: "Best Career Options After 12th in India | Call - 9740568622",
    description:
      "Explore the best career after 12th in India! Discover the best career options after 12th in India and choose the best career in India after 12th today.",
    slug: "No Need",
    keywords: [
      "best career after 12th in india",
      "best career in india after 12th",
      "best career options after 12th in india",
    ],
  },
  {
    title: "Bsc Nursing Colleges in Bangalore with Fees | 9740568622",
    description:
      "Find top BSc Nursing colleges in Bangalore with fees details. Compare courses and plan your future with accurate BSc Nursing fees Bangalore info today!",
    slug: "No Need",
    keywords: [
      "bsc nursing colleges in bangalore with fees",
      "bsc nursing fees bangalore",
    ],
  },
  {
    title: "BBA Admission in Bangalore | BBA Colleges in Bangalore",
    description:
      "Secure your BBA admission in Bangalore with ease! Explore top BBA colleges in Bangalore direct admission options and kickstart your management journey.",
    slug: "No Need",
    keywords: [
      "bba admission in bangalore",
      "bba colleges in bangalore direct admission",
    ],
  },
];

export default danstarBlogs;
