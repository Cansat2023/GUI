import React from 'react'
import Dash from '../components/Dash'
import Header from '../components/Header'

function Dashboard() {
    return (
        <div className="flex flex-col h-screen w-full bg-yellowish">
            <Header/>
            <Dash/>
        </div>
    )
}

export default Dashboard
