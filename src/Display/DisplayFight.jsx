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
      
      <ComponentDisplayFight />
    </>
  );
}

export default DisplayFight;
