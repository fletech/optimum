import React from "react";
import { getStrapiMedia } from "../lib/media";

const ServiceCard = ({ data, type }) => {
  return (
    <>
      {data.map(
        (service) =>
          service.attributes.type == type && (
            <>
              <div
                key={service.id}
                className="relative flex flex-1 flex-wrap flex-col justify-evenly items-center bg-white mx-10 mt-4  md:h-[18vh] min-h-[12vh] md:min-w-[15rem] md:max-w-[18rem] w-[70%] rounded ring-1 hover:ring-2 ring-gray-300 py-4 hover:shadow-lg hover:shadow-slate-200 cursor-pointer font-light hover:font-semibold"
              >
                <img
                  className="w-[3rem]"
                  alt={service.attributes.icon.data.alternativeText}
                  src={getStrapiMedia(service.attributes.icon)}
                />
                <p className="">{service.attributes.title}</p>
              </div>
            </>
          )
      )}
    </>
  );
};
export default ServiceCard;
