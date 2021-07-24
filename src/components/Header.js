import React from "react";
import Logo from "../images/logo.png";
import "./Header.css";

export const Header = () => {
  return (
    <div class="header-navbar">
      <img src={Logo} alt="logo" />
    </div>
  );
};
