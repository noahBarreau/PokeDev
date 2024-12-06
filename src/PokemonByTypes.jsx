import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';


const PokemonByTypes = ({ type }) => {
  const [pokemons, setPokemons] = useState(null);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetch(`https://pokebuildapi.fr/api/v1/pokemon/type/${type}`)
      .then((response) => response.json())
      .then((data) => {
        setPokemons(data);
      })
      .catch(() => {
        setIsError(true);
      });
  }, [type]);

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
          <Link to={`/DisplayPokemon?id=${pokemon.id}`}>
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

export default PokemonByTypes;
