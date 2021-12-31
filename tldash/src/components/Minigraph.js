import React from "react";
import RealChart from "./RealChart";

function Minigraph() {
  return (
    <div className="bg-white flex font-mulish rounded-xl border border-stroke drop-shadow-sm p-4 flex-col relative h-44">
      <h4 className="font-semibold text-base z-10 relative">Altitude</h4>
      <div className="flex-row flex items-end z-10 relative">
        <h3 className="font-normal text-3xl pr-1">50</h3>
        <h4 className="font-bold text-base text-light-gray">meters</h4>
      </div>
      <div className="absolute bottom-0 inset-x-0 p-4">
        <RealChart />
      </div>
    </div>
  );
}

export default Minigraph;
