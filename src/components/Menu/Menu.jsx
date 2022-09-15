import React from "react";
import "./Menu.css";

const Menu = ({ menu }) => {
  return (
    <div className="menu">
      <ul>
        {menu.map((el, index) => (
          <li key={index}>
            {/* {el.icon} */}
            <br />
            <a href={el.link}>{el.linkName}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
