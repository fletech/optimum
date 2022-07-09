import React from "react";
import SectionDefault from "./sectionDefault";
import { useRouter } from "next/router";

const ServiceDescription = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <>
      <SectionDefault
        display="flex flex-col justify-center items-center"
        classes="w-[100%] h-full mt-[10vh] pb-[10vh]"
      >
        <p>Descripción del servicio en {slug}</p>

        <h2>
          Todavía me falta esta sección,{" "}
          <a
            href="https://instagram.com/frangarcia.99?igshid=YmMyMTA2M2Y="
            className="text-blue-500 underline"
          >
            @frangarcia.99
          </a>
        </h2>
        {/* <p>Descripción del servicio en {path}</p> */}
      </SectionDefault>
    </>
  );
};
export default ServiceDescription;
