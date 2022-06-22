import React from "react";

const SectionHeading = ({
  topHeadline,
  mainHeadline,
  bottomHeadline,
  textColor,
}) => {
  return (
    <div className="md:w-1/2 w-[90%] flex flex-col justify-center items-center">
      <h3
        className={`capitalize ${textColor} md:text-lg text-md font-semibold text-center`}
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
          className={`capitalize md:text-lg text-md font-semibold ${textColor} text-center`}
        >
          {bottomHeadline}
        </h3>
      )}
    </div>
  );
};
export default SectionHeading;
