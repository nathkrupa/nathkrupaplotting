import React from "react";
import ServiceCard from "../components/ServiceCard";
import { ServiceCardData } from "../utils/constants";

const Service = () => {
  return (
    <div className="flex flex-col  justify-center items-center w-screen">
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
