import React from "react";
import { FORM_CLASSES } from "../lib/utils";

const ButtonCustom = ({ type, content, customClasses }) => {
  return (
    <button
      className={`${FORM_CLASSES[type]} ${customClasses} `}
      // border-4 border-secondary hover:border-secondary hover:bg-secondary hover:text-white
    >
      {content}
    </button>
  );
};
export default ButtonCustom;
