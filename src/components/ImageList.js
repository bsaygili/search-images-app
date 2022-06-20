import React from "react";
import ImageCard from "./ImageCard";
//CSS
import "./ImageList.css";

const ImageList = ({ images }) => {
  const searchImage = images.map((image) => {
    return <ImageCard key={image.id} image={image} />;
  });
  return <div className="image-list">{searchImage}</div>;
};

export default ImageList;
