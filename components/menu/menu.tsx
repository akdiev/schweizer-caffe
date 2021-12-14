import React from "react";
import Logo from "../navbar/logo";
import { AiOutlineDownload } from "react-icons/ai";

const Menu = () => {
  const menuItems = [];

  return (
    <div className="green-background">
      <div className="menu-header">
        <Logo imgSource="images/white-logo.svg" />
        <h1 className="menu-header-title">LunchMeny</h1>
        <button className="pdf-download">
          <AiOutlineDownload />
          Download PDF
        </button>
      </div>

      <h2> Lunch category 01</h2>
    </div>
  );
};

const MenuCard = (objectValue) => {
  return (
    <div className="menu-card-item">
      <div className="name-and-price"></div>
    </div>
  );
};

export default Menu;
