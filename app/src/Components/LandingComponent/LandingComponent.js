import React from 'react'
import Heading from '../Heading/Heading'
import Navbar from '../Navbar/Navbar'
import "./LandingComponent.css"

function LandingComponent() {
    return (
        <div className="landing">
            <Navbar />
            <Heading />
        </div>
    )
}

export default LandingComponent
