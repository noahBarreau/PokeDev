import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Header from "./Header";
import AllPokemons from "./AllPokemons";

import './css/style.css';

function App() {

  return (
    <>
      <Header />

      <Link to="/all-pokemons">Tous les Pokémons</Link>
      <AllPokemons/>
    </>
  )
}

export default App
