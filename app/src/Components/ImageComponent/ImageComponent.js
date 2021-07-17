import React from "react";
import "./ImageComponent.css";
//import UFO from "../../assets/ufo.gif";
import Icon from './image.svg'
function ImageComponent() {
  return (
    <div className="image-component">
      <img alt="" src={Icon} width="90%"/>
    </div>
  );
}

export default ImageComponent;
