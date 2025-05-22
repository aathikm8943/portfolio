import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const experiences = [
  {
    title: "Analyst - Data Orchestration",
    company: "Zifo RnD Solutions",
    location: "Remote",
    duration: "May 2025 - Present",
    description: [
      "Collaborated with across-functional team to develop test scripts for backend services, incorporating AWS components, event triggers with AWS SQS, andintegration of external APIs."
    ]
  },
  {
    title: "Data Research Analyst",
    company: "Zifo RnD Solutions",
    location: "Chennai",
    duration: "July 2024 - April 2025",
    description: [
      "Delivered 7+end-to-endapplications for automation, data pipeline development, and custom visualization supporting scientific research workflows.",
      "Designedanassayprocessingsystemintegrating massspectrometry datafor statistical inference; co-developed open-source tool for cancer drug research used by university students.",
      "Partneredwithcross-functional teams to analyze research data, accelerating product development and reducing delivery time by 15%.",
      "Built adeeplearningPOCusingpromptengineeringandGitHubCopilot. Developedreusableprompttemplates. Trained 12 colleagues in R for data analysis."
    ]
  },
  {
    title: "Associate Analyst",
    company: "Zifo RnD Solutions",
    location: "Chennai",
    duration: "June 2023 - June 2024",
    description: [
      "Developed an automation tool to generate input sequences for liquid handler robots, integrating custom business rules and reducing manual effort from 1.5 days to 10 minutes.",
      "Created interactive dashboards for visualizing and analyzing early-stage drug discovery stability data, supporting research decisions across animal models.",
      "Delivered technical support to team members across multiple application development projects."
    ]
  },
  {
    title: "MVP Builder & Product Engineer",
    company: "Personal Projects",
    location: "Remote",
    duration: "Contributions",
    description: [
      "Built 4 Minimum Viable Products (MVPs) for early-stage startups across agriculture, AI-integrated mobile apps, and aviation, driving system design, development, and deployment.",
      "Led full-stack engineering efforts, including AI integration in React and React Native apps, ensuring usable prototypes aligned with business goals.",
      "Designed back-end and front-end architectures using monolithic patterns, implemented scalable APIs, and optimized data workflows.",
      "Contributed to product strategy and rapid prototyping, delivering feature-complete MVPs under tight timelines."
    ]
  }
];

const ExperienceSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-8">
      <h2 className="text-2xl sm:text-3xl font-semibold text-[#C084FC] border-b border-[#C084FC] inline-block pb-1 mb-6">
        #Experience
      </h2>
      <div className="flex flex-col md:flex-row gap-6 md:gap-8">
        {/* Timeline Navigation */}
        <div className="flex flex-row md:flex-col gap-4 md:min-w-[180px] overflow-x-auto md:overflow-visible">
          {experiences.map((exp, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`text-sm font-mono px-4 py-2 border-l-4 text-left whitespace-nowrap transition-all duration-300
                ${activeIndex === idx ? "text-white border-[#C084FC] bg-[#1E1F24]" : "text-gray-500 border-transparent hover:text-white hover:border-[#C084FC]"}`}
            >
              {exp.duration}
            </button>
          ))}
        </div>

        {/* Experience Details */}
        <div className="flex-1 flex flex-col gap-6">
          {/* Active Experience Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="rounded-lg p-4 sm:p-6 w-full bg-[#1E1F24]"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-white">
                {experiences[activeIndex].title}
              </h3>
              <p className="text-sm text-gray-300">{experiences[activeIndex].company}</p>
              <p className="text-xs text-gray-400 mt-1">📍 {experiences[activeIndex].location}</p>
              <p className="text-xs text-gray-500 mb-2">🗓️ {experiences[activeIndex].duration}</p>
              <ul className="list-disc list-inside text-sm text-gray-300 mt-2 space-y-1">
                {experiences[activeIndex].description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>

          {/* Inactive Experience Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {experiences.map((exp, idx) => {
              if (idx === activeIndex) return null;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05, opacity: 1 }}
                  className="transition-all duration-500 ease-in-out rounded-lg p-4 bg-[#2C2F36] opacity-80 hover:shadow-md"
                >
                  <h3 className="text-md font-semibold text-white">{exp.title}</h3>
                  <p className="text-xs text-gray-400 mt-1">📍 {exp.location}</p>
                  <p className="text-xs text-gray-500 mt-2">🗓️ {exp.duration}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
