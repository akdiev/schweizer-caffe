import React from "react";

const ContactCard = ({ icon, content }) => {
  return (
    <div className="contact-us-card">
      <img src={icon} alt="Contact Us Card" />
      <p className="font-secondary">{content}</p>
    </div>
  );
};

export default ContactCard;
