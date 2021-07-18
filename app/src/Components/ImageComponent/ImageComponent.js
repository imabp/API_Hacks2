import React from "react";
import "./ImageComponent.css";
import Icon from './image.svg'
function ImageComponent() {
  return (
    <div className="image-component">
      <img src={Icon} width="90%"/>
    </div>
  );
}

export default ImageComponent;
