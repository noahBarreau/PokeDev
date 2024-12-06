// src/hooks/useRandomTypes.js
import { useEffect, useState } from "react";

const useRandomTypes = () => {
  const [types, setTypes] = useState(null);
  const [isError, setIsError] = useState(false);
  const listId = [];

  useEffect(() => {
    fetch("https://pokebuildapi.fr/api/v1/types")
      .then((response) => response.json())
      .then((data) => {
        setTypes(data);
      })
      .catch(() => {
        setIsError(true);
      });
  }, []); // Le tableau vide [] signifie que l'effet se déclenche uniquement au montage du composant

  // Génération des types aléatoires
  for (let i = 0; i < 3; i++) {
    listId.push(Math.floor(Math.random() * (53 - 37 + 1)) + 37);
  }

  return { types, isError, listId };
};

export default useRandomTypes;
