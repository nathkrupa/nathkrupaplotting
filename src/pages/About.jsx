import React, { useEffect, useRef } from "react";
import { CLOUDINARY_URL } from "../utils/constants";

const About = () => {
  const titleRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === leftRef.current) {
              entry.target.classList.add("animate-slideInFromLeft");
              entry.target.classList.remove("opacity-0");
            } else if (entry.target === rightRef.current) {
              entry.target.classList.add("animate-slideInFromRight");
              entry.target.classList.remove("opacity-0");
            } else if (entry.target === titleRef.current) {
              entry.target.classList.add("animate-fadeIn");
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    const titleElement = titleRef.current;

    const leftElement = leftRef.current;
    const rightElement = rightRef.current;

    if (titleElement) observer.observe(titleElement);

    if (leftElement) observer.observe(leftElement);
    if (rightElement) observer.observe(rightElement);

    return () => {
      if (titleElement) observer.unobserve(titleElement);

      if (leftElement) observer.unobserve(leftElement);
      if (rightElement) observer.unobserve(rightElement);
    };
  }, []);

  return (
    <div className="flex flex-col justify-center items-center w-screen">
      <h1
        ref={titleRef}
        className="m-4 text-xl md:text-4xl font-medium px-16 py-3 md:px-20 md:py-4 rounded-l-full rounded-r-full bg-blue-100 w-fit"
      >
        About Us
      </h1>

      <div className="w-full flex flex-wrap justify-center m-4 p-4 gap-8">
        <div
          ref={leftRef}
          className="opacity-0 transform -translate-x animate-fadeIn"
        >
          <img
            className=""
            src={`${CLOUDINARY_URL}zojyf43lhj6hrjtmflzb`}
            alt="about"
          />
        </div>
        <div
          ref={rightRef}
          className="md:w-1/2 md:text-xl p-4 opacity-0 transform translate-x animate-fadeIn"
        >
          <p>
            Welcome to Nathkrupa Construction, a premier construction company
            dedicated to delivering exceptional projects and unparalleled
            service since our establishment in 2023. Led by our visionary
            founder, Swapnil Pawar, Nathkrupa Construction has quickly emerged
            as a trusted name in the construction industry, renowned for our
            commitment to quality, innovation, and client satisfaction.
            <br></br>
            <br></br>
            Our services include:
            <span className="font-semibold">
              <br></br>- Residential Construction
              <br></br>- Commercial Construction
              <br></br>- Renovation and Remodeling
              <br></br>- Landscaping and Outdoor Design
              <br></br>- Project Management and Consultation
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
