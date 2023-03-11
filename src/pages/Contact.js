import React from "react";
import PizzaLeft from "../assets/pizzaLeft.jpg";

export function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${PizzaLeft})` }}
      ></div>
      <div className="rightSide"></div>
    </div>
  );
}
