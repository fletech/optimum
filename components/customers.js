import React from "react";
import SectionHeading from "./sectionHeading";
import SectionDefault from "./sectionDefault";
import CustomerSlider from "./customerSlider";

const Customers = () => {
  return (
    <SectionDefault display={"flex flex-col items-center"}>
      <SectionHeading
        topHeadline={"algunos"}
        mainHeadline={"clientes"}
        bottomHeadline={"que nos eligen"}
        textColor={"text-HL_brown"}
      />
      <CustomerSlider />
    </SectionDefault>
  );
};
export default Customers;
