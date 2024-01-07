import React from "react";
import { useContext } from "react";
import { getStrapiMedia } from "../lib/media";
import { GlobalContext } from "../pages/_app";

const customers = [
  {
    name: "customer1",
    attributes: {
      logo: {
        data: {
          attributes: {
            url: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
          },
        },
      },
    },
  },
  {
    name: "customer2",
    attributes: {
      logo: {
        data: {
          attributes: {
            url: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
          },
        },
      },
    },
  },
];
const CustomerSlider = () => {
  {
    /* REEMPLAZO */
  }

  // const { customers } = useContext(GlobalContext);
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
              src={customer.attributes.logo.data.attributes.url}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default CustomerSlider;
