import React from "react";

const About = ({ images, ...props }) => {
  const imagesToShow = [
    "images/about-us-gallery1.jpg",
    "images/about-us-gallery2.jpg",
    "images/about-us-gallery3.jpg",
    "images/about-us-gallery4.jpg",
  ];
  return (
    <div className="contact-background">
      <div className="about-us-content container">
        <div className="about-us-left">
          <div className="width-80">
            <p className="about-us-header">ABOUT US</p>
            <h2 className="about-us-headline">Discover our Menu</h2>
            <p className="about-us-text">
              Ac, est lacus iaculis fringilla senectus elementum. Euismod felis
              adipiscing porta velit. Ac, est lacus iaculis fringilla senectus
              elementum. Euismod felis adipiscing porta velit. Ac, est lacus
              iaculis fringilla senectus elementum. Euismod felis adipiscin.
            </p>
            <p className="about-us-subtext">
              Now, we decided to change our concept and focus on organic,
              homemade, healthy menu. Our idea of serving 25 landscapes of
              Sweden has finally come to life when we reopened 6th of June.
            </p>
            <button
              onClick={() => props.openMenu(true)}
              className="menu-button width-200"
            >
              VISA MENY
            </button>
          </div>
        </div>
        <div className="about-us-right">
          <div className="about-us-images-left-col">
            <img src={imagesToShow[0]} alt="About Us" />
            <img src={imagesToShow[1]} alt="About Us" />
          </div>
          <div className="about-us-images-right-col">
            <img src={imagesToShow[1]} alt="About Us" />
            <img src={imagesToShow[0]} alt="About Us" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
