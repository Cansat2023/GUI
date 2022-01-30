import React from "react";
import SerialBuffer from "../components/Buffer/SerialBuffer";
import Dash from "../components/Dash";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Dashboard() {
    return (
        <div className="flex flex-col h-full w-full bg-yellowish">
            <Header />
            {/* <SerialBuffer/> */}
            <Dash />
            <Footer />
        </div>
    );
}

export default Dashboard;
