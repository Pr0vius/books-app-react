import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import NavUser from "../../Components/NavUser";
import MenuButton from "../../Components/MenuButton";
import "./style.css";

const Sidebar = () => {
  const [active, setActive] = useState(false);

  const handleClick = evt => {
    evt.preventDefault();
    if (active) {
      setActive(false);
      return;
    }
    setActive(true);
  };

  return (
    <>
      <MenuButton onClick={handleClick} active={active} />
      <div className={`sidebar${active ? " active" : ""}`}>
        <div className="sidebar__container">
          <h2 className="sidebar__title">BooksApp</h2>
          <Navbar clickHandler={handleClick}/>
          <NavUser />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
