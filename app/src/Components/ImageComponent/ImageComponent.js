import React from 'react'
import "./ImageComponent.css"
import UFO from "../../assets/ufo-transparent.gif"

function ImageComponent() {
    return (
        <div className="image-component">
            <img src={UFO} alt="api hacks 2" />
        </div>
    )
}

export default ImageComponent