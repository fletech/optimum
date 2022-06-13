import React from "react";

const SectionHeading = ({
  topHeadline,
  mainHeadline,
  bottomHeadline,
  textColor,
}) => {
  return (
    <div className="md:w-1/2 w-[80%] flex flex-col justify-center items-center">
      <h3
        className={`capitalize ${textColor} md:text-xl text-lg font-semibold text-center`}
      >
        {topHeadline}
      </h3>
      <h2
        className={`uppercase md:text-3xl text-2xl text-black font-semibold my-2 text-center`}
      >
        {mainHeadline}
      </h2>
      {bottomHeadline && (
        <h3
          className={`capitalize md:text-xl text-lg font-semibold ${textColor} text-center`}
        >
          {bottomHeadline}
        </h3>
      )}
    </div>
  );
};
export default SectionHeading;
