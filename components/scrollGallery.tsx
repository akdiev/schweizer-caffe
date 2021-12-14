import React from "react";

function ScrollGallery({ images }) {
  const mainGallery = images[2].images;

  return (
    <div className="scroll-gallery">
      {mainGallery.map((image, index) => (
        <img key={index} src={image.thumb_wide} alt="Gallery item" />
      ))}
    </div>
  );
}

export default ScrollGallery;
