// ## Zadanie 6 (useState)
// Do strony na której znajdują się karty z danymi klientów (Cards - zestaw zadań do komponentów) dodaj formularz u góry który umożliwi wyszukiwanie klienta po jego imieniu.

// ### Podpowiedź
// Do realizacji zadania przyda się osobny stan, który przechowa frazę wyszukiwaną i filtr

import React from "react";

const Zad6 = () => {
  return (
    <div>
      <label htmlFor="name">name</label>
      <input type="text" name="name" />
    </div>
  );
};

export default Zad6;
