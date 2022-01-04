import React from "react";

function SoftwareStateTP() {
    return (
        <div className="bg-white p-4 border rounded-lg shadow-sm xl:col-span-2">
            <h1 className="font-semibold ">Software State</h1>
            <div className="flex flex-wrap gap-x-2">
                <div className="font-bold text-3xl text-light-gray">STANDBY</div>
                <div className="font-bold text-3xl text-light-gray">RELEASED</div>
                <div className="font-bold text-3xl text-light-gray">TARGET_POINTING</div>
                <div className="font-bold text-3xl text-light-gray">ACQUIRING_TARGET</div>
            </div>
        </div>
    );
}

export default SoftwareStateTP;
