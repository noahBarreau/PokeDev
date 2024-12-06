import { useState } from 'react';
import Header from "./Header";
import RandomPokemons from "./component/ComponentRandomPokemons";
import RandomTypes from "./component/ComponentRandomTypes";
import { Link } from 'react-router-dom';

import './css/style.css'; // Assurez-vous d'importer le bon fichier CSS

function Home() {
  const [search, setSearch] = useState("");

  const handleSearch = (query) => {
    setSearch(query);
    console.log(`Recherche : ${query}`);
  };

  return (
    <>
      <Header />
      
      <div className="link-container">
        <Link to={"/DisplayPokemon"} className="styled-link">Pokémon du moment</Link>
        <RandomPokemons />
      </div>

      <div className="link-container">
        <Link to={"/DisplayAllTypes"} className="styled-link">Type de pokémon</Link>
        <RandomTypes />
      </div>
    </>
  );
}

export default Home;
