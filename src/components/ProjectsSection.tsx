import React from "react";

const projects = [
  {
    title: "Stack Overflow Clone",
    stack: "React.js, MongoDB, Express.js, Node.js",
    image: "/stack_overflow.png",
  },
  {
    title: "Pharmacy Dashboard",
    stack: "React.js, Node.js",
    image: "/pharmacy_dashboard.png",
  },
  {
    title: "Accuknox Dashboard",
    stack: "React.js, Node.js",
    image: "/accuknox_dashboard.png",
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <section className="">
      <h2 className="text-3xl font-semibold text-[#C084FC] border-b border-[#C084FC] inline-block pb-1 mb-6">
        #Projects
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <div key={idx} className="bg-[#1E1F24] rounded-lg overflow-hidden">
            <img src={project.image} alt={project.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <p className="text-sm text-gray-400">{project.stack}</p>
              <hr className="my-2 border-gray-700" />
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <button className="mt-2 px-3 py-1 bg-gray-700 rounded text-white text-sm">Live</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;