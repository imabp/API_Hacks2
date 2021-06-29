import React from 'react'
import { SocialIcon } from 'react-social-icons';
import "./Socials.css"

function Socials() {
    return (
        <div className="socials">
            <SocialIcon url="https://twitter.com" style={{ width: 40, height: 40 }} className="icon" />
            <SocialIcon url="https://linkedin.com" style={{ width: 40, height: 40 }} className="icon" />
            <SocialIcon url="https://medium.com" style={{ width: 40, height: 40 }} className="icon" />
            <SocialIcon url="https://instagram.com" style={{ width: 40, height: 40 }} className="icon" />
            <SocialIcon url="https://discord.com" style={{ width: 40, height: 40 }} className="icon" />
        </div>
    )
}

export default Socials
