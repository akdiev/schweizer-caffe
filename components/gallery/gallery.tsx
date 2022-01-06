import React from "react";
import GallerySlider from "./gallerySlider";
import { IoChevronForwardSharp, IoChevronBackSharp } from "react-icons/io5";
import { makeSingleArray } from "../../utils/helpers";
import Imgix from "react-imgix";

const SliderArrow = ({ forward = true, handleClick }) => {
  const arrowClasses = ["slider-arrow", "is-hidden-touch", "is-clickable"];

  if (forward) {
    arrowClasses.push("slider-arrow-forward");
  } else {
    arrowClasses.push("slider-arrow-back");
  }

  return (
    <div onClick={handleClick} className={arrowClasses.join(" ")}>
      {forward ? <IoChevronForwardSharp /> : <IoChevronBackSharp />}
    </div>
  );
};

const MainGallery = ({ images }) => {
  const [currentSlide, setCurrentSlide] = React.useState(1);

  const allImages = makeSingleArray(images);

  const maxImagesPerSlide = 3;
  const totalSlides = Math.ceil(allImages.length / maxImagesPerSlide);

  const handleForward = () => {
    if (currentSlide < totalSlides) setCurrentSlide(currentSlide + 1);
    else setCurrentSlide(1);
  };

  const handleBackward = () => {
    if (currentSlide > 1) setCurrentSlide(currentSlide - 1);
    else setCurrentSlide(totalSlides);
  };

  return (
    <div id="gallery" className="main-gallery">
      <GallerySlider
        images={
          currentSlide === 1
            ? allImages.slice(
                (totalSlides - 1) * maxImagesPerSlide,
                totalSlides * maxImagesPerSlide
              )
            : allImages.slice(
                (currentSlide - 2) * maxImagesPerSlide,
                (currentSlide - 1) * maxImagesPerSlide
              )
        }
        previous
        next={undefined}
      />
      <div className="main-gallery-container container is-hidden-touch">
        <GallerySlider
          images={allImages.slice(
            (currentSlide - 1) * maxImagesPerSlide,
            currentSlide * maxImagesPerSlide
          )}
          previous={undefined}
          next={undefined}
        />
      </div>
      <GallerySlider
        images={
          currentSlide === totalSlides
            ? allImages.slice(0, maxImagesPerSlide)
            : allImages.slice(
                currentSlide * maxImagesPerSlide,
                (currentSlide + 1) * maxImagesPerSlide
              )
        }
        next
        previous={undefined}
      />
      <SliderArrow handleClick={handleForward} />
      <SliderArrow handleClick={handleBackward} forward={false} />

      <div className="gallery is-hidden-desktop">
        {makeSingleArray(images).map((image, k) => {
          // <Imgix
          //   key={k}
          //   width={432}
          //   height={270}
          //   src={image}
          //   alt="Gallery item"
          // />;
        })}
      </div>
    </div>
  );
};

export default MainGallery;
