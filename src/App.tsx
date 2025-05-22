// File: src/App.tsx
import React from "react";
import HeroSection from "./components/HeroSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Loader from "./components/Loader";
import { FaEnvelope, FaTelegram, FaLinkedin } from "react-icons/fa";

const App: React.FC = () => {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="bg-[#2C2F36] text-white font-mono relative">
      {/* Left Sidebar */}
      <div className="hidden sm:flex fixed top-0 left-0 h-full w-12 flex-col items-center gap-3 pt-10">
        <span className="w-[2px] h-[70px] bg-white"></span>
        <a href="mailto:aathi8924@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope className="text-white w-5 h-5" />
        </a>
        <a href="https://t.me/aathiKM" target="_blank" rel="noopener noreferrer">
          <FaTelegram className="text-white w-5 h-5" />
        </a>
        <a href="https://www.linkedin.com/in/aathi-kesava-moorthi-p-4088401a4/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-white w-5 h-5" />
        </a>
      </div>

      <div className="px-4 sm:px-6 md:px-10 lg:px-[72px] ml-0 sm:ml-[72px]">
        <HeroSection />
        <ExperienceSection />
        {/* <ProjectsSection /> */}
        <AboutSection />
        <ContactSection />
      </div>
    </div>
  );
};

export default App;

// import React from "react";
// import HeroSection from "./components/HeroSection";
// import ExperienceSection from "./components/ExperienceSection";
// import ProjectsSection from "./components/ProjectsSection";
// import AboutSection from "./components/AboutSection";
// import ContactSection from "./components/ContactSection";
// import Loader from "./components/Loader";
// import { FaEnvelope, FaTelegram, FaLinkedin } from "react-icons/fa";

// const App: React.FC = () => {
//   const [loading, setLoading] = React.useState(true);

//   React.useEffect(() => {
//     const timer = setTimeout(() => setLoading(false), 2000);
//     return () => clearTimeout(timer);
//   }, []);

//   if (loading) return <Loader />;

//   return (
//     <div className="bg-[#2C2F36] text-white font-mono relative">
//       <div className="mx-[72px]">
//       {/* Left Sidebar */}
//       <div className="fixed top-0 left-0 h-full w-12 flex flex-col items-center gap-2 pt-10 ml-8">
//         <span className="w-[2px] h-[70px] bg-white "></span>
//         <a href="mailto:aathi8924@gmail.com" target="_blank" rel="noopener noreferrer">
//           <FaEnvelope className="text-white w-5 h-5" />
//         </a>
//         <a href="https://t.me/aathiKM" target="_blank" rel="noopener noreferrer">
//           <FaTelegram className="text-white w-5 h-5" />
//         </a>
//         <a href="https://www.linkedin.com/in/aathi-kesava-moorthi-p-4088401a4/" target="_blank" rel="noopener noreferrer">
//           <FaLinkedin className="text-white w-5 h-5" />
//         </a>
//       </div>

//       <div className="ml-[72px]">
//         <HeroSection />
//         <ExperienceSection />
//         <ProjectsSection />
//         <AboutSection />
//         <ContactSection />
//       </div>
//       </div>
//     </div>
//   );
// };

// export default App;
