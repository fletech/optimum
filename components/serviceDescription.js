import React from "react";
import SectionDefault from "./sectionDefault";
import { useRouter } from "next/router";

const ServiceDescription = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <>
      <SectionDefault
        display="flex justify-center items-center"
        classes="w-[100%] h-full pb-[10vh]"
      >
        <p>Descripción del servicio en {slug}</p>
        {/* <p>Descripción del servicio en {path}</p> */}
      </SectionDefault>
    </>
  );
};
export default ServiceDescription;
