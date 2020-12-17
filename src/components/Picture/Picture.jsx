import React from "react";
import "./css/Picture.css";

export default function Picture(props) {
  let imgURL;
  if (props.isdarkThemeActive) {
    imgURL = `image-dark-theme/${props.imgName}`;
  } else {
    imgURL = `image-light-theme/${props.imgName}`;
  }

  return (
    <picture className="Illustration-container">
      <img
        className="Hero-Illustration"
        src={imgURL}
        alt="hero seciton svg illustration"
      />
    </picture>
  );
}
