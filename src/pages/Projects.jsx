import React, { useEffect, useRef } from "react";
import Caraosel from "../components/Caraosel";
import { CLOUDINARY_URL, CLOUDINARY_VIDEO_URL } from "../utils/constants";

const Projects = () => {
  const titleRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === titleRef.current) {
              entry.target.classList.add("animate-fadeIn");
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    const titleElement = titleRef.current;

    if (titleElement) observer.observe(titleElement);

    return () => {
      if (titleElement) observer.unobserve(titleElement);
    };
  }, []);
  return (
    <div
      ref={titleRef}
      className="flex flex-col justify-center items-center w-screen "
    >
      <h1 className="m-4 text-xl md:text-4xl font-medium px-16 py-3 md:px-20 md:py-4 rounded-l-full rounded-r-full bg-blue-100 w-fit">
        Our Projects
      </h1>
      <p className="font-semibold p-4">
        "Explore Our Portfolio: Where Every Project Tells a Story of
        Excellence."
      </p>{" "}
      <Caraosel />
      <div className=" m-14 md:w-1/2 p-1  md:p-12 rounded-3xl md:bg-white border-t-2 md:shadow-lg">
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
