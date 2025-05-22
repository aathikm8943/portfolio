import React from "react";
import loadingVideo from "../assets/Work (1).mp4";

const Loader: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-[#2C2F36]">
      <video
        src={loadingVideo}
        autoPlay
        loop
        muted
        className="w-48 h-48 rounded-lg object-cover"
      />
    </div>
  );
};

export default Loader;
