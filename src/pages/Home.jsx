import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="w-full flex flex-col max-md:bg-[url(https://res.cloudinary.com/dvdrkucjh/image/upload/e6qunvjoj6y0r0chronx)] max-md:bg-cover bg-no-repeat mt-10 shadow-md">
      <div className="flex">
        {/* div1 */}
        <div className="flex flex-col justify-center my-14 py-28 md:pl-28 p-5 flex-1">
          <h1 className="text-2xl md:text-4xl grid p-2 gap-4">
            <>
              Nathkrupa
              <br />
              <span className="font-medium text-4xl md:text-6xl">
                Construction
              </span>
            </>
          </h1>
          <p className="font-poppins text-lg mr-32 py-8">
            Step into a world of possibilities with Nathkrupa Construction,
            where every brick laid and every beam raised is a testament to our
            commitment to excellence. Our bespoke construction solutions are
            meticulously crafted to align with your unique vision.
          </p>
          <div className="flex gap-16">
            <button className="bg-blue-400 rounded-md px-5 shadow-lg py-2 text-white hover:bg-blue-500 ">
              <Link onClick={() => scrollToSection("about")}> Learn More</Link>
            </button>
            <button className="bg-blue-400 rounded-md px-5 shadow-lg py-2 text-white hover:bg-blue-500 ">
              <Link onClick={() => scrollToSection("about")}> Learn More</Link>
            </button>
          </div>
        </div>
        {/* div2 */}
        <div className="hidden md:block w-1/3">
          <img
            src="https://res.cloudinary.com/dvdrkucjh/image/upload/e6qunvjoj6y0r0chronx"
            alt="cover"
            className=" object-cover  my-28 "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
