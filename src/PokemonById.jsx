import { useEffect, useState } from "react";

const PokemonById = ({ id }) => {
  const [pokemon, setPokemon] = useState(null);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    // Appel à l'API avec l'ID
    fetch(`https://pokebuildapi.fr/api/v1/pokemon/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setPokemon(data);
      })
      .catch(() => {
        setIsError(true);
      });
  }, [id]); // L'ID dans l'URL déclenche l'effet chaque fois qu'il change

  if (isError) {
    return <p>Erreur de chargement du Pokémon. Veuillez essayer à nouveau.</p>;
  }

  if (!pokemon) {
    return <p>Chargement...</p>;
  }

  return (
    <section className="pokemon-container">
      <article className="pokemon-card">
        <div className="pokemon-header">
          <p className="pokemon-name">{pokemon.name}</p>
          <p className="pokemon-id">#{pokemon.id}</p>
        </div>
        <img className="pokemon-image" src={pokemon.image} alt={pokemon.name} />
      </article>
    </section>
  );
};

export default PokemonById;
