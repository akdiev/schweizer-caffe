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
              <span className="scroll-to-top" onClick={props.scrollToTop}>
                <IoMdArrowDropup className="arrow-up-icon" />
              </span>
              <div className="middle-footer">
                <span onClick={() => router.push("schweizer.se")}>
                  <Logo imgSource="images/footer-logo.svg" />
                </span>
                <div className="social-footer">
                  <div className="icons">
                    <a href="instagram.com>">
                      <BsInstagram className="instagram-icon" />
                    </a>
                    <a href="facebook.com">
                      <FacebookIcon />
                    </a>
                  </div>
                  <p className="copyright-text">
                    © Cafe Schweizer 2021 • All rights reserved.
                  </p>
                </div>
                <p className="gray-text-guest">
                  Denna hemsida är skapad med hjälp av Guestie
                </p>
                <button className="guestie-button"> Guestie</button>
              </div>
            </div>
          ) : (
            <>
              <a href="#home" className="footer-logo">
                <Logo imgSource="images/footer-logo.svg" />
              </a>
              <div className="middle-footer">
                <span className="scroll-to-top" onClick={props.scrollToTop}>
                  <IoMdArrowDropup className="arrow-up-icon" />
                </span>
                <p className="gray-text-guest">
                  Denna hemsida är skapad med hjälp av Guestie
                </p>
                <button className="guestie-button"> Guestie</button>
              </div>
            </>
          )}
          {!props.isMobile ? (
            <div className="social-footer">
              <div className="icons">
                <span onClick={() => router.push(props.profile?.instagram)}>
                  <BsInstagram className="instagram-icon" />
                </span>
                <span onClick={() => router.push(props.profile?.facebook)}>
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
