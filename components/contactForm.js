import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { FORM_CLASSES } from "../lib/utils";
import ButtonCustom from "./buttonCustom";

const ContactForm = ({ formData }) => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const SUBMIT_HANDLER = (e) => {
    setLoading(true);
    e.preventDefault();

    return emailjs
      .sendForm(
        "service_zoho",
        "template_nueva_consulta",
        form.current,
        "r-7YZ2iEsbddZNbnI"
      )
      .then(
        (result) => {
          console.log(result);
          result.text == "OK" ? setLoading(false) : null;
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <form ref={form} onSubmit={SUBMIT_HANDLER} className="w-full">
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
        type={formData.button.type}
        loading={loading}
        // handler={SUBMIT_HANDLER}
        content={formData.button.content}
        button_type={"button_secondary"}
        customClasses={"min-h-[4rem]"}
      />
    </form>
  );
};
export default ContactForm;
