import React from "react";

function Actions() {
    return (
        <div className="font-mulish flex flex-col">
            <h1 className="font-bold text-base mb-3 ml-2">Actions</h1>
            <div className="flex flex-col gap-3">
                <div className="flex gap-2">
                    <button className="rounded-full bg-green-300 h-fit w-fit inline-flex justify-center items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-12 w-12"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                    <div className="flex flex-wrap font-mulish font-bold text-black">
                        Telemetry Transmission (OFF)
                    </div>
                </div>
                <div className="flex gap-2">
                    <button className="rounded-full bg-green-300 h-fit w-fit inline-flex justify-center items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-12 w-12"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                    <div className="flex flex-wrap font-mulish font-bold text-black">
                        MQTT <br /> Transmission (OFF)
                    </div>
                </div>
                <div className="flex gap-2">
                    <button className="rounded-full bg-red-300 h-fit w-fit inline-flex justify-center items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-12 w-12"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                    <div className="flex flex-wrap font-mulish font-bold text-black">
                        Simulation Mode (ON)
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Actions;
