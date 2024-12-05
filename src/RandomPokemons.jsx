import { useEffect, useState } from "react";
import './css/style.css';
import { Link } from 'react-router-dom';

const PokemonTypes = () => {
  const [pokemons, setPokemon] = useState(null);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetch("https://pokebuildapi.fr/api/v1/random/team")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPokemon(data);
      })
      .catch(() => {
        setIsError(true);
      });
  }, []);

  if (isError) {
    return <p>Il y a eu une erreur de chargement. Veuillez rafraichir la page</p>;
  }
  return (

    <section className="pokemon-container">
      {pokemons?.map((pokemon) => {
        return (
          <Link to={`/AllPokemons?id=${pokemon.id}`}>
          <article key={pokemon.id} className="pokemon-card">
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

export default PokemonTypes;