import React from "react";

const BannerTextCard = ({ children, justify }) => {
  return (
    <div
      className={`md:w-1/2 w-[80%] my-4 md:my-0 flex justify-${justify} items-center ${
        justify == "start" ? "md:pl-20 lg:pl-60" : "md:pr-20 lg:pr-60"
      }`}
    >
      {children}
    </div>
  );
};
export default BannerTextCard;
