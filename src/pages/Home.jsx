import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

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
    <div className="w-screen flex  flex-col mt-10 p-4  ">
      <div className="flex flex-wrap-reverse">
        {/* div1 */}
        <div
          ref={leftRef}
          className=" flex flex-col justify-center md:my-14 py-28 md:pl-28 p-5 flex-1"
        >
          <h1 className="text-2xl md:text-4xl grid p-2 gap-4">
            <>
              Nathkrupa
              <br />
              <span className="font-medium text-4xl md:text-6xl">
                Construction
              </span>
            </>
          </h1>
          <p className="font-poppins md:text-lg  md:mr-32 py-8">
            Step into a world of possibilities with Nathkrupa Construction,
            where every brick laid and every beam raised is a testament to our
            commitment to excellence. Our bespoke construction solutions are
            meticulously crafted to align with your unique vision.
          </p>
          <div className="flex gap-16">
            <button className="bg-blue-500 px-5 py-3 text-sm md:text-base rounded-md md:px-7 shadow-lg md:py-4 text-white hover:bg-blue-600 ">
              <Link onClick={() => scrollToSection("about")}> Learn More</Link>
            </button>
            <button className="bg-blue-500 px-5 py-3 text-sm md:text-base rounded-md md:px-7 shadow-lg md:py-4 text-white hover:bg-blue-600 ">
              <Link onClick={() => scrollToSection("contact")}>
                {" "}
                Contact Us
              </Link>
            </button>
          </div>
        </div>
        {/* div2 */}
        <div ref={rightRef} className=" md:w-2/5  ">
          <img
            src="https://res.cloudinary.com/dvdrkucjh/image/upload/jdwpnqbem1dtbjbp5clr"
            alt="cover"
            className=" object-cover w-full  md:my-24 mt-24"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
