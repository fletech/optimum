import React from "react";
import { getStrapiMedia } from "../lib/media";

const ServiceCard = ({ data, type }) => {
  console.log(data[0].attributes);
  return data.map(
    (service) =>
      service.attributes.type == type && (
        <div
          key={service.id}
          className="relative flex flex-1 flex-wrap flex-col justify-evenly items-center bg-white mx-6 mt-4 md:mt-8 md:h-[18vh] min-h-[15vh] md:min-w-[15rem] md:max-w-[18rem] w-[60%] rounded-md border hover:border-2 border-gray-300 py-4 hover:shadow-lg hover:shadow-slate-200 cursor-pointer font-semibold hover:font-bold hover:scale-110 transition-{scale} ease duration-200"
        >
          <img
            className="w-[3rem] max-h-[3rem]"
            alt={service.attributes.icon.data.alternativeText}
            src={service.attributes.icon.data.attributes.url}
            // src={getStrapiMedia(service.attributes.icon)}
          />
          <p className="text-black md:text-xl text-lg ">
            {service.attributes.title}
          </p>
        </div>
      )
  );
};
export default ServiceCard;
