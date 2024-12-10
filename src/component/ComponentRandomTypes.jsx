import React from "react";
import { Link } from 'react-router-dom';
import useRandomTypes from '../Hook/useRandomTypes';
import '../css/style.css';

const ComponentRandomTypes = () => {
  const { randomTypes, isError } = useRandomTypes();

  if (isError) {
    return <p>Il y a eu une erreur de chargement. Veuillez rafraîchir la page.</p>;
  }

  if (!randomTypes.length) {
    return <p>Chargement des types...</p>;
  }

  return (
    <section className="pokemon-container">
      {randomTypes.map((type) => (
        <Link key={type.id} to={`/AllPokemonByTypes?type=${type.name}`}>
          <article className="pokemon-card">
            <div className="pokemon-header">
              <p className="pokemon-name">{type.name}</p>
            </div>
            <img className="pokemon-image" src={type.image} alt={type.name} />
          </article>
        </Link>
      ))}
    </section>
  );
};

export default ComponentRandomTypes;
