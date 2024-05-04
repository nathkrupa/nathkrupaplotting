import React from "react";
import Caraosel from "../components/Caraosel";
import { CLOUDINARY_URL, CLOUDINARY_VIDEO_URL } from "../utils/constants";

const Projects = () => {
  return (
    <div className="flex flex-col justify-center items-center w-screen">
      <h1 className="m-4 text-xl md:text-4xl font-medium px-16 py-3 md:px-20 md:py-4 rounded-l-full rounded-r-full bg-blue-100 w-fit">
        Our Projects
      </h1>
      <p className="font-semibold p-4">
        "Explore Our Portfolio: Where Every Project Tells a Story of
        Excellence."
      </p>{" "}
      <Caraosel />
      <div className="md:w-1/2 m-4 p-6 md:p-12 rounded-3xl bg-white border-t-2 shadow-lg">
        <video
          src={`${CLOUDINARY_VIDEO_URL}nnxdb9cmuz8quuefx9mp`}
          alt="video"
          controls
        />
      </div>
    </div>
  );
};

export default Projects;
