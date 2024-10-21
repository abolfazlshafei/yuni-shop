import React from "react";

import images from "./images";

import CustomSlider from "./components/custom.slider";

import "./styles.css";

export default function Imageslider() {
  return (
    <div className="Imageslider">
      <CustomSlider>
        {images.map((image, index) => {
          return <img key={index} src={image.imgURL} alt={image.imgAlt} />;
        })}
      </CustomSlider>
      <div className="info">

      </div>
    </div>
  );
}


