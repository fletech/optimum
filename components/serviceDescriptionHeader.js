import React, { useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { CONTENT, SERVICES } from "../lib/utils";
import { GlobalContext } from "../pages/_app";

const ServiceDescriptionHeader = ({ serviceRequired }) => {
  const { services } = useContext(GlobalContext);
  const router = useRouter();
  const { slug } = router.query;
  return (
    <div className="w-full min-h-[10vh] flex flex-col justify-between border-b-[1px] border-gray-300 mb-8">
      {/* HEADER - Actions */}
      <div className="flex items-center justify-between text-secondary">
        <Link href={CONTENT.header.actions.back[1]}>
          {CONTENT.header.actions.back[0]}
        </Link>

        {serviceRequired.type == "alliance" ? (
          <Link href={CONTENT.header.actions.goTo_service[1]}>
            {CONTENT.header.actions.goTo_service[0]}
          </Link>
        ) : (
          <Link href={CONTENT.header.actions.goTo_alliance[1]}>
            {CONTENT.header.actions.goTo_alliance[0]}
          </Link>
        )}
      </div>

      {/* HEADER - Items */}
      <div className="hidden md:flex items-center justify-start mb-[1rem]">
        {SERVICES[serviceRequired.type].map((service, i) => {
          //TODO: ver como filtrar para que aparezca en relacion al typo de servicio que es
          return (
            <Link
              href={`${CONTENT.path_root(serviceRequired.type)}/${service}`}
              key={i}
            >
              <p
                className={`mr-6 text-gray-400 cursor-pointer ${
                  service == slug &&
                  " font-semibold border-b-[2px] border-primary-light"
                }`}
              >
                {CONTENT.header.nav(services)[service]}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default ServiceDescriptionHeader;
