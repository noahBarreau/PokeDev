import React from "react";
import usePokemonByGen from "../Hook/usePokemonByGen";
import { Link } from 'react-router-dom';
import "../css/style.css";

const PokemonByGen = ({ gen }) => {
  const { pokemons, isError } = usePokemonByGen(gen);

  if (isError) {
    return <p>Il y a eu une erreur de chargement. Veuillez rafraichir la page</p>;
  }

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
              </Link>
            );
          })}
        </section>
  );
};

export default PokemonByGen;
