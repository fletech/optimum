import React from "react";
import { FORM_CLASSES } from "../lib/utils";
import ButtonCustom from "./buttonCustom";
const SUBMIT_HANDLER = (e) => {
  console.log("clicked");
  return e.preventDefault();
};

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
      <ButtonCustom
        submit={true}
        handler={SUBMIT_HANDLER}
        content={formData.button.content}
        type={"button_secondary"}
        customClasses={"min-h-[4rem]"}
      />
    </form>
  );
};
export default ContactForm;
