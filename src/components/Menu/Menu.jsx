import React from "react";
import "./Menu.css";
import { FaBeer } from "react-icons/fa";
const Menu = ({ menu }) => {
  return (
    <div className="menu">
      <ul>
        {menu.map((el, index) => (
          <li key={index}>
            {/* {el.icon} */}
            <br />
            <FaBeer />
            <a href={el.link}>{el.linkName}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
