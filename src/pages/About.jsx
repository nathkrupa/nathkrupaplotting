import React from "react";
import { CLOUDINARY_URL } from "../utils/constants";

const About = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="m-4 text-xl md:text-3xl font-medium px-20 py-4 rounded-l-full rounded-r-full bg-blue-100 w-fit">
        About Us
      </h1>

      <div className="w-full flex justify-center m-4 p-4 gap-8">
        {" "}
        <div className="w-fit flex ">
          <div>
            <img
              className=""
              src={`${CLOUDINARY_URL}pqijmvr4wezsvgvkvdqy`}
              alt="about"
            />
            <div className="p-6 w-24 mx-4 rounded-bl-full  bg-blue-100"></div>
          </div>
          <div className="p-6 h-24 my-4 rounded-tr-full bg-blue-100"></div>
        </div>
        <div className="w-1/2 text-xl ">
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
