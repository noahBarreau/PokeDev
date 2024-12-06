import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Home";
import DisplayAllTypes from "./DisplayAllTypes";
import DisplayPokemon from "./DisplayPokemon";
import AllPokemonByTypes from "./AllPokemonByTypes";

import './css/style.css';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/DisplayPokemon" element={<DisplayPokemon />} />
          <Route path="/DisplayAllTypes" element={<DisplayAllTypes />} />
          <Route path="/AllPokemonByTypes" element={<AllPokemonByTypes />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
