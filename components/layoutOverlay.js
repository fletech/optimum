import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../pages/_app";
import ButtonCustom from "./buttonCustom";

const LayoutOverlay = () => {
  const { contact } = useContext(GlobalContext);
  return (
    <div className="fixed h-screen w-screen top-0 left-0 bg-blackModal  z-[20000] flex justify-center items-center">
      <div className=" w-[90%] md:w-[80%] h-[40%] md:h-[70%]   flex flex-col justify-center items-center">
        <div className="flex flex-col justify-evenly w-[90%] text-white">
          <h1 className="text-3xl md:text-4xl mb-10 text-secondary text-center">
            Este sitio-web se encuentra en desarrollo.
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-center ">
            Podés comunicarte con nosotros por{" "}
            <span className="font-bold">
              Trámites Generales y Gestoría del Automotor
            </span>{" "}
            a través de:{" "}
          </p>
          <div className="flex w-full items-center justify-center mb-8">
            <a
              // href={`https://api.whatsapp.com/send/?phone=${contact.attributes.whatsapp}&text&app_absent=0`}
              target="_blank"
              rel="noreferrer"
            >
              <p className="font-bold text-xl md:text-2xl">
                <ButtonCustom
                  content={"WhatsApp"}
                  button_type="button_secondary"
                />
              </p>
            </a>
            <a href={"mailTo:gestoria@gestionsimple.ar"} className="mx-[2rem]">
              <p className="font-bold text-xl md:text-2xl">
                <ButtonCustom
                  content={"Email"}
                  button_type="button_secondary"
                />
              </p>
            </a>
            <a href={"tel:+5493513855320"}>
              <p className="font-bold text-xl md:text-2xl">
                <ButtonCustom
                  content={"Llamada"}
                  button_type="button_secondary"
                />
              </p>
            </a>
          </div>
        </div>
        <img
          alt="logo"
          src="/images/LOGO-brown.svg"
          className="h-auto max-w-[15rem] w-[90%] mt-6"
        />
      </div>
    </div>
  );
};
export default LayoutOverlay;
