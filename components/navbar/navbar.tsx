import React, { useEffect, useState } from "react";
import { useRouter } from "next/dist/client/router";
import { CgMenuRight } from "react-icons/cg";
import {
  IoChevronForward,
  IoLogoFacebook,
  IoLogoInstagram,
} from "react-icons/io5";
import Logo from "./logo";

const navOptions = [
  {
    href: "home",
    label: "HOME",
  },
  {
    href: "gallery",
    label: "GALLERY",
  },
  {
    href: "restaurant",
    label: "RESTAURANT",
  },
  {
    href: "about",
    label: "ABOUT",
  },
];

const Navbar = (props) => {
  const router = useRouter();
  const [navbar, setNavbar] = useState(false);
  const [navbarActive, setNavbarActive] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  });
  let mobileNavbarClasses = "";

  if (navbar) {
    if (navbarActive) {
      mobileNavbarClasses += "is-dark";
    } else mobileNavbarClasses += "not-on-top";
  } else {
    if (navbarActive) mobileNavbarClasses += "is-dark";
    else mobileNavbarClasses += "is-transparent";
  }
  const handleClick = (href) => {
    props.scrollTo(href);
    setNavbarActive(false);
  };

  return (
    <>
      <div className={`nav is-hidden-touch ${navbar && "not-on-top"}`}>
        <div className="nav-container container">
          <Logo imgSource="images/logo.svg" />
          <div className="nav-section">
            {navOptions.map((item, k) => (
              <div className="nav-item" key={k}>
                <a onClick={() => handleClick(`#${item.href}`)}>{item.label}</a>
              </div>
            ))}
          </div>
          <button
            className="menu-button-higher"
            onClick={() => props.openMenu(true)}
          >
            VISA MENY
          </button>
        </div>
      </div>
      <div
        className={`navbar is-fixed-top ${mobileNavbarClasses} is-hidden-desktop`}
      >
        <div className="navbar-brand">
          <a className="navbar-item" onClick={() => handleClick("#home")}>
            {navbarActive ? (
              <Logo imgSource="images/white-logo.svg" />
            ) : (
              <Logo imgSource="images/logo.svg" />
            )}
          </a>
          <div className="menu-and-burger">
            <button className="menu-button-small">VISA MENY </button>
            <div
              className="navbar-burger"
              data-target="navbarDropdownContent"
              onClick={() => setNavbarActive(!navbarActive)}
            >
              <NavIcon className={navbarActive ? "open" : ""} />
            </div>
          </div>
        </div>

        <div
          id="navbarDropdownContent"
          className={`navbar-menu ${navbarActive && "is-active"}`}
        >
          <div className="navbar-start">
            {navOptions.map((item, k) => (
              <a
                className="navbar-item"
                key={k}
                onClick={() => handleClick(`#${item.href}`)}
              >
                <p className="dropdown-navigation-item">
                  {item.label}{" "}
                  <span className="navbar-item-icon is-pulled-right">
                    <IoChevronForward fill="#fff" />
                  </span>
                </p>
              </a>
            ))}
          </div>
          <div className="navbar-end">
            <div className="social-medias">
              <a
                className="social-medias-instagram"
                target="_blank"
                rel="noreferrer"
              >
                <IoLogoInstagram fill="#fff" />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                className="social-medias-facebook"
              >
                <IoLogoFacebook fill="#fff" />
              </a>
            </div>
            <p className="caption">
              © Cafe Schweizer 2021 • All rights reserved.
            </p>
            <p className="caption">
              Denna hemsida är skapad med hjälp av Guestie
            </p>
            <button className="guestie-button">Guestie</button>
          </div>
        </div>
      </div>
    </>
  );
};

const NavIcon = ({ className }) => {
  return (
    <div id="nav-icon4" className={className}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default Navbar;
