import React from 'react'
import Heading from '../Heading/Heading'
import Navbar from '../Navbar/Navbar'
import Socials from '../Socials/Socials'
import "./LandingComponent.css"

function LandingComponent() {
    return (
        <div className="landing">
            <Navbar />
            <Heading />
            <Socials />
        </div>
    )
}

export default LandingComponent
