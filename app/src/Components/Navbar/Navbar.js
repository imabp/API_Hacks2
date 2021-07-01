import React from 'react'
import "./Navbar.css"

function Navbar() {
    return (
        <div className="navbar stroke">
            <ul>
                <li><a href=".">Home</a></li>
                <li><a href=".">Team</a></li>
                <li><a href=".">Register</a></li>
                <li><a href=".">Sponsors</a></li>
            </ul>
        </div>
    )
}

export default Navbar
