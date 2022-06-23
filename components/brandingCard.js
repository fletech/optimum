import React from "react";
import { getStrapiMedia } from "../lib/media";

const BrandingCard = ({ data }) => {
  const BG_COLORS = [
    "bg-HL_blue-light",
    "bg-HL_blue-medium",
    "bg-HL_blue-dark",
  ];
  return data.map((brand, index) => (
    <div
      key={brand.id}
      className={`relative flex flex-1 flex-wrap flex-col justify-start items-left ${BG_COLORS[index]} mx-6 mt-6 md:h-auto lg:min-h-[20vh] md:min-w-[15rem] md:max-w-[18rem] w-[80%] rounded-md px-4 py-6 hover:shadow-lg hover:shadow-slate-200 hover:scale-110 transition-{scale} ease duration-200`}
    >
      <div className="mb-4">
        <img
          className="w-[2rem]"
          alt={brand.attributes.icon.data.alternativeText}
          src={brand.attributes.icon.data.attributes.url}
        />
      </div>

      <p className="text-white font-semibold">{brand.attributes.description}</p>
    </div>
  ));
};
export default BrandingCard;
