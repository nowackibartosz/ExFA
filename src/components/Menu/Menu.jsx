import React from "react";
import "./Menu.css";
import { FaBeer } from "react-icons/fa";
const Menu = ({ menu }) => {
  return (
    <div className="menu">
      <ul>
        {menu.map((el, index) => (
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
        ))}
      </ul>
    </div>
  );
};

export default Menu;
