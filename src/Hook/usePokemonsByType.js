// src/Hook/usePokemonsByType.js
import { useEffect, useState } from "react";

const usePokemonsByType = (type) => {
  const [pokemons, setPokemons] = useState(null);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!type) return; // Vérifie si le type est défini avant d'effectuer l'appel API

    fetch(`https://pokebuildapi.fr/api/v1/pokemon/type/${type}`)
      .then((response) => response.json())
      .then((data) => {
        setPokemons(data);
      })
      .catch(() => {
        setIsError(true);
      });
  }, [type]); // L'effet se déclenche chaque fois que le type change

  return { pokemons, isError };
};

export default usePokemonsByType;
