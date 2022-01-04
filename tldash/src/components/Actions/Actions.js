import React from "react";

function Actions() {
    return (
        <div className="font-mulish flex flex-col">
            <h1 className="font-bold text-base mb-3 ml-2">Actions</h1>
            <div className="flex flex-row gap-3">
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
                <button className="rounded-full bg-yellow-200 h-fit w-fit inline-flex justify-center items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-12 w-12"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
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
            </div>
        </div>
    );
}

export default Actions;
