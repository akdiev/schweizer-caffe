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
        <div className="hero-content container">
          <p className="hero-feature">Feature</p>
          <h1 className="headline">Headline goes</h1>
          <h1 className="headline">on this area</h1>
          <p className="subheadline">
            Ac, est lacus iaculis fringilla senectus elementum.
          </p>
          <p className="subheadline">Euismod felis adipiscing porta velit.</p>
        </div>
        <div className="cards-container">
          <div className="container">
            <HeroCards profile={profile} setOrderTakeway={setOrderTakeway} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
