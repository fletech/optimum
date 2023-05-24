import React, { useContext, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

//import { getStrapiMedia } from "../lib/media";

// import { GlobalContext } from "../pages/_app";

const ServiceCard = ({ data, type }) => {
  // const router = useRouter();
  // const { setModal } = useContext(GlobalContext);

  // const handleModal = (route) => {
  //   router.push("/", `servicios/${route}`, { shallow: true });
  //   setModal(true);
  // };

  return data.map(
    (service) =>
      service.attributes.type == type && (
        <Link
          key={service.attributes.slug}
          href="/servicios/[slug]"
          as={`/servicios/${service.attributes.slug}`}
        >
          <div
            key={service.attributes.slug}
            className="relative flex flex-1 flex-wrap flex-col justify-evenly items-center bg-white mx-6 mt-4 md:mt-8 md:h-[18vh] min-h-[15vh] md:min-w-[15rem] md:max-w-[18rem] w-[60%] rounded-md border hover:border-2 border-gray-300 py-4 hover:shadow-lg hover:shadow-slate-200 cursor-pointer font-semibold hover:font-bold hover:scale-110 transition-{scale} ease duration-200"
          >
            {/* <img
              className="w-[80%] md:w-[full] max-h-[3rem]"
              alt={service.attributes.icon.data.alternativeText}
              src={service.attributes.icon.data.attributes.url}
              // src={getStrapiMedia(service.attributes.icon)}
            /> */}
            <p className="text-black md:text-xl text-lg ">
              {service.attributes.title}
            </p>
          </div>
        </Link>
      )
  );
};
export default ServiceCard;
