import React from "react";
import { CLOUDINARY_URL } from "../utils/constants";
import { ImageDrawer } from "../components/ImageDrawer";

const Inauguration = () => {
  return (
    <div className="flex flex-col justify-center items-center w-screen">
      <h1 className="m-4 text-xl md:text-4xl font-medium px-16 py-3 md:px-20 md:py-4 rounded-l-full rounded-r-full bg-blue-100 w-fit">
        Our Inauguration{" "}
      </h1>
      <p className="font-semibold p-4 text-center ">
        "Explore Our Portfolio: Where Every Project Tells a Story of
        Excellence."
      </p>

      <div className="w-full flex flex-wrap justify-center m-4 p-4 gap-8">
        {" "}
        <div className="w-fit flex ">
          <div>
            <img
              className=""
              src={`${CLOUDINARY_URL}ccy3qrvshu0vujew9vn3
              `}
              alt="about"
            />
          </div>
        </div>
        <div className="md:w-1/2 md:text-xl p-4">
          <p>
            We are thrilled to announce the grand inauguration of Nathkrupa
            Construction, a momentous occasion marking the beginning of a new
            chapter in our journey of excellence. On [Date of Inauguration], we
            gathered with esteemed guests, clients, and partners to commemorate
            this milestone and celebrate our commitment to craftsmanship,
            innovation, and client satisfaction.
            <br></br>
            <br></br>
            The inauguration ceremony was a testament to the dedication and hard
            work of our team, led by visionary founder Swapnil Pawar.
          </p>
          <ImageDrawer />
        </div>
      </div>
    </div>
  );
};

export default Inauguration;
