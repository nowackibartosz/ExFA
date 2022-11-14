import React from "react";
import "./Menu.css";
import { FaBeer } from "react-icons/fa";
import { useState } from "react";
import {menuData} from "../../App"

const Menu = () => {
  const [visibilityMenu, setVisivilityMenu] = useState(false);

  const handleVisibility = () => {
    setVisivilityMenu((prev) => !prev);
  };

  return (
    <div className="menu">
      <br />
      <br />
      <button onClick={handleVisibility}>POKAŻ/UKRYJ MENU</button>
      <ul>
        {visibilityMenu
          ? menuData.map((el, index) => (
              <li key={index}>
                {" "}
                <br />
                {/* {el.icon} */}
                <a href={el.link}>
                  <FaBeer /> <br />
                  {el.linkName}
                </a>
                <br />
                <br />
              </li>
            ))
          : null}
      </ul>
    </div>
  );
};

export default Menu;
