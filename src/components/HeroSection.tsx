// File: src/components/HeroSection.tsx
import React from "react";
import {
  FaReact, FaNodeJs, FaGit, FaPython, FaJava, FaRProject, FaAws, FaDocker, FaFigma
} from "react-icons/fa";
import { BiBarChart } from "react-icons/bi";
import {
  SiTypescript, SiJavascript, SiMongodb, SiMysql, SiPostgresql, SiTensorflow,
  SiScikitlearn, SiFastapi, SiFlask, SiOpenai, SiExpress, SiLangchain,
  SiPowers, SiChai, SiMocha
} from "react-icons/si";
import profile from "../assets/Aathi_Profile.jpeg";

const skillIcons = [
  SiTypescript, SiJavascript, FaPython, FaRProject,
  FaReact, FaNodeJs, SiExpress, SiFlask, SiFastapi, SiLangchain,
  SiTensorflow, SiScikitlearn, SiOpenai,
  SiMongodb, SiMysql, SiPostgresql,
  FaGit, FaAws, FaDocker, BiBarChart, FaFigma, SiMocha, SiChai
];

const HeroSection: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row justify-center items-center gap-10 py-10 text-center md:text-left">
      {/* Text Section */}
      <div className="max-w-xl lg:max-w-4xl md:max-w-2xl sm:max-w-xl mt-[50px]">
        <h1 className="text-4xl md:text-5xl font-bold">Hi I am Aathi !</h1>
        <p className="text-2xl mt-2 text-[#C084FC] font-semibold">
          Full Stack Developer <span className="text-white">and</span> AI, Data Enthusiast...
        </p>
        <p className="mt-4 text-sm text-gray-400">
          I'm a full-stack developer with experience in data analytics, data engineering, and AI-driven web tools.
          I've built intelligent dashboards, automation systems, and educational platforms using Python, MERN, TypeScript, R and cloud-native technologies.
        </p>

        {/* Skills Icons (Scrolling Strip) */}
        <div className="mt-10 overflow-hidden">
          <div className="flex gap-6 animate-scroll-slow hover:[animation-play-state:paused] text-2xl text-gray-300 w-max">
            {skillIcons.map((Icon, idx) => (
              <Icon key={idx} className="hover:text-white transition" />
            ))}
            {skillIcons.map((Icon, idx) => (
              <Icon key={idx + skillIcons.length} className="hover:text-white transition" />
            ))}
          </div>
        </div>
      </div>

      {/* Profile Image */}
      <div className="rounded-full overflow-hidden border-4 border-white w-40 h-40 md:w-48 md:h-48">
        <img
          src={profile}
          alt="Aathi"
          className="object-cover object-center w-full h-full"
        />
      </div>
    </section>
  );
};

export default HeroSection;

// import React from "react";
// import {
//   FaReact, FaNodeJs, FaGit, FaPython, FaJava, FaRProject, FaAws, FaDocker, FaFigma
// } from "react-icons/fa";
// import { BiBarChart } from "react-icons/bi"
// import {
//   SiTypescript, SiJavascript, SiMongodb, SiMysql, SiPostgresql, SiTensorflow,
//   SiScikitlearn, SiFastapi, SiFlask, SiOpenai, SiExpress, SiLangchain,
//   SiPowers, SiChai, SiMocha
// } from "react-icons/si";
// import profile from "../assets/Aathi_Profile.jpeg"

// const skillIcons = [
//   // Languages & Libraries
//   SiTypescript, SiJavascript, FaPython, FaRProject,
//   // Frontend & Backend
//   FaReact, FaNodeJs, SiExpress, SiFlask, SiFastapi, SiLangchain,
//   // AI/ML
//   SiTensorflow, SiScikitlearn, SiOpenai,
//   // Databases
//   SiMongodb, SiMysql, SiPostgresql,
//   // Tools
//   FaGit, FaAws, FaDocker, BiBarChart, FaFigma, SiMocha, SiChai
// ];

// const HeroSection: React.FC = () => {
//   return (
//     <section className="flex flex-col md:flex-row justify-between items-center gap-10 py-10">
//       {/* Text Section */}
//       <div>
//         <h1 className="text-4xl md:text-5xl font-bold">Hi I am Aathi !</h1>
//         <p className="text-2xl mt-2 text-[#C084FC] font-semibold">
//           Full Stack Developer <span className="text-white">and</span> AI, Data Enthusiast...
//         </p>
//         <p className="mt-4 text-sm text-gray-400 max-w-[750px]">
//           I'm a full-stack developer with experience in data analytics, data engineering, and AI-driven web tools.
//            I've built intelligent dashboards, automation systems, and educational platforms using Python, MERN, TypeScript, R and cloud-native technologies.
//         </p>

//         {/* Skills Icons */}
//         <div className="flex flex-wrap gap-4 mt-8 text-gray-300 text-2xl">
//           {skillIcons.map((Icon, idx) => (
//             <Icon key={idx} className="hover:text-white transition" />
//           ))}
//         </div>
//       </div>

//       {/* Profile Image */}
//       <div className="rounded-full overflow-hidden border-4 border-white w-48 h-48">
//         <img
//           src={profile}
//           alt="Aathi"
//           className="object-cover object-center w-full h-full"
//         />
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
