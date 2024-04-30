import React from "react";
import { CLOUDINARY_URL } from "../utils/constants";

const Vision = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="m-4 text-xl md:text-3xl font-medium px-20 py-4 rounded-l-full rounded-r-full bg-blue-100 w-fit">
        Vision
      </h1>

      <div className="w-full flex justify-center m-4 p-4 gap-8">
        {" "}
        <div className="w-fit flex ">
          <div>
            <img
              className=""
              src={`${CLOUDINARY_URL}lzbq3jy76gw4sf3udhry`}
              alt="about"
            />
            <div className="p-6 w-24 mx-4 rounded-bl-full  bg-blue-100"></div>
          </div>
          <div className="p-6 h-24 my-4 rounded-tr-full bg-blue-100"></div>
        </div>
        <div className="w-1/2 text-xl ">
          <p>
            Our vision for Nathkrupa Construction is to redefine the
            construction industry through a steadfast commitment to excellence,
            innovation, and client satisfaction. With a passion for crafting
            exceptional spaces and a dedication to integrity and
            professionalism, Nathkrupa Construction as a beacon of quality and
            reliability in the construction landscape. Our goal is to empower
            clients to realize their dreams by delivering bespoke solutions that
            exceed expectations and stand the test of time, setting new
            standards of excellence in every project undertaken.
            <br></br>
            <br></br>
            <span className="font-semibold">
              "Building Dreams, Building Futures: Your Vision, Our Expertise."{" "}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Vision;
