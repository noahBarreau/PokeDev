import { useEffect, useState } from "react";

const useAllPokemons = () => {
  const [pokemons, setPokemons] = useState(null);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetch("https://pokebuildapi.fr/api/v1/pokemon")
      .then((response) => response.json())
      .then((data) => {
        setPokemons(data);
      })
      .catch(() => {
        setIsError(true);
      });
  }, []);

  return { pokemons, isError };
};

export default useAllPokemons;
