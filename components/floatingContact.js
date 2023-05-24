import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../pages/_app";
import { getStrapiMedia } from "../lib/media";

const FloatingContact = () => {
  const { contact } = useContext(GlobalContext);

  return (
    <a
      href={`https://api.whatsapp.com/send/?phone=${contact.attributes.whatsapp}&text&app_absent=0`}
      target="_blank"
      rel="noreferrer"
    >
      <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 w-[4rem] h-[4rem] rounded-full z-[800] cursor-pointer shadow-md shadow-gray-500">
        <img
          alt={"contact info"}
          src={getStrapiMedia(contact.attributes.whatsappLogo)}
        />
      </div>
    </a>
  );
};
export default FloatingContact;
