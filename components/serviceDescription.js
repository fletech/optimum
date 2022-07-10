import React from "react";
import SectionDefault from "./sectionDefault";
import ButtonCustom from "./buttonCustom";
import { useRouter } from "next/router";
import Link from "next/link";
import Contact from "./contact";

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
  title(slug) {
    return this.header.nav[slug];
  },
  button: {
    content: "Consultar ahora",
    action(slug) {
      let path = `/servicios/${slug}#contacto`;
      return path;
    },
  },

  lorem_ipsum:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  list: {
    title: "Ofrecemos",
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
      <div className="w-full min-h-[10vh] flex flex-col justify-between border-b-[1px] border-gray-300 mb-8">
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
                    ? " font-semibold border-b-[2px] border-primary-light"
                    : ""
                }`}
              >
                {CONTENT.header.nav[element]}
              </p>
            </Link>
          ))}
        </div>
      </div>

      <div className="w-full h-full">
        <div className="flex flex-col justify-center md:flex-row md:items-center md:justify-between w-full h-auto mb-6">
          <h2 className="text-2xl text-primary-dark uppercase mb-4 md:mb-0">
            {CONTENT.title(slug)}
          </h2>
          <ButtonCustom
            action={CONTENT.button.action(slug)}
            content={CONTENT.button.content}
            type={"button_secondary"}
            customClasses="max-w-[14rem] uppercase"
          />
        </div>
        <div className="mb-8">
          <p className="leading-8 text-black font-medium text-lg">
            {CONTENT.lorem_ipsum}
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-start justify-start">
          {/* <div className="w-2/3">
            <p className="leading-8 text-black">{CONTENT.lorem_ipsum}</p>
          </div> */}
          <div className="w-full md:w-1/2">
            {/* <div className="w-1/3"> */}
            <p className="text-primary-medium font-semibold text-xl">
              {CONTENT.list.title}
            </p>
            <ul>
              {CONTENT.list.items.map((item, i) => (
                <div key={i} className="flex items-center justify-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-primary-light"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <li className={"text-black font-light my-[0.5rem]"}>
                    {item}
                  </li>
                </div>
              ))}
            </ul>
          </div>
        </div>
        <Contact />
      </div>
      {/* <div className="w-full h-[50vh] flex flex-col items-center justify-center ">
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
      </div> */}
    </SectionDefault>
  );
};
export default ServiceDescription;
