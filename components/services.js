import React from "react";
import SectionHeading from "../components/sectionHeading";
import SectionDefault from "../components/sectionDefault";
import SectionCards from "../components/sectionCards";

import { useContext } from "react";
import { GlobalContext } from "../pages/_app";
import ServiceCard from "./serviceCard";
import { FORM_CLASSES } from "../lib/utils";
import ButtonCustom from "./buttonCustom";
import Link from "next/link";

const Services = () => {
  const { services } = useContext(GlobalContext);

  return (
    <SectionDefault display={"flex flex-col items-center"} padding={"pt-0"}>
      <SectionHeading
        id="servicios"
        topHeadline={"nuestros"}
        mainHeadline={"servicios"}
        textColor={"text-secondary"}
        padding={"pt-[10vh]"}
      />
      <SectionCards>
        <ServiceCard data={services.data} type="service" />
      </SectionCards>

      <SectionHeading
        id="alianzas-estrategicas"
        topHeadline={"nuestras"}
        mainHeadline={"alianzas estratégicas"}
        textColor={"text-secondary"}
        padding={"pt-[10vh]"}
      />
      <SectionCards margin={"mb-[4rem]"}>
        <ServiceCard data={services.data} type="alliance" />
      </SectionCards>

      <ButtonCustom
        button_type={"button_secondary"}
        width={"w-[300px] md:w-[400px]"}
        height={"h-[3rem]"}
      >
        <Link href="/#contacto">
          <p className="flex items-center justify-center uppercase w-full h-full">
            Consultar ahora
          </p>
        </Link>
      </ButtonCustom>
    </SectionDefault>
  );
};
export default Services;
