import React, { useEffect, useState } from "react";
import Logo from "../navbar/logo";
import { AiOutlineDownload } from "react-icons/ai";
import Columns from "../../assets/Bulma/Columns";
import Column from "../../assets/Bulma/Column";
import { useMediaQuery } from "react-responsive";
import { useRouter } from "next/dist/client/router";

const Menu = () => {
  const menuItems = [];
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [displayMenu, setDisplayMenu] = useState(false);

  const testMeal = {
    mealName: "Mughal Empire Salmon Salad",
    price: 14,
    description:
      "Faucibus ullamcorper ullamcorper dui sed lobortis. A ipsum mauris sed lobortis pulvinar.",
    img: "images/menu-item.jpg",
  };
  function fillMenu() {
    for (var i = 0; i < 16; i++) {
      menuItems.push(testMeal);
    }
  }

  fillMenu();
  return (
    <div className="green-background">
      <div className="menu-header-wrapper">
        <div className="menu-header">
          <Logo imgSource="images/white-logo.svg" />
          <h1 className="menu-header-title">LunchMeny</h1>
          <button className="pdf-download">
            <AiOutlineDownload />
            <span>Download PDF</span>
          </button>
        </div>
      </div>
      {console.log(displayMenu)}
      <div className="restaurant-menu-content">
        <h2 className="lunch-category"> Lunch category 01</h2>
        <div className="regular-menu">
          {menuItems.map((menuItem, k) => (
            <MenuCard menuItem={menuItem} key={k} />
          ))}
        </div>
      </div>
    </div>
  );
};

const MenuCard = ({ menuItem }) => {
  return (
    <div className="menu-card-item">
      {menuItem.img ? <img src={menuItem.img} alt={menuItem.mealName} /> : ""}
      <div className="name-and-price">
        <Columns>
          <Column md={8} className="menu-mealName">
            {menuItem.mealName}
          </Column>
          <Column className="menu-price">
            {menuItem.price} {"" + "SEK"}
          </Column>
        </Columns>
        <div className="menuItem-description"> {menuItem.description} </div>
      </div>
    </div>
  );
};

export default Menu;
