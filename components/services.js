import React from "react";
import SectionHeading from "../components/sectionHeading";
import SectionDefault from "../components/sectionDefault";
import SectionCards from "../components/sectionCards";

import { useContext } from "react";
import { GlobalContext } from "../pages/_app";
import ServiceCard from "./serviceCard";

const Services = () => {
  const { services } = useContext(GlobalContext);

  return (
    <SectionDefault display={"flex flex-col items-center"}>
      <SectionHeading
        topHeadline={"nuestros"}
        mainHeadline={"servicios"}
        textColor={"text-HL_brown"}
      />
      <SectionCards margin="mb-[4rem]">
        <ServiceCard data={services} type="service" />
      </SectionCards>

      <SectionHeading
        topHeadline={"nuestras"}
        mainHeadline={"alianzas estratégicas"}
        textColor={"text-HL_brown"}
      />
      <SectionCards margin={"mb-[4rem]"}>
        <ServiceCard data={services} type="alliance" />
      </SectionCards>
      <button className="text-md md:text-lg h-[3rem] md:w-[10rem] w-[8rem] text-white font-semibold bg-HL_brown rounded-full shadow-md border shadow-gray-300 ">
        CONSULTAR
      </button>
    </SectionDefault>
  );
};
export default Services;
