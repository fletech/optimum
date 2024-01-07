import React from "react";
import SectionHeading from "../components/sectionHeading";
import SectionDefault from "../components/sectionDefault";
import SectionCards from "../components/sectionCards";

import { useContext } from "react";
import { GlobalContext } from "../pages/_app";
import BrandingCard from "./brandingCard";

const brands = ["brand_one", "brand_two"];

const Branding = () => {
  const { branding } = useContext(GlobalContext);

  return (
    <SectionDefault display={"flex flex-col items-center"}>
      <SectionHeading
        topHeadline={"por qué"}
        mainHeadline={"elegirnos?"}
        textColor={"text-primary-dark"}
      />
      <SectionCards>
        <BrandingCard data={brands} type="service" />
      </SectionCards>
    </SectionDefault>
  );
};
export default Branding;
