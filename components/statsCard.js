import React from "react";

// import { useContext } from "react";
// import { GlobalContext } from "../pages/_app";

const StatsCard = ({ stat }) => {
  //const { stats } = useContext(GlobalContext);
  const { title, stats, type } = stat;

  const TYPE_STAT = {
    aprox: ">",
    hour: "<",
    exact: "",
  };

  return (
    <div className="h-auto w-auto md:p-4 py-2 px-1">
      <h3 className="font-bold md:text-3xl text-lg text-secondary">
        <span className={`${type == "exact" ? "" : "mr-1"}`}>
          {TYPE_STAT[type]}
        </span>
        {type == "hour" ? `${stats}hs` : stats}
      </h3>
      <p className="md:font-semibold lg:text-lg text-sm">{title}</p>
    </div>
  );
};
export default StatsCard;
