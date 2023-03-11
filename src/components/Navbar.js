import React, { useState } from "react";
import Logo from "../assets/pizzaLogo.png";
import { NavLink } from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder";

import "../styles/Navbar.css";

export function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const handleToggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} />
        <div className="hiddenLinks">
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
        <button onClick={handleToggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}
