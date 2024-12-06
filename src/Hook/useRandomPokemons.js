import { useEffect, useState } from "react";

// Hook personnalisé pour récupérer une équipe de Pokémon
const useRandomPokemons = () => {
  const [pokemons, setPokemons] = useState(null);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetch("https://pokebuildapi.fr/api/v1/random/team")
      .then((response) => response.json())
      .then((data) => {
        setPokemons(data);
      })
      .catch(() => {
        setIsError(true);
      });
  }, []); // Le tableau vide [] signifie que l'effet se déclenche uniquement au montage du composant

  return { pokemons, isError };
};

export default useRandomPokemons;
