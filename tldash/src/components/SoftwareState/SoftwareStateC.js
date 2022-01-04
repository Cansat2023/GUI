import React from "react";

function SoftwareStateC() {
    return (
        <div className="bg-white p-4 border rounded-lg shadow-sm xl:col-span-2">
            <h1 className="font-semibold ">Software State</h1>
            <div className="flex flex-wrap gap-x-2">
                <div className="font-bold text-3xl text-light-gray">
                    LAUNCH WAIT
                </div>
                <div className="font-bold text-3xl text-light-gray">ASCENT</div>
                <div className="font-bold text-3xl text-light-gray">
                    ROCKET_SEPARATION
                </div>
                <div className="font-bold text-3xl text-light-gray">
                    DESCENT
                </div>
                <div className="font-bold text-3xl text-light-gray">LANDED</div>
                <div className="font-bold text-3xl text-light-gray">
                    TP_RELEASED
                </div>
            </div>
        </div>
    );
}

export default SoftwareStateC;
