import React from "react";
import TimeOfWork from "../timeOfWork";
import { IoMdBasket } from "react-icons/io";
import { useRouter } from "next/router";

const SingleCard = (props) => {
  const { imageSource, children, whiteCircle, highZindex } = props;

  return (
    <div className={`hero-card ${highZindex ? "high-index" : ""}`}>
      <div className="hero-card-image">
        {}
        <img
          src={imageSource}
          className={whiteCircle && "white-border"}
          alt="Card"
        />
      </div>
      <div className="hero-card-content">{children}</div>
    </div>
  );
};

const HeroCards = ({ setOrderTakeway, profile, ...props }) => {
  const router = useRouter();
  const handleClick = () => {
    setOrderTakeway(true);
  };

  function handleOpenGoogleMaps() {
    const win = window.open("https://goo.gl/maps/YS67nQcmWSaE1sh79", "_blank");
    win.focus();
  }

  return (
    <div className="hero-cards">
      <div className="columns is-desktop">
        <div className="column is-4-desktop is-12-mobile is-12-tablet">
          <SingleCard imageSource="/images/icons/time.svg" highZindex={true}>
            <p className="title is-5 mb-1">ÖPPETTIDER</p>
            <TimeOfWork workTime={profile?.working_time} />
          </SingleCard>
        </div>
        <div
          className="column is-4-desktop is-12-mobile is-12-tablet cursor-pointer"
          onClick={() => handleOpenGoogleMaps()}
        >
          <SingleCard imageSource="/images/location-circle.png">
            <p className="title is-5 mb-1">ADDRESS</p>
            <p className="address">{profile?.address}</p>
          </SingleCard>
        </div>
        <div
          className="column is-4-desktop is-12-mobile is-12-tablet cursor-pointer"
          onClick={() => window.open("tel:+4684115177")}
        >
          <SingleCard
            imageSource="/images/icons/icons/call-icon.png"
            whiteCircle={true}
          >
            <p className="title is-5 mb-1">CONTACT</p>
            <p className="address">{profile?.phone}</p>
          </SingleCard>
        </div>
        {/* <div className="column is-3-desktop is-12-mobile is-12-tablet">
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
        </div> */}
      </div>
    </div>
  );
};

const CustomCallSingleCard = () => {
  <SingleCard imageSource="/images/icons/icons/call-icon.png">
    <p className="title is-5 mb-1">CONTACT</p>
    <p className="address">+512 4123 5612</p>
  </SingleCard>;
};

export default HeroCards;
