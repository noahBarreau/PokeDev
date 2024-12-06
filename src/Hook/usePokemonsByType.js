import { useEffect, useState } from "react";

const usePokemonsByType = (type) => {
  const [pokemons, setPokemons] = useState(null);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!type) return;

    fetch(`https://pokebuildapi.fr/api/v1/pokemon/type/${type}`)
      .then((response) => response.json())
      .then((data) => {
        setPokemons(data);
      })
      .catch(() => {
        setIsError(true);
      });
  }, [type]);

  return { pokemons, isError };
};

export default usePokemonsByType;
