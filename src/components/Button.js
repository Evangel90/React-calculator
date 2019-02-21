import React from "react";

const Button = ({ number, onButtonClick }) => (
  <div className="number-button" onClick={() => onButtonClick(number)} >
    <span>{number}</span>
  </div>
);

export default Button;
