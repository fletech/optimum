import React from "react";

const sectionDefault = ({ children, display, classes, padding }) => {
  return (
    <div
      className={` w-full ${
        padding ? padding : "pt-[10vh] px-[5%]"
      }  ${display} ${classes ? classes : ""}`}
    >
      {children}
    </div>
  );
};
export default sectionDefault;
