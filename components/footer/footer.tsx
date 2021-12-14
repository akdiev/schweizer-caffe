import React from "react";
import { IoMdArrowDropup } from "react-icons/io";
import FacebookIcon from "../../assets/icons/facebook-icon";
import { BsInstagram } from "react-icons/bs";
import Logo from "../navbar/logo";

const Footer = ({ ...props }) => {
  return (
    <div className="footer">
      {props.isMobile ? (
        <div className="footer-mobile-container">
          <span className="scroll-to-top" onClick={props.scrollToTop}>
            <IoMdArrowDropup className="arrow-up-icon" />
          </span>
          <div className="middle-footer">
            <a href="#home">
              <Logo imgSource="images/footer-logo.svg" />
            </a>
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
      <div></div>
      {!props.isMobile ? (
        <div className="social-footer">
          <div className="icons">
            <a href={props.profile?.instagram}>
              <BsInstagram className="instagram-icon" />
            </a>
            <a href={props.profile?.facebook}>
              <FacebookIcon />
            </a>
          </div>
          <p className="copyright-text">
            © Cafe Schweizer 2021 • All rights reserved.
          </p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Footer;
