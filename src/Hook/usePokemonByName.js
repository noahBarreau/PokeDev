// src/Hook/usePokemonByName.js
import { useEffect, useState } from "react";

const usePokemonByName = (name) => {
  const [pokemon, setPokemon] = useState(null);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!name) return; // Vérifie si le nom est défini avant d'effectuer l'appel API

    fetch(`https://pokebuildapi.fr/api/v1/pokemon/${name}`)
      .then((response) => response.json())
      .then((data) => {
        setPokemon(data);
      })
      .catch(() => {
        setIsError(true);
      });
  }, [name]); // L'effet se déclenche chaque fois que le nom change

  return { pokemon, isError };
};

export default usePokemonByName;
