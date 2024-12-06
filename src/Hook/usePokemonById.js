// src/Hook/usePokemonById.js
import { useEffect, useState } from "react";

const usePokemonById = (id) => {
  const [pokemon, setPokemon] = useState(null);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!id) return; // Vérifie si l'ID est valide

    fetch(`https://pokebuildapi.fr/api/v1/pokemon/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setPokemon(data);
      })
      .catch(() => {
        setIsError(true);
      });
  }, [id]); // L'ID déclenche l'effet à chaque changement

  return { pokemon, isError };
};

export default usePokemonById;
