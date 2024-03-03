import React, { useEffect, useState } from "react";
import SectionDefault from "./sectionDefault";
import ButtonCustom from "./buttonCustom";
import { useRouter } from "next/router";
import Link from "next/link";
import Contact from "./contact";
import { content } from "../lib/content";

const STRUCTURE = {
  header: {
    actions: {
      service: {
        back: ["< Volver", "/"],
        forward: ["Ver ALIANZAS ESTRATÉGICAS >", "/#alianzas-estrategicas"],
      },
      alliance: {
        back: ["< Nuestros Servicios", "/servicios/gestoria-del-automotor"],
        forward: ["Ver SERVICIOS >", "/#servicios"],
      },
    },
    nav(services, type) {
      const navItems = services
        .filter((item) => item.attributes.type == type)
        .map((service) => ({
          title: service.attributes.title,
          slug: service.attributes.slug,
        }));

      return navItems;
    },
  },
  button: {
    content: "Consultar ahora",
    action(slug) {
      let path = `/servicios/${slug}#contacto`;
      return path;
    },
  },
};

const ServiceDescription = ({ serviceRequested }) => {
  const router = useRouter();
  const { slug } = router.query;

  const navItems = STRUCTURE.header.nav(
    content.services.data,
    serviceRequested.type
  );

  return (
    <SectionDefault
      display="flex flex-col justify-start items-center"
      classes="w-[100%] min-h-screen mt-[10vh] pb-[10vh] px-[10%]"
      padding={"pt-[2vh]"}
    >
      <div className="w-full min-h-[10vh] flex flex-col justify-between border-b-[1px] border-gray-300 mb-8">
        <div className="flex items-center justify-between text-secondary">
          <Link href={STRUCTURE.header.actions[serviceRequested.type].back[1]}>
            {STRUCTURE.header.actions[serviceRequested.type].back[0]}
          </Link>
          <Link
            href={STRUCTURE.header.actions[serviceRequested.type].forward[1]}
          >
            {STRUCTURE.header.actions[serviceRequested.type].forward[0]}
          </Link>
        </div>

        <div className="hidden md:flex items-center justify-start mb-[1rem]">
          {navItems.map((element, i) => {
            return (
              <Link href={`/servicios/${element.slug}`} key={i}>
                <p
                  className={`mr-6 text-gray-400 cursor-pointer ${
                    element.slug == slug
                      ? " font-semibold border-b-[3px] border-primary-light"
                      : ""
                  }`}
                >
                  {element.title}
                </p>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="w-full h-full">
        <div className="flex flex-col justify-center md:flex-row md:items-center md:justify-between w-full h-auto mb-6">
          <h2 className="text-2xl text-primary-dark uppercase mb-4 md:mb-0">
            {serviceRequested.title}
          </h2>
          <ButtonCustom
            button_type={"button_secondary"}
            width={"w-[300px]"}
            height={"h-[3rem]"}
          >
            <Link href={STRUCTURE.button.action(slug)}>
              <p className="w-full h-full flex items-center justify-center uppercase">
                {STRUCTURE.button.content}
              </p>
            </Link>
          </ButtonCustom>
        </div>
        <div className="mb-8">
          {serviceRequested.type == "alliance" && (
            <img
              src={serviceRequested.logo}
              alt={serviceRequested.title}
              className="w-1/6 mb-8"
            />
          )}
          <p className="leading-8 text-black font-medium text-lg">
            {serviceRequested.description}
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-start justify-start">
          <div className="w-full md:w-1/2">
            <p className="text-primary-medium font-semibold text-xl">
              {serviceRequested.services_title}
            </p>
            <ul>
              {serviceRequested.services_offered.map((item, i) => (
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
      <Contact />
    </SectionDefault>
  );
};
export default ServiceDescription;
