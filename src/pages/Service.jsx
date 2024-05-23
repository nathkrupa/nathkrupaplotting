import React, { useEffect, useRef } from "react";
import ServiceCard from "../components/ServiceCard";
import { ServiceCardData } from "../utils/constants";

const Service = () => {
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
    <div
      ref={titleRef}
      className="flex flex-col  justify-center items-center w-screen mt-7 "
    >
      <h1 className="m-4 text-xl md:text-4xl font-medium px-16 py-4 md:px-20 md:py-5 rounded-l-full rounded-r-full bg-blue-100 w-fit">
        Our Services
      </h1>{" "}
      <div className="grid gap-20 md:grid-cols-2 py-8 px-2">
        {ServiceCardData.map((data, index) => {
          return (
            <div key={index}>
              <ServiceCard data={data} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Service;
