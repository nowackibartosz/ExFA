import React from "react";
import "./Menu.css";
import { FaBeer } from "react-icons/fa";
import { useState } from "react";
// ## Zadanie 8 (useState)

// Wróć do zadania z menu z poprzedniego zestawu (komponenty) i dodaj przycisk umożliwiający jego zwijanie i rozwijanie, wykorzystaj useState

const Menu = ({ menu }) => {
  const [visibilityMenu, setVisivilityMenu] = useState(false);

  const handleVisibility = () => {
    setVisivilityMenu(prev=>!prev);
  };

  return (
    <div className="menu">
      <br />
      <br />
      <button onClick={handleVisibility}>POKAŻ/UKRYJ MENU</button>
      <ul>
        {visibilityMenu ? (menu.map((el, index) => (
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
        ))) : null }
        
      </ul>
    </div>
  );
};

export default Menu;
