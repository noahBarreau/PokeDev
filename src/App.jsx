import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Home";
import DisplayAllTypes from "./Display/DisplayAllTypes";
import DisplayPokemon from "./Display/DisplayPokemon";
import AllPokemonByTypes from "./AllPokemonByTypes";
import DisplayPokemonByGen from "./Display/DisplayPokemonByGen";
import DisplayRandomPokemonDetail from "./Display/DisplayRandomPokemonDetail";
import DisplayPokemonByName from "./Display/DisplayPokemonByName";
import DisplayFight from "./Display/DisplayFight";


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
          <Route path="/DisplayRandomPokemonDetail" element={<DisplayRandomPokemonDetail />} />
          <Route path="/DisplayPokemonByName" element={<DisplayPokemonByName />} />
          <Route path="/DisplayFight" element={<DisplayFight />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
