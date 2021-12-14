import React from "react";
import Column from "../../assets/Bulma/Column";
import Columns from "../../assets/Bulma/Columns";
import Imgix from "react-imgix";
import { makeSingleArray } from "../../utils/helpers";

const About = ({ images }) => {
  const imagesToShow = makeSingleArray(images).slice(2);
  return (
    <div className="contact-background">
      <div className="about-us-content">
        <Columns>
          <div className="column about-us-padding">
            <div className="about-us-left">
              <div>
                <p className="about-us-header">ABOUT US</p>
                <h2 className="about-us-headline">
                  Headline goes on this area
                </h2>
                <p className="about-us-text">
                  Ac, est lacus iaculis fringilla senectus elementum. Euismod
                  felis adipiscing porta velit. Ac, est lacus iaculis fringilla
                  senectus elementum. Euismod felis adipiscing porta velit. Ac,
                  est lacus iaculis fringilla senectus elementum. Euismod felis
                  adipiscin.
                </p>
                <p className="about-us-subtext">
                  Ac, est lacus iaculis fringilla senectus elementum. Euismod
                  felis adipiscing porta velit. Ac, est lacus iaculis fringilla
                  senectus elementum. Euismod felis adipiscing porta velit.
                </p>
                <button className="menu-button width-200">VISA MENY</button>
              </div>
            </div>
          </div>
          {/* <Column>
            <div className="about-us-gallery">
              <Columns>
                <Column xl={6} className="height-100">
                  <img
                    src="/images/about-us-gallery1.jpg"
                    className="height-60"
                    alt="Food image"
                  />
                  <img
                    src="/images/about-us-gallery2.jpg"
                    className="height-40"
                    alt="Food image"
                  />
                </Column>

                <Column xl={6} className="height-100">
                  <img
                    src="/images/about-us-gallery3.jpg"
                    className="height-40"
                    alt="Food image"
                  />
                  <img
                    src="/images/about-us-gallery4.jpg"
                    className="height-60"
                    alt="Food image"
                  />
                </Column> */}
          {/* </Columns> */}
          {/* </div> */}
          {/* </Column> */}
        </Columns>
      </div>
    </div>
  );
};

export default About;
