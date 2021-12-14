import React from "react";
import TimeOfWork from "../timeOfWork";
import { IoMdBasket } from "react-icons/io";

const SingleCard = (props) => {
  const { imageSource, children } = props;

  return (
    <div className="hero-card">
      <div className="hero-card-image">
        <img src={imageSource} alt="Card" />
      </div>
      <div className="hero-card-content">{children}</div>
    </div>
  );
};

const HeroCards = ({ setOrderTakeway, profile }) => {
  const handleClick = () => {
    setOrderTakeway(true);
  };

  return (
    <div className="hero-cards">
      <div className="columns is-desktop">
        <div className="column is-3-desktop is-12-mobile is-12-tablet">
          <SingleCard imageSource="/images/icons/time.svg">
            <p className="title is-5 mb-1">ÖPPETTIDER</p>
            <TimeOfWork workTime={profile.working_time} />
          </SingleCard>
        </div>
        <div className="column is-3-desktop is-12-mobile is-12-tablet">
          <SingleCard imageSource="/images/location-circle.png">
            <p className="title is-5 mb-1">ADDRESS</p>
            <p className="address">{profile.address}</p>
          </SingleCard>
        </div>
        <div className="column is-3-desktop is-12-mobile is-12-tablet">
          <SingleCard imageSource="/images/icons/icons/call-icon.png">
            <p className="title is-5 mb-1">CONTACT</p>
            <p className="address">+512 4123 5612</p>
          </SingleCard>
        </div>
        <div className="column is-3-desktop is-12-mobile is-12-tablet">
          <SingleCard imageSource="/images/restaurant-circle.png">
            <p className="title is-5 mb-1">TAKEAWAY?</p>
            <button
              className="menu-button width-200 has-font-14"
              onClick={() => handleClick()}
            >
              <span className="basket-icon">
                <IoMdBasket />
              </span>{" "}
              BESTÄLL TAKEAWAY
            </button>
          </SingleCard>
        </div>
      </div>
    </div>
  );
};

export default HeroCards;
