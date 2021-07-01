import React from "react";
import "./ImageComponent.css";
import UFO from "../../assets/ufo.gif";
import Icon from './image.svg'
function ImageComponent() {
  return (
    <div className="image-component">
      <img src={Icon} width="80%"/>
    </div>
  );
}

export default ImageComponent;
