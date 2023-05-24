import React, { useContext } from "react";
import { useRouter } from "next/router";
import ButtonCustom from "./buttonCustom";
import Contact from "./contact";
import SectionDefault from "./sectionDefault";
import ServiceDescriptionHeader from "./serviceDescriptionHeader";
import ServiceDescriptionContent from "./serviceDescriptionContent";

const ServiceDescription = ({ serviceRequired }) => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <SectionDefault
      display="flex flex-col justify-start items-center"
      classes="w-[100%] min-h-screen mt-[10vh] pb-[10vh] px-[10%]"
      padding={"pt-[2vh]"}
    >
      <ServiceDescriptionHeader serviceRequired={serviceRequired} />
      <ServiceDescriptionContent serviceRequired={serviceRequired} />
    </SectionDefault>
  );
};
export default ServiceDescription;
