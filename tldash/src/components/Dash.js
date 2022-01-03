import React from 'react'
import Expagraph from './ExpandedGraph/Expagraph'
import ExpagraphB from './ExpandedGraphB/ExpagraphB'
import Minigraph from './MiniA/Minigraph'
import MinigraphB from './MiniB/MinigraphB'

function Dash() {
    return (
        <div className="grid md:grid-cols-2 grid-cols-1 grid-rows-1 md:grid-rows-1 px-10 font-mulish divide-y-2 md:divide-x-2 md:divide-y-0">
            <div className="mb-2 md:mr-2 md:mb-0">
                <h1 className="font-bold text-base mb-3">
                    Tethered Payload
                </h1>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3 overflow-hidden">
                    <Expagraph/>
                    <Minigraph subtype = "Voltage" unit = "volts" color={1}/>
                </div>
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
