import React from "react";

function SoftwareStateTP() {
    return (
        <div className="bg-white p-4 border rounded-lg shadow-sm font-mulish xl:col-span-2">
            <h1 className="font-semibold mb-1">Software State</h1>
            <div className="flex gap-2 mb-1">
                <div className="bg-transparent rounded-xl px-2 border-4 font-black text-neutral-300 border-neutral-300 flex justify-center">1</div>
                <div className="bg-red-300 rounded-xl px-2 border-4 font-black text-black border-black flex justify-center">2</div>
                <div className="bg-transparent rounded-xl px-2 border-4 font-black text-neutral-400 border-neutral-400 flex justify-center">3</div>
                <div className="bg-transparent rounded-xl px-2 border-4 font-black text-neutral-400 border-neutral-400 flex justify-center">4</div>
            </div>
            <div className="flex flex-wrap gap-x-2">
                <div className="font-bold text-3xl text-neutral-300 hidden">STANDBY</div>
                <div className="font-extrabold text-3xl text-black">RELEASED</div>
                <div className="font-bold text-3xl text-neutral-400 hidden">DATA_RELAY</div>
                <div className="font-bold text-3xl text-neutral-400 hidden">RECOVERY</div>
            </div>
        </div>
    );
}

export default SoftwareStateTP;
