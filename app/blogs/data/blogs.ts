type Blog = {
  slug: string;
  title: string;
  keywords: string[];
  content: string;
};

// export const blogs:  = [
//   {
//     slug: "unlock-your-true-potential",
//     title: "Unlock Your True Potential...",
//     keywords: ["career counselling"],
//     content: "Full blog content...",
//   },
//   // ...other blogs
// ];

export const blogs: Blog[] = [
  {
    slug: "unlock-your-true-potential",
    title:
      "Unlock Your True Potential: Best Career Counselling in Bangalore for Students and Professionals",
    keywords: [
      "career counselling in bangalore",
      "best career counselling in bangalore",
      "career consultant in bangalore",
    ],
    content: "Full blog content here...",
  },
  {
    slug: "study-abroad-consultants-bangalore",
    title:
      "Top Education Consultants in Bangalore – Your Gateway to Academic Success",
    keywords: [
      "study abroad consultants bangalore",
      "best consultancy in bangalore for abroad studies",
      "consultancy for abroad studies in bangalore",
    ],
    content: "Full blog content here...",
  },
  // Add more blogs as needed
];