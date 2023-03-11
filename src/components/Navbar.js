import React from "react";
import Logo from "../assets/pizzaLogo.png";
import { NavLink } from "react-router-dom";

import "../styles/Navbar.css";

export function Navbar() {
  return (
    <div className="navbar">
      <div className="leftSide">
        <img src={Logo} />
      </div>
      <div className="rightSide">
          <NavLink to="/" title="Home">
            Home
          </NavLink>
          <NavLink to="/menu" title="Menu">
            Menu
          </NavLink>
          <NavLink to="/about" title="About">
            About
          </NavLink>
          <NavLink to="/contact" title="Contact">
            Contact
          </NavLink>
      </div>
    </div>
  );
}
