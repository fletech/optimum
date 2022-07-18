import React from "react";
import { useRouter } from "next/router";
import { CONTENT } from "../lib/utils";
import ButtonCustom from "./buttonCustom";
import Contact from "./contact";

const ServiceDescriptionContent = ({ serviceRequired }) => {
  const router = useRouter();
  const { slug } = router.query;
  let url;
  let alternativeText;
  if (serviceRequired.logo.data != null) {
    url = serviceRequired.logo.data.attributes.url;
    alternativeText = serviceRequired.logo.data.attributes.alternativeText;
  }

  return (
    <div className="w-full h-full">
      <div className="flex flex-col justify-center md:flex-row md:items-center md:justify-between w-full h-auto mb-6">
        <h2 className="text-3xl text-primary-dark uppercase mb-4 md:mb-0">
          {serviceRequired.title}
        </h2>
        <ButtonCustom
          action={CONTENT.button.action(slug, serviceRequired.type)}
          content={CONTENT.button.content}
          button_type={"button_secondary"}
          customClasses="max-w-[14rem] uppercase"
        />
      </div>
      <div>
        {url && (
          <img
            className={
              "max-w-[14rem] grayscale-[100%] relative -left-[7px] mb-6"
            }
            alt={alternativeText}
            src={url}
          />
        )}
      </div>
      <div className="mb-8">
        <p className="leading-8 text-black font-medium text-lg">
          {serviceRequired.description}
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-start justify-start">
        {/* <div className="w-2/3">
            <p className="leading-8 text-black">{CONTENT.lorem_ipsum}</p>
          </div> */}
        <div className="w-full md:w-1/2">
          {/* <div className="w-1/3"> */}
          <p className="text-primary-medium font-semibold text-xl">
            {serviceRequired.services_title}
          </p>
          <ul>
            {CONTENT.list
              .items(serviceRequired.services_offered)
              .map((item, i) => {
                if (item.length > 0) {
                  item.toLowerCase();
                  return (
                    <div key={i} className="flex items-center justify-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-primary-medium"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <li
                        className={
                          "text-black font-light my-[0.5rem] capitalize"
                        }
                      >
                        {item}
                      </li>
                    </div>
                  );
                }
              })}
          </ul>
        </div>
      </div>
      <Contact />
    </div>
  );
};
export default ServiceDescriptionContent;
