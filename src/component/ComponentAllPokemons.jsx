import React from "react";
import useAllPokemons from "../Hook/useAllPokemons";
import "../css/style.css";
import { Link } from "react-router-dom";

const AllPokemon = () => {
  const { pokemons, isError } = useAllPokemons();

  if (isError) {
    return <p>Il y a eu une erreur de chargement. Veuillez rafraichir la page</p>;
  }

  const getTypeClass = (type) => {
    switch (type.toLowerCase()) {
      case "feu":
        return "type-fire";
      case "eau":
        return "type-water";
      case "plante":
        return "type-grass";
      case "électrique":
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
    {pokemons?.map((pokemon) => {
      return (
        <Link to={`/DisplayPokemon?id=${pokemon.id}`} key={pokemon.id}>
        <article key={pokemon.id} className="pokemon-card">
          <div className="pokemon-header">
            <p className="pokemon-name">{pokemon.name}</p>
            <p className="pokemon-id">#{pokemon.id}</p>
          </div>
          <img className="pokemon-image" src={pokemon.image} alt={pokemon.name} />
          
          <div className="pokemon-stats">
            <div className="stat">
              <p className="stat-label">HP:</p>
              <p className="stat-value">{pokemon.stats.hp}</p>
            </div>
            <div className="stat">
              <p className="stat-label">Attack:</p>
              <p className="stat-value">{pokemon.stats.attack}</p>
            </div>
            <div className="stat">
              <p className="stat-label">Defense:</p>
              <p className="stat-value">{pokemon.stats.defense}</p>
            </div>
            <div className="stat">
              <p className="stat-label">Special Attack:</p>
              <p className="stat-value">{pokemon.stats.specialAttack}</p>
            </div>
            <div className="stat">
              <p className="stat-label">Special Defense:</p>
              <p className="stat-value">{pokemon.stats.specialDefense}</p>
            </div>
            <div className="stat">
              <p className="stat-label">Speed:</p>
              <p className="stat-value">{pokemon.stats.speed}</p>
            </div>
          </div>
          <div className="pokemon-types">
                  {pokemon.apiTypes.map((type) => (
                    <span key={type.name} className={`type ${getTypeClass(type.name)}`}>
                      {type.name}
                    </span>
                  ))}
                </div>
        </article>
        </Link>
      );
    })}
  </section>

  );
};

export default AllPokemon;
