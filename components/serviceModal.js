import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { useContext } from "react";
import { GlobalContext } from "../pages/_app";
import { Dialog } from "@headlessui/react";

const ServiceModal = () => {
  //   console.log(router);
  const { modal, setModal } = useContext(GlobalContext);

  return (
    <Dialog
      open={modal}
      onClose={() => setModal(false)}
      className={
        "relative z-[1000]  w-[100%] h-[100vh] flex justify-center items-center "
      }
    >
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <Dialog.Backdrop
        className="fixed inset-0 bg-black/30 "
        aria-hidden="true"
      />

      {/* Full-screen container to center the panel */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        {/* The actual dialog panel  */}
        <Dialog.Panel className=" w-[80%] h-[80%] rounded bg-white flex justify-center items-center">
          <Dialog.Title className={"font-semibold text-2xl text-black"}>
            Acá viene la descripcion del servicio
          </Dialog.Title>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default ServiceModal;
