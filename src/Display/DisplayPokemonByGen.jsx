import Header from "../Header";
import PokemonByGen from "../component/ComponentPokemonByGen";
import { useLocation } from "react-router-dom";

import '../css/style.css';

function App() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  return (
    <>
      <Header />
      <div className="gens-container">
        {[...Array(8)].map((_, index) => {
          const gen = index + 1; // Générations de 1 à 8
          return (
            <section key={gen} className="gen-section">
              <h2>Génération {gen}</h2>
              <PokemonByGen gen={gen} />
            </section>
          );
        })}
      </div>
    </>
  );
}

export default App;
