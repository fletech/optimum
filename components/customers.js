import React from "react";
import SectionHeading from "./sectionHeading";
import SectionDefault from "./sectionDefault";
import CustomerSlider from "./customerSlider";

const Customers = () => {
  return (
    <SectionDefault display={"flex flex-col items-center"} classes={"w-full"}>
      <SectionHeading
        topHeadline={"algunos"}
        mainHeadline={"clientes"}
        bottomHeadline={"que nos eligen"}
        textColor={"text-secondary"}
      />
      <CustomerSlider />
    </SectionDefault>
  );
};
export default Customers;
