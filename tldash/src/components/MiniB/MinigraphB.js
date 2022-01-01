import React from "react";
import RealChartB from "./RealChartB";

function MinigraphB(props) {
  return (
    <div className="bg-white flex font-mulish rounded-xl border border-stroke drop-shadow-sm p-4 flex-col relative h-44">
      <div className="flex-row flex items-end z-10 relative justify-between">
        <h4 className="font-semibold text-base z-10 relative">
          {props.subtype}
        </h4>
        <h4 className="font-bold text-base text-light-gray">{props.unit}</h4>
      </div>
      <div className="flex-row flex items-end z-10 relative">
        <h4 className="font-bold text-base text-light-gray">R</h4>
        <h3 className="font-normal text-3xl pr-1">502</h3>
        <h4 className="font-bold text-base text-light-gray">P</h4>
        <h3 className="font-normal text-3xl pr-1">500</h3>
        <h4 className="font-bold text-base text-light-gray">Y</h4>
        <h3 className="font-normal text-3xl pr-1">50</h3>
      </div>
      <div className="absolute bottom-0 inset-x-0 p-4">
        <RealChartB color={props.color} />
      </div>
    </div>
  );
}

export default MinigraphB;
