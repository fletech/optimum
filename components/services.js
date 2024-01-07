import React from "react";
import SectionHeading from "../components/sectionHeading";
import SectionDefault from "../components/sectionDefault";
import SectionCards from "../components/sectionCards";

import { useContext } from "react";
import { GlobalContext } from "../pages/_app";
import ServiceCard from "./serviceCard";
import { FORM_CLASSES } from "../lib/utils";
import ButtonCustom from "./buttonCustom";

const services = [
  { attributes: { slug: "branding", title: "Branding", type: "service" } },
  { attributes: { slug: "web", title: "Web", type: "service" } },
  { attributes: { slug: "ecommerce", title: "Ecommerce", type: "service" } },
];

const Services = () => {
  {
    /* REEMPLAZO */
  }
  const { services } = useContext(GlobalContext);
  console.log(services);

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
        action={"#contacto"}
        content={"CONSULTAR"}
        button_type={"button_secondary"}
        customClasses={
          " min-h-[3rem] md:min-w-[15rem] md:max-w-[18rem] w-[60%]"
        }
      />
    </SectionDefault>
  );
};
export default Services;
