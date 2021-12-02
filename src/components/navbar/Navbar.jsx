import React from "react";
import "./Navbar.sass";
import Logo from "../../assets/img/logo.png";
import iconHeartRegular from "../../assets/icon/heart-regular.svg";
import iconShop from "../../assets/icon/shopping-cart-solid.svg";

export function Navbar() {
  return (
    <div id="containerNavBar">
      <div id="logoDiv">
        <a href="/">
          <img alt="MovieFlix" src={Logo} id="logo" />
        </a>
      </div>
      <div id="searchDiv">
        <input type="text" id="search" />
      </div>
      <div id="buttonDiv">
        <img
          alt="heart icon"
          id="iconHeart"
          className="iconButton"
          src={iconHeartRegular}
        />
        <img
          alt="shop icon"
          id="iconShop"
          className="iconButton"
          src={iconShop}
        />
      </div>
    </div>
  );
}
