import React from "react";

const StatsHeading = ({
  topHeadline,
  mainHeadline,
  bottomHeadline,
  textColor,
}) => {
  return (
    <div className=" w-full flex flex-col justify-center items-start md:mb-0 mb-10">
      {/* <p className={`md:text-xl text-lg font-semibold text-left`}>
        {topHeadline}
      </p> */}
      <h2
        className={`uppercase md:text-3xl text-2xl font-semibold my-2 text-left ${textColor}`}
      >
        {mainHeadline}
      </h2>
      {bottomHeadline && (
        <p className={`md:text-xl text-lg font-semibold text-left`}>
          {bottomHeadline}
        </p>
      )}
    </div>
  );
};
export default StatsHeading;
