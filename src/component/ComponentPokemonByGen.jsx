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

export default PokemonByGen;
