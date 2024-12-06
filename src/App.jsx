import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Home";
import DisplayAllTypes from "./DisplayAllTypes";
import DisplayPokemon from "./DisplayPokemon";
import AllPokemonByTypes from "./AllPokemonByTypes";
import DisplayPokemonByGen from "./DisplayPokemonByGen";


import './css/style.css';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/DisplayPokemon" element={<DisplayPokemon />} />
          <Route path="/DisplayAllTypes" element={<DisplayAllTypes />} />
          <Route path="/AllPokemonByTypes" element={<AllPokemonByTypes />} />
          <Route path="/DisplayPokemonByGen" element={<DisplayPokemonByGen />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
