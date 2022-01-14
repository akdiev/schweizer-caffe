import React from "react";
import HeroCards from "./cards";
import Image from "next/image";

const Hero = ({ profile }) => {
  const [orderTakeway, setOrderTakeway] = React.useState(false);
  const [activeHero, setActiveHero] = React.useState("saluhallen");

  const handleDotClick = (newValue) => {
    setActiveHero(newValue);
  };

  return (
    <>
      <div id="home" className="hero">
        <Image
          alt="hero background"
          src="/images/dashboard-background.jpg"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
        <div className="hero-content container">
          <p className="hero-feature">Feature</p>
          <h1 className="headline">Welcome to </h1>
          <h1 className="headline">Cafe Schweizer!</h1>
          <p className="subheadline">SINCE 1920 - STOCKHOLM</p>
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
