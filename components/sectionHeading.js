import React from "react";

const SectionHeading = ({
  topHeadline,
  mainHeadline,
  bottomHeadline,
  textColor,
  id,
  padding,
}) => {
  return (
    <div
      id={id}
      className={`md:w-1/2 w-[100%] mb-8 flex flex-col justify-center items-center ${padding}`}
    >
      <h3
        className={` family-custom uppercase ${textColor} md:text-lg text-md font-semibold text-center`}
      >
        {topHeadline}
      </h3>
      <h2
        className={`uppercase md:text-4xl text-3xl text-black font-semibold text-center`}
      >
        {mainHeadline}
      </h2>
      {bottomHeadline && (
        <h3
          className={`family-custom uppercase md:text-lg text-md font-semibold ${textColor} text-center`}
        >
          {bottomHeadline}
        </h3>
      )}
    </div>
  );
};
export default SectionHeading;
