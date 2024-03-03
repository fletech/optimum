import React from "react";
import { FORM_CLASSES } from "../lib/utils";

const ButtonCustom = ({ type, button_type, children, width, height }) => {
  return (
    <button
      type={type}
      className={`font-semibold hover:font-bold text-lg text-white transition duration-300 ease hover:ease-out focus:border-white focus:border-2 outline-none rounded-md shadow-md shadow-gray-400 ${
        FORM_CLASSES[button_type]
      } 
      ${
        button_type == "button_primary"
          ? " bg-primary-dark hover:bg-primary-medium focus:bg-primary-dark  "
          : " bg-secondary hover:bg-secondary_button focus:bg-secondary_button "
      }
      ${width} ${height}`}
    >
      {children}
    </button>
  );
};
export default ButtonCustom;
