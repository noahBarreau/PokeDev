import React, { useState, useEffect } from "react";

const ComponentDisplayFight = ({ typeSelectionne }) => {
  const [pokemons, setPokemons] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`https://pokebuildapi.fr/api/v1/pokemon/type/${typeSelectionne}`);
        const data = await response.json();
        setPokemons(data);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    if (typeSelectionne) {
      fetchPokemons();
    }
  }, [typeSelectionne]);

  const getRandomPokemons = () => {
    const listId = [];
    if (pokemons.length > 0) {
      for (let i = 0; i < 10; i++) {
        const randomIndex = Math.floor(Math.random() * pokemons.length);
        listId.push(pokemons[randomIndex]);
      }
    }
    return listId;
  };

  if (isLoading) {
    return <p>Chargement des Pokémon...</p>;
  }

  if (isError) {
    return <p>Une erreur s'est produite lors de la récupération des Pokémon.</p>;
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
    <div>
      <h3>Pokémons de type {typeSelectionne}</h3>
      <div className="pokemon-list">
        <section className="pokemon-container"> 
        {getRandomPokemons().map((pokemon) => (
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
        ))}
        </section>
      </div>
    </div>
  );
};

export default ComponentDisplayFight;
