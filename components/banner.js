import React from "react";
import BannerTextCard from "./bannerTextCard";
import BannerWaves from "./bannerWaves";

import { useContext } from "react";
import { GlobalContext } from "../pages/_app";

const Banner = () => {
  const { homepage } = useContext(GlobalContext);
  return (
    <div className="header text-white">
      <div className="inner-header flex flex-col md:flex-row justify-center items-center ">
        <BannerTextCard justify="start">
          <h2 className="md:text-5xl text-3xl font-bold text-left">
            {homepage.attributes.banner.title}
          </h2>
        </BannerTextCard>

        <BannerTextCard justify="end">
          <p className="md:text-2xl text-xl md:text-right font-regular">
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
