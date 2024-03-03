import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { FORM_CLASSES } from "../lib/utils";
import ButtonCustom from "./buttonCustom";
import Spinner from "./spinner";

const ContactForm = ({ formData }) => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const SUBMIT_HANDLER = (e) => {
    e.preventDefault();

    if (e.target[0].value == "" && e.target[4].value == "") {
      return alert("Por favor complete los campos obligatorios");
    } else {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        form.current.reset();
      }, 1000);
    }
    // return emailjs
    //   .sendForm(
    //     "service_zoho",
    //     "template_nueva_consulta",
    //     form.current,
    //     "r-7YZ2iEsbddZNbnI"
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result);
    //       result.text == "OK" ? setLoading(false) : null;
    //       form.current.reset();
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );
  };
  return (
    <form ref={form} onSubmit={SUBMIT_HANDLER} className="w-full">
      <div className="w-full flex flex-col justify-around h-full  ">
        <label className={FORM_CLASSES.label}>
          Nombre
          <input
            name={"name"}
            className={FORM_CLASSES.input_textarea_primary}
            type="text"
            placeholder="ej: Gestión"
          />
        </label>
        <label className={FORM_CLASSES.label}>
          Apellido
          <input
            name={"surname"}
            className={FORM_CLASSES.input_textarea_primary}
            type="text"
            placeholder="ej: Simple"
          />
        </label>
        <label className={FORM_CLASSES.label}>
          Email
          <input
            name={"email"}
            className={FORM_CLASSES.input_textarea_primary}
            type="email"
            placeholder="ej: hola@gestionsimple.ar"
          />
        </label>
        <label className={FORM_CLASSES.label}>
          Teléfono
          <input
            name={"phone"}
            className={FORM_CLASSES.input_textarea_primary}
            type="phone"
            placeholder="ej: 3513123456"
          />
        </label>

        <label className={FORM_CLASSES.label}>
          Mensaje
          <textarea
            name={"message"}
            className={`min-h-[3rem] max-h-[6rem] ${FORM_CLASSES.input_textarea_primary}`}
            type={"textarea"}
            placeholder={"ej: Escriba su consulta aquí..."}
          />
        </label>

        {/* {formData.inputs.map((input) => {
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
        })} */}
      </div>
      <ButtonCustom
        type={formData.button.type}
        content={formData.button.content}
        button_type={"button_secondary"}
        width={"w-full"}
        height={"h-[3rem]"}
      >
        <p className="flex items-center justify-center uppercase w-full h-full">
          {loading ? (
            <>
              <Spinner />
              Enviando
            </>
          ) : (
            "Enviar"
          )}
        </p>
      </ButtonCustom>
    </form>
  );
};
export default ContactForm;
