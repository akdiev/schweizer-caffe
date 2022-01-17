import React, { useEffect, useState } from "react";
import Logo from "../navbar/logo";
import { AiOutlineDownload } from "react-icons/ai";
import Columns from "../../assets/Bulma/Columns";
import Column from "../../assets/Bulma/Column";
import { useMediaQuery } from "react-responsive";
import { AiOutlineClose } from "react-icons/ai";

const Menu = (props) => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  window.onbeforeunload = function () {
    props.closeModal();
  };

  return (
    <div className="green-background">
      <div className="container">
        {isMobile ? (
          <div className="mobile-header">
            <span
              className="close-menu-button"
              onClick={() => props.closeModal()}
            >
              <i className="fal fa-times close-icon"></i>
            </span>
            <Logo imgSource="images/white-logo.svg" />
            <div className="menu-header">
              <h1 className="menu-header-title">Meny</h1>
              <button className="pdf-download">
                <AiOutlineDownload />
                <span>Download PDF</span>
              </button>
            </div>
            <div className="menu-tabs">
              {props.menus.data.map((menu, index) => (
                <div
                  className={`single-tab ${selectedMenu == index && "active"}`}
                  onClick={() => setSelectedMenu(index)}
                  key={index}
                >
                  <p>{menu.name}</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="menu-header-wrapper container">
            <span
              className="close-modal-button"
              onClick={() => props.closeModal()}
            >
              <AiOutlineClose />
            </span>
            <div className="menu-header">
              <Logo imgSource="images/white-logo.svg" />
              <h1 className="menu-header-title">Meny</h1>
              <button className="pdf-download">
                <AiOutlineDownload />
                <span>Download PDF</span>
              </button>
            </div>
            <div className="menu-tabs">
              {props.menus.data.map((menu, index) => (
                <div
                  className={`single-tab ${selectedMenu == index && "active"}`}
                  onClick={() => setSelectedMenu(index)}
                  key={index}
                >
                  <p>{menu.name}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        <div className="menu-wrapper">
          {props.menus.data[selectedMenu].categories.map((category, index) => {
            return (
              <div className="restaurant-items-container container" key={index}>
                <div className="restaurant-menu-content">
                  <h2 className="lunch-category"> {category.name}</h2>
                  <div className="regular-menu">
                    {category.items.map((menuItem, k) => (
                      <MenuCard menuItem={menuItem} key={k} />
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const MenuCard = ({ menuItem }) => {
  return (
    <div className="menu-card-item">
      {menuItem.img && (
        <div className="menu-card-image">
          <img src={menuItem.img} alt={menuItem.mealName} />
        </div>
      )}
      <div className="name-and-price">
        <Columns>
          <Column md={8} className="menu-mealName">
            {menuItem.name}
          </Column>
          <Column className="menu-price">{menuItem.price}</Column>
        </Columns>
        <div className="menuItem-description"> {menuItem.description} </div>
      </div>
    </div>
  );
};

export default Menu;
