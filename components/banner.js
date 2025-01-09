import React, { useContext } from "react";
import BannerTextCard from "./bannerTextCard";
import SectionDefault from "./sectionDefault";
import BannerWaves from "./bannerWaves";

import { GlobalContext } from "../pages/_app";

const Banner = () => {
  const { homepage } = useContext(GlobalContext);

  return (
    <SectionDefault display={"flex justify-center items-center"}>
      {/* <div className="header text-white"> */}
      <div className="text-white md:w-[80%] w-[100%]">
        <div className="flex flex-col justify-evenly items-center  ">
          <BannerTextCard>
            <h2 className="family-custom uppercase text-3xl md:text-3xl lg:text-4xl font-bold text-left text-primary-dark">
              {homepage.attributes.data.banner.title}
            </h2>
          </BannerTextCard>

          <BannerTextCard>
            <p className="text-lg lg:text-xl font-light md:font-light text-blackModal">
              {homepage.attributes.data.banner.description}
            </p>
          </BannerTextCard>
        </div>
      </div>
    </SectionDefault>
  );
};
export default Banner;
