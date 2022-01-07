import React from 'react'

function Header() {
    return (
        <div className="flex flex-col md:flex-row bg-transparent pb-5 px-10 justify-between pt-5">
            <div className="flex flex-col justify-end md:mb-0 mb-5">
                <h1 className="font-mulish font-bold text-xl text-darkest-gray">Team Kalam</h1>
                <p className="font-mulish font-semibold text-sm text-[#6A6969]">Connected, Delay: 500ms</p>
            </div>
            <div className="bg-white flex space-x-4 w-fit h-fit p-3 rounded-xl border border-stroke drop-shadow-sm mx-auto md:mx-0">
                <div className="font-mulish flex flex-col justify-center space-y-0">
                    <h1 className="text-2xl text-darkest-gray leading-none">1077</h1>
                    <p className="text-xs text-light-gray font-bold">TEAM ID</p>
                </div>
                <div className="font-mulish flex flex-col justify-center space-y-0">
                    <h1 className="text-2xl text-darkest-gray leading-none">13:28:45</h1>
                    <p className="text-xs text-light-gray font-bold">UTC MISSION TIME</p>
                </div>
                <div className="font-mulish flex flex-col justify-center space-y-0">
                    <h1 className="text-2xl text-darkest-gray leading-none">467</h1>
                    <p className="text-xs text-light-gray font-bold">PACKET COUNT</p>
                </div>
                <div className="font-mulish flex flex-col justify-center space-y-0">
                    <h1 className="text-2xl text-darkest-gray leading-none">C</h1>
                    <p className="text-xs text-light-gray font-bold">PACKET TYPE</p>
                </div>
            </div>
        </div>
    )
}

export default Header
