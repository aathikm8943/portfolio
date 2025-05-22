// File: src/components/AboutSection.tsx
import React from "react";

const AboutSection: React.FC = () => {
  return (
    <section className="py-16 text-white">
      <h2 className="text-3xl font-semibold text-[#C084FC] border-b border-[#C084FC] inline-block pb-1 mb-6">
        #About-me
      </h2>
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left Side - About Content */}
        <div className="lg:w-4/5 text-gray-300 space-y-4">
          <p>
            Hello! I’m <span className="text-white font-semibold">Aathi</span>, a passionate <span className="text-white">Full Stack Developer</span> and <span className="text-white">Data Enthusiast</span> with a strong foundation in software engineering, data pipelines, and AI-integrated product development.
          </p>
          <p>
            With professional experience at <span className="text-white font-medium">Zifo RnD Solutions</span>, I’ve contributed to building automation tools, intelligent dashboards, and data orchestration systems supporting scientific research. I specialize in blending development with data — from crafting backend APIs and microservices to engineering front-end interfaces and deploying ML models.
          </p>
          <p>
            Beyond work, I’ve built several <span className="text-white font-medium">Minimum Viable Products (MVPs)</span> for startups, including tools in <span className="text-white">agritech</span>, <span className="text-white">edtech</span>, and <span className="text-white">AI-driven platforms</span> — using React, TypeScript, Python, and cloud-native tools.
          </p>
          <p>
            I thrive at the intersection of <span className="text-white">code, creativity, and curiosity</span> — building products that are smart, fast, and user-focused.
          </p>
        </div>

        {/* Right Side - Quote */}
        <div className="lg:w-1/5 text-left text-gray-400 italic flex flex-col justify-center">
          <p className="mb-4">“The true sign of intelligence is not knowledge but imagination.”</p>
          <p className="text-sm">— Albert Einstein</p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;


// // File: src/components/AboutSection.tsx
// import React from "react";

// const AboutSection: React.FC = () => {
//   return (
//     <section className="py-16 text-white">
//       <h2 className="text-3xl font-semibold text-[#C084FC] border-b border-[#C084FC] inline-block pb-1 mb-6">
//         #About-me
//       </h2>
//       <div className="max-w-4xl text-gray-300 space-y-4">
//         <p>
//           Hello! I’m <span className="text-white font-semibold">Aathi</span>, a passionate <span className="text-white">Full Stack Developer</span> and <span className="text-white">Data Enthusiast</span> with a strong foundation in software engineering, data pipelines, and AI-integrated product development.
//         </p>
//         <p>
//           With professional experience at <span className="text-white font-medium">Zifo RnD Solutions</span>, I’ve contributed to building automation tools, intelligent dashboards, and data orchestration systems supporting scientific research. I specialize in blending development with data — from crafting backend APIs and microservices to engineering front-end interfaces and deploying ML models.
//         </p>
//         <p>
//           Beyond work, I’ve built several <span className="text-white font-medium">Minimum Viable Products (MVPs)</span> for startups, including tools in <span className="text-white">agritech</span>, <span className="text-white">edtech</span>, and <span className="text-white">AI-driven platforms</span> — using React, TypeScript, Python, and cloud-native tools.
//         </p>
//         <p>
//           I thrive at the intersection of <span className="text-white">code, creativity, and curiosity</span> — building products that are smart, fast, and user-focused.
//         </p>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;
