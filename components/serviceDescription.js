import React from "react";
import SectionDefault from "./sectionDefault";
import { useRouter } from "next/router";
import Link from "next/link";

const CONTENT = {
  header: {
    actions: {
      back: ["< Volver", "/"],
      forward: ["Ver ALIANZAS ESTRATÉGICAS >", "/#alianzas-estrategicas"],
    },
    nav: {
      "gestoria-del-automotor": "Gestoría del automotor",
      "tramites-generales": "Trámites generales",
      "seguros-generales": "Seguros generales",
    },
  },
  title(path) {
    return this.header.nav[path];
  },
  call_to_action: "Consultar ahora",
  lorem_ipsum:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  list: {
    title: "OFRECEMOS",
    items: [
      "Transferencias automotor",
      "Altas de vehiculos",
      "Cesiones de vehiculos",
      "Cancelación de prendas",
      "Trámites municipales",
      "Rentas",
      "Venta de formularios",
      "Liquidación compañía de seguros",
    ],
  },
};

const SERVICES = [
  "gestoria-del-automotor",
  "tramites-generales",
  "seguros-generales",
];

const ServiceDescription = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <SectionDefault
      display="flex flex-col justify-start items-center"
      classes="w-[100%] min-h-screen mt-[10vh] pb-[10vh] px-[10%]"
      padding={"pt-[2vh]"}
    >
      <div className="w-full min-h-[10vh] flex flex-col justify-between border-b-[1px] border-gray-300 ">
        <div className="flex items-center justify-between text-secondary">
          <Link href={CONTENT.header.actions.back[1]}>
            {CONTENT.header.actions.back[0]}
          </Link>
          <Link href={CONTENT.header.actions.forward[1]}>
            {CONTENT.header.actions.forward[0]}
          </Link>
        </div>

        <div className="hidden md:flex items-center justify-start mb-[1rem]">
          {SERVICES.map((element, i) => (
            <Link href={`/servicios/${element}`} key={i}>
              <p
                className={`mr-6 text-gray-400 cursor-pointer ${
                  element == slug
                    ? " font-semibold border-b-[2px] border-primary-dark"
                    : ""
                }`}
              >
                {CONTENT.header.nav[element]}
              </p>
            </Link>
          ))}
        </div>
      </div>
      <div className="w-full h-[50vh] flex flex-col items-center justify-center ">
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
      </div>
    </SectionDefault>
  );
};
export default ServiceDescription;
