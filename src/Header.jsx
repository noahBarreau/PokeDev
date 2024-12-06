import React from "react";
import { Link } from "react-router-dom";
import pokeballLogo from "./assets/pokeball.png";

const Header = ({ onSearch }) => {
  const handleSearch = (e) => {
    if (onSearch) {
      onSearch(e.target.value);
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
        <Link to="/DisplayPokemon" className="nav-link">Pokémons</Link>
        <Link to="/DisplayAllTypes" className="nav-link">Types</Link>
      </nav>
      <div className="header-search">
        <input
          type="text"
          placeholder="Rechercher un Pokémon..."
          className="search-input"
          onChange={handleSearch}
        />
      </div>
    </header>
  );
};

export default Header;
