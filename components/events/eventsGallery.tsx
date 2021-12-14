import React from "react";

const EventsGallery = (props) => {
  const eventsGallery = [
    "/images/about-us-gallery1.jpg",
    "images/about-us-gallery2.jpg",
    "images/about-us-gallery3.jpg",
    "images/about-us-gallery4.jpg",
    "/images/about-us-gallery1.jpg",
    "images/about-us-gallery2.jpg",
    "images/about-us-gallery3.jpg",
    "images/about-us-gallery4.jpg",
    "/images/about-us-gallery1.jpg",
    "images/about-us-gallery2.jpg",
    "images/about-us-gallery3.jpg",
    "images/about-us-gallery4.jpg",
    "/images/about-us-gallery1.jpg",
    "images/about-us-gallery2.jpg",
    "images/about-us-gallery3.jpg",
    "images/about-us-gallery4.jpg",
  ];

  return (
    <div className="events-gallery">
      <div className="gallery-row">
        {eventsGallery.map((picture, k) => (
          <img key={k} src={picture} className="event-gallery-picture" />
        ))}
      </div>
      {props.rows !== 1 ? (
        <div className="gallery-row">
          {eventsGallery.reverse().map((picture, k) => (
            <img key={k} src={picture} className="event-gallery-picture" />
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default EventsGallery;
