import React from "react";
import { Link } from 'react-router-dom';
import useRandomPokemons from '../hook/useRandomPokemons'; // Importer le hook personnalisé
import '../css/style.css';

const RandomPokemon = () => {
  // Utilisation du hook personnalisé
  const { pokemons, isError } = useRandomPokemons();

  if (isError) {
    return <p>Il y a eu une erreur de chargement. Veuillez rafraîchir la page</p>;
  }

  return (
    <section className="pokemon-container">
      {pokemons?.map((pokemon) => (
        <Link key={pokemon.id} to={`/DisplayPokemon?id=${pokemon.id}`}>
          <article className="pokemon-card">
            <div className="pokemon-header">
              <p className="pokemon-name">{pokemon.name}</p>
              <p className="pokemon-id">#{pokemon.id}</p>
            </div>
            <img className="pokemon-image" src={pokemon.image} alt={pokemon.name} />
          </article>
        </Link>
      ))}
    </section>
  );
};

export default RandomPokemon;
