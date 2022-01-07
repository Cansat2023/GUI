import React from "react";
import SuparealChart from "./SuparealChart";

function Expagraph(props) {
  return (
    <div className="col-span-full bg-white flex font-mulish rounded-xl border border-stroke drop-shadow-sm p-4 flex-col">
      <div className="flex flex-col xl:flex-row xl:justify-between xl:items-start pb-1">
        <div className="flex items-end">
          <div className="font-bold text-xl pr-1">Altitude</div>
          <h4 className="font-bold text-base text-light-gray">meters</h4>
        </div>
        <div className="flex items-end">
          <h3 className="font-normal text-3xl pr-1">502</h3>
        </div>
      </div>
      <div>
          <SuparealChart color={2}/>
      </div>
    </div>
  );
}

export default Expagraph;
