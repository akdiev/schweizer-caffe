import React from "react";
import { useMediaQuery } from "react-responsive";

const EventsGallery = (props) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const eventsGalleryFirstRow = [
    "/images/gallery_image_food4.jpg",
    "images/about-us-gallery3.jpg",
    "/images/gallery_image_table.jpg",
    "images/about-us-gallery2.jpg",
    "/images/gallery_image_food4.jpg",
    "images/about-us-gallery3.jpg",
    "/images/gallery_image_table.jpg",
    "images/about-us-gallery2.jpg",
    "/images/gallery_image_food4.jpg",
    "images/about-us-gallery3.jpg",
    "/images/gallery_image_table.jpg",
    "images/about-us-gallery2.jpg",
  ];

  const eventsGallerySecondRow = [
    "/images/gallery_image_food_table.jpg",
    "images/gallery_image_service.jpg",
    "/images/gallery_image_food3.jpg",
    "images/gallery_image_food2.jpg",
    "/images/gallery_image_food_table.jpg",
    "images/gallery_image_service.jpg",
    "/images/gallery_image_food3.jpg",
    "images/gallery_image_food2.jpg",
    "/images/gallery_image_food_table.jpg",
    "images/gallery_image_service.jpg",
    "/images/gallery_image_food3.jpg",
    "images/gallery_image_food2.jpg",
  ];

  return (
    <div className="events-gallery">
      <div className="gallery-row">
        {isMobile
          ? eventsGalleryFirstRow.map((picture, k) => (
              <img key={k} src={picture} className="event-gallery-picture" />
            ))
          : eventsGalleryFirstRow.map((picture, k) => (
              <span key={k} className="image-res">
                <img src={picture} className="event-gallery-picture" />
              </span>
            ))}
      </div>
      {props.rows !== 1 ? (
        <div className="gallery-row">
          {isMobile
            ? eventsGallerySecondRow.map((picture, k) => (
                <img key={k} src={picture} className="event-gallery-picture" />
              ))
            : eventsGallerySecondRow.map((picture, k) => (
                <span key={k} className="image-res">
                  <img src={picture} className="event-gallery-picture" />
                </span>
              ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default EventsGallery;
