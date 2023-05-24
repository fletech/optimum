import React from "react";

const sectionDefault = ({ children, display, classes, padding, id }) => {
  return (
    <div
      id={id}
      className={` w-full ${
        padding ? padding : "pt-[10vh] px-[10%]"
      }  ${display} ${classes ? classes : ""}`}
    >
      {children}
    </div>
  );
};
export default sectionDefault;
