// File: src/components/HeroSection.tsx
import React from "react";
import {
  FaReact, FaNodeJs, FaGit, FaPython, FaRProject, FaAws, FaDocker, FaFigma
} from "react-icons/fa";
import { BiBarChart } from "react-icons/bi";
import {
  SiTypescript, SiJavascript, SiMongodb, SiMysql, SiPostgresql, SiTensorflow,
  SiScikitlearn, SiFastapi, SiFlask, SiOpenai, SiExpress, SiLangchain,
  SiChai, SiMocha
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
    <section className="min-h-[calc(100vh-80px)] flex flex-col-reverse md:flex-row justify-center md:justify-between items-center gap-8 md:gap-10 py-6 md:py-10 px-4 sm:px-6">
      {/* Text Section */}
      <div className="w-full md:max-w-2xl lg:max-w-3xl xl:max-w-4xl text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          Hey, This is Aathi!
        </h1>
        <p className="text-xl sm:text-2xl mt-2 md:mt-3 text-[#C084FC] font-semibold">
          AI Engineer <span className="text-white">&</span> Data Infrastructure Engineer
        </p>
        <p className="mt-3 md:mt-4 text-sm sm:text-base text-gray-400 max-w-[90%] mx-auto md:mx-0">
          I architect and deploy sophisticated AI/ML solutions and scalable data platforms. 
          My expertise spans from designing robust machine learning pipelines to building 
          high-performance data infrastructure using TensorFlow, LangChain, and cloud-native 
          technologies. I specialize in transforming complex data challenges into efficient, 
          production-ready systems.
        </p>

        {/* Skills Icons (Scrolling Strip) */}
        <div className="mt-6 md:mt-10 overflow-hidden w-full">
          <div className="flex gap-4 md:gap-6 animate-scroll-slow hover:[animation-play-state:paused] text-xl sm:text-2xl text-gray-300 w-max">
            {skillIcons.map((Icon, idx) => (
              <Icon key={idx} className="hover:text-white transition-colors duration-200" />
            ))}
            {skillIcons.map((Icon, idx) => (
              <Icon key={idx + skillIcons.length} className="hover:text-white transition-colors duration-200" />
            ))}
          </div>
        </div>
      </div>

      {/* Profile Image */}
      <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-48 lg:h-48 rounded-full overflow-hidden border-4 border-white mb-6 md:mb-0 flex-shrink-0">
        <img
          src={profile}
          alt="Aathi"
          className="object-cover object-center w-full h-full"
          loading="eager"
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
