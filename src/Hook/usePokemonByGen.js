import { useEffect, useState } from "react";

const usePokemonByGen = (gen) => {
  const [pokemons, setPokemons] = useState(null);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetch(`https://pokebuildapi.fr/api/v1/pokemon/generation/${gen}`)
      .then((response) => response.json())
      .then((data) => {
        setPokemons(data);
      })
      .catch(() => {
        setIsError(true);
      });
  }, [gen]);

  return { pokemons, isError };
};

export default usePokemonByGen;
