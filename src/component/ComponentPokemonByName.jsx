import React from "react";
import usePokemonByName from "../Hook/usePokemonByName";
import "../css/style.css";

const PokemonByName = ({ name }) => {
  const { pokemon, isError } = usePokemonByName(name);

  if (isError) {
    return <p>Erreur de chargement du Pokémon. Veuillez essayer à nouveau.</p>;
  }

  if (!pokemon) {
    return <p>Chargement...</p>;
  }

  return (
    <section className="pokemon-container">
      <article className="pokemon-card">
        <div className="pokemon-header">
          <p className="pokemon-name">{pokemon.name}</p>
          <p className="pokemon-id">#{pokemon.id}</p>
        </div>
        <img className="pokemon-image" src={pokemon.image} alt={pokemon.name} />
      </article>
    </section>
  );
};

export default PokemonByName;
