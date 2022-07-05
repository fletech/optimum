import React from "react";
import SectionDefault from "./sectionDefault";

const Footer = () => {
  return (
    <>
      <SectionDefault
        display={"flex justify-center items-center"}
        classes={"w-full  bg-HL_blue-dark pb-[10vh]"}
      >
        <footer>
          <p className="text-white font-semibold text-xl">Gestión Simple</p>
        </footer>
      </SectionDefault>
    </>
  );
};
export default Footer;
