import React from 'react'

function SerialBuffer() {
    return (
        <div className="bg-white p-4 border rounded-lg shadow-sm font-mulish mx-10 mb-5">
            <h1 className="font-semibold mb-1">Buffer</h1>
            <div className="flex flex-wrap bg-neutral-100 h-44 overflow-y-scroll rounded-md">
            1095,23:13:07,769,C,S,R,290.0,25.6,8.78,23:13:07,28.611,77.03845,290.0,9,7,SIMP104880.70 <br />
            1095,23:13:07,2,T,289.0,25.8,8.7,0.14,0.56,0.33,0.79,0.65,-0.05,-0.89,-0.57,0.87,0.83,2 <br />
            1095,23:13:08,770,C,S,R,285.0,24.4,8.58,23:13:08,28.611,77.03845,285.0,9,7,SIMP104818.15 <br />
            1095,23:13:08,3,T,283.5,24.1,8.71,1,-0.91,0.44,-0.77,0.89,0.6,-0.21,0.39,0.85,0.07,2 <br />
            1095,23:13:09,771,C,S,R,280.0,25.7,8.57,23:13:09,28.611,77.03845,280.0,9,7,SIMP104755.64 <br />
            1095,23:13:09,4,T,278.0,25,8.55,0.17,-0.07,-0.59,-0.66,-0.13,-0.71,-0.01,0.66,0.8,0.01,2 <br />
            1095,23:13:10,772,C,S,R,275.0,24.1,8.88,23:13:10,28.611,77.03845,275.0,9,7,SIMP104693.18 <br />
            1095,23:13:10,5,T,272.5,24.5,8.67,0.6,-0.23,-0.91,0.39,-0.38,-0.56,0.82,-0.13,0.99,0.49,2 <br />
            </div>
        </div>
    );
}

export default SerialBuffer
