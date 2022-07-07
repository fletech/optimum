import React from "react";
import SectionDefault from "./sectionDefault";

const Footer = () => {
  return (
    <>
      <SectionDefault
        display={"flex justify-center items-center"}
        classes={"w-full h-[10rem] bg-primary-dark "}
        padding={"p-4"}
      >
        <footer className="h-full flex flex-col justify-evenly items-center">
          <img
            alt="logo-white"
            src="/images/LOGO-white.svg"
            className=" max-h-[3rem]"
          />
          <small className="text-white font-semibold ">Hecho con 🤍</small>
        </footer>
      </SectionDefault>
    </>
  );
};
export default Footer;
