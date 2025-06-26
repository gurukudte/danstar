"use client";
import { useState } from "react";
import { FiBook, FiLayers, FiBriefcase } from "react-icons/fi";

const CurriculumComponent = () => {
  const [activeTerm, setActiveTerm] = useState(1);
  const [activeSection, setActiveSection] = useState<
    "core" | "healthcare" | "practical"
  >("core");

  const terms = [
    { id: 1, name: "Term 1", section: "core" },
    { id: 2, name: "Term 2", section: "core" },
    { id: 3, name: "Term 3", section: "core" },
    { id: 4, name: "Term 4", section: "core" },
    { id: 5, name: "Term 5", section: "healthcare" },
    { id: 6, name: "Term 6", section: "healthcare" },
    { id: 7, name: "Term 7", section: "practical" },
  ];

  const curriculumData = {
    1: {
      core: [
        "Managerial Decision Making",
        "Management Accounting",
        "Corporate Finance",
        "Human Capital Management",
        "Proficiency in Business Tools – I",
        "Lifeskills & Lifestyle Level 0",
      ],
    },
    2: {
      core: [
        "Financial Accounting & Statement Analysis",
        "Organizational Behaviour",
        "Marketing Management",
        "Operations Management",
        "Proficiency in Business Tools – II",
        "Lifeskills & Lifestyle Level 1",
      ],
    },
    3: {
      core: [
        "Business Environment",
        "Coding with R and Python",
        "Decision Science",
        "Proficiency in Business Tools – III",
        "Lifeskills & Lifestyle Level 2",
        "Social Immersion Program",
      ],
    },
    4: {
      core: [
        "Business Economics",
        "Business Strategy & Simulations",
        "Artificial Intelligence and Machine Learning",
        "Quantitative Techniques",
        "Data Visualization",
        "Lifeskills & Lifestyle Level 3",
      ],
    },
    5: {
      healthcare: [
        "AI & Digital Leadership in Healthcare",
        "Health Systems & Policy",
        "Hospital & Clinical Management",
        "Healthcare Business & Finance",
        "Digital Health & Informatics",
      ],
    },
    6: {
      healthcare: [
        "Health Law, Ethics & Legal Frameworks",
        "Healthcare Strategy & Leadership",
        "Digital Health & Informatics (continued)",
      ],
    },
    7: {
      practical: [
        "Industry Internship Program – 10 credits of hands-on exposure with leading healthcare organizations",
      ],
    },
  };

  const handleTermClick = (termId: number) => {
    setActiveTerm(termId);
    const term = terms.find((t) => t.id === termId);
    if (term) {
      setActiveSection(term.section as "core" | "healthcare" | "practical");
    }
  };

  return (
    <div className="flex justify-center items-start">
      <div className="flex flex-col md:flex-row gap-6 bg-white rounded-xl shadow-sm p-6 w-full max-w-6xl min-h-[600px]">
        {/* Left Side - Terms */}
        <div className="w-full md:w-1/4 min-w-[200px]">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            PGDM in Healthcare
          </h2>
          <p className="text-gray-600 mb-4 text-sm">
            A 24-month program blending foundational management with AI-powered
            healthcare training.
          </p>

          <div className="space-y-2 h-[500px] overflow-y-auto pr-2">
            <div className="px-4 py-2 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-blue-800">
                Core Curriculum (Terms 1–4)
              </h3>
              <p className="text-xs text-blue-600">
                Foundation in business and technology
              </p>
            </div>
            {terms.slice(0, 4).map((term) => (
              <button
                key={term.id}
                onClick={() => handleTermClick(term.id)}
                className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                  activeTerm === term.id
                    ? "bg-blue-100 text-blue-700 font-medium border-l-4 border-blue-600"
                    : "hover:bg-gray-100 text-gray-700"
                }`}
              >
                {term.name}
              </button>
            ))}

            <div className="px-4 py-2 bg-blue-50 rounded-lg mt-4">
              <h3 className="font-semibold text-blue-800">
                Healthcare Specialization (Terms 5–6)
              </h3>
              <p className="text-xs text-blue-600">
                Strategic roles in healthcare with AI integration
              </p>
            </div>
            {terms.slice(4, 6).map((term) => (
              <button
                key={term.id}
                onClick={() => handleTermClick(term.id)}
                className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                  activeTerm === term.id
                    ? "bg-blue-100 text-blue-700 font-medium border-l-4 border-blue-600"
                    : "hover:bg-gray-100 text-gray-700"
                }`}
              >
                {term.name}
              </button>
            ))}

            <div className="px-4 py-2 bg-blue-50 rounded-lg mt-4">
              <h3 className="font-semibold text-blue-800">
                Practical Industry Immersion (Term 7)
              </h3>
              <p className="text-xs text-blue-600">
                Hands-on exposure with healthcare organizations
              </p>
            </div>
            {terms.slice(6).map((term) => (
              <button
                key={term.id}
                onClick={() => handleTermClick(term.id)}
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
          <p className="text-gray-600">CURRICULUM DETAILS</p>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            {terms.find((t) => t.id === activeTerm)?.name} -{" "}
            {activeSection === "core"
              ? "Core Curriculum"
              : activeSection === "healthcare"
              ? "Healthcare Specialization"
              : "Practical Immersion"}
          </h2>

          <div className="h-[calc(100%-60px)] overflow-y-auto">
            {activeSection === "core" && (
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <FiBook className="text-blue-600" /> Core Courses
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {("core" in curriculumData[activeTerm as keyof typeof curriculumData]
                    ? (curriculumData[activeTerm as keyof typeof curriculumData] as { core: string[] }).core
                    : []
                  ).map((course, index) => (
                    <li
                      key={index}
                      className="bg-white p-3 rounded-lg shadow-sm flex items-start"
                    >
                      <span className="text-blue-500 mr-2 mt-1">•</span>
                      <span className="text-gray-700">{course}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeSection === "healthcare" && (
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-800 mb-4 flex items-center gap-2">
                  <FiLayers className="text-blue-600" /> Healthcare
                  Specialization Courses
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {(curriculumData[
                    activeTerm as keyof typeof curriculumData
                  ] && "healthcare" in curriculumData[activeTerm as keyof typeof curriculumData]
                    ? (curriculumData[activeTerm as keyof typeof curriculumData] as { healthcare: string[] }).healthcare
                    : []
                  ).map((course, index) => (
                    <li
                      key={index}
                      className="bg-white p-3 rounded-lg shadow-sm flex items-start"
                    >
                      <span className="text-blue-500 mr-2 mt-1">•</span>
                      <span className="text-gray-700">{course}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeSection === "practical" && (
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-green-800 mb-4 flex items-center gap-2">
                  <FiBriefcase className="text-green-600" /> Practical Industry
                  Immersion
                </h3>
                <ul className="grid grid-cols-1 gap-4">
                  {(curriculumData[
                    activeTerm as keyof typeof curriculumData
                  ] && "practical" in curriculumData[activeTerm as keyof typeof curriculumData]
                    ? (curriculumData[activeTerm as keyof typeof curriculumData] as { practical: string[] }).practical
                    : []
                  ).map((course, index) => (
                    <li
                      key={index}
                      className="bg-white p-3 rounded-lg shadow-sm flex items-start"
                    >
                      <span className="text-green-500 mr-2 mt-1">•</span>
                      <span className="text-gray-700">{course}</span>
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
