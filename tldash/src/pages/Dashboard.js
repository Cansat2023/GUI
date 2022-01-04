import React from "react";
import Dash from "../components/Dash";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Dashboard() {
    return (
        <div className="flex flex-col h-screen w-full bg-yellowish">
            <Header />
            <Dash />
            <Footer />
        </div>
    );
}

export default Dashboard;
