import React, { useContext } from "react";
import BannerTextCard from "./bannerTextCard";
import SectionDefault from "./sectionDefault";
import BannerWaves from "./bannerWaves";

import { GlobalContext } from "../pages/_app";

const Banner = () => {
  const { homepage } = useContext(GlobalContext);
  // console.log(GlobalContext.homepage);
  return (
    <SectionDefault display={"flex justify-center items-center"}>
      {/* <div className="header text-white"> */}
      <div className="text-white md:w-[80%] w-[100%]">
        <div className="flex flex-col justify-evenly items-center  ">
          <BannerTextCard>
            <h2 className="family-custom uppercase text-3xl md:text-3xl lg:text-4xl font-bold text-left text-primary-dark">
              {homepage.attributes.banner.title}
            </h2>
          </BannerTextCard>

          <BannerTextCard>
            <p className="text-xl md:text-xl lg:text-2xl font-light md:font-semibold text-black">
              {homepage.attributes.banner.description}
            </p>
          </BannerTextCard>
        </div>

        {/* <div className="inner-header flex flex-col md:flex-row justify-center items-center p">
        <BannerTextCard justify="start">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-left text-primary-dark">
            {homepage.attributes.banner.title}
          </h2>
        </BannerTextCard>

        <BannerTextCard justify="end">
          <p className="text-lg md:text-xl lg:text-2xl lg:text-right font-regular md:font-semibold text-black">
            {homepage.attributes.banner.description}
          </p>
        </BannerTextCard>
      </div> */}

        {/* <BannerWaves translated="translated" />
      <BannerWaves
        translated="translated-reverse"
        parallaxAlternative="alternative"
      /> */}
        {/* <BannerWaves /> */}
      </div>
    </SectionDefault>
  );
};
export default Banner;
