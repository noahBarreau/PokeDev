import React, { useState } from "react";
import Header from "../Header";
import ComponentDisplayFight from "../component/ComponentDisplayFight";
import "../css/style.css";

function DisplayFight() {
  const [typeSelectionne, setTypeSelectionne] = useState('');
  const [typeValide, setTypeValide] = useState(null);

  const handleChangeSelect = (event) => {
    setTypeSelectionne(event.target.value);
  };

  const handleValider = () => {
    setTypeValide(typeSelectionne);
  };

  return (
    <>
      <Header />
      <div className="select-container">
        <h3>Choisir un type de Pokémon</h3>
        <select value={typeSelectionne} onChange={handleChangeSelect}>
          <option value="feu">Feu</option>
          <option value="eau">Eau</option>
          <option value="plante">Plante</option>
          <option value="électrik">Électrique</option>
          <option value="glace">Glace</option>
          <option value="combat">Combat</option>
          <option value="poison">Poison</option>
          <option value="sol">Sol</option>
          <option value="vol">Vol</option>
          <option value="psychique">Psychique</option>
          <option value="insecte">Insecte</option>
          <option value="roche">Roche</option>
          <option value="spectre">Spectre</option>
          <option value="dragon">Dragon</option>
          <option value="ténèbres">Ténèbres</option>
          <option value="acier">Acier</option>
          <option value="fée">Fée</option>
        </select>
        <button onClick={handleValider}>Valider</button>
      </div>

      {typeValide && <ComponentDisplayFight typeSelectionne={typeValide} />}
    </>
  );
}

export default DisplayFight;
