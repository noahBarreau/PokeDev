import React from "react";
import { Link, useNavigate } from "react-router-dom";
import pokeballLogo from "./assets/pokeball.png";

const Header = ({ onSearch }) => {
  const navigate = useNavigate();

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      console.log("Valeur entrer :"+e.target.value);
      navigate(`/DisplayPokemonByName?name=${e.target.value}`);
    }
  };

  return (
    <header className="header">
      <div className="header-logo">
        <img src={pokeballLogo} alt="Pokéball Logo" className="pokeball-logo" />
        <h1 className="header-title">Pokédex</h1>
      </div>
      <nav className="header-nav">
        <Link to="/" className="nav-link">Accueil</Link>
        <Link to="/DisplayPokemonByGen" className="nav-link">Pokémons</Link>
        <Link to="/DisplayAllTypes" className="nav-link">Types</Link>
        <Link to="/DisplayRandomPokemonDetail" className="nav-link">Random</Link>
        <Link to="/DisplayFight" className="nav-link">Fight</Link>
      </nav>
      <div className="header-search">
        <input
          type="text"
          placeholder="Rechercher un Pokémon..."
          className="search-input"
          onKeyDown={handleKeyDown}
        />
      </div>
    </header>
  );
};

export default Header;
