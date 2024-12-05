import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Home";
import AllPokemonsPage from "./AllPokemonsPage";

import './css/style.css';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/AllPokemonsPage" element={<AllPokemonsPage />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
