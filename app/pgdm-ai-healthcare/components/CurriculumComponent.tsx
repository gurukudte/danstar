"use client";
import { useState } from "react";
import {
  FiBook,
  FiLayers,
} from "react-icons/fi";

type SpecializationKey =
  | "Marketing"
  | "Data Science & Business Analytics"
  | "Finance"
  | "Human Resources";

const CurriculumComponent = () => {
  const [activeTerm, setActiveTerm] = useState(1);
  const [specialization, setSpecialization] =
    useState<SpecializationKey>("Marketing");

  const terms = [
    { id: 1, name: "Term 1" },
    { id: 2, name: "Term 2" },
    { id: 3, name: "Term 3" },
    { id: 4, name: "Term 4" },
    { id: 5, name: "Term 5" },
    { id: 6, name: "Term 6" },
    { id: 7, name: "Term 7" },
  ];

  const curriculumData = {
    1: {
      core: ["Introduction to Digital Business", "Managerial Decision Making"],
      practice: ["Proficiency in Business Tools - I", "Lifeskills Level 0"],
    },
    2: {
      core: ["Management Accounting", "Corporate Finance"],
      practice: ["Lifestyle Level 0"],
    },
    3: {
      core: ["Financial Accounting & Financial Statement Analysis"],
      practice: ["Lifestyle Level 1"],
    },
    4: {
      core: ["Organizational Behaviour"],
      practice: ["Proficiency in Business Tools - II"],
    },
    5: {
      core: ["Marketing Management"],
      practice: ["Lifeskills Level 1"],
    },
    6: {
      core: ["Operations Management", "Design Thinking"],
      practice: [],
    },
    7: {
      core: [],
      practice: ["Capstone Project", "Industry Immersion"],
    },
  };

  const specializations = {
    Marketing: [
      "Digital Marketing Strategy",
      "Consumer Behavior Analytics",
      "Brand Management",
      "Marketing Research",
    ],
    "Data Science & Business Analytics": [
      "Predictive Analytics",
      "Data Visualization",
      "Machine Learning Fundamentals",
      "Big Data Technologies",
    ],
    Finance: [
      "Investment Analysis",
      "Risk Management",
      "Corporate Valuation",
      "Financial Markets",
    ],
    "Human Resources": [
      "Talent Management",
      "Organizational Development",
      "Compensation Strategies",
      "HR Analytics",
    ],
  };

  return (
    <div className="flex justify-center items-start">
      <div className="flex flex-col md:flex-row gap-6 bg-white rounded-xl shadow-sm p-6 w-full max-w-6xl min-h-[600px]">
        {/* Left Side - Terms */}
        <div className="w-full md:w-1/4 min-w-[200px]">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">TERMS</h2>
          <div className="space-y-2 h-[500px] overflow-y-auto pr-2">
            {terms.map((term) => (
              <button
                key={term.id}
                onClick={() => setActiveTerm(term.id)}
                className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                  activeTerm === term.id
                    ? "bg-blue-100 text-blue-700 font-medium border-l-4 border-blue-600"
                    : "hover:bg-gray-100 text-gray-700"
                }`}
              >
                {term.name}
              </button>
            ))}
          </div>
        </div>

        {/* Right Side - Curriculum */}
        <div className="w-full md:w-3/4 min-h-[500px]">
          <p className="text-gray-600">CURRICULUM</p>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Detailed Program Structure
          </h2>

          <div className="flex flex-col h-[calc(100%-60px)]">
            {/* Horizontal Columns for Core and Practice Courses */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 flex-grow">
              {/* Core Courses Column */}
              <div className="bg-gray-50 p-4 rounded-lg h-full overflow-y-auto">
                <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <FiBook className="text-blue-600" /> Core Courses
                </h3>
                <ul className="space-y-2">
                  {curriculumData[
                    activeTerm as keyof typeof curriculumData
                  ].core.map((course, index) => (
                    <li key={index} className="text-gray-700 flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      {course}
                    </li>
                  ))}
                  {curriculumData[activeTerm as keyof typeof curriculumData]
                    .core.length === 0 && (
                    <li className="text-gray-400 italic">
                      No core courses this term
                    </li>
                  )}
                </ul>
              </div>

              {/* Practice Courses Column */}
              <div className="bg-gray-50 p-4 rounded-lg h-full overflow-y-auto">
                <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <FiLayers className="text-blue-600" /> Practice Courses
                </h3>
                <ul className="space-y-2">
                  {curriculumData[
                    activeTerm as keyof typeof curriculumData
                  ].practice.map((course, index) => (
                    <li key={index} className="text-gray-700 flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      {course}
                    </li>
                  ))}
                  {curriculumData[activeTerm as keyof typeof curriculumData]
                    .practice.length === 0 && (
                    <li className="text-gray-400 italic">
                      No practice courses this term
                    </li>
                  )}
                </ul>
              </div>
            </div>

            {/* Specialization Courses (Terms 4-7) with Details/Summary */}
            {activeTerm >= 4 && (
            //   <details className="group">
            //     <summary className="flex items-center justify-between p-4 bg-blue-50 rounded-lg cursor-pointer list-none">
            //       <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
            //         <FiTrendingUp className="text-blue-600" /> Specialization
            //         Courses
            //       </h3>
            //       <svg
            //         className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform"
            //         fill="none"
            //         viewBox="0 0 24 24"
            //         stroke="currentColor"
            //       >
            //         <path
            //           strokeLinecap="round"
            //           strokeLinejoin="round"
            //           strokeWidth={2}
            //           d="M19 9l-7 7-7-7"
            //         />
            //       </svg>
            //     </summary>

            //   </details>
                <div className="mt-2 p-4 bg-white rounded-lg border border-gray-200">
                  <div className="flex flex-wrap gap-3 mb-4">
                    {Object.keys(specializations).map((spec) => (
                      <button
                        key={spec}
                        onClick={() =>
                          setSpecialization(spec as SpecializationKey)
                        }
                        className={`px-4 py-2 rounded-full text-sm font-medium ${
                          specialization === spec
                            ? "bg-blue-600 text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {spec}
                      </button>
                    ))}
                  </div>
                  <p className="text-sm text-gray-500 mb-4">
                    {specialization === "Marketing" ||
                    specialization === "Human Resources"
                      ? "#Choose any 3 Courses based on specialization Chosen"
                      : "#Choose any 4 Courses based on specialization Chosen"}
                  </p>
                  <ul className="space-y-2">
                    {specializations[specialization].map((course, index) => (
                      <li
                        key={index}
                        className="text-gray-700 flex items-start"
                      >
                        <span className="text-blue-500 mr-2">•</span>
                        {course}
                      </li>
                    ))}
                  </ul>
                </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurriculumComponent;
