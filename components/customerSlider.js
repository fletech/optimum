import React from "react";
import { useContext } from "react";
import { getStrapiMedia } from "../lib/media";
import { GlobalContext } from "../pages/_app";

const CustomerSlider = () => {
  const { customers } = useContext(GlobalContext);
  const customersAccumulated = [...customers, ...customers, ...customers];

  const length = `length${customersAccumulated.length / 3}`;

  return (
    <div className="slider-container flex items-center relative h-auto min-h-[10rem] w-[80%] md:w-[75%] overflow-hidden mt-6">
      <div
        className={`slider-track ${length} flex items-center justify-center`}
      >
        {customersAccumulated.map((customer, index) => (
          <div
            className="logo flex justify-center items-center px-[2rem] w-[14rem] h-full"
            key={index}
          >
            <img
              alt={customer.name}
              src={getStrapiMedia(customer.attributes.logo)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default CustomerSlider;
