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
          {/* // <Link
        //   key={service.attributes.slug}
        //   href={`/${
        //     type == "service" ? "servicios" : "otros-servicios"
        //   }/[slug]`}
        //   as={`/${type == "service" ? "servicios" : "otros-servicios"}/${
        //     service.attributes.slug
        //   }`}
        // > */}

          <div
            key={service.attributes.slug}
            className="relative flex flex-1 flex-wrap flex-col justify-center items-start px-6 bg-white mx-6 mt-4 md:mt-8 md:h-[18vh] min-h-[15vh] md:min-w-[15rem] md:max-w-[18rem] w-[80%] rounded-md border hover:border-2 border-gray-300 py-4 hover:shadow-lg hover:shadow-slate-200 cursor-pointer font-semibold hover:font-bold hover:scale-110 transition-{scale} ease duration-200"
          >
            <img
              className="absolute top-4 left-6 w-auto max-h-[1.7rem] "
              alt={service.attributes.icon.alternativeText}
              src={service.attributes.icon.externURL}
              // src={getStrapiMedia(service.attributes.icon)}
            />
            <div className="mt-8">
              <p className="text-black text-lg mb-1">
                {service.attributes.title}
              </p>

              <p className="font-light text-gray-500 text-md">
                {service.attributes.subtitle}
              </p>
            </div>
          </div>
        </Link>
      )
  );
};
export default ServiceCard;
