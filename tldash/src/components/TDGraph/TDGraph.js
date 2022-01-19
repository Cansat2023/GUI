import React from "react";
import SupatdChart from "./SupatdChart";

function TDGraph(props) {
    return (
        <div className="col-span-full bg-white flex font-mulish rounded-xl border border-stroke drop-shadow-sm p-4 flex-col">
            <div className="flex flex-col xl:flex-row xl:justify-between xl:items-start pb-1">
                <div className="flex items-end">
                    <div className="font-bold text-xl pr-1">Magnetometer</div>
                    <h4 className="font-bold text-base text-light-gray">
                        meters
                    </h4>
                </div>
                <div className="flex items-end">
                    <h4 className="font-bold text-base text-light-gray">R</h4>
                    <h3 className="font-normal text-3xl pr-1">49</h3>
                    <h4 className="font-bold text-base text-light-gray">P</h4>
                    <h3 className="font-normal text-3xl pr-1">52</h3>
                    <h4 className="font-bold text-base text-light-gray">Y</h4>
                    <h3 className="font-normal text-3xl pr-1">50</h3>
                </div>
            </div>
            <div>
                <SupatdChart />
            </div>
        </div>
    );
}

export default TDGraph;
