import Header from "../Header";
import PokemonByGen from "../component/ComponentPokemonByGen";
import { useLocation, useNavigate } from "react-router-dom";

import '../css/style.css';

function DisplayPokemonByGen() {
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const currentGen = parseInt(params.get('gen')) || 1;
  const handleGenChange = (gen) => {
    navigate(`?gen=${gen}`);
  };

  return (
    <>
      <Header />
      
      <div className="gen-nav">
        {[...Array(8)].map((_, index) => {
          const gen = index + 1;
          return (
            <button
              key={gen}
              onClick={() => handleGenChange(gen)}
              className={`gen-nav-button ${currentGen === gen ? 'active' : ''}`}
            >
              Génération {gen}
            </button>
          );
        })}
      </div>

      <div className="gens-container">
        {[...Array(8)].map((_, index) => {
          const gen = index + 1;
          return (
            currentGen === gen && (
              <section key={gen} className="gen-section">
                <h2>Génération {gen}</h2>
                <PokemonByGen gen={gen} />
              </section>
            )
          );
        })}
      </div>
    </>
  );
}

export default DisplayPokemonByGen;
