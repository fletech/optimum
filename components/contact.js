import React from "react";
import ContactForm from "./contactForm";
import SectionDefault from "./sectionDefault";
import SectionHeading from "./sectionHeading";

const FORM = {
  inputs: [
    {
      type: "text",
      name: "nombre",
      value: "",
      placeholder: "ej: Gestión",
      label: "Nombre",
    },
    {
      type: "text",
      name: "apellido",
      value: "",
      placeholder: "ej: Simple",
      label: "Apellido",
    },
    {
      type: "email",
      name: "e-mail",
      value: "",
      placeholder: "ej: hola@gestionsimple.ar",
      label: "Email",
    },
    {
      type: "phone",
      name: "phone",
      value: "",
      placeholder: "ej: 3513123456",
      label: "Nº de teléfono",
    },
    {
      type: "textarea",
      name: "query",
      value: "",
      placeholder: "Escriba su consulta aquí...",
      label: "Mensaje",
    },
  ],
  button: {
    type: "submit",
    name: "button-submit",
    content: "ENVIAR CONSULTA",
  },
};

// const INPUT_TEXTAREA_CLASSES =
//   "w-full text-HL_brown border border-1 p-2 hover:border-black focus:border-HL_brown focus:border-2 outline-none rounded-md active:autofill:text-HL_brown focus:invalid:border-red-500 focus:invalid:text-red-500  active:invalid:border-red-500 active:invalid:text-red-500 invalid:border-red-500 invalid:text-red-500";

const Contact = () => {
  return (
    <SectionDefault
      id="contact"
      display={"grid items-start"}
      padding={
        "pt-[5vh] md:pt-[10vh] md:px-[4rem] lg:px-[8rem] xl:px-[2rem] px-[1rem]"
      }
    >
      <div className="h-auto pb-[5vh]">
        <div className="h-full px-6 md:px-0  flex flex-col justify-center items-center">
          <SectionHeading
            textColor={"text-HL_brown"}
            topHeadline={"dejanos"}
            mainHeadline={"tu consulta"}
          />
          <div className="sm:w-[80%] md:w-[75%] lg:w-[60%] xl:w-[40%] ">
            <div className="w-full my-4 ">
              <p className="font-semibold text-black">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque eu sapien in sem, rutrum cursus libero.
              </p>
            </div>
            <div className="form w-full flex flex-col justify-start items-center">
              <ContactForm formData={FORM} />
            </div>
          </div>
        </div>
      </div>
    </SectionDefault>
  );
};
export default Contact;
