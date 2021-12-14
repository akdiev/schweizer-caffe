import React from "react";
import Imgix from "react-imgix";

const GallerySlider = ({ images, previous, next }) => {
  if (images.length === 0) {
    return <></>;
  }

  let additinalClassname = "";

  if (previous) additinalClassname = "is-previous";
  if (next) additinalClassname = "is-next";

  return (
    <div className={`gallery-slide ${additinalClassname}`}>
      {/* {images.length === 1 && (
        <img className="single-image-grid" src={images[0]} alt="Gallery item" />
      )}

      {images.length === 2 && (
        <>
          <img
            className="double-image-grid image-1"
            src={images[0]}
            alt="Gallery item"
          />
          <img
            className="double-image-grid image-2"
            src={images[1]}
            alt="Gallery item"
          />
        </>
      )}

      {images.length >= 3 && (
        <>
          <img
            className="triple-image-grid image-1"
            src={images[0]}
            alt="Gallery item"
          />
          <img
            className="triple-image-grid image-2"
            src={images[1]}
            alt="Gallery item"
          />
          <img
            className="triple-image-grid image-3"
            src={images[2]}
            alt="Gallery item"
          />
        </>
      )} */}
      <Imgix width={432} height={270} src={images[0]} alt="Gallery item" />;
      <Imgix width={432} height={270} src={images[1]} alt="Gallery item" />;
      <Imgix width={432} height={270} src={images[2]} alt="Gallery item" />;
    </div>
  );
};

export default GallerySlider;
