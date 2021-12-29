import React from 'react'

function Dash() {
    return (
        <div className="grid md:grid-cols-2 grid-cols-1 grid-rows-2 md:grid-rows-1 px-10 font-mulish divide-y-2 md:divide-x-2 md:divide-y-0">
            <div className="mb-2 md:mr-2 md:mb-0">
                <h1 className="font-bold text-base">
                    Tethered Payload
                </h1>
            </div>
            <div className="pt-2 md:pl-2 md:pt-0">
                <h1 className="font-bold text-base">
                    Container
                </h1>
            </div>
        </div>
    )
}

export default Dash
