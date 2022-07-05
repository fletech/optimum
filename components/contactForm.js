import React from "react";
import { FORM_CLASSES } from "../lib/utils";

const ContactForm = ({ formData }) => {
  return (
    <form className="w-full">
      <div className="w-full flex flex-col justify-around h-full  ">
        {formData.inputs.map((input) => {
          if (input.type != "textarea") {
            return (
              <div key={input.name}>
                <span className={FORM_CLASSES.label}>{input.label}</span>
                <input
                  name={input.name}
                  className={FORM_CLASSES.input_textarea_primary}
                  type={input.type}
                  placeholder={input.placeholder}
                />
              </div>
            );
          } else {
            return (
              <div key={input.name}>
                <span className={FORM_CLASSES.label}>{input.label}</span>
                <textarea
                  name={input.name}
                  className={`min-h-[3rem] max-h-[6rem] ${FORM_CLASSES.input_textarea_primary}`}
                  type={input.type}
                  placeholder={input.placeholder}
                />
              </div>
            );
          }
        })}
      </div>
      <button
        className={`${FORM_CLASSES.input_textarea_primary} min-h-[4rem] font-semibold text-lg border-4 border-HL_brown hover:border-HL_brown
        hover:bg-HL_brown hover:text-white hover:font-bold transition duration-300 ease hover:ease-out`}
      >
        {formData.button.content}
      </button>
    </form>
  );
};
export default ContactForm;
