import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Home";
import AllPokemons from "./AllPokemonsPage";

import './css/style.css';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/AllPokemons" element={<AllPokemons />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
