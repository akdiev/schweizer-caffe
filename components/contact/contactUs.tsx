import React from "react";
import ContactCard from "./contactCard";
import ContactForm from "./contactForm";

export default function ContactUs() {
  return (
    <div id="contact-us" className="contact-us box">
      <div className="contact-us-container container">
        <div className="columns">
          <div className="column">
            <div className="contact-us-info">
              <p className="contact-us-text has-text-weight-bold mb-2">
                CONTACT US
              </p>
              <p className="get-in-touch orange is-3 has-text-primary mb-3">
                Get in touch!
              </p>
              <p className="contact-subtext mb-4">
                Fill in a form and contact us at any time. Our support team is
                always there for you! 👋
              </p>

              <ContactCard
                icon="/images/location-circle.png"
                content="Drabantvägen 4, 194 33 
                Upplands Väsby, Sverige"
              />
              <ContactCard
                icon="/images/location-circle.png"
                content="076 027 41 51"
              />
            </div>
          </div>
          <div className="column">
            <ContactForm />
          </div>
        </div>
      </div>

      <div className="contact-us-decoration decor-left">
        <img src="/images/right-decor.png" alt="Decoration" />
        <img src="/images/left-decor.png" alt="Decoration" />
      </div>
      <div className="contact-us-decoration decor-right">
        <img src="/images/right-decor.png" alt="Decoration" />
        <img src="/images/left-decor.png" alt="Decoration" />
      </div>
    </div>
  );
}
