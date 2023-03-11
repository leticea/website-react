import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";

export function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom"></div>
    </div>
  );
}
