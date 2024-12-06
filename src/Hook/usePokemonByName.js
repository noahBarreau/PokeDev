import { useEffect, useState } from "react";

const usePokemonByName = (name) => {
  const [pokemon, setPokemon] = useState(null);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!name) return;

    fetch(`https://pokebuildapi.fr/api/v1/pokemon/${name}`)
      .then((response) => response.json())
      .then((data) => {
        setPokemon(data);
      })
      .catch(() => {
        setIsError(true);
      });
  }, [name]);

  return { pokemon, isError };
};

export default usePokemonByName;
