import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../pages/_app";
import { getStrapiMedia } from "../lib/media";

const contact = {
  attributes: {
    whatsapp: "5493513855320",
    whatsappLogo: {
      data: {
        attributes: {
          url: "/uploads/whatsapp_7b3b6f3a3e.png",
        },
      },
    },
  },
};

const FloatingContact = () => {
  const { homepage } = useContext(GlobalContext);
  const { contact } = homepage.attributes.data;

  return (
    <a
      href={`https://api.whatsapp.com/send/?phone=${contact.whatsapp.number}&text&app_absent=0`}
      target="_blank"
      rel="noreferrer"
    >
      <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 w-[3rem] h-[3rem] rounded-full z-[800] cursor-pointer shadow-sm shadow-green-500 bg-green-500">
        <img alt={"contact info"} src={contact.whatsapp.iconURL} />
      </div>
    </a>
  );
};
export default FloatingContact;
