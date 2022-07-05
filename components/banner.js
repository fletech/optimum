import React, { useContext } from "react";
import BannerTextCard from "./bannerTextCard";
import BannerWaves from "./bannerWaves";

import { GlobalContext } from "../pages/_app";

const Banner = () => {
  const { homepage } = useContext(GlobalContext);
  // console.log(GlobalContext.homepage);
  return (
    <div className="header text-white">
      <div className="inner-header flex flex-col md:flex-row justify-center items-center p">
        <BannerTextCard justify="start">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-left">
            {homepage.attributes.banner.title}
          </h2>
        </BannerTextCard>

        <BannerTextCard justify="end">
          <p className="text-lg md:text-xl lg:text-2xl lg:text-right font-regular md:font-semibold">
            {homepage.attributes.banner.description}
          </p>
        </BannerTextCard>
      </div>

      {/* <BannerWaves translated="translated" />
      <BannerWaves
        translated="translated-reverse"
        parallaxAlternative="alternative"
      /> */}
      <BannerWaves />
    </div>
  );
};
export default Banner;
