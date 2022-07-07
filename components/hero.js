import React from "react";
import { FORM_CLASSES, selectAnImage } from "../lib/utils";

import { getStrapiMedia } from "../lib/media";
import ReactMarkdown from "react-markdown";
import ButtonCustom from "./button";

//Resolver las props simplemente usando el context. Evitar usar props nuevamente
const Hero = ({ homepage, images }) => {
  const { heroTitle, heroSubtitle, heroDescription, coverTitle } =
    homepage.attributes.hero;
  const coverImage = selectAnImage(images, coverTitle);

  return (
    <div className="relative md:h-[100vh] h-[92vh] h-[100vh] w-full overflow-hidden ">
      <div className="w-full h-full relative">
        <img
          src={coverImage.data.attributes.url}
          className="h-full w-full object-cover brightness-100"
        />
      </div>

      <div className="absolute w-full h-full top-0 left-0 bg-overlayBlack z-[100]"></div>

      <div className="absolute z-200 top-1/2 left-1/2 px-[5%] -translate-x-1/2 -translate-y-1/2 w-full mt-[5vh] flex-col justify-around items-center z-[200] text-center ">
        <div className="w-full px-[10%] flex justify-center">
          <p className="family-custom uppercase text-2xl md:text-3xl md:w-1/2 w-2/3 font-semibold text-secondary">
            {heroSubtitle}
          </p>
        </div>

        <h1 className="  text-6xl md:text-7xl lg:text-8xl font-bold text-white my-12">
          {heroTitle}
        </h1>
        <div className="w-full flex justify-center mb-12">
          {/* <ReactMarkdown
            className="text-lg md:text-2xl md:w-1/2 w-[80%] text-white"
            childrenReactMD={heroDescription}
          /> */}
          <p className="text-2xl md:text-3xl md:w-1/2 w-[80%] text-white">
            {heroDescription}
          </p>
        </div>

        <ButtonCustom
          content={"VER MÁS"}
          type={"button_primary"}
          customClasses={
            "min-h-[3rem] max-w-[10rem] bg-secondary  hover:bg-secondary_button focus:bg-secondary_button"
          }
        />
      </div>
    </div>
  );
};

export default Hero;
