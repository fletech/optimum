import React from "react";

const BannerTextCard = ({ children, justify }) => {
  return (
    <div
      className={`md:w-[80%] w-[80%] my-4 md:my-0 flex justify-${justify} items-center ${
        justify == "start"
          ? "md:pl-16 lg:pl-30 xl:pl-60"
          : "md:pr-16 lg:pr-30 xl:pr-60"
      }`}
    >
      {children}
    </div>
  );
};
export default BannerTextCard;
