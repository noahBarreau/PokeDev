import { useState } from "react";

const use10PokemonsByType = () => {
  const [pokemons, setPokemons] = useState([]);
  const [error, setError] = useState(false);

  const fetch10PokemonsByType = async (type) => {
    try {
      const response = await fetch(`https://pokebuildapi.fr/api/v1/pokemon/type/${type}`);
      if (!response.ok) throw new Error("Erreur lors de la récupération des Pokémon");
      const data = await response.json();
      setPokemons(data.sort(() => 0.5 - Math.random()).slice(0, 10));
    } catch (err) {
      setError(true);
    }
  };

  return { pokemons, error, fetch10PokemonsByType };
};

export default use10PokemonsByType;
