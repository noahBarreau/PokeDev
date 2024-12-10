import { useState } from "react";

const use1RandomPokemonsForFight = () => {
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(false);

  const fetchRandomPokemonForFight = async () => {
    try {
      const response = await fetch(`https://pokebuildapi.fr/api/v1/pokemon`);
      if (!response.ok) throw new Error("Erreur lors de la récupération d'un Pokémon aléatoire");
      const data = await response.json();
      const randomPokemon = data[Math.floor(Math.random() * data.length)];
      setPokemon(randomPokemon);
    } catch (err) {
      setError(true);
    }
  };

  return { pokemon, error, fetchRandomPokemonForFight };
};

export default use1RandomPokemonsForFight;
