import React from "react";
import "./style.css";

const MenuButton = ({ onClick: clickHandler, active }) => {
  return (
    <button
      id={`nav-btn`}
      className={active ? "open" : null}
      onClick={clickHandler}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};

export default MenuButton;
