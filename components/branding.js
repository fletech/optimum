import React from "react";
import SectionHeading from "../components/sectionHeading";
import SectionDefault from "../components/sectionDefault";
import SectionCards from "../components/sectionCards";

import { useContext } from "react";
import { GlobalContext } from "../pages/_app";
import BrandingCard from "./brandingCard";

const Branding = () => {
  const { branding } = useContext(GlobalContext);

  return (
    <SectionDefault display={"flex flex-col items-center"}>
      <SectionHeading
        topHeadline={"por qué"}
        mainHeadline={"elegirnos?"}
        textColor={"text-HL_blue-dark"}
      />
      <SectionCards>
        <BrandingCard data={branding} type="service" />
      </SectionCards>
    </SectionDefault>
  );
};
export default Branding;
