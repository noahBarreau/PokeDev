import React, { useState, useEffect } from "react";
import "../css/style.css";
import use10PokemonsByType from "../Hook/use10PokemonsByType";
import use1RandomPokemonsForFight from "../Hook/use1RandomPokemonsForFight";

const Fight = () => {
  const [type, setType] = useState("");
  const [team, setTeam] = useState([]);
  const [fightResult, setFightResult] = useState(null);
  const [isPokemonSelected, setIsPokemonSelected] = useState(false);

  const { pokemons, error: typeError, fetch10PokemonsByType } = use10PokemonsByType();
  const { pokemon: wildPokemon, error: wildError, fetchRandomPokemonForFight } = use1RandomPokemonsForFight();

  const handleTypeSubmit = (e) => {
    e.preventDefault();
    fetch10PokemonsByType(type);
    setIsPokemonSelected(false);
  };

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

  const addToTeam = (pokemon) => {
    if (team.length < 2) {
      setTeam([...team, pokemon]);
      setIsPokemonSelected(true);
      alert(`${pokemon.name} a été ajouté à votre équipe !`);
      spawnWildPokemon();
    } else {
      alert("Votre équipe est déjà complète !");
    }
  };

  const spawnWildPokemon = () => {
    const randomDelay = Math.random() * (10 - 3) + 3;
    setTimeout(() => {
      fetchRandomPokemonForFight();
    }, randomDelay * 1000);
  };

  const startFight = () => {
    if (!wildPokemon || team.length === 0) return;

    const teamPokemon = team[team.length - 1];
    const teamScore = teamPokemon.attack + teamPokemon.hp;
    const wildScore = wildPokemon.attack + wildPokemon.hp;

    const result = teamScore > wildScore ? "victoire" : "défaite";

    setTimeout(() => {
      setFightResult(result);
    }, 5000);
  };

  useEffect(() => {
    if (wildPokemon) {
      alert(`Un ${wildPokemon.name} sauvage est apparu !`);
      startFight();
    }
  }, [wildPokemon]);

  return (
    <div className="fight-page">
      <h1>Page de Combat Pokémon</h1>

      {/* Formulaire pour choisir un type */}
      <form onSubmit={handleTypeSubmit}>
        <label htmlFor="type">Entrez un type de Pokémon :</label>
        <input
          type="text"
          id="type"
          value={type}
          onChange={(e) => setType(e.target.value.toLowerCase())}
          placeholder="Exemple : feu, eau, etc."
          required
        />
        <button type="submit">Valider</button>
      </form>
      {typeError && <p>Erreur lors de la récupération des Pokémon. Vérifiez le type.</p>}

      {/* Liste des Pokémon (Masquée si un Pokémon a été sélectionné) */}
      {!isPokemonSelected && (
        <>
          <h2>Pokémons du type {type}</h2>
          <section className="pokemon-container">
            {pokemons?.map((pokemon) => (
              <article key={pokemon.id} className="pokemon-card">
                <div className="pokemon-header">
                  <p className="pokemon-name">{pokemon.name}</p>
                  <p className="pokemon-id">#{pokemon.id}</p>
                </div>
                <img className="pokemon-image" src={pokemon.image} alt={pokemon.name} />
                <div className="pokemon-stats">
                  <span className="stat" style={{ color: "#FF0000" }}>HP: {pokemon.stats.HP}</span>
                  <span className="stat" style={{ color: "#007BFF" }}>Attack: {pokemon.stats.attack}</span>
                  <span className="stat" style={{ color: "#28A745" }}>Defense: {pokemon.stats.defense}</span>
                  <span className="stat" style={{ color: "#FF7F00" }}>Special Attack: {pokemon.stats.special_attack}</span>
                  <span className="stat" style={{ color: "#6F42C1" }}>Special Defense: {pokemon.stats.special_defense}</span>
                  <span className="stat" style={{ color: "#FFC107" }}>Speed: {pokemon.stats.speed}</span>
                </div>
                <div className="pokemon-types">
                  {pokemon.apiTypes.map((type) => (
                    <span key={type.name} className={`type ${getTypeClass(type.name)}`}>{type.name}</span>
                  ))}
                </div>
                <button onClick={() => addToTeam(pokemon)}>Ajouter à l'équipe</button>
              </article>
            ))}
          </section>
        </>
      )}

{wildPokemon && (
          <section className="combat-section">
            <article key={team[team.length - 1].id} className="pokemon-card">
              <div className="pokemon-header">
                <p className="pokemon-name">{team[team.length - 1].name}</p>
                <p className="pokemon-id">#{team[team.length - 1].id}</p>
              </div>
              <img className="pokemon-image" src={team[team.length - 1].image} alt={team[team.length - 1].name} />
              <div className="pokemon-stats">
                <span className="stat" style={{ color: '#FF0000' }}>
                  HP: {team[team.length - 1].stats.HP}
                </span>
                <span className="stat" style={{ color: '#007BFF' }}>
                  Attack: {team[team.length - 1].stats.attack}
                </span>
                <span className="stat" style={{ color: '#28A745' }}>
                  Defense: {team[team.length - 1].stats.defense}
                </span>
                <span className="stat" style={{ color: '#FF7F00' }}>
                  Special Attack: {team[team.length - 1].stats.special_attack}
                </span>
                <span className="stat" style={{ color: '#6F42C1' }}>
                  Special Defense: {team[team.length - 1].stats.special_defense}
                </span>
                <span className="stat" style={{ color: '#FFC107' }}>
                  Speed: {team[team.length - 1].stats.speed}
                </span>
              </div>
              <div className="pokemon-types">
                {team[team.length - 1].apiTypes.map((type) => (
                  <span key={type.name} className={`type ${getTypeClass(type.name)}`}>
                    {type.name}
                  </span>
                ))}
              </div>

            </article>

            <div className="vs">VS</div>

            <article key={wildPokemon.id} className="pokemon-card">
                <div className="pokemon-header">
                  <p className="pokemon-name">{wildPokemon.name}</p>
                  <p className="pokemon-id">#{wildPokemon.id}</p>
                </div>
                <img className="pokemon-image" src={wildPokemon.image} alt={wildPokemon.name} />
                <div className="pokemon-stats">
                  <span className="stat" style={{ color: '#FF0000' }}>
                    HP: {wildPokemon.stats.HP}
                  </span>
                  <span className="stat" style={{ color: '#007BFF' }}>
                    Attack: {wildPokemon.stats.attack}
                  </span>
                  <span className="stat" style={{ color: '#28A745' }}>
                    Defense: {wildPokemon.stats.defense}
                  </span>
                  <span className="stat" style={{ color: '#FF7F00' }}>
                    Special Attack: {wildPokemon.stats.special_attack}
                  </span>
                  <span className="stat" style={{ color: '#6F42C1' }}>
                    Special Defense: {wildPokemon.stats.special_defense}
                  </span>
                  <span className="stat" style={{ color: '#FFC107' }}>
                    Speed: {wildPokemon.stats.speed}
                  </span>
                </div>
                <div className="pokemon-types">
                  {wildPokemon.apiTypes.map((type) => (
                    <span key={type.name} className={`type ${getTypeClass(type.name)}`}>
                      {type.name}
                    </span>
                  ))}
                </div>
              </article>
          </section>
        )}

        {fightResult && (
          <div className="fight-result-modal">
            <h2>Résultat du Combat</h2>
            <p>
              {fightResult === "victoire"
                ? "🎉 Vous avez gagné le combat ! 🎉"
                : "😢 Vous avez perdu le combat... 😢"}
            </p>
          </div>
        )}
    </div>
  );
};

export default Fight;
