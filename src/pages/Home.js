import React from "react";
import { NavLink } from "react-router-dom";

import BannerImage from "../assets/pizza.jpeg";

import "../styles/Home.css";

export function Home() {
  return (
    <div className="home">
      <div
        className="headerContainer"
        style={{ backgroundImage: `url(${BannerImage})` }}
      >
        <h1>Letícia's Pizzeria</h1>
        <p> PIZZA TO FIT ANY TASTE</p>
        <NavLink to="/menu">
          <button> ORDER NOW </button>
        </NavLink>
      </div>
    </div>
  );
}
