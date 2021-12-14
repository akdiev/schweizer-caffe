import React from "react";
import HeroCards from "./cards";

const Hero = ({ profile }) => {
  const [orderTakeway, setOrderTakeway] = React.useState(false);
  const [activeHero, setActiveHero] = React.useState("saluhallen");

  const handleDotClick = (newValue) => {
    setActiveHero(newValue);
  };

  return (
    <>
      <div id="home" className="hero">
        <div className="hero-content">
          <h1 className="headline">Headline goes</h1>
          <h1 className="headline">on this area</h1>
          <p className="subheadline">
            Ac, est lacus iaculis fringilla senectus elementum. Euismod felis
            adipiscing porta velit.
          </p>
        </div>
        <div className="hero-dots is-hidden-touch">
          <span
            onClick={() => handleDotClick("saluhallen")}
            className={`hero-dots-dot ${
              activeHero === "saluhallen" ? "is-active" : ""
            }`}
          ></span>
          <span
            onClick={() => handleDotClick("sigurdsgatan")}
            className={`hero-dots-dot ${
              activeHero === "sigurdsgatan" ? "is-active" : ""
            }`}
          ></span>
          <span
            onClick={() => handleDotClick("foodtruck")}
            className={`hero-dots-dot ${
              activeHero === "foodtruck" ? "is-active" : ""
            }`}
          ></span>
        </div>
        <div className="cards-container">
          <div className="container">
            {/* <div className="box"> */}
            <HeroCards profile={profile} setOrderTakeway={setOrderTakeway} />
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
