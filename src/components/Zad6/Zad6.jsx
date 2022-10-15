// ## Zadanie 6 (useState)
// Do strony na której znajdują się karty z danymi klientów (Cards - zestaw zadań do komponentów) dodaj formularz u góry który umożliwi wyszukiwanie klienta po jego imieniu.

// ### Podpowiedź
// Do realizacji zadania przyda się osobny stan, który przechowa frazę wyszukiwaną i filtr\\

import React from "react";
import { useState } from "react";
// import Card from "../Card/Card";

const Zad6 = ({ cards }) => {
  const [card, setCard] = useState(cards);

  const filterNames = (e) => {
    const search = e.target.value.toLowerCase();

    const filteredNames = cards.filter((nami) =>
      nami.name.toLowerCase().includes(search)
    );
    setCard(filteredNames);
  };

  return (
    <div>
      <label htmlFor="name">name</label>
      <input onChange={(e) => filterNames(e)} type="text" name="name" />

      <div>
        {card.map((el) => (
          <p>{el.name}</p>
        ))}
      </div>
    </div>
  );
};

export default Zad6;
