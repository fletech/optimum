import React from "react";
import { getStrapiMedia } from "../lib/media";
import ReactMarkdown from "react-markdown";

//Resolver las props simplemente usando el context. Evitar usar props nuevamente
const Hero = ({ coverImage, heroTitle, heroSubtitle, heroDescription }) => {
  return (
    <div className="relative md:h-[93vh] h-[90vh] w-full overflow-hidden ">
      <div className="w-full h-full relative">
        <img
          src={coverImage.data.attributes.url}
          className="h-full w-full object-cover brightness-100"
        />
      </div>

      <div className="absolute w-full h-full top-0 left-0 bg-overlayBlack z-[100]"></div>

      <div className="absolute z-200 top-1/2 left-1/2 px-[5%] -translate-x-1/2 -translate-y-1/2 w-full flex-col justify-around items-center z-[200] text-center ">
        <div className="w-full px-[10%] flex justify-center">
          <p className="text-2xl md:text-3xl md:w-1/2 w-2/3 font-semibold text-HL_brown">
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
        <button className="text-md md:text-lg h-[3rem] md:w-[10rem] w-[8rem] text-white font-semibold bg-HL_blue-dark border rounded-full shadow-md  shadow-gray-400 ">
          VER MÁS
        </button>
      </div>
    </div>
  );
};

export default Hero;
