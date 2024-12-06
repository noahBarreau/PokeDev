import React from "react";
import { Link } from 'react-router-dom';
import usePokemonsByType from "../Hook/usePokemonsByType";
import "../css/style.css";

const PokemonByTypes = ({ type }) => {
  const { pokemons, isError } = usePokemonsByType(type);

  if (isError) {
    return <p>Erreur de chargement du Pokémon. Veuillez essayer à nouveau.</p>;
  }

  if (!pokemons) {
    return <p>Chargement...</p>;
  }

  return (
    <section className="pokemon-container">
      {pokemons?.map((pokemon) => {
        return (
          <Link key={pokemon.id} to={`/DisplayPokemon?id=${pokemon.id}`}>
            <article className="pokemon-card">
              <div className="pokemon-header">
                <p className="pokemon-name">{pokemon.name}</p>
                <p className="pokemon-id">#{pokemon.id}</p>
              </div>
              <img className="pokemon-image" src={pokemon.image} alt={pokemon.name} />
            </article>
          </Link>
        );
      })}
    </section>
  );
};

export default PokemonByTypes;
