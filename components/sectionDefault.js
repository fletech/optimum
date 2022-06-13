import React from "react";

const sectionDefault = ({ children, display, classes, height }) => {
  return (
    <div
      className={`h-auto w-full px-[5%] pt-[12vh] ${display} ${
        classes ? classes : ""
      }`}
    >
      {children}
    </div>
  );
};
export default sectionDefault;
