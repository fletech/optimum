import React from "react";
import SectionDefault from "./sectionDefault";
import StatsCard from "./statsCard";
import StatsHeading from "./statsHeading";

const STATS = [
  {
    id: 1,
    attributes: {
      title: "TRANSFERENCIAS DEL AUTOMOTOR",
      stats: 1000,
      type: "aprox",
    },
  },
  {
    id: 2,
    attributes: {
      title: "RESPUESTA EN EL DÍA",
      stats: 24,
      type: "hour",
    },
  },
  {
    id: 3,
    attributes: {
      title: "AÑOS EN EL RUBRO",
      stats: 8,
      type: "aprox",
    },
  },
  {
    id: 4,
    attributes: {
      title: "ALIANZAS ESTRATÉGICAS",
      stats: 5,
      type: "exact",
    },
  },
];

const Stats = () => {
  return (
    <SectionDefault
      classes={"mt-[6vh] md:mt-[10vh] h-auto bg-black"}
      padding={"py-[5vh] md:px-[4rem] lg:px-[8rem] xl:px-[10%] px-[5%]"}
      display={"flex md:flex-row flex-col justify-between items-center"}
    >
      <div className="md:w-[45%] w-full h-full text-white">
        <StatsHeading
          topHeadline={"Lo que nos avala..."}
          mainHeadline={"algunos números..."}
          bottomHeadline={"...que nos dan confianza en cada gestión."}
          // bottomHeadline={"Lo que nos da confianza en cada gestión."}
          textColor={"text-HL_brown"}
        />
      </div>
      <div className="md:w-[45%] w-full h-auto text-white grid grid-cols-2">
        {STATS.map((stat) => (
          <StatsCard key={stat.id} stat={stat.attributes} />
        ))}
      </div>
    </SectionDefault>
  );
};
export default Stats;
