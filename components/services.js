import React from "react";
import SectionHeading from "../components/sectionHeading";
import SectionDefault from "../components/sectionDefault";
import SectionCards from "../components/sectionCards";

import { useContext } from "react";
import { GlobalContext } from "../pages/_app";
import ServiceCard from "./serviceCard";
import { FORM_CLASSES } from "../lib/utils";
import ButtonCustom from "./button";

const Services = () => {
  const { services } = useContext(GlobalContext);

  return (
    <SectionDefault display={"flex flex-col items-center"}>
      <SectionHeading
        topHeadline={"nuestros"}
        mainHeadline={"servicios"}
        textColor={"text-secondary"}
      />
      <SectionCards margin="mb-[6rem]">
        <ServiceCard data={services} type="service" />
      </SectionCards>

      <SectionHeading
        id="alianzas-estrategicas"
        topHeadline={"nuestras"}
        mainHeadline={"alianzas estratégicas"}
        textColor={"text-secondary"}
      />
      <SectionCards margin={"mb-[4rem]"}>
        <ServiceCard data={services} type="alliance" />
      </SectionCards>

      <ButtonCustom
        content={"CONSULTAR"}
        type={"button_secondary"}
        customClasses={"min-h-[3rem] md:min-w-[15rem] md:max-w-[18rem] w-[60%]"}
      />
    </SectionDefault>
  );
};
export default Services;
