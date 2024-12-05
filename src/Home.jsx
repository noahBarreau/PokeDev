import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Header from "./Header";
import RandomPokemons from "./RandomPokemons";
import RandomTypes from "./RandomTypes";
import { Link } from 'react-router-dom';

import './css/style.css';

function App() {

  const [search, setSearch] = useState("");

  const handleSearch = (query) => {
    setSearch(query);
    console.log(`Recherche : ${query}`);
  };
  return (
    <>
      <Header />

      <div>
        <h2>Résultats pour : {search}</h2>
        {/* Ajoutez ici la logique pour filtrer ou afficher les résultats */}
      </div>

      <Link to={"/AllPokemons"}>Pokémon du moment</Link>
      <RandomPokemons/>
      <br></br>
      <h1>Type de pokémon</h1>
      <RandomTypes/>
    </>
  )
}

export default App
