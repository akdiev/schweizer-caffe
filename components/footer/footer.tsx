import React from "react";
import { IoMdArrowDropup } from "react-icons/io";
import FacebookIcon from "../../assets/icons/facebook-icon";
import { BsInstagram } from "react-icons/bs";
import Logo from "../navbar/logo";
import router from "next/dist/client/router";

const Footer = ({ ...props }) => {
  return (
    <div className="footer-background">
      <div className="footer container">
        <div className="footer-subcontainer">
          {props.isMobile ? (
            <div className="footer-mobile-container">
              <div className="middle-footer">
                <span onClick={() => router.push("schweizer.se")}>
                  <Logo imgSource="images/white-square-logo.svg" />
                </span>
                <div className="social-footer">
                  <div className="icons">
                    <a onClick={() => window.open(props.profile?.instagram)}>
                      <BsInstagram className="instagram-icon" />
                    </a>
                    <a
                      onClick={() => window.open(props.profile?.facebook)}
                      className="cursor-pointer"
                    >
                      <FacebookIcon />
                    </a>
                  </div>
                  <p className="copyright-text">
                    © Cafe Schweizer 2021 • All rights reserved.
                  </p>
                </div>
                {/* <p className="gray-text-guest">
                  Denna hemsida är skapad med hjälp av Guestie
                </p> */}
                {/* <button className="guestie-button"> Guestie</button> */}
              </div>
            </div>
          ) : (
            <>
              <a href="#home" className="footer-logo">
                <Logo imgSource="images/white-square-logo.svg" />
              </a>
              <div className="middle-footer">
                {/* <p className="gray-text-guest">
                  Denna hemsida är skapad med hjälp av Guestie
                </p> */}
                {/* <button className="guestie-button">
                  <GuestieLogo />
                </button> */}
              </div>
            </>
          )}
          {!props.isMobile ? (
            <div className="social-footer">
              <div className="icons">
                <span onClick={() => window.open(props.profile?.instagram)}>
                  <BsInstagram className="instagram-icon" />
                </span>
                <span
                  onClick={() => window.open(props.profile?.facebook)}
                  className="cursor-pointer"
                >
                  <FacebookIcon />
                </span>
              </div>
              <p className="copyright-text">
                © Cafe Schweizer 2021 • All rights reserved.
              </p>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Footer;
