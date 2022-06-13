import React from "react";

const SectionCards = ({ margin, children }) => {
  return (
    <>
      <div
        className={`w-full flex flex-wrap lg:flex-row flex-col justify-center items-center ${margin}`}
      >
        {children}
      </div>
    </>
  );
};
export default SectionCards;
