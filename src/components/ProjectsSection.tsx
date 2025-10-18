import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const allProjects = [
  {
    title: "Gym Exercise Pose Detection",
    stack: "Python, OpenCV, MediaPipe, TensorFlow",
    image: "/gym_pose_detection.png",
    description: "A computer vision project that detects and tracks human body keypoints during gym workouts in real time. Using MediaPipe and OpenCV, the system recognizes poses such as squats, push-ups, and lunges, providing visual feedback and angle analysis for form correction. Ideal for fitness tracking, motion analysis, and AI-powered virtual trainers.",
    repoUrl: "https://github.com/aathikm8943/gym_exercise_pose_detection",
  },
  {
    title: "Simple MCP Server Setup and Exploration",
    stack: "Python, MCP, FastAPI, REST APIs",
    image: "/mcp_server_setup.png",
    description: "A foundational project demonstrating how to set up and explore a Modular Communication Protocol (MCP) server. It includes a simple backend implementation that handles message passing between agents and clients. The project serves as a learning base for understanding server communication, request routing, and API integration in multi-agent systems.",
    repoUrl: "https://github.com/aathikm8943/simple-mcp-server-setup-and-exploration",
  },
  {
    title: "Bolt App Clone",
    stack: "Flutter / Dart, Firebase, Google Maps API",
    image: "/bolt_app_clone.png",
    description: "A ride-hailing app clone inspired by popular platforms like Bolt and Uber, built with Flutter and Firebase. The app includes features such as real-time location tracking, pickup and destination selection, route mapping via Google Maps, and a driver rating system. Designed to demonstrate end-to-end mobile app development including UI/UX, backend integration, state management and geolocation services.",
    repoUrl: "https://github.com/aathikm/bolt_app_clone",
  }
];

const ProjectsSection: React.FC = () => {
  return (
    <section className="">
      <div className="flex justify-between items-center">

        <h2 className="text-3xl font-semibold text-[#C084FC] border-b border-[#C084FC] inline-block pb-1 mb-6">
          #Projects
        </h2>
        <div className="">
          <Link to="/projects" className="inline-block px-4 py-2 bg-[#C084FC] text-black rounded font-medium">
            View more
          </Link>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {allProjects.map((p: any, idx: number) => (
          <div key={idx} className="bg-[#1E1F24] rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <img src={p.image} alt={p.title} className="w-full h-48 sm:h-40 object-cover" />
            <div className="p-4">
              <p className="text-sm text-gray-400">{p.stack}</p>
              <hr className="my-2 border-gray-700" />
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="text-sm text-gray-300 mt-1 line-clamp-2">{p.description}</p>
              <div className="mt-4 flex gap-3">
                {p.liveUrl && (
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-1.5 bg-[#C084FC] text-black rounded text-sm font-medium hover:bg-opacity-90 transition-colors"
                  >
                    <FaExternalLinkAlt className="mr-1.5 text-xs" />
                    Live Demo
                  </a>
                )}
                {p.repoUrl && (
                  <a
                    href={p.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-1.5 bg-transparent border border-gray-600 rounded text-sm hover:border-[#C084FC] hover:text-[#C084FC] transition-colors"
                  >
                    <FaGithub className="mr-1.5" />
                    Code
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default ProjectsSection;