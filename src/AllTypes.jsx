import { useEffect, useState } from "react";
import './css/style.css';
import { Link } from 'react-router-dom';

const PokemonTypes = () => {
  const [types, setTypes] = useState(null);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetch("https://pokebuildapi.fr/api/v1/types")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setTypes(data);
      })
      .catch(() => {
        setIsError(true);
      });
  }, []);

  if (isError) {
    return <p>Il y a eu une erreur de chargement. Veuillez rafraichir la page</p>;
  }
  return (

    <section className="pokemon-container">
      {types?.map((type) => {
          return (
            <Link to={`/AllPokemonByTypes?type=${type.name}`}>
            <article key={type.id} className="pokemon-card">
              <div className="pokemon-header">
                <p className="pokemon-name">{type.name}</p>
              </div>
              <img className="pokemon-image" src={type.image} alt={type.name} />
            </article>
            </Link>
          );
      })}
    </section>
  );  
};

export default PokemonTypes;