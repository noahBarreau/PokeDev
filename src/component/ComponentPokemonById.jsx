import React from "react";
import usePokemonById from "../Hook/usePokemonById";
import "../css/style.css";

const PokemonById = ({ id }) => {
  const { pokemon, isError } = usePokemonById(id);

  if (isError) {
    return <p>Erreur de chargement du Pokémon. Veuillez essayer à nouveau.</p>;
  }

  if (!pokemon) {
    return <p>Chargement...</p>;
  }

  const getTypeClass = (type) => {
    switch (type.toLowerCase()) {
      case "feu":
        return "type-fire";
      case "eau":
        return "type-water";
      case "plante":
        return "type-grass";
      case "électrik":
        return "type-electric";
      case "glace":
        return "type-ice";
      case "combat":
        return "type-fighting";
      case "poison":
        return "type-poison";
      case "sol":
        return "type-ground";
      case "vol":
        return "type-flying";
      case "psy":
        return "type-psychic";
      case "insecte":
        return "type-bug";
      case "roche":
        return "type-rock";
      case "spectre":
        return "type-ghost";
      case "dragon":
        return "type-dragon";
      case "ténèbres":
        return "type-dark";
      case "acier":
        return "type-steel";
      case "fée":
        return "type-fairy";
      default:
        return "type-default";
    }
  };

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
                <div className="pokemon-types">
                  {pokemon.apiTypes.map((type) => (
                    <span key={type.name} className={`type ${getTypeClass(type.name)}`}>
                      {type.name}
                    </span>
                  ))}
                </div>
              </article>
            );
        </section>
  );
};

export default PokemonById;
