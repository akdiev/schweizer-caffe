import React from "react";

const ContactCard = ({ icon, content }) => {
  return (
    <div
      className="contact-us-card cursor-pointer"
      onClick={() =>
        content == "+4684115177"
          ? window.open("tel:+4684115177")
          : window.open("https://goo.gl/maps/YS67nQcmWSaE1sh79", "_blank")
      }
    >
      <img src={icon} alt="Contact Us Card" />
      <p className="font-secondary">{content}</p>
    </div>
  );
};

export default ContactCard;
