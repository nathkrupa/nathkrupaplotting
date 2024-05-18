import React from "react";
import { CLOUDINARY_URL } from "../utils/constants";

const ServiceCard = (data) => {
  const { img, title, description } = data.data;
  return (
    <div className=" flex flex-col justify-center items-center p-4">
      <div className="flex flex-col justify-center items-center w-full max-w-lg">
        <div>
          <img src={`${CLOUDINARY_URL}${img}`} />
        </div>
        <h1 className="text-2xl font-medium py-4 self-start w-full">{title}</h1>{" "}
        <p className="w-full">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
