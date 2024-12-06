// src/components/PokemonById.js
import React from "react";
import usePokemonById from "../Hook/usePokemonById"; // Importation du hook
import "../css/style.css"; // Chemin CSS mis à jour

const PokemonById = ({ id }) => {
  // Utilisation du hook personnalisé
  const { pokemon, isError } = usePokemonById(id);

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

export default PokemonById;
