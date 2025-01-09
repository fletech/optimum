import React from "react";
import SectionDefault from "./sectionDefault";

const Footer = () => {
  return (
    <>
      <SectionDefault
        display={"flex justify-center items-center"}
        classes={"w-full h-[10rem] bg-black"}
        padding={"p-4"}
      >
        <footer className="h-full flex flex-col justify-evenly items-center">
          <img
            alt="logo-white"
            src="/images/LOGO-white.svg"
            className=" max-h-[3rem]"
          />
          <small className=" text-white font-light group  w-auto">
            Diseño y desarrollo{" "}
            <a
              href="https://www.linkedin.com/in/facundo-garcia-ar/"
              target="_blank"
              className="relative border-b-[0.5px] border-white border-dashed  "
            >
              Facundo
              <div className="transition-opacity duration-300 ease-in-out">
                <span className="hidden group-hover:flex w-3 h-3 absolute -right-3 -top-[1px] -rotate-45 text-white ">
                  {"->"}
                </span>
              </div>
            </a>
          </small>
        </footer>
      </SectionDefault>
    </>
  );
};
export default Footer;
