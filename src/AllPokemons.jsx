import { useEffect, useState } from "react";
import './css/style.css';

const PokemonTypes = () => {
  const [pokemons, setPokemon] = useState(null);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetch("https://pokebuildapi.fr/api/v1/pokemon")
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
          <article key={pokemon.id} className="pokemon-card">
            <div className="pokemon-header">
              <p className="pokemon-name">{pokemon.name}</p>
              <p className="pokemon-id">#{pokemon.id}</p>
            </div>
            <img className="pokemon-image" src={pokemon.image} alt={pokemon.name} />
          </article>
        );
      })}
    </section>
  );  
};

export default PokemonTypes;