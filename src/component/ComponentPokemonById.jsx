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
            return (
              <article key={pokemon.id} className="pokemon-card">
                <div className="pokemon-header">
                  <p className="pokemon-name">{pokemon.name}</p>
                  <p className="pokemon-id">#{pokemon.id}</p>
                </div>
                <img className="pokemon-image" src={pokemon.image} alt={pokemon.name} />
                <div className="pokemon-stats">
                  <span className="stat" style={{ color: '#FF0000' }}>
                    HP: {pokemon.stats.HP}
                  </span>
                  <span className="stat" style={{ color: '#007BFF' }}>
                    Attack: {pokemon.stats.attack}
                  </span>
                  <span className="stat" style={{ color: '#28A745' }}>
                    Defense: {pokemon.stats.defense}
                  </span>
                  <span className="stat" style={{ color: '#FF7F00' }}>
                    Special Attack: {pokemon.stats.special_attack}
                  </span>
                  <span className="stat" style={{ color: '#6F42C1' }}>
                    Special Defense: {pokemon.stats.special_defense}
                  </span>
                  <span className="stat" style={{ color: '#FFC107' }}>
                    Speed: {pokemon.stats.speed}
                  </span>
                </div>
              </article>
            );
        </section>
  );
};

export default PokemonById;
